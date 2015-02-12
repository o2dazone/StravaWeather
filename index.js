(function(d, w){
  /* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
  var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);

  var wundergroundKey = localStorage.getItem('strava-weather-wunderground-key') || null,
      stravaKey = localStorage.getItem('strava-weather-strava-key') || null;

  var effortNum = 3; // number of leaders on a segment should we fetch weather data for



  var apiUrl = '//api.wunderground.com/api/',
      apiref = '29a88f63f2af2eab';

  /* gather data from localStorage or API for individual activity */
  function fetchActivityWeather(data, id) {
    var date = data.start_date_local_raw || data.start_date_local,
        coords = data.start_latlng,
        localWeather = localStorage['activity-' + id] || null;

    if (localWeather) {
      renderActivityWeather(JSON.parse(localWeather), date, coords);
    } else {

      $.getJSON(getForecastUrl(coords, date), function(weatherData) {
        localStorage.setItem('activity-' + id, JSON.stringify(weatherData));
        renderActivityWeather(weatherData, date, coords);
      });
    }
  }

  /* gather data from localStorage or API for segments */
  function fetchEffortWeather(data, coords) {
    $.each(data, function(i, athleteInfo){
      var date = athleteInfo.start_date_local_raw || athleteInfo.start_date_local;
      var id = athleteInfo.effort_id;
      var localWeather = localStorage['effort-' + id] || null;
      // if local storage weather is already set

      if (i < effortNum) {
        if (localWeather) {
          renderEffortWeather(JSON.parse(localWeather), id, date, coords);
        } else { // if its not set, call wunderground api
          $.getJSON(getForecastUrl(coords, date), function(weatherData) {
            localStorage.setItem('effort-' + id, JSON.stringify(weatherData));
            renderEffortWeather(weatherData, id, date, coords);
          });
        }
      }
    });

  }


  function getDates(date) {
    date = date.split('T')[0].split('-');
    month = new Date(Date.parse(date[1] +" 1, 2012")).getMonth()+1;

    return {
      year: date[0],
      month: month,
      day: date[2]
    };
  }

  function getWindAvg(weather, date) {
    var observations = weather.history.observations, i, len;

    var hour = date.split('T')[1].split(':')[0];
    var avgSpeed = 0, avgDir = 0, match = 0;

    for (i = 0, len = observations.length; i < len; i++) {
      var hourWeather = observations[i];
      if (+hourWeather.date.hour === +hour && hourWeather.wspdi != '-9999') {

        avgSpeed += +hourWeather.wspdi;
        if (+hourWeather.wdird > 179) {
          hourWeather.wdird = +hourWeather.wdird - 360;
        }
        avgDir += +hourWeather.wdird;
        match++;
      }
    }

    if (match) {
      avgSpeed = (avgSpeed/match);
      avgDir = (avgDir/match);
    }

    return {
      speed: avgSpeed,
      direction: avgDir
    };
  }

  /* create and inject activity wind data */
  function renderActivityWeather(weather, date, coords) {
    var wind = getWindAvg(weather, date);
    var date = getDates(date);

    var activityDom = d.querySelector('.inline-stats');
    activityDom.innerHTML += [
                              '<li>',
                                '<strong>',
                                  '<a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?airportorwmo=query&historytype=DailyHistory&backurl=%2Fhistory%2Findex.html&code=', coords.join(','), '&month=', date.month, '&day=', date.day, '&year=', date.year, '&apiref=', apiref, '" target="_blank">',
                                    getWind(wind.speed, wind.direction),
                                  '</a>',
                                '</strong>',
                                '<div class="label">Wind Speed</div>',
                              '</li>'
                             ].join('');
  }

  /* create and inject segment leaderboard wind data */
  function renderEffortWeather(weather, id, date, coords) {
    var wind = getWindAvg(weather, date);
    var date = getDates(date);

    var effortDom = d.querySelector('#results a[href="/segment_efforts/' + id + '"');
    effortDom.parentNode.innerHTML += [
                                        ' - <a href="http://www.wunderground.com/cgi-bin/findweather/getForecast?airportorwmo=query&historytype=DailyHistory&backurl=%2Fhistory%2Findex.html&code=', coords.join(','), '&month=', date.month, '&day=', date.day, '&year=', date.year, '&apiref=', apiref, '" target="_blank">',
                                          getWind(wind.speed, wind.direction),
                                        '</a>',
                                      ].join('');
  }

  function getArrow(dir) {
    dir = dir - 180; // flip arrow around direction the wind is blowing, not coming from
    return '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAMAAAB8FU7dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTlGOUZBNjVBQTVCMTFFNDkzQkM4RkEzNzYwQTJCMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTlGOUZBNjZBQTVCMTFFNDkzQkM4RkEzNzYwQTJCMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OUY5RkE2M0FBNUIxMUU0OTNCQzhGQTM3NjBBMkIwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OUY5RkE2NEFBNUIxMUU0OTNCQzhGQTM3NjBBMkIwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtjKhBAAAAB7UExURQOWx////+b1+hygzPn9/gmYyMjo81+824283KTZ6+Hq84HL42aq0lel0Hax1jqt06rL5HjH4bjh73DD30612JrC3/f8/aHY6mOp0rzV6Selz97x+Beey43Q5gWXx4y73P3+/8Xa7IHK42C93ILL46Xa66nK5KPZ6////xgnzSAAAAApdFJOU/////////////////////////////////////////////////////8AUvQghwAAAKtJREFUeNpc0EUShEAQRNEs3N2d0b7/CaeNGCA3NH/1osD0HOd44Xg83XsybNu4pRcQXpNlAqZ1SW9EEfxLSvHJkJ6Tg5gohnNKLjwiD+4/GTYCogDKIVOIhPgS5YAS7CLtyiGSj4jklANSkKmkHNACNemAFvTr2msHpKDuwNfV0gH2QMJ/h3ke+Ec4IG6wVMXG2FZUi7gHvpjy8TjomE/wUbYNO61py58AAwDvFCNPWj/szAAAAABJRU5ErkJggg=="/ style="transform:rotate(' + dir + 'deg)scale(.7);">';
  }


  /* return wind speed and direction */
  function getWind(speed, dir) {
    if (speed) {
      return [
        Math.round(speed),
        'mph',
        getArrow(dir),
      ].join('');
    } else {
      return 'No Data';
    }
  }

  /* get wunderground endpoint url */
  function getForecastUrl(coords, date) {
    date = date.split('T')[0].split('-').join('');
    return [
      apiUrl, wundergroundKey,
      '/history_',
      date,
      '/q/',
      coords.join(','), '.json?apiref=', apiref
    ].join('');
  }

  /* publish help for setting up wunderground API key */
  function areKeysSet() {
    if (!wundergroundKey) {
      console.warn('It looks as though you don\'t have a Wunderground API key set on your browser. Please navigate to http://www.wunderground.com/weather/api/ and register an account. Don\'t worry, it\'s free. Once you\'ve done this, run this command in your browser:');
      console.log("localStorage.setItem('strava-weather-wunderground-key','<your wunderground key>');");
      console.warn('Once you\'ve done this, refresh the browser.');
    }

    if (!stravaKey) {
      console.warn('You need to set up your own Strava API key (sorry, not publishing mine for now...). You can get your strava API key here https://www.strava.com/settings/api Once youve got a key, set it by running');
      console.log("localStorage.setItem('strava-weather-strava-key','<your strava API key>');");
      console.warn('Once you\'ve done this, refresh the browser.');
    }


    return (!wundergroundKey || !stravaKey) ? false : true;
  }



  /* get wind data for a segment's leaderboard */
  function getSegmentWind() {
    var segmentId = w.location.href.match(/\d+/g)[0];

    // if no segment data exists in localStorage
    if (!localStorage['weatherdata-'+segmentId]) {
      // get segment data via API
      $.getJSON('/api/v3/segments/' + segmentId + '/leaderboard?access_token=' + stravaKey, function(data){
        localStorage.setItem('weatherdata-' + segmentId, JSON.stringify(data.entries));
        $.getJSON('/stream/segments/' + segmentId, function(coords){
          localStorage.setItem('coords-' + segmentId, JSON.stringify(coords.latlng[0]));
          fetchEffortWeather(data.entries,coords.latlng[0]);
        });

      });

    } else {
      // fire looping logic based on localStorage
      fetchEffortWeather(JSON.parse(localStorage['weatherdata-' + segmentId]), JSON.parse(localStorage['coords-' + segmentId]));
    }
  }

  /* get wind data for a single activity */
  function getActivityWind() {
    var activityId = w.location.href.match(/\d+/g)[0];
    var weatherData = localStorage['weatherdata-' + activityId] || null;

    if (!weatherData) {
      // get activity data via API
      $.getJSON('/api/v3/activities/' + activityId + '?access_token=' + stravaKey, function(data){
        localStorage.setItem('weatherdata-' + activityId, JSON.stringify(data));
        fetchActivityWeather(data, activityId);
      });
    } else {
      // fire looping logic based on localStorage
      fetchActivityWeather(JSON.parse(weatherData), activityId);
    }
  }


  function renderWu(el) {
    var logo = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAABfCAMAAADBLeVmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REMzOTNGNzlBQjIwMTFFNEE0NjNENjVBQzExNTVDNDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REMzOTNGN0FBQjIwMTFFNEE0NjNENjVBQzExNTVDNDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQzM5M0Y3N0FCMjAxMUU0QTQ2M0Q2NUFDMTE1NUM0NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQzM5M0Y3OEFCMjAxMUU0QTQ2M0Q2NUFDMTE1NUM0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvN71nsAAAMAUExURQea2C4wMud8Kf7+/srLy7XDAORzKNq/BKrT7bLDGfe7AK/MUP736e+1rfXIrdNDJvvo5YaHidl3Jt5mF+V4KJaXmIir2Xd4ecvc7jh9wvC0j5i1ZOzs7NpYKMzm8+BtJ++8APT09Pa2AGO246mqq8rCDv3npckWAD6d17tbJ9dNJ2ZoaTRuuumWhuHi493d3dFyJf/IANmJLymb9ZXEJfnag/Clb9Q+J9tcJ+hzADV2vvXVajmMzc4nJ9VKJ4zK6/vz191hKOFzdDuV0uFzU7e3uN5rAFVXWMLEJ8prI9e4APfb19LS0yyk9uqqFsQKAJ7JADJmteh/KZm9APrm29hRJ9E1JwCA2C9ZrgCV/Hm/AtlVJ+jz+uuEKf378vj4+OeSaurFANI7A/e5AOSCa/TNw+e9ANdOStRHJvnYwP318mqzZEZISvjEMS+j2/GWRQsND9AvJ91dAPP6/Wi3K9zs9/3EADFhsv3rvYKDhIK74+p9E4myikCp3vfNU84pAP39+vWyAGGuwue4ANM6ADyYuNM5JoSf0SGe2tpTADmCx3WwpdZGA9LOSMsbFtjHAPbekf76+c8oKenDBhdJpvC4AOnFLNhNAOezAO304+/1+v3vy8vimTuR0AA6nssgAL/HADun3UOq3tI8HCmQ0t5wKPn8/tRBGN18Jve8ATmHyuWAUj2Z1T+h2eyGKtlLANxcFTKFytlQEtRAANEzEjOW3iRPqdM+Pe2HLOmCKuKcH/OtAMdTAjuk4M8rJ02q6e29AJ+goXBxc2tsbt5mKPe/H01OUFBSU/r7+2BiY9lUItxiPfLDxeqenEBBQ1xdXs0iH3x9f9dIFyMlJjg5O4uOjubm5/739tZNKjmc2tnZ2lKqycp3JpGSkymKvZHDrzFdsMPW1cDBwenp6eCUA+FvNxgZG1Zzut1jX/zv69AuFfDuwNbW1vK+u/b660un2OqJO+Z/O/XNzSmR0mGCwhyByiSKz1Gf0NTbe9jrxvO4AODrtumBKuaKh3+5df///2jwR00AAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAANvUlEQVR42uybf1gTRxrHCRPxJwJGCtUgBuLRmkqoRoRWULSISDRWERXFaKkWPeSCnChyKaR6FtSjhfqrpUqBQ0WtWrUotXAlIASsKCZEjwPPg5rTira1d7RntXOzm2Qzu4m6UR+bP3z32QeTZXc/fN/3OzM7szrBpx8L09j/rtNvwDehj0Pz7XHyB47MN8wpZ6ED8wH/nJwJDsy30KmkOCXNcfkm5ChLnIY5LF9aSrFSmfI34Kh8w5xKlEql02oH5QMlKQivxGmCg/KtdlISUZyT5ph8E3KI9CIB+zgkX1qO0hgpJXscka+PUT4l6ybm6fLtKU4x6afM8XdAPmPjYnRIykLH4/M3lx9rhzxVvoU5xRSfskoJHI2vjyW9RB8yzNH4/FMwPGVOHwfjA1j5EQ7xf6afnZ0bXn/sDPxU+VbjfOwG0U+VD5TkUIAlc1kNsZ5u+5zmlEL1v8o9j8UHYr6+GXPxvuddjIl1X/FgsQYUFq6dODGb0ULnpJSgRrrKyZ/Krty7k7sa2Ml3+0Re3vmA1LP5No9eXxy+t3TvglGC+9JNfH9lYqIf2srHFuL3TptQkpKTUlw8zPzlR8J5Wysqtv7b2x4+MEkWcD4sLCxPFuZu47BrVlZp+IWRSW+8sfQ+dG+rVH6Jif3QlqhSnV5Ly/EwFFRuvSt2V1TMq5i3e/e7gDUfuCYLM0ZBgOy61eGbRaXh4eEjR85ZcCHLFmA2ouuHhZ9q5YD7OXr31ivziLgyb/e7rPlcZQVhZkBZHPPvcg8oTSLwCMCjWdb4ixJVieX9aKFSFdrE01QgvCskHgLksuTLP58XFmYBvM04/GZWUhKh36U5cxb4HBvFPHuAyo9B169fuZ9tQO7uNVeoqFgjZ8d3WxaG873F8EbWuCRSP4S3wKdpC0PARSq/ftZR7ndqoo07/WcrRYdAt3qz4zuL84WFyegWOVtkxLtE4C0I2TCQXror/V4mwwpwW7bVjfjzrqzBYt5z7Pgm5dH57tGSX1rq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"/ >';
    el.innerHTML += 'Weather data brought to you by <a href="http://www.wunderground.com/?apiref=29a88f63f2af2eab" target="_blank">' + logo + '</a>';
  }




  function init() {
    if (areKeysSet()) {
      // you're on an activities page (sloppy)
      if (w.location.href.indexOf('activities') + 1) {
        renderWu(d.querySelector('.activity-stats .inset'));
        getActivityWind(); return;
      }

      // you're on a segment page. (sloppy)
      if (w.location.href.indexOf('segments') + 1) {
        renderWu(d.querySelector('.ldrboard .filters'));
        getSegmentWind(); return;
      }
    }
  }

  init();

}(document,window));