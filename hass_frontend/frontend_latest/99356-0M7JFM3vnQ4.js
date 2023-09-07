/*! For license information please see 99356-0M7JFM3vnQ4.js.LICENSE.txt */
export const id=99356;export const ids=[99356];export const modules={30879:(e,r,i)=>{i.d(r,{D:()=>p});var o=i(43204),t=i(79932),a=i(38103),s=i(68144),c=i(83448),n=i(30153),l=i(47501);class d extends s.oi{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1}open(){this.closed=!1}close(){this.closed=!0}render(){const e={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},r=48+4*this.density,i={width:`${r}px`,height:`${r}px`};return s.dy` <div class="mdc-circular-progress ${(0,c.$)(e)}" style="${(0,l.V)(i)}" role="progressbar" aria-label="${(0,n.o)(this.ariaLabel)}" aria-valuemin="0" aria-valuemax="1" aria-valuenow="${(0,n.o)(this.indeterminate?void 0:this.progress)}"> ${this.renderDeterminateContainer()} ${this.renderIndeterminateContainer()} </div>`}renderDeterminateContainer(){const e=48+4*this.density,r=e/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,o=6.2831852*i,t=(1-this.progress)*o,a=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return s.dy` <div class="mdc-circular-progress__determinate-container"> <svg class="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle class="mdc-circular-progress__determinate-track" cx="${r}" cy="${r}" r="${i}" stroke-width="${a}"></circle> <circle class="mdc-circular-progress__determinate-circle" cx="${r}" cy="${r}" r="${i}" stroke-dasharray="${6.2831852*i}" stroke-dashoffset="${t}" stroke-width="${a}"></circle> </svg> </div>`}renderIndeterminateContainer(){return s.dy` <div class="mdc-circular-progress__indeterminate-container"> <div class="mdc-circular-progress__spinner-layer"> ${this.renderIndeterminateSpinnerLayer()} </div> </div>`}renderIndeterminateSpinnerLayer(){const e=48+4*this.density,r=e/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,o=6.2831852*i,t=.5*o,a=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return s.dy` <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${r}" cy="${r}" r="${i}" stroke-dasharray="${o}" stroke-dashoffset="${t}" stroke-width="${a}"></circle> </svg> </div> <div class="mdc-circular-progress__gap-patch"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${r}" cy="${r}" r="${i}" stroke-dasharray="${o}" stroke-dashoffset="${t}" stroke-width="${.8*a}"></circle> </svg> </div> <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right"> <svg class="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 ${e} ${e}"> <circle cx="${r}" cy="${r}" r="${i}" stroke-dasharray="${o}" stroke-dashoffset="${t}" stroke-width="${a}"></circle> </svg> </div>`}update(e){super.update(e),e.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}(0,o.__decorate)([(0,t.Cb)({type:Boolean,reflect:!0})],d.prototype,"indeterminate",void 0),(0,o.__decorate)([(0,t.Cb)({type:Number,reflect:!0})],d.prototype,"progress",void 0),(0,o.__decorate)([(0,t.Cb)({type:Number,reflect:!0})],d.prototype,"density",void 0),(0,o.__decorate)([(0,t.Cb)({type:Boolean,reflect:!0})],d.prototype,"closed",void 0),(0,o.__decorate)([a.L,(0,t.Cb)({type:String,attribute:"aria-label"})],d.prototype,"ariaLabel",void 0);const u=s.iv`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary,#6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0s cubic-bezier(.4,0,.6,1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0s cubic-bezier(0,0,.2,1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.568s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color,transparent)}`;let p=class extends d{};p.styles=[u],p=(0,o.__decorate)([(0,t.Mo)("mwc-circular-progress")],p)},63864:(e,r,i)=>{i.d(r,{I:()=>o});const o=(e,r,i,o)=>{const[t,a,s]=e.split(".",3);return Number(t)>r||Number(t)===r&&(void 0===o?Number(a)>=i:Number(a)>i)||void 0!==o&&Number(t)===r&&Number(a)===i&&Number(s)>=o}},68307:(e,r,i)=>{i.d(r,{K:()=>o});const o=e=>{switch(null==e?void 0:e.language){case"cz":case"de":case"fi":case"fr":case"sk":case"sv":return" ";default:return""}}},54736:(e,r,i)=>{var o=i(17463),t=i(68144),a=i(79932);(0,o.Z)([(0,a.Mo)("ha-ansi-to-html")],(function(e,r){return{F:class extends r{constructor(...r){super(...r),e(this)}},d:[{kind:"field",decorators:[(0,a.Cb)()],key:"content",value:void 0},{kind:"method",key:"render",value:function(){return t.dy`${this._parseTextToColoredPre(this.content)}`}},{kind:"get",static:!0,key:"styles",value:function(){return t.iv`pre{overflow-x:auto;white-space:pre-wrap;overflow-wrap:break-word}.bold{font-weight:700}.italic{font-style:italic}.underline{text-decoration:underline}.strikethrough{text-decoration:line-through}.underline.strikethrough{text-decoration:underline line-through}.fg-red{color:var(--error-color)}.fg-green{color:var(--success-color)}.fg-yellow{color:var(--warning-color)}.fg-blue{color:var(--info-color)}.fg-magenta{color:#762671}.fg-cyan{color:#2cb5e9}.fg-white{color:#ccc}.bg-black{background-color:#000}.bg-red{background-color:var(--error-color)}.bg-green{background-color:var(--success-color)}.bg-yellow{background-color:var(--warning-color)}.bg-blue{background-color:var(--info-color)}.bg-magenta{background-color:#762671}.bg-cyan{background-color:#2cb5e9}.bg-white{background-color:#ccc}`}},{kind:"method",key:"_parseTextToColoredPre",value:function(e){const r=document.createElement("pre"),i=/\033(?:\[(.*?)[@-~]|\].*?(?:\007|\033\\))/g;let o=0;const t={bold:!1,italic:!1,underline:!1,strikethrough:!1,foregroundColor:null,backgroundColor:null},a=e=>{const i=document.createElement("span");t.bold&&i.classList.add("bold"),t.italic&&i.classList.add("italic"),t.underline&&i.classList.add("underline"),t.strikethrough&&i.classList.add("strikethrough"),null!==t.foregroundColor&&i.classList.add(`fg-${t.foregroundColor}`),null!==t.backgroundColor&&i.classList.add(`bg-${t.backgroundColor}`),i.appendChild(document.createTextNode(e)),r.appendChild(i)};let s;for(;null!==(s=i.exec(e));){const r=s.index;a(e.substring(o,r)),o=r+s[0].length,void 0!==s[1]&&s[1].split(";").forEach((e=>{switch(parseInt(e,10)){case 0:t.bold=!1,t.italic=!1,t.underline=!1,t.strikethrough=!1,t.foregroundColor=null,t.backgroundColor=null;break;case 1:t.bold=!0;break;case 3:t.italic=!0;break;case 4:t.underline=!0;break;case 9:t.strikethrough=!0;break;case 22:t.bold=!1;break;case 23:t.italic=!1;break;case 24:t.underline=!1;break;case 29:t.strikethrough=!1;break;case 30:case 39:t.foregroundColor=null;break;case 31:t.foregroundColor="red";break;case 32:t.foregroundColor="green";break;case 33:t.foregroundColor="yellow";break;case 34:t.foregroundColor="blue";break;case 35:t.foregroundColor="magenta";break;case 36:t.foregroundColor="cyan";break;case 37:t.foregroundColor="white";break;case 40:t.backgroundColor="black";break;case 41:t.backgroundColor="red";break;case 42:t.backgroundColor="green";break;case 43:t.backgroundColor="yellow";break;case 44:t.backgroundColor="blue";break;case 45:t.backgroundColor="magenta";break;case 46:t.backgroundColor="cyan";break;case 47:t.backgroundColor="white";break;case 49:t.backgroundColor=null}}))}return a(e.substring(o)),r}}]}}),t.oi)},31206:(e,r,i)=>{var o=i(17463),t=i(34541),a=i(47838),s=i(30879),c=i(68144),n=i(79932);(0,o.Z)([(0,n.Mo)("ha-circular-progress")],(function(e,r){class i extends r{constructor(...r){super(...r),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"active",value:()=>!1},{kind:"field",decorators:[(0,n.Cb)()],key:"alt",value:()=>"Loading"},{kind:"field",decorators:[(0,n.Cb)()],key:"size",value:()=>"medium"},{kind:"set",key:"density",value:function(e){}},{kind:"get",key:"density",value:function(){switch(this.size){case"tiny":return-8;case"small":return-5;case"medium":default:return 0;case"large":return 5}}},{kind:"set",key:"indeterminate",value:function(e){}},{kind:"get",key:"indeterminate",value:function(){return this.active}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,t.Z)((0,a.Z)(i),"styles",this),c.iv`:host{overflow:hidden}`]}}]}}),s.D)},67622:(e,r,i)=>{var o=i(17463),t=i(34541),a=i(47838),s=(i(82692),i(68144)),c=i(79932),n=i(83448),l=i(47181),d=(i(74834),i(10983),i(68307)),u=i(76680),p=i(70203);const h="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",g="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z";(0,o.Z)([(0,c.Mo)("ha-file-upload")],(function(e,r){class i extends r{constructor(...r){super(...r),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"accept",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"supports",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"multiple",value:()=>!1},{kind:"field",decorators:[(0,c.Cb)({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,c.Cb)({type:Boolean})],key:"uploading",value:()=>!1},{kind:"field",decorators:[(0,c.Cb)({type:Number})],key:"progress",value:void 0},{kind:"field",decorators:[(0,c.Cb)({type:Boolean,attribute:"auto-open-file-dialog"})],key:"autoOpenFileDialog",value:()=>!1},{kind:"field",decorators:[(0,c.SB)()],key:"_drag",value:()=>!1},{kind:"field",decorators:[(0,c.IO)("#input")],key:"_input",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){(0,t.Z)((0,a.Z)(i.prototype),"firstUpdated",this).call(this,e),this.autoOpenFileDialog&&this._openFilePicker()}},{kind:"method",key:"render",value:function(){var e,r,i,o,t;return s.dy` ${this.uploading?s.dy`<div class="container"> <div class="row"> <span class="header">${this.value?null===(e=this.hass)||void 0===e?void 0:e.localize("ui.components.file-upload.uploading_name",{name:this.value}):null===(r=this.hass)||void 0===r?void 0:r.localize("ui.components.file-upload.uploading")}</span> ${this.progress?s.dy`<span class="progress">${this.progress}${(0,d.K)(this.hass.locale)}%</span>`:""} </div> <mwc-linear-progress .indeterminate="${!this.progress}" .progress="${this.progress?this.progress/100:void 0}"></mwc-linear-progress> </div>`:s.dy`<label for="${this.value?"":"input"}" class="container ${(0,n.$)({dragged:this._drag,multiple:this.multiple,value:Boolean(this.value)})}" @drop="${this._handleDrop}" @dragenter="${this._handleDragStart}" @dragover="${this._handleDragStart}" @dragleave="${this._handleDragEnd}" @dragend="${this._handleDragEnd}">${this.value?"string"==typeof this.value?s.dy`<div class="row"> <div class="value" @click="${this._openFilePicker}"> <ha-svg-icon .path="${this.icon||g}"></ha-svg-icon> ${this.value} </div> <ha-icon-button @click="${this._clearValue}" .label="${(null===(t=this.hass)||void 0===t?void 0:t.localize("ui.common.delete"))||"Delete"}" .path="${h}"></ha-icon-button> </div>`:(this.value instanceof FileList?Array.from(this.value):(0,u.r)(this.value)).map((e=>{var r;return s.dy`<div class="row"> <div class="value" @click="${this._openFilePicker}"> <ha-svg-icon .path="${this.icon||g}"></ha-svg-icon> ${e.name} - ${(0,p.d)(e.size)} </div> <ha-icon-button @click="${this._clearValue}" .label="${(null===(r=this.hass)||void 0===r?void 0:r.localize("ui.common.delete"))||"Delete"}" .path="${h}"></ha-icon-button> </div>`})):s.dy`<ha-svg-icon class="big-icon" .path="${this.icon||g}"></ha-svg-icon> <ha-button unelevated @click="${this._openFilePicker}"> ${this.label||(null===(i=this.hass)||void 0===i?void 0:i.localize("ui.components.file-upload.label"))} </ha-button> <span class="secondary">${this.secondary||(null===(o=this.hass)||void 0===o?void 0:o.localize("ui.components.file-upload.secondary"))}</span> <span class="supports">${this.supports}</span>`} <input id="input" type="file" class="file" .accept="${this.accept}" .multiple="${this.multiple}" @change="${this._handleFilePicked}"></label>`} `}},{kind:"method",key:"_openFilePicker",value:function(){var e;null===(e=this._input)||void 0===e||e.click()}},{kind:"method",key:"_handleDrop",value:function(e){var r;e.preventDefault(),e.stopPropagation(),null!==(r=e.dataTransfer)&&void 0!==r&&r.files&&(0,l.B)(this,"file-picked",{files:this.multiple||1===e.dataTransfer.files.length?Array.from(e.dataTransfer.files):[e.dataTransfer.files[0]]}),this._drag=!1}},{kind:"method",key:"_handleDragStart",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!0}},{kind:"method",key:"_handleDragEnd",value:function(e){e.preventDefault(),e.stopPropagation(),this._drag=!1}},{kind:"method",key:"_handleFilePicked",value:function(e){0!==e.target.files.length&&(this.value=e.target.files,(0,l.B)(this,"file-picked",{files:e.target.files}))}},{kind:"method",key:"_clearValue",value:function(e){e.preventDefault(),this._input.value="",this.value=void 0,(0,l.B)(this,"change")}},{kind:"get",static:!0,key:"styles",value:function(){return s.iv`:host{display:block;height:240px}:host([disabled]){pointer-events:none;color:var(--disabled-text-color)}.container{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;border:solid 1px var(--mdc-text-field-idle-line-color,rgba(0,0,0,.42));border-radius:var(--mdc-shape-small,4px);height:100%}label.container{border:dashed 1px var(--mdc-text-field-idle-line-color,rgba(0,0,0,.42));cursor:pointer}:host([disabled]) .container{border-color:var(--disabled-color)}label.dragged{border-color:var(--primary-color)}.dragged:before{position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--primary-color);content:"";opacity:var(--dark-divider-opacity);pointer-events:none;border-radius:var(--mdc-shape-small,4px)}label.value{cursor:default}label.value.multiple{justify-content:unset;overflow:auto}.highlight{color:var(--primary-color)}.row{display:flex;width:100%;align-items:center;justify-content:space-between;padding:0 16px;box-sizing:border-box}ha-button{margin-bottom:4px}.supports{color:var(--secondary-text-color);font-size:12px}:host([disabled]) .secondary{color:var(--disabled-text-color)}input.file{display:none}.value{cursor:pointer}.value ha-svg-icon{margin-right:8px}.big-icon{--mdc-icon-size:48px;margin-bottom:8px}ha-button{--mdc-button-outline-color:var(--primary-color);--mdc-icon-button-size:24px}mwc-linear-progress{width:100%;padding:16px;box-sizing:border-box}.header{font-weight:500}.progress{color:var(--secondary-text-color)}`}}]}}),s.oi)},60538:(e,r,i)=>{i.d(r,{FZ:()=>s,_P:()=>a,p_:()=>c});var o=i(63864),t=i(41682);const a=async(e,r)=>{if(e)return(0,o.I)(e.config.version,2021,2,4)?e.callWS({type:"supervisor/api",endpoint:`/${(0,o.I)(e.config.version,2021,9)?"backups":"snapshots"}/${r}/info`,method:"get"}):(0,t.rY)(await e.callApi("GET",`hassio/${(0,o.I)(e.config.version,2021,9)?"backups":"snapshots"}/${r}/info`));const i=await fetch(`/api/hassio/backups/${r}/info`,{method:"GET"});return(await i.json()).data},s=async(e,r)=>{(0,o.I)(e.config.version,2021,2,4)?await e.callWS({type:"supervisor/api",endpoint:"/"+((0,o.I)(e.config.version,2021,9)?`backups/${r}`:`snapshots/${r}/remove`),method:(0,o.I)(e.config.version,2021,9)?"delete":"post"}):await e.callApi("POST",`hassio/${(0,o.I)(e.config.version,2021,9)?"backups":"snapshots"}/${r}/remove`)},c=async(e,r)=>{const i=new FormData;let t;if(i.append("file",r),t=e?await e.fetchWithAuth(`/api/hassio/${(0,o.I)(e.config.version,2021,9)?"backups":"snapshots"}/new/upload`,{method:"POST",body:i}):await fetch("/api/hassio/backups/new/upload",{method:"POST",body:i}),413===t.status)throw new Error("Uploaded backup is too large");if(200!==t.status)throw new Error(`${t.status} ${t.statusText}`);return t.json()}},41682:(e,r,i)=>{i.d(r,{js:()=>t,rY:()=>o});const o=e=>e.data,t=e=>"object"==typeof e?"object"==typeof e.body?e.body.message||"Unknown error, see supervisor logs":e.body||e.message||"Unknown error, see supervisor logs":e;new Set([502,503,504])},99356:(e,r,i)=>{i.r(r);var o=i(17463),t=i(34541),a=i(47838),s=(i(14271),i(68144)),c=i(79932),n=i(47181);i(31206),i(67622);var l=i(60538),d=i(41682),u=i(26765);(0,o.Z)([(0,c.Mo)("hassio-upload-backup")],(function(e,r){return{F:class extends r{constructor(...r){super(...r),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"value",value:()=>null},{kind:"field",decorators:[(0,c.SB)()],key:"_uploading",value:()=>!1},{kind:"method",key:"render",value:function(){return s.dy` <ha-file-upload .hass="${this.hass}" .uploading="${this._uploading}" .icon="${"M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10L12,6H20M10.75,13H14V17H16V13H19.25L15,8.75"}" accept="application/x-tar" label="Upload backup" supports="Supports .TAR files" @file-picked="${this._uploadFile}"></ha-file-upload> `}},{kind:"method",key:"_uploadFile",value:async function(e){const r=e.detail.files[0];if(["application/x-tar"].includes(r.type)){this._uploading=!0;try{const e=await(0,l.p_)(this.hass,r);(0,n.B)(this,"backup-uploaded",{backup:e.data})}catch(e){(0,u.Ys)(this,{title:"Upload failed",text:(0,d.js)(e),confirmText:"ok"})}finally{this._uploading=!1}}else(0,u.Ys)(this,{title:"Unsupported file format",text:"Please choose a ioBroker backup file (.tar)",confirmText:"ok"})}}]}}),s.oi);i(54736),i(22098);var p=i(76307),h=(i(38544),i(15451)),g=i(15493),m=i(83849);(0,o.Z)([(0,c.Mo)("onboarding-restore-backup")],(function(e,r){class o extends r{constructor(...r){super(...r),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"localize",value:void 0},{kind:"field",decorators:[(0,c.Cb)()],key:"language",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_restoring",value:()=>!1},{kind:"method",key:"render",value:function(){return s.dy`${this._restoring?s.dy`<h1> ${this.localize("ui.panel.page-onboarding.restore.in_progress")} </h1> <onboarding-loading></onboarding-loading>`:s.dy` <h1> ${this.localize("ui.panel.page-onboarding.restore.header")} </h1> <hassio-upload-backup @backup-uploaded="${this._backupUploaded}" .hass="${this.hass}"></hassio-upload-backup>`} <div class="footer"> <mwc-button @click="${this._back}" .disabled="${this._restoring}"> ${this.localize("ui.panel.page-onboarding.back")} </mwc-button> </div> `}},{kind:"method",key:"_back",value:function(){(0,m.c)(`${location.pathname}?${(0,g.pc)("page")}`)}},{kind:"method",key:"_backupUploaded",value:function(e){const r=e.detail.backup;this._showBackupDialog(r.slug)}},{kind:"method",key:"firstUpdated",value:function(e){(0,t.Z)((0,a.Z)(o.prototype),"firstUpdated",this).call(this,e),setInterval((()=>this._checkRestoreStatus()),1e3)}},{kind:"method",key:"_checkRestoreStatus",value:async function(){if(this._restoring)try{await(0,p.Dq)()}catch(e){"unauthorized"===e.message&&window.location.replace("/")}}},{kind:"method",key:"_showBackupDialog",value:function(e){var r,o;r=this,o={slug:e,onboarding:!0,localize:this.localize,onRestoring:()=>{this._restoring=!0}},(0,n.B)(r,"show-dialog",{dialogTag:"dialog-hassio-backup",dialogImport:()=>Promise.all([i.e(28597),i.e(78133),i.e(41985),i.e(39975),i.e(97215),i.e(70632),i.e(6971),i.e(52154),i.e(35440),i.e(19605)]).then(i.bind(i,19605)),dialogParams:o})}},{kind:"get",static:!0,key:"styles",value:function(){return[h.I,s.iv`:host{display:flex;flex-direction:column;align-items:center}hassio-upload-backup{width:100%}.footer{width:100%;text-align:left}`]}}]}}),s.oi)},70203:(e,r,i)=>{i.d(r,{d:()=>o});const o=(e=0,r=2)=>{if(0===e)return"0 Bytes";r=r<0?0:r;const i=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/1024**i).toFixed(r))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i]}`}}};
//# sourceMappingURL=99356-0M7JFM3vnQ4.js.map