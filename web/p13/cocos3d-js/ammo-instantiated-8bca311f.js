System.register([],(function(e,t){"use strict";return{execute:async function(){let n;e("w",u);let a=!1;"undefined"==typeof WebAssembly?n=await t.import("./ammo.full-7ddf2a8e.js"):(n=await t.import("./ammo.wasm-3f6e0dde.js"),a=!0);var i=n.default,s=Object.freeze({__proto__:null,default:i,get isWasm(){return a}}),r=e("A",{});function u(e){var t={};return void 0!==e&&(r.wasmBinary=e),new Promise((function(e,n){i.call(t,r).then((function(){e()}))}))}(u||(u=e("w",{}))).isWasm="isWasm"in s}}}));