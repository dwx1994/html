
(function () {
    if (typeof window.jsb === 'object') {
        var hotUpdateSearchPaths = localStorage.getItem('HotUpdateSearchPaths');
        if (hotUpdateSearchPaths) {
            var paths = JSON.parse(hotUpdateSearchPaths);
            jsb.fileUtils.setSearchPaths(paths);

            var fileList = [];
            var storagePath = paths[0] || '';
            var tempPath = storagePath + '_temp/';
            var baseOffset = tempPath.length;

            if (jsb.fileUtils.isDirectoryExist(tempPath) && !jsb.fileUtils.isFileExist(tempPath + 'project.manifest.temp')) {
                jsb.fileUtils.listFilesRecursively(tempPath, fileList);
                fileList.forEach(srcPath => {
                    var relativePath = srcPath.substr(baseOffset);
                    var dstPath = storagePath + relativePath;

                    if (srcPath[srcPath.length] == '/') {
                        jsb.fileUtils.createDirectory(dstPath)
                    }
                    else {
                        if (jsb.fileUtils.isFileExist(dstPath)) {
                            jsb.fileUtils.removeFile(dstPath)
                        }
                        jsb.fileUtils.renameFile(srcPath, dstPath);
                    }
                })
                jsb.fileUtils.removeDirectory(tempPath);
            }
        }
    }
})();
// SystemJS support.
window.self = window;
require("src/system.bundle.js");

const importMapJson = jsb.fileUtils.getStringFromFile("src/import-map.json");
const importMap = JSON.parse(importMapJson);
const baseUrlSchema = 'no-schema:';
System.patches.setBaseUrl(`${baseUrlSchema}`);
System.patches.setImportMap(importMap, `${baseUrlSchema}src/import-map.json`);
System.patches.hookInstantiationOverSchema(baseUrlSchema, function(urlNoSchema) {
    require(urlNoSchema);
    return this.getRegister();
});

System.import('./src/application.js').then(({ createApplication }) => {
    return createApplication({
        loadJsListFile: (url) => require(url),
    });
}).then((application) => {
    return application.import('cc').then((cc) => {
        cc.macro.CLEANUP_IMAGE_CACHE = true;
        require('jsb-adapter/jsb-engine.js');
    }).then(() => {
        return application.start({
            settings: window._CCSettings,
            findCanvas: () => {
                var container = document.createElement('div');
                var frame = document.documentElement;
                var canvas = window.__canvas;
                return { frame, canvas, container };
            },
        });
    });
}).catch((err) => {
    console.error(err.toString());
});
