"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[9897],{9897:(e,t,r)=>{r.a(e,(async e=>{r.r(t),r.d(t,{HuiEnergyUsageGraphCard:()=>j});var i=r(27088),o=r(70390),a=r(53970),s=r(4535),n=r(14650),l=r(59699),d=r(37500),c=r(33310),u=r(8636),f=r(14516),p=r(15838),h=r(89525),m=r(12198),y=r(49684),g=r(18457),_=(r(62336),r(22098),r(55424)),v=r(38014),b=r(73826),k=e([y,m]);function w(){w=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var o=t.placement;if(t.kind===i&&("static"===o||"prototype"===o)){var a="static"===o?e:r;this.defineClassElement(a,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!S(e))return r.push(e);var t=this.decorateElement(e,o);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var a=this.decorateConstructor(r,t);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],o=e.decorators,a=o.length-1;a>=0;a--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var n=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,o[a])(n)||n);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var d=l.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var o=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[i])(o)||o);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){e=a.elements;for(var s=0;s<e.length-1;s++)for(var n=s+1;n<e.length;n++)if(e[s].key===e[n].key&&e[s].placement===e[n].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=P(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:r,placement:i,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:D(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=D(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function E(e){var t,r=P(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function x(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function S(e){return e.decorators&&e.decorators.length}function C(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function D(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function P(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}[y,m]=k.then?await k:k;let j=function(e,t,r,i){var o=w();if(i)for(var a=0;a<i.length;a++)o=i[a](o);var s=t((function(e){o.initializeInstanceElements(e,n.elements)}),r),n=o.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},i=0;i<e.length;i++){var o,a=e[i];if("method"===a.kind&&(o=t.find(r)))if(C(a.descriptor)||C(o.descriptor)){if(S(a)||S(o))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");o.descriptor=a.descriptor}else{if(S(a)){if(S(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");o.decorators=a.decorators}x(a,o)}else t.push(a)}return t}(s.d.map(E)),e);return o.initializeClassElements(s.F,n.elements),o.runClassFinishers(s.F,n.finishers)}([(0,c.Mo)("hui-energy-usage-graph-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[(0,c.SB)()],key:"_start",value:()=>(0,i.Z)()},{kind:"field",decorators:[(0,c.SB)()],key:"_end",value:()=>(0,o.Z)()},{kind:"field",decorators:[(0,c.SB)()],key:"_compareStart",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_compareEnd",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[(0,_.UB)(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>this._getStatistics(e)))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?d.dy`
      <ha-card>
        ${this._config.title?d.dy`<h1 class="card-header">${this._config.title}</h1>`:""}
        <div
          class="content ${(0,u.$)({"has-header":!!this._config.title})}"
        >
          <ha-chart-base
            .data=${this._chartData}
            .options=${this._createOptions(this._start,this._end,this.hass.locale,this._compareStart,this._compareEnd)}
            chart-type="bar"
          ></ha-chart-base>
          ${this._chartData.datasets.some((e=>e.data.length))?"":d.dy`<div class="no-data">
                ${(0,a.Z)(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period")}
              </div>`}
        </div>
      </ha-card>
    `:d.dy``}},{kind:"field",key:"_createOptions",value(){return(0,f.Z)(((e,t,r,i,o)=>{const a=(0,s.Z)(t,e),d=void 0!==i&&void 0!==o;if(d){const r=(0,n.Z)(t,e),a=(0,n.Z)(o,i);a>r?t=(0,l.Z)(t,a-r):r>a&&(o=(0,l.Z)(o,r-a))}const c={parsing:!1,animation:!1,scales:{x:{type:"time",suggestedMin:e.getTime(),suggestedMax:t.getTime(),adapters:{date:{locale:r}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:e=>e.tick&&e.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:a>35?"monthyear":a>7?"date":a>2?"weekday":a>0?"datetime":"hour",minUnit:a>35?"month":a>2?"day":"hour"}},y:{stacked:!0,type:"linear",title:{display:!0,text:"kWh"},ticks:{beginAtZero:!0,callback:e=>(0,g.uf)(Math.abs(e),r)}}},plugins:{tooltip:{mode:"x",intersect:!0,position:"nearest",filter:e=>"0"!==e.formattedValue,callbacks:{title:e=>{if(a>0)return e[0].label;const t=new Date(e[0].parsed.x);return`${d?`${(0,m.mn)(t,r)}: `:""}${(0,y.mr)(t,r)} – ${(0,y.mr)((0,l.Z)(t,1),r)}`},label:e=>`${e.dataset.label}: ${(0,g.uf)(Math.abs(e.parsed.y),r)} kWh`,footer:e=>{let t=0,i=0;for(const r of e){const e=r.dataset.data[r.dataIndex].y;e>0?t+=e:i+=Math.abs(e)}return[t?this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.total_consumed",{num:(0,g.uf)(t,r)}):"",i?this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.total_returned",{num:(0,g.uf)(i,r)}):""].filter(Boolean)}}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:(0,g.Hd)(r)};return d&&(c.scales.xAxisCompare={...c.scales.x,suggestedMin:i.getTime(),suggestedMax:o.getTime(),display:!1}),c}))}},{kind:"method",key:"_getStatistics",value:async function(e){const t=[],r={};for(const t of e.prefs.energy_sources)if("solar"!==t.type)if("battery"!==t.type){if("grid"===t.type){for(const e of t.flow_from)r.from_grid?r.from_grid.push(e.stat_energy_from):r.from_grid=[e.stat_energy_from];for(const e of t.flow_to)r.to_grid?r.to_grid.push(e.stat_energy_to):r.to_grid=[e.stat_energy_to]}}else r.to_battery?(r.to_battery.push(t.stat_energy_to),r.from_battery.push(t.stat_energy_from)):(r.to_battery=[t.stat_energy_to],r.from_battery=[t.stat_energy_from]);else r.solar?r.solar.push(t.stat_energy_from):r.solar=[t.stat_energy_from];const i=getComputedStyle(this),a={to_grid:i.getPropertyValue("--energy-grid-return-color").trim(),to_battery:i.getPropertyValue("--energy-battery-in-color").trim(),from_grid:i.getPropertyValue("--energy-grid-consumption-color").trim(),used_grid:i.getPropertyValue("--energy-grid-consumption-color").trim(),used_solar:i.getPropertyValue("--energy-solar-color").trim(),used_battery:i.getPropertyValue("--energy-battery-out-color").trim()},s={used_grid:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.combined_from_grid"),used_solar:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_solar"),used_battery:this.hass.localize("ui.panel.lovelace.cards.energy.energy_usage_graph.consumed_battery")};this._start=e.start,this._end=e.end||(0,o.Z)(),this._compareStart=e.startCompare,this._compareEnd=e.endCompare,t.push(...this._processDataSet(e.stats,e.statsMetadata,r,a,s,!1)),e.statsCompare&&(t.push({order:0,data:[]}),t.push({order:999,data:[],xAxisID:"xAxisCompare"}),t.push(...this._processDataSet(e.statsCompare,e.statsMetadata,r,a,s,!0))),this._chartData={datasets:t}}},{kind:"method",key:"_processDataSet",value:function(e,t,r,i,o,a=!1){const s=[],n={},l={};Object.entries(r).forEach((([t,r])=>{const i=["solar","to_grid","from_grid","to_battery","from_battery"].includes(t),o=!["solar","from_battery"].includes(t),a={},s={};r.forEach((t=>{const r=e[t];if(!r)return;const n={};let l;r.forEach((e=>{if(null===e.sum)return;if(void 0===l)return void(l=e.sum);const t=e.sum-l;i&&(a[e.start]=e.start in a?a[e.start]+t:t),o&&!(e.start in n)&&(n[e.start]=t),l=e.sum})),s[t]=n})),i&&(l[t]=a),o&&(n[t]=s)}));const d={},c={};if((l.to_grid||l.to_battery)&&l.solar){const e={};for(const t of Object.keys(l.solar)){var u,f;if(e[t]=(l.solar[t]||0)-((null===(u=l.to_grid)||void 0===u?void 0:u[t])||0)-((null===(f=l.to_battery)||void 0===f?void 0:f[t])||0),e[t]<0){var m,y,g;if(l.to_battery)if(d[t]=-1*e[t],d[t]>((null===(m=l.from_grid)||void 0===m?void 0:m[t])||0))c[t]=Math.min(0,d[t]-((null===(y=l.from_grid)||void 0===y?void 0:y[t])||0)),d[t]=null===(g=l.from_grid)||void 0===g?void 0:g[t];e[t]=0}}n.used_solar={used_solar:e}}if(l.from_battery)if(l.to_grid){const e={};for(const t of Object.keys(l.from_battery))e[t]=(l.from_battery[t]||0)-(c[t]||0);n.used_battery={used_battery:e}}else n.used_battery={used_battery:l.from_battery};if(n.from_grid&&l.to_battery){const e={};for(const t of Object.keys(d)){let r,i=0;for(const[e,o]of Object.entries(n.from_grid))if(o[t]&&(r=e,i++),i>1)break;if(1===i)n.from_grid[r][t]-=d[t]||0;else{let r=0;Object.values(n.from_grid).forEach((e=>{r+=e[t]||0,delete e[t]})),e[t]=r-(d[t]||0)}}n.used_grid={used_grid:e}}let _=[];Object.values(n).forEach((e=>{Object.values(e).forEach((e=>{_=_.concat(Object.keys(e))}))}));const b=Array.from(new Set(_));return Object.entries(n).forEach((([e,r])=>{Object.entries(r).forEach((([r,l],d)=>{const c=d>0?this.hass.themes.darkMode?(0,h.C)((0,p.Rw)((0,p.wK)(i[e])),d):(0,h.W)((0,p.Rw)((0,p.wK)(i[e])),d):void 0,u=c?(0,p.CO)((0,p.p3)(c)):i[e],f=[];for(const t of b){const r=l[t]||0,i=new Date(t);f.push({x:i.getTime(),y:r&&["to_grid","to_battery"].includes(e)?-1*r:r})}s.push({label:e in o?o[e]:(0,v.Kd)(this.hass,r,t[r]),order:"used_solar"===e?1:"to_battery"===e?Object.keys(n).length:d+2,borderColor:a?u+"7F":u,backgroundColor:a?u+"32":u+"7F",stack:"stack",data:f,xAxisID:a?"xAxisCompare":void 0})}))})),s}},{kind:"get",static:!0,key:"styles",value:function(){return d.iv`
      ha-card {
        height: 100%;
      }
      .card-header {
        padding-bottom: 0;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
      .no-data {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20%;
        margin-left: 32px;
        box-sizing: border-box;
      }
    `}}]}}),(0,b.f)(d.oi))}))}}]);
//# sourceMappingURL=18a8478f.js.map