cc.Class({
    extends: cc.Component,

    properties: {
        camera: cc.Camera,
        label: cc.Label,
        spriteFrames: [cc.Sprite],
        _canvas: null,
    },

    init() {
        const spriteFramesComp = cc.find(`Mask/content/headImage`,this.node).getComponent(`SpriteIndex`);
        // this.label.string = '';
        let texture = new cc.RenderTexture();
        let gl = cc.game._renderContext;

        let size = this.srpite.node.getContentSize();
        texture.initWithSize(size.width, size.height, gl.STENCIL_INDEX8);
        this.camera.targetTexture = texture;
        this.texture = texture;
        let input = document.createElement("input");
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.setAttribute('style', 'position:absolute;margin-left:30%;margin-top:50px;-webkit-user-select:file')

        document.getElementsByTagName('body')[0].appendChild(input);

        let oninput = (e) => {
           
            var file = e.target.files[0],//拿到原始对象
        
            reader = new FileReader();

            //readAsDataURL(file),读取文件，将文件以数据URL的形式保存在result的属性中
            reader.readAsDataURL(file);
            //文件加载成功以后，渲染到页面
            reader.onload = (e)=> {
             
                var img = document.createElement("img");
                img.src = e.target.result;
                let texture = new cc.Texture2D();
                texture._nativeAsset = img;
                texture.on('load', () => {
                    this.srpite.spriteFrame = new cc.SpriteFrame(texture);  
                })
            }
        }
        input.addEventListener('change', oninput);
        //input.addEventListener('input', oninput);
        // input.onpropertychange = oninput;
        // input.oninput = oninput;


        //替换样式1
        let input1 = document.createElement("input");
        input1.setAttribute('type', 'file');
        input1.setAttribute('accept', 'image/*');
        input1.setAttribute('style', 'position:absolute;margin-left:35%;margin-top:220px;-webkit-user-select:file')

        document.getElementsByTagName('body')[0].appendChild(input1);

        let oninput1 = (e) => {
            var file = e.target.files[0],//拿到原始对象
            reader = new FileReader();
            //readAsDataURL(file),读取文件，将文件以数据URL的形式保存在result的属性中
            reader.readAsDataURL(file);
            //文件加载成功以后，渲染到页面
            reader.onload = (e)=> {
                var img = document.createElement("img");
                img.src = e.target.result;
                let texture = new cc.Texture2D();
                texture._nativeAsset = img;
                texture.on('load', () => {
                    this.spriteFrames[0].spriteFrame = new cc.SpriteFrame(texture);  
                    spriteFramesComp.spriteFrames[0] =  new cc.SpriteFrame(texture);   
                })
            }
        }
        input1.addEventListener('change', oninput1);

        //替换样式2
        let input2 = document.createElement("input");
        input2.setAttribute('type', 'file');
        input2.setAttribute('accept', 'image/*');
        input2.setAttribute('style', 'position:absolute;margin-left:40%;margin-top:220px;-webkit-user-select:file')

        document.getElementsByTagName('body')[0].appendChild(input2);

        let oninput2 = (e) => {
            var file = e.target.files[0],//拿到原始对象
            reader = new FileReader();
            //readAsDataURL(file),读取文件，将文件以数据URL的形式保存在result的属性中
            reader.readAsDataURL(file);
            //文件加载成功以后，渲染到页面
            reader.onload = (e)=> {
                var img = document.createElement("img");
                img.src = e.target.result;
                let texture = new cc.Texture2D();
                texture._nativeAsset = img;
                texture.on('load', () => {
                    this.spriteFrames[1].spriteFrame = new cc.SpriteFrame(texture);     
                    spriteFramesComp.spriteFrames[1] =  new cc.SpriteFrame(texture);
                })
            }
        }
        input2.addEventListener('change', oninput2);

        //替换样式3
        let input3 = document.createElement("input");
        input3.setAttribute('type', 'file');
        input3.setAttribute('accept', 'image/*');
        input3.setAttribute('style', 'position:absolute;margin-left:45%;margin-top:220px;-webkit-user-select:file')

        document.getElementsByTagName('body')[0].appendChild(input3);

        let oninput3 = (e) => {
            var file = e.target.files[0],//拿到原始对象
            reader = new FileReader();
            //readAsDataURL(file),读取文件，将文件以数据URL的形式保存在result的属性中
            reader.readAsDataURL(file);
            //文件加载成功以后，渲染到页面
            reader.onload = (e)=> {
                var img = document.createElement("img");
                img.src = e.target.result;
                let texture = new cc.Texture2D();
                texture._nativeAsset = img;
                texture.on('load', () => {
                    this.spriteFrames[2].spriteFrame = new cc.SpriteFrame(texture);    
                    spriteFramesComp.spriteFrames[2] =  new cc.SpriteFrame(texture); 
                })
            }
        }
        input3.addEventListener('change', oninput3);


    },
    // create the img element
    createImg() {
        // return the type and dataUrl
        var dataURL = this._canvas.toDataURL("image/png");
        var img = document.createElement("img");
        img.src = dataURL;
        return img;
    },
    // create the canvas and context, filpY the image Data
    createCanvas() {
        let width = this.texture.width;
        let height = this.texture.height;
        if (!this._canvas) {
            this._canvas = document.createElement('canvas');

            this._canvas.width = width;
            this._canvas.height = height;
        }
        else {
            this.clearCanvas();
        }
        let ctx = this._canvas.getContext('2d');
        this.camera.render();
        let data = this.texture.readPixels();
        // write the render data
        let rowBytes = width * 4;
        for (let row = 0; row < height; row++) {
            let srow = height - 1 - row;
            let imageData = ctx.createImageData(width, 1);
            let start = srow * width * 4;
            for (let i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
            }

            ctx.putImageData(imageData, 0, row);
        }
        return this._canvas;
    },

    // show on the canvas
    showImage(img) {
        //var img = document.createElement("img");
        let offset = (cc.view._frameSize.width - this.srpite.node.width) / 2;
        let top = (cc.view._frameSize.height - this.srpite.node.width) / 2;
        cc.log('fs:', cc.view._frameSize.width);
        cc.log('offset:', offset, img.width);
        img.setAttribute('style', `position:absolute;margin-left:${offset}px ;margin-top:${top}px`);
        document.getElementsByTagName('body')[0].appendChild(img);     
        this._img = img;
        //let texture = new cc.Texture2D();
        // texture.initWithElement(img);

        // let spriteFrame = new cc.SpriteFrame();
        // spriteFrame.setTexture(texture);

        // let node = new cc.Node();
        // let sprite = node.addComponent(cc.Sprite);
        // sprite.spriteFrame = spriteFrame;

        // node.zIndex = cc.macro.MAX_ZINDEX;
        // node.parent = cc.director.getScene();
        // // set position
        // let width = cc.winSize.width;
        // let height = cc.winSize.height;
        // node.x = width / 2;
        // node.y = height / 2;
        // node.on(cc.Node.EventType.TOUCH_START, () => {
        //     node.parent = null;
        
        //     node.destroy();
        // });

        //this.captureAction(node, width, height);
    },
    // sprite action
    captureAction(capture, width, height) {
        let scaleAction = cc.scaleTo(1, 0.3);
        let targetPos = cc.v2(width - width / 6, height / 4);
        let moveAction = cc.moveTo(1, targetPos);
        let spawn = cc.spawn(scaleAction, moveAction);
        capture.runAction(spawn);
        let blinkAction = cc.blink(0.1, 1);
        // scene action
        this.node.runAction(blinkAction);
    },

    clearCanvas() {
        let ctx = this._canvas.getContext('2d');
        ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
});
