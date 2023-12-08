export const id=38026;export const ids=[38026];export const modules={38026:(t,i,e)=>{e.a(t,(async(t,s)=>{try{e.r(i),e.d(i,{DEFAULT_HOURS_TO_SHOW:()=>f,HuiHistoryGraphCard:()=>b});var o=e(17463),n=e(34541),r=e(47838),a=e(68144),h=e(79932),d=e(83448),c=e(7323),u=e(77243),l=(e(9381),e(22098),e(58763)),_=e(41499),y=e(53658),v=e(90271),k=t([u,l]);[u,l]=k.then?(await k)():k;const f=24;let b=(0,o.Z)([(0,h.Mo)("hui-history-graph-card")],(function(t,i){class s extends i{constructor(...i){super(...i),t(this)}}return{F:s,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([e.e(42850),e.e(78133),e.e(50731),e.e(68331),e.e(40163),e.e(74535),e.e(24905)]).then(e.bind(e,52524)),document.createElement("hui-history-graph-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"history-graph",entities:["sun.sun"]}}},{kind:"field",decorators:[(0,h.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_stateHistory",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,h.SB)()],key:"_error",value:void 0},{kind:"field",key:"_names",value:()=>({})},{kind:"field",key:"_entityIds",value:()=>[]},{kind:"field",key:"_hoursToShow",value:()=>f},{kind:"field",key:"_interval",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"method",key:"getCardSize",value:function(){var t,i;return null!==(t=this._config)&&void 0!==t&&t.title?2:0+2*((null===(i=this._entityIds)||void 0===i?void 0:i.length)||1)}},{kind:"method",key:"setConfig",value:function(t){if(!t.entities||!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(!t.entities.length)throw new Error("You must include at least one entity");const i=t.entities?(0,v.A)(t.entities):[];this._entityIds=[],i.forEach((t=>{this._entityIds.push(t.entity),t.name&&(this._names[t.entity]=t.name)})),this._hoursToShow=t.hours_to_show||f,this._config=t}},{kind:"method",key:"connectedCallback",value:function(){(0,n.Z)((0,r.Z)(s.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._subscribeHistory()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,r.Z)(s.prototype),"disconnectedCallback",this).call(this),this._unsubscribeHistory()}},{kind:"method",key:"_subscribeHistory",value:async function(){if(!(0,c.p)(this.hass,"history")||this._subscribed)return;const{numeric_device_classes:t}=await(0,_.ib)(this.hass);this._subscribed=(0,l.xS)(this.hass,(i=>{var e;this._subscribed&&(this._stateHistory=(0,l.Nu)(this.hass,i,this.hass.localize,t,null===(e=this._config)||void 0===e?void 0:e.split_device_classes))}),this._hoursToShow,this._entityIds).catch((t=>{this._subscribed=void 0,this._error=t})),this._setRedrawTimer()}},{kind:"method",key:"_redrawGraph",value:function(){this._stateHistory&&(this._stateHistory={...this._stateHistory})}},{kind:"method",key:"_setRedrawTimer",value:function(){clearInterval(this._interval),this._interval=window.setInterval((()=>this._redrawGraph()),6e4)}},{kind:"method",key:"_unsubscribeHistory",value:function(){clearInterval(this._interval),this._subscribed&&(this._subscribed.then((t=>null==t?void 0:t())),this._subscribed=void 0)}},{kind:"method",key:"shouldUpdate",value:function(t){return(0,y.Wh)(this,t)||t.size>1||!t.has("hass")}},{kind:"method",key:"updated",value:function(t){if((0,n.Z)((0,r.Z)(s.prototype),"updated",this).call(this,t),!(this._config&&this.hass&&this._hoursToShow&&this._entityIds.length))return;if(!t.has("_config")&&!t.has("hass"))return;const i=t.get("_config");!t.has("_config")||(null==i?void 0:i.entities)===this._config.entities&&(null==i?void 0:i.hours_to_show)===this._config.hours_to_show||(this._unsubscribeHistory(),this._subscribeHistory())}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?a.dy` <ha-card .header="${this._config.title}"> <div class="content ${(0,d.$)({"has-header":!!this._config.title})}"> ${this._error?a.dy` <ha-alert alert-type="error"> ${this.hass.localize("ui.components.history_charts.error")}: ${this._error.message||this._error.code} </ha-alert> `:a.dy` <state-history-charts .hass="${this.hass}" .isLoadingData="${!this._stateHistory}" .historyData="${this._stateHistory}" .names="${this._names}" up-to-now .hoursToShow="${this._hoursToShow}" .showNames="${void 0===this._config.show_names||this._config.show_names}" .logarithmicScale="${this._config.logarithmic_scale||!1}"></state-history-charts> `} </div> </ha-card> `:a.Ld}},{kind:"get",static:!0,key:"styles",value:function(){return a.iv`ha-card{height:100%}.content{padding:16px}.has-header{padding-top:0}`}}]}}),a.oi);s()}catch(t){s(t)}}))}};
//# sourceMappingURL=38026.M4bH9Ya9mEo.js.map