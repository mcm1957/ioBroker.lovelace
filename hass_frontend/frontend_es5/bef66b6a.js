/*! For license information please see bef66b6a.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6294],{45253:function(t,e,n){n.d(e,{UX:function(){return r},j2:function(){return s},KT:function(){return a},HX:function(){return o},Ns:function(){return i}});var o,i,r={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},s={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},a={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(o||(o={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(i||(i={}))},6945:function(t,e,n){n.d(e,{k:function(){return s}});var o=n(87480),i=n(72774),r=n(45253),s=function(t){function e(n){var i=t.call(this,(0,o.__assign)((0,o.__assign)({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.isHorizontallyCenteredOnViewport=!1,i.maxHeight=0,i.openBottomBias=0,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=r.Ns.TOP_START,i.originCorner=r.Ns.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return(0,o.__extends)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return r.UX},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return r.j2},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return r.KT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return r.Ns},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,o=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(o)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^r.HX.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),r.KT.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var n=this;if(void 0===t&&(t=!1),this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen)return this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),void this.adapter.notifyClose();this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout((function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()}),r.KT.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),o=this.getMenuSurfaceMaxHeight(n),i=this.hasBit(n,r.HX.BOTTOM)?"bottom":"top",s=this.hasBit(n,r.HX.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(n),c=this.getVerticalOriginOffset(n),u=this.measurements,l=u.anchorSize,d=u.surfaceSize,f=((t={})[s]=a,t[i]=c,t);l.width/d.width>r.KT.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(f),this.adapter.setTransformOrigin(s+" "+i),this.adapter.setPosition(f),this.adapter.setMaxHeight(o?o+"px":""),this.hasBit(n,r.HX.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),n=this.adapter.getWindowDimensions(),o=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:n.width-t.right,bottom:n.height-t.bottom,left:t.left},viewportSize:n,windowScroll:o}},e.prototype.getoriginCorner=function(){var t,n,o=this.originCorner,i=this.measurements,s=i.viewportDistance,a=i.anchorSize,c=i.surfaceSize,u=e.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,r.HX.BOTTOM)?(t=s.top-u+this.anchorMargin.bottom,n=s.bottom-u-this.anchorMargin.bottom):(t=s.top-u+this.anchorMargin.top,n=s.bottom-u+a.height-this.anchorMargin.top),!(n-c.height>0)&&t>n+this.openBottomBias&&(o=this.setBit(o,r.HX.BOTTOM));var l,d,f=this.adapter.isRtl(),p=this.hasBit(this.anchorCorner,r.HX.FLIP_RTL),h=this.hasBit(this.anchorCorner,r.HX.RIGHT)||this.hasBit(o,r.HX.RIGHT),m=!1;(m=f&&p?!h:h)?(l=s.left+a.width+this.anchorMargin.right,d=s.right-this.anchorMargin.right):(l=s.left+this.anchorMargin.left,d=s.right+a.width-this.anchorMargin.left);var y=l-c.width>0,b=d-c.width>0,T=this.hasBit(o,r.HX.FLIP_RTL)&&this.hasBit(o,r.HX.RIGHT);return b&&T&&f||!y&&T?o=this.unsetBit(o,r.HX.RIGHT):(y&&m&&f||y&&!m&&h||!b&&l>=d)&&(o=this.setBit(o,r.HX.RIGHT)),o},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var n=this.measurements.viewportDistance,o=0,i=this.hasBit(t,r.HX.BOTTOM),s=this.hasBit(this.anchorCorner,r.HX.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return i?(o=n.top+this.anchorMargin.top-a,s||(o+=this.measurements.anchorSize.height)):(o=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,s&&(o-=this.measurements.anchorSize.height)),o},e.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,r.HX.RIGHT),o=this.hasBit(this.anchorCorner,r.HX.RIGHT);if(n){var i=o?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?i-(this.measurements.viewportSize.width-this.measurements.bodySize.width):i}return o?e.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,r.HX.BOTTOM),o=this.hasBit(this.anchorCorner,r.HX.BOTTOM);return n?o?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:o?e.height+this.anchorMargin.bottom:this.anchorMargin.top},e.prototype.adjustPositionForHoistedElement=function(t){var e,n,i=this.measurements,r=i.windowScroll,s=i.viewportDistance,a=i.surfaceSize,c=i.viewportSize,u=Object.keys(t);try{for(var l=(0,o.__values)(u),d=l.next();!d.done;d=l.next()){var f=d.value,p=t[f]||0;!this.isHorizontallyCenteredOnViewport||"left"!==f&&"right"!==f?(p+=s[f],this.isFixedPosition||("top"===f?p+=r.y:"bottom"===f?p-=r.y:"left"===f?p+=r.x:p-=r.x),t[f]=p):t[f]=(c.width-a.width)/2}}catch(h){e={error:h}}finally{try{d&&!d.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,e=this.adapter.isFocused(),n=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(e||n)&&setTimeout((function(){t.adapter.restoreFocus()}),r.KT.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,e){return Boolean(t&e)},e.prototype.setBit=function(t,e){return t|e},e.prototype.unsetBit=function(t,e){return t^e},e.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},e}(i.K);e.Z=s},59799:function(t,e,n){var o,i=n(87480),r=n(33310),s=n(45253),a=n(6945),c=n(78220),u=n(14114),l=n(82612),d=n(37500),f=n(8636),p=n(70483);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e,n,o,i,r,s){try{var a=t[r](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(o,i)}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function T(t,e){return T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},T(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=_(t);if(e){var i=_(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return O(this,n)}}function O(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var g,E={TOP_LEFT:s.Ns.TOP_LEFT,TOP_RIGHT:s.Ns.TOP_RIGHT,BOTTOM_LEFT:s.Ns.BOTTOM_LEFT,BOTTOM_RIGHT:s.Ns.BOTTOM_RIGHT,TOP_START:s.Ns.TOP_START,TOP_END:s.Ns.TOP_END,BOTTOM_START:s.Ns.BOTTOM_START,BOTTOM_END:s.Ns.BOTTOM_END},C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(u,t);var e,n,i,r=v(u);function u(){var t;return y(this,u),(t=r.apply(this,arguments)).mdcFoundationClass=a.Z,t.absolute=!1,t.fullwidth=!1,t.fixed=!1,t.x=null,t.y=null,t.quick=!1,t.open=!1,t.stayOpenOnBodyClick=!1,t.bitwiseCorner=s.Ns.TOP_START,t.previousMenuCorner=null,t.menuCorner="START",t.corner="TOP_START",t.styleTop="",t.styleLeft="",t.styleRight="",t.styleBottom="",t.styleMaxHeight="",t.styleTransformOrigin="",t.anchor=null,t.previouslyFocused=null,t.previousAnchor=null,t.onBodyClickBound=function(){},t}return e=u,n=[{key:"render",value:function(){var t,e,n={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth},i={top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin};return(0,d.dy)(o||(t=['\n      <div\n          class="mdc-menu-surface ','"\n          style="','"\n          @keydown=',"\n          @opened=","\n          @closed=",">\n        <slot></slot>\n      </div>"],e||(e=t.slice(0)),o=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))),(0,f.$)(n),(0,p.V)(i),this.onKeydown,this.registerBodyClick,this.deregisterBodyClick)}},{key:"createAdapter",value:function(){var t,e,n=this;return Object.assign(Object.assign({},(0,c.q)(this.mdcRoot)),{hasAnchor:function(){return!!n.anchor},notifyClose:function(){var t=new CustomEvent("closed",{bubbles:!0,composed:!0});n.open=!1,n.mdcRoot.dispatchEvent(t)},notifyClosing:function(){var t=new CustomEvent("closing",{bubbles:!0,composed:!0});n.mdcRoot.dispatchEvent(t)},notifyOpen:function(){var t=new CustomEvent("opened",{bubbles:!0,composed:!0});n.open=!0,n.mdcRoot.dispatchEvent(t)},isElementInContainer:function(){return!1},isRtl:function(){return!!n.mdcRoot&&"rtl"===getComputedStyle(n.mdcRoot).direction},setTransformOrigin:function(t){n.mdcRoot&&(n.styleTransformOrigin=t)},isFocused:function(){return(0,l.WU)(n)},saveFocus:function(){var t=(0,l.Mh)(),e=t.length;e||(n.previouslyFocused=null),n.previouslyFocused=t[e-1]},restoreFocus:function(){n.previouslyFocused&&"focus"in n.previouslyFocused&&n.previouslyFocused.focus()},getInnerDimensions:function(){var t=n.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:function(){var t=n.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(t){n.mdcRoot&&(n.styleLeft="left"in t?"".concat(t.left,"px"):"",n.styleRight="right"in t?"".concat(t.right,"px"):"",n.styleTop="top"in t?"".concat(t.top,"px"):"",n.styleBottom="bottom"in t?"".concat(t.bottom,"px"):"")},setMaxHeight:(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.mdcRoot){t.next=3;break}return t.abrupt("return");case 3:return n.styleMaxHeight=e,t.next=6,n.updateComplete;case 6:n.styleMaxHeight="var(--mdc-menu-max-height, ".concat(e,")");case 7:case"end":return t.stop()}}),t)})),e=function(){var e=this,n=arguments;return new Promise((function(o,i){var r=t.apply(e,n);function s(t){m(r,o,i,s,a,"next",t)}function a(t){m(r,o,i,s,a,"throw",t)}s(void 0)}))},function(t){return e.apply(this,arguments)})})}},{key:"onKeydown",value:function(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}},{key:"onBodyClick",value:function(t){this.stayOpenOnBodyClick||-1===t.composedPath().indexOf(this)&&this.close()}},{key:"registerBodyClick",value:function(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}},{key:"deregisterBodyClick",value:function(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}},{key:"close",value:function(){this.open=!1}},{key:"show",value:function(){this.open=!0}}],n&&b(e.prototype,n),i&&b(e,i),u}(c.H);(0,i.__decorate)([(0,r.IO)(".mdc-menu-surface")],C.prototype,"mdcRoot",void 0),(0,i.__decorate)([(0,r.IO)("slot")],C.prototype,"slotElement",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean}),(0,u.P)((function(t){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(t)}))],C.prototype,"absolute",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],C.prototype,"fullwidth",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean}),(0,u.P)((function(t){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setFixedPosition(t)}))],C.prototype,"fixed",void 0),(0,i.__decorate)([(0,r.Cb)({type:Number}),(0,u.P)((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y,right:-t,bottom:this.y}))}))],C.prototype,"x",void 0),(0,i.__decorate)([(0,r.Cb)({type:Number}),(0,u.P)((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t,right:-this.x,bottom:t}))}))],C.prototype,"y",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean}),(0,u.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],C.prototype,"quick",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,reflect:!0}),(0,u.P)((function(t,e){this.mdcFoundation&&(t?this.mdcFoundation.open():void 0!==e&&this.mdcFoundation.close())}))],C.prototype,"open",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],C.prototype,"stayOpenOnBodyClick",void 0),(0,i.__decorate)([(0,r.SB)(),(0,u.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(t)}))],C.prototype,"bitwiseCorner",void 0),(0,i.__decorate)([(0,r.Cb)({type:String}),(0,u.P)((function(t){if(this.mdcFoundation){var e="START"===t||"END"===t,n=null===this.previousMenuCorner,o=!n&&t!==this.previousMenuCorner;e&&(o||n&&"END"===t)&&(this.bitwiseCorner=this.bitwiseCorner^s.HX.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=t)}}))],C.prototype,"menuCorner",void 0),(0,i.__decorate)([(0,r.Cb)({type:String}),(0,u.P)((function(t){if(this.mdcFoundation&&t){var e=E[t];"END"===this.menuCorner&&(e^=s.HX.RIGHT),this.bitwiseCorner=e}}))],C.prototype,"corner",void 0),(0,i.__decorate)([(0,r.SB)()],C.prototype,"styleTop",void 0),(0,i.__decorate)([(0,r.SB)()],C.prototype,"styleLeft",void 0),(0,i.__decorate)([(0,r.SB)()],C.prototype,"styleRight",void 0),(0,i.__decorate)([(0,r.SB)()],C.prototype,"styleBottom",void 0),(0,i.__decorate)([(0,r.SB)()],C.prototype,"styleMaxHeight",void 0),(0,i.__decorate)([(0,r.SB)()],C.prototype,"styleTransformOrigin",void 0);var I,S,x=(0,d.iv)(g||(I=[".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}"],S||(S=I.slice(0)),g=Object.freeze(Object.defineProperties(I,{raw:{value:Object.freeze(S)}}))));function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){return R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},R(t,e)}function B(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=F(t);if(e){var i=F(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return M(this,n)}}function M(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(n,t);var e=B(n);function n(){return A(this,n),e.apply(this,arguments)}return n}(C);P.styles=[x],P=(0,i.__decorate)([(0,r.Mo)("mwc-menu-surface")],P)},6294:function(t,e,n){var o,i=n(87480),r=n(33310),s=(n(24103),n(59799),{MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"}),a={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},c={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(o||(o={}));var u,l=n(72774),d=n(74015),f=n(6945),p=function(t){function e(n){var r=t.call(this,(0,i.__assign)((0,i.__assign)({},e.defaultAdapter),n))||this;return r.closeAnimationEndTimerId=0,r.defaultFocusState=o.LIST_ROOT,r.selectedIndex=-1,r}return(0,i.__extends)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return a},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var e=t.key,n=t.keyCode;("Tab"===e||9===n)&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var e=this,n=this.adapter.getElementIndex(t);if(!(n<0)){this.adapter.notifySelected({index:n});var o="true"===this.adapter.getAttributeFromElementAtIndex(n,a.SKIP_RESTORE_FOCUS);this.adapter.closeSurface(o),this.closeAnimationEndTimerId=setTimeout((function(){var n=e.adapter.getElementIndex(t);n>=0&&e.adapter.isSelectableItemAtIndex(n)&&e.setSelectedIndex(n)}),f.k.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case o.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case o.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case o.NONE:break;default:this.adapter.focusListRoot()}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter.removeAttributeFromElementAtIndex(e,a.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(e,s.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,s.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,a.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,e){this.validatedIndex(t),e?(this.adapter.removeClassFromElementAtIndex(t,d.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,a.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,d.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,a.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var e=this.adapter.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(l.K),h=n(78220),m=n(14114),y=n(37500);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function T(t,e,n,o,i,r,s){try{var a=t[r](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(o,i)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var r=t.apply(e,n);function s(t){T(r,o,i,s,a,"next",t)}function a(t){T(r,o,i,s,a,"throw",t)}s(void 0)}))}}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e,n){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}},g(t,e,n||t)}function E(t,e){return E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},E(t,e)}function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=S(t);if(e){var i=S(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return I(this,n)}}function I(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var x,w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(a,t);var e,n,o,i,r,s=C(a);function a(){var t;return O(this,a),(t=s.apply(this,arguments)).mdcFoundationClass=p,t.listElement_=null,t.anchor=null,t.open=!1,t.quick=!1,t.wrapFocus=!1,t.innerRole="menu",t.innerAriaLabel=null,t.corner="TOP_START",t.x=null,t.y=null,t.absolute=!1,t.multi=!1,t.activatable=!1,t.fixed=!1,t.forceGroupSelection=!1,t.fullwidth=!1,t.menuCorner="START",t.stayOpenOnBodyClick=!1,t.defaultFocus="LIST_ROOT",t._listUpdateComplete=null,t}return e=a,n=[{key:"listElement",get:function(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}},{key:"items",get:function(){var t=this.listElement;return t?t.items:[]}},{key:"index",get:function(){var t=this.listElement;return t?t.index:-1}},{key:"selected",get:function(){var t=this.listElement;return t?t.selected:null}},{key:"render",value:function(){var t="menu"===this.innerRole?"menuitem":"option";return(0,y.dy)(u||(u=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n      <mwc-menu-surface\n          ?hidden=","\n          .anchor=","\n          .open=","\n          .quick=","\n          .corner=","\n          .x=","\n          .y=","\n          .absolute=","\n          .fixed=","\n          .fullwidth=","\n          .menuCorner=","\n          ?stayOpenOnBodyClick=",'\n          class="mdc-menu mdc-menu-surface"\n          @closed=',"\n          @opened=","\n          @keydown=",">\n        <mwc-list\n          rootTabbable\n          .innerAriaLabel=","\n          .innerRole=","\n          .multi=",'\n          class="mdc-deprecated-list"\n          .itemRoles=',"\n          .wrapFocus=","\n          .activatable=","\n          @action=",">\n        <slot></slot>\n      </mwc-list>\n    </mwc-menu-surface>"])),!this.open,this.anchor,this.open,this.quick,this.corner,this.x,this.y,this.absolute,this.fixed,this.fullwidth,this.menuCorner,this.stayOpenOnBodyClick,this.onClosed,this.onOpened,this.onKeydown,this.innerAriaLabel,this.innerRole,this.multi,t,this.wrapFocus,this.activatable,this.onAction)}},{key:"createAdapter",value:function(){var t=this;return{addClassToElementAtIndex:function(e,n){var o=t.listElement;if(o){var i=o.items[e];i&&("mdc-menu-item--selected"===n?t.forceGroupSelection&&!i.selected&&o.toggle(e,!0):i.classList.add(n))}},removeClassFromElementAtIndex:function(e,n){var o=t.listElement;if(o){var i=o.items[e];i&&("mdc-menu-item--selected"===n?i.selected&&o.toggle(e,!1):i.classList.remove(n))}},addAttributeToElementAtIndex:function(e,n,o){var i=t.listElement;if(i){var r=i.items[e];r&&r.setAttribute(n,o)}},removeAttributeFromElementAtIndex:function(e,n){var o=t.listElement;if(o){var i=o.items[e];i&&i.removeAttribute(n)}},getAttributeFromElementAtIndex:function(e,n){var o=t.listElement;if(!o)return null;var i=o.items[e];return i?i.getAttribute(n):null},elementContainsClass:function(t,e){return t.classList.contains(e)},closeSurface:function(){t.open=!1},getElementIndex:function(e){var n=t.listElement;return n?n.items.indexOf(e):-1},notifySelected:function(){},getMenuItemCount:function(){var e=t.listElement;return e?e.items.length:0},focusItemAtIndex:function(e){var n=t.listElement;if(n){var o=n.items[e];o&&o.focus()}},focusListRoot:function(){t.listElement&&t.listElement.focus()},getSelectedSiblingOfItemAtIndex:function(e){var n=t.listElement;if(!n)return-1;var o=n.items[e];if(!o||!o.group)return-1;for(var i=0;i<n.items.length;i++)if(i!==e){var r=n.items[i];if(r.selected&&r.group===o.group)return i}return-1},isSelectableItemAtIndex:function(e){var n=t.listElement;if(!n)return!1;var o=n.items[e];return!!o&&o.hasAttribute("group")}}}},{key:"onKeydown",value:function(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}},{key:"onAction",value:function(t){var e=this.listElement;if(this.mdcFoundation&&e){var n=t.detail.index,o=e.items[n];o&&this.mdcFoundation.handleItemAction(o)}}},{key:"onOpened",value:function(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}},{key:"onClosed",value:function(){this.open=!1}},{key:"getUpdateComplete",value:(r=v(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._listUpdateComplete;case 2:return t.next=4,g(S(a.prototype),"getUpdateComplete",this).call(this);case 4:return e=t.sent,t.abrupt("return",e);case 6:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"firstUpdated",value:(i=v(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(g(S(a.prototype),"firstUpdated",this).call(this),!(e=this.listElement)){t.next=6;break}return this._listUpdateComplete=e.updateComplete,t.next=6,this._listUpdateComplete;case 6:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"select",value:function(t){var e=this.listElement;e&&e.select(t)}},{key:"close",value:function(){this.open=!1}},{key:"show",value:function(){this.open=!0}},{key:"getFocusedItemIndex",value:function(){var t=this.listElement;return t?t.getFocusedItemIndex():-1}},{key:"focusItemAtIndex",value:function(t){var e=this.listElement;e&&e.focusItemAtIndex(t)}},{key:"layout",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.listElement;e&&e.layout(t)}}],n&&_(e.prototype,n),o&&_(e,o),a}(h.H);(0,i.__decorate)([(0,r.IO)(".mdc-menu")],w.prototype,"mdcRoot",void 0),(0,i.__decorate)([(0,r.IO)("slot")],w.prototype,"slotElement",void 0),(0,i.__decorate)([(0,r.Cb)({type:Object})],w.prototype,"anchor",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean,reflect:!0})],w.prototype,"open",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],w.prototype,"quick",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],w.prototype,"wrapFocus",void 0),(0,i.__decorate)([(0,r.Cb)({type:String})],w.prototype,"innerRole",void 0),(0,i.__decorate)([(0,r.Cb)({type:String})],w.prototype,"innerAriaLabel",void 0),(0,i.__decorate)([(0,r.Cb)({type:String})],w.prototype,"corner",void 0),(0,i.__decorate)([(0,r.Cb)({type:Number})],w.prototype,"x",void 0),(0,i.__decorate)([(0,r.Cb)({type:Number})],w.prototype,"y",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],w.prototype,"absolute",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],w.prototype,"multi",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],w.prototype,"activatable",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],w.prototype,"fixed",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],w.prototype,"forceGroupSelection",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],w.prototype,"fullwidth",void 0),(0,i.__decorate)([(0,r.Cb)({type:String})],w.prototype,"menuCorner",void 0),(0,i.__decorate)([(0,r.Cb)({type:Boolean})],w.prototype,"stayOpenOnBodyClick",void 0),(0,i.__decorate)([(0,r.Cb)({type:String}),(0,m.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(o[t])}))],w.prototype,"defaultFocus",void 0);var A=(0,y.iv)(x||(x=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}"])));function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){return M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},M(t,e)}function F(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=N(t);if(e){var i=N(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return P(this,n)}}function P(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(n,t);var e=F(n);function n(){return B(this,n),e.apply(this,arguments)}return n}(w);H.styles=[A],H=(0,i.__decorate)([(0,r.Mo)("mwc-menu")],H)}}]);