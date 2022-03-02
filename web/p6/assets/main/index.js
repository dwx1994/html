System.register("chunks:///_virtual/gmr.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,o,n,e,r,s,c,a,u,h,l,f,T,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,c=t.Camera,a=t.Node,u=t.PhysicsSystem,h=t.math,l=t.tween,f=t.Vec3,T=t.geometry,p=t.Component}],execute:function(){var d,y,w,m,v,A,C;r._RF.push({},"561f4K3ZFBAMIUaMaiqe1eC","gmr",void 0);var g=s.ccclass,E=s.property;t("GameManager",(d=g("GameManager"),y=E(c),w=E(a),d((A=i((v=function(t){function i(){for(var i,o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(i=t.call.apply(t,[this].concat(r))||this).outRay=new T.Ray,n(i,"cameraComp",A,e(i)),n(i,"arrowNode",C,e(i)),i.curArrow=null,i.isTouch=!1,i.isAnim=!1,i}o(i,t);var r=i.prototype;return r.onLoad=function(){this.init()},r.init=function(){this.initLister()},r.initLister=function(){this.initTouchLister(),this.initCollisionLister()},r.initTouchLister=function(){console.log(11),this.node.on(a.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(a.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.on(a.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(a.EventType.TOUCH_CANCEL,this.onTouchCancel,this)},r.initCollisionLister=function(){},r.onTouchStart=function(t){var i=t.getLocation();if(this.cameraComp.screenPointToRay(i.x,i.y,this.outRay),u.instance.raycast(this.outRay))for(var o=u.instance.raycastResults,n=0;n<o.length;n++){var e=o[n];console.log("当前点击： "+e.collider.node.uuid),e.collider.node.uuid==this.arrowNode.uuid&&(this.isTouch=!0,this.resetArrow())}},r.onTouchMove=function(t){if(this.isTouch){var i=t.getDelta();console.log(i),0!=i.y&&this.pullArrow(i.y)}},r.onTouchEnd=function(t){this.isTouch=!1,this.fireArrow()},r.onTouchCancel=function(t){this.isTouch=!1,this.fireArrow()},r.pullArrow=function(t){t=h.clamp(t,-.5,.5),this.arrowMoveAnim(t)},r.arrowMoveAnim=function(t){var i=this;this.isAnim||(this.isAnim=!0,l(this.arrowNode).to(.2,{position:new f(0,1.03,-t),eulerAngles:new f(-100,0,0)}).call((function(){return i.isAnim=!1})).start())},r.fireArrow=function(){var t=this;l(this.arrowNode).by(.5,{position:new f(0,-0,-4),eulerAngles:new f(-0,0,0)}).call((function(){return t.isAnim=!1})).start()},r.resetArrow=function(){this.arrowNode.setPosition(0,1.03,0),this.arrowNode.eulerAngles=new f(-90,0,0)},r.update=function(){},r.onDestroy=function(){this.node.off(a.EventType.TOUCH_START,this.onTouchStart,this),this.node.off(a.EventType.TOUCH_MOVE,this.onTouchMove,this),this.node.off(a.EventType.TOUCH_END,this.onTouchEnd,this),this.node.off(a.EventType.TOUCH_CANCEL,this.onTouchCancel,this)},i}(p)).prototype,"cameraComp",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=i(v.prototype,"arrowNode",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=v))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./gmr.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});