export const id=63500;export const ids=[63500];export const modules={74834:(e,t,i)=>{var a=i(17463),n=i(14271),o=i(68144),s=i(79932),r=i(3712);(0,a.Z)([(0,s.Mo)("ha-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[r.W,o.iv`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}`]}]}}),n.Button)},45890:(e,t,i)=>{i.d(t,{A:()=>a});const a=i(68144).iv`.card-config{overflow:auto}ha-switch{padding:16px 6px}.side-by-side{display:flex;align-items:flex-end}.side-by-side>*{flex:1;padding-right:8px}.side-by-side>:last-child{flex:1;padding-right:0}.suffix{margin:0 8px}ha-icon-picker,ha-select,ha-textfield,hui-action-editor{margin-top:8px;display:block}`},55765:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(17463),n=i(34541),o=i(47838),s=i(68144),r=i(79932),l=i(18848),d=i(47181),c=i(32594),u=(i(74535),i(74834),i(10983),i(73366),i(52039),i(9893)),h=i(70651),f=i(12098),m=i(29061),p=i(43059),_=i(24113),v=i(56867),g=i(74240),y=i(51807),b=i(62892),k=i(15795),x=i(27760),C=i(49405),V=i(36625),H=i(50786),$=i(17169),M=i(63405),w=i(33676),A=i(15706),E=i(71582),L=i(76967),T=i(72108),F=e([v,y,b,T]);[v,y,b,T]=F.then?(await F)():F;const j="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",Z="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",S="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 7H9V9H7V7M7 11H9V13H7V11M7 15H9V17H7V15M17 17H11V15H17V17M17 13H11V11H17V13M17 9H11V7H17V9Z",z="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",B="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",I=["alarm-modes","climate-hvac-modes","climate-preset-modes","cover-open-close","cover-position","cover-tilt-position","cover-tilt","fan-speed","humidifier-modes","humidifier-toggle","lawn-mower-commands","light-brightness","light-color-temp","select-options","target-humidity","target-temperature","vacuum-commands","water-heater-operation-modes","numeric-input"],O=new Set(["vacuum-commands","alarm-modes","climate-hvac-modes","humidifier-modes","water-heater-operation-modes","lawn-mower-commands","climate-preset-modes","numeric-input"]),K={"alarm-modes":f.p,"climate-hvac-modes":m.C,"climate-preset-modes":p.v,"cover-open-close":_.C,"cover-position":v.K,"cover-tilt-position":y.z,"cover-tilt":g.g,"fan-speed":b.U,"humidifier-modes":x.v,"humidifier-toggle":k.S,"lawn-mower-commands":C.or,"light-brightness":V.T,"light-color-temp":H.A,"numeric-input":$.L,"target-humidity":w.J,"target-temperature":A.z,"vacuum-commands":E.NA,"water-heater-operation-modes":L.F,"select-options":M.g},P=(0,u.tS)(),U={};P.forEach((e=>{U[e.type]=e}));(0,a.Z)([(0,r.Mo)("hui-card-features-editor")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"features",value:void 0},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"featuresTypes",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"label",value:void 0},{kind:"field",key:"_featuresKeys",value:()=>new WeakMap},{kind:"field",key:"_sortable",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){(0,n.Z)((0,o.Z)(a.prototype),"disconnectedCallback",this).call(this),this._destroySortable()}},{kind:"method",key:"_supportsFeatureType",value:function(e){if(!this.stateObj)return!1;if((0,u.IT)(e)){const t=(0,u.V0)(e),i=U[t];if(null==i||!i.supported)return!0;try{return i.supported(this.stateObj)}catch(e){return!1}}const t=K[e];return!t||t(this.stateObj)}},{kind:"method",key:"_isFeatureTypeEditable",value:function(e){if((0,u.IT)(e)){const t=(0,u.V0)(e),i=U[t];return null==i?void 0:i.configurable}return O.has(e)}},{kind:"method",key:"_getFeatureTypeLabel",value:function(e){if((0,u.IT)(e)){const t=(0,u.V0)(e),i=U[t];return(null==i?void 0:i.name)||e}return this.hass.localize(`ui.panel.lovelace.editor.features.types.${e}.label`)||e}},{kind:"method",key:"_getKey",value:function(e){return this._featuresKeys.has(e)||this._featuresKeys.set(e,Math.random().toString()),this._featuresKeys.get(e)}},{kind:"method",key:"firstUpdated",value:function(){this._createSortable()}},{kind:"method",key:"_getSupportedFeaturesType",value:function(){const e=I.filter((e=>!this.featuresTypes||this.featuresTypes.includes(e))),t=P.map((e=>`${u.Qo}${e.type}`));return e.concat(t).filter((e=>this._supportsFeatureType(e)))}},{kind:"method",key:"render",value:function(){if(!this.features||!this.hass)return s.Ld;const e=this._getSupportedFeaturesType(),t=e.filter((e=>!(0,u.IT)(e))),i=e.filter((e=>(0,u.IT)(e)));return s.dy` <ha-expansion-panel outlined> <h3 slot="header"> <ha-svg-icon .path="${S}"></ha-svg-icon> ${this.hass.localize("ui.panel.lovelace.editor.features.name")} </h3> <div class="content"> ${0===e.length&&0===this.features.length?s.dy` <ha-alert type="info"> ${this.hass.localize("ui.panel.lovelace.editor.features.no_compatible_available")} </ha-alert> `:s.Ld} <div class="features"> ${(0,l.r)(this.features,(e=>this._getKey(e)),((e,t)=>{const i=e.type,a=this._supportsFeatureType(i),n=this._isFeatureTypeEditable(i);return s.dy` <div class="feature"> <div class="handle"> <ha-svg-icon .path="${Z}"></ha-svg-icon> </div> <div class="feature-content"> <div> <span> ${this._getFeatureTypeLabel(i)} </span> ${this.stateObj&&!a?s.dy` <span class="secondary"> ${this.hass.localize("ui.panel.lovelace.editor.features.not_compatible")} </span> `:s.Ld} </div> </div> ${n?s.dy` <ha-icon-button .label="${this.hass.localize("ui.panel.lovelace.editor.features.edit")}" .path="${z}" class="edit-icon" .index="${t}" @click="${this._editFeature}" .disabled="${!a}"></ha-icon-button> `:s.Ld} <ha-icon-button .label="${this.hass.localize("ui.panel.lovelace.editor.features.remove")}" .path="${j}" class="remove-icon" .index="${t}" @click="${this._removeFeature}"></ha-icon-button> </div> `}))} </div> ${e.length>0?s.dy` <ha-button-menu fixed @action="${this._addFeature}" @closed="${c.U}"> <ha-button slot="trigger" outlined .label="${this.hass.localize("ui.panel.lovelace.editor.features.add")}"> <ha-svg-icon .path="${B}" slot="icon"></ha-svg-icon> </ha-button> ${t.map((e=>s.dy` <ha-list-item .value="${e}"> ${this._getFeatureTypeLabel(e)} </ha-list-item> `))} ${t.length>0&&i.length>0?s.dy`<li divider role="separator"></li>`:s.Ld} ${i.map((e=>s.dy` <ha-list-item .value="${e}"> ${this._getFeatureTypeLabel(e)} </ha-list-item> `))} </ha-button-menu> `:s.Ld} </div> </ha-expansion-panel> `}},{kind:"method",key:"_createSortable",value:async function(){const e=(await Promise.all([i.e(56087),i.e(32811)]).then(i.bind(i,32811))).default;this._sortable=new e(this.shadowRoot.querySelector(".features"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:e=>{e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder)},onEnd:e=>{e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder),this._rowMoved(e)}})}},{kind:"method",key:"_destroySortable",value:function(){var e;null===(e=this._sortable)||void 0===e||e.destroy(),this._sortable=void 0}},{kind:"method",key:"_addFeature",value:async function(e){const t=e.detail.index;if(null==t)return;const i=this._getSupportedFeaturesType()[t];if(!i)return;const a=await(0,T.A)(i);let n;n=a&&a.getStubConfig?await a.getStubConfig(this.hass,this.stateObj):{type:i};const o=this.features.concat(n);(0,d.B)(this,"features-changed",{features:o})}},{kind:"method",key:"_rowMoved",value:function(e){if(e.oldIndex===e.newIndex)return;const t=this.features.concat();t.splice(e.newIndex,0,t.splice(e.oldIndex,1)[0]),(0,d.B)(this,"features-changed",{features:t})}},{kind:"method",key:"_removeFeature",value:function(e){const t=e.currentTarget.index,i=this.features.concat();i.splice(t,1),(0,d.B)(this,"features-changed",{features:i})}},{kind:"method",key:"_editFeature",value:function(e){const t=e.currentTarget.index;(0,d.B)(this,"edit-detail-element",{subElementConfig:{index:t,type:"feature",elementConfig:this.features[t]}})}},{kind:"get",static:!0,key:"styles",value:function(){return[h.sortableStyles,s.iv`:host{display:flex!important;flex-direction:column}.content{padding:12px}ha-expansion-panel{display:block;--expansion-panel-content-padding:0;border-radius:6px}h3{margin:0;font-size:inherit;font-weight:inherit}ha-icon,ha-svg-icon{color:var(--secondary-text-color)}ha-button-menu{margin-top:8px}.feature{display:flex;align-items:center}.feature .handle{padding-right:8px;cursor:move;padding-inline-end:8px;padding-inline-start:initial;direction:var(--direction)}.feature .handle>*{pointer-events:none}.feature-content{height:60px;font-size:16px;display:flex;align-items:center;justify-content:space-between;flex-grow:1}.feature-content div{display:flex;flex-direction:column}.edit-icon,.remove-icon{--mdc-icon-button-size:36px;color:var(--secondary-text-color)}.secondary{font-size:12px;color:var(--secondary-text-color)}li[divider]{border-bottom-color:var(--divider-color)}`]}}]}}),s.oi);t()}catch(e){t(e)}}))},63500:(e,t,i)=>{i.a(e,(async(e,a)=>{try{i.r(t),i.d(t,{HuiTileCardEditor:()=>x});var n=i(17463),o=i(68144),s=i(79932),r=i(14516),l=i(38768),d=i(76680),c=i(47181),u=(i(68331),i(22720)),h=i(67984),f=i(85677),m=i(98346),p=i(45890),_=i(55765),v=e([u,h,_]);[u,h,_]=v.then?(await v)():v;const g="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z",y="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z",b=["access_token","available_modes","code_arm_required","code_format","color_modes","device_class","editable","effect_list","entity_id","entity_picture","event_types","fan_modes","fan_speed_list","friendly_name","frontend_stream_type","has_date","has_time","hvac_modes","icon","id","max_color_temp_kelvin","max_mireds","max_temp","max","min_color_temp_kelvin","min_mireds","min_temp","min","mode","operation_list","options","percentage_step","precipitation_unit","preset_modes","pressure_unit","sound_mode_list","source_list","state_class","step","supported_color_modes","supported_features","swing_modes","target_temp_step","temperature_unit","token","unit_of_measurement","visibility_unit","wind_speed_unit","battery_icon","battery_level"],k=(0,l.f0)(m.I,(0,l.Ry)({entity:(0,l.jt)((0,l.Z_)()),name:(0,l.jt)((0,l.Z_)()),icon:(0,l.jt)((0,l.Z_)()),hide_state:(0,l.jt)((0,l.O7)()),state_content:(0,l.jt)((0,l.G0)([(0,l.Z_)(),(0,l.IX)((0,l.Z_)())])),color:(0,l.jt)((0,l.Z_)()),show_entity_picture:(0,l.jt)((0,l.O7)()),vertical:(0,l.jt)((0,l.O7)()),tap_action:(0,l.jt)(f.C),icon_tap_action:(0,l.jt)(f.C),features:(0,l.jt)((0,l.IX)((0,l.Yj)()))}));let x=(0,n.Z)([(0,s.Mo)("hui-tile-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,s.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,s.SB)()],key:"_subElementEditorConfig",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,l.hu)(e,k),this._config=e}},{kind:"field",key:"_schema",value:()=>(0,r.Z)(((e,t,i,a,n)=>{var o;return[{name:"entity",selector:{entity:{}}},{name:"",type:"expandable",iconPath:y,title:e("ui.panel.lovelace.editor.card.tile.appearance"),schema:[{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}},context:{icon_entity:"entity"}},{name:"color",selector:{ui_color:{}}},{name:"show_entity_picture",selector:{boolean:{}}},{name:"vertical",selector:{boolean:{}}},{name:"hide_state",selector:{boolean:{}}}]},...n?[]:[{name:"state_content",selector:{select:{mode:"dropdown",reorder:!0,custom_value:!0,multiple:!0,options:[{label:e("ui.panel.lovelace.editor.card.tile.state_content_options.state"),value:"state"},{label:e("ui.panel.lovelace.editor.card.tile.state_content_options.last-changed"),value:"last-changed"},...Object.keys(null!==(o=null==a?void 0:a.attributes)&&void 0!==o?o:{}).filter((e=>!b.includes(e))).map((e=>({value:e,label:t(a,e)})))]}}}]]},{name:"",type:"expandable",title:e("ui.panel.lovelace.editor.card.tile.actions"),iconPath:g,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"icon_tap_action",selector:{ui_action:{default_action:i?(0,u.y)(i):"more-info"}}}]}]}))},{kind:"field",key:"_context",value:()=>(0,r.Z)((e=>({entity_id:e})))},{kind:"method",key:"render",value:function(){var e,t;if(!this.hass||!this._config)return o.Ld;const i=this._config.entity?this.hass.states[this._config.entity]:void 0,a=this._schema(this.hass.localize,this.hass.formatEntityAttributeName,this._config.entity,i,null!==(e=this._config.hide_state)&&void 0!==e&&e);if(this._subElementEditorConfig)return o.dy` <hui-sub-element-editor .hass="${this.hass}" .config="${this._subElementEditorConfig}" .context="${this._context(this._config.entity)}" @go-back="${this._goBack}" @config-changed="${this.subElementChanged}"> </hui-sub-element-editor> `;const n={...this._config,state_content:(0,d.r)(this._config.state_content)};return o.dy` <ha-form .hass="${this.hass}" .data="${n}" .schema="${a}" .computeLabel="${this._computeLabelCallback}" @value-changed="${this._valueChanged}"></ha-form> <hui-card-features-editor .hass="${this.hass}" .stateObj="${i}" .features="${null!==(t=this._config.features)&&void 0!==t?t:[]}" @features-changed="${this._featuresChanged}" @edit-detail-element="${this._editDetailElement}"></hui-card-features-editor> `}},{kind:"method",key:"_valueChanged",value:function(e){if(e.stopPropagation(),!this._config||!this.hass)return;const t=e.detail.value,i={features:this._config.features,...t};i.hide_state&&delete i.state_content,i.state_content&&(0===i.state_content.length?delete i.state_content:1===i.state_content.length&&(i.state_content=i.state_content[0])),(0,c.B)(this,"config-changed",{config:i})}},{kind:"method",key:"_featuresChanged",value:function(e){if(e.stopPropagation(),!this._config||!this.hass)return;const t=e.detail.features,i={...this._config,features:t};0===t.length&&delete i.features,(0,c.B)(this,"config-changed",{config:i})}},{kind:"method",key:"subElementChanged",value:function(e){if(e.stopPropagation(),!this._config||!this.hass)return;const t=e.detail.config,i=this._config.features?[...this._config.features]:[];t?i[this._subElementEditorConfig.index]=t:(i.splice(this._subElementEditorConfig.index,1),this._goBack()),this._config={...this._config,features:i},this._subElementEditorConfig={...this._subElementEditorConfig,elementConfig:t},(0,c.B)(this,"config-changed",{config:this._config})}},{kind:"method",key:"_editDetailElement",value:function(e){this._subElementEditorConfig=e.detail.subElementConfig}},{kind:"method",key:"_goBack",value:function(){this._subElementEditorConfig=void 0}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"color":case"icon_tap_action":case"show_entity_picture":case"vertical":case"hide_state":case"state_content":return this.hass.localize(`ui.panel.lovelace.editor.card.tile.${e.name}`);default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}}},{kind:"get",static:!0,key:"styles",value:function(){return[p.A,o.iv`.container{display:flex;flex-direction:column}ha-form{display:block;margin-bottom:24px}`]}}]}}),o.oi);a()}catch(e){a(e)}}))}};
//# sourceMappingURL=63500.DeJ1wBo4kbI.js.map