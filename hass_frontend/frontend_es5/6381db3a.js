"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[62336],{50239:function(t,e,n){n.d(e,{u:function(){return r},Y:function(){return i}});var r=function(t,e,n){return Math.min(Math.max(t,e),n)},i=function(t,e,n){var r;return r=e?Math.max(t,e):t,r=n?Math.min(r,n):r}},62336:function(t,e,n){n.d(e,{Q:function(){return L}});var r,i,o,a,s,l,c,d,u,h=n(37500),p=n(33310),f=n(8636),y=n(70483),v=n(50239);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t){return function(t){if(Array.isArray(t))return R(t)}(t)||V(t)||z(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e,n,r,i,o,a){try{var s=t[o](a),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(r,i)}function k(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=I(t);if(e){var i=I(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return C(this,n)}}function C(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return E(t)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(){P=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(n){e.forEach((function(e){e.kind===n&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var n=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var i=e.placement;if(e.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?t:n;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var n=e.descriptor;if("field"===e.kind){var r=e.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,n)},decorateClass:function(t,e){var n=[],r=[],i={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,i)}),this),t.forEach((function(t){if(!D(t))return n.push(t);var e=this.decorateElement(t,i);n.push(e.element),n.push.apply(n,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:n,finishers:r};var o=this.decorateConstructor(n,e);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(t,e,n){var r=e[t.placement];if(!n&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var n=[],r=[],i=t.decorators,o=i.length-1;o>=0;o--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var s=this.fromElementDescriptor(t),l=this.toElementFinisherExtras((0,i[o])(s)||s);t=l.element,this.addElementPlacement(t,e),l.finisher&&r.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);n.push.apply(n,c)}}return{element:t,finishers:r,extras:n}},decorateConstructor:function(t,e){for(var n=[],r=e.length-1;r>=0;r--){var i=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){t=o.elements;for(var a=0;a<t.length-1;a++)for(var s=a+1;s<t.length;s++)if(t[a].key===t[s].key&&t[a].placement===t[s].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:n}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||V(e)||z(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var n=A(t.key),r=String(t.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:S(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var n=S(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:n}},runClassFinishers:function(t,e){for(var n=0;n<e.length;n++){var r=(0,e[n])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,n){if(void 0!==t[e])throw new TypeError(n+" can't have a ."+e+" property.")}};return t}function T(t){var e,n=A(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===t.kind?"field":"method",key:n,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(r.decorators=t.decorators),"field"===t.kind&&(r.initializer=t.value),r}function O(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function D(t){return t.decorators&&t.decorators.length}function j(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function S(t,e){var n=t[e];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+e+"' to be a function");return n}function A(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===m(e)?e:String(e)}function z(t,e){if(t){if("string"==typeof t)return R(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(t,e):void 0}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function V(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function B(t,e,n){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}},B(t,e,n||t)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var L=3e5;!function(t,e,n,r){var i=P();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var a=e((function(t){i.initializeInstanceElements(t,s.elements)}),n),s=i.decorateClass(function(t){for(var e=[],n=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},r=0;r<t.length;r++){var i,o=t[r];if("method"===o.kind&&(i=e.find(n)))if(j(o.descriptor)||j(i.descriptor)){if(D(o)||D(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(D(o)){if(D(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}O(o,i)}else e.push(o)}return e}(a.d.map(T)),t);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,p.Mo)("ha-chart-base")],(function(t,e){var m,C,P=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(r,e);var n=_(r);function r(){var e;w(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),t(E(e)),e}return r}(e);return{F:P,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,p.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:function(){return"line"}},{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"data",value:function(){return{datasets:[]}}},{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_hiddenDatasets",value:function(){return new Set}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"method",key:"disconnectedCallback",value:function(){this._releaseCanvas(),B(I(P.prototype),"disconnectedCallback",this).call(this)}},{kind:"method",key:"connectedCallback",value:function(){B(I(P.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._setupChart()}},{kind:"method",key:"firstUpdated",value:function(){var t=this;this._setupChart(),this.data.datasets.forEach((function(e,n){e.hidden&&t._hiddenDatasets.add(n)}))}},{kind:"method",key:"willUpdate",value:function(t){var e=this;if(B(I(P.prototype),"willUpdate",this).call(this,t),this.hasUpdated&&this.chart){if(t.has("plugins"))return this.chart.destroy(),void this._setupChart();t.has("chartType")&&(this.chart.config.type=this.chartType),t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach((function(t,n){t.hidden=e._hiddenDatasets.has(n)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,n,u,p,v,m,b=this;return(0,h.dy)(r||(r=k(["\n      ",'\n      <div\n        class="chartContainer"\n        style=',"\n      >\n        <canvas></canvas>\n        ","\n      </div>\n    "])),!0===(null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e||null===(n=e.legend)||void 0===n?void 0:n.display)?(0,h.dy)(i||(i=k(['<div class="chartLegend">\n            <ul>\n              ',"\n            </ul>\n          </div>"])),this.data.datasets.map((function(t,e){return(0,h.dy)(o||(o=k(["<li\n                  .datasetIndex=","\n                  @click=","\n                  class=","\n                  .title=",'\n                >\n                  <div\n                    class="bullet"\n                    style=','\n                  ></div>\n                  <div class="label">',"</div>\n                </li>"])),e,b._legendClick,(0,f.$)({hidden:b._hiddenDatasets.has(e)}),t.label,(0,y.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor}),t.label)}))):"",(0,y.V)({height:"".concat(null!==(u=this.height)&&void 0!==u?u:this._chartHeight,"px"),overflow:this._chartHeight?"initial":"hidden"}),this._tooltip?(0,h.dy)(a||(a=k(['<div\n              class="chartTooltip ','"\n              style=','\n            >\n              <div class="title">',"</div>\n              ","\n              <div>\n                <ul>\n                  ","\n                </ul>\n              </div>\n              ","\n            </div>"])),(0,f.$)((p={},v=this._tooltip.yAlign,m=!0,v in p?Object.defineProperty(p,v,{value:m,enumerable:!0,configurable:!0,writable:!0}):p[v]=m,p)),(0,y.V)({top:this._tooltip.top,left:this._tooltip.left}),this._tooltip.title,this._tooltip.beforeBody?(0,h.dy)(s||(s=k(['<div class="beforeBody">\n                    ',"\n                  </div>"])),this._tooltip.beforeBody):"",this._tooltip.body.map((function(t,e){return(0,h.dy)(l||(l=k(['<li>\n                      <div\n                        class="bullet"\n                        style=',"\n                      ></div>\n                      ","\n                    </li>"])),(0,y.V)({backgroundColor:b._tooltip.labelColors[e].backgroundColor,borderColor:b._tooltip.labelColors[e].borderColor}),t.lines.join("\n"))})),this._tooltip.footer.length?(0,h.dy)(c||(c=k(['<div class="footer">\n                    ',"\n                  </div>"])),this._tooltip.footer.map((function(t){return(0,h.dy)(d||(d=k(["","<br />"])),t)}))):""):"")}},{kind:"method",key:"_setupChart",value:(m=regeneratorRuntime.mark((function t(){var e,r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.renderRoot.querySelector("canvas").getContext("2d"),t.next=3,Promise.all([n.e(5287),n.e(12020),n.e(84521)]).then(n.bind(n,84521));case 3:r=t.sent.Chart,i=getComputedStyle(this),r.defaults.borderColor=i.getPropertyValue("--divider-color"),r.defaults.color=i.getPropertyValue("--secondary-text-color"),r.defaults.font.family=i.getPropertyValue("--mdc-typography-body1-font-family")||i.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new r(e,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()});case 9:case"end":return t.stop()}}),t,this)})),C=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=m.apply(t,e);function o(t){g(i,n,r,o,a,"next",t)}function a(t){g(i,n,r,o,a,"throw",t)}o(void 0)}))},function(){return C.apply(this,arguments)})},{kind:"method",key:"_createOptions",value:function(){var t,e,n,r,i,o=this;return Object.assign({},this.options,{plugins:Object.assign({},null===(t=this.options)||void 0===t?void 0:t.plugins,{tooltip:Object.assign({},null===(e=this.options)||void 0===e||null===(n=e.plugins)||void 0===n?void 0:n.tooltip,{enabled:!1,external:function(t){return o._handleTooltip(t)}}),legend:Object.assign({},null===(r=this.options)||void 0===r||null===(i=r.plugins)||void 0===i?void 0:i.legend,{display:!1})})})}},{kind:"method",key:"_createPlugins",value:function(){var t,e,n=this;return[].concat(b(this.plugins||[]),[{id:"afterRenderHook",afterRender:function(t){n._chartHeight=t.height},legend:Object.assign({},null===(t=this.options)||void 0===t||null===(e=t.plugins)||void 0===e?void 0:e.legend,{display:!1})}])}},{kind:"method",key:"_legendClick",value:function(t){if(this.chart){var e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip=Object.assign({},t.tooltip,{top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,v.u)(t.tooltip.caretX,100,this.clientWidth-100)-100+"px"}):this._tooltip=void 0}},{kind:"field",key:"updateChart",value:function(){var t=this;return function(e){t.chart&&t.chart.update(e)}}},{kind:"get",static:!0,key:"styles",value:function(){return(0,h.iv)(u||(u=k(["\n      :host {\n        display: block;\n      }\n      .chartContainer {\n        overflow: hidden;\n        height: 0;\n        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);\n      }\n      canvas {\n        max-height: var(--chart-max-height, 400px);\n      }\n      .chartLegend {\n        text-align: center;\n      }\n      .chartLegend li {\n        cursor: pointer;\n        display: inline-grid;\n        grid-auto-flow: column;\n        padding: 0 8px;\n        box-sizing: border-box;\n        align-items: center;\n        color: var(--secondary-text-color);\n      }\n      .chartLegend .hidden {\n        text-decoration: line-through;\n      }\n      .chartLegend .label {\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      .chartLegend .bullet,\n      .chartTooltip .bullet {\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 50%;\n        display: inline-block;\n        height: 16px;\n        margin-right: 6px;\n        width: 16px;\n        flex-shrink: 0;\n        box-sizing: border-box;\n        margin-inline-end: 6px;\n        margin-inline-start: initial;\n        direction: var(--direction);\n      }\n      .chartTooltip .bullet {\n        align-self: baseline;\n      }\n      :host([rtl]) .chartLegend .bullet,\n      :host([rtl]) .chartTooltip .bullet {\n        margin-right: inherit;\n        margin-left: 6px;\n        margin-inline-end: inherit;\n        margin-inline-start: 6px;\n        direction: var(--direction);\n      }\n      .chartTooltip {\n        padding: 8px;\n        font-size: 90%;\n        position: absolute;\n        background: rgba(80, 80, 80, 0.9);\n        color: white;\n        border-radius: 4px;\n        pointer-events: none;\n        z-index: 1000;\n        width: 200px;\n        box-sizing: border-box;\n      }\n      :host([rtl]) .chartTooltip {\n        direction: rtl;\n      }\n      .chartLegend ul,\n      .chartTooltip ul {\n        display: inline-block;\n        padding: 0 0px;\n        margin: 8px 0 0 0;\n        width: 100%;\n      }\n      .chartTooltip ul {\n        margin: 0 4px;\n      }\n      .chartTooltip li {\n        display: flex;\n        white-space: pre-line;\n        align-items: center;\n        line-height: 16px;\n        padding: 4px 0;\n      }\n      .chartTooltip .title {\n        text-align: center;\n        font-weight: 500;\n        direction: ltr;\n      }\n      .chartTooltip .footer {\n        font-weight: 500;\n      }\n      .chartTooltip .beforeBody {\n        text-align: center;\n        font-weight: 300;\n        word-break: break-all;\n      }\n    "])))}}]}}),h.oi)}}]);