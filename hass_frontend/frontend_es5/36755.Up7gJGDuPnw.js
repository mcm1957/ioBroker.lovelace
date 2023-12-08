/*! For license information please see 36755.Up7gJGDuPnw.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[36755,31206],{31206:function(r,o,e){e.r(o),e.d(o,{HaCircularProgress:function(){return m}});var t,i=e(88962),a=e(53709),n=e(33368),c=e(71650),l=e(82390),d=e(69205),s=e(70906),u=e(91808),v=e(34541),h=e(47838),f=(e(97393),e(34131),e(22129)),p=e(68144),g=e(95260),m=(0,u.Z)([(0,g.Mo)("ha-circular-progress")],(function(r,o){var e=function(o){(0,d.Z)(t,o);var e=(0,s.Z)(t);function t(){var o;(0,c.Z)(this,t);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return o=e.call.apply(e,[this].concat(a)),r((0,l.Z)(o)),o}return(0,n.Z)(t)}(o);return{F:e,d:[{kind:"field",decorators:[(0,g.Cb)({attribute:"aria-label",type:String})],key:"ariaLabel",value:function(){return"Loading"}},{kind:"field",decorators:[(0,g.Cb)()],key:"size",value:function(){return"medium"}},{kind:"method",key:"updated",value:function(r){if((0,v.Z)((0,h.Z)(e.prototype),"updated",this).call(this,r),r.has("size"))switch(this.size){case"tiny":this.style.setProperty("--md-circular-progress-size","16px");break;case"small":this.style.setProperty("--md-circular-progress-size","28px");break;case"medium":this.style.setProperty("--md-circular-progress-size","48px");break;case"large":this.style.setProperty("--md-circular-progress-size","68px")}}},{kind:"get",static:!0,key:"styles",value:function(){return[].concat((0,a.Z)((0,v.Z)((0,h.Z)(e),"styles",this)),[(0,p.iv)(t||(t=(0,i.Z)([":host{--md-sys-color-primary:var(--primary-color);--md-circular-progress-size:48px}"])))])}}]}}),f.B)},34821:function(r,o,e){e.d(o,{i:function(){return k}});var t,i,a,n=e(33368),c=e(71650),l=e(82390),d=e(69205),s=e(70906),u=e(91808),v=e(34541),h=e(47838),f=e(88962),p=(e(97393),e(91989),e(87762)),g=e(91632),m=e(68144),y=e(95260),_=e(74265),b=(e(10983),["button","ha-list-item"]),k=function(r,o){var e;return(0,m.dy)(t||(t=(0,f.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),o,null!==(e=null==r?void 0:r.localize("ui.dialogs.generic.close"))&&void 0!==e?e:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,y.Mo)("ha-dialog")],(function(r,o){var e=function(o){(0,d.Z)(t,o);var e=(0,s.Z)(t);function t(){var o;(0,c.Z)(this,t);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return o=e.call.apply(e,[this].concat(a)),r((0,l.Z)(o)),o}return(0,n.Z)(t)}(o);return{F:e,d:[{kind:"field",key:_.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(r,o){var e;null===(e=this.contentElement)||void 0===e||e.scrollTo(r,o)}},{kind:"method",key:"renderHeading",value:function(){return(0,m.dy)(i||(i=(0,f.Z)(['<slot name="heading"> '," </slot>"])),(0,v.Z)((0,h.Z)(e.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var r;(0,v.Z)((0,h.Z)(e.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,b].join(", "),this._updateScrolledAttribute(),null===(r=this.contentElement)||void 0===r||r.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,v.Z)((0,h.Z)(e.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var r=this;return function(){r._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.W,(0,m.iv)(a||(a=(0,f.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),p.M)},55813:function(r,o,e){e.r(o);var t,i,a,n,c,l,d,s=e(88962),u=e(33368),v=e(71650),h=e(82390),f=e(69205),p=e(70906),g=e(91808),m=(e(97393),e(22859),e(46798),e(47084),e(51358),e(5239),e(98490),e(31528),e(7695),e(44758),e(80354),e(68630),e(47704),e(34821),e(31206),e(81312),e(10983),e(68144)),y=e(95260),_=e(11654);(0,g.Z)([(0,y.Mo)("ha-dialog-show-audio-message")],(function(r,o){var e=function(o){(0,f.Z)(t,o);var e=(0,p.Z)(t);function t(){var o;(0,v.Z)(this,t);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return o=e.call.apply(e,[this].concat(a)),r((0,h.Z)(o)),o}return(0,u.Z)(t)}(o);return{F:e,d:[{kind:"field",decorators:[(0,y.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_currentMessage",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_errorMsg",value:void 0},{kind:"field",decorators:[(0,y.SB)()],key:"_loading",value:function(){return!1}},{kind:"field",decorators:[(0,y.SB)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,y.SB)()],key:"_blobUrl",value:void 0},{kind:"method",key:"render",value:function(){var r;return(0,m.dy)(t||(t=(0,s.Z)([' <ha-dialog .open="','" @closed="','" heading="','"> '," </ha-dialog> "])),this._opened,this._closeDialog,this.hass.localize("ui.panel.mailbox.playback_title"),this._loading?(0,m.dy)(i||(i=(0,s.Z)(["<ha-circular-progress indeterminate></ha-circular-progress>"]))):(0,m.dy)(a||(a=(0,s.Z)(['<div class="icon"> <ha-icon-button id="delicon" @click="','"> <ha-icon icon="hass:delete"></ha-icon> </ha-icon-button> </div> '," "," "," "])),this._openDeleteDialog,this._currentMessage?(0,m.dy)(n||(n=(0,s.Z)(['<div id="transcribe"> '," </div>"])),null===(r=this._currentMessage)||void 0===r?void 0:r.message):m.Ld,this._errorMsg?(0,m.dy)(c||(c=(0,s.Z)(['<div class="error">',"</div>"])),this._errorMsg):m.Ld,this._blobUrl?(0,m.dy)(l||(l=(0,s.Z)([' <audio id="mp3" preload="none" controls autoplay> <source id="mp3src" src="','" type="audio/mpeg"> </audio>'])),this._blobUrl):m.Ld))}},{kind:"method",key:"showDialog",value:function(r){var o=this,e=r.hass,t=r.message;this.hass=e,this._errorMsg=void 0,this._currentMessage=t,this._opened=!0;var i=t.platform;if(i.has_media){this._loading=!0;var a="/api/mailbox/media/".concat(i.name,"/").concat(t.sha);this.hass.fetchWithAuth(a).then((function(r){return r.ok?r.blob():Promise.reject({status:r.status,statusText:r.statusText})})).then((function(r){o._loading=!1,o._blobUrl=window.URL.createObjectURL(r)})).catch((function(r){o._loading=!1,o._errorMsg="Error loading audio: ".concat(r.statusText)}))}else this._loading=!1}},{kind:"method",key:"_openDeleteDialog",value:function(){confirm(this.hass.localize("ui.panel.mailbox.delete_prompt"))&&this._deleteSelected()}},{kind:"method",key:"_deleteSelected",value:function(){var r=this._currentMessage;this.hass.callApi("DELETE","mailbox/delete/".concat(r.platform.name,"/").concat(r.sha)),this._closeDialog()}},{kind:"method",key:"_closeDialog",value:function(){this.shadowRoot.querySelector("#mp3").pause(),this._currentMessage=void 0,this._errorMsg=void 0,this._loading=!1,this._opened=!1}},{kind:"get",static:!0,key:"styles",value:function(){return[_.yu,(0,m.iv)(d||(d=(0,s.Z)([".error{color:red}p{color:var(--secondary-text-color)}.icon{text-align:var(--float-end)}"])))]}}]}}),m.oi)},22129:function(r,o,e){e.d(o,{B:function(){return b}});var t,i,a,n=e(33368),c=e(71650),l=e(69205),d=e(70906),s=e(43204),u=e(95260),v=e(88962),h=e(68144),f=(e(76843),e(83448)),p=e(92204),g=function(r){(0,l.Z)(e,r);var o=(0,d.Z)(e);function e(){var r;return(0,c.Z)(this,e),(r=o.apply(this,arguments)).value=0,r.max=1,r.indeterminate=!1,r.fourColor=!1,r}return(0,n.Z)(e,[{key:"render",value:function(){var r=this.ariaLabel;return(0,h.dy)(t||(t=(0,v.Z)([' <div class="progress ','" role="progressbar" aria-label="','" aria-valuemin="0" aria-valuemax="','" aria-valuenow="','">',"</div> "])),(0,f.$)(this.getRenderClasses()),r||h.Ld,this.max,this.indeterminate?h.Ld:this.value,this.renderIndicator())}},{key:"getRenderClasses",value:function(){return{indeterminate:this.indeterminate,"four-color":this.fourColor}}}]),e}(h.oi);(0,p.d)(g),(0,s.__decorate)([(0,u.Cb)({type:Number})],g.prototype,"value",void 0),(0,s.__decorate)([(0,u.Cb)({type:Number})],g.prototype,"max",void 0),(0,s.__decorate)([(0,u.Cb)({type:Boolean})],g.prototype,"indeterminate",void 0),(0,s.__decorate)([(0,u.Cb)({type:Boolean,attribute:"four-color"})],g.prototype,"fourColor",void 0);var m,y=function(r){(0,l.Z)(e,r);var o=(0,d.Z)(e);function e(){return(0,c.Z)(this,e),o.apply(this,arguments)}return(0,n.Z)(e,[{key:"renderIndicator",value:function(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}},{key:"renderDeterminateContainer",value:function(){var r=100*(1-this.value/this.max);return(0,h.dy)(i||(i=(0,v.Z)([' <svg viewBox="0 0 4800 4800"> <circle class="track" pathLength="100"></circle> <circle class="active-track" pathLength="100" stroke-dashoffset="','"></circle> </svg> '])),r)}},{key:"renderIndeterminateContainer",value:function(){return(0,h.dy)(a||(a=(0,v.Z)([' <div class="spinner"> <div class="left"> <div class="circle"></div> </div> <div class="right"> <div class="circle"></div> </div> </div>'])))}}]),e}(g),_=(0,h.iv)(m||(m=(0,v.Z)([":host{--_active-indicator-color:var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width:var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color:var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color:var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color:var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color:var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size:var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;min-block-size:var(--_size);min-inline-size:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.active-track,.circle,.left,.progress,.right,.spinner,.track,svg{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/ 100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset .5s cubic-bezier(0, 0, .2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1.568s}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/ 100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) transparent transparent;animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4,0,0.2,1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-.666s,0s}@media(forced-colors:active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}"]))),b=function(r){(0,l.Z)(e,r);var o=(0,d.Z)(e);function e(){return(0,c.Z)(this,e),o.apply(this,arguments)}return(0,n.Z)(e)}(y);b.styles=[_],b=(0,s.__decorate)([(0,u.Mo)("md-circular-progress")],b)},82160:function(r,o,e){e.d(o,{MT:function(){return a},RV:function(){return i},U2:function(){return c},ZH:function(){return d},t8:function(){return l}});var t;e(68990),e(46798),e(47084),e(9849),e(50289),e(94167),e(51358),e(5239),e(98490),e(46349),e(70320),e(36513);function i(r){return new Promise((function(o,e){r.oncomplete=r.onsuccess=function(){return o(r.result)},r.onabort=r.onerror=function(){return e(r.error)}}))}function a(r,o){var e=indexedDB.open(r);e.onupgradeneeded=function(){return e.result.createObjectStore(o)};var t=i(e);return function(r,e){return t.then((function(t){return e(t.transaction(o,r).objectStore(o))}))}}function n(){return t||(t=a("keyval-store","keyval")),t}function c(r){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:n())("readonly",(function(o){return i(o.get(r))}))}function l(r,o){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:n())("readwrite",(function(e){return e.put(o,r),i(e.transaction)}))}function d(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:n())("readwrite",(function(r){return r.clear(),i(r.transaction)}))}}}]);
//# sourceMappingURL=36755.Up7gJGDuPnw.js.map