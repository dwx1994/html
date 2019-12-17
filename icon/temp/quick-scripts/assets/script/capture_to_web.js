(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/capture_to_web.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ac74J4RCNKq6XeV8GboJXx', 'capture_to_web', __filename);
// script/capture_to_web.js

'use strict';

cc.Class({
    extends: require('./textureRenderUtils'),
    properties: {
        srpite: cc.Sprite,
        iconBg: cc.Node
    },
    start: function start() {
        this.label.node.active = false;
        this.init();
    },
    save: function save() {
        this.createCanvas();
        var img = this.createImg();
        this.showImage(img);
        this.iconBg.active = true;
        this.label.node.active = true;
    },
    hide: function hide() {
        if (this._img) {
            this._img.remove();
        }
        this.label.node.active = false;
        this.iconBg.active = false;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=capture_to_web.js.map
        