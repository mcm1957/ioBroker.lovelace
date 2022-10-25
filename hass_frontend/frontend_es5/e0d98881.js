"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[19501],{25516:function(t,e,n){n.d(e,{i:function(){return r}});var r=function(t){return function(e){return{kind:"method",placement:"prototype",key:e.key,descriptor:{set:function(t){this["__".concat(String(e.key))]=t},get:function(){return this["__".concat(String(e.key))]},enumerable:!0,configurable:!0},finisher:function(n){var r=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){if(r.call(this),this[e.key]){var n=this.renderRoot.querySelector(t);if(!n)return;n.scrollTop=this[e.key]}}}}}}},38014:function(t,e,n){n.d(e,{uR:function(){return a},Py:function(){return s},dL:function(){return c},h_:function(){return u},Cj:function(){return l},hN:function(){return d},Kj:function(){return f},q6:function(){return p},Nw:function(){return h},Z0:function(){return v},j2:function(){return b},Kd:function(){return g},dO:function(){return w},Hs:function(){return _}});var r=n(91741);function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var a=function(t,e){return t.callWS({type:"recorder/list_statistic_ids",statistic_type:e})},s=function(t,e){return t.callWS({type:"recorder/get_statistics_metadata",statistic_ids:e})},c=function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"hour",o=arguments.length>5?arguments[5]:void 0;return t.callWS({type:"recorder/statistics_during_period",start_time:e.toISOString(),end_time:null==n?void 0:n.toISOString(),statistic_ids:r,period:i,units:o})},u=function(t){return t.callWS({type:"recorder/validate_statistics"})},l=function(t,e,n){return t.callWS({type:"recorder/update_statistics_metadata",statistic_id:e,unit_of_measurement:n})},d=function(t,e){return t.callWS({type:"recorder/clear_statistics",statistic_ids:e})},f=function(t){if(!t||t.length<2)return null;var e=t[t.length-1].sum;if(null===e)return null;var n=t[0].sum;return null===n?e:e-n},p=function(t,e){var n,r=null,o=i(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(a in t){var s=f(t[a]);null!==s&&(null===r?r=s:r+=s)}}}catch(c){o.e(c)}finally{o.f()}return r},h=function(t,e){return t.some((function(t){return null!==t[e]}))},m=["mean","min","max"],y=["sum"],v=function(t,e){return!(!m.includes(e)||!t.has_mean)||!(!y.includes(e)||!t.has_sum)},b=function(t,e,n,r,i){return t.callWS({type:"recorder/adjust_sum_statistics",statistic_id:e,start_time:n,adjustment:r,adjustment_unit_of_measurement:i})},g=function(t,e,n){var i=t.states[e];return i?(0,r.C)(i):(null==n?void 0:n.name)||e},w=function(t,e,n){var r,i;e&&(r=null===(i=t.states[e])||void 0===i?void 0:i.attributes.unit_of_measurement);return void 0===r?null==n?void 0:n.statistics_unit_of_measurement:r},_=function(t){return t.includes(":")}},26765:function(t,e,n){n.d(e,{Ys:function(){return a},g7:function(){return s},D9:function(){return c}});var r=n(47181),i=function(){return Promise.all([n.e(85084),n.e(82361),n.e(34821),n.e(72432)]).then(n.bind(n,1281))},o=function(t,e,n){return new Promise((function(o){var a=e.cancel,s=e.confirm;(0,r.B)(t,"show-dialog",{dialogTag:"dialog-box",dialogImport:i,dialogParams:Object.assign({},e,n,{cancel:function(){o(!(null==n||!n.prompt)&&null),a&&a()},confirm:function(t){o(null==n||!n.prompt||t),s&&s(t)}})})}))},a=function(t,e){return o(t,e)},s=function(t,e){return o(t,e,{confirmation:!0})},c=function(t,e){return o(t,e,{prompt:!0})}},55678:function(t,e,n){n.r(e);n(51187);var r,i,o,a,s,c,u,l,d,f,p,h=n(37500),m=n(33310),y=n(14516),v=n(47181),b=n(91741),g=(n(67065),n(74186)),w=n(38014),_=n(26765),k=n(73826),S=n(11654),x=function(){return Promise.all([n.e(79071),n.e(24103),n.e(88278),n.e(6294),n.e(85084),n.e(45507),n.e(49842),n.e(1548),n.e(85738),n.e(86630),n.e(34821),n.e(81545),n.e(12545),n.e(26272),n.e(13701),n.e(25727),n.e(9381),n.e(74329),n.e(58552),n.e(65353),n.e(95845)]).then(n.bind(n,211))},E=function(){return Promise.all([n.e(85084),n.e(45507),n.e(34821),n.e(24054)]).then(n.bind(n,24054))},P=n(87744);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){return V(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(t,e)||H(t,e)||q()}function T(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function A(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){T(o,r,i,a,s,"next",t)}function s(t){T(o,r,i,a,s,"throw",t)}a(void 0)}))}}function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){return I=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},I(t,e)}function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=L(t);if(e){var i=L(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return R(this,n)}}function R(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return F(t)}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}function B(){B=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(n){e.forEach((function(e){e.kind===n&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var n=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var i=e.placement;if(e.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?t:n;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var n=e.descriptor;if("field"===e.kind){var r=e.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,n)},decorateClass:function(t,e){var n=[],r=[],i={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,i)}),this),t.forEach((function(t){if(!M(t))return n.push(t);var e=this.decorateElement(t,i);n.push(e.element),n.push.apply(n,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:n,finishers:r};var o=this.decorateConstructor(n,e);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(t,e,n){var r=e[t.placement];if(!n&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var n=[],r=[],i=t.decorators,o=i.length-1;o>=0;o--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),c=this.toElementFinisherExtras((0,i[o])(s)||s);t=c.element,this.addElementPlacement(t,e),c.finisher&&r.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],e);n.push.apply(n,u)}}return{element:t,finishers:r,extras:n}},decorateConstructor:function(t,e){for(var n=[],r=e.length-1;r>=0;r--){var i=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){t=o.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:n}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,V(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||H(e)||q()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var n=Z(t.key),r=String(t.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:U(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var n=U(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:n}},runClassFinishers:function(t,e){for(var n=0;n<e.length;n++){var r=(0,e[n])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,n){if(void 0!==t[e])throw new TypeError(n+" can't have a ."+e+" property.")}};return t}function W(t){var e,n=Z(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===t.kind?"field":"method",key:n,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(r.decorators=t.decorators),"field"===t.kind&&(r.initializer=t.value),r}function N(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function M(t){return t.decorators&&t.decorators.length}function Y(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function U(t,e){var n=t[e];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+e+"' to be a function");return n}function Z(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===j(e)?e:String(e)}function q(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function H(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function V(t){if(Array.isArray(t))return t}var $={no_state:0,entity_no_longer_recorded:1,entity_not_recorded:1,unsupported_state_class:2,units_changed:3};!function(t,e,n,r){var i=B();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=e((function(t){i.initializeInstanceElements(t,s.elements)}),n),s=i.decorateClass(function(t){for(var e=[],n=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},r=0;r<t.length;r++){var i,o=t[r];if("method"===o.kind&&(i=e.find(n)))if(Y(o.descriptor)||Y(i.descriptor)){if(M(o)||M(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(M(o)){if(M(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}N(o,i)}else e.push(o)}return e}(a.d.map(W)),t);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,m.Mo)("developer-tools-statistics")],(function(t,e){var n,k=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&I(t,e)}(r,e);var n=z(r);function r(){var e;D(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t(F(e)),e}return r}(e);return{F:k,d:[{kind:"field",decorators:[(0,m.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,m.SB)()],key:"_data",value:function(){return[]}},{kind:"field",key:"_disabledEntities",value:function(){return new Set}},{kind:"method",key:"firstUpdated",value:function(){this._validateStatistics()}},{kind:"field",key:"_columns",value:function(){var t=this;return(0,y.Z)((function(e){return{state:{title:"Name",sortable:!0,filterable:!0,grows:!0,template:function(t,e){return(0,h.dy)(r||(r=O(["",""])),t?(0,b.C)(t):e.name||e.statistic_id)}},statistic_id:{title:"Statistic id",sortable:!0,filterable:!0,hidden:t.narrow,width:"20%"},statistics_unit_of_measurement:{title:"Statistics unit",sortable:!0,filterable:!0,width:"10%",forceLTR:!0},source:{title:"Source",sortable:!0,filterable:!0,width:"10%"},issues:{title:"Issue",sortable:!0,filterable:!0,direction:"asc",width:"30%",template:function(t){return(0,h.dy)(i||(i=O(["",""])),t?t.map((function(t){return e("ui.panel.developer-tools.tabs.statistics.issues.".concat(t.type),t.data)||t.type})):e("ui.panel.developer-tools.tabs.statistics.no_issue"))}},fix:{title:"",label:t.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.fix"),template:function(n,r){return(0,h.dy)(o||(o=O(["",""])),r.issues?(0,h.dy)(a||(a=O(["<mwc-button @click="," .data=",">\n                ","\n              </mwc-button>"])),t._fixIssue,r.issues,e("ui.panel.developer-tools.tabs.statistics.fix_issue.fix")):"—")},width:"113px"},actions:{title:"",label:e("ui.panel.developer-tools.tabs.statistics.adjust_sum"),type:"icon-button",template:function(n,r){return r.has_sum?(0,h.dy)(s||(s=O(["\n                <ha-icon-button\n                  .label=","\n                  .path=","\n                  .statistic=","\n                  @click=","\n                ></ha-icon-button>\n              "])),e("ui.panel.developer-tools.tabs.statistics.adjust_sum"),"M22,13V22H2V19L22,13M21.68,7.06L16.86,4.46L17.7,7.24L7.58,10.24C6.63,8.95 4.82,8.67 3.53,9.62C2.24,10.57 1.96,12.38 2.91,13.67C3.85,14.97 5.67,15.24 6.96,14.29C7.67,13.78 8.1,12.97 8.14,12.09L18.26,9.09L19.1,11.87L21.68,7.06Z",r,t._showStatisticsAdjustSumDialog):""}}}}))}},{kind:"method",key:"render",value:function(){return(0,h.dy)(c||(c=O(["\n      <ha-data-table\n        .columns=","\n        .data=",'\n        noDataText="No statistics"\n        id="statistic_id"\n        clickable\n        @row-click=',"\n        .dir=","\n      ></ha-data-table>\n    "])),this._columns(this.hass.localize),this._data,this._rowClicked,(0,P.Zu)(this.hass))}},{kind:"method",key:"_showStatisticsAdjustSumDialog",value:function(t){var e,n;t.stopPropagation(),e=this,n={statistic:t.currentTarget.statistic},(0,v.B)(e,"show-dialog",{dialogTag:"dialog-statistics-adjust-sum",dialogImport:x,dialogParams:n})}},{kind:"method",key:"_rowClicked",value:function(t){var e=t.detail.id;e in this.hass.states&&(0,v.B)(this,"hass-more-info",{entityId:e})}},{kind:"method",key:"hassSubscribe",value:function(){var t=this;return[(0,g.LM)(this.hass.connection,(function(e){var n,r=new Set,i=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=H(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(e);try{for(i.s();!(n=i.n()).done;){var o=n.value;o.disabled_by&&r.add(o.entity_id)}}catch(a){i.e(a)}finally{i.f()}r!==t._disabledEntities&&(t._disabledEntities=r,t._validateStatistics())}))]}},{kind:"method",key:"_validateStatistics",value:(n=A(regeneratorRuntime.mark((function t(){var e,n,r,i,o,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([(0,w.uR)(this.hass),(0,w.h_)(this.hass)]);case 2:e=t.sent,n=C(e,2),r=n[0],i=n[1],o=new Set,this._data=r.filter((function(t){return!a._disabledEntities.has(t.statistic_id)})).map((function(t){return o.add(t.statistic_id),Object.assign({},t,{state:a.hass.states[t.statistic_id],issues:i[t.statistic_id]})})),Object.keys(i).forEach((function(t){o.has(t)||a._disabledEntities.has(t)||a._data.push({statistic_id:t,statistics_unit_of_measurement:"",source:"",state:a.hass.states[t],issues:i[t],has_mean:!1,has_sum:!1,unit_class:null})}));case 9:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{kind:"field",key:"_fixIssue",value:function(){var t=this;return function(e){var n,r,i,o,a=e.currentTarget.data.sort((function(t,e){var n,r;return(null!==(n=$[t.type])&&void 0!==n?n:99)-(null!==(r=$[e.type])&&void 0!==r?r:99)}))[0];switch(a.type){case"no_state":(0,_.g7)(t,{title:"Entity has no state",text:(0,h.dy)(u||(u=O(["This entity has no state at the moment, if this is an\n            orphaned entity, you may want to remove the long term statistics of\n            it from your database.<br /><br />Do you want to permanently remove\n            the long term statistics of "," from your\n            database?"])),a.data.statistic_id),confirmText:t.hass.localize("ui.common.remove"),confirm:(o=A(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.hN)(t.hass,[a.data.statistic_id]);case 2:t._validateStatistics();case 3:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})});break;case"entity_not_recorded":(0,_.Ys)(t,{title:"Entity not recorded",text:(0,h.dy)(l||(l=O(['State changes of this entity are not recorded, therefore,\n            we can not track long term statistics for it. <br /><br />You\n            probably excluded this entity, or have just included some\n            entities.<br /><br />See the\n            <a\n              href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/integrations/recorder/#configure-filter"\n              target="_blank"\n              rel="noreferrer noopener"\n            >\n              recorder documentation</a\n            >\n            for more information.'])))});break;case"entity_no_longer_recorded":(0,_.Ys)(t,{title:"Entity no longer recorded",text:(0,h.dy)(d||(d=O(['We have generated statistics for this entity in the past,\n            but state changes of this entity are no longer recorded, therefore,\n            we can not track long term statistics for it anymore.\n            <br /><br />You probably excluded this entity, or have just included\n            some entities.<br /><br />See the\n            <a\n              href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/integrations/recorder/#configure-filter"\n              target="_blank"\n              rel="noreferrer noopener"\n            >\n              recorder documentation</a\n            >\n            for more information.'])))});break;case"unsupported_state_class":(0,_.g7)(t,{title:"Unsupported state class",text:(0,h.dy)(f||(f=O(["The state class of this entity, ",'\n            is not supported. <br />Statistics can not be generated until this\n            entity has a supported state class.<br /><br />If this state class\n            was provided by an integration, this is a bug. Please report an\n            issue.<br /><br />If you have set this state class yourself, please\n            correct it. The different state classes and when to use which can be\n            found in the\n            <a\n              href="https://developers.home-assistant.io/docs/core/entity/sensor/#long-term-statistics"\n              target="_blank"\n              rel="noreferrer noopener"\n            >\n              developer documentation</a\n            >. If the state class has permanently changed, you may want to\n            remove the long term statistics of it from your database.<br /><br />Do\n            you want to permanently remove the long term statistics of\n            '," from your database?"])),a.data.state_class,a.data.statistic_id),confirmText:t.hass.localize("ui.common.remove"),confirm:(i=A(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.hN)(t.hass,[a.data.statistic_id]);case 2:t._validateStatistics();case 3:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)})});break;case"units_changed":n=t,r={issue:a,fixedCallback:function(){t._validateStatistics()}},(0,v.B)(n,"show-dialog",{dialogTag:"dialog-statistics-fix-units-changed",dialogImport:E,dialogParams:r});break;default:(0,_.Ys)(t,{title:"Fix issue",text:"Fixing this issue is not supported yet."})}}}},{kind:"get",static:!0,key:"styles",value:function(){return[S.Qx,(0,h.iv)(p||(p=O(["\n        .content {\n          padding: 16px;\n          padding: max(16px, env(safe-area-inset-top))\n            max(16px, env(safe-area-inset-right))\n            max(16px, env(safe-area-inset-bottom))\n            max(16px, env(safe-area-inset-left));\n        }\n\n        th {\n          padding: 0 8px;\n          text-align: left;\n          font-size: var(\n            --paper-input-container-shared-input-style_-_font-size\n          );\n        }\n\n        :host([rtl]) th {\n          text-align: right;\n        }\n\n        tr {\n          vertical-align: top;\n          direction: ltr;\n        }\n\n        tr:nth-child(odd) {\n          background-color: var(--table-row-background-color, #fff);\n        }\n\n        tr:nth-child(even) {\n          background-color: var(--table-row-alternative-background-color, #eee);\n        }\n        td {\n          padding: 4px;\n          min-width: 200px;\n          word-break: break-word;\n        }\n      "])))]}}]}}),(0,k.f)(h.oi))}}]);