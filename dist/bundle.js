(()=>{"use strict";var e={975:(e,t,n)=>{e.exports=n.p+"19dffc3d3cdfe871ba2c.wasm"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}let r;n.m=e,n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href;let o=null;function a(){return(null===o||!0===o.buffer.detached||void 0===o.buffer.detached&&o.buffer!==r.memory.buffer)&&(o=new DataView(r.memory.buffer)),o}const i="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&i.decode();let s=null;async function c(e){if(void 0!==r)return r;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module_or_path:e}=e):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===e&&(e=new URL(n(975),n.b));const t={wbg:{}};("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:a,module:i}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,t);return function(e,t){return r=e.exports,c.__wbindgen_wasm_module=t,o=null,s=null,r}(a,i)}const f=c;!async function(){await f();const e=document.getElementById("praise-button"),t=document.getElementById("greeting");e.addEventListener("click",(()=>{t.textContent=function(){let e,t;try{const u=r.__wbindgen_add_to_stack_pointer(-16);r.greet(u);var n=a().getInt32(u+0,!0),o=a().getInt32(u+4,!0);return e=n,t=o,c=n,f=o,c>>>=0,i.decode((null!==s&&0!==s.byteLength||(s=new Uint8Array(r.memory.buffer)),s).subarray(c,c+f))}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(e,t,1)}var c,f}()}))}()})();