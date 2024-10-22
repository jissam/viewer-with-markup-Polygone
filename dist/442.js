"use strict";(self.webpackChunkviewer=self.webpackChunkviewer||[]).push([[442],{9442:(e,t,s)=>{s.r(t),s.d(t,{CommentsAnnotationResolved:()=>r});var i=s(1949),o=s(9875),n=s(3299),d=s(5390),a=(s(5022),s(5194));(0,a.i)();var l=(0,n.a)(d.e),c=[l.styles,i.g],r=class extends l{constructor(){super(),this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout((()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())}),this.timeToHide)},this.timeToHide=1e4,this.isCanceled=!1}firstUpdated(e){super.firstUpdated(e),this.updateComplete.then((()=>{o.a.call(this,["comments"]),this.setTimer()}))}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return 0===this.timeToHide||this.isCanceled?d.a``:d.a`
      <div class="comments__annotation-resolved">
        <span class="text text-big sv-gray-700 comments__annotation-resolved__text"
          >You resolved this comment</span
        >
        <button
          id="undone"
          @click=${this.undone}
          class="icon-button icon-button--clickable icon-button--medium comments__annotation-resolved__unresolve_button"
        >
          <superviz-icon name="undo" size="md"></superviz-icon>
        </button>
      </div>
    `}};r.styles=c,r.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},r=(0,a.g)([(0,d.f)("superviz-comments-annotation-resolved")],r)},9875:(e,t,s)=>{function i(e){let t=document.getElementById(`superviz-${e}-styles`);if(!t)return;let s=new CSSStyleSheet;s.replaceSync(t.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(t,{a:()=>i}),(0,s(5194).i)()}}]);