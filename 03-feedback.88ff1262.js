!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,o,a,u,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,l=setTimeout(T,t),s?y(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function T(){var e=p();if(O(e))return h(e);l=setTimeout(T,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function h(e){return l=void 0,v&&r?y(e):(r=o=void 0,u)}function w(){var e=p(),n=O(e);if(r=arguments,o=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(T,t),y(f)}return void 0===l&&(l=setTimeout(T,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=o=l=void 0},w.flush=function(){return void 0===l?u:h(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),O="feedback-form-state",T=document.querySelector("input"),h=document.querySelector("textarea");if(j.addEventListener("input",e(t)((function(e){var t={email:"",message:""};"INPUT"===e.target.nodeName?(t.email=e.target.value,t.message=h.value):(t.message=e.target.value,t.email=T.value);localStorage.setItem(O,JSON.stringify(t))}),500)),j.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;if(!n.value||!r.value)return void alert("Please fill out all the fields!");console.log(JSON.parse(localStorage.getItem(O))),j.reset(),localStorage.clear()})),localStorage.getItem(O)){var w=JSON.parse(localStorage.getItem(O)),N=w.email,x=w.message;T.value=N,h.value=x}}();
//# sourceMappingURL=03-feedback.88ff1262.js.map
