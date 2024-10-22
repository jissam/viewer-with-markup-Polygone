/*! For license information please see 475.js.LICENSE.txt */
"use strict";(self.webpackChunkviewer=self.webpackChunkviewer||[]).push([[475],{9875:(t,i,o)=>{function e(t){let i=document.getElementById(`superviz-${t}-styles`);if(!i)return;let o=new CSSStyleSheet;o.replaceSync(i.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,o]}o.d(i,{a:()=>e}),(0,o(5194).i)()},3299:(t,i,o)=>{o.d(i,{a:()=>h});var e=o(5390),s=o(5022),n=o(5194);(0,n.i)(),(0,n.i)(),(0,n.i)();var r=e.d`
  * {
    --sv-primary: 98, 16, 204;
    --sv-primary-900: 56, 7, 136;
    --sv-primary-200: 193, 161, 234;
    --sv-secondary: 193, 251, 223;
    --sv-gray: 126, 122, 136;
    --sv-success: 12, 185, 71;
    --sv-danger: 229, 65, 30;
    --sv-black: 19, 18, 21;
    --sv-white: 255, 255, 255;
    --sv-gray-100: 250, 250, 252;
    --sv-gray-200: 233, 229, 239;
    --sv-gray-300: 201, 196, 209;
    --sv-gray-400: 174, 169, 184;
    --sv-gray-500: 126, 122, 136;
    --sv-gray-600: 87, 83, 95;
    --sv-gray-700: 57, 54, 62;
    --sv-gray-800: 38, 36, 42;
  }

  .sv-gray-200 {
    color: rgb(var(--sv-gray-200));
  }

  .sv-gray-400 {
    color: rgb(var(--sv-gray-400));
  }

  .sv-gray-500 {
    color: rgb(var(--sv-gray-500));
  }

  .sv-gray-600 {
    color: rgb(var(--sv-gray-600));
  }

  .sv-gray-700 {
    color: rgb(var(--sv-gray-700));
  }
`;(0,n.i)();var l=e.d`
  .text {
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .text-bold {
    font-weight: 700;
  }

  .text-big {
    font-size: 14px;
  }

  .text-small {
    font-size: 10px;
  }
`;(0,n.i)();var a=e.d`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;(0,n.i)();var p=e.d`
  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0);
    border: 0px;
    width: 32px;
    height: 32px;
  }

  .icon-button > superviz-icon {
    display: flex !important;
  }

  .icon-button--xsmall {
    width: 18px;
    height: 18px;
  }

  .icon-button--small {
    width: 24px;
    height: 24px;
  }

  .icon-button--medium {
    width: 32px;
    height: 32px;
  }

  .icon-button--large {
    width: 40px;
    height: 40px;
  }

  .icon-button--clickable {
    cursor: pointer;
    border-radius: 100%;
  }

  .icon-button--clickable:hover:not(.icon-button--no-hover) {
    background: rgb(var(--sv-gray-300));
    transition: 0.25s background-color ease-in;
  }
  
  .icon-button--clickable:focus:not(.icon-button--no-hover) {
    transition: 0.25s background-color ease-in;
    background: rgb(var(--sv-gray-300));
  }
`,h=t=>{var i;class o extends t{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=s.i.bind(this)}connectedCallback(){setTimeout((()=>{var t,i;let o=document.getElementById("superviz-style"),e=this.createCustomColors(),s=document.createElement("style");s.innerHTML=(null==o?void 0:o.innerHTML)||"",null==(t=this.shadowRoot)||t.appendChild(s),e&&(null==(i=this.shadowRoot)||i.appendChild(e))})),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach((t=>t(this)))}createCustomColors(){if(!s.b.get("colors"))return;let t=document.createElement("style"),i=Object.entries(s.b.get("colors")).map((([t,i])=>`--${t}: ${i} !important;`)).join(" ");return t.innerHTML=`\n      * {\n        ${i}\n      }\n    `,t}emitEvent(t,i,o={composed:!0,bubbles:!0}){let e=new CustomEvent(t,(0,n.b)({detail:i},o));this.dispatchEvent(e)}}return o.styles=[r,l,a,p,null!=(i=t.styles)?i:[]],o}},1604:(t,i,o)=>{o.d(i,{a:()=>e,b:()=>s,c:()=>n}),(0,o(5194).i)();var e={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...i)=>({_$litDirective$:t,values:i}),n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}},4468:(t,i,o)=>{o.d(i,{a:()=>r});var e=o(1604),s=o(5390),n=o(5194);(0,n.i)();var r=(0,e.b)(class extends e.c{constructor(t){var i;if(super(t),t.type!==e.a.ATTRIBUTE||"class"!==t.name||(null==(i=t.strings)?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var o,e;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(let t in i)i[t]&&(null==(o=this.nt)||!o.has(t))&&this.st.add(t);return this.render(i)}let n=t.element.classList;for(let t of this.st)t in i||(n.remove(t),this.st.delete(t));for(let t in i){let o=!!i[t];o===this.st.has(t)||null!=(e=this.nt)&&e.has(t)||(o?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return s.b}});(0,n.i)()},475:(t,i,o)=>{o.r(i),o.d(i,{Tooltip:()=>d});var e=o(4468),s=(o(1604),o(9875)),n=o(3299),r=o(5390),l=(o(5022),o(5194));(0,l.i)(),(0,l.i)();var a=r.d`
  .superviz-who-is-online__tooltip {
    --host-height: 0px;
    --host-width: 0px;
    --vertical-offset: 12px;

    background-color: rgb(var(--sv-gray-600));
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    position: fixed;
    opacity: 0;
    border-radius: 2px;
    cursor: default;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out display 0s;
    z-index: 100;
    overflow-x: clip;
  }

  .superviz-who-is-online__tooltip-arrow {
    width: 13px;
    height: 13px;
    position: absolute;
    background-color: rgb(var(--sv-gray-600));
    transform: rotate(45deg);
    border-top-left-radius: 1px;
    border-bottom-right-radius: 1px;
  }

  .show-tooltip {
    opacity: 1;
    visibility: visible;
  }

  .tooltip-name,
  .tooltip-action {
    margin: 0;
    font-family: roboto;
    white-space: nowrap;
    text-align: center;
    line-height: 1.2;
  }

  .tooltip-name {
    color: white;
    font-size: 14px;
  }

  .tooltip-action {
    color: rgb(var(--sv-gray-400));
    font-size: 12px;
  }

  .tooltip-top {
    bottom: calc(var(--host-height) + var(--vertical-offset));
  }

  .tooltip-bottom {
    bottom: auto;
  }

  .tooltip-center {
    right: auto;
  }

  .tooltip-bottom .superviz-who-is-online__tooltip-arrow {
    top: -6.5px;
  }

  .tooltip-top .superviz-who-is-online__tooltip-arrow {
    bottom: -6.5px;
  }

  .tooltip-center .superviz-who-is-online__tooltip-arrow {
    left: 0;
    margin-left: 50%;
    translate: -50% 0;
  }

  .tooltip-left .superviz-who-is-online__tooltip-arrow {
    translate: 50% 0;
    border-radius: 0;
    right: 0;
  }

  .tooltip-right .superviz-who-is-online__tooltip-arrow {
    translate: -50% 0;
    border-radius: 0;
    left: 0;
  }

  .shift-left {
    --vertical-offset: 2px;
  }
`;(0,l.i)();var p=(0,n.a)(r.e),h=[p.styles,a],d=class extends p{constructor(){super(),this.positionFixedTooltip=()=>{var t,i,o,e,s;if(!this.canAnimate||!this.parentElement)return void this.hide();this.adjustTooltipPosition();let{bottom:n,left:r,width:l,right:a,top:p}=this.parentElement.getBoundingClientRect(),{width:h}=this.tooltip.getBoundingClientRect(),d="auto",c="auto",u="auto",g="auto",v="",b=window.innerWidth>780,m=b?14:12;this.tooltipHorizontalPosition.includes("right")&&(u=`${r+l/2}px`),this.tooltipHorizontalPosition.includes("left")&&(g=window.innerWidth-(a-l/2)+"px"),this.tooltipHorizontalPosition.includes("center")&&(u=`${r}px`,v=`translateX(-${(h-l)/2}px)`),this.tooltipVerticalPosition.includes("bottom")&&(d=`${n+m}px`,m=-10),this.tooltipVerticalPosition.includes("top")&&(c=window.innerHeight-(p-m)+"px",m=10),this.shiftTooltipLeft&&(v=`translate(-${(h-(b?18:10)-42)/2}px, ${m}px)`),null==(t=this.tooltip)||t.style.setProperty("top",d),null==(i=this.tooltip)||i.style.setProperty("left",u),null==(o=this.tooltip)||o.style.setProperty("right",g),null==(e=this.tooltip)||e.style.setProperty("bottom",c),null==(s=this.tooltip)||s.style.setProperty("transform",v),this.animationFrame=window.requestAnimationFrame(this.positionFixedTooltip)},this.hide=()=>{this.canAnimate=!1,this.showTooltip=!1,window.cancelAnimationFrame(this.animationFrame)},this.show=()=>{this.canAnimate=!0,this.showTooltip=!0,this.positionFixedTooltip()},this.adjustTooltipVerticalPosition=()=>{let{bottom:t,top:i,width:o}=this.tooltip.getBoundingClientRect(),e=window.innerHeight;this.tooltipVerticalPosition.includes("top")&&i<0?this.tooltipVerticalPosition=this.tooltipVerticalPosition.replace("top","bottom"):this.tooltipVerticalPosition.includes("bottom")&&t>e&&(this.tooltipVerticalPosition=this.tooltipVerticalPosition.replace("bottom","top"))},this.adjustTooltipHorizontalPosition=()=>{let{left:t,right:i,width:o}=this.tooltip.getBoundingClientRect(),e=window.innerWidth,{left:s,width:n,right:r}=this.parentElement.getBoundingClientRect();s+n/2-o/2>0&&o/2+r-n/2<e?this.tooltipHorizontalPosition=this.tooltipHorizontalPosition.replace(/left|right/,"center"):t<0?this.tooltipHorizontalPosition=this.tooltipHorizontalPosition.replace("center","right"):i>e&&(this.tooltipHorizontalPosition=this.tooltipHorizontalPosition.replace("center","left"))},this.adjustTooltipPosition=()=>{this.parentElement?(this.tooltip||(this.tooltip=this.shadowRoot.querySelector(".superviz-who-is-online__tooltip")),this.adjustTooltipVerticalPosition(),this.adjustTooltipHorizontalPosition()):this.hide()},this.tooltipVerticalPosition="tooltip-bottom",this.tooltipHorizontalPosition="tooltip-center",this.showTooltip=!1,this.parentSizes={height:0,width:0}}firstUpdated(t){let{parentElement:i}=this;null==i||i.addEventListener("mouseenter",this.show),null==i||i.addEventListener("mouseleave",this.hide),this.adjustTooltipPosition(),s.a.call(this,this.parentComponent)}disconnectedCallback(){super.disconnectedCallback();let{parentElement:t}=this;null==t||t.removeEventListener("mouseenter",this.show),null==t||t.removeEventListener("mouseleave",this.hide)}updated(t){if(t.has("showTooltip")&&this.showTooltip){let{parentElement:t}=this;if(!t)return;let{height:i,width:o}=t.getBoundingClientRect();(this.parentSizes.height!==i||this.parentSizes.width!==o)&&(this.parentSizes={height:i,width:o})}}getClass(t){return t?`${this.classesPrefix}__${t}`:this.classesPrefix}renderTooltip(){var t,i,o,s,n;let l=this.tooltipVerticalPosition,a=this.tooltipHorizontalPosition,p={"superviz-who-is-online__tooltip":!0,[this.getClass("")]:!0,[l]:!0,[a]:!0,"tooltip-extras":this.tooltipOnLeft,"show-tooltip":this.showTooltip,"shift-left":this.shiftTooltipLeft};return r.a`<div
      class=${(0,e.a)(p)}
      style="--host-height: ${null==(t=this.parentSizes)?void 0:t.height}px; --host-width: ${null==(i=this.parentSizes)?void 0:i.width}px;"
    >
      <p class="tooltip-name ${this.getClass("title")}">${null==(o=this.tooltipData)?void 0:o.name}</p>
      ${null!=(s=this.tooltipData)&&s.info?r.a`<p class="tooltip-action ${this.getClass("action")}">${null==(n=this.tooltipData)?void 0:n.info}</p>`:""}
      <div class="superviz-who-is-online__tooltip-arrow ${this.getClass("")}"></div>
    </div>`}render(){return r.a`${this.renderTooltip()}`}};d.styles=h,d.properties={tooltipData:{type:Object},tooltipOnLeft:{type:Boolean},showTooltip:{type:Boolean},tooltip:{type:Object},tooltipVerticalPosition:{type:String},tooltipHorizontalPosition:{type:String},parentSizes:{type:Object},shiftTooltipLeft:{type:Boolean},classesPrefix:{type:String},parentComponent:{type:String}},d=(0,l.g)([(0,r.f)("superviz-tooltip")],d)}}]);