/*! For license information please see 698.js.LICENSE.txt */
"use strict";(self.webpackChunkviewer=self.webpackChunkviewer||[]).push([[698],{9875:(t,e,s)=>{function i(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{a:()=>i}),(0,s(5194).i)()},1604:(t,e,s)=>{s.d(e,{a:()=>i,b:()=>r,c:()=>a}),(0,s(5194).i)();var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e}),a=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},4468:(t,e,s)=>{s.d(e,{a:()=>n});var i=s(1604),r=s(5390),a=s(5194);(0,a.i)();var n=(0,i.b)(class extends i.c{constructor(t){var e;if(super(t),t.type!==i.a.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(let t in e)e[t]&&(null==(s=this.nt)||!s.has(t))&&this.st.add(t);return this.render(e)}let a=t.element.classList;for(let t of this.st)t in e||(a.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||null!=(i=this.nt)&&i.has(t)||(s?(a.add(t),this.st.add(t)):(a.remove(t),this.st.delete(t)))}return r.b}});(0,a.i)()},2698:(t,e,s)=>{s.r(e),s.d(e,{Comments:()=>u});var i,r=s(1949),a=(s(793),s(6425),s(4468)),n=(s(1604),s(9875)),o=s(3299),l=s(5390),d=(s(5022),s(5194));function h(t){let e=t.querySelector("#superviz-comments");if(e&&!i){let s={childList:!0,attributes:!0,characterData:!0,subtree:!0};i=new MutationObserver((e=>{e.forEach((e=>{e.removedNodes.length&&e.removedNodes.forEach((e=>{"poweredby-footer"===e.id&&function(t){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let s=document.createElement("div");s.className="powered-by powered-by--horizontal";let i=document.createElement("a");i.href="https://superviz.com/",i.target="_blank",i.className="link";let r=document.createElement("div");r.textContent="Powered by";let a=document.createElement("img");a.width=48,a.height=8.86,a.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",s.appendChild(i),i.appendChild(r),r.appendChild(a),e.appendChild(s);let n=t.getElementById("superviz-comments");n&&n.appendChild(e),h(t)}(t)}))}))})),i.observe(e,s)}}(0,d.i)(),(0,d.i)();var p=(0,o.a)(l.e),c=[p.styles,r.a,r.k],u=class extends p{constructor(){super(),this.annotations=[],this.annotationFilter="All comments",this.waterMarkState=!1,this.participantsList=[],this.side="left"}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{n.a.call(this,["comments"])}))}updated(t){super.updated(t),this.updateComplete.then((()=>{this.waterMarkState&&h(this.shadowRoot),t.has("offset")&&this.applyOffset()}))}participantsListed(t){this.participantsList=t}updateAnnotations(t){this.annotations=t}close(){this.emitEvent("close-threads",{})}waterMarkStatus(t){this.waterMarkState=t}setFilter({detail:t}){let{filter:{label:e}}=t;this.annotationFilter=e}getOffset(t){return null==t||t<0?"10px":`${t}px`}applyOffset(){let t=this.shadowRoot.querySelector(".superviz-comments");if(!t)return;let{left:e,right:s,top:i,bottom:r}=this.offset;t.style.setProperty("--offset-top",this.getOffset(i)),t.style.setProperty("--offset-bottom",this.getOffset(r)),t.style.setProperty("--offset-right",this.getOffset(s)),t.style.setProperty("--offset-left",this.getOffset(e))}get poweredBy(){return this.waterMarkState?l.a` <div id="poweredby-footer" class="footer">
      <div class="powered-by powered-by--horizontal">
        <a href="https://superviz.com/" target="_blank" class="link">
          <div class="">
            Powered by
            <img
              width="48px"
              height="8.86px"
              src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg"
            />
          </div>
        </a>
      </div>
    </div>`:l.a``}render(){let t={"superviz-comments":!0,"threads-on-left-side":"left"===this.side,"threads-on-right-side":"right"===this.side,"hide-at-right":"right"===this.side&&!this.open,"hide-at-left":"left"===this.side&&!this.open};return l.a`
      <div id="superviz-comments" class=${(0,a.a)(t)}>
        <div class="header">
          <superviz-comments-topbar
            @close-threads=${this.close}
            side=${this.side.split(":")[0]}
          ></superviz-comments-topbar>
        </div>
        <superviz-comments-annotation-filter
          filter=${this.annotationFilter}
          @select=${this.setFilter}
        >
        </superviz-comments-annotation-filter>
        <superviz-comments-content
          annotations=${JSON.stringify(this.annotations)}
          annotationFilter=${this.annotationFilter}
          participantsList=${JSON.stringify(this.participantsList)}
          class="content"
        ></superviz-comments-content>
        ${this.poweredBy}
      </div>
    `}};u.styles=c,u.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String},participantsList:{type:Object},offset:{type:Object}},u=(0,d.g)([(0,l.f)("superviz-comments")],u)}}]);