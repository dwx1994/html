System.register("chunks:///_virtual/NewComponent.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Component}],execute:function(){var c;n._RF.push({},"561f4K3ZFBAMIUaMaiqe1eC","NewComponent",void 0);var s=o.ccclass;o.property,t("NewComponent",s("NewComponent")(c=function(t){function n(){return t.apply(this,arguments)||this}return e(n,t),n.prototype.start=function(){},n}(r))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./NewComponent.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

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