cc.Class({
    extends: require('./textureRenderUtils'),
    properties: {
        srpite: cc.Sprite,
        iconBg: cc.Node,
    },
    start() {
        this.label.node.active = false;
        this.init();
    },
    save () {
        this.createCanvas();
        var img = this.createImg();
        this.showImage(img);
        this.iconBg.active = true;
        this.label.node.active = true;
    },

    hide() {
        if (this._img) {
            this._img.remove();    
        }
        this.label.node.active = false;
        this.iconBg.active = false;
    }
});
