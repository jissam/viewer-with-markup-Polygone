/*! For license information please see 505.js.LICENSE.txt */
"use strict";(self.webpackChunkviewer=self.webpackChunkviewer||[]).push([[505],{9924:(e,t,i)=>{i.d(t,{a:()=>h});var s=i(1604),l=i(5390),n=i(5194);(0,n.i)(),(0,n.i)();var{I:r}=l.c,a=()=>document.createComment(""),o=(e,t,i)=>{var s;let l=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){let t=l.insertBefore(a(),n),s=l.insertBefore(a(),n);i=new r(t,s,e,e.options)}else{let t=i._$AB.nextSibling,r=i._$AM,a=r!==e;if(a){let t;null==(s=i._$AQ)||s.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==n||a){let e=i._$AA;for(;e!==t;){let t=e.nextSibling;l.insertBefore(e,n),e=t}}}return i},d=(e,t,i=e)=>(e._$AI(t,i),e),u={},v=e=>{var t;null==(t=e._$AP)||t.call(e,!1,!0);let i=e._$AA,s=e._$AB.nextSibling;for(;i!==s;){let e=i.nextSibling;i.remove(),i=e}},p=(e,t,i)=>{let s=new Map;for(let l=t;l<=i;l++)s.set(e[l],l);return s},h=(0,s.b)(class extends s.c{constructor(e){if(super(e),e.type!==s.a.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);let l=[],n=[],r=0;for(let t of e)l[r]=s?s(t,r):r,n[r]=i(t,r),r++;return{values:n,keys:l}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){var n;let r=(e=>e._$AH)(e),{values:a,keys:h}=this.dt(t,i,s);if(!Array.isArray(r))return this.ut=h,a;let c,A,$=null!=(n=this.ut)?n:this.ut=[],f=[],m=0,_=r.length-1,y=0,g=a.length-1;for(;m<=_&&y<=g;)if(null===r[m])m++;else if(null===r[_])_--;else if($[m]===h[y])f[y]=d(r[m],a[y]),m++,y++;else if($[_]===h[g])f[g]=d(r[_],a[g]),_--,g--;else if($[m]===h[g])f[g]=d(r[m],a[g]),o(e,f[g+1],r[m]),m++,g--;else if($[_]===h[y])f[y]=d(r[_],a[y]),o(e,r[m],r[_]),_--,y++;else if(void 0===c&&(c=p(h,y,g),A=p($,m,_)),c.has($[m]))if(c.has($[_])){let t=A.get(h[y]),i=void 0!==t?r[t]:null;if(null===i){let t=o(e,r[m]);d(t,a[y]),f[y]=t}else f[y]=d(i,a[y]),o(e,r[m],i),r[t]=null;y++}else v(r[_]),_--;else v(r[m]),m++;for(;y<=g;){let t=o(e,f[g+1]);d(t,a[y]),f[y++]=t}for(;m<=_;){let e=r[m++];null!==e&&v(e)}return this.ut=h,((e,t=u)=>{e._$AH=t})(e,f),l.b}});(0,n.i)()},1604:(e,t,i)=>{i.d(t,{a:()=>s,b:()=>l,c:()=>n}),(0,i(5194).i)();var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>(...t)=>({_$litDirective$:e,values:t}),n=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8505:(e,t,i)=>{i.r(t),i.d(t,{CommentsMentionList:()=>u});var s=i(9924),l=i(1949),n=(i(1604),i(3299)),r=i(5390),a=(i(5022),i(5194));(0,a.i)();var o=(0,n.a)(r.e),d=[o.styles,l.l],u=class extends o{constructor(){super(),this.showMentionList=()=>{var e;let t=null==(e=this.shadowRoot)?void 0:e.getElementById("mention-list");null==t||t.style.setProperty("display","block"),null==t||t.style.setProperty("margin-top","1px"),t.addEventListener("wheel",this.stopHandleZoom)},this.hideMentionList=()=>{var e;let t=null==(e=this.shadowRoot)?void 0:e.getElementById("mention-list");t.removeEventListener("wheel",this.stopHandleZoom),null==t||t.style.setProperty("display","none")},this.selectParticipant=e=>{this.emitEvent("participant-selected",e,{bubbles:!1,composed:!1}),this.hideMentionList()},this.stopHandleZoom=e=>{var t;(null==(t=this.shadowRoot)?void 0:t.getElementById("mention-list")).scrollTop+=e.deltaY,e.preventDefault()},this.participants=[]}updated(e){e.has("participants")&&this.participants.length>0?this.showMentionList():this.hideMentionList()}getAvatar(e){var t;return e.avatar?r.a`<img class="avatar" src=${e.avatar} />`:r.a`<div class="default-avatar">
      <p class="text text-bold">${(null==(t=e.name[0])?void 0:t.toUpperCase())||"A"}</p>
    </div>`}render(){let e=e=>r.a`
      <div class="mention-item" @click=${()=>this.selectParticipant(e)}>
        ${this.getAvatar(e)}
        <div class="avatar-type">${e.name}</div>
      </div>
    `;return r.a`
      <div id="mention-list">
        ${(0,s.a)(this.participants,(e=>e.id),(t=>r.a` ${e(t)} `))}
      </div>
    `}};u.styles=d,u.properties={participants:{type:Object}},u=(0,a.g)([(0,r.f)("superviz-comments-mention-list")],u)}}]);