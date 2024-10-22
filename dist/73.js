"use strict";(self.webpackChunkviewer=self.webpackChunkviewer||[]).push([[73],{9875:(e,t,s)=>{function a(e){let t=document.getElementById(`superviz-${e}-styles`);if(!t)return;let s=new CSSStyleSheet;s.replaceSync(t.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(t,{a:()=>a}),(0,s(5194).i)()},4073:(e,t,s)=>{s.r(t),s.d(t,{CommentsTopbar:()=>c});var a=s(1949),n=s(9875),o=s(3299),i=s(5390),r=(s(5022),s(5194));(0,r.i)();var p=[(0,o.a)(i.e).styles,a.b],c=class extends((0,o.a)(i.e)){firstUpdated(e){super.firstUpdated(e),this.updateComplete.then((()=>{n.a.call(this,["comments"])}))}close(){this.dispatchEvent(new CustomEvent("close-threads"))}render(){return i.a`
      <div class="comments__topbar">
        <span class="text text-bold comments__topbar__title">COMMENTS</span>
        <span @click=${this.close} class="comments__topbar__close-threads">
          <superviz-icon name=${this.side}></superviz-icon>
        </span>
      </div>
    `}};c.styles=p,c.properties={side:{type:String}},c=(0,r.g)([(0,i.f)("superviz-comments-topbar")],c)}}]);