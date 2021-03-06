/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});


//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($, undefined){
  var prefix = '', eventPrefix,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([A-Z])/g, '-$1').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  if (testEl.style.transform === undefined) $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, ((duration + delay) * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)

// namespace:
this.TY = this.TY || {};

TY.VERSION = "1";
TY.Debug = 0;

TY.inherit = function(ctor, superCtor) {
	ctor.superClass = superCtor;
	ctor.prototype = Object.create(superCtor.prototype);
	ctor.prototype.constructor = ctor;
};
TY.extend = function(origin, add) {
	// Don't do anything if add isn't an object
	if (!add || typeof add !== 'object')
		return origin;
	var keys = Object.keys(add);
	var i = keys.length;
	while (i--) {
		origin[keys[i]] = add[keys[i]];
	}
	return origin;
};

TY.logBox = {};
TY.Log = function(_t) {
	if (!TY.Debug) return;
	if (TY.isMobileDevice) TY.logBox.innerHTML += _t + '<br>';
	else console.log(_t);
}
TY.icons="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAGKCAMAAAC7P6arAAABvFBMVEUAAAATEUwoL3RYYK4oL3QoL3QoL3R7g9ooL3QoL3QoL3QoL3QoLnMoL3QoL3QoL3R8hdt8hdt8hdsoL3R8hdsoL3R8hdsoL3R8hdsoL3TBwNAoL3Rsc8QoL3R8hdsoL3QoL3R8hdsoL3RmbL18hdt8hdsoL3QoL3QoL3R8hdsoL3ROU51HSpM6PIEwMXMmJmZ8hdt8hdsoL3R7hdsYF1L6+vx8hdsoL3R8hdsoL3R8hdt8hdsoL3QoL3R8hdsoL3T29vpvd8phaLh1fdFze89cYrBXXKl8hdt5gtiqqr+ZmLJ8hdtVU35HRXN6g9nX1+Hk5OuHhqQ8Omre3uZsa5B8hdvt7fJzfNEyMGNiartsdMdMVKBAR5FHT5pLU598hdsoL3T///9qcsNVXaktNHtBSZN4gdZtdslye89HT5pPV6Q9RY02PoZlbb9faLdbY7N1ftNXX646QYoyOYFja7xLU5+Ikd9/iNt5falITonx8vxobZ7M0PHj5ffGyvC+wu2UnOKuscy2u+ulq+WPluCgo8Lp6vnv8PbX2vSvteqpr+iepeXV1uTFx9u6vNOWmrtUWpGLj7Q/RYOMkcQDJIQFAAAAX3RSTlMAmYAIeMY7+u4Wuw+qYfZt9HAeVco0mkOSJdkt54llTaEW5N+3pFzcsj3Qxr+0rKYzKJDdm/7pmw6X4tRy1Ugd/u3c9PHVz35VzsbAraiH5e2+pem1rvPToZixrqBvURxbaAAAAA+CSURBVHja7JUxa+NAEIVvSDGNC0mkWA4hEJIrWZJNFGPi5uw4hoQ7cpeEI93g//8nwixKiL3anZUcdfla24/nN29nfnzzzdlczBOVr5dIRLhc5yqZX3yJbhTmAZ0S5GF0pu4quSQbl8nqDMPqk1/cbeIs3uzwk3c10Hqq8F01K8oa3qnLIvv4RKUDRhe2jm/3FZhU+9vWedh3pIs246wEG2XWZr7opRwiMdsJuJhsicGwRxhTYuIKJKqYmKlvKKkOA2fgwwx1KKlf5a605Rr8qLXxq8hH+Ya/eteAL80d/+BG1k615wL6UGjfqTRBnfMM+jHTeQuznFqVZe2pu8+ONORMXP1eIE8QhsCzxIU76LiBITSxM26OA2sYRo2OSNJAGKE8ysDSQMVxwHA4EtX9DPkfVTCcivOMbKa3cA5bi+0VJ23Zz09/wIcJp91xixO+KdDJz8Ph/z/wgO9OYkpzp0vo4uXAPD6BSMndNofIFxY6uT9ofj2ACN/iqOu57G15tDyKke+7nk3OzXNJM9cPHv3LT9dHQIQgScvGkSg4WSRz7ocszcYbqSNzs3qFLM08/xb2dmI+xVKUbo3fN876KXOKtSzd8tdqvDbnuOYpekozVuNItD6WXhLtBGk/4zui5bE0Em2c0ibdW2VDhMfSxhWQpa9fbffAkM4EaYMXW7FHdD1i1iM2ZMRej/gaR9whY2++8fe1/5V5fmPPjm0AhIEYikYgIWjSUdFQMVf2nwKxAEoknrji/hK2v3tSxmUjTHTYQ1x7gp0PNlXXr+EqcFsGLjC3G+HadRvdmQXnQ6DFce7JGTPn+Zyd/N2pjpvgIP56yLoH+go6H46Av8z7mxT6A0uSJPmYed8K4mzrUghzba1eRXC0h6kAbvbMrLdpIIrCqCSVU0LyUJUQVVErHtLSN5AQQgKx/JE5zGJ7xuM1CfsmBGIX8I+ZsZ2FLY7T8oL6SWPZbn1yfebOnZmki5z2P5gP9oFH3wA0T74zD4Avd54COOifsHILwLv7978DcHonK70HPL5veAugs3ei0gNj9f3PX79xGLZOxIfe+Y3B1UFjeGSiHqHk/LEHSe/GAX7j0v6wddx4Nxz8xtHN3WMbcW6jgxwtJkopGXDkHGwfV7l3CQYuxwkhDx8Si58GsGz1j2XyAIZR6hLy4MPz+y9Jia9s7M7eMcw4tBEzK/zs2vsPD8icRMLQWDvmJoDMM068vPbsDfmFsQ18sKbyFgBJTMjPn78iv+PrtWvrdQDKSLx68uIh+RNuBmCdOeF8GfOrO6/JX3A10KmfJy0HCKwbT4zy3/A50Kw9JbQBntigX5IlhAC6a0yAEalmAjjnagedkRVIONCoPZWE5snXH0gFDLhUy+0GoIkZK08+rRJ2rXmsCaTmuU9PSCUS2K/ph28ee/mMVDIGnNWr0m4D4Fb62UdSiQugv8oatLt/VJZ+npLVyIDtShsGl7DIKCKrICuL1FkzU5Xwkdaw6DGpRgHXlyu3YREs9L0RECSqEI9JFWlVijTymSohhgAGRXwJC1c+WUoMHC4N2gGES3I4UFQ9TyIniJPlUbcryhEPyvA0DHI+v1pE6i/x+sYy6dvAKM5CYqHcXEyV3DhDwUjG/joZYjcoYZip3JMkjlwyw40mI5TwQMXUr5nX123pT6TwyC94HBCUZVhglAkpJ0pJKbJR5WhsmbB1QmKt5l02d56Z4Mcqw1/Yrt79aJ8kKktdsgAsYvoKsRIj/EL1Im1gvYxsymUxmZMrKbJIxKIoTZVSaRqPUwFDp3G2atRAmk6iIptncmjzZdGkRAOcTvvYCHOByg1Zz5mu8ehEzwahb/NlAQWDno0XwyjUAJydpX15CAOPraDS0kr+joBlltSWxFUV2obtYj2dujafpVZhob48am7950a7X7ULmBclPxV6Mv5F3Q2s1wsXiKZ90qycETplUXJzp6WWKf1Jni6+C438Mm8A7FXvXxyU+wxiSEIljHxYUVyTbKW5/eywiRxe9mUyVlJnMo3oH+urS1OphXVkFXYdlATMK9NwzCZCayEVi6MwDCmlYRSnSmZaqHESWemV6Hcwgws2szuhYyM3kVIKIeTEfMzYs3+jfPUNyDAv0iNMKbrzL1AJwGnVWPlh5Hmp4JjBA8ki6ruL/UdjyWHo1Fj8bUyXOnQuv7CisIzm9492an/PlHnE4ke2oP6Vw7ob1M1LMIjx7OXj38JH59bhRu/cGjve67DwYvOfTUv/bmt3p2fZ2W2dWZudLfxCu8LUOuI3HExxDrv1wqxeHZ9vDK5udPf6Z0455ZT/htZOftxubC7cGF4fFpXW3F2bNtDstrccWz+3NvYG9sw5tAXfOWxtAmg2Afs/tZU3wQNYJENBcSOC4aAJFqCktnYDjCiElPoupVTzmLokdjUIeL6gJgFCYgjRrh81AlcxxqhvDlyHEQGiCASM4gDKh8Ve1NbuNo22YvMv3AQBtMcJ9zUAn4WCFR/M0aqnDEsZl0FTj9CQUUooDQFFBFW0QKNfLz+sk5SREsYZJcwom0Aja7eRFtZ0y1ZNP4p4OcsJAISEgbLCmSiy0oxYXDj1vWbUyFCDywBt9zaU5CDgRpq5gSAwNNfIPivNDD4DjMvCm0YNWGlqvMlfyYzMzaKtLh3IqbTyrCL1KaVeKR1Tk+rmhrSBT9uq0p4XTw3R0koX3VhKCwQk8jgAFsxad9XhGBVmznxYNITpwGWw2pyERVt1aA4Qq1xGRkaiMZUWkUdzacSEAYhcCUOtgrIHA2e2mcNmfioDe8XRRKhzC4aA5Lb8Ncu24q+Kg24bgGlG2dZYODCi9lYXOc3NM0MH1oT6lDllDvlpa3unvOq2u+a6mCpaZ0455ZRlXL5y5l9x4eIJ7uv6vWFjsN9uHh04jlYuuXuvvT9oDHv9s8eRvX3e/paywMRu00co6Bztn7+9nvD2j/bO9TdpKA7DTUtZQW4bIi7EMYkM3KcN45QJ6LctMdk3Y7yeQ4ECwzl1ujkvM3ObGi/z9g97fucAp8CAthT9YJ8sNTtxzw5vT2nXvstk3MM6PBvQI4fNiz0tsSLPiv54ZNpziiSwEjp9LeaO+8VZWWnJPWbNCUzIZ8KdL3lyUSi0b06FMylMSJh0XyFZZoZfdMWyAXjiYwqF32pcuHjC8i7oznWK+VlnWVHj1i2hh5Xl8yyUDMzaStapzIPVGYRWwdPBTXRhZu1OJm86a+C6jIE6otx1kxVyCo6gU57ph3duI6CBAfm61XX9gt2m1lN/wm9ky2HrR2MZLLiT8nM6aXY0WqeAbl9C96/4vHI+oWAlkZe9viv3+G9WjKIukHZ6oef7rU1N3rwqjIHCquAwJqTpuJieTyhKSvaJc9O2eT3hdE+9zG3HfN0+fBJyXBpRHM3jfiTCo8in5bZo9/XPo/3j/aPvL6EkyJi3HIvkwozyy+OPRc7lbz9/YUYW3gytn3d3928Ue/j2GlPyMQvmSICJj5nrxttPb/b29t58etv8Rl9BbqmZGWVRfL9MLB/2DrYRZ/tg7wPIj1ksfkvm3a/F4qt3h6iXw3evisWPbOJBc2lg4PWN4ofPO+hkdj6TqX838Bi993k91FFvDK49fX5V3Kd5R4yvuhQzf9pGg9l+w9wpj1F1mqZRfI+Gc3D5CBNmJRPd7d2PXwyYoUj4EhPixuMofzVmhvrjLkRi6LDMYMLRATLK4TdMyBiZdALi4DkbyAQiSUSM3MAh7CMzHBjslc5jjH8cIlPAtOclI8+K8W9kjh1MiBlpp27tIJNUjCSSh6PFhJT3FfJDEpEwQUWcJ2yrIaDvuIYJHgNHos7zjNbDnkJzsIMKHd/E5SqiNPDQCmUYd7RIa1BZ0Epku9k5Z/hv2ibZPuV9FHH4qq537Z8tjPmse8Z52OnBai/rT+krLAC87l63rt1Shf04WJ3qLuxqW6Bg5t4Wl6pPSBmshtPL8+5SD+R9QquW5q0vdQ1efXwq3Ezdvf3ATvfw1df16ms0Z9YS0qPR8QpdIby6GBlklrrUWhnWgNbgL6Vtgj1bgfS4Om5GjWqsbPaYmfXjNTq+gXTq8MBeBVNbANRz41P7HbWjdtSO2lE7akPqjReVyvoG4pw4pK5XKi9UU+oa1A15bRKotoZq/NzbwJTKE8Nq2spnlFuzVPlQlXf3KdC/N6qGhzptkdqp4VenNd3QM82YWmUvnU+SaTiPNBjawjoqxtTsa7j7cfUpM3P3RnWTDXGGq41jXa0EcwoGBg+5XKbVgYjkYdVaPpQRxWyg0xwThLBZddYlimImoDdnRcIs7hgKhqOxnDl1GjQdkwxcYUM+nXmWDXkNqKUopiizYpNMK9wESaPpDrSGsnxoiFpyu84FAgFl3ifq8KUUMjQrcs556ZCveygQ7KsOi6MS62O+Lo6Mq98uHF3dN5HYqOacR+iHZ26kNKLS4F/DD1oU+yOSga5nOGc24nhMMv6EJxL354xI56IxD2hNIp26HnNH4+E5fzCXc7lcREW2uVzQPxeORuGZveDg4PA3gF4g7wzSBjn5sEHrdmOCG6xuWrhRMMXtEb1tRAtmWpsslbAPZGkoYSq4XoIPWcE6vKbVMi6VofOKcZnKtDotILPOdF0FrFSkAaiiMnUFNW8Na1rrRnWj1ESrja5WNzGftdy+7q6WIZCR1BXtkU6Ngy64Ol2HG+M+yYq6qqqaxprLJfh5poYAVsqHyrDWoA+nrOxGQq0GW8xKxpxgs54tx62satyoYxoIawKzFjcCVIiXqi3k3P5KrNJNqV3Qh7y71W5eGreiZoGUSPJqrUvtNlEa52oWCKhFpobkVWoUvS21bLY07mKeGt2wZvemttEOxNtOxmO6NA5rS22igXpde9xo78ZpEr5aYybZVGmcrxAAVogbA3SoTuIRvLA0y9QUk02WxmEyipeiwO6JpZV0e37sTRbq4taItOrg0BXnQ3A6YCcJ8q+Dg4ODg8O/ZersxPJkuzoszSyFzkzZpJ5EhLZtcZl8dvOiPeokAi4sNLv3CFi2p6p8BlGurTL1BAJCK5J9arQ0KTE1IzllmxoCP8/VELiNagicq9GlVdvUEHhhMcQ/W1qR7FOjS8kQ4kwkz9ul7uX0gv1qHvjY1LDC7VZz1sanRuNTT4xNPTG2QEJr0rgW34zti4+/R9mlXoIDnZNctO1Av1RY0KknVq4KdqlvLggL/E11eUYS7FInp/SngtP2nQom4IoB1Dxmm9TLq5KgU6+dF+xSn+64WFiCmEdnhcXML3EgZpv+unoyFOKrTJoMhW4tCg4ODg4ODg4ODg4O/wl/AFa6vK+xTUWbAAAAAElFTkSuQmCC";
// TY.icons="./playerIcons.png";

TY.templates = {
	svg_template: '<div style="display:none"><svg><symbol id="process_bg"><line x1="0" y1="2" x2="2000" y2="2" style="stroke:#fff; stroke-width:2; fill-opacity:0.5"/></symbol><symbol id="process"><line x1="0" y1="2" x2="2000" y2="2" style="stroke:#7c85db;stroke-width:2"/></symbol><symbol id="process_btn"><circle cx="12" cy="12" r="12" style="fill:#fff; fill-opacity:0.5"/><circle cx="12" cy="12" r="6" style="fill:#fff"/></symbol><symbol id="play"><polyline class="play" points="0,0  14,9  0,18" style="stroke:#fff;fill:#fff;"/></symbol><symbol id="pause"><line class="pause" x1="2" y1="0" x2="2" y2="18" stroke="#fff" stroke-width="5" /><line class="pause" x1="11" y1="0" x2="11" y2="18" stroke="#fff" stroke-width="5" /></symbol><symbol id="control_btn_bg"><circle cx="25" cy="25" r="25" style="fill:#000; fill-opacity:0.3"/></symbol></svg></div>',

	replay: '<div class="h5_player_tip_btn" style="background-size:100% 100%;width:100%;height:100%;position:absolute;left:0;top:0;z-index:20"><div class="h5_player_pause" style="display:none;left:50%;background-image:url('+TY.icons+');z-index:4;position:absolute;width:90px;height:90px;top:50%;margin-left:-45px;margin-top:-45px;"></div><div class="h5_player_waiting" style="display:none;left:50%;background-image:url('+TY.icons+');z-index:4;position:absolute;width:90px;height:100px;top:50%;margin-left:-45px;margin-top:-50px;background-position:left -90px"></div><div class="h5_player_warning" style="display:none;left:50%;background-image:url('+TY.icons+');z-index:4;position:absolute;width:90px;height:130px;top:50%;margin-left:-45px;margin-top:-65px;background-position:left -190px"></div></div><div class="h5_player_process_bar" style="width:100%;height:18px;position:absolute;bottom:30px;left:0;z-index:20"><svg class="process_bg" style="position:absolute;height:10px;width:100%;left:0;bottom:0"><use xlink:href="#process_bg"/></svg><svg class="process_line" style="position:absolute;height:10px;width:100%;left:0;bottom:0"><use xlink:href="#process"/></svg><svg class="process_btn" style="position:absolute;width:48px;height:48px;bottom:-28px"><use xlink:href="#process_btn"/></svg></div><div class="h5_player_process_forward" style="display:none;position:absolute;left:50%;top:65%;width:100px;height:50px;margin-top:-25px;margin-left:-50px"><div class="bg" style="filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;background-color:#fff;width:100px;height:50px;position:absolute;left:50%;margin-top:-22px;margin-left:-50px;border-radius:5px;-webkit-border-radius:5px;padding:20px 0 15px"></div><div class="forward" style="width:40px;height:32px;background-image:url('+TY.icons+');background-position:left -330px;margin:0 auto"></div><div class="time" style="padding:5px;text-align:center;color:#fff;font-size:14px;font-size:14px;line-height:14px;-webkit-text-shadow:0 1px 0 #000;-moz-text-shadow:0 1px 0 #000;-ms-text-shadow:0 1px 0 #000;-o-text-shadow:0 1px 0 #000;text-shadow:0 1px 0 #000;">00:00</div></div>'

}


TY.videoUrl = "";
TY.videoDiv = '<div class="h5_player" style="width: 100%; height: 100%; margin: 0;padding: 0; border: 0;font: inherit; vertical-align: baseline;"></div>';
TY.videoTemplate = '<video id="video"  webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-type="h5" playsinline width="100%"  preload="auto" poster="" src="' + TY.videoUrl + '" ></video>';
TY.videoBgTemplate = '<div class="h5_player_bg" style="position:absolute;width:100%;height:100%;top:0;background-position:center;background-size: cover; background-color:transparent;;background-image:url()"></div>';

TY.dpr = window.devicePixelRatio || 1;



TY.jsURL = function(_name) {
	var js = document.scripts;
	var jsPath;
	for (var i = js.length; i > 0; i--) {
		if (js[i - 1].src.indexOf(_name) > -1) {
			jsPath = js[i - 1].src.substring(0, js[i - 1].src.lastIndexOf("/") + 1);
		}
	}
	return jsPath;
}


TY.isAndroid = /Android/i.test(navigator.userAgent);
TY.isIphone = /iphone/i.test(navigator.userAgent);
TY.isChrome = /chrome\//i.test(navigator.userAgent);
TY.isWeixin = /MicroMessenger\//i.test(navigator.userAgent);
TY.isWeibo = /Weibo/i.test(navigator.userAgent);

TY.isMobileDevice = isMobileDevice;

function isMobileDevice() {
	var e = navigator.userAgent.toLowerCase();
	return !!/(iphone|ios|android|mini|mobile|mobi|nokia|symbian|ipod|ipad|ws\s+phone|mqqbrowser|wp7|wp8|ucbrowser7|ucweb|360\s+aphone\s+browser)/i.test(e)
}
TY.isIosDevice = function() {
	var e = navigator.userAgent.toLowerCase(),
		t = !!e.match(/\(i[^;]+;( U;)? cpu.+mac os x/),
		n = e.indexOf("iphone") > -1 || e.indexOf("Mac") > -1,
		r = e.indexOf("ipad") > -1;
	return !!(t || r || n)
}


TY.browserTypeInfo = function() {
	var t = navigator.userAgent.toLowerCase(),
		n = t.indexOf("trident") > -1,
		r = t.indexOf("presto") > -1,
		i = t.indexOf("applewebkit") > -1,
		o = t.indexOf("Gecko") > -1 && -1 === t.indexOf("KHTML"),
		a = t.indexOf("chrome") > -1,
		u = !!t.match(/\(i[^;]+;( U;)? cpu.+mac os x/),
		c = t.indexOf("android") > -1 || t.indexOf("Linux") > -1,
		l = t.indexOf("iphone") > -1 || t.indexOf("Mac") > -1,
		d = t.indexOf("ipad") > -1,
		f = -1 === t.indexOf("safari"),
		p = {
			ie: n,
			op: r,
			wk: i,
			cr: a,
			mz: o,
			io: u,
			an: c,
			ih: l,
			id: d,
			wa: f
		};
	return p;
}



TY.formatTime = function(e) {
	var t = "",
		n = parseInt(e),
		r = n % 60,
		i = parseInt(n / 60),
		o = 0;
	return i > 60 && (o = parseInt(i / 60), i = parseInt(i % 60)), 10 > i && (i = "0" + i), 10 > r && (r = "0" + r), 10 > o && (o = "0" + o), t = o + ":" + i + ":" + r
}
/**
 * @author waterTian
 */
TY.EventDispatcher = function() {}
TY.EventDispatcher.prototype = {
	constructor: TY.EventDispatcher,
	addEventListener: function(type, listener) {
		if (!this._listeners) {
			this._listeners = {};
		} else {
			this.removeEventListener(type, listener);
		}

		if (!this._listeners[type]) this._listeners[type] = []
		this._listeners[type].push(listener);

		return listener;
	},

	hasEventListener: function(type, listener) {
		var listeners = this._listeners;
		return !!(listeners && listeners[type]);
	},

	removeEventListener: function(type, listener) {
		if (!this._listeners) return;
		if (!this._listeners[type]) return;

		var arr = this._listeners[type];
		for (var i = 0, l = arr.length; i < l; i++) {
			if (arr[i] == listener) {
				if (l == 1) {
					delete(this._listeners[type]);
				}
				// allows for faster checks.
				else {
					arr.splice(i, 1);
				}
				break;
			}
		}
	},
	removeAllEventListeners: function(type) {
		if (!type)
			this._listeners = null;
		else if (this._listeners)
			delete(this._listeners[type]);
	},

	dispatchEvent: function(eventName, eventTarget) {
		var ret = false,
			listeners = this._listeners;

		if (eventName && listeners) {
			var arr = listeners[eventName];
			if (!arr) return ret;

			arr = arr.slice();
			// to avoid issues with items being removed or added during the dispatch

			var handler, i = arr.length;
			while (i--) {
				var handler = arr[i];
				ret = ret || handler(eventTarget);
			}

		}
		return !!ret;
	}
};
/**
 * @author waterTian
 */

TY.TYskin = function(_v, _d, _l, _bottom) {
	var scope = this;

	this.isToPlayed = false;

	this._video = _v;
	this._dom = _d;
	this._isLive = _l;

	this._isProcessing = 0;
	this._isWaiting = 0;

	this._dom.append(TY.templates.replay);

	this.pause = $(".h5_player_pause");
	this.waiting = $(".h5_player_waiting");
	this.warning = $(".h5_player_warning");
	this.tip_btn = $(".h5_player_tip_btn");
	this.process_bar = $(".h5_player_process_bar");

	this.tip_btn.height(this.tip_btn.height() - 60 * TY.dpr);
	this.pause.css("top", (this.tip_btn.height() + 40 * TY.dpr) / 2);
	this.waiting.css("top", (this.tip_btn.height() + 40 * TY.dpr) / 2);
	this.warning.css("top", (this.tip_btn.height() + 40 * TY.dpr) / 2);


	this.process_bar_bottom = 0;
	if (_bottom) this.process_bar_bottom = -_bottom;

	this.process_bar.css({
		width: $(window).width() - (40 * TY.dpr),
		height: 20 * TY.dpr,
		left: 20 * TY.dpr,
		bottom: 25 * TY.dpr
	});

	this.process_bar.find(".process_btn").css("transform", 'scale(' + TY.dpr + ',' + TY.dpr + ')');
	this.process_bar.find(".process_btn").css("bottom", -28 - (TY.dpr - 1) * 8);
	this.process_bar.find(".process_bg").css("transform", 'scaleY(' + TY.dpr + ')');
	this.process_bar.find(".process_line").css("transform", 'scaleY(' + TY.dpr + ')');

	this.process_bar.find(".process_bg").css("width", this.process_bar.width());
	this.process_bar.find(".process_line").css("width", 0);

	this.process_bar.hide();
	this.hideProcessBar();

	$(".h5_player_process_forward").css("transform", 'scale(' + TY.dpr + ',' + TY.dpr + ')');

	this._dom.append(TY.templates.svg_template);


	var addEvents = function() {
		var btn = document.querySelector(".h5_player_tip_btn");
		btn.addEventListener("touchstart", tipTouchstart);
		btn.addEventListener("touchmove", tipTouchmove);
		btn.addEventListener("touchend", tipTouchend);

		document.querySelector(".h5_player_pause").addEventListener("touchend", function(e) {
			e.stopPropagation();
			scope._video.paused ? scope.toPlay() : scope.toPause();
			scope.dispatchEvent("VidoeClick", scope);
		});

		document.querySelector(".process_btn").addEventListener("touchstart", processTouchstart);
		document.querySelector(".process_btn").addEventListener("touchmove", processTouchmove);
		document.querySelector(".process_btn").addEventListener("touchend", processTouchend);
		document.querySelector(".h5_player_process_bar").addEventListener("touchstart", barTouchstart);
		document.querySelector(".h5_player_process_bar").addEventListener("touchmove", barTouchmove);
		document.querySelector(".h5_player_process_bar").addEventListener("touchend", barTouchend);
	}

	var _sy = 0,
		_my = 0;
	var tipTouchstart = function(e) {
		e.stopPropagation(); //不再派发事件
		_sy = e.touches[0].pageY;
	}

	var tipTouchmove = function(e) {
		e.preventDefault(); //取消事件的默认动作
		e.stopPropagation(); //不再派发事件
		_my = e.touches[0].pageY;
	}

	var tipTouchend = function(e) {
		e.stopPropagation(); //不再派发事件
		(Math.abs(Math.abs(_my) - Math.abs(_sy)) <= 5 || 0 == _my) ?
		(scope._video.paused ? scope.toPlay() : scope.toPause()) :
		((scope.process_bar.css("display") == "none") ? scope.showProcessBar() : scope.hideProcessBar());
		_sy = 0;
		_my = 0;

		scope.dispatchEvent("VidoeClick", scope);
	}


	var l;
	var forwardNum;

	var processTouchstart = function(e) {
		e.stopPropagation();
		scope._isProcessing = 1;
	}

	var processTouchmove = function(e) {
		e.preventDefault(); //取消事件的默认动作
		e.stopPropagation(); //不再派发事件
		scope._isProcessing = 1;

		var t = $(".process_btn"),
			i = $(".h5_player_process_bar"),
			n = e.touches[0].pageX - parseInt(i.css("left")) - parseInt(t.width()) / 4;
		0 > n ? n = 0 : n > i.width() - t.width() + parseInt(t.width()) / 2 && (n = i.width() - t.width() + parseInt(t.width()) / 2);
		l = n;
		scope.setProcess(n);

		//forward div
		$(".h5_player_process_forward").show();
		var _duration = parseInt(scope._video.duration);
		var s = _duration * n / parseInt($(".process_bg").width());
		$(".h5_player_process_forward .time").html(TY.formatTime(s));
		if (s > forwardNum) $(".h5_player_process_forward .forward").css("transform", 'rotate(0deg)');
		if (s < forwardNum) $(".h5_player_process_forward .forward").css("transform", 'rotate(180deg)');
		forwardNum = s;
	}

	var processTouchend = function(e) {
		e.stopPropagation();
		scope._isProcessing = 0;
		$(".h5_player_process_forward").hide();
		var t = parseInt(scope._video.duration),
			n = t * l / parseInt($(".process_bg").width());
		scope.seek(n);
	}

	var _bar_x;
	var barTouchstart = function(e) {
		_bar_x = e.touches[0].pageX;
	}

	var barTouchmove = function(e) {
		e.preventDefault(); //取消事件的默认动作
		e.stopPropagation(); //不再派发事件
		_bar_x = e.touches[0].pageX;
	}

	var barTouchend = function(e) {
		var t = $(".process_btn"),
			i = $(".h5_player_process_bar"),
			n = _bar_x - parseInt(i.css("left")) - parseInt(t.width()) / 4;
		0 > n ? n = 0 : n > i.width() - t.width() + parseInt(t.width()) / 2 && (n = i.width() - t.width() + parseInt(t.width()) / 2);
		scope.setProcess(n);
		var r = parseInt(scope._video.duration),
			s = r * n / parseInt($(".process_bg").width() - t.width() + parseInt(t.width()) / 2);
		scope.seek(s);
		_bar_x = 0;
	}


	if (this._isLive) {
		document.querySelector(".h5_player_tip_btn").addEventListener("touchmove", function(e) {
			e.preventDefault(); //取消事件的默认动作
			e.stopPropagation(); //不再派发事件
		});
		document.querySelector(".h5_player_tip_btn").addEventListener("touchend", function(e) {
			e.stopPropagation(); //不再派发事件
			if (scope._video.paused) scope.toPlay();
			scope.dispatchEvent("VidoeClick", scope);
		});
		document.querySelector(".h5_player_pause").addEventListener("touchend", function(e) {
			e.stopPropagation(); //不再派发事件
			if (scope._video.paused) scope.toPlay();
			scope.dispatchEvent("VidoeClick", scope);
		});
		this.process_bar.hide();
	} else {
		addEvents();
	}


};
TY.TYskin.prototype = {
	constructor: TY.TYskin,
	showPause: function() {
		if (this._isProcessing) return !1;
		if (this._isWaiting) return !1;
		this.pause.show();
		this.pause.css("opacity", 0);
		this.pause.css("transform", 'scale(.1,.1)');
		this.pause.animate({
			opacity: 1,
			transform: 'scale(' + TY.dpr + ',' + TY.dpr + ')'
		}, 100, 'ease-out')
	},
	hidePause: function() {
		var scope = this;
		this.pause.animate({
			opacity: 0,
			transform: 'scale(' + 2 * TY.dpr + ',' + 2 * TY.dpr + ')'
		}, 100, 'ease-out', function() {
			scope.pause.hide();
		})
	},
	showProcessBar: function() {
		if (!this.isToPlayed) return;
		var scope = this;
		this.process_bar.show();
		this.updateBar();
		this.process_bar.animate({
			transform: 'translate(0px,' + scope.process_bar_bottom + 'px)'
		}, 300, 'ease-out')
	},
	hideProcessBar: function() {
		var scope = this;
		this.process_bar.animate({
			transform: 'translate(0px,' + 80 * TY.dpr + 'px)'
		}, 300, 'ease-out', function() {
			scope.process_bar.hide();
		})
	},

	hide_icon: function() {
		this.hidePause();
		this.waiting.hide();
		this.warning.hide();
		this.tip_btn.css("margin-left", "-1px")
	},
	updateBar: function() {
		if (this._isLive) return !1;
		if (this._isProcessing) return !1;
		var e = parseInt(this._video.duration),
			t = parseInt(this._video.currentTime),
			n = parseInt($(".process_bg").width() - $(".process_btn").width() / 2 + 12) * t / e;
		this.setProcess(n);
	},
	setProcess: function(e) {
		$(".process_line").css({
			width: e + 10
		}), $(".process_btn").css({
			left: e
		})
	},
	seek: function(e) {
		this._video.currentTime = e
	},
	toPlay: function() {
		this._video.play();
		if (!this.isToPlayed) {
			TY.Log("isToPlayed");
			this.isToPlayed = true;
		}
	},
	toPause: function() {
		this._video.pause();
	},
	showWaiting: function() {
		if (this._isProcessing) return !1;
		this.hide_icon();
		this._isWaiting = 1;
		this.waiting.show();
		this.waiting.css("opacity", 0);
		this.waiting.css("transform", 'scale(.1,.1)');
		this.waiting.animate({
			opacity: 1,
			transform: 'scale(' + TY.dpr + ',' + TY.dpr + ')'
		}, 100, 'ease-out')
	},
	hideWaiting: function() {
		var scope = this;
		this._isWaiting = 0;
		this.waiting.animate({
			opacity: 0,
			transform: 'scale(' + 2 * TY.dpr + ',' + 2 * TY.dpr + ')'
		}, 100, 'ease-out', function() {
			scope.waiting.hide();
		})
	},

	showWarning: function() {
		if (this._isProcessing) return !1;
		this.hide_icon();
		this.warning.show();
		this.warning.css("opacity", 0);
		this.warning.css("transform", 'scale(.1,.1)');
		this.warning.animate({
			opacity: 1,
			transform: 'scale(' + TY.dpr + ',' + TY.dpr + ')'
		}, 100, 'ease-out')
	},
	removeThis: function() {

	}
};
TY.extend(TY.TYskin.prototype, TY.EventDispatcher.prototype);
/**
 * @author waterTian
 */
TY.TYplayer = function(videoUrl, divID, videoBg, isLive ,skin_bottom) {
    var scope = this;

    this._dom = $(divID);

    if (TY.isAndroid) TY.dpr = 1;

    //////
    this._dom.append(TY.videoDiv);
    var h5_player = this._dom.find(".h5_player");
    h5_player.append(TY.videoTemplate);

    //videoBg
    h5_player.append(TY.videoBgTemplate);
    $(".h5_player_bg").css("background-image", 'url(' + videoBg + ')');
    showPlayerBg();

    //video
    this._video = h5_player.find("video")[0];
    this._video.src = videoUrl;
    addVideoEvents(this._video);

    //skin
    this._skin = new TY.TYskin(this._video, this._dom, isLive ,skin_bottom);
    this._skin.showPause();
    this._skin.setProcess(0);
    this._skin.addEventListener("VidoeClick", function(e) {
        scope.dispatchEvent("VidoeClick", e);

        setVideoPostion();
    });

    function setVideoPostion() {
        if (TY.isAndroid) return;
        var _vh = scope._video.clientHeight;
        var _h = $(window).height();
        var _top = (_h - _vh);
        $("#video").css("margin-top", _top);

        setTimeout(function() {
            var _vh = scope._video.clientHeight;
            var _h = $(window).height();
            var _top = (_h - _vh);
            $("#video").css("margin-top", _top);
        }, 1000)
    }


    function showPlayerBg() {
        $(".h5_player_bg").css("opacity", 0);
        $(".h5_player_bg").css("transform", 'scale(1.5,1.5)');
        $(".h5_player_bg").animate({
            opacity: 1,
            transform: 'scale(1,1)'
        }, 300, 'ease-out')
    }

    function hildPlayerBg() {
        if ($(".h5_player_bg")[0].style.display == "none") return;
        setTimeout(function() {
            $(".h5_player_bg").animate({
                opacity: 0,
                transform: 'scale(1.5,1.5)'
            }, 300, 'ease-out', function() {
                $(".h5_player_bg").hide();
            });
            if (!isLive) scope._skin.showProcessBar();
        }, 300);
    }


    function addVideoEvents(_v) {
        _v.addEventListener("error", videoError, false);

        _v.addEventListener("loadstart", function() { //客户端开始请求数据
            TY.Log("loadstart");
            scope._skin.showPause();
        }, false);
        _v.addEventListener("loadedmetadata", function() {
            TY.Log("loadedmetadata");
        }, false);
        _v.addEventListener("loadeddata", function() {
            TY.Log("loadeddata_"+_v.clientHeight);
        }, false);
        _v.addEventListener("waiting", function() {
            TY.Log("waiting");
            scope._skin.showWaiting();
        }, false);
        _v.addEventListener("canplay", function() {
            TY.Log("canplay")
            scope._skin.hideWaiting();
        }, false);
        _v.addEventListener("canplaythrough", function() {}, false); //可以播放，歌曲全部加载完毕
        _v.addEventListener("play", function() {
            TY.Log("play");
        }, false);
        _v.addEventListener("playing", function() {
            TY.Log("playing");
            if (scope._skin.isToPlayed) hildPlayerBg();
            if (scope._skin.isToPlayed) scope._skin.hidePause();
            setVideoPostion();

        }, false);
        _v.addEventListener("pause", function() {
            TY.Log("pause");
            scope._skin.showPause();
        }, false);
        _v.addEventListener("ended", function() {
            TY.Log("ended");
            scope._skin.seek(0);
            scope.dispatchEvent("VidoeEnd", scope);
        }, false);
        _v.addEventListener("progress", function() {}, false);
        _v.addEventListener("suspend", function() {}, false); //延迟下载
        _v.addEventListener("abort", function() {}, false); //客户端主动终止下载（不是因为错误引起）
        _v.addEventListener("stalled", function() { //网速失速
            TY.Log("stalled")
        }, false);

        _v.addEventListener("seeking", function() {
            TY.Log("seeking")
        }, false);
        _v.addEventListener("seeked", function() {}, false);
        _v.addEventListener("ratechange", function() {}, false); //播放速率改变
        _v.addEventListener("durationchange", function() {}, false); //资源长度改变
        _v.addEventListener("volumechange", function() {}, false); //音量改变
        _v.addEventListener("timeupdate", function() {
            // TY.Log("timeupdate");
            update_time();
        }, false);

    }

    function videoError() {
        var err = {};
        err.code = scope._video.error.code;
        err.error = ""
        switch (err.code) {
            case 1:
                err.error = "播放过程中用户终止";
                break;
            case 2:
                err.error = "播放过程中网络错误";
                break;
            case 3:
                err.error = "播放过程中解码错误";
                break;
            case 4:
                err.error = "播放过程中URL无效"
        }
        TY.Log("player VidoeError:" + err.error);

        scope.dispatchEvent("VidoeError", err);

        scope._skin.showWarning();
        scope._skin.showWarning();
    }


    function update_time() {
        scope._skin.updateBar();
    }
};


TY.TYplayer.prototype = {
    constructor: TY.TYplayer,
    toPlay: function() {
        this._skin.toPlay();
    },
    removeThis: function() {
        document.addEventListener("touchmove", function(e) {});
        this._skin.removeThis();
        this._video.remove();
        var videoBox = this._dom.get(0)
        var _num = videoBox.childNodes.length;
        for (var i = 0; i < _num; ++i) {
            videoBox.removeChild(videoBox.childNodes[0]);
        }
    }
};
TY.extend(TY.TYplayer.prototype, TY.EventDispatcher.prototype);