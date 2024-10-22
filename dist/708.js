/*! For license information please see 708.js.LICENSE.txt */
"use strict";(self.webpackChunkviewer=self.webpackChunkviewer||[]).push([[708],{9875:(t,e,i)=>{function s(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let i=new CSSStyleSheet;i.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,i]}i.d(e,{a:()=>s}),(0,i(5194).i)()},3299:(t,e,i)=>{i.d(e,{a:()=>p});var s=i(5390),o=i(5022),n=i(5194);(0,n.i)(),(0,n.i)(),(0,n.i)();var r=s.d`
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
`;(0,n.i)();var a=s.d`
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
`;(0,n.i)();var l=s.d`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;(0,n.i)();var d=s.d`
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
`,p=t=>{var e;class i extends t{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=o.i.bind(this)}connectedCallback(){setTimeout((()=>{var t,e;let i=document.getElementById("superviz-style"),s=this.createCustomColors(),o=document.createElement("style");o.innerHTML=(null==i?void 0:i.innerHTML)||"",null==(t=this.shadowRoot)||t.appendChild(o),s&&(null==(e=this.shadowRoot)||e.appendChild(s))})),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach((t=>t(this)))}createCustomColors(){if(!o.b.get("colors"))return;let t=document.createElement("style"),e=Object.entries(o.b.get("colors")).map((([t,e])=>`--${t}: ${e} !important;`)).join(" ");return t.innerHTML=`\n      * {\n        ${e}\n      }\n    `,t}emitEvent(t,e,i={composed:!0,bubbles:!0}){let s=new CustomEvent(t,(0,n.b)({detail:e},i));this.dispatchEvent(s)}}return i.styles=[r,a,l,d,null!=(e=t.styles)?e:[]],i}},1604:(t,e,i)=>{i.d(e,{a:()=>s,b:()=>o,c:()=>n}),(0,i(5194).i)();var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e}),n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},4468:(t,e,i)=>{i.d(e,{a:()=>r});var s=i(1604),o=i(5390),n=i(5194);(0,n.i)();var r=(0,s.b)(class extends s.c{constructor(t){var e;if(super(t),t.type!==s.a.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(let t in e)e[t]&&(null==(i=this.nt)||!i.has(t))&&this.st.add(t);return this.render(e)}let n=t.element.classList;for(let t of this.st)t in e||(n.remove(t),this.st.delete(t));for(let t in e){let i=!!e[t];i===this.st.has(t)||null!=(s=this.nt)&&s.has(t)||(i?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return o.b}});(0,n.i)()},5708:(t,e,i)=>{i.r(e),i.d(e,{Dropdown:()=>h});var s=i(4468),o=(i(1604),i(9875)),n=i(3299),r=i(5390),a=(i(5022),i(5194));(0,a.i)(),(0,a.i)();var l=r.d`
  .dropdown {
    position: relative;
    z-index: 100;
  }

  .dropdown-content {
    display: flex;
  }

  .select-clicked {
    border: 2px #26489a solid;
  }

  .dropdown-list {
    position: relative;
    z-index: 101;
  }

  .header {
    display: grid;
    grid-template-rows: 1fr 1px;
    align-items: center;
    padding: 0 10px;
    min-height: 42px;
    font-size: 16px;
    color: rgb(var(--sv-gray-600));
  }

  .menu {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    opacity: 0;
    display: none;
    background: #fff;
    padding: 0;
    z-index: 1;
    transition: 0.2s;
    border-radius: 3px;
  }

  .items {
    list-style: none;
    padding: 0;
    color: #9fa5b5;
    margin: 0;
  }

  .text.username {
    font-size: 14px;
    text-align: left;

    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    padding: 8px 0;
  }

  .items li {
    color: rgb(var(--sv-gray-600));
    text-transform: uppercase;
    padding: 0 10px;
    cursor: pointer;
    min-width: 103px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    height: 42px;
  }

  .sv-icon {
    width: 40px;
    height: 40px;
    background-color: red;
  }

  .active {
    background: rgb(var(--sv-gray-200));
  }

  .items li:hover {
    background: rgb(var(--sv-gray-200));
  }

  .menu-open {
    display: block;
    opacity: 1;
    position: fixed;
  }

  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-300));
    padding: 0px;
    margin: 0px;
    justify-self: flex-end;
  }

  .option-label {
    white-space: nowrap;
    line-height: 1;
  }

  .who-is-online__controls__item__icon {
    line-height: 1;
  }

  .who-is-online__controls__item {
    align-items: center;
  }

  @media (max-width: 780px) {
    .menu--top-left,
    .menu--top-center,
    .menu--top-right {
      bottom: 36px;
    }
  }
`,d=(0,n.a)(r.e),p=[d.styles,l],h=class extends d{constructor(){super(),this.menu=void 0,this.onClickOutDropdown=t=>{if(t.stopPropagation(),!this.open)return;let e=t.composedPath(),i=this.shadowRoot.querySelector(".dropdown-content"),s=this.shadowRoot.querySelector(".dropdown-list"),o=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],n=e.includes(i),r=e.includes(s),a=e.includes(o);n||r||a||this.close()},this.close=()=>{this.open=!1,this.emitEvent("close",{bubbles:!1,composed:!1})},this.callbackSelected=({label:t})=>{this.open=!1,this.emitEvent("selected",(0,a.c)((0,a.b)({},this.returnData),{label:t}),{bubbles:!1,composed:!0})},this.adjustPosition=()=>{this.open?(this.setHorizontalPosition(),this.setPositionVertical(),this.animationFrame=requestAnimationFrame(this.adjustPosition)):cancelAnimationFrame(this.animationFrame)},this.tooltip=()=>{if(!this.canShowTooltip)return"";let t=this.lastParticipant?"tooltip-top":"tooltip-bottom";return r.a` <superviz-tooltip
      tooltipData=${JSON.stringify(this.tooltipData)}
      ?shiftTooltipLeft=${this.shiftTooltipLeft}
      tooltipVerticalPosition=${t}
      classesPrefix="${this.tooltipPrefix}__tooltip"
      parentComponent=${this.parentComponent}
    ></superviz-tooltip>`},this.showTooltip=!1,this.returnData={}}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{this.menu=this.shadowRoot.querySelector(".menu"),o.a.call(this,[this.parentComponent])}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.onClickOutDropdown);let t=this.shadowRoot.querySelector(".dropdown");null==t||t.removeEventListener("mouseenter",(()=>{this.showTooltip=!0})),null==t||t.removeEventListener("mouseleave",(()=>{this.showTooltip=!1}))}updated(t){if(t.has("open")){if(this.emitEvent("toggle-dropdown-state",{open:this.open,font:this.name},{bubbles:!1,composed:!1}),this.open)return document.addEventListener("click",this.onClickOutDropdown),void(this.animationFrame=requestAnimationFrame(this.adjustPosition));document.removeEventListener("click",this.onClickOutDropdown)}}setHorizontalPosition(){let t=this.shadowRoot.querySelector('slot[name="dropdown"]'),{left:e,right:i,width:s}=t.parentElement.getBoundingClientRect(),{width:o}=this.menu.getBoundingClientRect(),n=e-(o-s)/2<0,r=i+(o-s)/2>window.innerWidth;return this.shiftTooltipLeft?(this.menu.style.left=`${e+8}px`,this.menu.style.right="",void(this.menu.style.transform="translate(0, 0)")):n||r?n?void(r||(this.menu.style.right="",this.menu.style.left=i-s+"px",this.menu.style.transform="translate(0, 0)")):(this.menu.style.left="",this.menu.style.right=window.innerWidth-i+"px",void(this.menu.style.transform="translate(0, 0)")):(this.menu.style.left=`${e}px`,this.menu.style.right="",void(this.menu.style.transform=`translate(calc(-50% + ${s/2}px), 0)`))}setPositionVertical(){let t=this.shadowRoot.querySelector('slot[name="dropdown"]'),{top:e,bottom:i}=t.parentElement.getBoundingClientRect(),{height:s}=this.menu.getBoundingClientRect(),o=this.shiftTooltipLeft?-2:8;if(!(i+s+o>window.innerHeight))return this.menu.style.bottom="",void(this.menu.style.top=`${i+o}px`);this.menu.style.top="auto",this.menu.style.bottom=`${window.innerHeight-e+o}px`}get renderHeader(){return this.name?r.a` <div class="header ${this.getClass("header")}">
      <span class="text username ${this.getClass("title")}">${this.name}</span>
      <span class="sv-hr ${this.getClass("divisor")}"></span>
    </div>`:r.a``}toggle(){this.disabled||(this.open=!this.open,this.emitEvent("open",{open:this.open}))}getIcon(t){if(t)return r.a`
      <span class=${this.getClass("item__icon")}>
        <superviz-icon name="${t}" size="sm"></superviz-icon>
      </span>
    `}getLabel(t){return r.a`<span class="option-label ${this.getClass("item__label")}">${t}</span>`}get listOptions(){return this.options.map((({label:t,icon:e,active:i})=>{let o={text:!0,[this.getClass("item")]:!0,"text-bold":!0,active:i};return r.a`<li @click=${()=>this.callbackSelected({label:t})} class=${(0,s.a)(o)}>
        ${this.getIcon(e)} ${this.getLabel(t)}
      </li>`}))}getClass(t){return`${this.classesPrefix}__${t}`}render(){let t={menu:!0,"menu-open":this.open,"menu-left":"left"===this.align,"menu-right":"right"===this.align,"who-is-online-dropdown":this.name};return r.a`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${(0,s.a)(t)}>
          ${this.renderHeader}
          <ul class="${this.getClass("items")} items">
            ${this.listOptions}
          </ul>
        </div>
      </div>
    `}};h.styles=p,h.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},options:{type:Array},icons:{type:Array},name:{type:String},tooltipData:{type:Object},showTooltip:{type:Boolean},dropdown:{type:Object},canShowTooltip:{type:Boolean},drodpdownSizes:{type:Object},shiftTooltipLeft:{type:Boolean},lastParticipant:{type:Boolean},classesPrefix:{type:String},parentComponent:{type:String},tooltipPrefix:{type:String},returnData:{type:Object}},h=(0,a.g)([(0,r.f)("superviz-dropdown")],h)}}]);