"use strict";
cc._RF.push(module, 'ea78fiyxKhBAolKr2pinbQV', 'SpriteIndex');
// script/SpriteIndex.js

'use strict';

/**
 * 精灵切换
 */

cc.Class({
    extends: cc.Component,
    editor: {
        menu: '【奎特尔】通用组件/SpriteIndex(图片切换)'
    },
    properties: {
        spriteFrames: [cc.SpriteFrame],

        _index: 0,
        index: {
            type: cc.Integer,
            set: function set(value) {
                if (value < 0) {
                    return;
                }
                this._index = value % this.spriteFrames.length;
                var sprite = this.node.getComponent(cc.Sprite);
                sprite.spriteFrame = this.spriteFrames[this._index];
            },
            get: function get() {
                return this._index;
            }
        }
    },

    next: function next(sender, custom) {
        if (custom) {
            this.index = parseInt(custom);
        } else {
            this.index++;
        }
    }
});

cc._RF.pop();