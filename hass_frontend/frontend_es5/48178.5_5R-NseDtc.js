"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[48178],{32594:function(e,n,t){t.d(n,{U:function(){return i}});var i=function(e){return e.stopPropagation()}},18457:function(e,n,t){t.d(n,{Hd:function(){return s},SL:function(){return r},l4:function(){return u},sJ:function(){return o},uf:function(){return d}});t(32550),t(76843),t(85717),t(97393),t(46798),t(94570),t(13227),t(56308);var i=t(66477),a=t(27593),r=function(e){return o(e.attributes)},o=function(e){return!!e.unit_of_measurement||!!e.state_class},s=function(e){switch(e.number_format){case i.y4.comma_decimal:return["en-US","en"];case i.y4.decimal_comma:return["de","es","it"];case i.y4.space_comma:return["fr","sv","cs"];case i.y4.system:return;default:return e.language}},d=function(e,n,t){var r=n?s(n):void 0;if(Number.isNaN=Number.isNaN||function e(n){return"number"==typeof n&&e(n)},(null==n?void 0:n.number_format)!==i.y4.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(r,l(e,t)).format(Number(e))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,l(e,t)).format(Number(e))}return!Number.isNaN(Number(e))&&""!==e&&(null==n?void 0:n.number_format)===i.y4.none&&Intl?new Intl.NumberFormat("en-US",l(e,Object.assign(Object.assign({},t),{},{useGrouping:!1}))).format(Number(e)):"string"==typeof e?e:"".concat((0,a.N)(e,null==t?void 0:t.maximumFractionDigits).toString()).concat("currency"===(null==t?void 0:t.style)?" ".concat(t.currency):"")},u=function(e,n){var t,i=null==n?void 0:n.display_precision;return null!=i?{maximumFractionDigits:i,minimumFractionDigits:i}:Number.isInteger(Number(null==e||null===(t=e.attributes)||void 0===t?void 0:t.step))&&Number.isInteger(Number(null==e?void 0:e.state))?{maximumFractionDigits:0}:void 0},l=function(e,n){var t=Object.assign({maximumFractionDigits:2},n);if("string"!=typeof e)return t;if(!n||void 0===n.minimumFractionDigits&&void 0===n.maximumFractionDigits){var i=e.indexOf(".")>-1?e.split(".")[1].length:0;t.minimumFractionDigits=i,t.maximumFractionDigits=i}return t}},27593:function(e,n,t){t.d(n,{N:function(){return i}});var i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round(e*Math.pow(10,n))/Math.pow(10,n)}},46583:function(e,n,t){var i,a,r,o,s,d=t(99312),u=t(81043),l=t(88962),p=t(33368),c=t(71650),h=t(82390),v=t(69205),m=t(70906),f=t(91808),y=t(34541),g=t(47838),x=(t(97393),t(68144)),w=t(95260),b=t(83448),_=t(47181),k=t(96151),R=(t(52039),"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z");(0,f.Z)([(0,w.Mo)("ha-expansion-panel")],(function(e,n){var t,f=function(n){(0,v.Z)(i,n);var t=(0,m.Z)(i);function i(){var n;(0,c.Z)(this,i);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=t.call.apply(t,[this].concat(r)),e((0,h.Z)(n)),n}return(0,p.Z)(i)}(n);return{F:f,d:[{kind:"field",decorators:[(0,w.Cb)({type:Boolean,reflect:!0})],key:"expanded",value:function(){return!1}},{kind:"field",decorators:[(0,w.Cb)({type:Boolean,reflect:!0})],key:"outlined",value:function(){return!1}},{kind:"field",decorators:[(0,w.Cb)({type:Boolean,reflect:!0})],key:"leftChevron",value:function(){return!1}},{kind:"field",decorators:[(0,w.Cb)()],key:"header",value:void 0},{kind:"field",decorators:[(0,w.Cb)()],key:"secondary",value:void 0},{kind:"field",decorators:[(0,w.SB)()],key:"_showContent",value:function(){return this.expanded}},{kind:"field",decorators:[(0,w.IO)(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function(){return(0,x.dy)(i||(i=(0,l.Z)([' <div class="top ','"> <div id="summary" @click="','" @keydown="','" @focus="','" @blur="','" role="button" tabindex="0" aria-expanded="','" aria-controls="sect1"> ',' <slot name="header"> <div class="header"> ',' <slot class="secondary" name="secondary">',"</slot> </div> </slot> ",' </div> <slot name="icons"></slot> </div> <div class="container ','" @transitionend="','" role="region" aria-labelledby="summary" aria-hidden="','" tabindex="-1"> '," </div> "])),(0,b.$)({expanded:this.expanded}),this._toggleContainer,this._toggleContainer,this._focusChanged,this._focusChanged,this.expanded,this.leftChevron?(0,x.dy)(a||(a=(0,l.Z)([' <ha-svg-icon .path="','" class="summary-icon ','"></ha-svg-icon> '])),R,(0,b.$)({expanded:this.expanded})):"",this.header,this.secondary,this.leftChevron?"":(0,x.dy)(r||(r=(0,l.Z)([' <ha-svg-icon .path="','" class="summary-icon ','"></ha-svg-icon> '])),R,(0,b.$)({expanded:this.expanded})),(0,b.$)({expanded:this.expanded}),this._handleTransitionEnd,!this.expanded,this._showContent?(0,x.dy)(o||(o=(0,l.Z)(["<slot></slot>"]))):"")}},{kind:"method",key:"willUpdate",value:function(e){var n=this;(0,y.Z)((0,g.Z)(f.prototype),"willUpdate",this).call(this,e),e.has("expanded")&&this.expanded&&(this._showContent=this.expanded,setTimeout((function(){n.expanded&&(n._container.style.overflow="initial")}),300))}},{kind:"method",key:"_handleTransitionEnd",value:function(){this._container.style.removeProperty("height"),this._container.style.overflow=this.expanded?"initial":"hidden",this._showContent=this.expanded}},{kind:"method",key:"_toggleContainer",value:(t=(0,u.Z)((0,d.Z)().mark((function e(n){var t,i,a=this;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.defaultPrevented){e.next=2;break}return e.abrupt("return");case 2:if("keydown"!==n.type||"Enter"===n.key||" "===n.key){e.next=4;break}return e.abrupt("return");case 4:if(n.preventDefault(),t=!this.expanded,(0,_.B)(this,"expanded-will-change",{expanded:t}),this._container.style.overflow="hidden",!t){e.next=12;break}return this._showContent=!0,e.next=12,(0,k.y)();case 12:i=this._container.scrollHeight,this._container.style.height="".concat(i,"px"),t||setTimeout((function(){a._container.style.height="0px"}),0),this.expanded=t,(0,_.B)(this,"expanded-changed",{expanded:this.expanded});case 17:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{kind:"method",key:"_focusChanged",value:function(e){this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}},{kind:"get",static:!0,key:"styles",value:function(){return(0,x.iv)(s||(s=(0,l.Z)([":host{display:block}.top{display:flex;align-items:center;border-radius:var(--ha-card-border-radius,12px)}.top.expanded{border-bottom-left-radius:0px;border-bottom-right-radius:0px}.top.focused{background:var(--input-fill-color)}:host([outlined]){box-shadow:none;border-width:1px;border-style:solid;border-color:var(--outline-color);border-radius:var(--ha-card-border-radius,12px)}.summary-icon{margin-left:8px}:host([leftchevron]) .summary-icon{margin-left:0;margin-right:8px}#summary{flex:1;display:flex;padding:var(--expansion-panel-summary-padding,0 8px);min-height:48px;align-items:center;cursor:pointer;overflow:hidden;font-weight:500;outline:0}.summary-icon{transition:transform 150ms cubic-bezier(.4, 0, .2, 1);direction:var(--direction)}.summary-icon.expanded{transform:rotate(180deg)}.header,::slotted([slot=header]){flex:1}.container{padding:var(--expansion-panel-content-padding,0 8px);overflow:hidden;transition:height .3s cubic-bezier(.4, 0, .2, 1);height:0px}.container.expanded{height:auto}.secondary{display:block;color:var(--secondary-text-color);font-size:12px}"])))}}]}}),x.oi)},99057:function(e,n,t){var i,a,r,o=t(88962),s=t(33368),d=t(71650),u=t(82390),l=t(69205),p=t(70906),c=t(91808),h=(t(97393),t(46798),t(9849),t(50289),t(94167),t(88770),t(68144)),v=t(95260),m=t(14516),f=t(69949);t(26777),(0,c.Z)([(0,v.Mo)("assist-render-pipeline-events")],(function(e,n){var t=function(n){(0,l.Z)(i,n);var t=(0,p.Z)(i);function i(){var n;(0,d.Z)(this,i);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=t.call.apply(t,[this].concat(r)),e((0,u.Z)(n)),n}return(0,s.Z)(i)}(n);return{F:t,d:[{kind:"field",decorators:[(0,v.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,v.Cb)()],key:"events",value:void 0},{kind:"field",key:"_processEvents",value:function(){return(0,m.Z)((function(e){var n;return e.forEach((function(e){n=(0,f.eP)(n,e)})),n}))}},{kind:"method",key:"render",value:function(){var e=this._processEvents(this.events);return e?(0,h.dy)(r||(r=(0,o.Z)([' <assist-render-pipeline-run .hass="','" .pipelineRun="','"></assist-render-pipeline-run> '])),this.hass,e):this.events.length?(0,h.dy)(i||(i=(0,o.Z)(['<ha-alert alert-type="error">Error showing run</ha-alert> <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <pre>',"</pre> </ha-expansion-panel> </ha-card>"])),JSON.stringify(this.events,null,2)):(0,h.dy)(a||(a=(0,o.Z)(['<ha-alert alert-type="warning">There where no events in this run.</ha-alert>'])))}}]}}),h.oi)},26777:function(e,n,t){var i,a,r,o,s,d,u,l,p,c,h,v,m,f,y,g,x,w,b,_,k,R,Z,N=t(33368),C=t(71650),E=t(82390),F=t(69205),L=t(70906),D=t(91808),T=t(68990),O=t(88962),I=(t(85472),t(46798),t(9849),t(90126),t(46349),t(70320),t(82073),t(97393),t(36513),t(68144)),S=t(95260),M=(t(22098),t(9381),t(74834),t(31206),t(46583),t(18457)),P=(t(18900),t(26765)),U={pipeline:"Pipeline",language:"Language"},A={engine:"Engine"},B={engine:"Engine"},j={engine:"Engine",language:"Language",intent_input:"Input"},z={engine:"Engine",language:"Language",voice:"Voice",tts_input:"Input"},$={ready:0,wake_word:1,stt:2,intent:3,tts:4,done:5,error:6},H=function(e,n){return e.init_options?$[e.init_options.start_stage]<=$[n]&&$[n]<=$[e.init_options.end_stage]:n in e},J=function(e,n,t){return"error"in e&&t===n?(0,I.dy)(i||(i=(0,O.Z)([' <ha-alert alert-type="error"> '," (",") </ha-alert> "])),e.error.message,e.error.code):""},q=function(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-start",s=n.events.find((function(e){return e.type==="".concat(t)+i})),d=n.events.find((function(e){return e.type==="".concat(t,"-end")}));if(!s)return"";if(!d)return"error"in n?(0,I.dy)(a||(a=(0,O.Z)(["❌"]))):(0,I.dy)(r||(r=(0,O.Z)([' <ha-circular-progress size="tiny" indeterminate></ha-circular-progress> '])));var u=new Date(d.timestamp).getTime()-new Date(s.timestamp).getTime(),l=(0,M.uf)(u/1e3,e.locale,{maximumFractionDigits:2});return(0,I.dy)(o||(o=(0,O.Z)(["","s ✅"])),l)},G=function(e,n){return Object.entries(n).map((function(n){var t=(0,T.Z)(n,2),i=t[0],a=t[1];return(0,I.dy)(s||(s=(0,O.Z)([' <div class="row"> <div>',"</div> <div>","</div> </div> "])),a,e[i])}))},V=function(e,n){var t={},i=!1;for(var a in e)a in n||"done"===a||(i=!0,t[a]=e[a]);return i?(0,I.dy)(d||(d=(0,O.Z)(['<ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor readOnly="readOnly" autoUpdate .value="','"></ha-yaml-editor> </ha-expansion-panel>'])),t):""};(0,D.Z)([(0,S.Mo)("assist-render-pipeline-run")],(function(e,n){var t=function(n){(0,F.Z)(i,n);var t=(0,L.Z)(i);function i(){var n;(0,C.Z)(this,i);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=t.call.apply(t,[this].concat(r)),e((0,E.Z)(n)),n}return(0,N.Z)(i)}(n);return{F:t,d:[{kind:"field",decorators:[(0,S.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,S.Cb)()],key:"pipelineRun",value:void 0},{kind:"method",key:"render",value:function(){var e,n,t,i,a=this,r=this.pipelineRun&&["tts","intent","stt","wake_word"].find((function(e){return e in a.pipelineRun}))||"ready",o=[],s=(this.pipelineRun.init_options&&"text"in this.pipelineRun.init_options.input?this.pipelineRun.init_options.input.text:void 0)||(null===(e=this.pipelineRun)||void 0===e||null===(e=e.stt)||void 0===e||null===(e=e.stt_output)||void 0===e?void 0:e.text)||(null===(n=this.pipelineRun)||void 0===n||null===(n=n.intent)||void 0===n?void 0:n.intent_input);return s&&o.push({from:"user",text:s}),null!==(t=this.pipelineRun)&&void 0!==t&&null!==(t=t.intent)&&void 0!==t&&null!==(t=t.intent_output)&&void 0!==t&&null!==(t=t.response)&&void 0!==t&&null!==(t=t.speech)&&void 0!==t&&null!==(t=t.plain)&&void 0!==t&&t.speech&&o.push({from:"hass",text:this.pipelineRun.intent.intent_output.response.speech.plain.speech}),(0,I.dy)(u||(u=(0,O.Z)([' <ha-card> <div class="card-content"> <div class="row heading"> <div>Run</div> <div>',"</div> </div> "," "," </div> </ha-card> "," "," "," "," "," "," "," "," ",' <ha-card> <ha-expansion-panel> <span slot="header">Raw</span> <ha-yaml-editor readOnly="readOnly" autoUpdate .value="','"></ha-yaml-editor> </ha-expansion-panel> </ha-card> '])),this.pipelineRun.stage,G(this.pipelineRun.run,U),o.length>0?(0,I.dy)(l||(l=(0,O.Z)([' <div class="messages"> ',' </div> <div style="clear:both"></div> '])),o.map((function(e){var n=e.from,t=e.text;return(0,I.dy)(p||(p=(0,O.Z)([' <div class="','">',"</div> "])),"message ".concat(n),t)}))):"",J(this.pipelineRun,"ready",r),H(this.pipelineRun,"wake_word")?(0,I.dy)(c||(c=(0,O.Z)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Wake word</span> '," </div> "," </div> </ha-card> "])),q(this.hass,this.pipelineRun,"wake_word"),this.pipelineRun.wake_word?(0,I.dy)(h||(h=(0,O.Z)([' <div class="card-content"> '," "," "," </div> "])),G(this.pipelineRun.wake_word,B),this.pipelineRun.wake_word.wake_word_output?(0,I.dy)(v||(v=(0,O.Z)(['<div class="row"> <div>Model</div> <div> ',' </div> </div> <div class="row"> <div>Timestamp</div> <div> '," </div> </div>"])),this.pipelineRun.wake_word.wake_word_output.ww_id,this.pipelineRun.wake_word.wake_word_output.timestamp):"",V(this.pipelineRun.wake_word,A)):""):"",J(this.pipelineRun,"wake_word",r),H(this.pipelineRun,"stt")?(0,I.dy)(m||(m=(0,O.Z)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Speech-to-text</span> '," </div> "," </div> </ha-card> "])),q(this.hass,this.pipelineRun,"stt","-vad-end"),this.pipelineRun.stt?(0,I.dy)(f||(f=(0,O.Z)([' <div class="card-content"> ',' <div class="row"> <div>Language</div> <div>',"</div> </div> "," "," </div> "])),G(this.pipelineRun.stt,B),this.pipelineRun.stt.metadata.language,this.pipelineRun.stt.stt_output?(0,I.dy)(y||(y=(0,O.Z)(['<div class="row"> <div>Output</div> <div>',"</div> </div>"])),this.pipelineRun.stt.stt_output.text):"",V(this.pipelineRun.stt,B)):""):"",J(this.pipelineRun,"stt",r),H(this.pipelineRun,"intent")?(0,I.dy)(g||(g=(0,O.Z)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Natural Language Processing</span> '," </div> "," </div> </ha-card> "])),q(this.hass,this.pipelineRun,"intent"),this.pipelineRun.intent?(0,I.dy)(x||(x=(0,O.Z)([' <div class="card-content"> '," "," "," </div> "])),G(this.pipelineRun.intent,j),this.pipelineRun.intent.intent_output?(0,I.dy)(w||(w=(0,O.Z)(['<div class="row"> <div>Response type</div> <div> '," </div> </div> ",""])),this.pipelineRun.intent.intent_output.response.response_type,"error"===this.pipelineRun.intent.intent_output.response.response_type?(0,I.dy)(b||(b=(0,O.Z)(['<div class="row"> <div>Error code</div> <div> '," </div> </div>"])),this.pipelineRun.intent.intent_output.response.data.code):""):"",V(this.pipelineRun.intent,j)):""):"",J(this.pipelineRun,"intent",r),H(this.pipelineRun,"tts")?(0,I.dy)(_||(_=(0,O.Z)([' <ha-card> <div class="card-content"> <div class="row heading"> <span>Text-to-speech</span> '," </div> "," </div> "," </ha-card> "])),q(this.hass,this.pipelineRun,"tts"),this.pipelineRun.tts?(0,I.dy)(k||(k=(0,O.Z)([' <div class="card-content"> '," "," </div> "])),G(this.pipelineRun.tts,z),V(this.pipelineRun.tts,z)):"",null!==(i=this.pipelineRun)&&void 0!==i&&null!==(i=i.tts)&&void 0!==i&&i.tts_output?(0,I.dy)(R||(R=(0,O.Z)([' <div class="card-actions"> <ha-button @click="','"> Play Audio </ha-button> </div> '])),this._playTTS):""):"",J(this.pipelineRun,"tts",r),this.pipelineRun)}},{kind:"method",key:"_playTTS",value:function(){var e=this,n=this.pipelineRun.tts.tts_output.url,t=new Audio(n);t.addEventListener("error",(function(){(0,P.showAlertDialog)(e,{title:"Error",text:"Error playing audio"})})),t.addEventListener("canplaythrough",(function(){t.play()}))}},{kind:"field",static:!0,key:"styles",value:function(){return(0,I.iv)(Z||(Z=(0,O.Z)([":host{display:block}ha-alert,ha-card{display:block;margin-bottom:16px}.row{display:flex;justify-content:space-between}.row>div:last-child{text-align:right}ha-expansion-panel{padding-left:8px}.card-content ha-expansion-panel{padding-left:0px;--expansion-panel-summary-padding:0px;--expansion-panel-content-padding:0px}.heading{font-weight:500;margin-bottom:16px}.messages{margin-top:8px}.message{font-size:18px;margin:8px 0;padding:8px;border-radius:15px;clear:both}.message.user{margin-left:24px;margin-inline-start:24px;margin-inline-end:initial;float:var(--float-end);text-align:right;border-bottom-right-radius:0px;background-color:var(--light-primary-color);color:var(--text-light-primary-color,var(--primary-text-color));direction:var(--direction)}.message.hass{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial;float:var(--float-start);border-bottom-left-radius:0px;background-color:var(--primary-color);color:var(--text-primary-color);direction:var(--direction)}"])))}}]}}),I.oi)}}]);
//# sourceMappingURL=48178.5_5R-NseDtc.js.map