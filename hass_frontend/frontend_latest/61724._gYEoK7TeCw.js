export const id=61724;export const ids=[61724,43283,60609];export const modules={72043:(e,t,i)=>{i.d(t,{A:()=>r,v:()=>l});var s=i(23158),n=i(25101),o=i(66477);const a=(e,t,i,o)=>{const a=i((0,s.Z)(e,t),o);return a instanceof Date?(0,n.Z)(a,t):a},r=(e,t,i,s,n)=>i.time_zone===o.c_.server?a(e,s.time_zone,t,n):t(e,n),l=(e,t,i,s,n)=>i.time_zone===o.c_.server?a(e,s.time_zone,t,n):t(e,n)},92306:(e,t,i)=>{i.d(t,{v:()=>s});const s=(e,t)=>{const i={};for(const s of e){const e=t(s);e in i?i[e].push(s):i[e]=[s]}return i}},49915:(e,t,i)=>{var s=i(17463),n=i(34541),o=i(47838),a=i(68144),r=i(79932),l=i(47501),c=i(18457),u=i(68307),d=i(96151),h=i(88027);const f=(e,t,i)=>180*(0,h.Ff)((0,h.Fv)(e,t,i),t,i)/100;(0,s.Z)([(0,r.Mo)("ha-gauge")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"min",value:()=>0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"max",value:()=>100},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"value",value:()=>0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"formatOptions",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:String})],key:"valueText",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"locale",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Boolean})],key:"needle",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"levels",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:()=>""},{kind:"field",decorators:[(0,r.SB)()],key:"_angle",value:()=>0},{kind:"field",decorators:[(0,r.SB)()],key:"_updated",value:()=>!1},{kind:"field",decorators:[(0,r.SB)()],key:"_segment_label",value:()=>""},{kind:"method",key:"firstUpdated",value:function(e){(0,n.Z)((0,o.Z)(i.prototype),"firstUpdated",this).call(this,e),(0,d.T)((()=>{this._updated=!0,this._angle=f(this.value,this.min,this.max),this._segment_label=this.getSegmentLabel(),this._rescale_svg()}))}},{kind:"method",key:"updated",value:function(e){(0,n.Z)((0,o.Z)(i.prototype),"updated",this).call(this,e),this._updated&&(e.has("value")||e.has("label")||e.has("_segment_label"))&&(this._angle=f(this.value,this.min,this.max),this._segment_label=this.getSegmentLabel(),this._rescale_svg())}},{kind:"method",key:"render",value:function(){return a.YP` <svg viewBox="-50 -50 100 50" class="gauge"> ${this.needle&&this.levels?"":a.YP`<path class="dial" d="M -40 0 A 40 40 0 0 1 40 0"></path>`} ${this.levels?this.levels.sort(((e,t)=>e.level-t.level)).map(((e,t)=>{let i;if(0===t&&e.level!==this.min){const e=f(this.min,this.min,this.max);i=a.YP`<path stroke="var(--info-color)" class="level" d="M
                          ${0-40*Math.cos(e*Math.PI/180)}
                          ${0-40*Math.sin(e*Math.PI/180)}
                         A 40 40 0 0 1 40 0
                        "></path>`}const s=f(e.level,this.min,this.max);return a.YP`${i}<path stroke="${e.stroke}" class="level" d="M
                        ${0-40*Math.cos(s*Math.PI/180)}
                        ${0-40*Math.sin(s*Math.PI/180)}
                       A 40 40 0 0 1 40 0
                      "></path>`})):""} ${this.needle?a.YP`<path class="needle" d="M -25 -2.5 L -47.5 0 L -25 2.5 z" style="${(0,l.V)({transform:`rotate(${this._angle}deg)`})}"> </path>`:a.YP`<path class="value" d="M -40 0 A 40 40 0 1 0 40 0" style="${(0,l.V)({transform:`rotate(${this._angle}deg)`})}"></path>`}  </svg> <svg class="text"> <text class="value-text"> ${this._segment_label?this._segment_label:this.valueText||(0,c.uf)(this.value,this.locale,this.formatOptions)}${this._segment_label?"":"%"===this.label?(0,u.K)(this.locale)+"%":` ${this.label}`} </text> </svg>`}},{kind:"method",key:"_rescale_svg",value:function(){const e=this.shadowRoot.querySelector(".text"),t=e.querySelector("text").getBBox();e.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`)}},{kind:"method",key:"getSegmentLabel",value:function(){if(this.levels){this.levels.sort(((e,t)=>e.level-t.level));for(let e=this.levels.length-1;e>=0;e--)if(this.value>=this.levels[e].level)return this.levels[e].label}return""}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`:host{position:relative}.dial{fill:none;stroke:var(--primary-background-color);stroke-width:15}.value{fill:none;stroke-width:15;stroke:var(--gauge-color);transition:all 1s ease 0s}.needle{fill:var(--primary-text-color);transition:all 1s ease 0s}.level{fill:none;stroke-width:15}.gauge{display:block}.text{position:absolute;max-height:40%;max-width:55%;left:50%;bottom:-6%;transform:translate(-50%,0%)}.value-text{font-size:50px;fill:var(--primary-text-color);text-anchor:middle;direction:ltr}`}}]}}),a.oi)},81582:(e,t,i)=>{i.d(t,{DJ:()=>o,LZ:()=>s,Nn:()=>u,Ny:()=>d,Pk:()=>f,Q4:()=>n,RQ:()=>r,SO:()=>l,T0:()=>h,iJ:()=>c,pB:()=>a});const s=32143==i.j?["migration_error","setup_error","setup_retry"]:null,n=32143==i.j?["not_loaded","loaded","setup_error","setup_retry"]:null,o=(e,t,i)=>{const s={type:"config_entries/subscribe"};return i&&i.type&&(s.type_filter=i.type),e.connection.subscribeMessage((e=>t(e)),s)},a=(e,t)=>{const i={};return t&&(t.type&&(i.type_filter=t.type),t.domain&&(i.domain=t.domain)),e.callWS({type:"config_entries/get",...i})},r=(e,t)=>e.callWS({type:"config_entries/get_single",entry_id:t}),l=(e,t,i)=>e.callWS({type:"config_entries/update",entry_id:t,...i}),c=(e,t)=>e.callApi("DELETE",`config/config_entries/entry/${t}`),u=(e,t)=>e.callApi("POST",`config/config_entries/entry/${t}/reload`),d=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:"user"}),h=(e,t)=>e.callWS({type:"config_entries/disable",entry_id:t,disabled_by:null}),f=(e,t)=>{const i=[...e],s=e=>{const i=t[e.domain];return"helper"===(null==i?void 0:i.integration_type)?-1:1};return i.sort(((e,t)=>s(t)-s(e)))}},55424:(e,t,i)=>{i.a(e,(async(e,s)=>{try{i.d(t,{Bm:()=>x,Cj:()=>M,G9:()=>F,Jj:()=>B,KU:()=>C,P:()=>Z,UB:()=>W,ZC:()=>A,_Z:()=>N,b:()=>I,gy:()=>P,iK:()=>S,jB:()=>j,kJ:()=>U,o1:()=>w,rl:()=>$,vE:()=>O,xZ:()=>T,yH:()=>L});var n=i(24112),o=i(74774),a=i(63390),r=i(32182),l=i(38588),c=i(79021),u=i(39244),d=i(59429),h=i(93752),f=i(59699),_=i(97330),g=i(72043),y=i(49684),m=i(92306),p=i(81582),v=i(38014),k=e([y]);y=(k.then?(await k)():k)[0];const b=[],x=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),w=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),S=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),$=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),Z=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),C=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),M=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),T=e=>e.callWS({type:"energy/info"}),P=async e=>(await e.loadBackendTranslation("issues","energy"),e.callWS({type:"energy/validate"})),A=e=>e.callWS({type:"energy/get_prefs"}),N=async(e,t)=>{const i=e.callWS({type:"energy/save_prefs",...t});return E(e),i},z=async(e,t,i,s,n,o="hour")=>e.callWS({type:"energy/fossil_energy_consumption",start_time:t.toISOString(),end_time:null==n?void 0:n.toISOString(),energy_statistic_ids:i,co2_statistic_id:s,period:o}),B=e=>(0,m.v)(e.energy_sources,(e=>e.type)),L=(e,t,i)=>{const s=[];for(const n of e.energy_sources)if(!i||i.includes(n.type))if("solar"!==n.type)if("gas"!==n.type&&"water"!==n.type)if("battery"!==n.type){for(const e of n.flow_from){s.push(e.stat_energy_from),e.stat_cost&&s.push(e.stat_cost);const i=t.cost_sensors[e.stat_energy_from];i&&s.push(i)}for(const e of n.flow_to){s.push(e.stat_energy_to),e.stat_compensation&&s.push(e.stat_compensation);const i=t.cost_sensors[e.stat_energy_to];i&&s.push(i)}}else s.push(n.stat_energy_from),s.push(n.stat_energy_to);else{s.push(n.stat_energy_from),n.stat_cost&&s.push(n.stat_cost);const e=t.cost_sensors[n.stat_energy_from];e&&s.push(e)}else s.push(n.stat_energy_from);return s},D=async(e,t,i,s,d)=>{const[h,f]=await Promise.all([(0,p.pB)(e,{domain:"co2signal"}),T(e)]),_=h.length?h[0]:void 0;let y;if(_)for(const t of Object.values(e.entities)){if("co2signal"!==t.platform)continue;const i=e.states[t.entity_id];if(i&&"%"===i.attributes.unit_of_measurement){y=i.entity_id;break}}const m=[];for(const e of t.energy_sources)if("grid"===e.type)for(const t of e.flow_from)m.push(t.stat_energy_from);const k=L(t,f,["grid","solar","battery","gas"]),b=L(t,f,["water"]),x=[...k,...b],w=(0,n.Z)(s||new Date,i),S=w>35?"month":w>2?"day":"hour",$=e.config.unit_system.length||"",Z={energy:"kWh",volume:"km"===$?"m³":"ft³"},C={volume:"km"===$?"L":"gal"},M=k.length?(0,v.dL)(e,i,s,k,S,Z,["change"]):{},P=b.length?(0,v.dL)(e,i,s,b,S,C,["change"]):{};let A,N,B,D,E,q={},W={};d&&(N=(0,g.v)(i,o.Z,e.locale,e.config)&&(0,g.v)(s||new Date,a.Z,e.locale,e.config)?(0,g.A)(i,r.Z,e.locale,e.config,-(0,g.v)(s||new Date,l.Z,e.locale,e.config,i)-1):(0,g.A)(i,c.Z,e.locale,e.config,-1*(w+1)),B=(0,u.Z)(i,-1),k.length&&(q=(0,v.dL)(e,N,B,k,S,Z,["change"])),b.length&&(W=(0,v.dL)(e,N,B,b,S,C,["change"]))),void 0!==y&&(D=z(e,i,m,y,s,w>35?"month":w>2?"day":"hour"),d&&(E=z(e,N,m,y,B,w>35?"month":w>2?"day":"hour")));const j={},H=x.length?(0,v.Py)(e,x):[],[F,O,I,U,R,V,Y]=await Promise.all([M,P,q,W,H,D,E]),J={...F,...O};d&&(A={...I,...U}),x.length&&R.forEach((e=>{j[e.statistic_id]=e}));return{start:i,end:s,startCompare:N,endCompare:B,info:f,prefs:t,stats:J,statsMetadata:j,statsCompare:A,co2SignalConfigEntry:_,co2SignalEntity:y,fossilEnergyConsumption:V,fossilEnergyConsumptionCompare:Y}},E=e=>{b.forEach((t=>{const i=W(e,{key:t});i.clearPrefs(),i._active&&i.refresh()}))},q=e=>{if(e._refreshTimeout&&clearTimeout(e._refreshTimeout),e._active&&(!e.end||e.end>new Date)){const t=new Date;t.getMinutes()>=20&&t.setHours(t.getHours()+1),t.setMinutes(20,0,0),e._refreshTimeout=window.setTimeout((()=>e.refresh()),t.getTime()-Date.now())}},W=(e,t={})=>{let i="_energy";if(t.key){if(!t.key.startsWith("energy_"))throw new Error("Key need to start with energy_");i=`_${t.key}`}if(e.connection[i])return e.connection[i];b.push(t.key);const s=(0,_._)(e.connection,i,(async()=>(s.prefs||(s.prefs=await A(e)),q(s),D(e,s.prefs,s.start,s.end,s.compare)))),n=s.subscribe;s.subscribe=e=>{const t=n(e);return s._active++,void 0===s._refreshTimeout&&q(s),()=>{s._active--,s._active<1&&(clearTimeout(s._refreshTimeout),s._refreshTimeout=void 0),t()}},s._active=0,s.prefs=t.prefs;const o=new Date,a=(0,y.Zs)(o,e.locale,e.config).split(":")[0];s.start=(0,g.A)("0"===a?(0,c.Z)(o,-1):o,d.Z,e.locale,e.config),s.end=(0,g.A)("0"===a?(0,c.Z)(o,-1):o,h.Z,e.locale,e.config);const r=()=>{s._updatePeriodTimeout=window.setTimeout((()=>{s.start=(0,g.A)(new Date,d.Z,e.locale,e.config),s.end=(0,g.A)(new Date,h.Z,e.locale,e.config),r()}),(0,f.Z)((0,g.A)(o,h.Z,e.locale,e.config),1).getTime()-Date.now())};return r(),s.clearPrefs=()=>{s.prefs=void 0},s.setPeriod=(t,i)=>{var n;s.start=t,s.end=i,s.start.getTime()!==(0,g.A)(new Date,d.Z,e.locale,e.config).getTime()||(null===(n=s.end)||void 0===n?void 0:n.getTime())!==(0,g.A)(new Date,h.Z,e.locale,e.config).getTime()||s._updatePeriodTimeout?s._updatePeriodTimeout&&(clearTimeout(s._updatePeriodTimeout),s._updatePeriodTimeout=void 0):r()},s.setCompare=e=>{s.compare=e},s},j=e=>e.callWS({type:"energy/solar_forecast"}),H=["volume","energy"],F=(e,t={},i)=>{for(const s of e.energy_sources){if("gas"!==s.type)continue;if(i&&i===s.stat_energy_from)continue;const e=t[s.stat_energy_from];if(H.includes(null==e?void 0:e.unit_class))return e.unit_class}},O=(e,t,i={})=>{const s=F(t,i);if(void 0!==s)return"energy"===s?"kWh":"km"===e.config.unit_system.length?"m³":"ft³"},I=e=>"km"===e.config.unit_system.length?"L":"gal",U="/docs/energy/faq/#troubleshooting-missing-entities";s()}catch(e){s(e)}}))},73826:(e,t,i)=>{i.d(t,{f:()=>r});var s=i(17463),n=i(34541),o=i(47838),a=i(79932);const r=e=>(0,s.Z)(null,(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)((0,o.Z)(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,n.Z)((0,o.Z)(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then((e=>e())):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,n.Z)((0,o.Z)(i.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const t of e.keys())if(this.hassSubscribeRequiredHostProps.includes(t))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((e=>void 0===this[e]))||(this.__unsubs=this.hassSubscribe())}}]}}),e)},61724:(e,t,i)=>{i.a(e,(async(e,s)=>{try{i.r(t);var n=i(17463),o=(i(33829),i(68144)),a=i(79932),r=i(47501),l=(i(22098),i(49915),i(52039),i(55424)),c=i(38014),u=i(73826),d=i(43283),h=i(53658),f=e([l]);l=(f.then?(await f)():f)[0];const _="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",g={maximumFractionDigits:0};(0,n.Z)([(0,a.Mo)("hui-energy-self-sufficiency-gauge-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,a.SB)()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,l.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,h.SN)(this,e)||e.size>1||!e.has("hass")}},{kind:"method",key:"render",value:function(){var e;if(!this._config||!this.hass)return o.Ld;if(!this._data)return o.dy`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;const t=this._data.prefs,i=(0,l.Jj)(t),s=void 0!==i.solar,n=void 0!==i.battery,a=i.grid[0].flow_to.length>0,u=null!==(e=(0,c.q6)(this._data.stats,i.grid[0].flow_from.map((e=>e.stat_energy_from))))&&void 0!==e?e:0;let d=null;s&&(d=(0,c.q6)(this._data.stats,i.solar.map((e=>e.stat_energy_from)))||0);let h=null,f=null;n&&(h=(0,c.q6)(this._data.stats,i.battery.map((e=>e.stat_energy_to)))||0,f=(0,c.q6)(this._data.stats,i.battery.map((e=>e.stat_energy_from)))||0);let y=null;a&&(y=(0,c.q6)(this._data.stats,i.grid[0].flow_to.map((e=>e.stat_energy_to)))||0);let m=null;s&&(m=(d||0)-(y||0)-(h||0));let p=null,v=null;null!==m&&m<0&&(n&&(p=-1*m,p>u&&(v=Math.min(0,p-u),p=u)),m=0);let k=null;n&&(k=(f||0)-(v||0));const b=Math.max(0,u-(p||0)),x=Math.max(0,b+(m||0)+(k||0));let w;return null!==u&&null!==x&&x>0&&(w=100*(1-u/x)),o.dy` <ha-card> ${void 0!==w?o.dy` <ha-svg-icon id="info" .path="${_}"></ha-svg-icon> <simple-tooltip animation-delay="0" for="info" position="left"> <span> ${this.hass.localize("ui.panel.lovelace.cards.energy.self_sufficiency_gauge.card_indicates_self_sufficiency_quota")} </span> </simple-tooltip> <ha-gauge min="0" max="100" .value="${w}" label="%" .formatOptions="${g}" .locale="${this.hass.locale}" style="${(0,r.V)({"--gauge-color":this._computeSeverity(w)})}"></ha-gauge> <div class="name"> ${this.hass.localize("ui.panel.lovelace.cards.energy.self_sufficiency_gauge.self_sufficiency_quota")} </div> `:this.hass.localize("ui.panel.lovelace.cards.energy.self_sufficiency_gauge.self_sufficiency_could_not_calc")} </ha-card> `}},{kind:"method",key:"_computeSeverity",value:function(e){return e>75?d.severityMap.green:e<50?d.severityMap.yellow:d.severityMap.normal}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`ha-card{height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-gauge{width:100%;max-width:250px;direction:ltr}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}ha-svg-icon{position:absolute;right:4px;top:4px;color:var(--secondary-text-color)}simple-tooltip>span{font-size:12px;line-height:12px}simple-tooltip{width:80%;max-width:250px;top:8px!important}`}}]}}),(0,u.f)(o.oi));s()}catch(e){s(e)}}))},43283:(e,t,i)=>{i.r(t),i.d(t,{DEFAULT_MAX:()=>v,DEFAULT_MIN:()=>p,severityMap:()=>k});var s=i(17463),n=i(34541),o=i(47838),a=i(68144),r=i(79932),l=i(47501),c=i(62877),u=i(47181),d=i(91741),h=i(84627),f=i(18457),_=(i(22098),i(49915),i(56007)),g=i(15688),y=i(53658),m=i(75502);const p=0,v=100,k={red:"var(--error-color)",green:"var(--success-color)",yellow:"var(--warning-color)",normal:"var(--info-color)"};(0,s.Z)([(0,r.Mo)("hui-gauge-card")],(function(e,t){class s extends t{constructor(...t){super(...t),e(this)}}return{F:s,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(68331),i.e(22115)]).then(i.bind(i,97345)),document.createElement("hui-gauge-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,i){return{type:"gauge",entity:(0,g.j)(e,1,t,i,["counter","input_number","number","sensor"],(e=>!isNaN(Number(e.state))))[0]||""}}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){if(!e.entity)throw new Error("Entity must be specified");if(!(0,h.T)(e.entity))throw new Error("Invalid entity");this._config={min:p,max:v,...e}}},{kind:"method",key:"render",value:function(){var e,t;if(!this._config||!this.hass)return a.Ld;const i=this.hass.states[this._config.entity];if(!i)return a.dy` <hui-warning> ${(0,m.i)(this.hass,this._config.entity)} </hui-warning> `;const s=Number(i.state);if(i.state===_.nZ)return a.dy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_unavailable",{entity:this._config.entity})}</hui-warning> `;if(isNaN(s))return a.dy` <hui-warning>${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric",{entity:this._config.entity})}</hui-warning> `;const n=null!==(e=this._config.name)&&void 0!==e?e:(0,d.C)(i);return a.dy` <ha-card @click="${this._handleClick}" tabindex="0"> <ha-gauge .min="${this._config.min}" .max="${this._config.max}" .value="${i.state}" .formatOptions="${(0,f.l4)(i,this.hass.entities[i.entity_id])}" .locale="${this.hass.locale}" .label="${this._config.unit||(null===(t=this.hass)||void 0===t?void 0:t.states[this._config.entity].attributes.unit_of_measurement)||""}" style="${(0,l.V)({"--gauge-color":this._computeSeverity(s)})}" .needle="${this._config.needle}" .levels="${this._config.needle?this._severityLevels():void 0}"></ha-gauge> <div class="name" .title="${n}">${n}</div> </ha-card> `}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,y.G2)(this,e)}},{kind:"method",key:"updated",value:function(e){if((0,n.Z)((0,o.Z)(s.prototype),"updated",this).call(this,e),!this._config||!this.hass)return;const t=e.get("hass"),i=e.get("_config");t&&i&&t.themes===this.hass.themes&&i.theme===this._config.theme||(0,c.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"_computeSeverity",value:function(e){if(this._config.needle)return;let t=this._config.segments;if(t){t=[...t].sort(((e,t)=>e.from-t.from));for(let s=0;s<t.length;s++){var i;const n=t[s];if(n&&e>=n.from&&(s+1===t.length||e<(null===(i=t[s+1])||void 0===i?void 0:i.from)))return n.color}return k.normal}const s=this._config.severity;if(!s)return k.normal;const n=Object.keys(s).map((e=>[e,s[e]]));for(const e of n)if(null==k[e[0]]||isNaN(e[1]))return k.normal;return n.sort(((e,t)=>e[1]-t[1])),e>=n[0][1]&&e<n[1][1]?k[n[0][0]]:e>=n[1][1]&&e<n[2][1]?k[n[1][0]]:e>=n[2][1]?k[n[2][0]]:k.normal}},{kind:"method",key:"_severityLevels",value:function(){const e=this._config.segments;if(e)return e.map((e=>({level:null==e?void 0:e.from,stroke:null==e?void 0:e.color,label:null==e?void 0:e.label})));const t=this._config.severity;if(!t)return[{level:0,stroke:k.normal}];return Object.keys(t).map((e=>({level:t[e],stroke:k[e]})))}},{kind:"method",key:"_handleClick",value:function(){(0,u.B)(this,"hass-more-info",{entityId:this._config.entity})}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`ha-card{cursor:pointer;height:100%;overflow:hidden;padding:16px;display:flex;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}ha-card:focus{outline:0}ha-gauge{width:100%;max-width:250px}.name{text-align:center;line-height:initial;color:var(--primary-text-color);width:100%;font-size:15px;margin-top:8px}`}}]}}),a.oi)},88027:(e,t,i)=>{i.d(t,{Ff:()=>n,Fv:()=>s,IU:()=>o});const s=(e,t,i)=>isNaN(e)||isNaN(t)||isNaN(i)?0:e>i?i:e<t?t:e,n=(e,t,i)=>100*(e-t)/(i-t),o=e=>Math.round(10*e)/10}};
//# sourceMappingURL=61724._gYEoK7TeCw.js.map