"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[97740],{43793:function(e,t,n){n.d(t,{x:function(){return r}});var r=function(e,t){return e.substring(0,t.length)===t}},39258:function(e,t,n){n.d(t,{U:function(){return f}});n(51358),n(96043),n(46798),n(5239),n(98490);var r=n(55070),i=n(15838),o=n(89525),a=n(58831),s=n(6229),c=n(56007),u=n(22134),l={media_player:{paused:.5,idle:1},vacuum:{returning:.5}};var d=0,h=new Map;function f(e,t,n){return function(e,t,n){var r;if(!n||e===c.nZ)return(0,u.g)("--history-unavailable-color",t);if(e===c.lz)return(0,u.g)("--history-unknown-color",t);var d=(0,s.tD)(n,e);if(d){var h=(0,u.g)(d,t);if(h){var f=(0,a.M)(n.entity_id),_=null===(r=l[f])||void 0===r?void 0:r[e];return _?(0,i.uO)((0,o.C)((0,i.Rw)((0,i.wK)(h)),_)):h}}}(e,t,n)||function(e,t){if(h.has(e))return h.get(e);var n=(0,r.hZ)(d,t);return d++,h.set(e,n),n}(e,t)}},31206:function(e,t,n){n.r(t),n.d(t,{HaCircularProgress:function(){return g}});var r,i=n(88962),o=n(53709),a=n(33368),s=n(71650),c=n(82390),u=n(69205),l=n(70906),d=n(91808),h=n(34541),f=n(47838),_=(n(97393),n(34131),n(22129)),v=n(68144),p=n(95260),g=(0,d.Z)([(0,p.Mo)("ha-circular-progress")],(function(e,t){var n=function(t){(0,u.Z)(r,t);var n=(0,l.Z)(r);function r(){var t;(0,s.Z)(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e((0,c.Z)(t)),t}return(0,a.Z)(r)}(t);return{F:n,d:[{kind:"field",decorators:[(0,p.Cb)({attribute:"aria-label",type:String})],key:"ariaLabel",value:function(){return"Loading"}},{kind:"field",decorators:[(0,p.Cb)()],key:"size",value:function(){return"medium"}},{kind:"method",key:"updated",value:function(e){if((0,h.Z)((0,f.Z)(n.prototype),"updated",this).call(this,e),e.has("size"))switch(this.size){case"tiny":this.style.setProperty("--md-circular-progress-size","16px");break;case"small":this.style.setProperty("--md-circular-progress-size","28px");break;case"medium":this.style.setProperty("--md-circular-progress-size","48px");break;case"large":this.style.setProperty("--md-circular-progress-size","68px")}}},{kind:"get",static:!0,key:"styles",value:function(){return[].concat((0,o.Z)((0,h.Z)((0,f.Z)(n),"styles",this)),[(0,v.iv)(r||(r=(0,i.Z)([":host{--md-sys-color-primary:var(--primary-color);--md-circular-progress-size:48px}"])))])}}]}}),_.B)},99282:function(e,t,n){var r=n(33368),i=n(71650),o=n(82390),a=n(69205),s=n(70906),c=n(91808),u=(n(97393),n(95260)),l=n(30418),d=n(52039);(0,c.Z)([(0,u.Mo)("ha-icon-next")],(function(e,t){var n=function(t){(0,a.Z)(c,t);var n=(0,s.Z)(c);function c(){var t;(0,i.Z)(this,c);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return t=n.call.apply(n,[this].concat(a)),e((0,o.Z)(t)),t}return(0,r.Z)(c)}(t);return{F:n,d:[{kind:"field",decorators:[(0,u.Cb)()],key:"path",value:function(){return"rtl"===l.E.document.dir?"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z":"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}}]}}),d.C)},57266:function(e,t,n){n.d(t,{jV:function(){return f},o1:function(){return y},MY:function(){return b},sS:function(){return v},ri:function(){return k},hb:function(){return m},Yc:function(){return g}});var r,i=n(99312),o=n(81043),a=(n(46798),n(47084),n(88640),n(63789),n(24074),n(94570),n(49706)),s=n(58831),c=n(22311),u=n(21780),l=function(e,t){return function(e){switch(e){case"de":case"lb":return!0;default:return!1}}(t)?(0,u.f)(e):e.toLocaleLowerCase(t)},d=n(56007),h="ui.components.logbook.messages",f=["counter","proximity","sensor","zone"],_={"numeric state of":"triggered_by_numeric_state_of","state of":"triggered_by_state_of",event:"triggered_by_event",time:"triggered_by_time","time pattern":"triggered_by_time_pattern","ioBroker stopping":"triggered_by_homeassistant_stopping","ioBroker starting":"triggered_by_homeassistant_starting"},v=32143==n.j?(r=(0,o.Z)((0,i.Z)().mark((function e(t,n,r){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p(t,n,void 0,void 0,r));case 1:case"end":return e.stop()}}),e)}))),function(e,t,n){return r.apply(this,arguments)}):null,p=function(e,t,n,r,i,o){if((r||o)&&(!r||0===r.length)&&(!o||0===o.length))return Promise.resolve([]);var a={type:"logbook/get_events",start_time:t};return n&&(a.end_time=n),null!=r&&r.length&&(a.entity_ids=r),null!=o&&o.length&&(a.device_ids=o),i&&(a.context_id=i),e.callWS(a)},g=function(e,t,n,r,i,o){if((i||o)&&(!i||0===i.length)&&(!o||0===o.length))return Promise.reject("No entities or devices");var a={type:"logbook/event_stream",start_time:n,end_time:r};return null!=i&&i.length&&(a.entity_ids=i),null!=o&&o.length&&(a.device_ids=o),e.connection.subscribeMessage((function(e){return t(e)}),a)},y=function(e,t){return{entity_id:e.entity_id,state:t,attributes:{device_class:null==e?void 0:e.attributes.device_class,source_type:null==e?void 0:e.attributes.source_type,has_date:null==e?void 0:e.attributes.has_date,has_time:null==e?void 0:e.attributes.has_time,entity_picture_local:a.iY.has((0,s.M)(e.entity_id))||null==e?void 0:e.attributes.entity_picture_local,entity_picture:a.iY.has((0,s.M)(e.entity_id))||null==e?void 0:e.attributes.entity_picture}}},m=function(e,t){for(var n in _)if(t.startsWith(n))return t.replace(n,"".concat(e("ui.components.logbook.".concat(_[n]))));return t},k=function(e,t,n,r,i){switch(i){case"device_tracker":case"person":return"not_home"===n?t("".concat(h,".was_away")):"home"===n?t("".concat(h,".was_at_home")):t("".concat(h,".was_at_state"),{state:n});case"sun":return t("".concat(h,"above_horizon"===n?".rose":".set"));case"binary_sensor":var o=n===a.uo,s=n===a.lC,c=r.attributes.device_class;switch(c){case"battery":if(o)return t("".concat(h,".was_low"));if(s)return t("".concat(h,".was_normal"));break;case"connectivity":if(o)return t("".concat(h,".was_connected"));if(s)return t("".concat(h,".was_disconnected"));break;case"door":case"garage_door":case"opening":case"window":if(o)return t("".concat(h,".was_opened"));if(s)return t("".concat(h,".was_closed"));break;case"lock":if(o)return t("".concat(h,".was_unlocked"));if(s)return t("".concat(h,".was_locked"));break;case"plug":if(o)return t("".concat(h,".was_plugged_in"));if(s)return t("".concat(h,".was_unplugged"));break;case"presence":if(o)return t("".concat(h,".was_at_home"));if(s)return t("".concat(h,".was_away"));break;case"safety":if(o)return t("".concat(h,".was_unsafe"));if(s)return t("".concat(h,".was_safe"));break;case"cold":case"gas":case"heat":case"moisture":case"motion":case"occupancy":case"power":case"problem":case"smoke":case"sound":case"vibration":if(o)return t("".concat(h,".detected_device_class"),{device_class:l(t("component.binary_sensor.entity_component.".concat(c,".name")),e.language)});if(s)return t("".concat(h,".cleared_device_class"),{device_class:l(t("component.binary_sensor.entity_component.".concat(c,".name")),e.language)});break;case"tamper":if(o)return t("".concat(h,".detected_tampering"));if(s)return t("".concat(h,".cleared_tampering"))}break;case"cover":switch(n){case"open":return t("".concat(h,".was_opened"));case"opening":return t("".concat(h,".is_opening"));case"closing":return t("".concat(h,".is_closing"));case"closed":return t("".concat(h,".was_closed"))}break;case"event":return t("".concat(h,".detected_event_no_type"));case"lock":switch(n){case"unlocked":return t("".concat(h,".was_unlocked"));case"locking":return t("".concat(h,".is_locking"));case"unlocking":return t("".concat(h,".is_unlocking"));case"locked":return t("".concat(h,".was_locked"));case"jammed":return t("".concat(h,".is_jammed"))}}return n===a.uo?t("".concat(h,".turned_on")):n===a.lC?t("".concat(h,".turned_off")):n===d.lz?t("".concat(h,".became_unknown")):n===d.nZ?t("".concat(h,".became_unavailable")):e.localize("".concat(h,".changed_to_state"),{state:r?e.formatEntityState(r,n):n})},b=function(e){return"sensor"!==(0,c.N)(e)||void 0===e.attributes.unit_of_measurement&&void 0===e.attributes.state_class}},97389:function(e,t,n){n.d(t,{U_:function(){return a},Zm:function(){return c},lj:function(){return o},mA:function(){return i},nV:function(){return s}});n(64777),n(76843),n(51467),n(85472),n(46798),n(9849),n(90126),n(65974);if(32143==n.j)var r=n(43793);var i=function(e,t,n,r){return e.callWS({type:"trace/get",domain:t,item_id:n,run_id:r})},o=function(e,t,n){return e.callWS({type:"trace/list",domain:t,item_id:n})},a=function(e,t,n){return e.callWS({type:"trace/contexts",domain:t,item_id:n})},s=function(e,t){for(var n=t.split("/").reverse(),r=e;n.length;){var i=n.pop(),o=Number(i);if(isNaN(o)){var a=r[i];if(!a&&"sequence"===i)continue;r=a}else if(Array.isArray(r))r=r[o];else if(0!==o)throw new Error("If config is not an array, can only return index 0")}return r},c=function(e){return"trigger"===e||(0,r.x)(e,"trigger/")}},65253:function(e,t,n){n.d(t,{CE:function(){return u},FH:function(){return m},Nq:function(){return h},Pb:function(){return c},fm:function(){return _},h8:function(){return f},r4:function(){return d},uh:function(){return l}});var r,i,o,a=n(99312),s=n(81043),c=(n(85717),n(91989),n(46349),n(70320),n(17692),n(11451),n(36513),"system-admin"),u="system-users",l=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/list"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=32143==n.j?(r=(0,s.Z)((0,a.Z)().mark((function e(t,n,r,i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/create",name:n,group_ids:r,local_only:i}));case 1:case"end":return e.stop()}}),e)}))),function(e,t,n,i){return r.apply(this,arguments)}):null,h=32143==n.j?(i=(0,s.Z)((0,a.Z)().mark((function e(t,n,r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS(Object.assign(Object.assign({},r),{},{type:"config/auth/update",user_id:n})));case 1:case"end":return e.stop()}}),e)}))),function(e,t,n){return i.apply(this,arguments)}):null,f=32143==n.j?(o=(0,s.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.callWS({type:"config/auth/delete",user_id:n}));case 1:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}):null,_=function(e){return e?e.trim().split(" ").slice(0,3).map((function(e){return e.substring(0,1)})).join(""):"?"},v=32143==n.j?"M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20M8 14L7 8L10 10L12 7L14 10L17 8L16 14H8M8.56 16C8.22 16 8 15.78 8 15.44V15H16V15.44C16 15.78 15.78 16 15.44 16H8.56Z":null,p=32143==n.j?"M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z":null,g=32143==n.j?"M12 20C7.6 20 4 16.4 4 12S7.6 4 12 4 20 7.6 20 12 16.4 20 12 20M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M11 14H13V17H16V12H18L12 7L6 12H8V17H11V14":null,y=32143==n.j?"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z":null,m=function(e,t,n){var r=[],i=function(t){return e.localize("ui.panel.config.users.".concat(t))};return t.is_owner&&r.push([v,i("is_owner")]),n&&t.system_generated&&r.push([p,i("is_system")]),t.local_only&&r.push([g,i("is_local")]),t.is_active||r.push([y,i("is_not_active")]),r}},44198:function(e,t,n){var r,i,o,a,s,c,u,l,d,h,f,_,v,p,g,y,m,k,b=n(88962),x=n(33368),w=n(71650),Z=n(82390),C=n(69205),z=n(70906),L=n(91808),M=(n(63789),n(24074),n(97393),n(51358),n(46798),n(98490),n(46349),n(70320),n(40271),n(22859),n(60163),n(56308),n(36513),n(41353),n(91989),n(2094),n(68144)),E=n(95260),S=n(83448),I=n(47501),T=n(7323),B=n(12198),P=n(49684),j=n(25516),A=n(47181),U=n(58831),N=n(83849),H=n(39258),D=(n(3143),n(31206),n(99282),n(42952),n(57266)),V=n(11654),O=n(46134),W=n(11254),R=n(5986),F=["script","automation"];(0,L.Z)([(0,E.Mo)("ha-logbook-renderer")],(function(e,t){var n=function(t){(0,C.Z)(r,t);var n=(0,z.Z)(r);function r(){var t;(0,w.Z)(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e((0,Z.Z)(t)),t}return(0,x.Z)(r)}(t);return{F:n,d:[{kind:"field",decorators:[(0,E.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,E.Cb)({attribute:!1})],key:"userIdToName",value:function(){return{}}},{kind:"field",decorators:[(0,E.Cb)({attribute:!1})],key:"traceContexts",value:function(){return{}}},{kind:"field",decorators:[(0,E.Cb)({attribute:!1})],key:"entries",value:function(){return[]}},{kind:"field",decorators:[(0,E.Cb)({type:Boolean,attribute:"narrow"})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,E.Cb)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:function(){return!1}},{kind:"field",decorators:[(0,E.Cb)({type:Boolean,attribute:"show-indicator"})],key:"showIndicator",value:function(){return!1}},{kind:"field",decorators:[(0,E.Cb)({type:Boolean,attribute:"no-icon"})],key:"noIcon",value:function(){return!1}},{kind:"field",decorators:[(0,E.Cb)({type:Boolean,attribute:"no-name"})],key:"noName",value:function(){return!1}},{kind:"field",decorators:[(0,E.Cb)({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value:function(){return!1}},{kind:"field",decorators:[(0,j.i)(".container")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"willUpdate",value:function(e){(!this.hasUpdated&&this.virtualize||e.has("virtualize")&&this.virtualize)&&(this.hass.loadBackendTranslation("services"),this.hass.loadBackendTranslation("title"),(0,O.o)())}},{kind:"method",key:"shouldUpdate",value:function(e){var t=e.get("hass"),n=void 0===t||t.locale!==this.hass.locale;return e.has("entries")||e.has("traceContexts")||n}},{kind:"method",key:"render",value:function(){var e,t=this;return null!==(e=this.entries)&&void 0!==e&&e.length?(0,M.dy)(i||(i=(0,b.Z)([' <div class="container ha-scrollbar ','" @scroll="','"> '," </div> "])),(0,S.$)({narrow:this.narrow,"no-name":this.noName,"no-icon":this.noIcon}),this._saveScrollPos,this.virtualize?(0,M.dy)(o||(o=(0,b.Z)(['<lit-virtualizer @visibilityChanged="','" scroller class="ha-scrollbar" .items="','" .renderItem="','"> </lit-virtualizer>'])),this._visibilityChanged,this.entries,this._renderLogbookItem):this.entries.map((function(e,n){return t._renderLogbookItem(e,n)}))):(0,M.dy)(r||(r=(0,b.Z)([' <div class="container no-entries"> '," </div> "])),this.hass.localize("ui.components.logbook.entries_not_found"))}},{kind:"field",key:"_renderLogbookItem",value:function(){var e=this;return function(t,n){var r;if(!t||void 0===n)return M.Ld;var i=e.entries[n-1],o=[],d=t.entity_id?e.hass.states[t.entity_id]:void 0,h=d?(0,D.o1)(d,t.state):void 0,f=t.entity_id?(0,U.M)(t.entity_id):t.domain,_=h||t.icon||t.state||!f||!(0,T.p)(e.hass,f)?void 0:(0,W.X1)({domain:f,type:"icon",useFallback:!0,darkOptimized:null===(r=e.hass.themes)||void 0===r?void 0:r.darkMode}),v=F.includes(t.domain)&&t.context_id in e.traceContexts?e.traceContexts[t.context_id]:void 0,p=void 0!==v;return(0,M.dy)(a||(a=(0,b.Z)([' <div class="entry-container ','" .traceLink="','" @click="','"> ',' <div class="entry ','"> <div class="icon-message"> '," ",' <div class="message-relative_time"> <div class="message"> '," "," ",' </div> <div class="secondary"> <span>','</span> - <ha-relative-time .hass="','" .datetime="','" capitalize></ha-relative-time> '," "," </div> </div> </div> "," </div> </div> "])),(0,S.$)({clickable:p}),v?"/config/".concat(v.domain,"/trace/").concat(v.item_id,"?run_id=").concat(v.run_id):void 0,e._handleClick,0===n||null!=t&&t.when&&null!=i&&i.when&&new Date(1e3*t.when).toDateString()!==new Date(1e3*i.when).toDateString()?(0,M.dy)(s||(s=(0,b.Z)([' <h4 class="date"> '," </h4> "])),(0,B.p6)(new Date(1e3*t.when),e.hass.locale,e.hass.config)):M.Ld,(0,S.$)({"no-entity":!t.entity_id}),e.noIcon?"":(0,M.dy)(c||(c=(0,b.Z)([' <state-badge .hass="','" .overrideIcon="','" .overrideImage="','" .stateObj="','" .stateColor="','"></state-badge> '])),e.hass,t.icon,_,t.icon?void 0:h,!1),e.showIndicator?e._renderIndicator(t):"",e.noName?"":e._renderEntity(t.entity_id,t.name,p),e._renderMessage(t,o,f,h,p),e._renderContextMessage(t,o,p),(0,P.Vu)(new Date(1e3*t.when),e.hass.locale,e.hass.config),e.hass,1e3*t.when,t.context_user_id?(0,M.dy)(u||(u=(0,b.Z)(["",""])),e._renderUser(t)):"",p?"- ".concat(e.hass.localize("ui.components.logbook.show_trace")):"",p?(0,M.dy)(l||(l=(0,b.Z)(["<ha-icon-next></ha-icon-next>"]))):"")}}},{kind:"method",decorators:[(0,E.hO)({passive:!0})],key:"_saveScrollPos",value:function(e){this._savedScrollPos=e.target.scrollTop}},{kind:"method",decorators:[(0,E.hO)({passive:!0})],key:"_visibilityChanged",value:function(e){(0,A.B)(this,"hass-logbook-live",{enable:0===e.first})}},{kind:"method",key:"_renderIndicator",value:function(e){var t=this.hass.states[e.entity_id],n=getComputedStyle(this),r={backgroundColor:void 0!==e.state?(0,H.U)(e.state,n,t):void 0};return(0,M.dy)(d||(d=(0,b.Z)([' <div class="indicator" style="','"></div> '])),(0,I.V)(r))}},{kind:"method",key:"_renderMessage",value:function(e,t,n,r,i){if(e.entity_id&&e.state)return r?(0,D.ri)(this.hass,this.hass.localize,e.state,r,n):e.state;var o=function(e){return e.context_event_type||e.context_state||e.context_message}(e),a=e.message;if(F.includes(n)&&e.source){if(o)return"";a=(0,D.hb)(this.hass.localize,e.source)}return a?this._formatMessageWithPossibleEntity(o?function(e,t){return t?e.replace(t," "):e}(a,e.context_entity_id):a,t,void 0,i):""}},{kind:"method",key:"_renderUser",value:function(e){var t=e.context_user_id&&this.userIdToName[e.context_user_id];return t?"- ".concat(t):""}},{kind:"method",key:"_renderUnseenContextSourceEntity",value:function(e,t,n){return!e.context_entity_id||t.includes(e.context_entity_id)?"":(0,M.dy)(h||(h=(0,b.Z)([" (",")"])),this._renderEntity(e.context_entity_id,e.context_entity_id_name,n))}},{kind:"method",key:"_renderContextMessage",value:function(e,t,n){if(e.context_state){var r=e.context_entity_id&&e.context_entity_id in this.hass.states?(0,D.o1)(this.hass.states[e.context_entity_id],e.context_state):void 0;return(0,M.dy)(f||(f=(0,b.Z)([""," "," ",""])),this.hass.localize("ui.components.logbook.triggered_by_state_of"),this._renderEntity(e.context_entity_id,e.context_entity_id_name,n),r?(0,D.ri)(this.hass,this.hass.localize,e.context_state,r,(0,U.M)(e.context_entity_id)):e.context_state)}var i;if("call_service"===e.context_event_type)return(0,M.dy)(_||(_=(0,b.Z)([""," ",""])),this.hass.localize("ui.components.logbook.triggered_by_service"),e.context_domain&&e.context_service?"".concat((0,R.Lh)(this.hass.localize,e.context_domain),":\n      ").concat(this.hass.localize("component.".concat(e.context_domain,".services.").concat(e.context_service,".name"))||(null===(i=this.hass.services[e.context_domain])||void 0===i||null===(i=i[e.context_service])||void 0===i?void 0:i.name)||e.context_service):"");if(!e.context_message||t.includes(e.context_entity_id))return"";if("automation_triggered"===e.context_event_type||"script_started"===e.context_event_type){var o=e.context_source?e.context_source:e.context_message.replace("triggered by ",""),a=(0,D.hb)(this.hass.localize,o);return(0,M.dy)(v||(v=(0,b.Z)([""," "," ",""])),this.hass.localize("automation_triggered"===e.context_event_type?"ui.components.logbook.triggered_by_automation":"ui.components.logbook.triggered_by_script"),this._renderEntity(e.context_entity_id,e.context_entity_id_name,n),e.context_message?this._formatMessageWithPossibleEntity(a,t,void 0,n):"")}return(0,M.dy)(p||(p=(0,b.Z)([" "," "," "," ",""])),this.hass.localize("ui.components.logbook.triggered_by"),e.context_name,this._formatMessageWithPossibleEntity(e.context_message,t,e.context_entity_id,n),this._renderUnseenContextSourceEntity(e,t,n))}},{kind:"method",key:"_renderEntity",value:function(e,t,n){var r=e&&e in this.hass.states,i=t||r&&this.hass.states[e].attributes.friendly_name||e;return r?n?i:(0,M.dy)(g||(g=(0,b.Z)(['<button class="link" @click="','" .entityId="','"> '," </button>"])),this._entityClicked,e,i):i}},{kind:"method",key:"_formatMessageWithPossibleEntity",value:function(e,t,n,r){if(-1!==e.indexOf("."))for(var i=e.split(" "),o=0,a=i.length;o<a;o++)if(i[o]in this.hass.states){var s=i[o];if(t.includes(s))return"";t.push(s);var c=i.splice(o);return c.shift(),(0,M.dy)(y||(y=(0,b.Z)([""," "," ",""])),i.join(" "),this._renderEntity(s,this.hass.states[s].attributes.friendly_name,r),c.join(" "))}if(n&&n in this.hass.states){var u=this.hass.states[n].attributes.friendly_name;if(u&&e.endsWith(u))return t.includes(n)?"":(t.push(n),e=e.substring(0,e.length-u.length),(0,M.dy)(m||(m=(0,b.Z)([""," ",""])),e,this._renderEntity(n,u,r)))}return e}},{kind:"method",key:"_entityClicked",value:function(e){var t=e.currentTarget.entityId;t&&(e.preventDefault(),e.stopPropagation(),(0,A.B)(this,"hass-more-info",{entityId:t}))}},{kind:"method",key:"_handleClick",value:function(e){e.currentTarget.traceLink&&((0,N.c)(e.currentTarget.traceLink),(0,A.B)(this,"closed"))}},{kind:"get",static:!0,key:"styles",value:function(){return[V.Qx,V.$c,V.k1,(0,M.iv)(k||(k=(0,b.Z)([":host([virtualize]){display:block;height:100%}.entry-container{width:100%}.entry{position:relative;display:flex;width:100%;line-height:2em;padding:8px 16px;box-sizing:border-box;border-top:1px solid var(--divider-color);justify-content:space-between;align-items:center}.indicator{background-color:var(--disabled-color);height:8px;width:8px;border-radius:4px;flex-shrink:0;margin-right:12px;margin-inline-start:initial;margin-inline-end:12px;direction:var(--direction)}ha-icon-next{color:var(--secondary-text-color)}.clickable{cursor:pointer}:not(.clickable) .entry.no-entity,:not(.clickable) .no-name .entry{cursor:default}.entry:hover{background-color:rgba(var(--rgb-primary-text-color),.04)}.narrow:not(.no-icon) .time{margin-left:32px;margin-inline-start:32px;margin-inline-end:initial;direction:var(--direction)}.message-relative_time{display:flex;flex-direction:column}.secondary{font-size:12px;line-height:1.7}.secondary a{color:var(--secondary-text-color)}.date{margin:8px 0;padding:0 16px}.icon-message{display:flex;align-items:center}.no-entries{text-align:center;color:var(--secondary-text-color)}state-badge{margin-right:16px;margin-inline-start:initial;flex-shrink:0;color:var(--state-icon-color);margin-inline-end:16px;direction:var(--direction)}.message{color:var(--primary-text-color)}.no-name .message:first-letter{text-transform:capitalize}a{color:var(--primary-color);text-decoration:none}button.link{color:var(--paper-item-icon-color);text-decoration:none}.container{max-height:var(--logbook-max-height)}.container,lit-virtualizer{height:100%}lit-virtualizer{contain:size layout!important}.narrow .entry{line-height:1.5}.narrow .icon-message state-badge{margin-left:0;margin-inline-start:0;margin-inline-end:8px;margin-right:8px;direction:var(--direction)}"])))]}}]}}),M.oi)},97740:function(e,t,n){var r,i,o,a,s,c=n(40039),u=n(53709),l=n(99312),d=n(81043),h=n(88962),f=n(33368),_=n(71650),v=n(82390),p=n(69205),g=n(70906),y=n(91808),m=n(34541),k=n(47838),b=(n(46798),n(9849),n(13526),n(40271),n(60163),n(97393),n(50289),n(94167),n(51467),n(87438),n(22890),n(36513),n(64777),n(37313),n(10733),n(22859),n(68144)),x=n(95260),w=n(7323),Z=n(22311),C=n(8330),z=(n(31206),n(57266)),L=n(97389),M=n(65253),E=(n(44198),function(e,t){return new Date(e.getTime()-1e3*t).getTime()/1e3}),S=function(e,t){return(void 0!==e||void 0!==t)&&(!e||!t||e.length!==t.length||e.some((function(e){return!t.includes(e)}))||t.some((function(t){return!e.includes(t)})))};(0,y.Z)([(0,x.Mo)("ha-logbook")],(function(e,t){var n,y,I,T,B,P=function(t){(0,p.Z)(r,t);var n=(0,g.Z)(r);function r(){var t;(0,_.Z)(this,r);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=n.call.apply(n,[this].concat(o)),e((0,v.Z)(t)),t}return(0,f.Z)(r)}(t);return{F:P,d:[{kind:"field",decorators:[(0,x.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"time",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"entityIds",value:void 0},{kind:"field",decorators:[(0,x.Cb)()],key:"deviceIds",value:void 0},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"narrow"})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"virtualize",reflect:!0})],key:"virtualize",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"no-icon"})],key:"noIcon",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"no-name"})],key:"noName",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"show-indicator"})],key:"showIndicator",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value:function(){return!1}},{kind:"field",decorators:[(0,x.Cb)({type:Boolean})],key:"showMoreLink",value:function(){return!0}},{kind:"field",decorators:[(0,x.SB)()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[(0,x.SB)()],key:"_traceContexts",value:function(){return{}}},{kind:"field",decorators:[(0,x.SB)()],key:"_userIdToName",value:function(){return{}}},{kind:"field",decorators:[(0,x.SB)()],key:"_error",value:void 0},{kind:"field",key:"_subscribed",value:void 0},{kind:"field",key:"_liveUpdatesEnabled",value:function(){return!0}},{kind:"field",key:"_pendingStreamMessages",value:function(){return[]}},{kind:"field",key:"_throttleGetLogbookEntries",value:function(){var e=this;return(0,C.P)((function(){return e._getLogBookData()}),1e3)}},{kind:"method",key:"render",value:function(){return(0,w.p)(this.hass,"logbook")?this._error?(0,b.dy)(r||(r=(0,h.Z)(['<div class="no-entries"> '," </div>"])),"".concat(this.hass.localize("ui.components.logbook.retrieval_error"),": ").concat(this._error)):void 0===this._logbookEntries?(0,b.dy)(i||(i=(0,h.Z)([' <div class="progress-wrapper"> <ha-circular-progress indeterminate></ha-circular-progress> </div> ']))):0===this._logbookEntries.length?(0,b.dy)(o||(o=(0,h.Z)(['<div class="no-entries"> '," </div>"])),this.hass.localize("ui.components.logbook.entries_not_found")):(0,b.dy)(a||(a=(0,h.Z)([' <ha-logbook-renderer .hass="','" .narrow="','" .virtualize="','" .noIcon="','" .noName="','" .showIndicator="','" .relativeTime="','" .entries="','" .traceContexts="','" .userIdToName="','" @hass-logbook-live="','"></ha-logbook-renderer> '])),this.hass,this.narrow,this.virtualize,this.noIcon,this.noName,this.showIndicator,this.relativeTime,this._logbookEntries,this._traceContexts,this._userIdToName,this._handleLogbookLive):b.Ld}},{kind:"method",key:"refresh",value:(B=(0,d.Z)((0,l.Z)().mark((function e(){var t,n=arguments;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=n.length>0&&void 0!==n[0]&&n[0])||!this._subscribed&&void 0!==this._logbookEntries){e.next=3;break}return e.abrupt("return");case 3:return this._throttleGetLogbookEntries.cancel(),this._updateTraceContexts.cancel(),this._updateUsers.cancel(),e.next=8,this._unsubscribeSetLoading();case 8:t?this._getLogBookData():this._throttleGetLogbookEntries();case 9:case"end":return e.stop()}}),e,this)}))),function(){return B.apply(this,arguments)})},{kind:"method",key:"shouldUpdate",value:function(e){if(1!==e.size||!e.has("hass"))return!0;var t=e.get("hass");return!t||t.localize!==this.hass.localize}},{kind:"method",key:"willUpdate",value:function(e){for(var t=e.has("time"),n=0,r=["entityIds","deviceIds"];n<r.length;n++){var i=r[n];if(e.has(i)){var o=e.get(i),a=this[i];if(S(o,a)){t=!0;break}}}t&&this.refresh(!0)}},{kind:"method",key:"_handleLogbookLive",value:function(e){var t=this;e.detail.enable&&!this._liveUpdatesEnabled&&(this._pendingStreamMessages.forEach((function(e){return t._processStreamMessage(e)})),this._pendingStreamMessages=[]),this._liveUpdatesEnabled=e.detail.enable}},{kind:"get",key:"_filterAlwaysEmptyResults",value:function(){var e=this.entityIds,t=this.deviceIds;return Boolean(e||t)&&(!e||0===e.length)&&(!t||0===t.length)}},{kind:"method",key:"_unsubscribe",value:(T=(0,d.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._subscribed){e.next=13;break}return e.next=3,this._subscribed;case 3:if(!(t=e.sent)){e.next=12;break}return e.prev=5,e.next=8,t();case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(5);case 12:this._subscribed=void 0;case 13:case"end":return e.stop()}}),e,this,[[5,10]])}))),function(){return T.apply(this,arguments)})},{kind:"method",key:"connectedCallback",value:function(){(0,m.Z)((0,k.Z)(P.prototype),"connectedCallback",this).call(this),this.hasUpdated&&this._subscribeLogbookPeriod(this._calculateLogbookPeriod())}},{kind:"method",key:"disconnectedCallback",value:function(){(0,m.Z)((0,k.Z)(P.prototype),"disconnectedCallback",this).call(this),this._unsubscribeSetLoading()}},{kind:"method",key:"_unsubscribeSetLoading",value:(I=(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._unsubscribe();case 2:this._logbookEntries=void 0,this._pendingStreamMessages=[];case 4:case"end":return e.stop()}}),e,this)}))),function(){return I.apply(this,arguments)})},{kind:"method",key:"_unsubscribeNoResults",value:(y=(0,d.Z)((0,l.Z)().mark((function e(){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._unsubscribe();case 2:this._logbookEntries=[],this._pendingStreamMessages=[];case 4:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})},{kind:"method",key:"_calculateLogbookPeriod",value:function(){var e=new Date;if("range"in this.time)return{now:e,startTime:this.time.range[0],endTime:this.time.range[1],purgeBeforePythonTime:void 0};if("recent"in this.time){var t=E(e,this.time.recent);return{now:e,startTime:new Date(1e3*t),endTime:new Date(e.getTime()+31536e6),purgeBeforePythonTime:E(e,this.time.recent)}}throw new Error("Unexpected time specified")}},{kind:"method",key:"_subscribeLogbookPeriod",value:function(e){var t=this;return this._subscribed||(this._subscribed=(0,z.Yc)(this.hass,(function(e){t._subscribed&&t._processOrQueueStreamMessage(e)}),e.startTime.toISOString(),e.endTime.toISOString(),this.entityIds,this.deviceIds).catch((function(e){t._subscribed=void 0,t._error=e}))),!0}},{kind:"method",key:"_getLogBookData",value:(n=(0,d.Z)((0,l.Z)().mark((function e(){var t,n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._error=void 0,!this._filterAlwaysEmptyResults){e.next=4;break}return this._unsubscribeNoResults(),e.abrupt("return");case 4:if(!((n=this._calculateLogbookPeriod()).startTime>n.now)){e.next=8;break}return this._unsubscribeNoResults(),e.abrupt("return");case 8:this._updateUsers(),null!==(t=this.hass.user)&&void 0!==t&&t.is_admin&&this._updateTraceContexts(),this._subscribeLogbookPeriod(n);case 11:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{kind:"field",key:"_nonExpiredRecords",value:function(){var e=this;return function(t){return e._logbookEntries?t?e._logbookEntries.filter((function(e){return e.when>t})):e._logbookEntries:[]}}},{kind:"field",key:"_processOrQueueStreamMessage",value:function(){var e=this;return function(t){e._liveUpdatesEnabled?e._processStreamMessage(t):e._pendingStreamMessages.push(t)}}},{kind:"field",key:"_processStreamMessage",value:function(){var e=this;return function(t){var n="recent"in e.time?E(new Date,e.time.recent):void 0,r=(0,u.Z)(t.events).reverse();if(e._logbookEntries&&e._logbookEntries.length){if(r.length){var i=e._nonExpiredRecords(n);i.length?r[r.length-1].when>i[0].when?e._logbookEntries=r.concat(i):i[i.length-1].when>r[0].when?e._logbookEntries=i.concat(r):e._logbookEntries=i.concat(r).sort((function(e,t){return t.when-e.when})):e._logbookEntries=r}}else e._logbookEntries=r}}},{kind:"field",key:"_updateTraceContexts",value:function(){var e=this;return(0,C.P)((0,d.Z)((0,l.Z)().mark((function t(){return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,L.U_)(e.hass);case 2:e._traceContexts=t.sent;case 3:case"end":return t.stop()}}),t)}))),6e4)}},{kind:"field",key:"_updateUsers",value:function(){var e=this;return(0,C.P)((0,d.Z)((0,l.Z)().mark((function t(){var n,r,i,o,a,s,u,d,h,f;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r={},i=(null===(n=e.hass.user)||void 0===n?void 0:n.is_admin)&&(0,M.uh)(e.hass),o=0,a=Object.values(e.hass.states);o<a.length;o++)(s=a[o]).attributes.user_id&&"person"===(0,Z.N)(s)&&(r[s.attributes.user_id]=s.attributes.friendly_name);if(!i){t.next=9;break}return t.next=6,i;case 6:u=t.sent,d=(0,c.Z)(u);try{for(d.s();!(h=d.n()).done;)(f=h.value).id in r||(r[f.id]=f.name)}catch(l){d.e(l)}finally{d.f()}case 9:e._userIdToName=r;case 10:case"end":return t.stop()}}),t)}))),6e4)}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,b.iv)(s||(s=(0,h.Z)([":host{display:block}:host([virtualize]){height:100%}.no-entries{text-align:center;padding:16px;color:var(--secondary-text-color)}.progress-wrapper{display:flex;justify-content:center;height:100%;align-items:center}"])))]}}]}}),b.oi)},11254:function(e,t,n){n.d(t,{RU:function(){return i},X1:function(){return r},u4:function(){return o},zC:function(){return a}});n(97393),n(88640);var r=function(e){return"https://brands.home-assistant.io/".concat(e.brand?"brands/":"").concat(e.useFallback?"_/":"").concat(e.domain,"/").concat(e.darkOptimized?"dark_":"").concat(e.type,".png")},i=function(e){return"https://brands.home-assistant.io/hardware/".concat(e.category,"/").concat(e.darkOptimized?"dark_":"").concat(e.manufacturer).concat(e.model?"_".concat(e.model):"",".png")},o=function(e){return e.split("/")[4]},a=function(e){return e.startsWith("https://brands.home-assistant.io/")}}}]);
//# sourceMappingURL=97740.6ee2jTp3kOU.js.map