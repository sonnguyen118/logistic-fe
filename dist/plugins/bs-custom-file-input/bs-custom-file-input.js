/*! For license information please see bs-custom-file-input.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).bsCustomFileInput=t()}(this,(function(){"use strict";var e={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},t=function(t){var n="",r=t.parentNode.querySelector(e.CUSTOMFILELABEL);return r&&(n=r.textContent),n},n=function(e){if(e.childNodes.length>0)for(var t=[].slice.call(e.childNodes),n=0;n<t.length;n++){var r=t[n];if(3!==r.nodeType)return r}return e},r=function(t){var r=t.bsCustomFileInput.defaultText,l=t.parentNode.querySelector(e.CUSTOMFILELABEL);l&&(n(l).textContent=r)},l=!!window.File,i=function(e){if(e.hasAttribute("multiple")&&l)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var t=e.value.split("\\");return t[t.length-1]}return e.value};function o(){var t=this.parentNode.querySelector(e.CUSTOMFILELABEL);if(t){var l=n(t),o=i(this);o.length?l.textContent=o:r(this)}}function u(){for(var t=[].slice.call(this.querySelectorAll(e.INPUT)).filter((function(e){return!!e.bsCustomFileInput})),n=0,l=t.length;n<l;n++)r(t[n])}var c="bsCustomFileInput",f="reset",a="change";return{init:function(n,r){void 0===n&&(n=e.CUSTOMFILE),void 0===r&&(r=e.FORM);for(var l=[].slice.call(document.querySelectorAll(n)),i=[].slice.call(document.querySelectorAll(r)),s=0,d=l.length;s<d;s++){var v=l[s];Object.defineProperty(v,c,{value:{defaultText:t(v)},writable:!0}),o.call(v),v.addEventListener(a,o)}for(var p=0,m=i.length;p<m;p++)i[p].addEventListener(f,u),Object.defineProperty(i[p],c,{value:!0,writable:!0})},destroy:function(){for(var t=[].slice.call(document.querySelectorAll(e.FORM)).filter((function(e){return!!e.bsCustomFileInput})),n=[].slice.call(document.querySelectorAll(e.INPUT)).filter((function(e){return!!e.bsCustomFileInput})),l=0,i=n.length;l<i;l++){var s=n[l];r(s),s[c]=void 0,s.removeEventListener(a,o)}for(var d=0,v=t.length;d<v;d++)t[d].removeEventListener(f,u),t[d][c]=void 0}}}));