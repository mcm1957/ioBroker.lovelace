/*! For license information please see b346dd24.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[54930],{54930:function(r,e,t){t.d(e,{D:function(){return T}});var i,c,n,o,a=t(87480),s=t(33310),l=t(38103),p=t(37500),u=t(8636),d=t(51346),f=t(70483);function m(r){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},m(r)}function y(r,e){return e||(e=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}function g(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function h(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function _(r,e,t){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(r,e,t){var i=function(r,e){for(;!Object.prototype.hasOwnProperty.call(r,e)&&null!==(r=k(r)););return r}(r,e);if(i){var c=Object.getOwnPropertyDescriptor(i,e);return c.get?c.get.call(t):c.value}},_(r,e,t||r)}function b(r,e){return b=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},b(r,e)}function v(r){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}();return function(){var t,i=k(r);if(e){var c=k(this).constructor;t=Reflect.construct(i,arguments,c)}else t=i.apply(this,arguments);return w(this,t)}}function w(r,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}function k(r){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},k(r)}var O,j=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&b(r,e)}(l,r);var e,t,a,s=v(l);function l(){var r;return g(this,l),(r=s.apply(this,arguments)).indeterminate=!1,r.progress=0,r.density=0,r.closed=!1,r}return e=l,t=[{key:"open",value:function(){this.closed=!1}},{key:"close",value:function(){this.closed=!0}},{key:"render",value:function(){var r={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},e=48+4*this.density,t={width:"".concat(e,"px"),height:"".concat(e,"px")};return(0,p.dy)(i||(i=y(['\n      <div\n        class="mdc-circular-progress ','"\n        style="','"\n        role="progressbar"\n        aria-label="','"\n        aria-valuemin="0"\n        aria-valuemax="1"\n        aria-valuenow="','">\n        ',"\n        ","\n      </div>"])),(0,u.$)(r),(0,f.V)(t),(0,d.o)(this.ariaLabel),(0,d.o)(this.indeterminate?void 0:this.progress),this.renderDeterminateContainer(),this.renderIndeterminateContainer())}},{key:"renderDeterminateContainer",value:function(){var r=48+4*this.density,e=r/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*t,n=(1-this.progress)*i,o=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return(0,p.dy)(c||(c=y(['\n      <div class="mdc-circular-progress__determinate-container">\n        <svg class="mdc-circular-progress__determinate-circle-graphic"\n             viewBox="0 0 '," ",'">\n          <circle class="mdc-circular-progress__determinate-track"\n                  cx="','" cy="','" r="','"\n                  stroke-width="','"></circle>\n          <circle class="mdc-circular-progress__determinate-circle"\n                  cx="','" cy="','" r="','"\n                  stroke-dasharray="','"\n                  stroke-dashoffset="','"\n                  stroke-width="','"></circle>\n        </svg>\n      </div>'])),r,r,e,e,t,o,e,e,t,6.2831852*t,n,o)}},{key:"renderIndeterminateContainer",value:function(){return(0,p.dy)(n||(n=y(['\n      <div class="mdc-circular-progress__indeterminate-container">\n        <div class="mdc-circular-progress__spinner-layer">\n          ',"\n        </div>\n      </div>"])),this.renderIndeterminateSpinnerLayer())}},{key:"renderIndeterminateSpinnerLayer",value:function(){var r=48+4*this.density,e=r/2,t=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,i=6.2831852*t,c=.5*i,n=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return(0,p.dy)(o||(o=y(['\n        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n          <svg class="mdc-circular-progress__indeterminate-circle-graphic"\n               viewBox="0 0 '," ",'">\n            <circle cx="','" cy="','" r="','"\n                    stroke-dasharray="','"\n                    stroke-dashoffset="','"\n                    stroke-width="','"></circle>\n          </svg>\n        </div>\n        <div class="mdc-circular-progress__gap-patch">\n          <svg class="mdc-circular-progress__indeterminate-circle-graphic"\n               viewBox="0 0 '," ",'">\n            <circle cx="','" cy="','" r="','"\n                    stroke-dasharray="','"\n                    stroke-dashoffset="','"\n                    stroke-width="','"></circle>\n          </svg>\n        </div>\n        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n          <svg class="mdc-circular-progress__indeterminate-circle-graphic"\n               viewBox="0 0 '," ",'">\n            <circle cx="','" cy="','" r="','"\n                    stroke-dasharray="','"\n                    stroke-dashoffset="','"\n                    stroke-width="','"></circle>\n          </svg>\n        </div>'])),r,r,e,e,t,i,c,n,r,r,e,e,t,i,c,.8*n,r,r,e,e,t,i,c,n)}},{key:"update",value:function(r){_(k(l.prototype),"update",this).call(this,r),r.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}],t&&h(e.prototype,t),a&&h(e,a),l}(p.oi);(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],j.prototype,"indeterminate",void 0),(0,a.__decorate)([(0,s.Cb)({type:Number,reflect:!0})],j.prototype,"progress",void 0),(0,a.__decorate)([(0,s.Cb)({type:Number,reflect:!0})],j.prototype,"density",void 0),(0,a.__decorate)([(0,s.Cb)({type:Boolean,reflect:!0})],j.prototype,"closed",void 0),(0,a.__decorate)([l.L,(0,s.Cb)({type:String,attribute:"aria-label"})],j.prototype,"ariaLabel",void 0);var x,z,P=(0,p.iv)(O||(x=[".mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}"],z||(z=x.slice(0)),O=Object.freeze(Object.defineProperties(x,{raw:{value:Object.freeze(z)}}))));function R(r){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},R(r)}function S(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function C(r,e){return C=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},C(r,e)}function B(r){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(r){return!1}}();return function(){var t,i=D(r);if(e){var c=D(this).constructor;t=Reflect.construct(i,arguments,c)}else t=i.apply(this,arguments);return E(this,t)}}function E(r,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(r)}function D(r){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},D(r)}var T=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&C(r,e)}(t,r);var e=B(t);function t(){return S(this,t),e.apply(this,arguments)}return t}(j);T.styles=[P],T=(0,a.__decorate)([(0,s.Mo)("mwc-circular-progress")],T)}}]);