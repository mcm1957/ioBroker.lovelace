"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[61046],{92306:(e,t,r)=>{r.d(t,{v:()=>i});const i=(e,t)=>{const r={};for(const i of e){const e=t(i);e in r?r[e].push(i):r[e]=[i]}return r}},11950:(e,t,r)=>{r.d(t,{l:()=>i});const i=async(e,t)=>new Promise((r=>{const i=t(e,(e=>{i(),r(e)}))}))},81582:(e,t,r)=>{r.d(t,{LZ:()=>i,Q4:()=>n,DJ:()=>o,pB:()=>s,SO:()=>a,iJ:()=>c,Nn:()=>l,Ny:()=>d,T0:()=>u});const i=32143==r.j?["migration_error","setup_error","setup_retry"]:null,n=32143==r.j?["not_loaded","loaded","setup_error","setup_retry"]:null,o=(e,t,r)=>{const i={type:"config_entries/subscribe"};return r&&r.type&&(i.type_filter=r.type),e.connection.subscribeMessage((e=>t(e)),i)},s=(e,t)=>{const r={};return t&&(t.type&&(r.type_filter=t.type),t.domain&&(r.domain=t.domain)),e.callWS({type:"config_entries/get",...r})},a=(e,t,r)=>e.callWS({type:"config_entries/update",entry_id:t,...r}),c=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),l=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),u=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null})},55424:(e,t,r)=>{r.d(t,{Bm:()=>g,o1:()=>b,iK:()=>k,rl:()=>w,P:()=>E,KU:()=>S,xZ:()=>C,gy:()=>P,ZC:()=>T,_Z:()=>D,Jj:()=>O,yH:()=>j,UB:()=>z,jB:()=>Z,G9:()=>F,vE:()=>I});var i=r(4535),n=r(59699),o=r(32182),s=r(79021),a=r(39244),c=r(27088),l=r(83008),d=r(70390),u=r(47538),f=r(97330),p=r(92306),h=r(11950),m=r(81582),y=r(74186),_=r(38014);const v=[],g=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),b=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),k=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),w=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),E=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),S=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),C=e=>e.callWS({type:"energy/info"}),P=e=>e.callWS({type:"energy/validate"}),T=e=>e.callWS({type:"energy/get_prefs"}),D=async(e,t)=>{const r=e.callWS({type:"energy/save_prefs",...t});return x(e),r},A=async(e,t,r,i,n,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:r,co2_statistic_id:i,period:o}),O=e=>(0,p.v)(e.energy_sources,(e=>e.type)),j=(e,t)=>{const r=[];for(const i of e.energy_sources)if("solar"!==i.type)if("gas"!==i.type)if("battery"!==i.type){for(const e of i.flow_from){r.push(e.stat_energy_from),e.stat_cost&&r.push(e.stat_cost);const i=t.cost_sensors[e.stat_energy_from];i&&r.push(i)}for(const e of i.flow_to){r.push(e.stat_energy_to),e.stat_compensation&&r.push(e.stat_compensation);const i=t.cost_sensors[e.stat_energy_to];i&&r.push(i)}}else r.push(i.stat_energy_from),r.push(i.stat_energy_to);else{r.push(i.stat_energy_from),i.stat_cost&&r.push(i.stat_cost);const e=t.cost_sensors[i.stat_energy_from];e&&r.push(e)}else r.push(i.stat_energy_from);return r},x=e=>{v.forEach((t=>{const r=z(e,{key:t});r.clearPrefs(),r._active&&r.refresh()}))},z=(e,t={})=>{let r="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");r=`_${t.key}`}if(e.connection[r])return e.connection[r];v.push(t.key);const p=(0,f._)(e.connection,r,(async()=>{if(p.prefs||(p.prefs=await T(e)),p._refreshTimeout&&clearTimeout(p._refreshTimeout),p._active&&(!p.end||p.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),p._refreshTimeout=window.setTimeout((()=>p.refresh()),e.getTime()-Date.now())}return(async(e,t,r,c,l)=>{const[d,u,f]=await Promise.all([(0,m.pB)(e,{domain:"co2signal"}),(0,h.l)(e.connection,y.LM),C(e)]),p=d.length?d[0]:void 0;let v;if(p)for(const t of u){if(t.config_entry_id!==p.entry_id)continue;const r=e.states[t.entity_id];if(r&&"%"===r.attributes.unit_of_measurement){v=r.entity_id;break}}const g=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)g.push(t.stat_energy_from);const b=j(t,f),k=(0,i.Z)(c||new Date,r),w=k>35?"month":k>2?"day":"hour",E=(0,n.Z)(r,-1),S={energy:"kWh",volume:"km"===(e.config.unit_system.length||"")?"m³":"ft³"},P=await(0,_.dL)(e,E,c,b,w,S);let T,D,O,x,z;if(l){D=k>27&&k<32?(0,o.Z)(r,-1):(0,s.Z)(r,-1*(k+1));const t=(0,n.Z)(D,-1);O=(0,a.Z)(r,-1),T=await(0,_.dL)(e,t,O,b,w,S)}void 0!==v&&(x=await A(e,r,g,v,c,k>35?"month":k>2?"day":"hour"),l&&(z=await A(e,D,g,v,O,k>35?"month":k>2?"day":"hour"))),Object.values(P).forEach((e=>{e.length&&new Date(e[0].start)>E&&e.unshift({...e[0],start:E.toISOString(),end:E.toISOString(),sum:0,state:0})}));const Z=await(0,_.Py)(e,b),W={};return Z.forEach((e=>{W[e.statistic_id]=e})),{start:r,end:c,startCompare:D,endCompare:O,info:f,prefs:t,stats:P,statsMetadata:W,statsCompare:T,co2SignalConfigEntry:p,co2SignalEntity:v,fossilEnergyConsumption:x,fossilEnergyConsumptionCompare:z}})(e,p.prefs,p.start,p.end,p.compare)})),g=p.subscribe;p.subscribe=e=>{const t=g(e);return p._active++,()=>{p._active--,p._active<1&&(clearTimeout(p._refreshTimeout),p._refreshTimeout=void 0),t()}},p._active=0,p.prefs=t.prefs;const b=new Date;p.start=b.getHours()>0?(0,c.Z)():(0,l.Z)(),p.end=b.getHours()>0?(0,d.Z)():(0,u.Z)();const k=()=>{p._updatePeriodTimeout=window.setTimeout((()=>{p.start=(0,c.Z)(),p.end=(0,d.Z)(),k()}),(0,n.Z)((0,d.Z)(),1).getTime()-Date.now())};return k(),p.clearPrefs=()=>{p.prefs=void 0},p.setPeriod=(e,t)=>{var r;p.start=e,p.end=t,p.start.getTime()!==(0,c.Z)().getTime()||(null===(r=p.end)||void 0===r?void 0:r.getTime())!==(0,d.Z)().getTime()||p._updatePeriodTimeout?p._updatePeriodTimeout&&(clearTimeout(p._updatePeriodTimeout),p._updatePeriodTimeout=void 0):k()},p.setCompare=e=>{p.compare=e},p},Z=e=>e.callWS({type:"energy/solar_forecast"}),W=["volume","energy"],F=(e,t={},r)=>{for(const i of e.energy_sources){if("gas"!==i.type)continue;if(r&&r===i.stat_energy_from)continue;const e=t[i.stat_energy_from];if(W.includes(null==e?void 0:e.unit_class))return e.unit_class}},I=(e,t,r={})=>{const i=F(t,r);if(void 0!==i)return"energy"===i?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"}},38014:(e,t,r)=>{r.d(t,{uR:()=>n,Py:()=>o,dL:()=>s,h_:()=>a,Cj:()=>c,hN:()=>l,Kj:()=>d,q6:()=>u,Nw:()=>f,Z0:()=>m,j2:()=>y,Kd:()=>_,dO:()=>v,Hs:()=>g});var i=r(91741);const n=(e,t)=>e.callWS({type:"recorder/list_statistic_ids",statistic_type:t}),o=(e,t)=>e.callWS({type:"recorder/get_statistics_metadata",statistic_ids:t}),s=(e,t,r,i,n="hour",o)=>e.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),end_time:null==r?void 0:r.toISOString(),statistic_ids:i,period:n,units:o}),a=e=>e.callWS({type:"recorder/validate_statistics"}),c=(e,t,r)=>e.callWS({type:"recorder/update_statistics_metadata",statistic_id:t,unit_of_measurement:r}),l=(e,t)=>e.callWS({type:"recorder/clear_statistics",statistic_ids:t}),d=e=>{if(!e||e.length<2)return null;const t=e[e.length-1].sum;if(null===t)return null;const r=e[0].sum;return null===r?t:t-r},u=(e,t)=>{let r=null;for(const i of t){if(!(i in e))continue;const t=d(e[i]);null!==t&&(null===r?r=t:r+=t)}return r},f=(e,t)=>e.some((e=>null!==e[t])),p=["mean","min","max"],h=["sum"],m=(e,t)=>!(!p.includes(t)||!e.has_mean)||!(!h.includes(t)||!e.has_sum),y=(e,t,r,i,n)=>e.callWS({type:"recorder/adjust_sum_statistics",statistic_id:t,start_time:r,adjustment:i,adjustment_unit_of_measurement:n}),_=(e,t,r)=>{const n=e.states[t];return n?(0,i.C)(n):(null==r?void 0:r.name)||t},v=(e,t,r)=>{let i;var n;t&&(i=null===(n=e.states[t])||void 0===n?void 0:n.attributes.unit_of_measurement);return void 0===i?null==r?void 0:r.statistics_unit_of_measurement:i},g=e=>e.includes(":")},73826:(e,t,r)=>{r.d(t,{f:()=>m});var i=r(33310);function n(e,t,r,i){var n=o();if(i)for(var d=0;d<i.length;d++)n=i[d](n);var u=t((function(e){n.initializeInstanceElements(e,f.elements)}),r),f=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(l(o.descriptor)||l(n.descriptor)){if(c(o)||c(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(c(o)){if(c(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}a(o,n)}else t.push(o)}return t}(u.d.map(s)),e);return n.initializeClassElements(u.F,f.elements),n.runClassFinishers(u.F,f.finishers)}function o(){o=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=u(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:d(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=d(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function s(e){var t,r=u(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function a(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function c(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function p(e,t,r){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}},p(e,t,r||e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}const m=e=>n(null,(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){p(h(r.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if(p(h(r.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if(p(h(r.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},61046:(e,t,r)=>{r.a(e,(async e=>{r.r(t),r.d(t,{HuiEnergyCompareCard:()=>g});var i=r(4535),n=r(93752),o=r(37500),s=r(33310),a=r(12198),c=r(55424),l=r(73826),d=e([a]);function u(){u=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!h(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&i.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=_(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:y(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=y(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function f(e){var t,r=_(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function p(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function h(e){return e.decorators&&e.decorators.length}function m(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function y(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function _(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}a=(d.then?await d:d)[0];let g=function(e,t,r,i){var n=u();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var s=t((function(e){n.initializeInstanceElements(e,a.elements)}),r),a=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(m(o.descriptor)||m(n.descriptor)){if(h(o)||h(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(h(o)){if(h(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}p(o,n)}else t.push(o)}return t}(s.d.map(f)),e);return n.initializeClassElements(s.F,a.elements),n.runClassFinishers(s.F,a.finishers)}([(0,s.Mo)("hui-energy-compare-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_start",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_end",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_startCompare",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_endCompare",value:void 0},{kind:"field",decorators:[(0,s.Cb)({type:Boolean,reflect:!0})],key:"hidden",value:()=>!0},{kind:"method",key:"getCardSize",value:function(){return 1}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){return[(0,c.UB)(this.hass,{key:this._config.collection_key}).subscribe((e=>this._update(e)))]}},{kind:"method",key:"render",value:function(){if(!this._startCompare||!this._endCompare)return o.dy``;const e=(0,i.Z)(this._endCompare,this._startCompare);return o.dy`
      <ha-alert dismissable @alert-dismissed-clicked=${this._stopCompare}>
        ${this.hass.localize("ui.panel.energy.compare.info",{start:o.dy`<b
            >${(0,a.p6)(this._start,this.hass.locale)}${e>0?` -\n          ${(0,a.p6)(this._end||(0,n.Z)(new Date),this.hass.locale)}`:""}</b
          >`,end:o.dy`<b
            >${(0,a.p6)(this._startCompare,this.hass.locale)}${e>0?` -\n          ${(0,a.p6)(this._endCompare,this.hass.locale)}`:""}</b
          >`})}
      </ha-alert>
    `}},{kind:"method",key:"_update",value:function(e){this._start=e.start,this._end=e.end,this._startCompare=e.startCompare,this._endCompare=e.endCompare,this.hidden=!this._startCompare}},{kind:"method",key:"_stopCompare",value:function(){const e=(0,c.UB)(this.hass,{key:this._config.collection_key});e.setCompare(!1),e.refresh()}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`
      mwc-button {
        width: max-content;
      }
    `}}]}}),(0,l.f)(o.oi))}))}}]);
//# sourceMappingURL=b69161cb.js.map