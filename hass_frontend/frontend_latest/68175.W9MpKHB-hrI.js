export const id=68175;export const ids=[68175];export const modules={85157:(e,t,i)=>{i.d(t,{t:()=>r});class s{constructor(e=window.localStorage){this.storage=void 0,this._storage={},this._listeners={},this.storage=e,e===window.localStorage&&window.addEventListener("storage",(e=>{e.key&&this.hasKey(e.key)&&(this._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,this._listeners[e.key]&&this._listeners[e.key].forEach((t=>t(e.oldValue?JSON.parse(e.oldValue):e.oldValue,this._storage[e.key]))))}))}addFromStorage(e){if(!this._storage[e]){const t=this.storage.getItem(e);t&&(this._storage[e]=JSON.parse(t))}}subscribeChanges(e,t){return this._listeners[e]?this._listeners[e].push(t):this._listeners[e]=[t],()=>{this.unsubscribeChanges(e,t)}}unsubscribeChanges(e,t){if(!(e in this._listeners))return;const i=this._listeners[e].indexOf(t);-1!==i&&this._listeners[e].splice(i,1)}hasKey(e){return e in this._storage}getValue(e){return this._storage[e]}setValue(e,t){const i=this._storage[e];this._storage[e]=t;try{void 0===t?this.storage.removeItem(e):this.storage.setItem(e,JSON.stringify(t))}catch(e){}finally{this._listeners[e]&&this._listeners[e].forEach((e=>e(i,t)))}}}const a={},r=e=>t=>{const i=e.storage||"localStorage";let r;i&&i in a?r=a[i]:(r=new s(window[i]),a[i]=r);const n=String(t.key),o=e.key||String(t.key),d=t.initializer?t.initializer():void 0;r.addFromStorage(o);const l=!1!==e.subscribe?e=>r.subscribeChanges(o,((i,s)=>{e.requestUpdate(t.key,i)})):void 0,c=()=>r.hasKey(o)?r.getValue(o):d;return{kind:"method",placement:"prototype",key:t.key,descriptor:{set(i){((i,s)=>{let a;e.state&&(a=c()),r.setValue(o,s),e.state&&i.requestUpdate(t.key,a)})(this,i)},get:()=>c(),enumerable:!0,configurable:!0},finisher(i){if(e.state&&e.subscribe){const e=i.prototype.connectedCallback,t=i.prototype.disconnectedCallback;i.prototype.connectedCallback=function(){e.call(this),this[`__unbsubLocalStorage${n}`]=null==l?void 0:l(this)},i.prototype.disconnectedCallback=function(){var e;t.call(this),null===(e=this[`__unbsubLocalStorage${n}`])||void 0===e||e.call(this),this[`__unbsubLocalStorage${n}`]=void 0}}e.state&&i.createProperty(t.key,{noAccessor:!0,...e.stateOptions})}}}},31206:(e,t,i)=>{i.r(t),i.d(t,{HaCircularProgress:()=>l});var s=i(17463),a=i(34541),r=i(47838),n=(i(34131),i(22129)),o=i(68144),d=i(79932);let l=(0,s.Z)([(0,d.Mo)("ha-circular-progress")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,d.Cb)({attribute:"aria-label",type:String})],key:"ariaLabel",value:()=>"Loading"},{kind:"field",decorators:[(0,d.Cb)()],key:"size",value:()=>"medium"},{kind:"method",key:"updated",value:function(e){if((0,a.Z)((0,r.Z)(i.prototype),"updated",this).call(this,e),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--md-circular-progress-size","16px");break;case"small":this.style.setProperty("--md-circular-progress-size","28px");break;case"medium":this.style.setProperty("--md-circular-progress-size","48px");break;case"large":this.style.setProperty("--md-circular-progress-size","68px")}}},{kind:"get",static:!0,key:"styles",value:function(){return[...(0,a.Z)((0,r.Z)(i),"styles",this),o.iv`:host{--md-sys-color-primary:var(--primary-color);--md-circular-progress-size:48px}`]}}]}}),n.B)},54531:(e,t,i)=>{i.d(t,{Qc:()=>l,Xr:()=>d,zJ:()=>o});const s=["zone","persistent_notification"],a=(e,t)=>{var i,s,a,r,n,o,d,l;if(!("call-service"===t.action&&(null!==(i=t.target)&&void 0!==i&&i.entity_id||null!==(s=t.service_data)&&void 0!==s&&s.entity_id||null!==(a=t.data)&&void 0!==a&&a.entity_id)))return;let c=null!==(r=null!==(n=null===(o=t.service_data)||void 0===o?void 0:o.entity_id)&&void 0!==n?n:null===(d=t.data)||void 0===d?void 0:d.entity_id)&&void 0!==r?r:null===(l=t.target)||void 0===l?void 0:l.entity_id;Array.isArray(c)||(c=[c]);for(const t of c)e.add(t)},r=(e,t)=>{"string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&a(e,t.tap_action),t.hold_action&&a(e,t.hold_action)):e.add(t)},n=(e,t)=>{t.entity&&r(e,t.entity),t.entities&&Array.isArray(t.entities)&&t.entities.forEach((t=>r(e,t))),t.card&&n(e,t.card),t.cards&&Array.isArray(t.cards)&&t.cards.forEach((t=>n(e,t))),t.elements&&Array.isArray(t.elements)&&t.elements.forEach((t=>n(e,t))),t.badges&&Array.isArray(t.badges)&&t.badges.forEach((t=>r(e,t)))},o=e=>{const t=new Set;return e.views.forEach((e=>n(t,e))),t},d=(e,t)=>{const i=new Set;for(const a of Object.keys(e.states))t.has(a)||s.includes(a.split(".",1)[0])||i.add(a);return i},l=(e,t)=>{const i=o(t);return d(e,i)}},68175:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var s=i(17463),a=i(11994),r=i(68144),n=i(79932),o=i(83448),d=i(47501),l=i(62601),c=i(14516),h=i(85157),p=i(47181),u=(i(31206),i(65040),i(56007)),y=i(9893),m=i(54531),v=i(51153),g=i(82432),f=i(7782),k=e([v,g]);[v,g]=k.then?(await k)():k;(0,s.Z)([(0,n.Mo)("hui-card-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,h.t)({key:"lovelaceClipboard",state:!0,subscribe:!0,storage:"sessionStorage"})],key:"_clipboard",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_cards",value:()=>[]},{kind:"field",key:"lovelace",value:void 0},{kind:"field",key:"cardPicked",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_filter",value:()=>""},{kind:"field",decorators:[(0,n.SB)()],key:"_width",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_height",value:void 0},{kind:"field",key:"_unusedEntities",value:void 0},{kind:"field",key:"_usedEntities",value:void 0},{kind:"field",key:"_filterCards",value:()=>(0,c.Z)(((e,t)=>{if(!t)return e;let i=e.map((e=>e.card));const s={keys:["type","name","description"],isCaseSensitive:!1,minMatchCharLength:Math.min(t.length,2),threshold:.2},r=new a.Z(i,s);return i=r.search(t).map((e=>e.item)),e.filter((e=>i.includes(e.card)))}))},{kind:"method",key:"render",value:function(){return this.hass&&this.lovelace&&this._unusedEntities&&this._usedEntities?r.dy` <search-input .hass="${this.hass}" .filter="${this._filter}" @value-changed="${this._handleSearchChange}" .label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.search_cards")}"></search-input> <div id="content" style="${(0,d.V)({width:this._width?`${this._width}px`:"auto",height:this._height?`${this._height}px`:"auto"})}"> <div class="cards-container"> ${this._clipboard&&!this._filter?r.dy` ${(0,l.C)(this._renderCardElement({type:this._clipboard.type,showElement:!0,isCustom:!1,name:this.hass.localize("ui.panel.lovelace.editor.card.generic.paste"),description:`${this.hass.localize("ui.panel.lovelace.editor.card.generic.paste_description",{type:this._clipboard.type})}`},this._clipboard),r.dy` <div class="card spinner"> <ha-circular-progress indeterminate></ha-circular-progress> </div> `)} `:r.Ld} ${this._filterCards(this._cards,this._filter).map((e=>e.element))} </div> <div class="cards-container"> <div class="card manual" @click="${this._cardPicked}" .config="${{type:""}}"> <div class="card-header"> ${this.hass.localize("ui.panel.lovelace.editor.card.generic.manual")} </div> <div class="preview description"> ${this.hass.localize("ui.panel.lovelace.editor.card.generic.manual_description")} </div> </div> </div> </div> `:r.Ld}},{kind:"method",key:"shouldUpdate",value:function(e){const t=e.get("hass");return!t||t.locale!==this.hass.locale}},{kind:"method",key:"firstUpdated",value:function(){if(!this.hass||!this.lovelace)return;const e=(0,m.zJ)(this.lovelace),t=(0,m.Xr)(this.hass,e);this._usedEntities=[...e].filter((e=>this.hass.states[e]&&!(0,u.rk)(this.hass.states[e].state))),this._unusedEntities=[...t].filter((e=>this.hass.states[e]&&!(0,u.rk)(this.hass.states[e].state))),this._loadCards()}},{kind:"method",key:"_loadCards",value:function(){let e=f.C.map((e=>({name:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.name`),description:this.hass.localize(`ui.panel.lovelace.editor.card.${e.type}.description`),...e})));y.kb.length>0&&(e=e.concat(y.kb.map((e=>({type:e.type,name:e.name,description:e.description,showElement:e.preview,isCustom:!0}))))),this._cards=e.map((e=>({card:e,element:r.dy`${(0,l.C)(this._renderCardElement(e),r.dy` <div class="card spinner"> <ha-circular-progress indeterminate></ha-circular-progress> </div> `)}`})))}},{kind:"method",key:"_handleSearchChange",value:function(e){const t=e.detail.value;if(t){if(!this._width||!this._height){const e=this.shadowRoot.getElementById("content");if(e&&!this._width){const t=e.clientWidth;t&&(this._width=t)}if(e&&!this._height){const t=e.clientHeight;t&&(this._height=t)}}}else this._width=void 0,this._height=void 0;this._filter=t}},{kind:"method",key:"_cardPicked",value:function(e){const t=e.currentTarget.config;(0,p.B)(this,"config-changed",{config:t})}},{kind:"method",key:"_tryCreateCardElement",value:function(e){const t=(0,v.l$)(e);return t.hass=this.hass,t.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rebuildCard(t,e)}),{once:!0}),t}},{kind:"method",key:"_rebuildCard",value:function(e,t){let i;try{i=this._tryCreateCardElement(t)}catch(e){return}e.parentElement&&e.parentElement.replaceChild(i,e)}},{kind:"method",key:"_renderCardElement",value:async function(e,t){let{type:i}=e;const{showElement:s,isCustom:a,name:n,description:d}=e,l=a?(0,y.cs)(i):void 0;let c;a&&(i=`${y.Qo}${i}`);let h=null!=t?t:{type:i};if(this.hass&&this.lovelace&&(t||(h=await(0,g.U)(this.hass,i,this._unusedEntities,this._usedEntities)),s))try{c=this._tryCreateCardElement(h)}catch(e){c=void 0}return r.dy` <div class="card"> <div class="overlay" @click="${this._cardPicked}" .config="${h}"></div> <div class="card-header"> ${l?`${this.hass.localize("ui.panel.lovelace.editor.cardpicker.custom_card")}: ${l.name||l.type}`:n} </div> <div class="preview ${(0,o.$)({description:!c||"HUI-ERROR-CARD"===c.tagName})}"> ${c&&"HUI-ERROR-CARD"!==c.tagName?c:l?l.description||this.hass.localize("ui.panel.lovelace.editor.cardpicker.no_description"):d} </div> </div> `}},{kind:"get",static:!0,key:"styles",value:function(){return[r.iv`search-input{display:block;--mdc-shape-small:var(--card-picker-search-shape);margin:var(--card-picker-search-margin)}.cards-container{display:grid;grid-gap:8px 8px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));margin-top:20px}.card{height:100%;max-width:500px;display:flex;flex-direction:column;border-radius:var(--ha-card-border-radius,12px);background:var(--primary-background-color,#fafafa);cursor:pointer;position:relative;overflow:hidden;border:var(--ha-card-border-width,1px) solid var(--ha-card-border-color,var(--divider-color))}.card-header{color:var(--ha-card-header-color,--primary-text-color);font-family:var(--ha-card-header-font-family, inherit);font-size:16px;font-weight:700;letter-spacing:-.012em;line-height:20px;padding:12px 16px;display:block;text-align:center;background:var(--ha-card-background,var(--card-background-color,#fff));border-bottom:1px solid var(--divider-color)}.preview{pointer-events:none;margin:20px;flex-grow:1;display:flex;align-items:center;justify-content:center}.preview>:first-child{zoom:0.6;display:block;width:100%}.description{text-align:center}.spinner{align-items:center;justify-content:center}.overlay{position:absolute;width:100%;height:100%;z-index:1;box-sizing:border-box;border-radius:var(--ha-card-border-radius,12px)}.manual{max-width:none}`]}}]}}),r.oi);t()}catch(e){t(e)}}))},82432:(e,t,i)=>{i.a(e,(async(e,s)=>{try{i.d(t,{U:()=>n});var a=i(51153),r=e([a]);a=(r.then?(await r)():r)[0];const n=async(e,t,i,s)=>{let r={type:t};const n=await(0,a.Do)(t);if(n&&n.getStubConfig){const t=await n.getStubConfig(e,i,s);r={...r,...t}}return r};s()}catch(e){s(e)}}))},7782:(e,t,i)=>{i.d(t,{C:()=>s});const s=[{type:"alarm-panel",showElement:!0},{type:"button",showElement:!0},{type:"calendar",showElement:!0},{type:"entities",showElement:!0},{type:"entity",showElement:!0},{type:"gauge",showElement:!0},{type:"glance",showElement:!0},{type:"history-graph",showElement:!0},{type:"statistics-graph",showElement:!1},{type:"statistic",showElement:!0},{type:"humidifier",showElement:!0},{type:"light",showElement:!0},{type:"map",showElement:!0},{type:"markdown",showElement:!0},{type:"media-control",showElement:!0},{type:"picture",showElement:!0},{type:"picture-elements",showElement:!0},{type:"picture-entity",showElement:!0},{type:"picture-glance",showElement:!0},{type:"plant-status",showElement:!0},{type:"sensor",showElement:!0},{type:"thermostat",showElement:!0},{type:"weather-forecast",showElement:!0},{type:"area",showElement:!0},{type:"tile",showElement:!0},{type:"conditional"},{type:"entity-filter"},{type:"grid"},{type:"horizontal-stack"},{type:"iframe"},{type:"logbook"},{type:"vertical-stack"},{type:"todo-list"}]}};
//# sourceMappingURL=68175.W9MpKHB-hrI.js.map