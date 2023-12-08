export const id=94760;export const ids=[94760];export const modules={85157:(e,t,o)=>{o.d(t,{t:()=>a});class n{constructor(e=window.localStorage){this.storage=void 0,this._storage={},this._listeners={},this.storage=e,e===window.localStorage&&window.addEventListener("storage",(e=>{e.key&&this.hasKey(e.key)&&(this._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,this._listeners[e.key]&&this._listeners[e.key].forEach((t=>t(e.oldValue?JSON.parse(e.oldValue):e.oldValue,this._storage[e.key]))))}))}addFromStorage(e){if(!this._storage[e]){const t=this.storage.getItem(e);t&&(this._storage[e]=JSON.parse(t))}}subscribeChanges(e,t){return this._listeners[e]?this._listeners[e].push(t):this._listeners[e]=[t],()=>{this.unsubscribeChanges(e,t)}}unsubscribeChanges(e,t){if(!(e in this._listeners))return;const o=this._listeners[e].indexOf(t);-1!==o&&this._listeners[e].splice(o,1)}hasKey(e){return e in this._storage}getValue(e){return this._storage[e]}setValue(e,t){const o=this._storage[e];this._storage[e]=t;try{void 0===t?this.storage.removeItem(e):this.storage.setItem(e,JSON.stringify(t))}catch(e){}finally{this._listeners[e]&&this._listeners[e].forEach((e=>e(o,t)))}}}const i={},a=e=>t=>{const o=e.storage||"localStorage";let a;o&&o in i?a=i[o]:(a=new n(window[o]),i[o]=a);const r=String(t.key),s=e.key||String(t.key),l=t.initializer?t.initializer():void 0;a.addFromStorage(s);const d=!1!==e.subscribe?e=>a.subscribeChanges(s,((o,n)=>{e.requestUpdate(t.key,o)})):void 0,c=()=>a.hasKey(s)?a.getValue(s):l;return{kind:"method",placement:"prototype",key:t.key,descriptor:{set(o){((o,n)=>{let i;e.state&&(i=c()),a.setValue(s,n),e.state&&o.requestUpdate(t.key,i)})(this,o)},get:()=>c(),enumerable:!0,configurable:!0},finisher(o){if(e.state&&e.subscribe){const e=o.prototype.connectedCallback,t=o.prototype.disconnectedCallback;o.prototype.connectedCallback=function(){e.call(this),this[`__unbsubLocalStorage${r}`]=null==d?void 0:d(this)},o.prototype.disconnectedCallback=function(){var e;t.call(this),null===(e=this[`__unbsubLocalStorage${r}`])||void 0===e||e.call(this),this[`__unbsubLocalStorage${r}`]=void 0}}e.state&&o.createProperty(t.key,{noAccessor:!0,...e.stateOptions})}}}},74834:(e,t,o)=>{var n=o(17463),i=o(14271),a=o(68144),r=o(79932),s=o(3712);(0,n.Z)([(0,r.Mo)("ha-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[s.W,a.iv`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}`]}]}}),i.Button)},40651:(e,t,o)=>{var n=o(17463),i=o(34541),a=o(47838),r=o(78220),s=o(82612),l=o(443),d=o(43419),c=o(68144),p=o(79932),h=o(83448),g=o(71711),m=o(11654);const u=s.Vq?{passive:!0}:void 0;(0,n.Z)([(0,p.Mo)("ha-two-pane-top-app-bar-fixed")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",key:"mdcFoundation",value:void 0},{kind:"field",key:"mdcFoundationClass",value:()=>d.Z},{kind:"field",decorators:[(0,p.IO)(".mdc-top-app-bar")],key:"mdcRoot",value:void 0},{kind:"field",decorators:[(0,p.IO)('slot[name="actionItems"]')],key:"_actionItemsSlot",value:void 0},{kind:"field",key:"_scrollTarget",value:void 0},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"centerTitle",value:()=>!1},{kind:"field",decorators:[(0,p.Cb)({type:Boolean,reflect:!0})],key:"prominent",value:()=>!1},{kind:"field",decorators:[(0,p.Cb)({type:Boolean,reflect:!0})],key:"dense",value:()=>!1},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"pane",value:()=>!1},{kind:"field",decorators:[(0,p.Cb)({type:Boolean})],key:"footer",value:()=>!1},{kind:"field",decorators:[(0,p.IO)(".content")],key:"_contentElement",value:void 0},{kind:"field",decorators:[(0,p.IO)(".pane .ha-scrollbar")],key:"_paneElement",value:void 0},{kind:"get",decorators:[(0,p.Cb)({type:Object})],key:"scrollTarget",value:function(){return this._scrollTarget||window}},{kind:"set",key:"scrollTarget",value:function(e){this.unregisterListeners();const t=this.scrollTarget;this._scrollTarget=e,this.updateRootPosition(),this.requestUpdate("scrollTarget",t),this.registerListeners()}},{kind:"method",key:"updateRootPosition",value:function(){if(this.mdcRoot){const e=this.scrollTarget===window;this.mdcRoot.style.position=e?"":"absolute"}}},{kind:"method",key:"barClasses",value:function(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle,"mdc-top-app-bar--fixed":!0,"mdc-top-app-bar--pane":this.pane}}},{kind:"method",key:"contentClasses",value:function(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent,"mdc-top-app-bar--pane":this.pane}}},{kind:"method",key:"render",value:function(){const e=c.dy`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return c.dy` <header class="mdc-top-app-bar ${(0,h.$)(this.barClasses())}"> <div class="mdc-top-app-bar__row"> ${this.pane?c.dy`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="title"> <slot name="navigationIcon" @click="${this.handleNavigationClick}"></slot> ${e} </section>`:c.Ld} <section class="mdc-top-app-bar__section" id="navigation"> ${this.pane?c.Ld:c.dy`<slot name="navigationIcon" @click="${this.handleNavigationClick}"></slot>${e}`} </section> <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar"> <slot name="actionItems"></slot> </section> </div> </header> <div class="${(0,h.$)(this.contentClasses())}"> ${this.pane?c.dy`<div class="pane"> <div class="shadow-container"></div> <div class="ha-scrollbar"> <slot name="pane"></slot> </div> ${this.footer?c.dy`<div class="footer"> <slot name="pane-footer"></slot> </div>`:c.Ld} </div>`:c.Ld} <div class="main"> ${this.pane?c.dy`<div class="shadow-container"></div>`:c.Ld} <div class="content"> <slot></slot> </div> </div> </div> `}},{kind:"method",key:"updated",value:function(e){(0,i.Z)((0,a.Z)(o.prototype),"updated",this).call(this,e),e.has("pane")&&void 0!==e.get("pane")&&(this.unregisterListeners(),this.registerListeners())}},{kind:"method",key:"createAdapter",value:function(){return{...(0,r.q)(this.mdcRoot),setStyle:(e,t)=>this.mdcRoot.style.setProperty(e,t),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(l.j2.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length}}},{kind:"field",key:"handleTargetScroll",value(){return()=>{this.mdcFoundation.handleTargetScroll()}}},{kind:"field",key:"handlePaneScroll",value:()=>e=>{e.target.scrollTop>0?e.target.parentElement.classList.add("scrolled"):e.target.parentElement.classList.remove("scrolled")}},{kind:"field",key:"handleNavigationClick",value(){return()=>{this.mdcFoundation.handleNavigationClick()}}},{kind:"method",key:"registerListeners",value:function(){if(this.pane)return this._paneElement.addEventListener("scroll",this.handlePaneScroll,u),void this._contentElement.addEventListener("scroll",this.handlePaneScroll,u);this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,u)}},{kind:"method",key:"unregisterListeners",value:function(){var e;null===(e=this._paneElement)||void 0===e||e.removeEventListener("scroll",this.handlePaneScroll),this._contentElement.removeEventListener("scroll",this.handlePaneScroll),this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}},{kind:"method",key:"firstUpdated",value:function(){(0,i.Z)((0,a.Z)(o.prototype),"firstUpdated",this).call(this),this.updateRootPosition(),this.registerListeners()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,i.Z)((0,a.Z)(o.prototype),"disconnectedCallback",this).call(this),this.unregisterListeners()}},{kind:"field",static:!0,key:"styles",value:()=>[g.W,m.$c,c.iv`.mdc-top-app-bar__row{height:var(--header-height);border-bottom:var(--app-header-border-bottom)}.mdc-top-app-bar--fixed-adjust{padding-top:var(--header-height)}.shadow-container{position:absolute;top:calc(-1 * var(--header-height));width:100%;height:var(--header-height);z-index:1;transition:box-shadow .2s linear}.scrolled .shadow-container{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow,0px 2px 4px -1px rgba(0,0,0,.2),0px 4px 5px 0px rgba(0,0,0,.14),0px 1px 10px 0px rgba(0,0,0,.12))}.mdc-top-app-bar{--mdc-typography-headline6-font-weight:400;color:var(--app-header-text-color,var(--mdc-theme-on-primary,#fff));background-color:var(--app-header-background-color,var(--mdc-theme-primary))}.mdc-top-app-bar--pane.mdc-top-app-bar--fixed-scrolled{box-shadow:none}#title{border-right:1px solid rgba(255,255,255,.12);box-sizing:border-box;flex:0 0 var(--sidepane-width,250px);width:var(--sidepane-width,250px)}div.mdc-top-app-bar--pane{display:flex;height:calc(100vh - var(--header-height))}.pane{border-right:1px solid var(--divider-color);box-sizing:border-box;display:flex;flex:0 0 var(--sidepane-width,250px);width:var(--sidepane-width,250px);flex-direction:column;position:relative}.pane .ha-scrollbar{flex:1}.pane .footer{border-top:1px solid var(--divider-color);padding-bottom:8px}.main{min-height:100%}.mdc-top-app-bar--pane .main{position:relative;flex:1;height:100%}.mdc-top-app-bar--pane .content{height:100%;overflow:auto}`]}]}}),r.H)},73728:(e,t,o)=>{o.d(t,{D4:()=>c,D7:()=>u,Ky:()=>d,P3:()=>s,V3:()=>b,WW:()=>k,XO:()=>p,ZJ:()=>v,d4:()=>m,oi:()=>g,pV:()=>r,zO:()=>h});var n=o(97330),i=o(38346),a=o(5986);const r=["bluetooth","dhcp","discovery","hardware","hassio","homekit","integration_discovery","mqtt","ssdp","unignore","usb","zeroconf"],s=["reauth"],l={"HA-Frontend-Base":`${location.protocol}//${location.host}`},d=(e,t)=>{var o;return e.callApi("POST","config/config_entries/flow",{handler:t,show_advanced_options:Boolean(null===(o=e.userData)||void 0===o?void 0:o.showAdvanced)},l)},c=(e,t)=>e.callApi("GET",`config/config_entries/flow/${t}`,void 0,l),p=(e,t,o)=>e.callApi("POST",`config/config_entries/flow/${t}`,o,l),h=(e,t,o)=>e.callWS({type:"config_entries/ignore_flow",flow_id:t,title:o}),g=(e,t)=>e.callApi("DELETE",`config/config_entries/flow/${t}`),m=(e,t)=>e.callApi("GET","config/config_entries/flow_handlers"+(t?`?type=${t}`:"")),u=e=>e.sendMessagePromise({type:"config_entries/flow/progress"}),f=(e,t)=>e.subscribeEvents((0,i.D)((()=>u(e).then((e=>t.setState(e,!0)))),500,!0),"config_entry_discovered"),v=e=>(0,n._)(e,"_configFlowProgress",u,f),b=(e,t)=>v(e.connection).subscribe(t),k=(e,t)=>t.context.title_placeholders&&0!==Object.keys(t.context.title_placeholders).length?e(`component.${t.handler}.config.flow_title`,t.context.title_placeholders)||("name"in t.context.title_placeholders?t.context.title_placeholders.name:(0,a.Lh)(e,t.handler)):(0,a.Lh)(e,t.handler)},2852:(e,t,o)=>{o.d(t,{t:()=>s});var n=o(68144),i=o(73728),a=o(5986),r=o(52871);const s=(e,t)=>(0,r.w)(e,t,{flowType:"config_flow",loadDevicesAndAreas:!0,createFlow:async(e,t)=>{const[o]=await Promise.all([(0,i.Ky)(e,t),e.loadFragmentTranslation("config"),e.loadBackendTranslation("config",t),e.loadBackendTranslation("selector",t),e.loadBackendTranslation("title",t)]);return o},fetchFlow:async(e,t)=>{const o=await(0,i.D4)(e,t);return await e.loadFragmentTranslation("config"),await e.loadBackendTranslation("config",o.handler),await e.loadBackendTranslation("selector",o.handler),o},handleFlowStep:i.XO,deleteFlow:i.oi,renderAbortDescription(e,t){const o=e.localize(`component.${t.handler}.config.abort.${t.reason}`,t.description_placeholders);return o?n.dy` <ha-markdown allowsvg breaks .content="${o}"></ha-markdown> `:""},renderShowFormStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`,t.description_placeholders)||e.localize(`component.${t.handler}.title`),renderShowFormStepDescription(e,t){const o=e.localize(`component.${t.handler}.config.step.${t.step_id}.description`,t.description_placeholders);return o?n.dy` <ha-markdown allowsvg breaks .content="${o}"></ha-markdown> `:""},renderShowFormStepFieldLabel:(e,t,o)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.data.${o.name}`),renderShowFormStepFieldHelper(e,t,o){const i=e.localize(`component.${t.handler}.config.step.${t.step_id}.data_description.${o.name}`,t.description_placeholders);return i?n.dy`<ha-markdown breaks .content="${i}"></ha-markdown>`:""},renderShowFormStepFieldError:(e,t,o)=>e.localize(`component.${t.handler}.config.error.${o}`,t.description_placeholders)||o,renderShowFormStepFieldLocalizeValue:(e,t,o)=>e.localize(`component.${t.handler}.selector.${o}`),renderShowFormStepSubmitButton:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.submit`)||e.localize("ui.panel.config.integrations.config_flow."+(!1===t.last_step?"next":"submit")),renderExternalStepHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize("ui.panel.config.integrations.config_flow.external_step.open_site"),renderExternalStepDescription(e,t){const o=e.localize(`component.${t.handler}.config.${t.step_id}.description`,t.description_placeholders);return n.dy` <p> ${e.localize("ui.panel.config.integrations.config_flow.external_step.description")} </p> ${o?n.dy` <ha-markdown allowsvg breaks .content="${o}"></ha-markdown> `:""} `},renderCreateEntryDescription(e,t){const o=e.localize(`component.${t.handler}.config.create_entry.${t.description||"default"}`,t.description_placeholders);return n.dy` ${o?n.dy` <ha-markdown allowsvg breaks .content="${o}"></ha-markdown> `:""} <p> ${e.localize("ui.panel.config.integrations.config_flow.created_config",{name:t.title})} </p> `},renderShowFormProgressHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize(`component.${t.handler}.title`),renderShowFormProgressDescription(e,t){const o=e.localize(`component.${t.handler}.config.progress.${t.progress_action}`,t.description_placeholders);return o?n.dy` <ha-markdown allowsvg breaks .content="${o}"></ha-markdown> `:""},renderMenuHeader:(e,t)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.title`)||e.localize(`component.${t.handler}.title`),renderMenuDescription(e,t){const o=e.localize(`component.${t.handler}.config.step.${t.step_id}.description`,t.description_placeholders);return o?n.dy` <ha-markdown allowsvg breaks .content="${o}"></ha-markdown> `:""},renderMenuOption:(e,t,o)=>e.localize(`component.${t.handler}.config.step.${t.step_id}.menu_options.${o}`,t.description_placeholders),renderLoadingDescription(e,t,o,n){if("loading_flow"!==t&&"loading_step"!==t)return"";const i=(null==n?void 0:n.handler)||o;return e.localize(`ui.panel.config.integrations.config_flow.loading.${t}`,{integration:i?(0,a.Lh)(e.localize,i):e.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}})},52871:(e,t,o)=>{o.d(t,{w:()=>a});var n=o(47181);const i=()=>Promise.all([o.e(42850),o.e(46992),o.e(28597),o.e(78133),o.e(50731),o.e(50529),o.e(52154),o.e(88109),o.e(40163),o.e(59159)]).then(o.bind(o,59159)),a=(e,t,o)=>{(0,n.B)(e,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:i,dialogParams:{...t,flowConfig:o,dialogParentElement:e}})}}};
//# sourceMappingURL=94760.-vhcAdlQw0A.js.map