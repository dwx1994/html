window.__require=function e(t,r,n){function o(i,s){if(!r[i]){if(!t[i]){var u=i.split("/");if(u=u[u.length-1],!t[u]){var a="function"==typeof __require&&__require;if(!s&&a)return a(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+i+"'")}}var f=r[i]={exports:{}};t[i][0].call(f.exports,function(e){return o(t[i][1][e]||e)},f,f.exports,e,t,r,n)}return r[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)o(n[i]);return o}({"test-second":[function(e,t,r){"use strict";cc._RF.push(t,"f43242HNENDFpDggQECDo13","test-second"),cc.Class({extends:cc.Component,properties:{tips:e("LabelLocalized")},start:function(){this.tips.textKey="cases/subpackage2.loaded"},goLoadSubpackage:function(){cc.director.loadScene("AssetBundles")}}),cc._RF.pop()},{LabelLocalized:void 0}]},{},["test-second"]);