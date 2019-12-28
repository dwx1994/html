
var shaderUtils = require("shaderUtils")
var componentSuper = require("componentSuper")
    
//判断一个点是否在多边形里面
var isInSide = function(count,xlist,ylist,dx,dy){
    var i = 0;
    var j = count-1;
    var b = false;
    for (i = 0 ; i < count; j = i++) {
        // cc.log(">>>>>>>>>>>i:",i)
        // cc.log(">>>>>>>>>>>j:",j)
        if ( ((ylist[i]>dy) != (ylist[j]>dy)) &&
         (dx < (xlist[j]-xlist[i]) * (dy-ylist[i]) / (ylist[j]-ylist[i]) + xlist[i]) )
           b = !b;
    }
    return b
}

//获取对称点坐标(sp需要对称的点，pos1斜边第一个点，pos2斜边第二个点)
var getSymmetric = function(sp,pos1,pos2){
    var disX = pos2.x - pos1.x;
    var disY = pos2.y - pos1.y;
    if (disX == 0){
        var x = pos1.x - sp.x
        return {x:pos1.x + x,y:sp.y};
    }
    //获取截线斜率
    var k1 = disY/disX;

    //设对称点坐标
    // var x = 0;
    // var y = 0;
    //直线方程式
    //y = k(x-x1) + y1
    //方程式
    //(y - sp.y)/(x - sp.x) = -1/k1; 方程式(1)
    //(y+sp.y)/2 = k1*((x + sp.x)/2 - pos1.x) + pos1.y;方程式(2)

    //由方程式(1)得
    //x = (y - sp.y)/(-1/k1)+sp.x
    //x = sp.y*k1 - y*k1 + sp.x
    //由方程式(2)得
    //y = k1*x + k1*sp.x - k1*pos1.x*2 + pos1.y*2 - sp.y;
    //方程式(1)带入(2)得
    //y = k1*( sp.y*k1 - y*k1 + sp.x ) + k1*sp.x - k1*pos1.x*2 + pos1.y*2 - sp.y;
    //y = sp.y*k1*k1 - y*k1*k1 + sp.x*k1 + k1*sp.x - k1*pos1.x*2 + pos1.y*2 - sp.y;

    var y = (sp.y*k1*k1  + sp.x*k1 + k1*sp.x - k1*pos1.x*2 + pos1.y*2 - sp.y)/(1+k1*k1);
    var x = (y - sp.y)/(-1/k1)+sp.x;

    cc.log(">>>>>>>>>>>>>>>x:",x)
    cc.log(">>>>>>>>>>>>>>>y:",y)

    return {x:x,y:y}
}

var initParmas = {x:0,y:0,z:0}


cc.Class({
    extends: componentSuper,

    properties: {
        
    },

    onLoad:function() {
        //注册层触摸事件
        this.registerTouchEvent();
        //背面shader
     	this.bg = this.getNodeByName("bg");
    	var bg = this.bg;
        this.box = this.bg.getBoundingBoxToWorld();
    	this._program = shaderUtils.setShaderByFileName(bg._sgNode,"ccShader_Default_Vert","ccShader_FP_Frag");
        //正面shader
        this.zm = this.getNodeByName("zm");
        this._zmprogram = shaderUtils.setShaderByFileName(this.zm._sgNode,"ccShader_Test_Vert","ccShader_ZM_Frag");


        shaderUtils.setData(this._program,"sprWidth",bg.width);
        shaderUtils.setData(this._program,"sprHight",bg.height);
        shaderUtils.setData(this._zmprogram,"sprWidth",bg.width);
        shaderUtils.setData(this._zmprogram,"sprHight",bg.height);
        shaderUtils.setData(this._zmprogram,"worldPos",{x:this.box.x,y:this.box.y},2);
        this.initSetData()

        // var boy = this.getNodeByName("boy")
        // var xlist = [];
        // var ylist = [];
        // var dx = boy.x;
        // var dy = boy.y;
        // for (var i = 1 ; i < 5 ; i++){
        //     var node = this.getNodeByName("boy"+i)
        //     xlist.push(node.x);
        //     ylist.push(node.y);
        // }  
        // // cc.log(">>>>>>>>>>>>>>xlist:",xlist)
        // // cc.log(">>>>>>>>>>>>>>ylist:",ylist)
        // var bool = isInSide(4,xlist,ylist,dx,dy)
        // cc.log("bool:",bool)



        var sp = this.getNodeByName("hp1").position
        var pos1 = this.getNodeByName("sy1").position
        var pos2 = this.getNodeByName("sy2").position
        this.getNodeByName("hp2").position = getSymmetric(sp,pos1,pos2)
    },

    initSetData:function(){
        shaderUtils.setData(this._program,"disX",{x:0,y:0},2);
        shaderUtils.setData(this._program,"disY",{x:0,y:0},2);
        shaderUtils.setData(this._program,"xlist",initParmas,3);
        shaderUtils.setData(this._program,"ylist",initParmas,3);


        shaderUtils.setData(this._zmprogram,"disX",{x:0,y:0},2);
        shaderUtils.setData(this._zmprogram,"disY",{x:0,y:0},2);
        shaderUtils.setData(this._zmprogram,"xlist",initParmas,3);
        shaderUtils.setData(this._zmprogram,"ylist",initParmas,3);
    },

    setxy:function(){
        //计算不精确的情况下会有瑕疵,+1避免这种情况
        var width = this.bg.width+1;
        var height = this.bg.height+1;

        var disX = this.movePos.x - this.initPos.x;
        var disY = this.movePos.y - this.initPos.y;
        // cc.log(">>>>>>>>>>disX:",disX)
        // cc.log(">>>>>>>>>>disY:",disY)

        //获取反正切值
        var tanValue = Math.atan(disY/disX);
        // //弧度转角度
        var rotation = 180/Math.PI*tanValue;
        cc.log(">>>>>>>rotation:",rotation)
        //角度转弧度
        //var hd = rotation/(180/Math.PI);
        //获取斜边距离
        var disHy = Math.sqrt(disX*disX+disY*disY);
        cc.log(">>>>>>>disHy:",disHy)
        //获取隐藏部分的y
        var hy = Math.abs((disHy*0.5)/Math.sin(tanValue));
        //获取隐藏部分的x
        var hx = Math.abs((disHy*0.5)/Math.cos(tanValue));

        //cc.log(">>>>>>>>>>this.initPos.y:",this.initPos.y)
        cc.log(">>>>>>>>>>hy:",hy)
        cc.log(">>>>>>>>>>hx:",hx)

        if (Math.abs(rotation) == 0){
            var x1 = 0;
            var x2 = (this.initPos.x*2 + disX)*0.5;
            if (disX < 0){
                x1 = (width - ( (width - this.initPos.x)*2 - disX)*0.5);
                x2 = width;
            }
            shaderUtils.setData(this._program,"disX",{x:x1,y:x2},2);
            shaderUtils.setData(this._zmprogram,"disX",{x:x1,y:x2},2);
        }else if (Math.abs(rotation) == 90){
            var y1 = height - (this.initPos.y*2 +  disY)*0.5;
            var y2 = height;
            if (disY < 0){
                y1 = 0;
                y2 = ((height - this.initPos.y)*2 -  disY)*0.5;
            }
            shaderUtils.setData(this._program,"disY",{x:y1,y:y2},2);
            shaderUtils.setData(this._zmprogram,"disY",{x:y1,y:y2},2);
        }else{
            var pos1 = {x:0,y:0};
            var pos2 = {x:0,y:0};
            var pos3 = {x:0,y:0};
            if (disX > 0 && disY > 0){          //往右上翻牌
                pos1.x = 0;
                pos1.y = height;
                if (this.initPos.x > this.initPos.y){
                    pos2.x = hx　+ this.initPos.x;
                    pos2.y = height;
                    pos3.x = 0;
                    pos3.y = height-(((hx + this.initPos.x)/hx*(hy+this.initPos.y)));
                    //cc.log(">>>>>>>>>>>>>>往右上翻牌1")
                }else{
                    pos2.x = 0;
                    pos2.y = height - (hy + this.initPos.y);
                    pos3.x = (hy + this.initPos.y)/hy*(hx+this.initPos.x);
                    pos3.y = height;
                    //cc.log(">>>>>>>>>>>>>>往右上翻牌2")
                }  
            }else if (disX < 0 && disY > 0){    //往左上翻牌
                pos1.x = width;
                pos1.y = height;
                if (width - this.initPos.x > this.initPos.y){
                    pos2.x = width - (hx + width - this.initPos.x);
                    pos2.y = height;
                    pos3.x = width;
                    pos3.y = height-((width - pos2.x)/hx*(hy+this.initPos.y));
                    //cc.log(">>>>>>>>>>>>>>往左上翻牌1")
                }else{
                    pos2.x = width;
                    pos2.y = height - (hy + this.initPos.y);
                    pos3.x = width - (hy + this.initPos.y)/hy*(hx+width - this.initPos.x);
                    pos3.y = height;
                    //cc.log(">>>>>>>>>>>>>>往左上翻牌2")
                }
                
            }else if (disX > 0 && disY < 0){    //往右下翻牌
                pos1.x = 0;
                pos1.y = 0;
                if (this.initPos.x > height - this.initPos.y){
                    pos2.x = hx + this.initPos.x;
                    pos2.y = 0;
                    pos3.x = 0;
                    pos3.y = pos2.x/hx*(hy+height - this.initPos.y);
                    //cc.log(">>>>>>>>>>>>>>往右下翻牌1")
                }else{
                    pos2.x = 0;
                    pos2.y = hy + (height - this.initPos.y);
                    pos3.x = (hy + (height - this.initPos.y))/hy*hx+this.initPos.x;
                    pos3.y = 0;
                    //cc.log(">>>>>>>>>>>>>>往右下翻牌2")
                }
                
            }else if (disX < 0 && disY < 0){    //往左下翻牌
                pos1.x = width;
                pos1.y = 0;
                if (width - this.initPos.x > height - this.initPos.y){
                    pos2.x = width - (hx + width - this.initPos.x);
                    pos2.y = 0;
                    pos3.x = width;
                    pos3.y = (width - pos2.x)/hx*(hy+height - this.initPos.y);
                    //cc.log(">>>>>>>>>>>>>>往左下翻牌1")
                }else{
                    pos2.x = width;
                    pos2.y = hy + (height - this.initPos.y);
                    pos3.x = width - (hy + (height - this.initPos.y))/hy*(hx+width-this.initPos.x);
                    pos3.y = 0;
                    //cc.log(">>>>>>>>>>>>>>往左下翻牌2")
                }
                
            }

            var xlist = {x:pos1.x,y:pos2.x,z:pos3.x}
            var ylist = {x:pos1.y,y:pos2.y,z:pos3.y}

            // cc.log(">>>>>>>>>>>xlist:",xlist)
            // cc.log(">>>>>>>>>>>ylist:",ylist)
            shaderUtils.setData(this._program,"disX",{x:0,y:0},2);
            shaderUtils.setData(this._program,"disY",{x:0,y:0},2);
            shaderUtils.setData(this._program,"xlist",xlist,3);
            shaderUtils.setData(this._program,"ylist",ylist,3);

            shaderUtils.setData(this._zmprogram,"disX",{x:0,y:0},2);
            shaderUtils.setData(this._zmprogram,"disY",{x:0,y:0},2);
            shaderUtils.setData(this._zmprogram,"xlist",xlist,3);
            shaderUtils.setData(this._zmprogram,"ylist",ylist,3);
        }

        
    },

    //触摸开始
    touchBegan:function(event){
        this.upPos = event.getLocation();
    },

    //触摸移动
    touchMove:function(event){
    	var pos = event.getLocation();
        var disRect = {x:this.upPos.x-this.box.x,y:this.upPos.y-this.box.y};
        //console.log(">>>>>>>>rp:",rp)
        if (this.initPos){
            this.movePos = {x:pos.x-this.box.x,y:pos.y-this.box.y};
            this.setxy();
        }else{
            //必须从牌的旁边开始翻,中间不允许翻牌
            var ds = 10;
            var box = {x:this.box.x,y:this.box.y,width:this.box.width,height:this.box.height}
            box.x = box.x + ds;
            box.y = box.y + ds;
            box.width = box.width - ds*2;
            box.height = box.height - ds*2;
            if (cc.rectContainsPoint(this.box,pos) && !cc.rectContainsPoint(box,this.upPos)){
                disRect.x = Math.max(disRect.x,0);
                disRect.x = Math.min(disRect.x,this.box.width);
                disRect.y = Math.max(disRect.y,0);
                disRect.y = Math.min(disRect.y,this.box.height);
                this.initPos = disRect;
                //cc.log(">>>>>>>>>>>disRect:",disRect);
            }
        }
        this.upPos = pos;
    },

    //触摸结束
    touchEnded:function(event){
        //cc.log(">>>>>>>>>>>触摸结束:");
    	this.initPos = false;
        this.initSetData();
    },

    //取消触摸
    touchCancel:function(){
    	//cc.log(">>>>>>>>>>>取消触摸:");
        this.initPos = false;
        this.initSetData();
    },

    // update:function(dt){
    //     // if(this._program){
    //     //     if(cc.sys.isNative){
    //     //         var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program); 
    //     //         glProgram_state.setUniformVec2( "mouse_touch" , this.parameters.mouse );
    //     //     }else{
    //     //         this._program.setUniformLocationWith2f( this._mouse, this.parameters.mouse.x,this.parameters.mouse.x );
    //     //     }
    //     // }
    // },
});
