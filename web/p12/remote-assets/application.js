System.register([], function (_export, _context) {
  "use strict";

  function createApplication({
    loadJsListFile,
    moduleLoader,
    ammoJsFallback,
    loadAmmoJsWasmBinary
  }) {
    /**
     * There are restrictions on some platform that we can not use `System` as System JS global.
     * The well-known platform is Baidu.
     * Baidu uses webpack as their pack tool. Webpack by default recognize and transform
     * `System.import`, `System.register` calls.
     * However Baidu does not provide a mechanism to config webpack.
     * So this HACK comes.
     */
    const System = globalThis.System;

    if (moduleLoader) {
      initializeModuleLoader(System, moduleLoader);
    } // NOTE: before here we shall not import any module!


    let promise = Promise.resolve();
    return promise.then(() => {
      return {
        start,
        ['import']: topLevelImport
      };
    });

    function start({
      findCanvas
    }) {
      let settings;
      let cc;
      return Promise.resolve().then(() => topLevelImport('cc')).then(engine => {
        cc = engine;
        return loadSettingsJson(cc);
      }).then(() => {
        settings = window._CCSettings;
        return initializeGame(cc, settings, findCanvas).then(() => {
          if (settings.scriptPackages) {
            return loadModulePacks(settings.scriptPackages);
          }
        }).then(() => loadJsList(settings.jsList)).then(() => topLevelImport('virtual:///prerequisite-imports:main')).then(() => cc.game.run(() => onGameStarted(cc, settings)));
      });
    }

    function topLevelImport(url) {
      return System.import(url);
    }

    function loadModulePacks(packs) {
      return Promise.all(packs.map(pack => topLevelImport(pack)));
    }

    function loadJsList(jsList) {
      let promise = Promise.resolve();
      jsList.forEach(jsListFile => {
        promise = promise.then(() => loadJsListFile(`src/${jsListFile}`));
      });
      return promise;
    }

    function loadSettingsJson(cc) {
      return new Promise((resolve, reject) => {
        cc.loader.load('./res/settings.0d3b3.json', (err, json) => {
          if (err) {
            return reject(err);
          }

          window._CCSettings = json;
          resolve(json);
        });
      });
    }
  }

  function initializeGame(cc, settings, findCanvas) {
    if (settings.macros) {
      for (let key in settings.macros) {
        cc.macro[key] = settings.macros[key];
      }
    }

    const gameOptions = getGameOptions(settings, findCanvas);
    const success = cc.game.init(gameOptions);
    return success ? Promise.resolve() : Promise.reject();
  }

  function onGameStarted(cc, settings) {
    window._CCSettings = undefined;
    cc.loader.downloader._subpackages = settings.subpackages;
    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);
    const launchScene = settings.launchScene; // load scene
    //调用sdk 初始化开始 state 1.开始初始化, 2.初始化成功, 3.初始化失败
    var version = localStorage.getItem(`resVersion`);
    if(!version){
        version = `1.0.0`;
    }
    window.CocosBridge.sendToNative(`onStateChanged`,{type:1,state:1,value:version});
    cc.director.loadScene(launchScene, null, function () {
      cc.view.setDesignResolutionSize(720, 1280, 3);
      cc.loader.onProgress = null;
      //调用sdk 初始化完成
      // window.CocosBridge.sendToNative(`onStateChanged`,{type:1,state:2});
      console.log(`Success to load scene: ${launchScene}`);
    });
  }


  function getGameOptions(settings, findCanvas) {
    const uuids = settings.uuids;
    const rawAssets = settings.rawAssets;
    const assetTypes = settings.assetTypes;
    const realRawAssets = settings.rawAssets = {};

    for (const mount in rawAssets) {
      const entries = rawAssets[mount];
      const realEntries = realRawAssets[mount] = {};

      for (const id in entries) {
        const entry = entries[id];
        const type = entry[1]; // retrieve minified raw asset

        if (typeof type === 'number') {
          entry[1] = assetTypes[type];
        } // retrieve uuid


        realEntries[uuids[id] || id] = entry;
      }
    }

    const scenes = settings.scenes;

    for (let i = 0; i < scenes.length; ++i) {
      const scene = scenes[i];

      if (typeof scene.uuid === 'number') {
        scene.uuid = uuids[scene.uuid];
      }
    }

    const packedAssets = settings.packedAssets;

    for (const packId in packedAssets) {
      const packedIds = packedAssets[packId];

      for (let j = 0; j < packedIds.length; ++j) {
        if (typeof packedIds[j] === 'number') {
          packedIds[j] = uuids[packedIds[j]];
        }
      }
    }

    const subpackages = settings.subpackages;

    for (const subId in subpackages) {
      const uuidArray = subpackages[subId].uuids;

      if (uuidArray) {
        for (let k = 0, l = uuidArray.length; k < l; k++) {
          if (typeof uuidArray[k] === 'number') {
            uuidArray[k] = uuids[uuidArray[k]];
          }
        }
      }
    } // asset library options


    const assetOptions = {
      libraryPath: 'res/import',
      rawAssetsBase: 'res/raw-',
      rawAssets: settings.rawAssets,
      packedAssets: settings.packedAssets,
      md5AssetsMap: settings.md5AssetsMap,
      subPackages: settings.subpackages
    };
    const options = {
      scenes: settings.scenes,
      debugMode: settings.debug ? 1 : 3,
      // cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
      showFPS: !false && settings.debug,
      frameRate: 60,
      groupList: settings.groupList,
      collisionMatrix: settings.collisionMatrix,
      renderPipeline: settings.renderPipeline,
      adapter: findCanvas('GameCanvas'),
      assetOptions,
      customJointTextureLayouts: settings.customJointTextureLayouts || []
    };
    return options;
  }

  function initializeModuleLoader(System, {
    importMap,
    importMapBaseUrl,
    execMap,
    execNoSchema
  }) {
    const noSchemaPlaceholder = 'no-schema:';
    const systemJsPrototype = System.constructor.prototype;
    const baseUrlSchema = importMapBaseUrl || noSchemaPlaceholder;
    System.patches.setBaseUrl(`${baseUrlSchema}/`);
    System.patches.setImportMap(importMap);

    if (execNoSchema) {
      System.patches.hookInstantiationOverSchema(noSchemaPlaceholder, function (urlNoSchema, firstParentUrl) {
        execNoSchema.call(this, urlNoSchema, firstParentUrl);
        return this.getRegister();
      });
    }

    if (execMap) {
      for (const schema in execMap) {
        const exec = execMap[schema];
        System.patches.hookInstantiationOverSchema(schema, function (urlNoSchema, firstParentUrl) {
          exec.call(this, urlNoSchema, firstParentUrl);
          return this.getRegister();
        });
      }
    }
  }

  _export("createApplication", createApplication);

  return {
    setters: [],
    execute: function () {}
  };
});