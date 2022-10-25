"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9928],{9928:function(n,e,r){r.r(e);var t,i,o,a,s,c,l,d,f,h,u,p,y,v,g,m,b,k,w,x,C,L,_,M,E,P,H,z,D,S,V,j=r(37500),O=r(33310),A=r(8636),T=(r(51187),r(18457)),F=(r(22098),r(52039),r(55424)),Y=r(38014),R=r(73826);function Z(n){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Z(n)}function B(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function q(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function W(n,e){return W=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},W(n,e)}function I(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,t=J(n);if(e){var i=J(this).constructor;r=Reflect.construct(t,arguments,i)}else r=t.apply(this,arguments);return $(this,r)}}function $(n,e){if(e&&("object"===Z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return U(n)}function U(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function J(n){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},J(n)}function N(){N=function(){return n};var n={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(n,e){["method","field"].forEach((function(r){e.forEach((function(e){e.kind===r&&"own"===e.placement&&this.defineClassElement(n,e)}),this)}),this)},initializeClassElements:function(n,e){var r=n.prototype;["method","field"].forEach((function(t){e.forEach((function(e){var i=e.placement;if(e.kind===t&&("static"===i||"prototype"===i)){var o="static"===i?n:r;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(n,e){var r=e.descriptor;if("field"===e.kind){var t=e.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===t?void 0:t.call(n)}}Object.defineProperty(n,e.key,r)},decorateClass:function(n,e){var r=[],t=[],i={static:[],prototype:[],own:[]};if(n.forEach((function(n){this.addElementPlacement(n,i)}),this),n.forEach((function(n){if(!Q(n))return r.push(n);var e=this.decorateElement(n,i);r.push(e.element),r.push.apply(r,e.extras),t.push.apply(t,e.finishers)}),this),!e)return{elements:r,finishers:t};var o=this.decorateConstructor(r,e);return t.push.apply(t,o.finishers),o.finishers=t,o},addElementPlacement:function(n,e,r){var t=e[n.placement];if(!r&&-1!==t.indexOf(n.key))throw new TypeError("Duplicated element ("+n.key+")");t.push(n.key)},decorateElement:function(n,e){for(var r=[],t=[],i=n.decorators,o=i.length-1;o>=0;o--){var a=e[n.placement];a.splice(a.indexOf(n.key),1);var s=this.fromElementDescriptor(n),c=this.toElementFinisherExtras((0,i[o])(s)||s);n=c.element,this.addElementPlacement(n,e),c.finisher&&t.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],e);r.push.apply(r,l)}}return{element:n,finishers:t,extras:r}},decorateConstructor:function(n,e){for(var r=[],t=e.length-1;t>=0;t--){var i=this.fromClassDescriptor(n),o=this.toClassDescriptor((0,e[t])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){n=o.elements;for(var a=0;a<n.length-1;a++)for(var s=a+1;s<n.length;s++)if(n[a].key===n[s].key&&n[a].placement===n[s].placement)throw new TypeError("Duplicated element ("+n[a].key+")")}}return{elements:n,finishers:r}},fromElementDescriptor:function(n){var e={kind:n.kind,key:n.key,placement:n.placement,descriptor:n.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===n.kind&&(e.initializer=n.initializer),e},toElementDescriptors:function(n){var e;if(void 0!==n)return(e=n,function(n){if(Array.isArray(n))return n}(e)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(e)||function(n,e){if(n){if("string"==typeof n)return rn(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rn(n,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n){var e=this.toElementDescriptor(n);return this.disallowProperty(n,"finisher","An element descriptor"),this.disallowProperty(n,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(n){var e=String(n.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=en(n.key),t=String(n.placement);if("static"!==t&&"prototype"!==t&&"own"!==t)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+t+'"');var i=n.descriptor;this.disallowProperty(n,"elements","An element descriptor");var o={kind:e,key:r,placement:t,descriptor:Object.assign({},i)};return"field"!==e?this.disallowProperty(n,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=n.initializer),o},toElementFinisherExtras:function(n){return{element:this.toElementDescriptor(n),finisher:nn(n,"finisher"),extras:this.toElementDescriptors(n.extras)}},fromClassDescriptor:function(n){var e={kind:"class",elements:n.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(n){var e=String(n.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(n,"key","A class descriptor"),this.disallowProperty(n,"placement","A class descriptor"),this.disallowProperty(n,"descriptor","A class descriptor"),this.disallowProperty(n,"initializer","A class descriptor"),this.disallowProperty(n,"extras","A class descriptor");var r=nn(n,"finisher");return{elements:this.toElementDescriptors(n.elements),finisher:r}},runClassFinishers:function(n,e){for(var r=0;r<e.length;r++){var t=(0,e[r])(n);if(void 0!==t){if("function"!=typeof t)throw new TypeError("Finishers must return a constructor.");n=t}}return n},disallowProperty:function(n,e,r){if(void 0!==n[e])throw new TypeError(r+" can't have a ."+e+" property.")}};return n}function G(n){var e,r=en(n.key);"method"===n.kind?e={value:n.value,writable:!0,configurable:!0,enumerable:!1}:"get"===n.kind?e={get:n.value,configurable:!0,enumerable:!1}:"set"===n.kind?e={set:n.value,configurable:!0,enumerable:!1}:"field"===n.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var t={kind:"field"===n.kind?"field":"method",key:r,placement:n.static?"static":"field"===n.kind?"own":"prototype",descriptor:e};return n.decorators&&(t.decorators=n.decorators),"field"===n.kind&&(t.initializer=n.value),t}function K(n,e){void 0!==n.descriptor.get?e.descriptor.get=n.descriptor.get:e.descriptor.set=n.descriptor.set}function Q(n){return n.decorators&&n.decorators.length}function X(n){return void 0!==n&&!(void 0===n.value&&void 0===n.writable)}function nn(n,e){var r=n[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}function en(n){var e=function(n,e){if("object"!==Z(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,e||"default");if("object"!==Z(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===Z(e)?e:String(e)}function rn(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var tn=238.76104;!function(n,e,r,t){var i=N();if(t)for(var o=0;o<t.length;o++)i=t[o](i);var a=e((function(n){i.initializeInstanceElements(n,s.elements)}),r),s=i.decorateClass(function(n){for(var e=[],r=function(n){return"method"===n.kind&&n.key===o.key&&n.placement===o.placement},t=0;t<n.length;t++){var i,o=n[t];if("method"===o.kind&&(i=e.find(r)))if(X(o.descriptor)||X(i.descriptor)){if(Q(o)||Q(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(Q(o)){if(Q(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}K(o,i)}else e.push(o)}return e}(a.d.map(G)),n);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,O.Mo)("hui-energy-distribution-card")],(function(n,e){var r=function(e){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&W(n,e)}(t,e);var r=I(t);function t(){var e;q(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=r.call.apply(r,[this].concat(o)),n(U(e)),e}return t}(e);return{F:r,d:[{kind:"field",decorators:[(0,O.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,O.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,O.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"setConfig",value:function(n){this._config=n}},{kind:"method",key:"hassSubscribe",value:function(){var n,e=this;return[(0,F.UB)(this.hass,{key:null===(n=this._config)||void 0===n?void 0:n.collection_key}).subscribe((function(n){e._data=n}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"render",value:function(){var n,e;if(!this._config)return(0,j.dy)(t||(t=B([""])));if(!this._data)return(0,j.dy)(i||(i=B(["",""])),this.hass.localize("ui.panel.lovelace.cards.energy.loading"));var r,V=this._data.prefs,O=(0,F.Jj)(V),R=void 0!==O.solar,Z=void 0!==O.battery,q=void 0!==O.gas,W=O.grid[0].flow_to.length>0,I=null!==(n=(0,Y.q6)(this._data.stats,O.grid[0].flow_from.map((function(n){return n.stat_energy_from}))))&&void 0!==n?n:0,$=null;q&&($=null!==(r=(0,Y.q6)(this._data.stats,O.gas.map((function(n){return n.stat_energy_from}))))&&void 0!==r?r:0);var U=null;R&&(U=(0,Y.q6)(this._data.stats,O.solar.map((function(n){return n.stat_energy_from})))||0);var J=null,N=null;Z&&(J=(0,Y.q6)(this._data.stats,O.battery.map((function(n){return n.stat_energy_to})))||0,N=(0,Y.q6)(this._data.stats,O.battery.map((function(n){return n.stat_energy_from})))||0);var G=null;W&&(G=(0,Y.q6)(this._data.stats,O.grid[0].flow_to.map((function(n){return n.stat_energy_to})))||0);var K=null;R&&(K=(U||0)-(G||0)-(J||0));var Q=null,X=null;null!==K&&K<0&&(Z&&(Q=-1*K)>I&&(X=Math.min(0,Q-I),Q=I),K=0);var nn=null;R&&Z?(X||(X=Math.max(0,(G||0)-(U||0)-(J||0)-(Q||0))),nn=J-(Q||0)):!R&&Z&&(X=G);var en=null;Z&&(en=(N||0)-(X||0));var rn,on,an,sn,cn,ln=Math.max(0,I-(Q||0)),dn=Math.max(0,ln+(K||0)+(en||0));R&&(rn=tn*(K/dn)),en&&(on=tn*(en/dn));var fn="https://app.electricitymap.org";if(this._data.co2SignalEntity&&this._data.fossilEnergyConsumption){var hn=Object.values(this._data.fossilEnergyConsumption).reduce((function(n,e){return n+e}),0),un=this.hass.states[this._data.co2SignalEntity];if(null!=un&&un.attributes.country_code&&(fn+="/zone/".concat(un.attributes.country_code)),null!==hn)an=I-hn,sn=tn-(rn||0)-(on||0)-(cn=tn*((ln!==I?hn*(ln/I):hn)/dn))}var pn=ln+(K||0)+(G?G-(X||0):0)+(nn||0)+(en||0)+(Q||0)+(X||0);return(0,j.dy)(o||(o=B(["\n      <ha-card .header=",'>\n        <div class="card-content">\n          ','\n          <div class="row">\n            <div class="circle-container grid">\n              <div class="circle">\n                <ha-svg-icon .path=',"></ha-svg-icon>\n                ",'\n                <span class="consumption">\n                  ',"",'\n                  kWh\n                </span>\n              </div>\n              <span class="label"\n                >','</span\n              >\n            </div>\n            <div class="circle-container home">\n              <div\n                class="circle ','"\n              >\n                <ha-svg-icon .path=',"></ha-svg-icon>\n                ","\n                kWh\n                ",'\n              </div>\n              <span class="label"\n                >',"</span\n              >\n            </div>\n          </div>\n          ",'\n          <div class="lines ','">\n            <svg\n              viewBox="0 0 100 100"\n              xmlns="http://www.w3.org/2000/svg"\n              preserveAspectRatio="xMidYMid slice"\n            >\n              ',"\n              ","\n              ","\n              ",'\n              <path\n                class="grid"\n                id="grid"\n                d="M0,',' H100"\n                vector-effect="non-scaling-stroke"\n              ></path>\n              ',"\n              ","\n              ","\n              ","\n              ","\n              ","\n              ","\n            </svg>\n          </div>\n        </div>\n        ","\n      </ha-card>\n    "])),this._config.title,void 0!==an||R||q?(0,j.dy)(a||(a=B(['<div class="row">\n                ',"\n                ","\n                ","\n              </div>"])),void 0===an?(0,j.dy)(s||(s=B(['<div class="spacer"></div>']))):(0,j.dy)(c||(c=B(['<div class="circle-container low-carbon">\n                      <span class="label"\n                        >','</span\n                      >\n                      <a\n                        class="circle"\n                        href=','\n                        target="_blank"\n                        rel="noopener no referrer"\n                      >\n                        <ha-svg-icon .path=',"></ha-svg-icon>\n                        ",'\n                        kWh\n                      </a>\n                      <svg width="80" height="30">\n                        <line x1="40" y1="0" x2="40" y2="30"></line>\n                      </svg>\n                    </div>'])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.low_carbon"),fn,"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z",(0,T.uf)(an||0,this.hass.locale,{maximumFractionDigits:1})),R?(0,j.dy)(l||(l=B(['<div class="circle-container solar">\n                      <span class="label"\n                        >','</span\n                      >\n                      <div class="circle">\n                        <ha-svg-icon .path=',"></ha-svg-icon>\n                        ","\n                        kWh\n                      </div>\n                    </div>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.solar"),"M11.45,2V5.55L15,3.77L11.45,2M10.45,8L8,10.46L11.75,11.71L10.45,8M2,11.45L3.77,15L5.55,11.45H2M10,2H2V10C2.57,10.17 3.17,10.25 3.77,10.25C7.35,10.26 10.26,7.35 10.27,3.75C10.26,3.16 10.17,2.57 10,2M17,22V16H14L19,7V13H22L17,22Z",(0,T.uf)(U||0,this.hass.locale,{maximumFractionDigits:1})):q?(0,j.dy)(d||(d=B(['<div class="spacer"></div>']))):"",q?(0,j.dy)(f||(f=B(['<div class="circle-container gas">\n                      <span class="label"\n                        >','</span\n                      >\n                      <div class="circle">\n                        <ha-svg-icon .path=',"></ha-svg-icon>\n                        ","\n                        ",'\n                      </div>\n                      <svg width="80" height="30">\n                        <path d="M40 0 v30" id="gas" />\n                        ',"\n                      </svg>\n                    </div>"])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.gas"),"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",(0,T.uf)($||0,this.hass.locale,{maximumFractionDigits:1}),(0,F.vE)(this.hass,V,this._data.statsMetadata)||"m³",$?(0,j.YP)(h||(h=B(['<circle\n                    r="1"\n                    class="gas"\n                    vector-effect="non-scaling-stroke"\n                  >\n                    <animateMotion\n                      dur="2s"\n                      repeatCount="indefinite"\n                      calcMode="linear"\n                    >\n                      <mpath xlink:href="#gas" />\n                    </animateMotion>\n                  </circle>']))):""):(0,j.dy)(u||(u=B(['<div class="spacer"></div>'])))):"","M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z",null!==G?(0,j.dy)(p||(p=B(['<span class="return">\n                      <ha-svg-icon\n                        class="small"\n                        .path=',"\n                      ></ha-svg-icon\n                      >","\n                      kWh\n                    </span>"])),"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",(0,T.uf)(G,this.hass.locale,{maximumFractionDigits:1})):"",W?(0,j.dy)(y||(y=B(['<ha-svg-icon\n                        class="small"\n                        .path=',"\n                      ></ha-svg-icon>"])),"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"):"",(0,T.uf)(I,this.hass.locale,{maximumFractionDigits:1}),this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.grid"),(0,A.$)({border:void 0===rn&&void 0===sn}),"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",(0,T.uf)(dn,this.hass.locale,{maximumFractionDigits:1}),void 0!==rn||void 0!==sn?(0,j.dy)(v||(v=B(["<svg>\n                      ","\n                      ","\n                      ",'\n                      <circle\n                        class="grid"\n                        cx="40"\n                        cy="40"\n                        r="38"\n                        stroke-dasharray="'," ",'"\n                        stroke-dashoffset="0"\n                        shape-rendering="geometricPrecision"\n                      />\n                    </svg>'])),void 0!==rn?(0,j.YP)(g||(g=B(['<circle\n                            class="solar"\n                            cx="40"\n                            cy="40"\n                            r="38"\n                            stroke-dasharray="'," ",'"\n                            shape-rendering="geometricPrecision"\n                            stroke-dashoffset="-','"\n                          />'])),rn,tn-rn,tn-rn):"",on?(0,j.YP)(m||(m=B(['<circle\n                            class="battery"\n                            cx="40"\n                            cy="40"\n                            r="38"\n                            stroke-dasharray="'," ",'"\n                            stroke-dashoffset="-','"\n                            shape-rendering="geometricPrecision"\n                          />'])),on,tn-on,tn-on-(rn||0)):"",sn?(0,j.YP)(b||(b=B(['<circle\n                            class="low-carbon"\n                            cx="40"\n                            cy="40"\n                            r="38"\n                            stroke-dasharray="'," ",'"\n                            stroke-dashoffset="-','"\n                            shape-rendering="geometricPrecision"\n                          />'])),sn,tn-sn,tn-sn-(on||0)-(rn||0)):"",null!==(e=cn)&&void 0!==e?e:tn-rn-(on||0),void 0!==cn?tn-cn:rn+(on||0)):"",this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.home"),Z?(0,j.dy)(k||(k=B(['<div class="row">\n                <div class="spacer"></div>\n                <div class="circle-container battery">\n                  <div class="circle">\n                    <ha-svg-icon .path=','></ha-svg-icon>\n                    <span class="battery-in">\n                      <ha-svg-icon\n                        class="small"\n                        .path=',"\n                      ></ha-svg-icon\n                      >",'\n                      kWh</span\n                    >\n                    <span class="battery-out">\n                      <ha-svg-icon\n                        class="small"\n                        .path=',"\n                      ></ha-svg-icon\n                      >",'\n                      kWh</span\n                    >\n                  </div>\n                  <span class="label"\n                    >','</span\n                  >\n                </div>\n                <div class="spacer"></div>\n              </div>'])),"M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 7H9V10H15V7M15 11.5H9V14.5H15V11.5Z","M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z",(0,T.uf)(J||0,this.hass.locale,{maximumFractionDigits:1}),"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",(0,T.uf)(N||0,this.hass.locale,{maximumFractionDigits:1}),this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.battery")):"",(0,A.$)({battery:Z}),W&&R?(0,j.YP)(w||(w=B(['<path\n                    id="return"\n                    class="return"\n                    d="M',",0 v15 c0,",' h-20"\n                    vector-effect="non-scaling-stroke"\n                  ></path> '])),Z?45:47,Z?"35 -10,30 -30,30":"40 -10,35 -30,35"):"",R?(0,j.YP)(x||(x=B(['<path\n                    id="solar"\n                    class="solar"\n                    d="M',",0 v15 c0,",' h20"\n                    vector-effect="non-scaling-stroke"\n                  ></path>'])),Z?55:53,Z?"35 10,30 30,30":"40 10,35 30,35"):"",Z?(0,j.YP)(C||(C=B(['<path\n                    id="battery-house"\n                    class="battery-house"\n                    d="M55,100 v-15 c0,-35 10,-30 30,-30 h20"\n                    vector-effect="non-scaling-stroke"\n                  ></path>\n                  <path\n                    id="battery-grid"\n                    class=','\n                    d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"\n                    vector-effect="non-scaling-stroke"\n                  ></path>\n                  '])),(0,A.$)({"battery-from-grid":Boolean(Q),"battery-to-grid":Boolean(X)})):"",Z&&R?(0,j.YP)(L||(L=B(['<path\n                    id="battery-solar"\n                    class="battery-solar"\n                    d="M50,0 V100"\n                    vector-effect="non-scaling-stroke"\n                  ></path>']))):"",Z?50:R?56:53,G&&R?(0,j.YP)(_||(_=B(['<circle\n                    r="1"\n                    class="return"\n                    vector-effect="non-scaling-stroke"\n                  >\n                    <animateMotion\n                      dur="','s"\n                      repeatCount="indefinite"\n                      calcMode="linear"\n                    >\n                      <mpath xlink:href="#return" />\n                    </animateMotion>\n                  </circle>'])),6-(G-(X||0))/pn*6):"",K?(0,j.YP)(M||(M=B(['<circle\n                    r="1"\n                    class="solar"\n                    vector-effect="non-scaling-stroke"\n                  >\n                    <animateMotion\n                      dur="','s"\n                      repeatCount="indefinite"\n                      calcMode="linear"\n                    >\n                      <mpath xlink:href="#solar" />\n                    </animateMotion>\n                  </circle>'])),6-K/pn*5):"",ln?(0,j.YP)(E||(E=B(['<circle\n                    r="1"\n                    class="grid"\n                    vector-effect="non-scaling-stroke"\n                  >\n                    <animateMotion\n                      dur="','s"\n                      repeatCount="indefinite"\n                      calcMode="linear"\n                    >\n                      <mpath xlink:href="#grid" />\n                    </animateMotion>\n                  </circle>'])),6-ln/pn*5):"",nn?(0,j.YP)(P||(P=B(['<circle\n                    r="1"\n                    class="battery-solar"\n                    vector-effect="non-scaling-stroke"\n                  >\n                    <animateMotion\n                      dur="','s"\n                      repeatCount="indefinite"\n                      calcMode="linear"\n                    >\n                      <mpath xlink:href="#battery-solar" />\n                    </animateMotion>\n                  </circle>'])),6-nn/pn*5):"",en?(0,j.YP)(H||(H=B(['<circle\n                    r="1"\n                    class="battery-house"\n                    vector-effect="non-scaling-stroke"\n                  >\n                    <animateMotion\n                      dur="','s"\n                      repeatCount="indefinite"\n                      calcMode="linear"\n                    >\n                      <mpath xlink:href="#battery-house" />\n                    </animateMotion>\n                  </circle>'])),6-en/pn*5):"",Q?(0,j.YP)(z||(z=B(['<circle\n                    r="1"\n                    class="battery-from-grid"\n                    vector-effect="non-scaling-stroke"\n                  >\n                    <animateMotion\n                      dur="','s"\n                      repeatCount="indefinite"\n                      keyPoints="1;0" keyTimes="0;1"\n                      calcMode="linear"\n                    >\n                      <mpath xlink:href="#battery-grid" />\n                    </animateMotion>\n                  </circle>'])),6-Q/pn*5):"",X?(0,j.YP)(D||(D=B(['<circle\n                    r="1"\n                    class="battery-to-grid"\n                    vector-effect="non-scaling-stroke"\n                  >\n                    <animateMotion\n                      dur="','s"\n                      repeatCount="indefinite"\n                      calcMode="linear"\n                    >\n                      <mpath xlink:href="#battery-grid" />\n                    </animateMotion>\n                  </circle>'])),6-X/pn*5):"",this._config.link_dashboard?(0,j.dy)(S||(S=B(['\n              <div class="card-actions">\n                <a href="/energy"\n                  ><mwc-button>\n                    ',"\n                  </mwc-button></a\n                >\n              </div>\n            "])),this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")):"")}},{kind:"field",static:!0,key:"styles",value:function(){return(0,j.iv)(V||(V=B(["\n    :host {\n      --mdc-icon-size: 24px;\n    }\n    ha-card {\n      min-width: 210px;\n    }\n    .card-content {\n      position: relative;\n      direction: ltr;\n    }\n    .lines {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 146px;\n      display: flex;\n      justify-content: center;\n      padding: 0 16px 16px;\n      box-sizing: border-box;\n    }\n    .lines.battery {\n      bottom: 100px;\n      height: 156px;\n    }\n    .lines svg {\n      width: calc(100% - 160px);\n      height: 100%;\n      max-width: 340px;\n    }\n    .row {\n      display: flex;\n      justify-content: space-between;\n      max-width: 500px;\n      margin: 0 auto;\n    }\n    .circle-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .circle-container.low-carbon {\n      margin-right: 4px;\n    }\n    .circle-container.solar {\n      margin: 0 4px;\n      height: 130px;\n    }\n    .circle-container.gas {\n      margin-left: 4px;\n      height: 130px;\n    }\n    .circle-container.battery {\n      height: 110px;\n      justify-content: flex-end;\n    }\n    .spacer {\n      width: 84px;\n    }\n    .circle {\n      width: 80px;\n      height: 80px;\n      border-radius: 50%;\n      box-sizing: border-box;\n      border: 2px solid;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      font-size: 12px;\n      line-height: 12px;\n      position: relative;\n      text-decoration: none;\n      color: var(--primary-text-color);\n    }\n    ha-svg-icon {\n      padding-bottom: 2px;\n    }\n    ha-svg-icon.small {\n      --mdc-icon-size: 12px;\n    }\n    .label {\n      color: var(--secondary-text-color);\n      font-size: 12px;\n    }\n    line,\n    path {\n      stroke: var(--primary-text-color);\n      stroke-width: 1;\n      fill: none;\n    }\n    .circle svg {\n      position: absolute;\n      fill: none;\n      stroke-width: 4px;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }\n    .gas path,\n    .gas circle {\n      stroke: var(--energy-gas-color);\n    }\n    circle.gas {\n      stroke-width: 4;\n      fill: var(--energy-gas-color);\n    }\n    .gas .circle {\n      border-color: var(--energy-gas-color);\n    }\n    .low-carbon line {\n      stroke: var(--energy-non-fossil-color);\n    }\n    .low-carbon .circle {\n      border-color: var(--energy-non-fossil-color);\n    }\n    .low-carbon ha-svg-icon {\n      color: var(--energy-non-fossil-color);\n    }\n    circle.low-carbon {\n      stroke: var(--energy-non-fossil-color);\n      fill: var(--energy-non-fossil-color);\n    }\n    .solar .circle {\n      border-color: var(--energy-solar-color);\n    }\n    circle.solar,\n    path.solar {\n      stroke: var(--energy-solar-color);\n    }\n    circle.solar {\n      stroke-width: 4;\n      fill: var(--energy-solar-color);\n    }\n    .battery .circle {\n      border-color: var(--energy-battery-in-color);\n    }\n    circle.battery,\n    path.battery {\n      stroke: var(--energy-battery-out-color);\n    }\n    path.battery-house,\n    circle.battery-house {\n      stroke: var(--energy-battery-out-color);\n    }\n    circle.battery-house {\n      stroke-width: 4;\n      fill: var(--energy-battery-out-color);\n    }\n    path.battery-solar,\n    circle.battery-solar {\n      stroke: var(--energy-battery-in-color);\n    }\n    circle.battery-solar {\n      stroke-width: 4;\n      fill: var(--energy-battery-in-color);\n    }\n    .battery-in {\n      color: var(--energy-battery-in-color);\n    }\n    .battery-out {\n      color: var(--energy-battery-out-color);\n    }\n    path.battery-from-grid {\n      stroke: var(--energy-grid-consumption-color);\n    }\n    path.battery-to-grid {\n      stroke: var(--energy-grid-return-color);\n    }\n    path.return,\n    circle.return,\n    circle.battery-to-grid {\n      stroke: var(--energy-grid-return-color);\n    }\n    circle.return,\n    circle.battery-to-grid {\n      stroke-width: 4;\n      fill: var(--energy-grid-return-color);\n    }\n    .return {\n      color: var(--energy-grid-return-color);\n    }\n    .grid .circle {\n      border-color: var(--energy-grid-consumption-color);\n    }\n    .consumption {\n      color: var(--energy-grid-consumption-color);\n    }\n    circle.grid,\n    circle.battery-from-grid,\n    path.grid {\n      stroke: var(--energy-grid-consumption-color);\n    }\n    circle.grid,\n    circle.battery-from-grid {\n      stroke-width: 4;\n      fill: var(--energy-grid-consumption-color);\n    }\n    .home .circle {\n      border-width: 0;\n      border-color: var(--primary-color);\n    }\n    .home .circle.border {\n      border-width: 2px;\n    }\n    .circle svg circle {\n      animation: rotate-in 0.6s ease-in;\n      transition: stroke-dashoffset 0.4s, stroke-dasharray 0.4s;\n      fill: none;\n    }\n    @keyframes rotate-in {\n      from {\n        stroke-dashoffset: 238.76104;\n        stroke-dasharray: 238.76104;\n      }\n    }\n    .card-actions a {\n      text-decoration: none;\n    }\n  "])))}}]}}),(0,R.f)(j.oi))}}]);