export const id=47420;export const ids=[47420,60609];export const modules={53725:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},t.exports=e.default},20508:(t,e,i)=>{var a=i(28847).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,s.default)({},t)};var s=a(i(53725));t.exports=e.default},59699:(t,e,i)=>{i.d(e,{Z:()=>r});var a=i(90394),s=i(39244),n=i(23682),o=36e5;function r(t,e){(0,n.Z)(2,arguments);var i=(0,a.Z)(e);return(0,s.Z)(t,i*o)}},39244:(t,e,i)=>{i.d(e,{Z:()=>o});var a=i(90394),s=i(34327),n=i(23682);function o(t,e){(0,n.Z)(2,arguments);var i=(0,s.Z)(t).getTime(),o=(0,a.Z)(e);return new Date(i+o)}},57879:(t,e,i)=>{i.d(e,{Z:()=>n});var a=i(34327),s=i(23682);function n(t,e){(0,s.Z)(2,arguments);var i=(0,a.Z)(t),n=(0,a.Z)(e),o=i.getTime()-n.getTime();return o<0?-1:o>0?1:o}},38588:(t,e,i)=>{i.d(e,{Z:()=>r});var a=i(34327),s=i(23682);var n=i(57879),o=i(63390);function r(t,e){(0,s.Z)(2,arguments);var i,r=(0,a.Z)(t),l=(0,a.Z)(e),d=(0,n.Z)(r,l),c=Math.abs(function(t,e){(0,s.Z)(2,arguments);var i=(0,a.Z)(t),n=(0,a.Z)(e);return 12*(i.getFullYear()-n.getFullYear())+(i.getMonth()-n.getMonth())}(r,l));if(c<1)i=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-d*c);var h=(0,n.Z)(r,l)===-d;(0,o.Z)((0,a.Z)(t))&&1===c&&1===(0,n.Z)(t,l)&&(h=!1),i=d*(c-Number(h))}return 0===i?0:i}},74774:(t,e,i)=>{i.d(e,{Z:()=>n});var a=i(34327),s=i(23682);function n(t){return(0,s.Z)(1,arguments),1===(0,a.Z)(t).getDate()}},63390:(t,e,i)=>{i.d(e,{Z:()=>r});var a=i(34327),s=i(93752),n=i(1905),o=i(23682);function r(t){(0,o.Z)(1,arguments);var e=(0,a.Z)(t);return(0,s.Z)(e).getTime()===(0,n.Z)(e).getTime()}},72043:(t,e,i)=>{i.d(e,{A:()=>r,v:()=>l});var a=i(23158),s=i(25101),n=i(66477);const o=(t,e,i,n)=>{const o=i((0,a.Z)(t,e),n);return o instanceof Date?(0,s.Z)(o,e):o},r=(t,e,i,a,s)=>i.time_zone===n.c_.server?o(t,a.time_zone,e,s):e(t,s),l=(t,e,i,a,s)=>i.time_zone===n.c_.server?o(t,a.time_zone,e,s):e(t,s)},92306:(t,e,i)=>{i.d(e,{v:()=>a});const a=(t,e)=>{const i={};for(const a of t){const t=e(a);t in i?i[t].push(a):i[t]=[a]}return i}},62336:(t,e,i)=>{i.d(e,{Q:()=>p});var a=i(17463),s=i(34541),n=i(47838),o=i(68144),r=i(79932),l=i(83448),d=i(47501),c=i(50239),h=i(87744),u=i(38346);const p=3e5;(0,a.Z)([(0,r.Mo)("ha-chart-base")],(function(t,e){class a extends e{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:"chart-type",reflect:!0})],key:"chartType",value:()=>"line"},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"data",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"options",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"plugins",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[(0,r.Cb)({type:Number})],key:"paddingYAxis",value:()=>0},{kind:"field",decorators:[(0,r.SB)()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_tooltip",value:void 0},{kind:"field",decorators:[(0,r.SB)()],key:"_hiddenDatasets",value:()=>new Set},{kind:"field",key:"_paddingUpdateCount",value:()=>0},{kind:"field",key:"_paddingUpdateLock",value:()=>!1},{kind:"field",key:"_paddingYAxisInternal",value:()=>0},{kind:"method",key:"disconnectedCallback",value:function(){(0,s.Z)((0,n.Z)(a.prototype),"disconnectedCallback",this).call(this),this._releaseCanvas()}},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)((0,n.Z)(a.prototype),"connectedCallback",this).call(this),this.hasUpdated&&(this._releaseCanvas(),this._setupChart())}},{kind:"field",key:"updateChart",value(){return t=>{var e;null===(e=this.chart)||void 0===e||e.update(t)}}},{kind:"field",key:"resize",value(){return t=>{var e,i,a,s;if(null!=t&&t.aspectRatio&&!t.height)t.height=Math.round((null!==(s=t.width)&&void 0!==s?s:this.clientWidth)/t.aspectRatio);else if(null!=t&&t.aspectRatio&&!t.width){var n;t.width=Math.round((null!==(n=t.height)&&void 0!==n?n:this.clientHeight)*t.aspectRatio)}null===(e=this.chart)||void 0===e||e.resize(null!==(i=null==t?void 0:t.width)&&void 0!==i?i:this.clientWidth,null!==(a=null==t?void 0:t.height)&&void 0!==a?a:this.clientHeight)}}},{kind:"method",key:"firstUpdated",value:function(){this._setupChart(),this.data.datasets.forEach(((t,e)=>{t.hidden&&this._hiddenDatasets.add(e)}))}},{kind:"method",key:"shouldUpdate",value:function(t){return!this._paddingUpdateLock||1!==t.size||!t.has("paddingYAxis")}},{kind:"field",key:"_debouncedClearUpdates",value(){return(0,u.D)((()=>{this._paddingUpdateCount=0}),2e3,!1)}},{kind:"method",key:"willUpdate",value:function(t){if((0,s.Z)((0,n.Z)(a.prototype),"willUpdate",this).call(this,t),this._paddingUpdateLock||(this._paddingYAxisInternal=this.paddingYAxis,1===t.size&&t.has("paddingYAxis")&&(this._paddingUpdateCount++,this._paddingUpdateCount>300?(this._paddingUpdateLock=!0,console.error("Detected excessive chart padding updates, possibly an infinite loop. Disabling axis padding.")):this._debouncedClearUpdates())),this.hasUpdated&&this.chart){if(t.has("plugins")||t.has("chartType"))return this._releaseCanvas(),void this._setupChart();t.has("data")&&(this._hiddenDatasets.size&&this.data.datasets.forEach(((t,e)=>{t.hidden=this._hiddenDatasets.has(e)})),this.chart.data=this.data),t.has("options")&&(this.chart.options=this._createOptions()),this.chart.update("none")}}},{kind:"method",key:"render",value:function(){var t,e,i;return o.dy` ${!0===(null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t||null===(t=t.legend)||void 0===t?void 0:t.display)?o.dy`<div class="chartLegend"> <ul> ${this.data.datasets.map(((t,e)=>o.dy`<li .datasetIndex="${e}" @click="${this._legendClick}" class="${(0,l.$)({hidden:this._hiddenDatasets.has(e)})}" .title="${t.label}"> <div class="bullet" style="${(0,d.V)({backgroundColor:t.backgroundColor,borderColor:t.borderColor})}"></div> <div class="label">${t.label}</div> </li>`))} </ul> </div>`:""} <div class="animationContainer" style="${(0,d.V)({height:`${this.height||this._chartHeight||0}px`,overflow:this._chartHeight?"initial":"hidden"})}"> <div class="chartContainer" style="${(0,d.V)({height:`${null!==(e=null!==(i=this.height)&&void 0!==i?i:this._chartHeight)&&void 0!==e?e:this.clientWidth/2}px`,"padding-left":`${(0,h.HE)(this.hass)?0:this._paddingYAxisInternal}px`,"padding-right":`${(0,h.HE)(this.hass)?this._paddingYAxisInternal:0}px`})}"> <canvas></canvas> ${this._tooltip?o.dy`<div class="chartTooltip ${(0,l.$)({[this._tooltip.yAlign]:!0})}" style="${(0,d.V)({top:this._tooltip.top,left:this._tooltip.left})}"> <div class="title">${this._tooltip.title}</div> ${this._tooltip.beforeBody?o.dy`<div class="beforeBody"> ${this._tooltip.beforeBody} </div>`:""} <div> <ul> ${this._tooltip.body.map(((t,e)=>o.dy`<li> <div class="bullet" style="${(0,d.V)({backgroundColor:this._tooltip.labelColors[e].backgroundColor,borderColor:this._tooltip.labelColors[e].borderColor})}"></div> ${t.lines.join("\n")} </li>`))} </ul> </div> ${this._tooltip.footer.length?o.dy`<div class="footer"> ${this._tooltip.footer.map((t=>o.dy`${t}<br>`))} </div>`:""} </div>`:""} </div> </div> `}},{kind:"method",key:"_setupChart",value:async function(){const t=this.renderRoot.querySelector("canvas").getContext("2d"),e=(await Promise.all([i.e(81866),i.e(69519),i.e(98357),i.e(55928)]).then(i.bind(i,55928))).Chart,a=getComputedStyle(this);e.defaults.borderColor=a.getPropertyValue("--divider-color"),e.defaults.color=a.getPropertyValue("--secondary-text-color"),e.defaults.font.family=a.getPropertyValue("--mdc-typography-body1-font-family")||a.getPropertyValue("--mdc-typography-font-family")||"Roboto, Noto, sans-serif",this.chart=new e(t,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()})}},{kind:"method",key:"_createOptions",value:function(){var t,e,i;return{maintainAspectRatio:!1,...this.options,plugins:{...null===(t=this.options)||void 0===t?void 0:t.plugins,tooltip:{...null===(e=this.options)||void 0===e||null===(e=e.plugins)||void 0===e?void 0:e.tooltip,enabled:!1,external:t=>this._handleTooltip(t)},legend:{...null===(i=this.options)||void 0===i||null===(i=i.plugins)||void 0===i?void 0:i.legend,display:!1}}}}},{kind:"method",key:"_createPlugins",value:function(){var t;return[...this.plugins||[],{id:"resizeHook",resize:t=>{var e;const i=t.height-(null!==(e=this._chartHeight)&&void 0!==e?e:0);(!this._chartHeight||i>12||i<-12)&&(this._chartHeight=t.height)},legend:{...null===(t=this.options)||void 0===t||null===(t=t.plugins)||void 0===t?void 0:t.legend,display:!1}}]}},{kind:"method",key:"_legendClick",value:function(t){if(!this.chart)return;const e=t.currentTarget.datasetIndex;this.chart.isDatasetVisible(e)?(this.chart.setDatasetVisibility(e,!1),this._hiddenDatasets.add(e)):(this.chart.setDatasetVisibility(e,!0),this._hiddenDatasets.delete(e)),this.chart.update("none"),this.requestUpdate("_hiddenDatasets")}},{kind:"method",key:"_handleTooltip",value:function(t){0!==t.tooltip.opacity?this._tooltip={...t.tooltip,top:this.chart.canvas.offsetTop+t.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+(0,c.u)(t.tooltip.caretX,100,this.clientWidth-100-this._paddingYAxisInternal)-100+"px"}:this._tooltip=void 0}},{kind:"method",key:"_releaseCanvas",value:function(){this.chart&&this.chart.destroy()}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:block;position:var(--chart-base-position,relative)}.animationContainer{overflow:hidden;height:0;transition:height .3s cubic-bezier(.4, 0, .2, 1)}canvas{max-height:var(--chart-max-height,400px)}.chartLegend{text-align:center}.chartLegend li{cursor:pointer;display:inline-grid;grid-auto-flow:column;padding:0 8px;box-sizing:border-box;align-items:center;color:var(--secondary-text-color)}.chartLegend .hidden{text-decoration:line-through}.chartLegend .label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chartLegend .bullet,.chartTooltip .bullet{border-width:1px;border-style:solid;border-radius:50%;display:inline-block;height:16px;margin-right:6px;width:16px;flex-shrink:0;box-sizing:border-box;margin-inline-end:6px;margin-inline-start:initial;direction:var(--direction)}.chartTooltip .bullet{align-self:baseline}:host([rtl]) .chartLegend .bullet,:host([rtl]) .chartTooltip .bullet{margin-right:inherit;margin-left:6px;margin-inline-end:inherit;margin-inline-start:6px;direction:var(--direction)}.chartTooltip{padding:8px;font-size:90%;position:absolute;background:rgba(80,80,80,.9);color:#fff;border-radius:4px;pointer-events:none;z-index:1000;width:200px;box-sizing:border-box}:host([rtl]) .chartTooltip{direction:rtl}.chartLegend ul,.chartTooltip ul{display:inline-block;padding:0 0px;margin:8px 0 0 0;width:100%}.chartTooltip ul{margin:0 4px}.chartTooltip li{display:flex;white-space:pre-line;word-break:break-word;align-items:center;line-height:16px;padding:4px 0}.chartTooltip .title{text-align:center;font-weight:500;word-break:break-word;direction:ltr}.chartTooltip .footer{font-weight:500}.chartTooltip .beforeBody{text-align:center;font-weight:300;word-break:break-all}`}}]}}),o.oi)},81582:(t,e,i)=>{i.d(e,{DJ:()=>n,LZ:()=>a,Nn:()=>c,Ny:()=>h,Pk:()=>p,Q4:()=>s,RQ:()=>r,SO:()=>l,T0:()=>u,iJ:()=>d,pB:()=>o});const a=32143==i.j?["migration_error","setup_error","setup_retry"]:null,s=32143==i.j?["not_loaded","loaded","setup_error","setup_retry"]:null,n=(t,e,i)=>{const a={type:"config_entries/subscribe"};return i&&i.type&&(a.type_filter=i.type),t.connection.subscribeMessage((t=>e(t)),a)},o=(t,e)=>{const i={};return e&&(e.type&&(i.type_filter=e.type),e.domain&&(i.domain=e.domain)),t.callWS({type:"config_entries/get",...i})},r=(t,e)=>t.callWS({type:"config_entries/get_single",entry_id:e}),l=(t,e,i)=>t.callWS({type:"config_entries/update",entry_id:e,...i}),d=(t,e)=>t.callApi("DELETE",`config/config_entries/entry/${e}`),c=(t,e)=>t.callApi("POST",`config/config_entries/entry/${e}/reload`),h=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:"user"}),u=(t,e)=>t.callWS({type:"config_entries/disable",entry_id:e,disabled_by:null}),p=(t,e)=>{const i=[...t],a=t=>{const i=e[t.domain];return"helper"===(null==i?void 0:i.integration_type)?-1:1};return i.sort(((t,e)=>a(e)-a(t)))}},55424:(t,e,i)=>{i.a(t,(async(t,a)=>{try{i.d(e,{Bm:()=>x,Cj:()=>S,G9:()=>Y,Jj:()=>H,KU:()=>D,P:()=>T,UB:()=>B,ZC:()=>U,_Z:()=>M,b:()=>V,gy:()=>P,iK:()=>Z,jB:()=>O,kJ:()=>F,o1:()=>C,rl:()=>w,vE:()=>j,xZ:()=>$,yH:()=>E});var s=i(24112),n=i(74774),o=i(63390),r=i(32182),l=i(38588),d=i(79021),c=i(39244),h=i(59429),u=i(93752),p=i(59699),g=i(97330),_=i(72043),f=i(49684),y=i(92306),v=i(81582),m=i(38014),b=t([f]);f=(b.then?(await b)():b)[0];const k=[],x=()=>({stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),C=()=>({stat_energy_to:"",stat_compensation:null,entity_energy_price:null,number_energy_price:null}),Z=()=>({type:"grid",flow_from:[],flow_to:[],cost_adjustment_day:0}),w=()=>({type:"solar",stat_energy_from:"",config_entry_solar_forecast:null}),T=()=>({type:"battery",stat_energy_from:"",stat_energy_to:""}),D=()=>({type:"gas",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),S=()=>({type:"water",stat_energy_from:"",stat_cost:null,entity_energy_price:null,number_energy_price:null}),$=t=>t.callWS({type:"energy/info"}),P=async t=>(await t.loadBackendTranslation("issues","energy"),t.callWS({type:"energy/validate"})),U=t=>t.callWS({type:"energy/get_prefs"}),M=async(t,e)=>{const i=t.callWS({type:"energy/save_prefs",...e});return z(t),i},A=async(t,e,i,a,s,n="hour")=>t.callWS({type:"energy/fossil_energy_consumption",start_time:e.toISOString(),end_time:null==s?void 0:s.toISOString(),energy_statistic_ids:i,co2_statistic_id:a,period:n}),H=t=>(0,y.v)(t.energy_sources,(t=>t.type)),E=(t,e,i)=>{const a=[];for(const s of t.energy_sources)if(!i||i.includes(s.type))if("solar"!==s.type)if("gas"!==s.type&&"water"!==s.type)if("battery"!==s.type){for(const t of s.flow_from){a.push(t.stat_energy_from),t.stat_cost&&a.push(t.stat_cost);const i=e.cost_sensors[t.stat_energy_from];i&&a.push(i)}for(const t of s.flow_to){a.push(t.stat_energy_to),t.stat_compensation&&a.push(t.stat_compensation);const i=e.cost_sensors[t.stat_energy_to];i&&a.push(i)}}else a.push(s.stat_energy_from),a.push(s.stat_energy_to);else{a.push(s.stat_energy_from),s.stat_cost&&a.push(s.stat_cost);const t=e.cost_sensors[s.stat_energy_from];t&&a.push(t)}else a.push(s.stat_energy_from);return a},L=async(t,e,i,a,h)=>{const[u,p]=await Promise.all([(0,v.pB)(t,{domain:"co2signal"}),$(t)]),g=u.length?u[0]:void 0;let f;if(g)for(const e of Object.values(t.entities)){if("co2signal"!==e.platform)continue;const i=t.states[e.entity_id];if(i&&"%"===i.attributes.unit_of_measurement){f=i.entity_id;break}}const y=[];for(const t of e.energy_sources)if("grid"===t.type)for(const e of t.flow_from)y.push(e.stat_energy_from);const b=E(e,p,["grid","solar","battery","gas"]),k=E(e,p,["water"]),x=[...b,...k],C=(0,s.Z)(a||new Date,i),Z=C>35?"month":C>2?"day":"hour",w=t.config.unit_system.length||"",T={energy:"kWh",volume:"km"===w?"m³":"ft³"},D={volume:"km"===w?"L":"gal"},S=b.length?(0,m.dL)(t,i,a,b,Z,T,["change"]):{},P=k.length?(0,m.dL)(t,i,a,k,Z,D,["change"]):{};let U,M,H,L,z,W={},B={};h&&(M=(0,_.v)(i,n.Z,t.locale,t.config)&&(0,_.v)(a||new Date,o.Z,t.locale,t.config)?(0,_.A)(i,r.Z,t.locale,t.config,-(0,_.v)(a||new Date,l.Z,t.locale,t.config,i)-1):(0,_.A)(i,d.Z,t.locale,t.config,-1*(C+1)),H=(0,c.Z)(i,-1),b.length&&(W=(0,m.dL)(t,M,H,b,Z,T,["change"])),k.length&&(B=(0,m.dL)(t,M,H,k,Z,D,["change"]))),void 0!==f&&(L=A(t,i,y,f,a,C>35?"month":C>2?"day":"hour"),h&&(z=A(t,M,y,f,H,C>35?"month":C>2?"day":"hour")));const O={},R=x.length?(0,m.Py)(t,x):[],[Y,j,V,F,I,q,K]=await Promise.all([S,P,W,B,R,L,z]),N={...Y,...j};h&&(U={...V,...F}),x.length&&I.forEach((t=>{O[t.statistic_id]=t}));return{start:i,end:a,startCompare:M,endCompare:H,info:p,prefs:e,stats:N,statsMetadata:O,statsCompare:U,co2SignalConfigEntry:g,co2SignalEntity:f,fossilEnergyConsumption:q,fossilEnergyConsumptionCompare:K}},z=t=>{k.forEach((e=>{const i=B(t,{key:e});i.clearPrefs(),i._active&&i.refresh()}))},W=t=>{if(t._refreshTimeout&&clearTimeout(t._refreshTimeout),t._active&&(!t.end||t.end>new Date)){const e=new Date;e.getMinutes()>=20&&e.setHours(e.getHours()+1),e.setMinutes(20,0,0),t._refreshTimeout=window.setTimeout((()=>t.refresh()),e.getTime()-Date.now())}},B=(t,e={})=>{let i="_energy";if(e.key){if(!e.key.startsWith("energy_"))throw new Error("Key need to start with energy_");i=`_${e.key}`}if(t.connection[i])return t.connection[i];k.push(e.key);const a=(0,g._)(t.connection,i,(async()=>(a.prefs||(a.prefs=await U(t)),W(a),L(t,a.prefs,a.start,a.end,a.compare)))),s=a.subscribe;a.subscribe=t=>{const e=s(t);return a._active++,void 0===a._refreshTimeout&&W(a),()=>{a._active--,a._active<1&&(clearTimeout(a._refreshTimeout),a._refreshTimeout=void 0),e()}},a._active=0,a.prefs=e.prefs;const n=new Date,o=(0,f.Zs)(n,t.locale,t.config).split(":")[0];a.start=(0,_.A)("0"===o?(0,d.Z)(n,-1):n,h.Z,t.locale,t.config),a.end=(0,_.A)("0"===o?(0,d.Z)(n,-1):n,u.Z,t.locale,t.config);const r=()=>{a._updatePeriodTimeout=window.setTimeout((()=>{a.start=(0,_.A)(new Date,h.Z,t.locale,t.config),a.end=(0,_.A)(new Date,u.Z,t.locale,t.config),r()}),(0,p.Z)((0,_.A)(n,u.Z,t.locale,t.config),1).getTime()-Date.now())};return r(),a.clearPrefs=()=>{a.prefs=void 0},a.setPeriod=(e,i)=>{var s;a.start=e,a.end=i,a.start.getTime()!==(0,_.A)(new Date,h.Z,t.locale,t.config).getTime()||(null===(s=a.end)||void 0===s?void 0:s.getTime())!==(0,_.A)(new Date,u.Z,t.locale,t.config).getTime()||a._updatePeriodTimeout?a._updatePeriodTimeout&&(clearTimeout(a._updatePeriodTimeout),a._updatePeriodTimeout=void 0):r()},a.setCompare=t=>{a.compare=t},a},O=t=>t.callWS({type:"energy/solar_forecast"}),R=["volume","energy"],Y=(t,e={},i)=>{for(const a of t.energy_sources){if("gas"!==a.type)continue;if(i&&i===a.stat_energy_from)continue;const t=e[a.stat_energy_from];if(R.includes(null==t?void 0:t.unit_class))return t.unit_class}},j=(t,e,i={})=>{const a=Y(e,i);if(void 0!==a)return"energy"===a?"kWh":"km"===t.config.unit_system.length?"m³":"ft³"},V=t=>"km"===t.config.unit_system.length?"L":"gal",F="/docs/energy/faq/#troubleshooting-missing-entities";a()}catch(t){a(t)}}))},73826:(t,e,i)=>{i.d(e,{f:()=>r});var a=i(17463),s=i(34541),n=i(47838),o=i(79932);const r=t=>(0,a.Z)(null,(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,s.Z)((0,n.Z)(i.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,s.Z)((0,n.Z)(i.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then((t=>t())):t()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(t){if((0,s.Z)((0,n.Z)(i.prototype),"updated",this).call(this,t),t.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps)for(const e of t.keys())if(this.hassSubscribeRequiredHostProps.includes(e))return void this.__checkSubscribed()}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var t;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(t=this.hassSubscribeRequiredHostProps)&&void 0!==t&&t.some((t=>void 0===this[t]))||(this.__unsubs=this.hassSubscribe())}}]}}),t)},47420:(t,e,i)=>{i.a(t,(async(t,a)=>{try{i.r(e),i.d(e,{HuiEnergyDevicesGraphCard:()=>m});var s=i(17463),n=i(69519),o=i(24112),r=i(68144),l=i(79932),d=i(83448),c=i(14516),h=i(55070),u=i(47181),p=i(18457),g=(i(62336),i(22098),i(55424)),_=i(38014),f=i(73826),y=i(53658),v=t([g]);g=(v.then?(await v)():v)[0];let m=(0,s.Z)([(0,l.Mo)("hui-energy-devices-graph-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,l.SB)()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,l.SB)()],key:"_data",value:void 0},{kind:"field",decorators:[(0,l.IO)("ha-chart-base")],key:"_chart",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var t;return[(0,g.UB)(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((t=>{this._data=t,this._getStatistics(t)}))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,y.SN)(this,t)||t.size>1||!t.has("hass")}},{kind:"method",key:"render",value:function(){var t;return this.hass&&this._config?r.dy` <ha-card> ${this._config.title?r.dy`<h1 class="card-header">${this._config.title}</h1>`:""} <div class="content ${(0,d.$)({"has-header":!!this._config.title})}"> <ha-chart-base .hass="${this.hass}" .data="${this._chartData}" .options="${this._createOptions(this.hass.locale)}" .height="${28*((null===(t=this._chartData)||void 0===t||null===(t=t.datasets[0])||void 0===t?void 0:t.data.length)||0)+50}" chart-type="bar"></ha-chart-base> </div> </ha-card> `:r.Ld}},{kind:"field",key:"_createOptions",value(){return(0,c.Z)((t=>({parsing:!1,animation:!1,responsive:!0,maintainAspectRatio:!1,indexAxis:"y",scales:{y:{type:"category",ticks:{autoSkip:!1,callback:t=>{var e;const i=this._chartData.datasets[0].data[t].y;return(0,_.Kd)(this.hass,i,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[i])}}},x:{title:{display:!0,text:"kWh"}}},elements:{bar:{borderWidth:1,borderRadius:4}},plugins:{tooltip:{mode:"nearest",callbacks:{title:t=>{var e;const i=t[0].label;return(0,_.Kd)(this.hass,i,null===(e=this._data)||void 0===e?void 0:e.statsMetadata[i])},label:e=>`${e.dataset.label}: ${(0,p.uf)(e.parsed.x,t)} kWh`}}},locale:(0,p.Hd)(this.hass.locale),onClick:t=>{var e;const i=t.chart,a=(0,n.z)(t,i),s=Math.abs(i.scales.y.getValueForPixel(a.y));(0,u.B)(this,"hass-more-info",{entityId:null===(e=this._chartData)||void 0===e||null===(e=e.datasets[0])||void 0===e||null===(e=e.data[s])||void 0===e?void 0:e.y}),i.canvas.dispatchEvent(new Event("mouseout"))}})))}},{kind:"method",key:"_getStatistics",value:async function(t){var e,i;const a=(0,o.Z)(t.end||new Date,t.start),s=t.prefs.device_consumption.map((t=>t.stat_consumption)),n=a>35?"month":a>2?"day":"hour",r={energy:"kWh",volume:"km"===(this.hass.config.unit_system.length||"")?"m³":"ft³"},l=await(0,_.dL)(this.hass,t.start,t.end,s,n,r,["change"]);let d;t.startCompare&&t.endCompare&&(d=await(0,_.dL)(this.hass,t.startCompare,t.endCompare,s,n,r,["change"]));const c=[],u=[],p=[],g=[],f=[],y=[],v=[{label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.energy_usage"),borderColor:p,backgroundColor:f,data:c,barThickness:d?10:20}];d&&v.push({label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_devices_graph.previous_energy_usage"),borderColor:g,backgroundColor:y,data:u,barThickness:10}),t.prefs.device_consumption.forEach(((t,e)=>{const i=t.stat_consumption in l&&(0,_.Kj)(l[t.stat_consumption])||0;if(c.push({y:t.stat_consumption,x:i,idx:e}),d){const i=t.stat_consumption in d&&(0,_.Kj)(d[t.stat_consumption])||0;u.push({y:t.stat_consumption,x:i,idx:e})}})),c.sort(((t,e)=>e.x-t.x)),c.length=(null===(e=this._config)||void 0===e?void 0:e.max_devices)||c.length,c.forEach((t=>{const e=(0,h.Eu)(t.idx);p.push(e),f.push(e+"7F")})),u.forEach((t=>{const e=(0,h.Eu)(t.idx);g.push(e+"7F"),y.push(e+"32")})),this._chartData={labels:c.map((t=>t.y)),datasets:v},await this.updateComplete,null===(i=this._chart)||void 0===i||i.updateChart("none")}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`.card-header{padding-bottom:0}.content{padding:16px}.has-header{padding-top:0}ha-chart-base{--chart-max-height:none}`}}]}}),(0,f.f)(r.oi));a()}catch(t){a(t)}}))},28847:t=>{t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},23158:(t,e,i)=>{i.d(e,{Z:()=>n});var a=i(89273),s=i(36857);function n(t,e,i){var n=(0,s.Z)(t,i),o=(0,a.Z)(e,n,!0),r=new Date(n.getTime()-o),l=new Date(0);return l.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),l.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),l}},25101:(t,e,i)=>{i.d(e,{Z:()=>l});var a=i(20508),s=i(36857),n=i(57944),o=i(89273),r=i(74101);function l(t,e,i){if("string"==typeof t&&!t.match(n.Z)){var l=a(i);return l.timeZone=e,(0,s.Z)(t,l)}var d=(0,s.Z)(t,i),c=(0,r.Z)(d.getFullYear(),d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds()).getTime(),h=(0,o.Z)(e,new Date(c));return new Date(c+h)}}};
//# sourceMappingURL=47420.vRbd8aKAOMA.js.map