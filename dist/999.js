/*! For license information please see 999.js.LICENSE.txt */
"use strict";(self.webpackChunkviewer=self.webpackChunkviewer||[]).push([[999],{4999:(t,e,s)=>{s.r(e),s.d(e,{CommentsAnnotationFilter:()=>p});var i=s(1949),r=(s(6425),s(4468)),n=(s(1604),s(9875)),l=s(3299),o=s(5390),a=(s(5022),s(5194));(0,a.i)();var c=(0,l.a)(o.e),d=[c.styles,i.i],h=[{label:"All comments"},{label:"Resolved comments"}],p=class extends c{constructor(){super(),this.selectClick=()=>{this.caret="down"===this.caret?"up":"down"},this.dropdownOptionsHandler=({detail:t})=>{this.emitEvent("select",{filter:t}),this.selectClick()},this.caret="down"}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{n.a.call(this,["comments"])}))}render(){let t="All comments"===this.filter?h[0].label:h[1].label;h[0].active="All comments"===this.filter,h[1].active="Resolved comments"===this.filter;let e={text:!0,"text-bold":!0,"select-content":!0,"comments__filter__selected-label":!0,"sv-gray-500":"down"===this.caret,"sv-gray-700":"up"===this.caret};return o.a`
      <div class="comments__filter-container">
        <div class="comments__filter">
          <superviz-dropdown
            options=${JSON.stringify(h)}
            position="bottom-left"
            right-offset="100px"
            @click=${this.selectClick}
            @selected=${this.dropdownOptionsHandler}
            @close=${this.selectClick}
            classesPrefix="comments__dropdown"
            parentComponent="comments"
          >
            <div class="comments__filter__toggle-button" slot="dropdown">
              <span class=${(0,r.a)(e)}>${t}</span>
              <div class="comments__filter__icon">
                <superviz-icon name=${this.caret} size="xs"></superviz-icon>
              </div>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};p.styles=d,p.properties={filter:{type:String},caret:{type:String}},p=(0,a.g)([(0,o.f)("superviz-comments-annotation-filter")],p)},9875:(t,e,s)=>{function i(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{a:()=>i}),(0,s(5194).i)()},1604:(t,e,s)=>{s.d(e,{a:()=>i,b:()=>r,c:()=>n}),(0,s(5194).i)();var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e}),n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},4468:(t,e,s)=>{s.d(e,{a:()=>l});var i=s(1604),r=s(5390),n=s(5194);(0,n.i)();var l=(0,i.b)(class extends i.c{constructor(t){var e;if(super(t),t.type!==i.a.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(let t in e)e[t]&&(null==(s=this.nt)||!s.has(t))&&this.st.add(t);return this.render(e)}let n=t.element.classList;for(let t of this.st)t in e||(n.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||null!=(i=this.nt)&&i.has(t)||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return r.b}});(0,n.i)()}}]);