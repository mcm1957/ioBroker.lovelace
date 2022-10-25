/*! For license information please see 62565595.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[79215],{44577:function(t,e,n){var r=n(87480),i=n(33310),o=n(61092),a=n(96762);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,t);var e=l(n);function n(){return c(this,n),e.apply(this,arguments)}return n}(o.K);p.styles=[a.W],p=(0,r.__decorate)([(0,i.Mo)("mwc-list-item")],p)},89833:function(t,e,n){n.d(e,{O:function(){return v}});var r,i,o=n(87480),a=n(86251),u=n(37500),c=n(33310),s=n(8636),l=n(51346),f=n(71260);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var i=b(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(c,t);var e,n,o,a=g(c);function c(){var t;return d(this,c),(t=a.apply(this,arguments)).rows=2,t.cols=20,t.charCounter=!1,t}return e=c,(n=[{key:"render",value:function(){var t=this.charCounter&&-1!==this.maxLength,e=t&&"internal"===this.charCounter,n=t&&!e,i=!!this.helper||!!this.validationMessage||n,o={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":e};return(0,u.dy)(r||(r=p(['\n      <label class="mdc-text-field mdc-text-field--textarea ','">\n        ',"\n        ","\n        ","\n        ","\n        ","\n      </label>\n      ","\n    "])),(0,s.$)(o),this.renderRipple(),this.outlined?this.renderOutline():this.renderLabel(),this.renderInput(),this.renderCharCounter(e),this.renderLineRipple(),this.renderHelperText(i,n))}},{key:"renderInput",value:function(){var t=this.label?"label":void 0,e=-1===this.minLength?void 0:this.minLength,n=-1===this.maxLength?void 0:this.maxLength,r=this.autocapitalize?this.autocapitalize:void 0;return(0,u.dy)(i||(i=p(["\n      <textarea\n          aria-labelledby=",'\n          class="mdc-text-field__input"\n          .value="','"\n          rows="','"\n          cols="','"\n          ?disabled="','"\n          placeholder="','"\n          ?required="','"\n          ?readonly="','"\n          minlength="','"\n          maxlength="','"\n          name="','"\n          inputmode="','"\n          autocapitalize="','"\n          @input="','"\n          @blur="','">\n      </textarea>'])),(0,l.o)(t),(0,f.a)(this.value),this.rows,this.cols,this.disabled,this.placeholder,this.required,this.readOnly,(0,l.o)(e),(0,l.o)(n),(0,l.o)(""===this.name?void 0:this.name),(0,l.o)(this.inputMode),(0,l.o)(r),this.handleInputChange,this.onInputBlur)}}])&&y(e.prototype,n),o&&y(e,o),c}(a.P);(0,o.__decorate)([(0,c.IO)("textarea")],v.prototype,"formElement",void 0),(0,o.__decorate)([(0,c.Cb)({type:Number})],v.prototype,"rows",void 0),(0,o.__decorate)([(0,c.Cb)({type:Number})],v.prototype,"cols",void 0),(0,o.__decorate)([(0,c.Cb)({converter:{fromAttribute:function(t){return null!==t&&(""===t||t)},toAttribute:function(t){return"boolean"==typeof t?t?"":null:t}}})],v.prototype,"charCounter",void 0)},96791:function(t,e,n){var r;n.d(e,{W:function(){return a}});var i,o,a=(0,n(37500).iv)(r||(i=[".mdc-text-field{height:100%}.mdc-text-field__input{resize:none}"],o||(o=i.slice(0)),r=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(o)}}))))},63207:function(t,e,n){n(65660),n(15112);var r,i,o,a=n(9672),u=n(87156),c=n(50856),s=n(48175);(0,a.k)({_template:(0,c.d)(r||(i=["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"],o||(o=i.slice(0)),r=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(o)}})))),is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:s.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,u.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,u.vz)(this.root).appendChild(this._img))}})},21560:function(t,e,n){n.d(e,{ZH:function(){return l},MT:function(){return a},U2:function(){return c},RV:function(){return o},t8:function(){return s}});var r,i=function(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()})).finally((function(){return clearInterval(t)})):Promise.resolve()};function o(t){return new Promise((function(e,n){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return n(t.error)}}))}function a(t,e){var n=i().then((function(){var n=indexedDB.open(t);return n.onupgradeneeded=function(){return n.result.createObjectStore(e)},o(n)}));return function(t,r){return n.then((function(n){return r(n.transaction(e,t).objectStore(e))}))}}function u(){return r||(r=a("keyval-store","keyval")),r}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u();return e("readonly",(function(e){return o(e.get(t))}))}function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return n("readwrite",(function(n){return n.put(e,t),o(n.transaction)}))}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u();return t("readwrite",(function(t){return t.clear(),o(t.transaction)}))}},31157:function(t,e,n){n.d(e,{e:function(){return P}});var r=n(73418);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}},s(t,e,n||t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var i=p(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function d(t){return"horizontal"===t?"row":"column"}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(h,t);var e,n,i,a=f(h);function h(){var t;return u(this,h),(t=a.apply(this,arguments))._itemSize={},t._gaps={},t._padding={},t}return e=h,(n=[{key:"_defaultConfig",get:function(){return Object.assign({},s(p(h.prototype),"_defaultConfig",this),{itemSize:{width:"300px",height:"300px"},gap:"8px",padding:"match-gap"})}},{key:"_gap",get:function(){return this._gaps.row}},{key:"_idealSize",get:function(){return this._itemSize[(0,r.qF)(this.direction)]}},{key:"_idealSize1",get:function(){return this._itemSize[(0,r.qF)(this.direction)]}},{key:"_idealSize2",get:function(){return this._itemSize[(0,r.gu)(this.direction)]}},{key:"_gap1",get:function(){return this._gaps[(t=this.direction,"horizontal"===t?"column":"row")];var t}},{key:"_gap2",get:function(){return this._gaps[d(this.direction)]}},{key:"_padding1",get:function(){var t=this._padding,e=o("horizontal"===this.direction?["left","right"]:["top","bottom"],2),n=e[0],r=e[1];return[t[n],t[r]]}},{key:"_padding2",get:function(){var t=this._padding,e=o("horizontal"===this.direction?["top","bottom"]:["left","right"],2),n=e[0],r=e[1];return[t[n],t[r]]}},{key:"itemSize",set:function(t){var e=this._itemSize,n=parseInt(t.width),r=parseInt(t.height);n!==e.width&&(e.width=n,this._triggerReflow()),r!==e.height&&(e.height=r,this._triggerReflow())}},{key:"_setGap",value:function(t){var e=t.split(" ").map((function(t){return function(t){return"auto"===t?1/0:parseInt(t)}(t)})),n=this._gaps;e[0]!==n.row&&(n.row=e[0],this._triggerReflow()),void 0===e[1]?e[0]!==n.column&&(n.column=e[0],this._triggerReflow()):e[1]!==n.column&&(n.column=e[1],this._triggerReflow())}},{key:"padding",set:function(t){var e=this._padding,n=t.split(" ").map((function(t){return function(t){return"match-gap"===t?1/0:parseInt(t)}(t)}));1===n.length?e.top=e.right=e.bottom=e.left=n[0]:2===n.length?(e.top=e.bottom=n[0],e.right=e.left=n[1]):3===n.length?(e.top=n[0],e.right=e.left=n[1],e.bottom=n[2]):4===n.length&&["top","right","bottom","left"].forEach((function(t,r){return e[t]=n[r]}))}}])&&c(e.prototype,n),i&&c(e,i),h}(r.IE);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e,n){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}},S(t,e,n||t)}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x(t);if(e){var i=x(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return z(this,n)}}function z(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var P=function(t){return Object.assign({type:R},t)},R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(a,t);var e,n,i,o=j(a);function a(){var t;return v(this,a),(t=o.apply(this,arguments))._metrics=null,t.flex=null,t.justify=null,t}return e=a,n=[{key:"_defaultConfig",get:function(){return Object.assign({},S(x(a.prototype),"_defaultConfig",this),{flex:!1,justify:"start"})}},{key:"gap",set:function(t){this._setGap(t)}},{key:"_updateLayout",value:function(){var t=this,e=this.justify,n=_(this._padding1,2),i=n[0],o=n[1],a=_(this._padding2,2),u=a[0],c=a[1];["_gap1","_gap2"].forEach((function(n){var r=t[n];if(r===1/0&&!["space-between","space-around","space-evenly"].includes(e))throw new Error("grid layout: gap can only be set to 'auto' when justify is set to 'space-between', 'space-around' or 'space-evenly'");if(r===1/0&&"_gap2"===n)throw new Error("grid layout: ".concat(d(t.direction),"-gap cannot be set to 'auto' when direction is set to ").concat(t.direction))}));var s={rolumns:-1,itemSize1:-1,itemSize2:-1,gap1:this._gap1===1/0?-1:this._gap1,gap2:this._gap2,padding1:{start:i===1/0?this._gap1:i,end:o===1/0?this._gap1:o},padding2:{start:u===1/0?this._gap2:u,end:c===1/0?this._gap2:c},positions:[]},l=this._viewDim2;this.flex||["start","center","end"].includes(e)?(l-=s.padding2.start,l-=s.padding2.end):"space-between"===e?l+=s.gap2:"space-evenly"===e&&(l-=s.gap2);var f,h,p=l/(this._idealSize2+s.gap2);if(this.flex)switch(s.rolumns=Math.round(p),s.itemSize2=Math.round((l-s.gap2*(s.rolumns-1))/s.rolumns),!0===this.flex?"area":this.flex.preserve){case"aspect-ratio":s.itemSize1=Math.round(this._idealSize1/this._idealSize2*s.itemSize2);break;case(0,r.qF)(this.direction):s.itemSize1=Math.round(this._idealSize1);break;default:s.itemSize1=Math.round(this._idealSize1*this._idealSize2/s.itemSize2)}else s.itemSize1=this._idealSize1,s.itemSize2=this._idealSize2,s.rolumns=Math.floor(p);if(this.flex||["start","center","end"].includes(e)){var y=s.rolumns*s.itemSize2+(s.rolumns-1)*s.gap2;f=this.flex||"start"===e?s.padding2.start:"end"===e?this._viewDim2-s.padding2.end-y:Math.round(this._viewDim2/2-y/2),h=s.gap2}else{var m=l-s.rolumns*s.itemSize2;"space-between"===e?(h=Math.round(m/(s.rolumns-1)),f=0):"space-around"===e?(h=Math.round(m/s.rolumns),f=Math.round(h/2)):f=h=Math.round(m/(s.rolumns+1)),this._gap1===1/0&&(s.gap1=h,i===1/0&&(s.padding1.start=f),o===1/0&&(s.padding1.end=f))}for(var g=0;g<s.rolumns;g++)s.positions.push(f),f+=s.itemSize2+h;this._metrics=s}},{key:"_delta",get:function(){return this._metrics.itemSize1+this._metrics.gap1}},{key:"_getItemSize",value:function(t){var e;return g(e={},this._sizeDim,this._metrics.itemSize1),g(e,this._secondarySizeDim,this._metrics.itemSize2),e}},{key:"_getActiveItems",value:function(){var t=this._metrics.padding1,e=Math.max(0,this._scrollPosition-this._overhang),n=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang),r=Math.max(0,Math.floor((e-t.start)/this._delta)),i=Math.max(0,Math.ceil((n-t.start)/this._delta));this._first=r*this._metrics.rolumns,this._last=Math.min(i*this._metrics.rolumns-1,this._totalItems-1),this._physicalMin=t.start+this._delta*r,this._physicalMax=t.start+this._delta*i}},{key:"_getItemPosition",value:function(t){var e,n=this._metrics,i=n.rolumns,o=n.padding1,a=n.positions,u=n.itemSize1,c=n.itemSize2;return g(e={},this._positionDim,o.start+Math.floor(t/i)*this._delta),g(e,this._secondaryPositionDim,a[t%i]),g(e,(0,r.qF)(this.direction),u),g(e,(0,r.gu)(this.direction),c),e}},{key:"_updateScrollSize",value:function(){this._scrollSize=Math.max(1,Math.ceil(this._totalItems/this._metrics.rolumns)*this._delta+this._gap)}}],n&&w(e.prototype,n),i&&w(e,i),a}(y)}}]);