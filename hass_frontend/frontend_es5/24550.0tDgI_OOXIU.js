"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[24550],{24550:function(e,t,a){a.r(t),a.d(t,{ZHAAddGroupPage:function(){return b}});var i,n,s,r=a(99312),o=a(81043),d=a(88962),c=a(33368),h=a(71650),l=a(82390),p=a(69205),u=a(70906),f=a(91808),g=a(34541),v=a(47838),_=(a(97393),a(46349),a(70320),a(47704),a(6971),a(68144)),k=a(95260),y=a(83849),m=(a(31206),a(22383)),b=(a(60010),a(88165),a(79484),(0,f.Z)([(0,k.Mo)("zha-add-group-page")],(function(e,t){var a,f,b=function(t){(0,p.Z)(i,t);var a=(0,u.Z)(i);function i(){var t;(0,h.Z)(this,i);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return t=a.call.apply(a,[this].concat(s)),e((0,l.Z)(t)),t}return(0,c.Z)(i)}(t);return{F:b,d:[{kind:"field",decorators:[(0,k.Cb)({type:Object})],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Array})],key:"deviceEndpoints",value:function(){return[]}},{kind:"field",decorators:[(0,k.SB)()],key:"_processingAdd",value:function(){return!1}},{kind:"field",decorators:[(0,k.SB)()],key:"_groupName",value:function(){return""}},{kind:"field",decorators:[(0,k.IO)("zha-device-endpoint-data-table",!0)],key:"_zhaDevicesDataTable",value:void 0},{kind:"field",key:"_firstUpdatedCalled",value:function(){return!1}},{kind:"field",key:"_selectedDevicesToAdd",value:function(){return[]}},{kind:"method",key:"connectedCallback",value:function(){(0,g.Z)((0,v.Z)(b.prototype),"connectedCallback",this).call(this),this.hass&&this._firstUpdatedCalled&&this._fetchData()}},{kind:"method",key:"firstUpdated",value:function(e){(0,g.Z)((0,v.Z)(b.prototype),"firstUpdated",this).call(this,e),this.hass&&this._fetchData(),this._firstUpdatedCalled=!0}},{kind:"method",key:"render",value:function(){return(0,_.dy)(i||(i=(0,d.Z)([' <hass-subpage .hass="','" .narrow="','" .header="','"> <ha-config-section .isWide="','"> <p slot="introduction"> ',' </p> <paper-input type="string" .value="','" @value-changed="','" placeholder="','"></paper-input> <div class="header"> ',' </div> <zha-device-endpoint-data-table .hass="','" .deviceEndpoints="','" .narrow="','" selectable @selection-changed="','"> </zha-device-endpoint-data-table> <div class="buttons"> <mwc-button .disabled="','" @click="','" class="button"> '," ","</mwc-button> </div> </ha-config-section> </hass-subpage> "])),this.hass,this.narrow,this.hass.localize("ui.panel.config.zha.groups.create_group"),!this.narrow,this.hass.localize("ui.panel.config.zha.groups.create_group_details"),this._groupName,this._handleNameChange,this.hass.localize("ui.panel.config.zha.groups.group_name_placeholder"),this.hass.localize("ui.panel.config.zha.groups.add_members"),this.hass,this.deviceEndpoints,this.narrow,this._handleAddSelectionChanged,!this._groupName||""===this._groupName||this._processingAdd,this._createGroup,this._processingAdd?(0,_.dy)(n||(n=(0,d.Z)(['<ha-circular-progress indeterminate size="small" .ariaLabel="','"></ha-circular-progress>'])),this.hass.localize("ui.panel.config.zha.groups.creating_group")):"",this.hass.localize("ui.panel.config.zha.groups.create"))}},{kind:"method",key:"_fetchData",value:(f=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.pT)(this.hass);case 2:this.deviceEndpoints=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{kind:"method",key:"_handleAddSelectionChanged",value:function(e){this._selectedDevicesToAdd=e.detail.value}},{kind:"method",key:"_createGroup",value:(a=(0,o.Z)((0,r.Z)().mark((function e(){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._processingAdd=!0,t=this._selectedDevicesToAdd.map((function(e){var t=e.split("_");return{ieee:t[0],endpoint_id:t[1]}})),e.next=4,(0,m.Rp)(this.hass,this._groupName,t);case 4:a=e.sent,this._selectedDevicesToAdd=[],this._processingAdd=!1,this._groupName="",this._zhaDevicesDataTable.clearSelection(),(0,y.c)("/config/zha/group/".concat(a.group_id),{replace:!0});case 10:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{kind:"method",key:"_handleNameChange",value:function(e){var t=e.currentTarget;this._groupName=t.value||""}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,_.iv)(s||(s=(0,d.Z)([".header{font-family:var(--paper-font-display1_-_font-family);-webkit-font-smoothing:var(--paper-font-display1_-_-webkit-font-smoothing);font-size:var(--paper-font-display1_-_font-size);font-weight:var(--paper-font-display1_-_font-weight);letter-spacing:var(--paper-font-display1_-_letter-spacing);line-height:var(--paper-font-display1_-_line-height);opacity:var(--dark-primary-opacity)}.button{float:right}ha-config-section :last-child{padding-bottom:24px}.buttons{align-items:flex-end;padding:8px}.buttons .warning{--mdc-theme-primary:var(--error-color)}"])))]}}]}}),_.oi))}}]);
//# sourceMappingURL=24550.0tDgI_OOXIU.js.map