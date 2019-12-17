"use strict";
cc._RF.push(module, '5ac74J4RCNKq6XeV8GboJXx', 'capture_to_web');
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