/*! For license information please see 70087.LQE1kJyoJfA.js.LICENSE.txt */
export const id=70087;export const ids=[70087,31206];export const modules={31206:(t,e,i)=>{i.r(e),i.d(e,{HaCircularProgress:()=>l});var o=i(17463),r=i(34541),a=i(47838),n=(i(34131),i(22129)),s=i(68144),c=i(79932);let l=(0,o.Z)([(0,c.Mo)("ha-circular-progress")],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:"aria-label",type:String})],key:"ariaLabel",value:()=>"Loading"},{kind:"field",decorators:[(0,c.Cb)()],key:"size",value:()=>"medium"},{kind:"method",key:"updated",value:function(t){if((0,r.Z)((0,a.Z)(i.prototype),"updated",this).call(this,t),t.has("size"))switch(this.size){case"tiny":this.style.setProperty("--md-circular-progress-size","16px");break;case"small":this.style.setProperty("--md-circular-progress-size","28px");break;case"medium":this.style.setProperty("--md-circular-progress-size","48px");break;case"large":this.style.setProperty("--md-circular-progress-size","68px")}}},{kind:"get",static:!0,key:"styles",value:function(){return[...(0,r.Z)((0,a.Z)(i),"styles",this),s.iv`:host{--md-sys-color-primary:var(--primary-color);--md-circular-progress-size:48px}`]}}]}}),n.B)},66621:(t,e,i)=>{i.r(e);var o=i(17463),r=i(34541),a=i(47838),n=i(68144),s=i(79932),c=i(83448),l=i(30153),d=i(49706),h=i(62877),f=i(58831),u=i(91741),g=(i(22098),i(10983),i(87037),i(69620)),v=i(93491),m=i(15688),p=i(17616),_=i(22193),y=i(53658),b=i(90271),k=(i(97282),i(75502));i(65082);const x=new Set(["closed","locked","not_home","off"]);(0,o.Z)([(0,s.Mo)("hui-picture-glance-card")],(function(t,e){class o extends e{constructor(...e){super(...e),t(this)}}return{F:o,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(42850),i.e(78133),i.e(50731),i.e(68331),i.e(40163),i.e(74535),i.e(74922)]).then(i.bind(i,33785)),document.createElement("hui-picture-glance-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){return{type:"picture-glance",title:"Kitchen",image:"https://demo.home-assistant.io/stub_config/kitchen.png",entities:(0,m.j)(t,2,e,i,["sensor","binary_sensor"])}}},{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"field",key:"_entitiesDialog",value:void 0},{kind:"field",key:"_entitiesToggle",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entities||!Array.isArray(t.entities)||!(t.image||t.image_entity||t.camera_image||t.state_image)||t.state_image&&!t.entity)throw new Error("Invalid configuration");const e=(0,b.A)(t.entities);this._entitiesDialog=[],this._entitiesToggle=[],e.forEach((e=>{t.force_dialog||!d.Kk.has((0,f.M)(e.entity))?this._entitiesDialog.push(e):this._entitiesToggle.push(e)})),this._config={hold_action:{action:"more-info"},...t}}},{kind:"method",key:"shouldUpdate",value:function(t){if(!this._config||(0,y.G2)(this,t))return!0;if(!t.has("hass"))return!1;const e=t.get("hass");if(!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;if(this._config.image_entity&&e.states[this._config.image_entity]!==this.hass.states[this._config.image_entity])return!0;if(this._entitiesDialog)for(const t of this._entitiesDialog)if(e.states[t.entity]!==this.hass.states[t.entity])return!0;if(this._entitiesToggle)for(const t of this._entitiesToggle)if(e.states[t.entity]!==this.hass.states[t.entity])return!0;return!1}},{kind:"method",key:"updated",value:function(t){if((0,r.Z)((0,a.Z)(o.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;const e=t.get("hass"),i=t.get("_config");e&&i&&e.themes===this.hass.themes&&i.theme===this._config.theme||(0,h.R)(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return n.Ld;let t;return this._config.image_entity&&(t=this.hass.states[this._config.image_entity]),n.dy` <ha-card> <hui-image class="${(0,c.$)({clickable:Boolean(this._config.tap_action||this._config.hold_action||this._config.camera_image||this._config.image_entity)})}" @action="${this._handleAction}" .actionHandler="${(0,v.K)({hasHold:(0,_._)(this._config.hold_action),hasDoubleClick:(0,_._)(this._config.double_tap_action)})}" tabindex="${(0,l.o)((0,_._)(this._config.tap_action)?"0":void 0)}" .config="${this._config}" .hass="${this.hass}" .image="${t?(0,g.U)(t):this._config.image}" .stateImage="${this._config.state_image}" .stateFilter="${this._config.state_filter}" .cameraImage="${this._config.camera_image}" .cameraView="${this._config.camera_view}" .entity="${this._config.entity}" .aspectRatio="${this._config.aspect_ratio}"></hui-image> <div class="box"> ${this._config.title?n.dy`<div class="title">${this._config.title}</div>`:""} <div class="row"> ${this._entitiesDialog.map((t=>this.renderEntity(t,!0)))} </div> <div class="row"> ${this._entitiesToggle.map((t=>this.renderEntity(t,!1)))} </div> </div> </ha-card> `}},{kind:"method",key:"renderEntity",value:function(t,e){const i=this.hass.states[t.entity];return t={tap_action:{action:e?"more-info":"toggle"},hold_action:{action:"more-info"},...t},i?n.dy` <div class="wrapper"> <ha-icon-button @action="${this._handleAction}" .actionHandler="${(0,v.K)({hasHold:(0,_._)(t.hold_action),hasDoubleClick:(0,_._)(t.double_tap_action)})}" tabindex="${(0,l.o)((0,_._)(t.tap_action)?void 0:"-1")}" .disabled="${!(0,_._)(t.tap_action)}" .config="${t}" class="${(0,c.$)({"state-on":!x.has(i.state)})}" title="${`${(0,u.C)(i)} : ${this.hass.formatEntityState(i)}`}"> <ha-state-icon .icon="${t.icon}" .state="${i}"></ha-state-icon> </ha-icon-button> ${!0!==this._config.show_state&&!0!==t.show_state?n.dy`<div class="state"></div>`:n.dy` <div class="state"> ${t.attribute?n.dy` ${t.prefix}${i.attributes[t.attribute]}${t.suffix} `:this.hass.formatEntityState(i)} </div> `} </div> `:n.dy` <hui-warning-element .label="${(0,k.i)(this.hass,t.entity)}"></hui-warning-element> `}},{kind:"method",key:"_handleAction",value:function(t){const e=t.currentTarget.config;(0,p.G)(this,this.hass,e,t.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`ha-card{position:relative;min-height:48px;overflow:hidden;height:100%;box-sizing:border-box}hui-image.clickable{cursor:pointer}.box{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:absolute;left:0;right:0;bottom:0;background-color:var(--ha-picture-card-background-color,rgba(0,0,0,.3));padding:4px 8px;font-size:16px;line-height:40px;color:var(--ha-picture-card-text-color,#fff);display:flex;justify-content:space-between;flex-direction:row}.box .title{font-weight:500;margin-left:8px}ha-icon-button{--mdc-icon-button-size:40px;--disabled-text-color:currentColor;color:var(--ha-picture-icon-button-color,#a9a9a9)}ha-icon-button.state-on{color:var(--ha-picture-icon-button-on-color,#fff)}hui-warning-element{padding:0 8px}.state{display:block;font-size:12px;text-align:center;line-height:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.row{display:flex;flex-direction:row}.wrapper{display:flex;flex-direction:column;width:40px}`}}]}}),n.oi)},22129:(t,e,i)=>{i.d(e,{B:()=>h});var o=i(43204),r=i(79932),a=i(68144),n=i(83448),s=i(92204);class c extends a.oi{constructor(){super(...arguments),this.value=0,this.max=1,this.indeterminate=!1,this.fourColor=!1}render(){const{ariaLabel:t}=this;return a.dy` <div class="progress ${(0,n.$)(this.getRenderClasses())}" role="progressbar" aria-label="${t||a.Ld}" aria-valuemin="0" aria-valuemax="${this.max}" aria-valuenow="${this.indeterminate?a.Ld:this.value}">${this.renderIndicator()}</div> `}getRenderClasses(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}(0,s.d)(c),(0,o.__decorate)([(0,r.Cb)({type:Number})],c.prototype,"value",void 0),(0,o.__decorate)([(0,r.Cb)({type:Number})],c.prototype,"max",void 0),(0,o.__decorate)([(0,r.Cb)({type:Boolean})],c.prototype,"indeterminate",void 0),(0,o.__decorate)([(0,r.Cb)({type:Boolean,attribute:"four-color"})],c.prototype,"fourColor",void 0);class l extends c{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const t=100*(1-this.value/this.max);return a.dy` <svg viewBox="0 0 4800 4800"> <circle class="track" pathLength="100"></circle> <circle class="active-track" pathLength="100" stroke-dashoffset="${t}"></circle> </svg> `}renderIndeterminateContainer(){return a.dy` <div class="spinner"> <div class="left"> <div class="circle"></div> </div> <div class="right"> <div class="circle"></div> </div> </div>`}}const d=a.iv`:host{--_active-indicator-color:var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width:var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color:var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color:var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color:var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color:var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size:var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;min-block-size:var(--_size);min-inline-size:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.active-track,.circle,.left,.progress,.right,.spinner,.track,svg{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/ 100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset .5s cubic-bezier(0, 0, .2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1.568s}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/ 100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) transparent transparent;animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-.666s,0s}@media(forced-colors:active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}`;let h=class extends l{};h.styles=[d],h=(0,o.__decorate)([(0,r.Mo)("md-circular-progress")],h)}};
//# sourceMappingURL=70087.LQE1kJyoJfA.js.map