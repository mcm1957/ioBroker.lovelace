(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[38476],{53725:function(e,t,n){"use strict";n(95905),n(51467),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},e.exports=t.default},20508:function(e,t,n){"use strict";n(95905);var r=n(28847).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,i.default)({},e)};var i=r(n(53725));e.exports=t.default},59699:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(90394),i=n(39244),s=n(23682),o=36e5;function a(e,t){(0,s.Z)(2,arguments);var n=(0,r.Z)(t);return(0,i.Z)(e,n*o)}},39244:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(90394),i=n(34327),s=n(23682);function o(e,t){(0,s.Z)(2,arguments);var n=(0,i.Z)(e).getTime(),o=(0,r.Z)(t);return new Date(n+o)}},57879:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(34327),i=n(23682);function s(e,t){(0,i.Z)(2,arguments);var n=(0,r.Z)(e),s=(0,r.Z)(t),o=n.getTime()-s.getTime();return o<0?-1:o>0?1:o}},38588:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(76843);var r=n(34327),i=n(23682);var s=n(57879),o=n(63390);function a(e,t){(0,i.Z)(2,arguments);var n,a=(0,r.Z)(e),u=(0,r.Z)(t),c=(0,s.Z)(a,u),d=Math.abs(function(e,t){(0,i.Z)(2,arguments);var n=(0,r.Z)(e),s=(0,r.Z)(t);return 12*(n.getFullYear()-s.getFullYear())+(n.getMonth()-s.getMonth())}(a,u));if(d<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-c*d);var h=(0,s.Z)(a,u)===-c;(0,o.Z)((0,r.Z)(e))&&1===d&&1===(0,s.Z)(e,u)&&(h=!1),n=c*(d-Number(h))}return 0===n?0:n}},74774:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(34327),i=n(23682);function s(e){return(0,i.Z)(1,arguments),1===(0,r.Z)(e).getDate()}},63390:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(34327),i=n(93752),s=n(1905),o=n(23682);function a(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e);return(0,i.Z)(t).getTime()===(0,s.Z)(t).getTime()}},73826:function(e,t,n){"use strict";n.d(t,{f:function(){return f}});var r=n(40039),i=n(33368),s=n(71650),o=n(82390),a=n(69205),u=n(70906),c=n(91808),d=n(34541),h=n(47838),l=(n(97393),n(46798),n(47084),n(51358),n(98490),n(40271),n(60163),n(9849),n(13526),n(95260)),f=function(e){var t=(0,c.Z)(null,(function(e,t){var n=function(t){(0,a.Z)(r,t);var n=(0,u.Z)(r);function r(){var t;(0,s.Z)(this,r);for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return t=n.call.apply(n,[this].concat(a)),e((0,o.Z)(t)),t}return(0,i.Z)(r)}(t);return{F:n,d:[{kind:"field",decorators:[(0,l.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:void 0},{kind:"field",key:"__unsubs",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,d.Z)((0,h.Z)(n.prototype),"connectedCallback",this).call(this),this.__checkSubscribed()}},{kind:"method",key:"disconnectedCallback",value:function(){if((0,d.Z)((0,h.Z)(n.prototype),"disconnectedCallback",this).call(this),this.__unsubs){for(;this.__unsubs.length;){var e=this.__unsubs.pop();e instanceof Promise?e.then((function(e){return e()})):e()}this.__unsubs=void 0}}},{kind:"method",key:"updated",value:function(e){if((0,d.Z)((0,h.Z)(n.prototype),"updated",this).call(this,e),e.has("hass"))this.__checkSubscribed();else if(this.hassSubscribeRequiredHostProps){var t,i=(0,r.Z)(e.keys());try{for(i.s();!(t=i.n()).done;){var s=t.value;if(this.hassSubscribeRequiredHostProps.includes(s))return void this.__checkSubscribed()}}catch(o){i.e(o)}finally{i.f()}}}},{kind:"method",key:"hassSubscribe",value:function(){return[]}},{kind:"method",key:"__checkSubscribed",value:function(){var e,t=this;void 0!==this.__unsubs||!this.isConnected||void 0===this.hass||null!==(e=this.hassSubscribeRequiredHostProps)&&void 0!==e&&e.some((function(e){return void 0===t[e]}))||(this.__unsubs=this.hassSubscribe())}}]}}),e);return t}},61046:function(e,t,n){"use strict";n.r(t),n.d(t,{HuiEnergyCompareCard:function(){return g}});var r,i,s,o,a=n(88962),u=n(33368),c=n(71650),d=n(82390),h=n(69205),l=n(70906),f=n(91808),v=(n(97393),n(24112)),p=n(93752),Z=n(68144),k=n(95260),_=n(12198),b=n(55424),y=n(73826),m=n(53658),g=(0,f.Z)([(0,k.Mo)("hui-energy-compare-card")],(function(e,t){var n=function(t){(0,h.Z)(r,t);var n=(0,l.Z)(r);function r(){var t;(0,c.Z)(this,r);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return t=n.call.apply(n,[this].concat(s)),e((0,d.Z)(t)),t}return(0,u.Z)(r)}(t);return{F:n,d:[{kind:"field",decorators:[(0,k.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_start",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_end",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_startCompare",value:void 0},{kind:"field",decorators:[(0,k.SB)()],key:"_endCompare",value:void 0},{kind:"field",decorators:[(0,k.Cb)({type:Boolean,reflect:!0})],key:"hidden",value:function(){return!0}},{kind:"method",key:"getCardSize",value:function(){return 1}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"field",key:"hassSubscribeRequiredHostProps",value:function(){return["_config"]}},{kind:"method",key:"hassSubscribe",value:function(){var e=this;return[(0,b.UB)(this.hass,{key:this._config.collection_key}).subscribe((function(t){return e._update(t)}))]}},{kind:"method",key:"shouldUpdate",value:function(e){return(0,m.SN)(this,e)||e.size>1||!e.has("hass")}},{kind:"method",key:"render",value:function(){if(!this._startCompare||!this._endCompare)return Z.Ld;var e=(0,v.Z)(this._endCompare,this._startCompare);return(0,Z.dy)(r||(r=(0,a.Z)([' <ha-alert dismissable @alert-dismissed-clicked="','"> '," </ha-alert> "])),this._stopCompare,this.hass.localize("ui.panel.energy.compare.info",{start:(0,Z.dy)(i||(i=(0,a.Z)(["<b>","","</b>"])),(0,_.p6)(this._start,this.hass.locale,this.hass.config),e>0?" -\n          ".concat((0,_.p6)(this._end||(0,p.Z)(new Date),this.hass.locale,this.hass.config)):""),end:(0,Z.dy)(s||(s=(0,a.Z)(["<b>","","</b>"])),(0,_.p6)(this._startCompare,this.hass.locale,this.hass.config),e>0?" -\n          ".concat((0,_.p6)(this._endCompare,this.hass.locale,this.hass.config)):"")}))}},{kind:"method",key:"_update",value:function(e){this._start=e.start,this._end=e.end,this._startCompare=e.startCompare,this._endCompare=e.endCompare,this.hidden=!this._startCompare}},{kind:"method",key:"_stopCompare",value:function(){var e=(0,b.UB)(this.hass,{key:this._config.collection_key});e.setCompare(!1),e.refresh()}},{kind:"get",static:!0,key:"styles",value:function(){return(0,Z.iv)(o||(o=(0,a.Z)(["mwc-button{width:max-content}"])))}}]}}),(0,y.f)(Z.oi))},28847:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},23158:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(89273),i=n(36857);function s(e,t,n){var s=(0,i.Z)(e,n),o=(0,r.Z)(t,s,!0),a=new Date(s.getTime()-o),u=new Date(0);return u.setFullYear(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),u.setHours(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds()),u}},25101:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});n(63789),n(18098);var r=n(20508),i=n(36857),s=n(57944),o=n(89273),a=n(74101);function u(e,t,n){if("string"==typeof e&&!e.match(s.Z)){var u=r(n);return u.timeZone=t,(0,i.Z)(e,u)}var c=(0,i.Z)(e,n),d=(0,a.Z)(c.getFullYear(),c.getMonth(),c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds()).getTime(),h=(0,o.Z)(t,new Date(d));return new Date(d+h)}}}]);
//# sourceMappingURL=38476.0PoWESuzlc0.js.map