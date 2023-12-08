"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5553],{8485:function(e,t,i){i.d(t,{a:function(){return x}});var n,a=i(88962),o=i(99312),r=i(81043),l=i(71650),s=i(33368),d=i(69205),c=i(70906),u=i(43204),f=(i(95905),i(72774)),h={ROOT:"mdc-form-field"},p={LABEL_SELECTOR:".mdc-form-field > label"},m=function(e){function t(i){var n=e.call(this,(0,u.__assign)((0,u.__assign)({},t.defaultAdapter),i))||this;return n.click=function(){n.handleClick()},n}return(0,u.__extends)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},t}(f.K),g=i(78220),v=i(18601),y=i(14114),b=i(68144),k=i(95260),_=i(83448),x=function(e){(0,d.Z)(i,e);var t=(0,c.Z)(i);function i(){var e;return(0,l.Z)(this,i),(e=t.apply(this,arguments)).alignEnd=!1,e.spaceBetween=!1,e.nowrap=!1,e.label="",e.mdcFoundationClass=m,e}return(0,s.Z)(i,[{key:"createAdapter",value:function(){var e,t,i=this;return{registerInteractionHandler:function(e,t){i.labelEl.addEventListener(e,t)},deregisterInteractionHandler:function(e,t){i.labelEl.removeEventListener(e,t)},activateInputRipple:(t=(0,r.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=i.input)instanceof v.Wg)){e.next=6;break}return e.next=4,t.ripple;case 4:(n=e.sent)&&n.startPress();case 6:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)}),deactivateInputRipple:(e=(0,r.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=i.input)instanceof v.Wg)){e.next=6;break}return e.next=4,t.ripple;case 4:(n=e.sent)&&n.endPress();case 6:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})}}},{key:"input",get:function(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}},{key:"render",value:function(){var e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return(0,b.dy)(n||(n=(0,a.Z)([' <div class="mdc-form-field ','"> <slot></slot> <label class="mdc-label" @click="','">',"</label> </div>"])),(0,_.$)(e),this._labelClick,this.label)}},{key:"click",value:function(){this._labelClick()}},{key:"_labelClick",value:function(){var e=this.input;e&&(e.focus(),e.click())}}]),i}(g.H);(0,u.__decorate)([(0,k.Cb)({type:Boolean})],x.prototype,"alignEnd",void 0),(0,u.__decorate)([(0,k.Cb)({type:Boolean})],x.prototype,"spaceBetween",void 0),(0,u.__decorate)([(0,k.Cb)({type:Boolean})],x.prototype,"nowrap",void 0),(0,u.__decorate)([(0,k.Cb)({type:String}),(0,y.P)(function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(i=this.input)||void 0===i||i.setAttribute("aria-label",t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}())],x.prototype,"label",void 0),(0,u.__decorate)([(0,k.IO)(".mdc-form-field")],x.prototype,"mdcRoot",void 0),(0,u.__decorate)([(0,k.vZ)("",!0,"*")],x.prototype,"slottedInputs",void 0),(0,u.__decorate)([(0,k.IO)("label")],x.prototype,"labelEl",void 0)},92038:function(e,t,i){i.d(t,{W:function(){return o}});var n,a=i(88962),o=(0,i(68144).iv)(n||(n=(0,a.Z)([".mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{margin-left:auto;margin-right:0}.mdc-form-field>label[dir=rtl],[dir=rtl] .mdc-form-field>label{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{margin-left:0;margin-right:auto}.mdc-form-field--align-end>label[dir=rtl],[dir=rtl] .mdc-form-field--align-end>label{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}.mdc-form-field--space-between>label[dir=rtl],[dir=rtl] .mdc-form-field--space-between>label{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight,400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration,inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform,inherit);color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}::slotted(mwc-switch){margin-right:10px}::slotted(mwc-switch[dir=rtl]),[dir=rtl] ::slotted(mwc-switch){margin-left:10px}"])))},66695:function(e,t,i){i.d(t,{V:function(){return s}});var n=i(40039),a=i(33368),o=i(71650),r=(i(94738),i(98214),i(46798),i(51358),i(78399),i(5239),i(56086),i(47884),i(81912),i(64584),i(41483),i(12367),i(9454),i(98490),i(22859),i(56308),i(32797),i(37313),Symbol("selection controller")),l=(0,a.Z)((function e(){(0,o.Z)(this,e),this.selected=null,this.ordered=null,this.set=new Set})),s=function(){function e(t){var i=this;(0,o.Z)(this,e),this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,t.addEventListener("keydown",(function(e){i.keyDownHandler(e)})),t.addEventListener("mousedown",(function(){i.mousedownHandler()})),t.addEventListener("mouseup",(function(){i.mouseupHandler()}))}return(0,a.Z)(e,[{key:"keyDownHandler",value:function(e){var t=e.target;"checked"in t&&this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.selectNext(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.selectPrevious(t))}},{key:"mousedownHandler",value:function(){this.mouseIsDown=!0}},{key:"mouseupHandler",value:function(){this.mouseIsDown=!1}},{key:"has",value:function(e){return this.getSet(e.name).set.has(e)}},{key:"selectPrevious",value:function(e){var t=this.getOrdered(e),i=t.indexOf(e),n=t[i-1]||t[t.length-1];return this.select(n),n}},{key:"selectNext",value:function(e){var t=this.getOrdered(e),i=t.indexOf(e),n=t[i+1]||t[0];return this.select(n),n}},{key:"select",value:function(e){e.click()}},{key:"focus",value:function(e){if(!this.mouseIsDown){var t=this.getSet(e.name),i=this.focusedSet;this.focusedSet=t,i!=t&&t.selected&&t.selected!=e&&t.selected.focus()}}},{key:"isAnySelected",value:function(e){var t,i=this.getSet(e.name),a=(0,n.Z)(i.set);try{for(a.s();!(t=a.n()).done;){if(t.value.checked)return!0}}catch(o){a.e(o)}finally{a.f()}return!1}},{key:"getOrdered",value:function(e){var t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort((function(e,t){return e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0}))),t.ordered}},{key:"getSet",value:function(e){return this.sets[e]||(this.sets[e]=new l),this.sets[e]}},{key:"register",value:function(e){var t=e.name||e.getAttribute("name")||"",i=this.getSet(t);i.set.add(e),i.ordered=null}},{key:"unregister",value:function(e){var t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}},{key:"update",value:function(e){if(!this.updating){this.updating=!0;var t=this.getSet(e.name);if(e.checked){var i,a=(0,n.Z)(t.set);try{for(a.s();!(i=a.n()).done;){var o=i.value;o!=e&&(o.checked=!1)}}catch(d){a.e(d)}finally{a.f()}t.selected=e}if(this.isAnySelected(e)){var r,l=(0,n.Z)(t.set);try{for(l.s();!(r=l.n()).done;){var s=r.value;if(void 0===s.formElementTabIndex)break;s.formElementTabIndex=s.checked?0:-1}}catch(d){l.e(d)}finally{l.f()}}this.updating=!1}}}],[{key:"getController",value:function(t){var i=!("global"in t)||"global"in t&&t.global?document:t.getRootNode(),n=i[r];return void 0===n&&(n=new e(i),i[r]=n),n}}]),e}()},34821:function(e,t,i){i.d(t,{i:function(){return _}});var n,a,o,r=i(33368),l=i(71650),s=i(82390),d=i(69205),c=i(70906),u=i(91808),f=i(34541),h=i(47838),p=i(88962),m=(i(97393),i(91989),i(87762)),g=i(91632),v=i(68144),y=i(95260),b=i(74265),k=(i(10983),["button","ha-list-item"]),_=function(e,t){var i;return(0,v.dy)(n||(n=(0,p.Z)([' <div class="header_title">','</div> <ha-icon-button .label="','" .path="','" dialogAction="close" class="header_button"></ha-icon-button> '])),t,null!==(i=null==e?void 0:e.localize("ui.dialogs.generic.close"))&&void 0!==i?i:"Close","M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z")};(0,u.Z)([(0,y.Mo)("ha-dialog")],(function(e,t){var i=function(t){(0,d.Z)(n,t);var i=(0,c.Z)(n);function n(){var t;(0,l.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,s.Z)(t)),t}return(0,r.Z)(n)}(t);return{F:i,d:[{kind:"field",key:b.gA,value:void 0},{kind:"method",key:"scrollToPos",value:function(e,t){var i;null===(i=this.contentElement)||void 0===i||i.scrollTo(e,t)}},{kind:"method",key:"renderHeading",value:function(){return(0,v.dy)(a||(a=(0,p.Z)(['<slot name="heading"> '," </slot>"])),(0,f.Z)((0,h.Z)(i.prototype),"renderHeading",this).call(this))}},{kind:"method",key:"firstUpdated",value:function(){var e;(0,f.Z)((0,h.Z)(i.prototype),"firstUpdated",this).call(this),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,k].join(", "),this._updateScrolledAttribute(),null===(e=this.contentElement)||void 0===e||e.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,f.Z)((0,h.Z)(i.prototype),"disconnectedCallback",this).call(this),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value:function(){var e=this;return function(){e._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:function(){return[g.W,(0,v.iv)(o||(o=(0,p.Z)([":host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(\n          --dialog-scroll-divider-color,\n          var(--divider-color)\n        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--dialog-backdrop-filter,none);backdrop-filter:var(--dialog-backdrop-filter,none);--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px;text-overflow:ellipsis;overflow:hidden}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{display:block;height:0px}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px)}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{margin-right:32px;margin-inline-end:32px;margin-inline-start:initial;direction:var(--direction)}.header_button{position:absolute;right:16px;top:14px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:16px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}"])))]}}]}}),m.M)},83927:function(e,t,i){var n,a=i(88962),o=i(33368),r=i(71650),l=i(82390),s=i(69205),d=i(70906),c=i(91808),u=(i(97393),i(8485)),f=i(92038),h=i(68144),p=i(95260),m=i(47181);(0,c.Z)([(0,p.Mo)("ha-formfield")],(function(e,t){var i=function(t){(0,s.Z)(n,t);var i=(0,d.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return t=i.call.apply(i,[this].concat(o)),e((0,l.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"method",key:"_labelClick",value:function(){var e=this.input;if(e&&(e.focus(),!e.disabled))switch(e.tagName){case"HA-CHECKBOX":e.checked=!e.checked,(0,m.B)(e,"change");break;case"HA-RADIO":e.checked=!0,(0,m.B)(e,"change");break;default:e.click()}}},{kind:"field",static:!0,key:"styles",value:function(){return[f.W,(0,h.iv)(n||(n=(0,a.Z)([":host(:not([alignEnd])) ::slotted(ha-switch){margin-right:10px;margin-inline-end:10px;margin-inline-start:inline}.mdc-form-field>label{direction:var(--direction);margin-inline-start:0;margin-inline-end:auto;padding-inline-start:4px;padding-inline-end:0}"])))]}}]}}),u.a)},33220:function(e,t,i){var n,a=i(88962),o=i(33368),r=i(71650),l=i(82390),s=i(69205),d=i(70906),c=i(91808),u=(i(97393),i(35433)),f=i(44973),h=i(68144),p=i(95260);(0,c.Z)([(0,p.Mo)("ha-radio")],(function(e,t){var i=function(t){(0,s.Z)(n,t);var i=(0,d.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return t=i.call.apply(i,[this].concat(o)),e((0,l.Z)(t)),t}return(0,o.Z)(n)}(t);return{F:i,d:[{kind:"field",static:!0,key:"styles",value:function(){return[f.W,(0,h.iv)(n||(n=(0,a.Z)([":host{--mdc-theme-secondary:var(--primary-color)}"])))]}}]}}),u.J)},24054:function(e,t,i){i.r(t),i.d(t,{DialogStatisticsFixUnitsChanged:function(){return y}});var n,a=i(99312),o=i(81043),r=i(88962),l=i(33368),s=i(71650),d=i(82390),c=i(69205),u=i(70906),f=i(91808),h=(i(97393),i(47704),i(68144)),p=i(95260),m=i(47181),g=(i(34821),i(83927),i(33220),i(38014)),v=i(11654),y=(0,f.Z)([(0,p.Mo)("dialog-statistics-fix-units-changed")],(function(e,t){var i,f=function(t){(0,c.Z)(n,t);var i=(0,u.Z)(n);function n(){var t;(0,s.Z)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o)),e((0,d.Z)(t)),t}return(0,l.Z)(n)}(t);return{F:f,d:[{kind:"field",decorators:[(0,p.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,p.SB)()],key:"_action",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._params=e,this._action="update"}},{kind:"method",key:"closeDialog",value:function(){this._params=void 0,this._action=void 0,(0,m.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._params?(0,h.dy)(n||(n=(0,r.Z)([' <ha-dialog open @closed="','" .heading="','"> <p> ',"<br> ","<br> "," </p> <h3> ",' </h3> <ha-formfield .label="','"> <ha-radio value="update" name="action" .checked="','" @change="','" dialogInitialFocus></ha-radio> </ha-formfield> <ha-formfield .label="','"> <ha-radio value="clear" name="action" .checked="','" @change="','"></ha-radio> </ha-formfield> <mwc-button slot="primaryAction" @click="','"> ',' </mwc-button> <mwc-button slot="secondaryAction" @click="','"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.units_changed.title"),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.units_changed.info_text_1",{current_unit:this._params.issue.data.state_unit,previous_unit:this._params.issue.data.metadata_unit}),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.units_changed.info_text_2"),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.units_changed.info_text_3"),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.units_changed.how_to_fix"),this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.units_changed.update",this._params.issue.data),"update"===this._action,this._handleActionChanged,this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.units_changed.clear"),"clear"===this._action,this._handleActionChanged,this._fixIssue,this.hass.localize("ui.panel.developer-tools.tabs.statistics.fix_issue.fix"),this.closeDialog,this.hass.localize("ui.common.close")):h.Ld}},{kind:"method",key:"_handleActionChanged",value:function(e){this._action=e.target.value}},{kind:"method",key:"_fixIssue",value:(i=(0,o.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("clear"!==this._action){e.next=5;break}return e.next=3,(0,g.hN)(this.hass,[this._params.issue.data.statistic_id]);case 3:e.next=8;break;case 5:if("update"!==this._action){e.next=8;break}return e.next=8,(0,g.Cj)(this.hass,this._params.issue.data.statistic_id,this._params.issue.data.state_unit);case 8:null===(t=this._params)||void 0===t||t.fixedCallback(),this.closeDialog();case 10:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[v.Qx,v.yu]}}]}}),h.oi)}}]);
//# sourceMappingURL=5553.cefR4wTLrKg.js.map