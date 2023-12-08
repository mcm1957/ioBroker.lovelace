export const id=62940;export const ids=[62940];export const modules={57966:(e,i,t)=>{t.d(i,{z:()=>a});const a=e=>(i,t)=>e.includes(i,t)},39197:(e,i,t)=>{t.d(i,{v:()=>n});var a=t(56007),s=t(58831);function n(e,i){const t=(0,s.M)(e.entity_id),n=void 0!==i?i:null==e?void 0:e.state;if(["button","event","input_button","scene"].includes(t))return n!==a.nZ;if((0,a.rk)(n))return!1;if(n===a.PX&&"alert"!==t)return!1;switch(t){case"alarm_control_panel":return"disarmed"!==n;case"alert":return"idle"!==n;case"cover":return"closed"!==n;case"device_tracker":case"person":return"not_home"!==n;case"lawn_mower":return["mowing","error"].includes(n);case"lock":return"locked"!==n;case"media_player":return"standby"!==n;case"vacuum":return!["idle","docked","paused"].includes(n);case"plant":return"problem"===n;case"group":return["on","home","open","locked","problem"].includes(n);case"timer":return"active"===n;case"camera":return"streaming"===n}return!0}},50768:(e,i,t)=>{t.d(i,{G:()=>r});var a=t(49706),s=t(58831),n=t(47772);const r=e=>e?(0,n.K)((0,s.M)(e.entity_id),e):a.Rb},84627:(e,i,t)=>{t.d(i,{T:()=>s});const a=/^(\w+)\.(\w+)$/,s=e=>a.test(e)},50424:(e,i,t)=>{t.d(i,{n:()=>a});const a=(e,i)=>{const t=new Promise(((i,t)=>{setTimeout((()=>{t(`Timed out in ${e} ms.`)}),e)}));return Promise.race([i,t])}},35703:(e,i,t)=>{var a=t(17463),s=t(68144),n=t(79932),r=t(14516),d=t(47181),o=t(84627);t(74535);(0,a.Z)([(0,n.Mo)("ha-entities-picker")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"value",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-unit-of-measurement"})],key:"includeUnitOfMeasurement",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"include-entities"})],key:"includeEntities",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Array,attribute:"exclude-entities"})],key:"excludeEntities",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"picked-entity-label"})],key:"pickedEntityLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:"pick-entity-label"})],key:"pickEntityLabel",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"entityFilter",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass)return s.Ld;const e=this._currentEntities;return s.dy` ${e.map((e=>s.dy` <div> <ha-entity-picker allow-custom-entity .curValue="${e}" .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this.excludeEntities}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this._getEntityFilter(this.value,this.entityFilter)}" .value="${e}" .label="${this.pickedEntityLabel}" .disabled="${this.disabled}" @value-changed="${this._entityChanged}"></ha-entity-picker> </div> `))} <div> <ha-entity-picker allow-custom-entity .hass="${this.hass}" .includeDomains="${this.includeDomains}" .excludeDomains="${this.excludeDomains}" .includeEntities="${this.includeEntities}" .excludeEntities="${this.excludeEntities}" .includeDeviceClasses="${this.includeDeviceClasses}" .includeUnitOfMeasurement="${this.includeUnitOfMeasurement}" .entityFilter="${this._getEntityFilter(this.value,this.entityFilter)}" .label="${this.pickEntityLabel}" .helper="${this.helper}" .disabled="${this.disabled}" .required="${this.required&&!e.length}" @value-changed="${this._addEntity}"></ha-entity-picker> </div> `}},{kind:"field",key:"_getEntityFilter",value:()=>(0,r.Z)(((e,i)=>t=>(!e||!e.includes(t.entity_id))&&(!i||i(t))))},{kind:"get",key:"_currentEntities",value:function(){return this.value||[]}},{kind:"method",key:"_updateEntities",value:async function(e){this.value=e,(0,d.B)(this,"value-changed",{value:e})}},{kind:"method",key:"_entityChanged",value:function(e){e.stopPropagation();const i=e.currentTarget.curValue,t=e.detail.value;if(t===i||void 0!==t&&!(0,o.T)(t))return;const a=this._currentEntities;t&&!a.includes(t)?this._updateEntities(a.map((e=>e===i?t:e))):this._updateEntities(a.filter((e=>e!==i)))}},{kind:"method",key:"_addEntity",value:async function(e){e.stopPropagation();const i=e.detail.value;if(!i)return;if(e.currentTarget.value="",!i)return;const t=this._currentEntities;t.includes(i)||this._updateEntities([...t,i])}},{kind:"field",static:!0,key:"styles",value:()=>s.iv`div{margin-top:8px}`}]}}),s.oi)},83927:(e,i,t)=>{var a=t(17463),s=t(8485),n=t(92038),r=t(68144),d=t(79932),o=t(47181);(0,a.Z)([(0,d.Mo)("ha-formfield")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"method",key:"_labelClick",value:function(){const e=this.input;if(e&&(e.focus(),!e.disabled))switch(e.tagName){case"HA-CHECKBOX":e.checked=!e.checked,(0,o.B)(e,"change");break;case"HA-RADIO":e.checked=!0,(0,o.B)(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value:()=>[n.W,r.iv`:host(:not([alignEnd])) ::slotted(ha-switch){margin-right:10px;margin-inline-end:10px;margin-inline-start:inline}.mdc-form-field>label{direction:var(--direction);margin-inline-start:0;margin-inline-end:auto;padding-inline-start:4px;padding-inline-end:0}`]}]}}),s.a)},81312:(e,i,t)=>{var a=t(17463),s=t(34541),n=t(47838),r=t(68144),d=t(79932),o=t(47181),c=t(38346),l=t(49594),h=t(82160),u=t(50424);const f=JSON.parse('{"version":"7.3.67","parts":[{"file":"58ce751bfb601c28addea4dbdfee24226e4e26b1"},{"start":"account-switch-","file":"6fe9065fea10add5c0c6e48354166d037ac50b20"},{"start":"alpha-t-c","file":"d7d106c388bfda2f151cc05b575c6407a2321358"},{"start":"arrow-down-box","file":"07d46da6788757104d63cc6dfd69a5574fa9ea0e"},{"start":"bac","file":"a69c2429be94dc38246377a9f0b8bb0d7208c49a"},{"start":"battery-mi","file":"a4bd09088298857870205aad48d71ef5ecf14162"},{"start":"bo","file":"ea1b8f25379b641ca6ab4a89b3bb012a1898f125"},{"start":"briefcase-d","file":"a488fc5c297ba0d1eab0b7550c859ba5eb332d64"},{"start":"calendar-st","file":"a0916c7eca5a3e1154f040f8e1131481f554470b"},{"start":"car-ou","file":"4530f3f42b83c2fd05d41beb9ed32394dd236b86"},{"start":"cellphone-me","file":"18001e19a5b2dc0aa3829423dbe7a8cfcb3faedf"},{"start":"city-variant-","file":"8cf347559af0ec77cb1a1fbc9cf4f26c71e199a2"},{"start":"cloud-d","file":"aa0ca15dca285dcaf2d68fc1905a5886bff8e737"},{"start":"cog-sync-","file":"12d257426150b4727a785f64ace3cda63ad0837d"},{"start":"cookie-o","file":"e9a86cfd4033dbb9152bc25846a327e0272f8867"},{"start":"currency-tr","file":"5131d4536a8d7f548abb80d0ce20e6b8ef3da456"},{"start":"det","file":"d84e77bed2fec3dded9590d3a223f90a77850404"},{"start":"e","file":"c50a17e014e7dc1dda66612c9f4262e362046942"},{"start":"emoticon-r","file":"fa93bbb9f394ae9dad00dd24d63b2b8abc51eb57"},{"start":"fan-o","file":"fcf07b2bb103855d7881ea7785be0d9356a91169"},{"start":"file-set","file":"9e3206e4b3fc6a9516d852501f2a0f2d87dc38be"},{"start":"flip-t","file":"b732f8191887ed827ee9522c5be6e2b313d41a93"},{"start":"football-h","file":"a2953da9f03edc844d932976096ab3d6bb700b03"},{"start":"gas-station-","file":"5e9382d02a8816f0580987453669f4984e890764"},{"start":"google-s","file":"7fbeae05187b80048f4e6c8b15b417b8b915f31e"},{"start":"head-l","file":"6a014f724c5e039ebab09a43fda1b86b0a6d5b60"},{"start":"home-v","file":"a9431e7dae87b1867647a2f84c24c587aace2901"},{"start":"incognito-o","file":"43bf39792d61eb1233b56e4c27063ba787a6abc3"},{"start":"l","file":"be619036639cbb2a4eeee0ec39f4d180e8b1b61b"},{"start":"lightbulb-night-","file":"341f70f7b271dfb175d02bf888b28d235a4e76c5"},{"start":"map-clock-","file":"5415140032324eb36efbb9ff4a1c1620e1e09cee"},{"start":"microsoft-p","file":"2b3ac173c56a374495f6832c5bba32ae886e6cff"},{"start":"movie-open-plu","file":"a748347ba838db9f493261933486ee2b5ab8edb6"},{"start":"numeric-10-c","file":"137c0b16170d81671cd5515981f45eb52f661fd9"},{"start":"palette-s","file":"5de2e50c3ff206321071caf8d66f586be45bb9eb"},{"start":"phone-bluetooth-","file":"f634d315e85b52f05338ef94afa5e177506646e6"},{"start":"podi","file":"40f323ce90754fd2fe1ae5943ede7eec7cd415d8"},{"start":"puzzle-heart-","file":"96951c0eed3f62d2b9e964426dc5b62c3a9a66f8"},{"start":"relation-only-one-to-zero-or-o","file":"e256296bf39da5bdf1542ade4bbf8c7787d0c771"},{"start":"run","file":"63c07fd3a05a51a8ee8793a9493003ab03a55b26"},{"start":"set-left-","file":"3f22521dc9253cfc8b6d5e27e572a54a947006db"},{"start":"size-xxs","file":"8f8ad2f98fec00bb74b733c7f3104c0bf54451c5"},{"start":"sort-v","file":"504b0477945091d0dec0a1019ea3e84381d94dd5"},{"start":"sticker-ci","file":"c07c3d33aa7ce443bd3d45dffd88627e778b3bc9"},{"start":"sync","file":"6aaa668c62e648ba83547c2a6a966860dcfabfc4"},{"start":"tex","file":"ca7c219223cc867e80ab379ac7315629a2e75538"},{"start":"timer-st","file":"4ca8681e7117bc34e70f0ad97faee59dfd121cae"},{"start":"truck-ou","file":"015c125a80491ef47bab3cd6c3cd481b20ebf9da"},{"start":"view-d","file":"63b32ed0ba333f1070f0f113cbf4581879e43ebc"},{"start":"weather-night-","file":"555b752999d9858994f4eb2e289a8e7144951ec0"},{"start":"wifi-st","file":"20dbfd4ce7231736e91b0360b85a857d47407ba7"}]}'),p=(0,h.MT)("hass-icon-db","mdi-icon-store"),v=["mdi","hass","hassio","hademo"];let m=[];t(52039);const _={},b={};(async()=>{const e=await(0,h.U2)("_version",p);e?e!==f.version&&(await(0,h.ZH)(p),(0,h.t8)("_version",f.version,p)):(0,h.t8)("_version",f.version,p)})();const y=(0,c.D)((()=>(async e=>{const i=Object.keys(e),t=await Promise.all(Object.values(e));p("readwrite",(a=>{t.forEach(((t,s)=>{Object.entries(t).forEach((([e,i])=>{a.put(i,e)})),delete e[i[s]]}))}))})(b)),2e3),k={};(0,a.Z)([(0,d.Mo)("ha-icon")],(function(e,i){class a extends i{constructor(...i){super(...i),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,d.Cb)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_path",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_secondaryPath",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_viewBox",value:void 0},{kind:"field",decorators:[(0,d.SB)()],key:"_legacy",value:()=>!1},{kind:"method",key:"willUpdate",value:function(e){(0,s.Z)((0,n.Z)(a.prototype),"willUpdate",this).call(this,e),e.has("icon")&&(this._path=void 0,this._secondaryPath=void 0,this._viewBox=void 0,this._loadIcon())}},{kind:"method",key:"render",value:function(){return this.icon?this._legacy?r.dy` <iron-icon .icon="${this.icon}"></iron-icon>`:r.dy`<ha-svg-icon .path="${this._path}" .secondaryPath="${this._secondaryPath}" .viewBox="${this._viewBox}"></ha-svg-icon>`:r.Ld}},{kind:"method",key:"_loadIcon",value:async function(){if(!this.icon)return;const e=this.icon,[i,a]=this.icon.split(":",2);let s,n=a;if(!i||!n)return;if(!v.includes(i)){const t=l.g[i];return t?void(t&&"function"==typeof t.getIcon&&this._setCustomPath(t.getIcon(n),e)):void(this._legacy=!0)}if(this._legacy=!1,n in _){const e=_[n];let t;e.newName?(t=`Icon ${i}:${n} was renamed to ${i}:${e.newName}, please change your config, it will be removed in version ${e.removeIn}.`,n=e.newName):t=`Icon ${i}:${n} was removed from MDI, please replace this icon with an other icon in your config, it will be removed in version ${e.removeIn}.`,console.warn(t),(0,o.B)(this,"write_log",{level:"warning",message:t})}if(n in k)return void(this._path=k[n]);if("home-assistant"===n){const i=(await t.e(30008).then(t.bind(t,30008))).mdiHomeAssistant;return this.icon===e&&(this._path=i),void(k[n]=i)}try{s=await(e=>new Promise(((i,t)=>{m.push([e,i,t]),m.length>1||(0,u.n)(1e3,p("readonly",(e=>{for(const[i,t,a]of m)(0,h.RV)(e.get(i)).then((e=>t(e))).catch((e=>a(e)));m=[]}))).catch((e=>{for(const[,,i]of m)i(e);m=[]}))})))(n)}catch(e){s=void 0}if(s)return this.icon===e&&(this._path=s),void(k[n]=s);const r=(e=>{let i;for(const t of f.parts){if(void 0!==t.start&&e<t.start)break;i=t}return i.file})(n);if(r in b)return void this._setPath(b[r],n,e);const d=fetch(`/static/mdi/${r}.json`).then((e=>e.json()));b[r]=d,this._setPath(d,n,e),y()}},{kind:"method",key:"_setCustomPath",value:async function(e,i){const t=await e;this.icon===i&&(this._path=t.path,this._secondaryPath=t.secondaryPath,this._viewBox=t.viewBox)}},{kind:"method",key:"_setPath",value:async function(e,i,t){const a=await e;this.icon===t&&(this._path=a[i]),k[i]=a[i]}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`:host{fill:currentcolor}`}}]}}),r.oi)},73366:(e,i,t)=>{t.d(i,{M:()=>l});var a=t(17463),s=t(34541),n=t(47838),r=t(61092),d=t(96762),o=t(68144),c=t(79932);let l=(0,a.Z)([(0,c.Mo)("ha-list-item")],(function(e,i){class t extends i{constructor(...i){super(...i),e(this)}}return{F:t,d:[{kind:"method",key:"renderRipple",value:function(){return this.noninteractive?"":(0,s.Z)((0,n.Z)(t.prototype),"renderRipple",this).call(this)}},{kind:"get",static:!0,key:"styles",value:function(){return[d.W,o.iv`:host{padding-left:var(--mdc-list-side-padding-left,var(--mdc-list-side-padding,20px));padding-right:var(--mdc-list-side-padding-right,var(--mdc-list-side-padding,20px))}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:48px}span.material-icons:first-of-type{margin-inline-start:0px!important;margin-inline-end:var(--mdc-list-item-graphic-margin,16px)!important;direction:var(--direction)}span.material-icons:last-of-type{margin-inline-start:auto!important;margin-inline-end:0px!important;direction:var(--direction)}.mdc-deprecated-list-item__meta{display:var(--mdc-list-item-meta-display);align-items:center}:host([multiline-secondary]){height:auto}:host([multiline-secondary]) .mdc-deprecated-list-item__text{padding:8px 0}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text{text-overflow:initial;white-space:normal;overflow:auto;display:inline-block;margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text{margin-top:10px}:host([multiline-secondary]) .mdc-deprecated-list-item__secondary-text::before{display:none}:host([multiline-secondary]) .mdc-deprecated-list-item__primary-text::before{display:none}:host([disabled]){color:var(--disabled-text-color)}:host([noninteractive]){pointer-events:unset}`]}}]}}),r.K)},87037:(e,i,t)=>{var a=t(17463),s=t(68144),n=t(79932),r=t(50768);t(81312),t(52039);(0,a.Z)([(0,n.Mo)("ha-state-icon")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"state",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){var e,i;return this.icon||null!==(e=this.state)&&void 0!==e&&e.attributes.icon?s.dy`<ha-icon .icon="${this.icon||(null===(i=this.state)||void 0===i?void 0:i.attributes.icon)}"></ha-icon>`:s.dy`<ha-svg-icon .path="${(0,r.G)(this.state)}"></ha-svg-icon>`}}]}}),s.oi)},22814:(e,i,t)=>{t.d(i,{Cp:()=>r,TZ:()=>d,W2:()=>n,YY:()=>o,iI:()=>s,oT:()=>a});const a=e=>e.map((e=>{if("string"!==e.type)return e;switch(e.name){case"username":return{...e,autocomplete:"username"};case"password":return{...e,autocomplete:"current-password"};case"code":return{...e,autocomplete:"one-time-code"};default:return e}})),s=(e,i)=>e.callWS({type:"auth/sign_path",path:i}),n=async(e,i,t,a)=>e.callWS({type:"config/auth_provider/homeassistant/create",user_id:i,username:t,password:a}),r=(e,i,t)=>e.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:i,new_password:t}),d=(e,i,t)=>e.callWS({type:"config/auth_provider/homeassistant/admin_change_password",user_id:i,password:t}),o=e=>e.callWS({type:"auth/delete_all_refresh_tokens"})},49594:(e,i,t)=>{t.d(i,{g:()=>r});const a=window;"customIconsets"in a||(a.customIconsets={});const s=a.customIconsets,n=window;"customIcons"in n||(n.customIcons={});const r=new Proxy(n.customIcons,{get:(e,i)=>{var t;return null!==(t=e[i])&&void 0!==t?t:s[i]?{getIcon:s[i]}:void 0}})},56007:(e,i,t)=>{t.d(i,{PX:()=>r,V_:()=>d,lz:()=>n,nZ:()=>s,rk:()=>c});var a=t(57966);const s="unavailable",n="unknown",r="off",d=[s,n],o=[s,n,r],c=(0,a.z)(d);(0,a.z)(o)},32589:(e,i,t)=>{t.r(i);var a=t(17463),s=(t(14271),t(68144)),n=t(79932),r=t(14516),d=(t(35703),t(34821)),o=(t(83927),t(20729),t(3555),t(65253)),c=t(26765),l=t(11654),h=t(27322),u=t(91188),f=t(45917);const p=["device_tracker"],v={round:!0,quality:.75,aspectRatio:1};let m=(0,a.Z)(null,(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_userId",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_user",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_isAdmin",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_localOnly",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_deviceTrackers",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_picture",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,n.SB)()],key:"_submitting",value:()=>!1},{kind:"field",decorators:[(0,n.SB)()],key:"_personExists",value:()=>!1},{kind:"field",key:"_deviceTrackersAvailable",value:()=>(0,r.Z)((e=>Object.keys(e.states).some((e=>"device_tracker"===e.substr(0,e.indexOf("."))))))},{kind:"method",key:"showDialog",value:async function(e){var i,t;(this._params=e,this._error=void 0,this._params.entry)?(this._personExists=!0,this._name=this._params.entry.name||"",this._userId=this._params.entry.user_id||void 0,this._deviceTrackers=this._params.entry.device_trackers||[],this._picture=this._params.entry.picture||null,this._user=this._userId?this._params.users.find((e=>e.id===this._userId)):void 0,this._isAdmin=null===(i=this._user)||void 0===i?void 0:i.group_ids.includes(o.Pb),this._localOnly=null===(t=this._user)||void 0===t?void 0:t.local_only):(this._personExists=!1,this._name="",this._userId=void 0,this._user=void 0,this._isAdmin=void 0,this._localOnly=void 0,this._deviceTrackers=[],this._picture=null);await this.updateComplete}},{kind:"method",key:"render",value:function(){var e,i;if(!this._params)return s.Ld;const t=""===this._name.trim();return s.dy` <ha-dialog open @closed="${this._close}" scrimClickAction escapeKeyAction .heading="${(0,d.i)(this.hass,this._params.entry?this._params.entry.name:this.hass.localize("ui.panel.config.person.detail.new_person"))}"> <div> ${this._error?s.dy` <div class="error">${this._error}</div> `:""} <div class="form"> <ha-textfield dialogInitialFocus .value="${this._name}" @input="${this._nameChanged}" label="${this.hass.localize("ui.panel.config.person.detail.name")}" .validationMessage="${this.hass.localize("ui.panel.config.person.detail.name_error_msg")}" required></ha-textfield> <ha-picture-upload .hass="${this.hass}" .value="${this._picture}" crop .cropOptions="${v}" @change="${this._pictureChanged}"></ha-picture-upload> <ha-formfield .label="${this.hass.localize("ui.panel.config.person.detail.allow_login")}"> <ha-switch @change="${this._allowLoginChanged}" .disabled="${this._user&&(this._user.id===(null===(e=this.hass.user)||void 0===e?void 0:e.id)||this._user.system_generated||this._user.is_owner)}" .checked="${this._userId}"></ha-switch> </ha-formfield> ${this._user?s.dy`<ha-formfield .label="${this.hass.localize("ui.panel.config.person.detail.local_only")}"> <ha-switch .checked="${this._localOnly}" @change="${this._localOnlyChanged}"> </ha-switch> </ha-formfield> <ha-formfield .label="${this.hass.localize("ui.panel.config.person.detail.admin")}"> <ha-switch .disabled="${this._user.system_generated||this._user.is_owner}" .checked="${this._isAdmin}" @change="${this._adminChanged}"> </ha-switch> </ha-formfield>`:""} ${this._deviceTrackersAvailable(this.hass)?s.dy` <p> ${this.hass.localize("ui.panel.config.person.detail.device_tracker_intro")} </p> <ha-entities-picker .hass="${this.hass}" .value="${this._deviceTrackers}" .includeDomains="${p}" .pickedEntityLabel="${this.hass.localize("ui.panel.config.person.detail.device_tracker_picked")}" .pickEntityLabel="${this.hass.localize("ui.panel.config.person.detail.device_tracker_pick")}" @value-changed="${this._deviceTrackersChanged}"> </ha-entities-picker> `:s.dy` <p> ${this.hass.localize("ui.panel.config.person.detail.no_device_tracker_available_intro")} </p> <ul> <li> <a href="${(0,h.R)(this.hass,"/integrations/#presence-detection")}" target="_blank" rel="noreferrer">${this.hass.localize("ui.panel.config.person.detail.link_presence_detection_integrations")}</a> </li> <li> <a @click="${this._closeDialog}" href="/config/integrations"> ${this.hass.localize("ui.panel.config.person.detail.link_integrations_page")}</a> </li> </ul> `} </div> </div> ${this._params.entry?s.dy` <mwc-button slot="secondaryAction" class="warning" @click="${this._deleteEntry}" .disabled="${this._user&&this._user.is_owner||this._submitting}"> ${this.hass.localize("ui.panel.config.person.detail.delete")} </mwc-button> ${this._user&&null!==(i=this.hass.user)&&void 0!==i&&i.is_owner?s.dy`<mwc-button slot="secondaryAction" @click="${this._changePassword}"> ${this.hass.localize("ui.panel.config.users.editor.change_password")} </mwc-button>`:""} `:s.Ld} <mwc-button slot="primaryAction" @click="${this._updateEntry}" .disabled="${t||this._submitting}"> ${this._params.entry?this.hass.localize("ui.panel.config.person.detail.update"):this.hass.localize("ui.panel.config.person.detail.create")} </mwc-button> </ha-dialog> `}},{kind:"method",key:"_closeDialog",value:function(){this._params=void 0}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._name=e.target.value}},{kind:"method",key:"_adminChanged",value:function(e){this._isAdmin=e.target.checked}},{kind:"method",key:"_localOnlyChanged",value:function(e){this._localOnly=e.target.checked}},{kind:"method",key:"_allowLoginChanged",value:async function(e){const i=e.target;if(i.checked)i.checked=!1,(0,u.G)(this,{userAddedCallback:async e=>{var t;e&&(i.checked=!0,this._user=e,this._userId=e.id,this._isAdmin=e.group_ids.includes(o.Pb),this._localOnly=e.local_only,null===(t=this._params)||void 0===t||t.refreshUsers())},name:this._name});else if(this._userId){var t;if(!await(0,c.showConfirmationDialog)(this,{text:this.hass.localize("ui.panel.config.person.detail.confirm_delete_user",{name:this._name}),confirmText:this.hass.localize("ui.panel.config.person.detail.delete"),dismissText:this.hass.localize("ui.common.cancel")}))return void(i.checked=!0);await(0,o.h8)(this.hass,this._userId),null===(t=this._params)||void 0===t||t.refreshUsers(),this._userId=void 0}}},{kind:"method",key:"_deviceTrackersChanged",value:function(e){this._error=void 0,this._deviceTrackers=e.detail.value}},{kind:"method",key:"_pictureChanged",value:function(e){this._error=void 0,this._picture=e.target.value}},{kind:"method",key:"_changePassword",value:async function(){if(!this._user)return;this._user.credentials.find((e=>"homeassistant"===e.type))?(0,f.o)(this,{userId:this._user.id}):(0,c.showAlertDialog)(this,{title:"No ioBroker credentials found."})}},{kind:"method",key:"_updateEntry",value:async function(){this._submitting=!0;try{var e,i,t,a;if(this._userId&&this._name!==(null===(e=this._params.entry)||void 0===e?void 0:e.name)||this._isAdmin!==(null===(i=this._user)||void 0===i?void 0:i.group_ids.includes(o.Pb))||this._localOnly!==(null===(t=this._user)||void 0===t?void 0:t.local_only))await(0,o.Nq)(this.hass,this._userId,{name:this._name.trim(),group_ids:[this._isAdmin?o.Pb:o.CE],local_only:this._localOnly}),null===(a=this._params)||void 0===a||a.refreshUsers();const s={name:this._name.trim(),device_trackers:this._deviceTrackers,user_id:this._userId||null,picture:this._picture};this._params.entry?await this._params.updateEntry(s):(await this._params.createEntry(s),this._personExists=!0),this._params=void 0}catch(e){this._error=e?e.message:"Unknown error"}finally{this._submitting=!1}}},{kind:"method",key:"_deleteEntry",value:async function(){this._submitting=!0;try{await this._params.removeEntry()&&(this._params.entry.user_id&&(0,o.h8)(this.hass,this._params.entry.user_id),this._params=void 0)}finally{this._submitting=!1}}},{kind:"method",key:"_close",value:function(){var e;!this._personExists&&this._userId&&((0,o.h8)(this.hass,this._userId),null===(e=this._params)||void 0===e||e.refreshUsers(),this._userId=void 0);this._params=void 0}},{kind:"get",static:!0,key:"styles",value:function(){return[l.yu,s.iv`ha-picture-upload,ha-textfield{display:block}ha-picture-upload{margin-bottom:16px;--file-upload-image-border-radius:50%}ha-formfield{display:block;padding:16px 0}a{color:var(--primary-color)}p{color:var(--primary-text-color)}`]}}]}}),s.oi);customElements.define("dialog-person-detail",m)},91188:(e,i,t)=>{t.d(i,{G:()=>n});var a=t(47181);const s=()=>Promise.all([t.e(28597),t.e(50529),t.e(52562),t.e(74898)]).then(t.bind(t,74898)),n=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-add-user",dialogImport:s,dialogParams:i})}},45917:(e,i,t)=>{t.d(i,{o:()=>n});var a=t(47181);const s=()=>Promise.all([t.e(68331),t.e(39285)]).then(t.bind(t,52431)),n=(e,i)=>{(0,a.B)(e,"show-dialog",{dialogTag:"dialog-admin-change-password",dialogImport:s,dialogParams:i})}}};
//# sourceMappingURL=62940.t_xWCcMjuWY.js.map