var componentSuper = cc.Class({
    extends: cc.Component,

    //
    onLoad:function() {
    	//自动注册所有按钮回调
    	this.registerButtonTouchEvent(this.node)
    },
    //注册所有按钮点击事件
    registerButtonTouchEvent:function(node) {       
        var child = node.children;
        if(child.length > 0 ){
            for(var i= 0; i < child.length;i++){
                var childNode = child[i]
                var name = childNode.name
                if(name.slice(0,3) === "btn" || name.slice(0,6) === "button"){
                    if(this.buttonTouchEvent){
                        childNode.on('click', this.buttonTouchEvent, this);
                    }
                }
                //cc.log(">>>>>>>>>>>>>>子节点数量",childNode.children.length);
                if(childNode.children.length > 0 ){
                    this.registerButtonTouchEvent(childNode);
                }
            }
        }
    },
    //获取对象
    getNodeByName:function(name,node) {
        var node = node ? node : this.node
        if(node.name === name){
            return node;
        }
        var children = node.children;
        if (children.length){
            for(var i = 0; i < children.length;i++){
                var child = children[i];
                var child_name = child.name;
                if (child_name === name){
                    return child;
                }
                var next_child = this.getNodeByName(name,child)
                if (next_child){
                    return next_child;
                }
            }
        }
        return null;
    },
    //注册触摸事件
    registerTouchEvent:function(node){
        //event.getLocationX()
        //event.getLocationY()
        var node = node || this.node;
        node.width = node.width || 960;
        node.height = node.height || 640;
        //触摸开始
        var touchBegan = function(event){
            if(this.touchBegan){
                this.touchBegan(event);
            }
        }
        node.on(cc.Node.EventType.TOUCH_START,touchBegan,this);
        //触摸移动
        var touchMove = function(event){
            event.stopPropagation();
            if(this.touchMove){
                this.touchMove(event);
            }
        }
        node.on(cc.Node.EventType.TOUCH_MOVE,touchMove,this);
        //触摸结束
        var touchEnded = function(event){
            event.stopPropagation();
            if(this.touchEnded){
                this.touchEnded(event);
            }
        }
        node.on(cc.Node.EventType.TOUCH_END,touchEnded,this)
        //触摸离开屏幕
        var touchCancel = function(event){
            event.stopPropagation();
            if(this.touchCancel){
                this.touchCancel(event);
            }
        }
        node.on(cc.Node.EventType.TOUCH_CANCEL,touchCancel,this)
    },

    //创建预制资源
    createPrefab:function(prefab,parent,zIndex){
        if (!prefab)return false;
        var parent = parent ? parent : this.node;
        var prefab =  cc.instantiate(prefab);
        prefab.zIndex = zIndex || 0
        prefab.parent = parent;
        return prefab;
    },

    
});

module.exports = componentSuper