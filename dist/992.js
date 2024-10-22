"use strict";(self.webpackChunkviewer=self.webpackChunkviewer||[]).push([[992],{3299:(t,e,r)=>{r.d(e,{a:()=>g});var s=r(5390),i=r(5022),o=r(5194);(0,o.i)(),(0,o.i)(),(0,o.i)();var n=s.d`
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
`;(0,o.i)();var a=s.d`
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
`;(0,o.i)();var c=s.d`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;(0,o.i)();var l=s.d`
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
`,g=t=>{var e;class r extends t{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=i.i.bind(this)}connectedCallback(){setTimeout((()=>{var t,e;let r=document.getElementById("superviz-style"),s=this.createCustomColors(),i=document.createElement("style");i.innerHTML=(null==r?void 0:r.innerHTML)||"",null==(t=this.shadowRoot)||t.appendChild(i),s&&(null==(e=this.shadowRoot)||e.appendChild(s))})),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach((t=>t(this)))}createCustomColors(){if(!i.b.get("colors"))return;let t=document.createElement("style"),e=Object.entries(i.b.get("colors")).map((([t,e])=>`--${t}: ${e} !important;`)).join(" ");return t.innerHTML=`\n      * {\n        ${e}\n      }\n    `,t}emitEvent(t,e,r={composed:!0,bubbles:!0}){let s=new CustomEvent(t,(0,o.b)({detail:e},r));this.dispatchEvent(s)}}return r.styles=[n,a,c,l,null!=(e=t.styles)?e:[]],r}},5992:(t,e,r)=>{r.r(e),r.d(e,{Icon:()=>g});var s=r(3299),i=r(5390),o=(r(5022),r(5194));(0,o.i)(),(0,o.i)();var n,a=((n=a||{})[n.xs=14]="xs",n[n.sm=18]="sm",n[n.md=24]="md",n[n.lg=36]="lg",n[n.xl=44]="xl",n),c=(0,s.a)(i.e),l=[c.styles],g=class extends c{constructor(){super(),this.name="",this.size="md"}get iconSize(){return a[this.size]}render(){var t;return this.color||(this.color="black"),i.a`
      <i
        class="sv-icon sv-icon-${this.name}_${null!=(t=this.suffix)?t:this.size} ${this.color}"
        style="font-size: ${this.iconSize}px"
      ></i>
    `}};g.properties={name:{type:String},size:{type:String},color:{type:String},suffix:{type:String}},g.styles=[l,i.d`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }

      i,
      i.black {
        color: rgba(var(--sv-gray-600));
      }

      i.white {
        color: white;
      }
    `],g=(0,o.g)([(0,i.f)("superviz-icon")],g)}}]);