export const id=60076;export const ids=[60076];export const modules={30443:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(59429),o=i(23682);function n(t,e){(0,o.Z)(2,arguments);var i=(0,s.Z)(t),n=(0,s.Z)(e);return i.getTime()===n.getTime()}},53970:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(30443),o=i(23682);function n(t){return(0,o.Z)(1,arguments),(0,s.Z)(t,Date.now())}},73589:(t,e,i)=>{i.d(e,{Z:()=>o});const s=t=>{const e=parseFloat(t);if(isNaN(e))throw new Error(`${t} is not a number`);return e};function o(t){if(!t)return null;try{if(t.endsWith("%"))return{w:100,h:s(t.substr(0,t.length-1))};const e=t.replace(":","x").split("x");return 0===e.length?null:1===e.length?{w:s(e[0]),h:1}:{w:s(e[0]),h:s(e[1])}}catch(t){}return null}},58763:(t,e,i)=>{i.a(t,(async(t,s)=>{try{i.d(e,{Nu:()=>H,Vk:()=>d,xS:()=>f,xj:()=>E});var o=i(58831),n=i(29171),r=i(91741),a=t([n]);n=(a.then?(await a)():a)[0];const c=["climate","humidifier","water_heater"],l=["climate","humidifier","input_datetime","thermostat","water_heater","person","device_tracker"],u=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode","action","current_humidity"],h=(t,e)=>!t.states[e]||l.includes((0,o.M)(e)),d=(t,e,i,s,o)=>{const n={type:"history/stream",entity_ids:o,start_time:i.toISOString(),end_time:s.toISOString(),minimal_response:!0,no_attributes:!o.some((e=>h(t,e)))},r=new _(t);return t.connection.subscribeMessage((t=>e(r.processMessage(t))),n)};class _{constructor(t,e){this.hass=void 0,this.hoursToShow=void 0,this.combinedHistory=void 0,this.hass=t,this.hoursToShow=e,this.combinedHistory={}}processMessage(t){if(!this.combinedHistory||!Object.keys(this.combinedHistory).length)return this.combinedHistory=t.states,this.combinedHistory;if(!Object.keys(t.states).length)return this.combinedHistory;const e=this.hoursToShow?((new Date).getTime()-3600*this.hoursToShow*1e3)/1e3:void 0,i={};for(const t of Object.keys(this.combinedHistory))i[t]=[];for(const e of Object.keys(t.states))i[e]=[];for(const s of Object.keys(i)){if(s in this.combinedHistory&&s in t.states){const e=this.combinedHistory[s],o=e[e.length-1];i[s]=e.concat(t.states[s]),t.states[s][0].lu<o.lu&&(i[s]=i[s].sort(((t,e)=>t.lu-e.lu)))}else s in this.combinedHistory?i[s]=this.combinedHistory[s]:i[s]=t.states[s];if(e&&s in this.combinedHistory){const t=i[s].filter((t=>t.lu<e));if(!t.length)continue;if(i[s]=i[s].filter((t=>t.lu>=e)),i[s].length&&i[s][0].lu===e)continue;const o=t[t.length-1];o.lu=e,i[s].unshift(o)}}return this.combinedHistory=i,this.combinedHistory}}const f=(t,e,i,s,o=!0,n=!0,r)=>{const a={type:"history/stream",entity_ids:s,start_time:new Date((new Date).getTime()-3600*i*1e3).toISOString(),minimal_response:o,significant_changes_only:n,no_attributes:null!=r?r:!s.some((e=>h(t,e)))},c=new _(t,i);return t.connection.subscribeMessage((t=>e(c.processMessage(t))),a)},m=(t,e)=>t.state===e.state&&(!t.attributes||!e.attributes||u.every((i=>t.attributes[i]===e.attributes[i]))),g=(t,e,i,s,o,a,c)=>{const l=[],u=a[0];for(const r of a){if(l.length>0&&r.s===l[l.length-1].state)continue;const a={};null!=c&&c.attributes.device_class&&(a.device_class=null==c?void 0:c.attributes.device_class),l.push({state_localize:(0,n.c)(t,e,i,s[o],o,{...r.a||u.a,...a},r.s),state:r.s,last_changed:1e3*(r.lc?r.lc:r.lu)})}return{name:(0,r.a)(o,(null==c?void 0:c.attributes)||u.a),entity_id:o,data:l}},y=(t,e,i,s)=>{const n=[];return Object.keys(i).forEach((t=>{const e=i[t],a=e[0],l=(0,o.M)(t),h=[];for(const t of e){let e;if(c.includes(l)){e={state:t.s,last_changed:1e3*t.lu,attributes:{}};for(const i of u)i in t.a&&(e.attributes[i]=t.a[i])}else e={state:t.s,last_changed:1e3*(t.lc?t.lc:t.lu),attributes:{}};h.length>1&&m(e,h[h.length-1])&&m(e,h[h.length-2])||h.push(e)}const d=t in s?s[t].attributes:"friendly_name"in a.a?a.a:void 0;n.push({domain:l,name:(0,r.a)(t,d||{}),entity_id:t,states:h})})),{unit:t,device_class:e,identifier:Object.keys(i).join(""),data:n}},v=["counter","input_number","number"],b=t=>v.includes(t),p=t=>"unit_of_measurement"in t||"state_class"in t,k=(t,e)=>null!=t.attributes.device_class&&e.includes(t.attributes.device_class),w=" ",H=(t,e,i,s,n=!1)=>{const r={},a=[];if(!e)return{line:[],timeline:[]};Object.keys(e).forEach((c=>{var l;const u=e[c];if(0===u.length)return;const h=(0,o.M)(c),d=c in t.states?t.states[c]:void 0,_=d||b(h)?void 0:u.find((t=>t.a&&p(t.a)));let f;f=b(h)||null!=d&&p(d.attributes)||null!=d&&"sensor"===h&&k(d,s)||null!=_?(null==d?void 0:d.attributes.unit_of_measurement)||(null==_?void 0:_.a.unit_of_measurement)||w:{zone:i("ui.dialogs.more_info_control.zone.graph_unit"),climate:t.config.unit_system.temperature,humidifier:"%",water_heater:t.config.unit_system.temperature}[h];const m=null===(l=(null==d?void 0:d.attributes)||(null==_?void 0:_.a))||void 0===l?void 0:l.device_class,y=E(f,m,n);f?y&&y in r&&c in r[y]?r[y][c].push(...u):y&&(y in r||(r[y]={}),r[y][c]=u):a.push(g(i,t.locale,t.config,t.entities,c,u,d))}));return{line:Object.keys(r).map((e=>{const i=e.split("_"),s=i[0],o=i[1]||void 0;return y(s,o,r[e],t.states)})),timeline:a}},E=(t,e,i)=>i?`${t}_${e||""}`:t;s()}catch(t){s(t)}}))},60076:(t,e,i)=>{i.a(t,(async(t,s)=>{try{i.r(e),i.d(e,{DEFAULT_HOURS_TO_SHOW:()=>E,DEFAULT_ZOOM:()=>M});var o=i(17463),n=i(34541),r=i(47838),a=i(53970),c=i(68144),l=i(79932),u=i(14516),h=i(55070),d=i(7323),_=i(44583),f=i(49684),m=i(58831),g=i(36639),y=i(73589),v=(i(22098),i(9381),i(10983),i(13786),i(58763)),b=i(53658),p=i(15688),k=i(90271),w=t([_,f,v]);[_,f,v]=w.then?(await w)():w;const H="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,19H15V21H19A2,2 0 0,0 21,19V15H19M19,3H15V5H19V9H21V5A2,2 0 0,0 19,3M5,5H9V3H5A2,2 0 0,0 3,5V9H5M5,15H3V19A2,2 0 0,0 5,21H9V19H5V15Z",E=0,M=14;(0,o.Z)([(0,l.Mo)("hui-map-card")],(function(t,e){class s extends e{constructor(...e){super(...e),t(this)}}return{F:s,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.Cb)({type:Boolean,reflect:!0})],key:"isPanel",value:()=>!1},{kind:"field",decorators:[(0,l.SB)()],key:"_stateHistory",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,l.IO)("ha-map")],key:"_map",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_mapEntities",value:()=>[]},{kind:"field",key:"_colorDict",value:()=>({})},{kind:"field",key:"_colorIndex",value:()=>0},{kind:"field",decorators:[(0,l.SB)()],key:"_error",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"setConfig",value:function(t){var e;if(!t)throw new Error("Error in card configuration.");if(!(null!==(e=t.entities)&&void 0!==e&&e.length||t.geo_location_sources))throw new Error("Either entities or geo_location_sources must be specified");if(t.entities&&!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(t.geo_location_sources&&!Array.isArray(t.geo_location_sources))throw new Error("Parameter geo_location_sources needs to be an array");this._config=t,this._configEntities=t.entities?(0,k.A)(t.entities):[],this._mapEntities=this._getMapEntities()}},{kind:"method",key:"getCardSize",value:function(){var t;if(null===(t=this._config)||void 0===t||!t.aspect_ratio)return 7;const e=(0,y.Z)(this._config.aspect_ratio),i=e&&e.w>0&&e.h>0?`${(100*e.h/e.w).toFixed(2)}`:"100";return 1+Math.floor(Number(i)/25)||3}},{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(42850),i.e(78133),i.e(50731),i.e(68331),i.e(40163),i.e(74535),i.e(50373)]).then(i.bind(i,51821)),document.createElement("hui-map-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){return{type:"map",entities:(0,p.j)(t,2,e,i,["device_tracker"])}}},{kind:"method",key:"render",value:function(){var t;return this._config?this._error?c.dy`<ha-alert alert-type="error"> ${this.hass.localize("ui.components.map.error")}: ${this._error.message} (${this._error.code}) </ha-alert>`:c.dy` <ha-card id="card" .header="${this._config.title}"> <div id="root"> <ha-map .hass="${this.hass}" .entities="${this._mapEntities}" .zoom="${null!==(t=this._config.default_zoom)&&void 0!==t?t:M}" .paths="${this._getHistoryPaths(this._config,this._stateHistory)}" .autoFit="${this._config.auto_fit||!1}" .fitZones="${this._config.fit_zones}" .darkMode="${this._config.dark_mode}" interactiveZones renderPassive></ha-map> <ha-icon-button .label="${this.hass.localize("ui.panel.lovelace.cards.map.reset_focus")}" .path="${H}" @click="${this._fitMap}" tabindex="0"></ha-icon-button> </div> </ha-card> `:c.Ld}},{kind:"method",key:"shouldUpdate",value:function(t){var e,i;if(!t.has("hass")||t.size>1)return!0;const s=t.get("hass");return!s||!this._configEntities||(s.themes.darkMode!==this.hass.themes.darkMode||(!!t.has("_stateHistory")||(!(null===(e=this._config)||void 0===e||!e.geo_location_sources||s.states===this.hass.states)||(null!==(i=this._config)&&void 0!==i&&i.entities?(0,b.Wh)(this,t):(0,b.SN)(this,t)))))}},{kind:"method",key:"willUpdate",value:function(t){var e,i;(0,n.Z)((0,r.Z)(s.prototype),"willUpdate",this).call(this,t),t.has("hass")&&null!==(e=this._config)&&void 0!==e&&e.geo_location_sources&&!(0,g.v)(this._getSourceEntities(null===(i=t.get("hass"))||void 0===i?void 0:i.states),this._getSourceEntities(this.hass.states))&&(this._mapEntities=this._getMapEntities())}},{kind:"method",key:"connectedCallback",value:function(){var t;(0,n.Z)((0,r.Z)(s.prototype),"connectedCallback",this).call(this),this.hasUpdated&&null!==(t=this._configEntities)&&void 0!==t&&t.length&&this._subscribeHistory()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,r.Z)(s.prototype),"disconnectedCallback",this).call(this),this._unsubscribeHistory()}},{kind:"method",key:"_subscribeHistory",value:function(){var t,e,i;(0,d.p)(this.hass,"history")&&!this._subscribed&&(null!==(t=null===(e=this._config)||void 0===e?void 0:e.hours_to_show)&&void 0!==t?t:E)&&(this._subscribed=(0,v.xS)(this.hass,(t=>{this._subscribed&&(this._stateHistory=t)}),null!==(i=this._config.hours_to_show)&&void 0!==i?i:E,(this._configEntities||[]).map((t=>t.entity)),!1,!1,!1).catch((t=>{this._subscribed=void 0,this._error=t})))}},{kind:"method",key:"_unsubscribeHistory",value:function(){this._subscribed&&(this._subscribed.then((t=>null==t?void 0:t())),this._subscribed=void 0)}},{kind:"method",key:"updated",value:function(t){var e;null!==(e=this._configEntities)&&void 0!==e&&e.length?this._subscribed&&!t.has("_config")||(this._unsubscribeHistory(),this._subscribeHistory()):this._unsubscribeHistory(),t.has("_config")&&this._computePadding()}},{kind:"method",key:"_computePadding",value:function(){const t=this.shadowRoot.getElementById("root");if(!this._config||this.isPanel||!t)return;if(!this._config.aspect_ratio)return void(t.style.paddingBottom="100%");t.style.height="auto";const e=(0,y.Z)(this._config.aspect_ratio);t.style.paddingBottom=e&&e.w>0&&e.h>0?`${(100*e.h/e.w).toFixed(2)}%`:t.style.paddingBottom="100%"}},{kind:"method",key:"_fitMap",value:function(){var t;null===(t=this._map)||void 0===t||t.fitMap()}},{kind:"method",key:"_getColor",value:function(t){let e=this._colorDict[t];return e||(e=(0,h.Eu)(this._colorIndex),this._colorIndex++,this._colorDict[t]=e,e)}},{kind:"method",key:"_getSourceEntities",value:function(t){var e;if(!t||null===(e=this._config)||void 0===e||!e.geo_location_sources)return[];const i=[],s=this._config.geo_location_sources.includes("all");for(const e of Object.values(t))"geo_location"===(0,m.M)(e.entity_id)&&(s||this._config.geo_location_sources.includes(e.attributes.source))&&i.push(e.entity_id);return i}},{kind:"method",key:"_getMapEntities",value:function(){var t;return[...(this._configEntities||[]).map((t=>({entity_id:t.entity,color:this._getColor(t.entity),label_mode:t.label_mode,focus:t.focus,name:t.name}))),...this._getSourceEntities(null===(t=this.hass)||void 0===t?void 0:t.states).map((t=>({entity_id:t,color:this._getColor(t)})))]}},{kind:"field",key:"_getHistoryPaths",value(){return(0,u.Z)(((t,e)=>{var i;if(!e||!(null!==(i=t.hours_to_show)&&void 0!==i?i:E))return;const s=[];for(const i of Object.keys(e)){if("zone"===(0,m.M)(i))continue;const n=e[i];if(null==n||!n.length)continue;const r=[];for(const e of n){var o;const i=e.a.latitude,s=e.a.longitude;if(!i||!s)continue;const n={};n.point=[i,s];const c=new Date(1e3*e.lu);(null!==(o=t.hours_to_show)&&void 0!==o?o:E)>144?n.tooltip=(0,_.o0)(c,this.hass.locale,this.hass.config):(0,a.Z)(c)?n.tooltip=(0,f.Vu)(c,this.hass.locale,this.hass.config):n.tooltip=(0,f.xO)(c,this.hass.locale,this.hass.config),r.push(n)}s.push({points:r,color:this._getColor(i),gradualOpacity:.8})}return s}))}},{kind:"get",static:!0,key:"styles",value:function(){return c.iv`ha-card{overflow:hidden;width:100%;height:100%;display:flex;flex-direction:column}ha-map{z-index:0;border:none;position:absolute;top:0;left:0;width:100%;height:100%;background:inherit}ha-icon-button{position:absolute;top:75px;left:3px;outline:0}#root{position:relative;height:100%}`}}]}}),c.oi);s()}catch(t){s(t)}}))}};
//# sourceMappingURL=60076.ZctItVCsnbY.js.map