"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[20614],{27269:(e,t,r)=>{r.d(t,{p:()=>i});const i=e=>e.substr(e.indexOf(".")+1)},91741:(e,t,r)=>{r.d(t,{a:()=>n,C:()=>o});var i=r(27269);const n=(e,t)=>void 0===t.friendly_name?(0,i.p)(e).replace(/_/g," "):t.friendly_name||"",o=e=>n(e.entity_id,e.attributes)},83849:(e,t,r)=>{r.d(t,{c:()=>a});var i=r(98651);if(98818!=r.j)var n=r(47181);var o=r(72055);const a=(e,t)=>{const r=(null==t?void 0:t.replace)||!1;var s;i.U?i.U.then((()=>a(e,t))):(r?o.E.history.replaceState(null!==(s=o.E.history.state)&&void 0!==s&&s.root?{root:!0}:null,"",e):o.E.history.pushState(null,"",e),(0,n.B)(o.E,"location-changed",{replace:r}))}},85415:(e,t,r)=>{r.d(t,{$:()=>i,f:()=>n});const i=(e,t)=>e<t?-1:e>t?1:0,n=(e,t)=>i(e.toLowerCase(),t.toLowerCase())},73975:(e,t,r)=>{r.a(e,(async e=>{r.r(t),r.d(t,{HaActionSelector:()=>y});var i=r(37500),n=r(33310),o=r(61788),a=e([o]);function s(){s=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!d(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=f(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:u(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=u(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function l(e){var t,r=f(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function c(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function d(e){return e.decorators&&e.decorators.length}function p(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function u(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}o=(a.then?await a:a)[0];let y=function(e,t,r,i){var n=s();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,u.elements)}),r),u=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(p(o.descriptor)||p(n.descriptor)){if(d(o)||d(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(d(o)){if(d(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else t.push(o)}return t}(a.d.map(l)),e);return n.initializeClassElements(a.F,u.elements),n.runClassFinishers(a.F,u.finishers)}([(0,n.Mo)("ha-selector-action")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"method",key:"render",value:function(){return i.dy`<ha-automation-action
      .disabled=${this.disabled}
      .actions=${this.value||[]}
      .hass=${this.hass}
    ></ha-automation-action>`}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      ha-automation-action {
        display: block;
        margin-bottom: 16px;
      }
      :host([disabled]) ha-automation-action {
        opacity: var(--light-disabled-opacity);
        pointer-events: none;
      }
    `}}]}}),i.oi)}))},57066:(e,t,r)=>{r.d(t,{Lo:()=>a,IO:()=>s,qv:()=>l,sG:()=>p,TD:()=>u,Dl:()=>f});var i=r(97330),n=r(85415),o=r(38346);const a=(e,t)=>e.callWS({type:"config/area_registry/create",...t}),s=(e,t,r)=>e.callWS({type:"config/area_registry/update",area_id:t,...r}),l=(e,t)=>e.callWS({type:"config/area_registry/delete",area_id:t}),c=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then((e=>e.sort(((e,t)=>(0,n.$)(e.name,t.name))))),d=(e,t)=>e.subscribeEvents((0,o.D)((()=>c(e).then((e=>t.setState(e,!0)))),500,!0),"area_registry_updated"),p=(e,t)=>(0,i.B)("_areaRegistry",c,d,e,t),u=e=>{const t={};for(const r of e)r.area_id&&(r.area_id in t||(t[r.area_id]=[]),t[r.area_id].push(r));return t},f=e=>{const t={};for(const r of e)r.area_id&&(r.area_id in t||(t[r.area_id]=[]),t[r.area_id].push(r));return t}},22814:(e,t,r)=>{r.d(t,{uw:()=>i,iI:()=>n,WD:()=>o,W2:()=>a,TZ:()=>s});const i=`${location.protocol}//${location.host}`,n=(e,t)=>e.callWS({type:"auth/sign_path",path:t}),o=()=>fetch("/auth/providers",{credentials:"same-origin"}),a=async(e,t,r,i)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:t,username:r,password:i}),s=async(e,t,r)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:t,password:r})},57292:(e,t,r)=>{r.d(t,{jL:()=>s,t1:()=>l,dl:()=>c,q4:()=>u,Wg:()=>f,pI:()=>h,HP:()=>y});var i=r(97330),n=r(91741);if(32143==r.j)var o=r(85415);var a=r(38346);const s=(e,t,r)=>e.name_by_user||e.name||r&&((e,t)=>{for(const r of t||[]){const t="string"==typeof r?r:r.entity_id,i=e.states[t];if(i)return(0,n.C)(i)}})(t,r)||t.localize("ui.panel.config.devices.unnamed_device","type",t.localize(`ui.panel.config.devices.type.${e.entry_type||"device"}`)),l=(e,t,r)=>e.callWS({type:"config/device_registry/update",device_id:t,...r}),c=(e,t,r)=>e.callWS({type:"config/device_registry/remove_config_entry",device_id:t,config_entry_id:r}),d=e=>e.sendMessagePromise({type:"config/device_registry/list"}),p=(e,t)=>e.subscribeEvents((0,a.D)((()=>d(e).then((e=>t.setState(e,!0)))),500,!0),"device_registry_updated"),u=(e,t)=>(0,i.B)("_dr",d,p,e,t),f=e=>e.sort(((e,t)=>(0,o.f)(e.name||"",t.name||""))),h=e=>{const t={};for(const r of e)r.device_id&&(r.device_id in t||(t[r.device_id]=[]),t[r.device_id].push(r));return t},y=(e,t)=>{const r={};for(const i of t){const t=e[i.entity_id];null!=t&&t.domain&&null!==i.device_id&&(r[i.device_id]||(r[i.device_id]=[]),r[i.device_id].push(t.domain))}return r}},74186:(e,t,r)=>{r.d(t,{eD:()=>l,wX:()=>c,vA:()=>d,L3:()=>p,Nv:()=>u,z3:()=>f,hg:()=>h,LM:()=>m,_V:()=>v,Mw:()=>g});var i=r(97330),n=r(14516),o=r(91741);if(32143==r.j)var a=r(85415);var s=r(38346);const l=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery"===e.states[t.entity_id].attributes.device_class)),c=(e,t)=>t.find((t=>e.states[t.entity_id]&&"battery_charging"===e.states[t.entity_id].attributes.device_class)),d=(e,t)=>{if(t.name)return t.name;const r=e.states[t.entity_id];return r?(0,o.C)(r):t.original_name?t.original_name:t.entity_id},p=(e,t)=>e.callWS({type:"config/entity_registry/get",entity_id:t}),u=(e,t,r)=>e.callWS({type:"config/entity_registry/update",entity_id:t,...r}),f=(e,t)=>e.callWS({type:"config/entity_registry/remove",entity_id:t}),h=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),y=(e,t)=>e.subscribeEvents((0,s.D)((()=>h(e).then((e=>t.setState(e,!0)))),500,!0),"entity_registry_updated"),m=(e,t)=>(0,i.B)("_entityRegistry",h,y,e,t),v=e=>e.sort(((e,t)=>(0,a.f)(e.name||"",t.name||""))),g=(0,n.Z)((e=>{const t={};for(const r of Object.values(e))t[r.id]=r;return t}))},5986:(e,t,r)=>{r.d(t,{H0:()=>i,Lh:()=>n,F3:()=>o,t4:()=>a,Mt:()=>s});const i=(e,t)=>t.issue_tracker||`https://github.com/home-assistant/home-assistant/issues?q=is%3Aissue+is%3Aopen+label%3A%22integration%3A+${e}%22`,n=(e,t,r)=>e(`component.${t}.title`)||(null==r?void 0:r.name)||t,o=(e,t)=>{const r={type:"manifest/list"};return t&&(r.integrations=t),e.callWS(r)},a=(e,t)=>e.callWS({type:"manifest/get",integration:t}),s=e=>e.callWS({type:"integration/setup_info"})},21016:(e,t,r)=>{r.d(t,{n:()=>i,o:()=>n});const i=(e,t)=>e.callWS({type:"execute_script",sequence:t}),n=(e,t)=>"homeassistant"===e&&["restart","stop"].includes(t)},98651:(e,t,r)=>{r.d(t,{U:()=>a,M:()=>l});var i=r(72055),n=r(74265);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let a,s;const l=e=>class extends e{constructor(...e){super(...e),o(this,"_ignoreNextPopState",!1),o(this,"_dialogClosedListener",(e=>{var t,r;null!==(t=i.E.history.state)&&void 0!==t&&t.open&&(null===(r=i.E.history.state)||void 0===r?void 0:r.dialog)===e.detail.dialog&&history.length&&(this._ignoreNextPopState=!0,a=new Promise((e=>{s=()=>{e(),s=void 0,a=void 0},i.E.history.back()})))})),o(this,"_popstateChangeListener",(e=>{var t,r,n,o;if(this._ignoreNextPopState)return history.length&&(null!==(t=e.state)&&void 0!==t&&null!==(r=t.oldState)&&void 0!==r&&r.replaced||null===(null===(n=e.state)||void 0===n||null===(o=n.oldState)||void 0===o?void 0:o.dialogParams))?void i.E.history.back():(this._ignoreNextPopState=!1,void(s&&s()));e.state&&"dialog"in e.state&&this._handleDialogStateChange(e.state),s&&s()}))}connectedCallback(){super.connectedCallback(),1===history.length&&history.replaceState({...history.state,root:!0},""),i.E.addEventListener("popstate",this._popstateChangeListener),this.addEventListener("dialog-closed",this._dialogClosedListener)}disconnectedCallback(){super.disconnectedCallback(),i.E.removeEventListener("popstate",this._popstateChangeListener),this.removeEventListener("dialog-closed",this._dialogClosedListener)}async _handleDialogStateChange(e){if(!e.open){return await(0,n.gk)(e.dialog)?void(e.oldState&&this._handleDialogStateChange(e.oldState)):void i.E.history.pushState({dialog:e.dialog,open:!0,dialogParams:null,oldState:null},"")}null!==e.dialogParams&&(0,n.vC)(this,this.shadowRoot,e.dialog,e.dialogParams)}}}}]);
//# sourceMappingURL=078a27ed.js.map