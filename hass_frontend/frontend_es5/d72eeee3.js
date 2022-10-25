/*! For license information please see d72eeee3.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[52994],{21157:function(e,n,t){var r;t(48175);var i,a,o=(0,t(50856).d)(r||(i=['\n/* Most common used flex styles*/\n<dom-module id="iron-flex">\n  <template>\n    <style>\n      .layout.horizontal,\n      .layout.vertical {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.inline {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      }\n\n      .layout.horizontal {\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      }\n\n      .layout.vertical {\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      }\n\n      .layout.wrap {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      }\n\n      .layout.no-wrap {\n        -ms-flex-wrap: nowrap;\n        -webkit-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .flex {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-auto {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      }\n\n      .flex-none {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Basic flexbox reverse styles */\n<dom-module id="iron-flex-reverse">\n  <template>\n    <style>\n      .layout.horizontal-reverse,\n      .layout.vertical-reverse {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      }\n\n      .layout.horizontal-reverse {\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      }\n\n      .layout.vertical-reverse {\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      }\n\n      .layout.wrap-reverse {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Flexbox alignment */\n<dom-module id="iron-flex-alignment">\n  <template>\n    <style>\n      /**\n       * Alignment in cross axis.\n       */\n      .layout.start {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      }\n\n      .layout.center,\n      .layout.center-center {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      }\n\n      .layout.end {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      }\n\n      .layout.baseline {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      }\n\n      /**\n       * Alignment in main axis.\n       */\n      .layout.start-justified {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      }\n\n      .layout.center-justified,\n      .layout.center-center {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      }\n\n      .layout.end-justified {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      }\n\n      .layout.around-justified {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      }\n\n      .layout.justified {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      }\n\n      /**\n       * Self alignment.\n       */\n      .self-start {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      }\n\n      .self-center {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      }\n\n      .self-end {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      }\n\n      .self-stretch {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      }\n\n      .self-baseline {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      }\n\n      /**\n       * multi-line alignment in main axis.\n       */\n      .layout.start-aligned {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      }\n\n      .layout.end-aligned {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      }\n\n      .layout.center-aligned {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      }\n\n      .layout.between-aligned {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      }\n\n      .layout.around-aligned {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      }\n    </style>\n  </template>\n</dom-module>\n/* Non-flexbox positioning helper styles */\n<dom-module id="iron-flex-factors">\n  <template>\n    <style>\n      .flex,\n      .flex-1 {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      }\n\n      .flex-2 {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      }\n\n      .flex-3 {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      }\n\n      .flex-4 {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      }\n\n      .flex-5 {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      }\n\n      .flex-6 {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      }\n\n      .flex-7 {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      }\n\n      .flex-8 {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      }\n\n      .flex-9 {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      }\n\n      .flex-10 {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      }\n\n      .flex-11 {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      }\n\n      .flex-12 {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      }\n    </style>\n  </template>\n</dom-module>\n<dom-module id="iron-positioning">\n  <template>\n    <style>\n      .block {\n        display: block;\n      }\n\n      [hidden] {\n        display: none !important;\n      }\n\n      .invisible {\n        visibility: hidden !important;\n      }\n\n      .relative {\n        position: relative;\n      }\n\n      .fit {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      body.fullbleed {\n        margin: 0;\n        height: 100vh;\n      }\n\n      .scroll {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      }\n\n      /* fixed position */\n      .fixed-bottom,\n      .fixed-left,\n      .fixed-right,\n      .fixed-top {\n        position: fixed;\n      }\n\n      .fixed-top {\n        top: 0;\n        left: 0;\n        right: 0;\n      }\n\n      .fixed-right {\n        top: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      .fixed-bottom {\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      .fixed-left {\n        top: 0;\n        bottom: 0;\n        left: 0;\n      }\n    </style>\n  </template>\n</dom-module>\n'],a||(a=i.slice(0)),r=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(a)}}))));o.setAttribute("style","display: none;"),document.head.appendChild(o.content)},9146:function(e,n,t){t.d(n,{d:function(){return i}});var r=t(40095),i=function(e,n){return e&&e.attributes.supported_features?Object.keys(n).map((function(t){return(0,r.e)(e,Number(t))?n[t]:""})).filter((function(e){return""!==e})).join(" "):""}},52994:function(e,n,t){t.r(n);t(44577),t(21157);var r,i=t(21683),a=t(78956),o=t(50856),l=t(28426),s=t(9146),u=t(40095),c=(t(86630),t(43709),t(11052));t(29925),t(10983);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,n){return d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},d(e,n)}function y(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=x(e);if(n){var i=x(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return b(this,t)}}function b(e,n){if(n&&("object"===f(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var h,w=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(l,e);var n,t,i,a=y(l);function l(){return p(this,l),a.apply(this,arguments)}return n=l,i=[{key:"template",get:function(){return(0,o.d)(r||(e=['\n      <style include="iron-flex iron-flex-alignment"></style>\n      <style>\n        /* local DOM styles go here */\n        :host {\n          @apply --layout-flex;\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n        .in-flux#target_temperature {\n          color: var(--error-color);\n        }\n        #target_temperature {\n          @apply --layout-self-center;\n          font-size: 200%;\n          direction: ltr;\n        }\n        .control-buttons {\n          font-size: 200%;\n          text-align: right;\n        }\n        ha-icon-button {\n          height: 48px;\n          width: 48px;\n        }\n      </style>\n\n      \x3c!-- local DOM goes here --\x3e\n      <div id="target_temperature">[[value]] [[units]]</div>\n      <div class="control-buttons">\n        <div>\n          <ha-icon-button on-click="incrementValue">\n            <ha-icon icon="hass:chevron-up"></ha-icon>\n          </ha-icon-button>\n        </div>\n        <div>\n          <ha-icon-button on-click="decrementValue">\n            <ha-icon icon="hass:chevron-down"></ha-icon>\n          </ha-icon-button>\n        </div>\n      </div>\n    '],n||(n=e.slice(0)),r=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"properties",get:function(){return{value:{type:Number,observer:"valueChanged"},units:{type:String},min:{type:Number},max:{type:Number},step:{type:Number,value:1}}}}],(t=[{key:"temperatureStateInFlux",value:function(e){this.$.target_temperature.classList.toggle("in-flux",e)}},{key:"incrementValue",value:function(){var e=this.value+this.step;this.value<this.max&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),e<=this.max?e<=this.min?this.value=this.min:this.value=e:this.value=this.max}},{key:"decrementValue",value:function(){var e=this.value-this.step;this.value>this.min&&(this.last_changed=Date.now(),this.temperatureStateInFlux(!0)),e>=this.min?this.value=e:this.value=this.min}},{key:"valueChanged",value:function(){var e=this;this.last_changed&&window.setTimeout((function(){Date.now()-e.last_changed>=2e3&&(e.fire("change"),e.temperatureStateInFlux(!1),e.last_changed=null)}),2010)}}])&&m(n.prototype,t),i&&m(n,i),l}((0,c.I)(l.H3));function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function k(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,n){return _=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},_(e,n)}function j(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=S(e);if(n){var i=S(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return O(this,t)}}function O(e,n){if(n&&("object"===g(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}customElements.define("ha-water_heater-control",w);var z=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_(e,n)}(c,e);var n,t,r,l=j(c);function c(){return v(this,c),l.apply(this,arguments)}return n=c,r=[{key:"template",get:function(){return(0,o.d)(h||(e=['\n      <style include="iron-flex"></style>\n      <style>\n        :host {\n          color: var(--primary-text-color);\n        }\n\n        ha-select {\n          width: 100%;\n        }\n\n        ha-water_heater-control.range-control-left,\n        ha-water_heater-control.range-control-right {\n          float: left;\n          width: 46%;\n        }\n        ha-water_heater-control.range-control-left {\n          margin-right: 4%;\n        }\n        ha-water_heater-control.range-control-right {\n          margin-left: 4%;\n        }\n\n        .single-row {\n          padding: 8px 0;\n        }\n      </style>\n\n      <div class$="[[computeClassNames(stateObj)]]">\n        <div class="container-temperature">\n          <div class$="[[stateObj.attributes.operation_mode]]">\n            <div hidden$="[[!supportsTemperatureControls(stateObj)]]">\n              [[localize(\'ui.card.water_heater.target_temperature\')]]\n            </div>\n            <template is="dom-if" if="[[supportsTemperature(stateObj)]]">\n              <ha-water_heater-control\n                value="[[stateObj.attributes.temperature]]"\n                units="[[hass.config.unit_system.temperature]]"\n                step="[[computeTemperatureStepSize(hass, stateObj)]]"\n                min="[[stateObj.attributes.min_temp]]"\n                max="[[stateObj.attributes.max_temp]]"\n                on-change="targetTemperatureChanged"\n              >\n              </ha-water_heater-control>\n            </template>\n          </div>\n        </div>\n\n        <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">\n          <div class="container-operation_list">\n            <div class="controls">\n              <ha-select\n                label="[[localize(\'ui.card.water_heater.operation\')]]"\n                value="[[stateObj.attributes.operation_mode]]"\n                on-selected="handleOperationmodeChanged"\n                fixedMenuPosition\n                naturalMenuWidth\n                on-closed="stopPropagation"\n              >\n                <template\n                  is="dom-repeat"\n                  items="[[stateObj.attributes.operation_list]]"\n                >\n                  <mwc-list-item value="[[item]]">\n                    [[_localizeOperationMode(localize, item)]]\n                  </mwc-list-item>\n                </template>\n              </ha-select>\n            </div>\n          </div>\n        </template>\n\n        <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">\n          <div class="container-away_mode">\n            <div class="center horizontal layout single-row">\n              <div class="flex">\n                [[localize(\'ui.card.water_heater.away_mode\')]]\n              </div>\n              <ha-switch\n                checked="[[awayToggleChecked]]"\n                on-change="awayToggleChanged"\n              >\n              </ha-switch>\n            </div>\n          </div>\n        </template>\n      </div>\n    '],n||(n=e.slice(0)),h=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"properties",get:function(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},awayToggleChecked:Boolean}}}],(t=[{key:"stateObjChanged",value:function(e,n){var t=this;e&&this.setProperties({awayToggleChecked:"on"===e.attributes.away_mode}),n&&(this._debouncer=a.dx.debounce(this._debouncer,i.Wc.after(500),(function(){t.fire("iron-resize")})))}},{key:"computeTemperatureStepSize",value:function(e,n){return n.attributes.target_temp_step?n.attributes.target_temp_step:-1!==e.config.unit_system.temperature.indexOf("F")?1:.5}},{key:"supportsTemperatureControls",value:function(e){return this.supportsTemperature(e)}},{key:"supportsTemperature",value:function(e){return(0,u.e)(e,1)&&"number"==typeof e.attributes.temperature}},{key:"supportsOperationMode",value:function(e){return(0,u.e)(e,2)}},{key:"supportsAwayMode",value:function(e){return(0,u.e)(e,4)}},{key:"computeClassNames",value:function(e){var n=[(0,s.d)(e,{1:"has-target_temperature",2:"has-operation_mode",4:"has-away_mode"})];return n.push("more-info-water_heater"),n.join(" ")}},{key:"targetTemperatureChanged",value:function(e){var n=e.target.value;n!==this.stateObj.attributes.temperature&&this.callServiceHelper("set_temperature",{temperature:n})}},{key:"awayToggleChanged",value:function(e){var n="on"===this.stateObj.attributes.away_mode,t=e.target.checked;n!==t&&this.callServiceHelper("set_away_mode",{away_mode:t})}},{key:"handleOperationmodeChanged",value:function(e){var n=this.stateObj.attributes.operation_mode,t=e.target.value;t&&n!==t&&this.callServiceHelper("set_operation_mode",{operation_mode:t})}},{key:"stopPropagation",value:function(e){e.stopPropagation()}},{key:"callServiceHelper",value:function(e,n){var t=this;n.entity_id=this.stateObj.entity_id,this.hass.callService("water_heater",e,n).then((function(){t.stateObjChanged(t.stateObj)}))}},{key:"_localizeOperationMode",value:function(e,n){return e("component.water_heater.state._.".concat(n))||n}}])&&k(n.prototype,t),r&&k(n,r),c}((0,t(1265).Z)((0,c.I)(l.H3)));customElements.define("more-info-water_heater",z)}}]);