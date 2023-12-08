"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[139],{76680:function(t,e,i){function n(t){return void 0===t||Array.isArray(t)?t:[t]}i.d(e,{r:function(){return n}})},44583:function(t,e,i){i.d(e,{DG:function(){return d},E8:function(){return m},NR:function(){return p},o0:function(){return r},yD:function(){return u}});i(97393);var n=i(14516),a=(i(4631),i(12198)),s=i(49684),o=i(65810),r=function(t,e,i){return l(e,i.time_zone).format(t)},l=(0,n.Z)((function(t,e){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:(0,o.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,o.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?e:void 0})})),d=function(t,e,i){return c(e,i.time_zone).format(t)},c=(0,n.Z)((function(t,e){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"short",day:"numeric",hour:(0,o.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,o.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?e:void 0})})),u=function(t,e,i){return h(e,i.time_zone).format(t)},h=(0,n.Z)((function(t,e){return new Intl.DateTimeFormat(t.language,{month:"short",day:"numeric",hour:(0,o.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,o.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?e:void 0})})),m=function(t,e,i){return v(e,i.time_zone).format(t)},v=(0,n.Z)((function(t,e){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:(0,o.y)(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,o.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?e:void 0})})),p=function(t,e,i){return"".concat((0,a.WB)(t,e,i),", ").concat((0,s.mr)(t,e,i))}},49684:function(t,e,i){i.d(e,{Vu:function(){return r},Zs:function(){return u},mr:function(){return s},xO:function(){return d}});var n=i(14516),a=(i(4631),i(65810)),s=function(t,e,i){return o(e,i.time_zone).format(t)},o=(0,n.Z)((function(t,e){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,a.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?e:void 0})})),r=function(t,e,i){return l(e,i.time_zone).format(t)},l=(0,n.Z)((function(t,e){return new Intl.DateTimeFormat(t.language,{hour:(0,a.y)(t)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,a.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?e:void 0})})),d=function(t,e,i){return c(e,i.time_zone).format(t)},c=(0,n.Z)((function(t,e){return new Intl.DateTimeFormat(t.language,{weekday:"long",hour:(0,a.y)(t)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,a.y)(t)?"h12":"h23",timeZone:"server"===t.time_zone?e:void 0})})),u=function(t,e,i){return h(e,i.time_zone).format(t)},h=(0,n.Z)((function(t,e){return new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:"server"===t.time_zone?e:void 0})}))},55642:function(t,e,i){i.d(e,{h:function(){return c}});var n=i(68990),a=i(71650),s=i(33368),o=i(69205),r=i(70906),l=(i(51467),i(46798),i(9849),i(50289),i(94167),i(82073),i(68144)),d=i(57835),c=(0,d.XM)(function(t){(0,o.Z)(i,t);var e=(0,r.Z)(i);function i(t){var n;if((0,a.Z)(this,i),(n=e.call(this,t))._element=void 0,t.type!==d.pX.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings");return n}return(0,s.Z)(i,[{key:"update",value:function(t,e){var i=this,a=(0,n.Z)(e,2),s=a[0],o=a[1];return this._element&&this._element.localName===s?(o&&Object.entries(o).forEach((function(t){var e=(0,n.Z)(t,2),a=e[0],s=e[1];i._element[a]=s})),l.Jb):this.render(s,o)}},{key:"render",value:function(t,e){var i=this;return this._element=document.createElement(t),e&&Object.entries(e).forEach((function(t){var e=(0,n.Z)(t,2),a=e[0],s=e[1];i._element[a]=s})),this._element}}]),i}(d.Xe))},22311:function(t,e,i){i.d(e,{N:function(){return a}});var n=i(58831),a=function(t){return(0,n.M)(t.entity_id)}},40095:function(t,e,i){i.d(e,{e:function(){return n}});var n=function(t,e){return a(t.attributes,e)},a=function(t,e){return 0!=(t.supported_features&e)}},9381:function(t,e,i){var n,a,s,o,r=i(93359),l=i(88962),d=i(33368),c=i(71650),u=i(82390),h=i(69205),m=i(70906),v=i(91808),p=(i(97393),i(68144)),f=i(95260),g=i(83448),y=i(47181),_=(i(10983),i(52039),{info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"});(0,v.Z)([(0,f.Mo)("ha-alert")],(function(t,e){var i=function(e){(0,h.Z)(n,e);var i=(0,m.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return e=i.call.apply(i,[this].concat(s)),t((0,u.Z)(e)),e}return(0,d.Z)(n)}(e);return{F:i,d:[{kind:"field",decorators:[(0,f.Cb)()],key:"title",value:function(){return""}},{kind:"field",decorators:[(0,f.Cb)({attribute:"alert-type"})],key:"alertType",value:function(){return"info"}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"dismissable",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,p.dy)(n||(n=(0,l.Z)([' <div class="issue-type ','" role="alert"> <div class="icon ','"> <slot name="icon"> <ha-svg-icon .path="','"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ',' <slot></slot> </div> <div class="action"> <slot name="action"> '," </slot> </div> </div> </div> "])),(0,g.$)((0,r.Z)({},this.alertType,!0)),this.title?"":"no-title",_[this.alertType],this.title?(0,p.dy)(a||(a=(0,l.Z)(['<div class="title">',"</div>"])),this.title):"",this.dismissable?(0,p.dy)(s||(s=(0,l.Z)(['<ha-icon-button @click="','" label="Dismiss alert" .path="','"></ha-icon-button>'])),this._dismiss_clicked,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):"")}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,y.B)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:function(){return(0,p.iv)(o||(o=(0,l.Z)(['.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0;direction:var(--direction)}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}'])))}}]}}),p.oi)},31206:function(t,e,i){i.r(e),i.d(e,{HaCircularProgress:function(){return g}});var n,a=i(88962),s=i(53709),o=i(33368),r=i(71650),l=i(82390),d=i(69205),c=i(70906),u=i(91808),h=i(34541),m=i(47838),v=(i(97393),i(34131),i(22129)),p=i(68144),f=i(95260),g=(0,u.Z)([(0,f.Mo)("ha-circular-progress")],(function(t,e){var i=function(e){(0,d.Z)(n,e);var i=(0,c.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return e=i.call.apply(i,[this].concat(s)),t((0,l.Z)(e)),e}return(0,o.Z)(n)}(e);return{F:i,d:[{kind:"field",decorators:[(0,f.Cb)({attribute:"aria-label",type:String})],key:"ariaLabel",value:function(){return"Loading"}},{kind:"field",decorators:[(0,f.Cb)()],key:"size",value:function(){return"medium"}},{kind:"method",key:"updated",value:function(t){if((0,h.Z)((0,m.Z)(i.prototype),"updated",this).call(this,t),t.has("size"))switch(this.size){case"tiny":this.style.setProperty("--md-circular-progress-size","16px");break;case"small":this.style.setProperty("--md-circular-progress-size","28px");break;case"medium":this.style.setProperty("--md-circular-progress-size","48px");break;case"large":this.style.setProperty("--md-circular-progress-size","68px")}}},{kind:"get",static:!0,key:"styles",value:function(){return[].concat((0,s.Z)((0,h.Z)((0,m.Z)(i),"styles",this)),[(0,p.iv)(n||(n=(0,a.Z)([":host{--md-sys-color-primary:var(--primary-color);--md-circular-progress-size:48px}"])))])}}]}}),v.B)},34821:function(t,e,i){i.d(e,{i:function(){return k}});var n,a,s,o=i(33368),r=i(71650),l=i(82390),d=i(69205),c=i(70906),u=i(91808),h=i(34541),m=i(47838),v=i(88962),p=(i(97393),i(91989),i(87762)),f=i(91632),g=i(68144),y=i(95260),_=i(74265),b=(i(10983),["button","ha-list-item"]),k=function(t,e){var i;return(0,g.dy)(n||(n=(0,v.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),e,null!==(i=null==t?void 0:t.localize("ui.dialogs.generic.close"))&&void 0!==i?i:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,y.Mo)("ha-dialog")],(function(t,e){var i=function(e){(0,d.Z)(n,e);var i=(0,c.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return e=i.call.apply(i,[this].concat(s)),t((0,l.Z)(e)),e}return(0,o.Z)(n)}(e);return{F:i,d:[{kind:"field",key:_.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(t,e){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(t,e)}},{kind:"method",key:"renderHeading",value:function(){return(0,g.dy)(a||(a=(0,v.Z)(['<slot name="heading"> '," </slot>"])),(0,h.Z)((0,m.Z)(i.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var t;(0,h.Z)((0,m.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,b].join(", "),this._updateScrolledAttribute(),null===(t=this.contentElement)||void 0===t||t.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,h.Z)((0,m.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var t=this;return function(){t._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[f.W,(0,g.iv)(s||(s=(0,v.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),p.M)},65353:function(t,e,i){i.r(e),i.d(e,{HaNumberSelector:function(){return _}});var n,a,s,o,r,l=i(88962),d=i(33368),c=i(71650),u=i(82390),h=i(69205),m=i(70906),v=i(91808),p=(i(97393),i(76843),i(46798),i(94570),i(68144)),f=i(95260),g=i(83448),y=i(47181),_=(i(16235),i(43183),i(3555),(0,v.Z)([(0,f.Mo)("ha-selector-number")],(function(t,e){var i=function(e){(0,h.Z)(n,e);var i=(0,m.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return e=i.call.apply(i,[this].concat(s)),t((0,u.Z)(e)),e}return(0,d.Z)(n)}(e);return{F:i,d:[{kind:"field",decorators:[(0,f.Cb)()],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"selector",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"value",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"placeholder",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"label",value:void 0},{kind:"field",decorators:[(0,f.Cb)()],key:"helper",value:void 0},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"required",value:function(){return!0}},{kind:"field",decorators:[(0,f.Cb)({type:Boolean})],key:"disabled",value:function(){return!1}},{kind:"field",key:"_valueStr",value:function(){return""}},{kind:"method",key:"willUpdate",value:function(t){t.has("value")&&(""!==this._valueStr&&this.value===Number(this._valueStr)||(this._valueStr=null==this.value||isNaN(this.value)?"":this.value.toString()))}},{kind:"method",key:"render",value:function(){var t,e,i,r,d,c,u,h,m,v,f,y,_,b,k,x,Z,w,S="box"===(null===(t=this.selector.number)||void 0===t?void 0:t.mode)||void 0===(null===(e=this.selector.number)||void 0===e?void 0:e.min)||void 0===(null===(i=this.selector.number)||void 0===i?void 0:i.max);return(0,p.dy)(n||(n=(0,l.Z)([' <div class="input"> ',' <ha-textfield .inputMode="','" .label="','" .placeholder="','" class="','" .min="','" .max="','" .value="','" .step="','" helperPersistent .helper="','" .disabled="','" .required="','" .suffix="','" type="number" autoValidate ?no-spinner="','" @input="','"> </ha-textfield> </div> '," "])),S?"":(0,p.dy)(a||(a=(0,l.Z)([" ",' <ha-slider labeled .min="','" .max="','" .value="','" .step="','" .disabled="','" .required="','" @change="','"> </ha-slider> '])),this.label?(0,p.dy)(s||(s=(0,l.Z)(["","",""])),this.label,this.required?"*":""):"",null===(r=this.selector.number)||void 0===r?void 0:r.min,null===(d=this.selector.number)||void 0===d?void 0:d.max,null!==(c=this.value)&&void 0!==c?c:"","any"===(null===(u=this.selector.number)||void 0===u?void 0:u.step)?void 0:null!==(h=null===(m=this.selector.number)||void 0===m?void 0:m.step)&&void 0!==h?h:1,this.disabled,this.required,this._handleSliderChange),"any"===(null===(v=this.selector.number)||void 0===v?void 0:v.step)||(null!==(f=null===(y=this.selector.number)||void 0===y?void 0:y.step)&&void 0!==f?f:1)%1!=0?"decimal":"numeric",S?this.label:void 0,this.placeholder,(0,g.$)({single:S}),null===(_=this.selector.number)||void 0===_?void 0:_.min,null===(b=this.selector.number)||void 0===b?void 0:b.max,null!==(k=this._valueStr)&&void 0!==k?k:"",null!==(x=null===(Z=this.selector.number)||void 0===Z?void 0:Z.step)&&void 0!==x?x:1,S?this.helper:void 0,this.disabled,this.required,null===(w=this.selector.number)||void 0===w?void 0:w.unit_of_measurement,!S,this._handleInputChange,!S&&this.helper?(0,p.dy)(o||(o=(0,l.Z)(["<ha-input-helper-text>","</ha-input-helper-text>"])),this.helper):"")}},{kind:"method",key:"_handleInputChange",value:function(t){t.stopPropagation(),this._valueStr=t.target.value;var e=""===t.target.value||isNaN(t.target.value)?void 0:Number(t.target.value);this.value!==e&&(0,y.B)(this,"value-changed",{value:e})}},{kind:"method",key:"_handleSliderChange",value:function(t){t.stopPropagation();var e=Number(t.target.value);this.value!==e&&(0,y.B)(this,"value-changed",{value:e})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,p.iv)(r||(r=(0,l.Z)([".input{display:flex;justify-content:space-between;align-items:center;direction:ltr}ha-slider{flex:1}ha-textfield{--ha-textfield-input-width:40px}.single{--ha-textfield-input-width:unset;flex:1}"])))}}]}}),p.oi))},43183:function(t,e,i){var n,a=i(88962),s=i(53709),o=i(33368),r=i(71650),l=i(82390),d=i(69205),c=i(70906),u=i(91808),h=(i(97393),i(95260)),m=(i(34131),i(74177)),v=i(68144);(0,u.Z)([(0,h.Mo)("ha-slider")],(function(t,e){var i=function(e){(0,d.Z)(n,e);var i=(0,c.Z)(n);function n(){var e;(0,r.Z)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return e=i.call.apply(i,[this].concat(s)),t((0,l.Z)(e)),e}return(0,o.Z)(n)}(e);return{F:i,d:[{kind:"field",static:!0,key:"styles",value:function(){return[].concat((0,s.Z)(m.$.styles),[(0,v.iv)(n||(n=(0,a.Z)([":host{--md-sys-color-primary:var(--primary-color);--md-sys-color-outline:var(--outline-color);--md-slider-handle-width:14px;--md-slider-handle-height:14px;min-width:100px;min-inline-size:100px;width:200px}"])))])}}]}}),m.$)},211:function(t,e,i){i.r(e),i.d(e,{DialogStatisticsFixUnsupportedUnitMetadata:function(){return M}});var n,a,s,o,r,l,d,c,u=i(99312),h=i(81043),m=i(88962),v=i(33368),p=i(71650),f=i(82390),g=i(69205),y=i(70906),_=i(91808),b=(i(97393),i(36513),i(63789),i(24074),i(17692),i(47704),i(44577),i(44165)),k=i(68144),x=i(95260),Z=i(14516),w=i(44583),S=i(47181),C=(i(31206),i(34821),i(68331),i(9039),i(65353),i(52039),i(38014)),z=i(26765),L=i(11654),A=i(81796),M=(0,_.Z)([(0,x.Mo)("dialog-statistics-adjust-sum")],(function(t,e){var i,_,M=function(e){(0,g.Z)(n,e);var i=(0,y.Z)(n);function n(){var e;(0,p.Z)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return e=i.call.apply(i,[this].concat(s)),t((0,f.Z)(e)),e}return(0,v.Z)(n)}(e);return{F:M,d:[{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_busy",value:function(){return!1}},{kind:"field",decorators:[(0,x.SB)()],key:"_moment",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_stats5min",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_statsHour",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_chosenStat",value:void 0},{kind:"field",key:"_origAmount",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_amount",value:void 0},{kind:"field",key:"_dateTimeSelector",value:function(){return{datetime:{}}}},{kind:"field",key:"_amountSelector",value:function(){return(0,Z.Z)((function(t){return{number:{step:.01,unit_of_measurement:t,mode:"box"}}}))}},{kind:"method",key:"showDialog",value:function(t){this._params=t;var e=new Date;e.setMinutes(e.getMinutes()-e.getMinutes()%5,0),this._moment=(0,b.Z)(e),this._fetchStats()}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._moment=void 0,this._stats5min=void 0,this._statsHour=void 0,this._origAmount=void 0,this._amount=void 0,this._chosenStat=void 0,this._busy=!1,(0,S.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params?(t=this._chosenStat?this._renderAdjustStat():this._renderPickStatistic(),(0,k.dy)(n||(n=(0,m.Z)([' <ha-dialog open scrimClickAction escapeKeyAction @closed="','" .heading="','"> '," </ha-dialog> "])),this.closeDialog,this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.title"),t)):k.Ld;var t}},{kind:"method",key:"shouldUpdate",value:function(t){if(1!==t.size||!t.has("hass"))return!0;var e=t.get("hass");return!e||e.localize!==this.hass.localize}},{kind:"method",key:"_renderPickStatistic",value:function(){var t;if(this._stats5min&&this._statsHour)if(this._statsHour.length<1&&this._stats5min.length<1)t=(0,k.dy)(s||(s=(0,m.Z)(["<p> "," </p>"])),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.no_statistics_found"));else{for(var e=this._stats5min.length>=1?this._stats5min:this._statsHour,i=(0,C.dO)(this.hass,this._params.statistic.statistic_id,this._params.statistic),n=[],d=0;d<e.length;d++){var c=e[d],u=Math.round(100*c.change)/100;n.push((0,k.dy)(o||(o=(0,m.Z)([' <mwc-list-item twoline hasMeta .stat="','" @click="','"> <span>'," ",'</span> <span slot="secondary"> ',' </span> <ha-svg-icon slot="meta" .path="','"></ha-svg-icon> </mwc-list-item> '])),c,this._setChosenStatistic,u,i,(0,w.o0)(new Date(c.start),this.hass.locale,this.hass.config),"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"))}t=(0,k.dy)(r||(r=(0,m.Z)(["",""])),n)}else t=(0,k.dy)(a||(a=(0,m.Z)(["<ha-circular-progress indeterminate></ha-circular-progress>"])));return(0,k.dy)(l||(l=(0,m.Z)([' <div class="text-content"> ',' </div> <div class="text-content"> <b>',"</b> ",' </div> <ha-selector-datetime .label="','" .hass="','" .selector="','" .value="','" @value-changed="','"></ha-selector-datetime> <div class="stat-list">','</div> <mwc-button slot="primaryAction" dialogAction="cancel" .label="','"></mwc-button> '])),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.info_text_1"),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.statistic"),this._params.statistic.statistic_id,this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.pick_a_time"),this.hass,this._dateTimeSelector,this._moment,this._dateTimeSelectorChanged,t,this.hass.localize("ui.common.close"))}},{kind:"method",key:"_clearChosenStatistic",value:function(){this._chosenStat=void 0}},{kind:"method",key:"_setChosenStatistic",value:function(t){var e=t.currentTarget.stat,i=Math.round(100*e.change)/100;this._chosenStat=e,this._origAmount=i,this._amount=i}},{kind:"method",key:"_dateTimeSelectorChanged",value:function(t){this._moment=t.detail.value,this._fetchStats()}},{kind:"method",key:"_renderAdjustStat",value:function(){var t=(0,C.dO)(this.hass,this._params.statistic.statistic_id,this._params.statistic);return(0,k.dy)(d||(d=(0,m.Z)([' <div class="text-content"> <b>',"</b> ",' </div> <div class="table-row"> <span>',"</span> <span>",'</span> </div> <div class="table-row"> <span>',"</span> <span>",'</span> </div> <ha-selector-number .label="','" .hass="','" .selector="','" .value="','" .disabled="','" @value-changed="','"></ha-selector-number> <mwc-button slot="primaryAction" .label="','" .disabled="','" @click="','"></mwc-button> <mwc-button slot="secondaryAction" .label="','" .disabled="','" @click="','"></mwc-button> '])),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.statistic"),this._params.statistic.statistic_id,this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.start"),(0,w.o0)(new Date(this._chosenStat.start),this.hass.locale,this.hass.config),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.end"),(0,w.o0)(new Date(this._chosenStat.end),this.hass.locale,this.hass.config),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.new_value"),this.hass,this._amountSelector(t||void 0),this._amount,this._busy,this._amountChanged,this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.adjust"),this._busy,this._fixIssue,this.hass.localize("ui.common.back"),this._busy,this._clearChosenStatistic)}},{kind:"method",key:"_amountChanged",value:function(t){this._amount=t.detail.value}},{kind:"method",key:"_fetchStats",value:(_=(0,h.Z)((0,u.Z)().mark((function t(){var e,i,n,a,s,o,r,l;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._stats5min=void 0,this._statsHour=void 0,e=this._params.statistic.statistic_id,i=new Date(this._moment.replace(" ","T")),(n=new Date(i.getTime())).setTime(n.getTime()-72e5),(a=new Date(i.getTime())).setTime(a.getTime()+108e5),t.next=10,(0,C.dL)(this.hass,n,a,[e],"hour");case 10:if(s=t.sent,this._statsHour=e in s?s[e].slice(0,5):[],0!==this._statsHour.length){t.next=15;break}return this._stats5min=[],t.abrupt("return");case 15:return(o=new Date(i.getTime())).setTime(o.getTime()-6e5),(r=new Date(i.getTime())).setTime(r.getTime()+9e5),t.next=21,(0,C.dL)(this.hass,o,r,[e],"5minute");case 21:l=t.sent,this._stats5min=e in l?l[e].slice(0,5):[];case 23:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)})},{kind:"method",key:"_fixIssue",value:(i=(0,h.Z)((0,u.Z)().mark((function t(){var e;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,C.dO)(this.hass,this._params.statistic.statistic_id,this._params.statistic),this._busy=!0,t.prev=2,t.next=5,(0,C.j2)(this.hass,this._params.statistic.statistic_id,this._chosenStat.start,this._amount-this._origAmount,e||null);case 5:t.next=12;break;case 7:return t.prev=7,t.t0=t.catch(2),this._busy=!1,(0,z.showAlertDialog)(this,{text:this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.error_sum_adjusted",{message:t.t0.message||t.t0})}),t.abrupt("return");case 12:(0,A.C)(this,{message:this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.adjust_sum.sum_adjusted")}),this.closeDialog();case 14:case"end":return t.stop()}}),t,this,[[2,7]])}))),function(){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[L.Qx,L.yu,(0,k.iv)(c||(c=(0,m.Z)(["@media all and (max-width:450px),all and (max-height:500px){ha-dialog{--mdc-dialog-max-height:100%;height:100%}}@media all and (min-width:850px){ha-dialog{--mdc-dialog-max-height:80%;--mdc-dialog-max-height:80%}}@media all and (min-width:451px) and (min-height:501px){ha-dialog{--mdc-dialog-max-width:480px}}.text-content,ha-selector-datetime,ha-selector-number{margin-bottom:20px}mwc-list-item{margin:0 -24px;--mdc-list-side-padding:24px}.table-row{display:flex;justify-content:space-between;margin-bottom:20px}.stat-list{min-height:360px;display:flex;flex-direction:column}.stat-list ha-circular-progress{margin:0 auto}"])))]}}]}}),k.oi)}}]);
//# sourceMappingURL=139.08sLZSKJlRU.js.map