System.register(["./deprecated-fd5a8e75.js"],(function(t){"use strict";var s,e,r;return{setters:[function(t){s=t.j,e=t.d,r=t.D}],execute:function(){var i=/^(click)(\s)*=|(param)(\s)*=/,a=/(\s)*src(\s)*=|(\s)*height(\s)*=|(\s)*width(\s)*=|(\s)*align(\s)*=|(\s)*offset(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;t("H",function(){function t(){e(this,t),this._specialSymbolArray=[],this._stack=[],this._resultObjectArray=[],this._specialSymbolArray.push([/&lt;/g,"<"]),this._specialSymbolArray.push([/&gt;/g,">"]),this._specialSymbolArray.push([/&amp;/g,"&"]),this._specialSymbolArray.push([/&quot;/g,'"']),this._specialSymbolArray.push([/&apos;/g,"'"])}return s(t,[{key:"parse",value:function(t){this._resultObjectArray.length=0,this._stack.length=0;for(var s=0,e=t.length;s<e;){var r=t.indexOf(">",s),i=-1;if(r>=0)(i=t.lastIndexOf("<",r))<s-1&&(i=t.indexOf("<",r+1),r=t.indexOf(">",i+1));if(i<0)this._stack.pop(),this._processResult(t.substring(s)),s=e;else{var a=t.substring(s,i),n=t.substring(i+1,r);""===n&&(a=t.substring(s,r+1)),this._processResult(a),-1===r?r=i:"/"===t.charAt(i+1)?this._stack.pop():this._addToStack(n),s=r+1}}return this._resultObjectArray}},{key:"_attributeToObject",value:function(t){var s={},e=(t=t.trim()).match(/^(color|size)(\s)*=/),r="",i=0,n="";if(e){if(r=e[0],""===(t=t.substring(r.length).trim()))return s;switch(i=t.indexOf(" "),r[0]){case"c":s.color=i>-1?t.substring(0,i).trim():t;break;case"s":s.size=parseInt(t)}return i>-1&&(n=t.substring(i+1).trim(),s.event=this._processEventHandler(n)),s}if((e=t.match(/^(br(\s)*\/)/))&&e[0].length>0&&(r=e[0].trim()).startsWith("br")&&"/"===r[r.length-1])return s.isNewLine=!0,this._resultObjectArray.push({text:"",style:{isNewLine:!0}}),s;var c="";if((e=t.match(/^(img(\s)*src(\s)*=[^>]+\/)/))&&e[0].length>0&&(r=e[0].trim()).startsWith("img")&&"/"===r[r.length-1]){var l;e=t.match(a);for(var h=!1;e;){if(r=(t=t.substring(t.indexOf(e[0]))).substr(0,e[0].length),l=(i=(c=t.substring(r.length).trim()).indexOf(" "))>-1?c.substr(0,i):c,r=(r=r.replace(/[^a-zA-Z]/g,"").trim()).toLocaleLowerCase(),t=c.substring(i).trim(),l.endsWith("/")&&(l=l.slice(0,-1)),"src"===r){switch(l.charCodeAt(0)){case 34:case 39:h=!0,l=l.slice(1,-1)}s.isImage=!0,s.src=l}else if("height"===r)s.imageHeight=parseInt(l);else if("width"===r)s.imageWidth=parseInt(l);else if("align"===r){switch(l.charCodeAt(0)){case 34:case 39:l=l.slice(1,-1)}s.imageAlign=l.toLocaleLowerCase()}else"offset"===r?s.imageOffset=l:"click"===r&&(s.event=this._processEventHandler(r+"="+l));s.event&&"param"===r&&(s.event[r]=l.replace(/^\"|\"$/g,"")),e=t.match(a)}return h&&s.isImage&&this._resultObjectArray.push({text:"",style:s}),{}}if(e=t.match(/^(outline(\s)*[^>]*)/)){var u={color:"#ffffff",width:1};if(t=e[0].substring("outline".length).trim()){var o,g=/(\s)*color(\s)*=|(\s)*width(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;for(e=t.match(g);e;)r=(t=t.substring(t.indexOf(e[0]))).substr(0,e[0].length),o=(i=(c=t.substring(r.length).trim()).indexOf(" "))>-1?c.substr(0,i):c,r=(r=r.replace(/[^a-zA-Z]/g,"").trim()).toLocaleLowerCase(),t=c.substring(i).trim(),"click"===r?s.event=this._processEventHandler(r+"="+o):"color"===r?u.color=o:"width"===r&&(u.width=parseInt(o)),s.event&&"param"===r&&(s.event[r]=o.replace(/^\"|\"$/g,"")),e=t.match(g)}s.outline=u}if((e=t.match(/^(on|u|b|i)(\s)*/))&&e[0].length>0){switch(r=e[0],t=t.substring(r.length).trim(),r[0]){case"u":s.underline=!0;break;case"i":s.italic=!0;break;case"b":s.bold=!0}if(""===t)return s;s.event=this._processEventHandler(t)}return s}},{key:"_processEventHandler",value:function(t){for(var s=new Map,e=0,r=!1,a=t.match(i);a;){var n=a[0],c="";if(r=!1,'"'===(t=t.substring(n.length).trim()).charAt(0))(e=t.indexOf('"',1))>-1&&(c=t.substring(1,e).trim(),r=!0),e++;else if("'"===t.charAt(0))(e=t.indexOf("'",1))>-1&&(c=t.substring(1,e).trim(),r=!0),e++;else{var l=t.match(/(\S)+/);e=(c=l?l[0]:"").length}r&&(s[n=n.substring(0,n.length-1).trim()]=c),a=(t=t.substring(e).trim()).match(i)}return s}},{key:"_addToStack",value:function(t){var s=this._attributeToObject(t);if(0===this._stack.length)this._stack.push(s);else{if(s.isNewLine||s.isImage)return;var e=this._stack[this._stack.length-1];for(var r in e)s[r]||(s[r]=e[r]);this._stack.push(s)}}},{key:"_processResult",value:function(t){0!==t.length&&(t=this._escapeSpecialSymbol(t),this._stack.length>0?this._resultObjectArray.push({text:t,style:this._stack[this._stack.length-1]}):this._resultObjectArray.push({text:t}))}},{key:"_escapeSpecialSymbol",value:function(t){for(var s,e=r(this._specialSymbolArray);!(s=e()).done;){var i=s.value,a=i[0],n=i[1];t=t.replace(a,n)}return t}}]),t}())}}}));