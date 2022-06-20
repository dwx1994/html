(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
require('./jsb-reflection.js');

require('./jsb-assets-manager.js');

require('./jsb-sys.js');

require('./jsb-game.js');

require('./jsb-loader.js'); // require('./jsb-videoplayer.js');
// require('./jsb-webview.js');


require('./jsb-audio.js');

require('./jsb-editbox.js');

},{"./jsb-assets-manager.js":2,"./jsb-audio.js":3,"./jsb-editbox.js":4,"./jsb-game.js":5,"./jsb-loader.js":6,"./jsb-reflection.js":7,"./jsb-sys.js":8}],2:[function(require,module,exports){
"use strict";

/*
 * Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
if (jsb.AssetsManager) {
  jsb.AssetsManager.State = {
    UNINITED: 0,
    UNCHECKED: 1,
    PREDOWNLOAD_VERSION: 2,
    DOWNLOADING_VERSION: 3,
    VERSION_LOADED: 4,
    PREDOWNLOAD_MANIFEST: 5,
    DOWNLOADING_MANIFEST: 6,
    MANIFEST_LOADED: 7,
    NEED_UPDATE: 8,
    READY_TO_UPDATE: 9,
    UPDATING: 10,
    UNZIPPING: 11,
    UP_TO_DATE: 12,
    FAIL_TO_UPDATE: 13
  };
  jsb.Manifest.DownloadState = {
    UNSTARTED: 0,
    DOWNLOADING: 1,
    SUCCESSED: 2,
    UNMARKED: 3
  };
  jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST = 0;
  jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST = 1;
  jsb.EventAssetsManager.ERROR_PARSE_MANIFEST = 2;
  jsb.EventAssetsManager.NEW_VERSION_FOUND = 3;
  jsb.EventAssetsManager.ALREADY_UP_TO_DATE = 4;
  jsb.EventAssetsManager.UPDATE_PROGRESSION = 5;
  jsb.EventAssetsManager.ASSET_UPDATED = 6;
  jsb.EventAssetsManager.ERROR_UPDATING = 7;
  jsb.EventAssetsManager.UPDATE_FINISHED = 8;
  jsb.EventAssetsManager.UPDATE_FAILED = 9;
  jsb.EventAssetsManager.ERROR_DECOMPRESS = 10;
}

},{}],3:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

const AudioPlayer = cc.internal.AudioPlayer;
const {
  PlayingState,
  AudioType
} = cc.AudioClip;

cc.AudioClip.prototype._getPlayer = function (clip) {
  this._loadMode = AudioType.JSB_AUDIO;
  return AudioPlayerJSB;
};

class AudioPlayerJSB extends AudioPlayer {
  constructor(info) {
    super(info);
    this._startTime = 0;
    this._offset = 0;
    this._volume = 1;
    this._loop = false;
    this._url = info.clip;
    this._audio = -1;
    this._onEnded = this._onEnded.bind(this);
  }

  play() {
    if (this._state === PlayingState.PLAYING) {
      return;
    }

    if (this._blocking) {
      this._interrupted = true;
      return;
    }

    this._doPlay(); // delay eval here to yield uniform behavior with other platforms


    cc.director.once(cc.Director.EVENT_AFTER_UPDATE, this._onPlay, this);
  }

  pause() {
    if (this._audio < 0 || this._state !== PlayingState.PLAYING) {
      return;
    }

    jsb.AudioEngine.pause(this._audio);

    this._onPause();
  }

  stop() {
    if (this._audio < 0) {
      return;
    }

    jsb.AudioEngine.stop(this._audio);
    this._audio = -1;

    this._onStop();
  }

  playOneShot(volume) {
    if (volume === undefined) {
      volume = 1;
    }

    jsb.AudioEngine.play(this._url, false, volume);
  }

  getCurrentTime() {
    if (this._state !== PlayingState.PLAYING) {
      return this._offset / 1000;
    }

    let current = (performance.now() - this._startTime + this._offset) / 1000;

    while (current > this._duration) {
      if (this._loop) {
        current -= this._duration;
        this._startTime += this._duration * 1000;
      } else current = 0; // onEnded callback may lag behind a few frames

    }

    return current;
  }

  setCurrentTime(val) {
    if (this._audio < 0) {
      return;
    }

    val = cc.math.clamp(val, 0, this._duration);
    jsb.AudioEngine.setCurrentTime(this._audio, val);
    this._offset = val * 1000;
    this._startTime = performance.now();
  }

  getVolume() {
    return this._volume;
  }

  setVolume(val, immediate) {
    this._volume = val;

    if (this._audio >= 0) {
      jsb.AudioEngine.setVolume(this._audio, val);
    }
  }

  getLoop() {
    return this._loop;
  }

  setLoop(val) {
    this._loop = val;

    if (this._audio >= 0) {
      jsb.AudioEngine.setLoop(this._audio, val);
    }
  }

  destroy() {
    if (this._audio >= 0) {
      jsb.AudioEngine.uncache(this._url);
      this._audio = -1;
    }

    super.destroy();
  }

  _doPlay() {
    if (this._audio >= 0) jsb.AudioEngine.resume(this._audio);else {
      this._audio = jsb.AudioEngine.play(this._url, this._loop, this._volume);
      jsb.AudioEngine.setErrorCallback(this._audio, console.error);
      jsb.AudioEngine.setFinishCallback(this._audio, this._onEnded);
    }
  }

  _onPlay() {
    if (this._state === PlayingState.PLAYING) {
      return;
    }

    this._state = PlayingState.PLAYING;
    this._startTime = performance.now();

    this._eventTarget.emit('started');
  }

  _onPause() {
    if (this._state === PlayingState.STOPPED) {
      return;
    }

    this._state = PlayingState.STOPPED;
    this._offset += performance.now() - this._startTime;
  }

  _onStop() {
    this._offset = 0;

    if (this._state === PlayingState.STOPPED) {
      return;
    }

    this._state = PlayingState.STOPPED;
  }

  _onEnded() {
    this._offset = 0;
    this._audio = -1;

    if (this._state === PlayingState.STOPPED) {
      return;
    }

    this._state = PlayingState.STOPPED;

    this._eventTarget.emit('ended');
  }

}

},{}],4:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
(function () {
  if (!(cc && cc.EditBoxComponent)) {
    return;
  }

  const EditBox = cc.EditBoxComponent;
  const js = cc.js;
  const KeyboardReturnType = EditBox.KeyboardReturnType;
  const InputMode = EditBox.InputMode;
  const InputFlag = EditBox.InputFlag;
  let worldMat = cc.mat4();

  function getInputType(type) {
    switch (type) {
      case InputMode.EMAIL_ADDR:
        return 'email';

      case InputMode.NUMERIC:
      case InputMode.DECIMAL:
        return 'number';

      case InputMode.PHONE_NUMBER:
        return 'phone';

      case InputMode.URL:
        return 'url';

      case InputMode.SINGLE_LINE:
      case InputMode.ANY:
      default:
        return 'text';
    }
  }

  function getKeyboardReturnType(type) {
    switch (type) {
      case KeyboardReturnType.DEFAULT:
      case KeyboardReturnType.DONE:
        return 'done';

      case KeyboardReturnType.SEND:
        return 'send';

      case KeyboardReturnType.SEARCH:
        return 'search';

      case KeyboardReturnType.GO:
        return 'go';

      case KeyboardReturnType.NEXT:
        return 'next';
    }

    return 'done';
  }

  const BaseClass = EditBox._EditBoxImpl;

  function JsbEditBoxImpl() {
    // Manual construction
    this._editing = false;
    this._delegate = null;
  }

  js.extend(JsbEditBoxImpl, BaseClass);
  EditBox._EditBoxImpl = JsbEditBoxImpl;
  Object.assign(JsbEditBoxImpl.prototype, {
    init(delegate) {
      if (!delegate) {
        cc.error('EditBox init failed');
        return;
      }

      this._delegate = delegate;
    },

    beginEditing() {
      let self = this;
      let delegate = this._delegate;
      let multiline = delegate.inputMode === InputMode.ANY;

      let rect = this._getRect();

      this.setMaxLength(delegate.maxLength);
      let inputTypeString = getInputType(delegate.inputMode);

      if (delegate.inputFlag === InputFlag.PASSWORD) {
        inputTypeString = 'password';
      }

      function onConfirm(res) {
        delegate._editBoxEditingReturn();
      }

      function onInput(res) {
        if (res.value.length > self._maxLength) {
          res.value = res.value.slice(0, self._maxLength);
        }

        if (delegate.string !== res.value) {
          delegate._editBoxTextChanged(res.value);
        }
      }

      function onComplete(res) {
        self.endEditing();
        jsb.inputBox.offConfirm(onConfirm);
        jsb.inputBox.offInput(onInput);
        jsb.inputBox.offComplete(onComplete);
      }

      jsb.inputBox.onInput(onInput);
      jsb.inputBox.onConfirm(onConfirm);
      jsb.inputBox.onComplete(onComplete);

      if (!cc.sys.isMobile) {
        delegate._hideLabels();
      }

      jsb.inputBox.show({
        defaultValue: delegate.string,
        maxLength: self._maxLength,
        multiple: multiline,
        confirmHold: false,
        confirmType: getKeyboardReturnType(delegate.returnType),
        inputType: inputTypeString,
        originX: rect.x,
        originY: rect.y,
        width: rect.width,
        height: rect.height
      });
      this._editing = true;

      delegate._editBoxEditingDidBegan();
    },

    endEditing() {
      this._editing = false;

      if (!cc.sys.isMobile) {
        this._delegate._showLabels();
      }

      jsb.inputBox.hide();

      this._delegate._editBoxEditingDidEnded();
    },

    setMaxLength(maxLength) {
      if (!isNaN(maxLength)) {
        if (maxLength < 0) {
          //we can't set Number.MAX_VALUE to input's maxLength property
          //so we use a magic number here, it should works at most use cases.
          maxLength = 65535;
        }

        this._maxLength = maxLength;
      }
    },

    _getRect() {
      let node = this._delegate.node;
      let viewScaleX = cc.view._scaleX;
      let viewScaleY = cc.view._scaleY;
      let dpr = cc.view._devicePixelRatio;
      node.getWorldMatrix(worldMat);
      let transform = node._uiProps.uiTransformComp;
      let vec3 = cc.v3();
      let width = 0;
      let height = 0;

      if (transform) {
        const contentSize = transform.contentSize;
        const anchorPoint = transform.anchorPoint;
        width = contentSize.width;
        height = contentSize.height;
        vec3.x = -anchorPoint.x * width;
        vec3.y = -anchorPoint.y * height;
      }

      cc.Mat4.translate(worldMat, worldMat, vec3);
      viewScaleX /= dpr;
      viewScaleY /= dpr;
      let finalScaleX = worldMat.m00 * viewScaleX;
      let finaleScaleY = worldMat.m05 * viewScaleY;
      let viewportRect = cc.view._viewportRect;
      let offsetX = viewportRect.x / dpr,
          offsetY = viewportRect.y / dpr;
      return {
        x: worldMat.m12 * viewScaleX + offsetX,
        y: worldMat.m13 * viewScaleY + offsetY,
        width: width * finalScaleX,
        height: height * finaleScaleY
      };
    }

  });
})();

},{}],5:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
cc.game.restart = function () {
  __restartVM();
};

jsb.onHide = function () {
  cc.game.emit(cc.Game.EVENT_HIDE);
};

jsb.onShow = function () {
  cc.game.emit(cc.Game.EVENT_SHOW);
};

jsb.onResize = function (size) {
  if (size.width === 0 || size.height === 0) return; // getSafeAreaEdge is asynchronous on iOS, so callback later is required

  if (CC_JSB && cc.sys.os === cc.sys.OS_IOS) {
    let edges = jsb.Device.getSafeAreaEdge();
    let hasSafeArea = edges.x > 0 || edges.y > 0 || edges.z > 0 || edges.w > 0;

    if (hasSafeArea) {
      setTimeout(() => {
        if (cc.Vec4.strictEquals(edges, jsb.Device.getSafeAreaEdge())) {
          setTimeout(resize, 200, size);
        } else {
          resize(size);
        }
      }, 0);
      return;
    }
  }

  window.resize(size.width, size.height);
};

},{}],6:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

function downloadScript(item, callback) {
  require(item.url);

  return null;
}

let audioDownloader = new jsb.Downloader();
let audioUrlMap = {}; // key: url, value: { loadingItem, callback }

audioDownloader.setOnFileTaskSuccess(task => {
  let {
    item,
    callback
  } = audioUrlMap[task.requestURL];

  if (!(item && callback)) {
    return;
  }

  item.url = task.storagePath;
  item.rawUrl = task.storagePath;
  callback(null, item);
  delete audioUrlMap[task.requestURL];
});
audioDownloader.setOnTaskError((task, errorCode, errorCodeInternal, errorStr) => {
  let {
    callback
  } = audioUrlMap[task.requestURL];
  callback && callback(errorStr, null);
  delete audioUrlMap[task.requestURL];
});

function downloadAudio(item, callback) {
  if (/^http/.test(item.url)) {
    let index = item.url.lastIndexOf('/');
    let fileName = item.url.substr(index + 1);
    let storagePath = jsb.fileUtils.getWritablePath() + fileName; // load from local cache

    if (jsb.fileUtils.isFileExist(storagePath)) {
      item.url = storagePath;
      item.rawUrl = storagePath;
      callback && callback(null, item);
    } // download remote audio
    else {
        audioUrlMap[item.url] = {
          item,
          callback
        };
        audioDownloader.createDownloadFileTask(item.url, storagePath);
      } // Don't return anything to use async loading.

  } else {
    return item.url;
  }
}

function loadAudio(item, callback) {
  var loadByDeserializedAsset = item._owner instanceof cc.AudioClip;

  if (loadByDeserializedAsset) {
    return item.url;
  } else {
    var audioClip = new cc.AudioClip(); // obtain user url through nativeUrl

    audioClip._setRawAsset(item.rawUrl, false); // obtain download url through _nativeAsset


    audioClip._nativeAsset = item.url;
    return audioClip;
  }
}

function downloadImage(item, callback) {
  let img = new Image();
  img.src = item.url;

  img.onload = function (info) {
    callback(null, img);
  }; // Don't return anything to use async loading.

}

function _getFontFamily(fontHandle) {
  var ttfIndex = fontHandle.lastIndexOf(".ttf");
  if (ttfIndex === -1) return fontHandle;
  var slashPos = fontHandle.lastIndexOf("/");
  var fontFamilyName;

  if (slashPos === -1) {
    fontFamilyName = fontHandle.substring(0, ttfIndex) + "_LABEL";
  } else {
    fontFamilyName = fontHandle.substring(slashPos + 1, ttfIndex) + "_LABEL";
  }

  if (fontFamilyName.indexOf(' ') !== -1) {
    fontFamilyName = '"' + fontFamilyName + '"';
  }

  return fontFamilyName;
}

function downloadText(item) {
  var url = item.url;
  var result = jsb.fileUtils.getStringFromFile(url);

  if (typeof result === 'string' && result) {
    result = result.replace(/\\r\\n/g, '\\n');
    return result;
  } else {
    return new Error('Download text failed: ' + url);
  }
}

function downloadBinary(item) {
  var url = item.url;
  var result = jsb.fileUtils.getDataFromFile(url);

  if (result) {
    return result;
  } else {
    return new Error('Download binary file failed: ' + url);
  }
}

function loadFont(item, callback) {
  let url = item.url;

  let fontFamilyName = _getFontFamily(url);

  let fontFace = new FontFace(fontFamilyName, "url('" + url + "')");
  document.fonts.add(fontFace);
  fontFace.load();
  fontFace.loaded.then(function () {
    callback(null, fontFamilyName);
  }, function () {
    cc.warnID(4933, fontFamilyName);
    callback(null, fontFamilyName);
  });
}

function loadCompressedTex(item) {
  return item.content;
}

cc.loader.addDownloadHandlers({
  // JS
  'js': downloadScript,
  'jsc': downloadScript,
  // Images
  'png': downloadImage,
  'jpg': downloadImage,
  'bmp': downloadImage,
  'jpeg': downloadImage,
  'gif': downloadImage,
  'ico': downloadImage,
  'tiff': downloadImage,
  'webp': downloadImage,
  'image': downloadImage,
  'pvr': downloadImage,
  'pkm': downloadImage,
  'astc': downloadImage,
  // Audio
  'mp3': downloadAudio,
  'ogg': downloadAudio,
  'wav': downloadAudio,
  'mp4': downloadAudio,
  'm4a': downloadAudio,
  // Text
  'txt': downloadText,
  'xml': downloadText,
  'vsh': downloadText,
  'fsh': downloadText,
  'atlas': downloadText,
  'tmx': downloadText,
  'tsx': downloadText,
  'json': downloadText,
  'ExportJson': downloadText,
  'plist': downloadText,
  'fnt': downloadText,
  'binary': downloadBinary,
  'bin': downloadBinary,
  'dbbin': downloadBinary,
  'default': downloadText
});
cc.loader.addLoadHandlers({
  // Font
  'font': loadFont,
  'eot': loadFont,
  'ttf': loadFont,
  'woff': loadFont,
  'svg': loadFont,
  'ttc': loadFont,
  // Audio
  'mp3': loadAudio,
  'ogg': loadAudio,
  'wav': loadAudio,
  'mp4': loadAudio,
  'm4a': loadAudio,
  // compressed texture
  'pvr': loadCompressedTex,
  'pkm': loadCompressedTex,
  'astc': loadCompressedTex
});

},{}],7:[function(require,module,exports){
"use strict";

/****************************************************************************
 Copyright (c) 2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
// JS to Native bridges
if (window.JavascriptJavaBridge && cc.sys.os == cc.sys.OS_ANDROID) {
  jsb.reflection = new JavascriptJavaBridge();
  cc.sys.capabilities["keyboard"] = true;
} else if (window.JavaScriptObjCBridge && (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_OSX)) {
  jsb.reflection = new JavaScriptObjCBridge();
}

},{}],8:[function(require,module,exports){
/****************************************************************************
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and  non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

const sys = cc.sys;
sys.getNetworkType = jsb.Device.getNetworkType;
sys.getBatteryLevel = jsb.Device.getBatteryLevel;
sys.garbageCollect = jsb.garbageCollect;
sys.restartVM = __restartVM;
sys.isObjectValid = __isObjectValid;

sys.getSafeAreaRect = function () {
  // x(top), y(left), z(bottom), w(right)
  var edge = jsb.Device.getSafeAreaEdge();
  var screenSize = cc.view.getFrameSize(); // Get leftBottom and rightTop point in UI coordinates

  var leftBottom = new cc.Vec2(edge.y, screenSize.height - edge.z);
  var rightTop = new cc.Vec2(screenSize.width - edge.w, edge.x); // Returns the real location in view.

  var relatedPos = {
    left: 0,
    top: 0,
    width: screenSize.width,
    height: screenSize.height
  };
  cc.view.convertToLocationInView(leftBottom.x, leftBottom.y, relatedPos, leftBottom);
  cc.view.convertToLocationInView(rightTop.x, rightTop.y, relatedPos, rightTop); // convert view point to design resolution size

  cc.view._convertPointWithScale(leftBottom);

  cc.view._convertPointWithScale(rightTop);

  return cc.rect(leftBottom.x, leftBottom.y, rightTop.x - leftBottom.x, rightTop.y - leftBottom.y);
};

},{}]},{},[1]);
