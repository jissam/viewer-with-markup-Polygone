"use strict";(self.webpackChunkviewer=self.webpackChunkviewer||[]).push([[63],{1949:(t,o,e)=>{e.d(o,{a:()=>n,b:()=>a,c:()=>s,d:()=>p,e:()=>c,f:()=>l,g:()=>d,h:()=>m,i:()=>g,j:()=>b,k:()=>x,l:()=>v});var i=e(5390),r=e(5194);(0,r.i)();var n=i.d`
  .superviz-comments {
    --offset-left: 10px;
    --offset-right: 10px;
    --offset-top: 10px;
    --offset-bottom: 10px;

    display: flex;
    flex-direction: column;
    width: 320px;
    position: fixed;
    color: rgb(var(--sv-gray-700));
    background: rgb(var(--sv-white));
    top: 0px;
    bottom: 0;
    box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.1);
    z-index: 100;
    overflow: hidden;
    transition: right 0.3s ease-out;
  }

  .header {
    width: 100%;
  }

  .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .toggle {
    display: flex;
    position: fixed;
    width: 100px;
    color: rgb(var(--sv-gray-700));
    background: rgb(var(--sv-white));
    top: 0;
    right: 0;
    bottom: 0;
  }

  .threads-on-left-side {
    left: var(--offset-left);
    top: var(--offset-top);
    bottom: var(--offset-bottom);
    border-radius: 8px;
  }

  .threads-on-right-side {
    right: var(--offset-right);
    top: var(--offset-top);
    bottom: var(--offset-bottom);
    border-radius: 8px;
  }

  #superviz-comments.threads-on-right-side.hide-at-right {
    right: -330px;
  }

  #superviz-comments.threads-on-left-side.hide-at-left {
    left: -330px;
  }

  .hide-at-right,
  .hide-at-left {
    animation: keep-opacity 0.3s ease-out;
    opacity: 0;
    visibility: hidden;
  }

  @keyframes keep-opacity {
    0%,
    99% {
      visibility: visible;
      opacity: 1;
    }

    100% {
      visibility: hidden;
      opacity: 0;
    }
  }
`;(0,r.i)();var a=i.d`
  .comments__topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(var(--sv-gray-200));
    height: 50px;
  }

  .comments__topbar__title {
    margin: 0 16px;
    color: rgb(var(--sv-gray-600));
  }

  .comments__topbar__close-threads {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.15s;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    margin-right: 8px;
    padding-right: 2px;
  }

  .comments__topbar__close-threads:hover {
    background: rgb(var(--sv-gray-300));
  }
`;(0,r.i)();var s=i.d`
  .reply {
    padding-left: 24px !important;
  }

  .comments__comment-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px;
    gap: 4px;
  }

  .comments__comment-item__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    color: rgb(var(--sv-gray-500));
  }

  .comments__comment-item__actions {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .comments__comment-item__actions superviz-dropdown,
  .comments__comment-item__icons {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .comments__comment-item__metadata {
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
  }

  .comments__comment-item__avatar-container {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgb(var(--sv-gray-300));
    border: 1px solid rgb(var(--sv-gray-500));
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comments__comment-item__avatar-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }

  .comments__comment-item__content {
    width: 100%;
    word-wrap: break-word;
  }

  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .comments__comment-item__content__body {
    color: rgb(var(--sv-gray-700));
    position: relative;
    display: grid;
    grid-template-rows: 0px auto;
  }

  .comments__comment-item__content__body.editing-annotation {
    grid-template-rows: auto 0px;
  }

  .hidden {
    display: none;
  }

  .mentioned {
    display: inline-block;
  }

  .annotation-content {
    transition: opacity 0ms;
    opacity: 1;
    overflow: hidden;
  }

  .editing {
    transition: opacity 400ms;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  }

  .comments__input--editable {
    transform: translateY(0);
    opacity: 1;
    overflow: hidden;
  }

  .hide-edit-input {
    transition: opacity 500ms, transform 0 linear 300ms;
    opacity: 0;
    pointer-events: none;
    width: 100%;
  }
`;(0,r.i)();var p=i.d`
  .comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 288px;
  }

  .hidden {
    display: none;
  }
`;(0,r.i)();var c=i.d`
  .comments__input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(var(--sv-white));
    border-radius: 4px;
    border: 1px solid rgb(var(--sv-gray-300));
    position: relative;
    min-height: 40px;
    box-sizing: border-box;
  }

  .comments__input:focus-within {
    border: 1px solid rgb(var(--sv-gray-500));
  }

  .comments__input__textarea {
    border: 0px;
    text-align: left;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    color: rgb(var(--sv-gray-700));
    font-family: Roboto;
    white-space: pre-wrap;
    word-wrap: break-word;
    resize: none;
    line-height: 1.15rem;
    max-height: 5rem;
    appearance: none;
    height: 40px;
    width: 100%;
    box-sizing: border-box;

    padding-top: 7px;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 11px solid transparent;
    border-left: 11px solid transparent;
  }

  .fixed-width {
    width: 288px;
  }

  .comments__input__textarea:invalid {
    border-top: 15px solid transparent;
  }

  .comments__input__textarea::placeholder {
    color: rgb(var(--sv-gray-400));
    font-size: 14px;
    line-height: 14px;
  }

  .comments__input__options {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
    height: 0;
    transition: 0.25s;
    border-radius: 0 0 4px 4px;
  }

  .active-textarea {
    height: 40px;
    padding: 4px 8px;
  }

  .sv-hr {
    border: none;
    width: 100%;
    opacity: 0;
    transition: 0.25s opacity linear, 0.25s visibility;
    visibility: hidden;
    height: 0;
    position: absolute;
  }

  .comments__input__divisor {
    border-top: 1px solid rgb(var(--sv-gray-300));
    opacity: 1;
    position: relative;
    visibility: visible;
  }

  .comment-actions {
    position: absolute;
    left: 8px;
    bottom: 3px;
    opacity: 0;
    transition: 0.25s opacity linear, 0.25s visibility;
    visibility: hidden;
  }

  .active-textarea > .comment-actions {
    opacity: 1;
    visibility: visible;
  }

  .mention:hover {
    background-color: rgb(var(--sv-gray-200));
  }

  .comments__input__button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 32px;
    height: 32px;
    border: 0px;
  }

  .comments__input__send-button {
    background: rgb(var(--sv-primary));
    color: rgba(var(--sv-white), 1);
  }

  .align-send-btn > superviz-icon {
    cursor: pointer;
  }

  .comments__input__button:disabled {
    background: rgb(var(--sv-gray-200));
    color: rgb(var(--sv-gray-600));
  }

  .comment-input-options {
    display: flex;
    gap: 4px;
    position: absolute;
    right: 8px;
    bottom: 4px;
  }

  .comments__input__textarea:focus,
  .comments__input__textarea.active-textarea {
    border-radius: 4px 4px 0 0;
  }

  .comments__input__textarea:focus::placeholder {
    color: transparent;
  }
`;(0,r.i)();var l=i.d`
  .comments__thread:hover:not(.comments__thread--selected) {
    background-color: rgba(var(--sv-gray-200), 0.3);
  }

  .avatars-comments {
    display: flex;
    position: absolute;
    bottom: 8px;
    padding: 0 8px;
    opacity: 1;
    transition: opacity 0.3s linear;
  }

  .avatars-comments.invisible {
    opacity: 0;
  }

  .avatar-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .avatar {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgb(var(--sv-gray-300));
    border: 1px solid rgb(var(--sv-gray-500));
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }

  .avatar:not(:first-child) {
    margin-left: -6px;
  }

  .comments__thread--selected div:last-child {
    margin-inline: 8px;
  }

  .comments-container {
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }

  .comments-container-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    overflow: hidden;
    transition: grid-template-rows 0.3s linear, opacity 0.3s linear;
  }

  .comments-container-wrapper.show {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  .comments--expand {
    display: flex;
  }

  .comment-avatar--expand {
    display: block;
  }

  .hidden {
    overflow: hidden;
    opacity: 0;
  }

  .comments__thread {
    grid-row: 1 / span 2;
    padding: 8px;
    position: relative;
    cursor: pointer;
    transition: padding-bottom 0.3s linear, opacity 0.3s linear;
  }

  .extra-space-bottom {
    padding-bottom: 35px;
  }

  .comments__thread--selected {
    background-color: rgba(var(--sv-gray-200), 0.5);
    padding-bottom: 16px;
  }

  .hide-input {
    display: none;
  }

  .wrapper {
    margin-inline: 0;
    display: grid;
    grid-template-rows: 0fr;
    opacity: 0;
    width: 100%;
    transition: grid-template-rows 0.3s linear, opacity 0.3s linear;
  }

  .show-wrapper {
    grid-template-rows: 1fr;
    opacity: 1;
  }

  .comments__complete-annotation {
    position: relative;
    width: 100%;
  }

  .comments__hide-complete-annotation {
    min-height: 0;
    opacity: 0;
    animation: hide-annotation 10s linear;
  }

  @keyframes hide-annotation {
    0%,
    95% {
      min-height: 43px;
      opacity: 1;
    }

    100% {
      opacity: 0;
      min-height: 0;
    }
  }

  .comments__resolved-annotation-message {
    position: absolute;
    width: 100%;
    top: 0;
  }
`;(0,r.i)();var d=i.d`
  .comments__annotation-resolved {
    background: rgba(var(--sv-gray-200), 0.5);
    height: 26px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(var(--sv-gray-200));
  }
`;(0,r.i)();var m=i.d`
  .preload {
    animation-duration: 0s !important;
  }

  .comments__annotation-pin,
  .comments__annotation-pin__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    pointer-events: auto;
    z-index: 10;
    transform-origin: bottom left;
  }

  .comments__annotation-pin:hover {
    transform: scale(1.2);
    animation: growing-spring 0.3s linear;
  }

  .comments__annotation-pin:not(:hover) {
    animation: shrinking-spring 0.3s linear;
  }

  .comments__annotation-pin--add {
    transform: scale(1) !important;
    animation: none !important;
  }

  .comments__annotation-pin {
    position: absolute;

    width: 32px;
    height: 32px;

    background-color: rgb(var(--sv-white));
    border-radius: 50%;
    border-bottom-left-radius: 2px;

    border: 2px solid rgb(var(--sv-white));
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.35);
    transition: border-color 0.2s ease-in-out opacity 0.2s ease-in-out;
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .comments__annotation-pin:hover,
  .comments__annotation-pin:focus,
  .comments__annotation-pin--active {
    border-color: rgb(var(--sv-primary));
  }

  .comments__cursor-pointer,
  .comments__cursor-pointer .comments__annotation-pin__avatar {
    pointer-events: none;
  }

  .comments__annotation-pin__avatar {
    width: 100%;
    height: 100%;

    background-color: rgb(var(--sv-gray-400));
    border-radius: 50%;

    color: rgb(var(--sv-white));
  }

  .comments__annotation-pin__avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
  }

  .comments__annotation-pin__avatar--add {
    color: rgb(var(--sv-gray-700));
    background-color: rgb(var(--sv-white));
  }

  .floating-input {
    position: absolute;
    top: -2px;
    opacity: 0;
  }

  .left .floating-input {
    right: auto;
    left: 0;
    transform: translateX(calc(-100% - 7px));
    opacity: 1;
  }

  .right .floating-input {
    left: auto;
    right: 0;
    transform: translateX(calc(100% + 7px));
    opacity: 1;
  }

  .comments__annotation-pin-wrapper {
    transform-origin: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    position: absolute;
  }

  .comments__annotation-pin-wrapper--new {
    animation: bounce 0.5s linear !important;
  }

  .comments__annotation-pin-wrapper--new .comments__annotation-pin__avatar {
    transform-origin: center;
    animation: avatar-bounce 0.5s linear !important;
  }

  @keyframes avatar-bounce {
    0%,
    40% {
      transform: scale(1);
    }

    48% {
      transform: scale(0.8);
    }

    55%,
    92% {
      transform: scale(1);
    }

    96% {
      transform: scale(0.9);
    }

    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce {
    0% {
      transform: scale(1);
    }

    20% {
      transform: scale(1.3);
    }

    40%,
    55% {
      transform: scale(1);
    }

    75% {
      transform: scale(1.15);
    }

    92%,
    100% {
      transform: scale(1);
    }
  }

  @keyframes growing-spring {
    0% {
      transform: scale(1);
    }

    25% {
      transform: scale(1.3);
    }

    50% {
      transform: scale(1.2);
    }

    75% {
      transform: scale(1.25);
    }

    100% {
      transform: scale(1.2);
    }
  }

  @keyframes shrinking-spring {
    0% {
      transform: scale(1.2);
    }

    33% {
      transform: scale(1);
    }

    66% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
`;(0,r.i)();var g=i.d`
  .comments__filter-container {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .comments__filter {
    white-space: nowrap;
    padding: 12px;
    cursor: pointer;
    color: rgb(var(--sv-gray-500));
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }

  .comments__filter__toggle-button {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .comments__filter__icon {
    margin-top: -2px;
  }
`;(0,r.i)();var b=i.d`
  .comments__floating-button {
    position: fixed;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;
    background-color: rgba(var(--sv-white));
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.2);
    color: rgb(var(--sv-gray-600));
    cursor: pointer;
    overflow: hidden;
    padding-left: 10px;
    z-index: 99;
    transition: width 300ms linear, border-radius 300ms linear;
  }

  .comments__floating-button:hover,
  .comments__floating-button.is-active {
    background-color: rgb(var(--sv-gray-400));
    color: rgba(var(--sv-white));
  }

  .comments-floating-button-hovered {
    transition: width 300ms linear 300ms, border-radius 300ms linear 300ms;
  }

  .comments__floating-button__text {
    text-align: left;
    overflow: hidden;
    position: relative;
    margin: 0;
    line-height: 1;
    right: 0px;
  }

  .not-hovered {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
  }

  .hide-button {
    display: none !important;
  }

  .is-inactive:hover {
    width: 110px;
    border-radius: 30px;
  }

  .is-active:hover {
    width: 92px;
    border-radius: 30px;
    animation: decrease-width 600ms linear;
  }

  .textInactive.cancel {
    position: absolute;
    bottom: -30px;
    animation: drop-cancel-text 600ms linear;
    right: auto;
  }

  .textInactive.comment {
    position: absolute;
    top: 0;
    animation: drop-comment-text 600ms linear;
  }

  .textActive.comment {
    position: absolute;
    top: -30px;
    animation: rise-comment-text 600ms linear;
    right: auto;
  }

  .textActive.cancel {
    position: absolute;
    bottom: 0;
    animation: rise-cancel-text 600ms linear;
  }

  .comments__floating-button .comments__floating-button-text-box {
    width: 0;
  }

  .comments__floating-button.is-inactive:hover .comments__floating-button-text-box {
    width: 61.45px;
  }

  .comments__floating-button.is-active:hover .comments__floating-button-text-box {
    width: 43.0833px;
  }

  .comments__floating-button-text-box {
    position: relative;
    height: 14px;
    overflow-x: clip;
    transition: width 300ms linear;
  }

  .comments__floating-button__icon {
    position: relative;
  }

  .cross {
    position: absolute;
    top: 9px;
    left: 5.3px;
    transform: translateY(-50%);
    transform-origin: center;
    transition: transform 300ms linear 300ms;
  }

  rect {
    fill: rgba(var(--sv-gray-600));
  }

  .comments__floating-button:hover rect,
  .is-active rect {
    fill: rgba(var(--sv-white));
  }

  .cross-bar-1 {
    transform-origin: center;
    transform: rotate(0deg);
  }

  .cross-bar-2 {
    transform-origin: center;
    transform: rotate(90deg);
  }

  .is-active .cross {
    transform: translateY(-50%) rotate(45deg);
  }

  @keyframes rise-cancel-text {
    0%,
    50% {
      opacity: 0;
      bottom: -35px;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 1;
      bottom: 0px;
    }
  }

  @keyframes rise-comment-text {
    0% {
      opacity: 1;
      top: 0px;
    }

    35% {
      opacity: 0;
    }

    50%,
    100% {
      opacity: 0;
      top: -35px;
    }
  }

  @keyframes drop-cancel-text {
    0% {
      opacity: 1;
      bottom: 0px;
    }

    35% {
      opacity: 0;
    }

    50%,
    100% {
      opacity: 0;
      bottom: -30px;
    }
  }

  @keyframes drop-comment-text {
    0%,
    50% {
      opacity: 0;
      top: -30px;
    }

    75% {
      opacity: 0;
    }

    100% {
      opacity: 1;
      top: 0px;
    }
  }
`;(0,r.i)();var x=i.d`
.footer {
  bottom: 5px;
  position: absolute;
  right: 5px;
  font-family: Roboto,sans-serif;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: normal;
}

.link {
  text-decoration: none;
  color: rgb(var(--sv-gray-500));
}

.powered-by {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 140px;
  &--vertical {
    justify-content: flex-end;
  }
  &--horizontal {
    justify-content: center;
  }
}
`;(0,r.i)();var v=i.d`
  #mention-list {
    position: fixed;
    z-index: 1;
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: white;
    display: none;
    width: 216px;
    text-align: -webkit-center;
    border-radius: 2px;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.3);
    padding-top: 4px;
    padding-bottom: 4px;
    /* Stiling scroll WebKit (Firefox) */
    scrollbar-width: 6px; /* Firefox */
    scrollbar-color: #888; /* Firefox */
    /* Style scroll WebKit (Chrome, Safari, Edge) */
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #888;
    }
  }

  .mention-item {
    cursor: pointer;
    align-items: center;
    display: flex;
    height: 48px;
    width: 208px;
    margin-left: 4px;
    margin-right: 4px;
  }

  .mention-item:hover {
    background: rgb(var(--sv-gray-200));
  }

  .avatar {
    width: 32px;
    height: 32px;
    object-fit: contain;
    border-radius: 32%;
    margin-right: 14px;
    margin-left: 12px;
  }

  .default-avatar {
    width: 32px;
    height: 32px;
    margin-right: 14px;
    margin-left: 12px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgb(var(--sv-gray-300));
    border: 1px solid rgb(var(--sv-gray-500));
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-type {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: rgb(var(--sv-gray-600));
  }
`;(0,r.i)()},3299:(t,o,e)=>{e.d(o,{a:()=>l});var i=e(5390),r=e(5022),n=e(5194);(0,n.i)(),(0,n.i)(),(0,n.i)();var a=i.d`
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
`;(0,n.i)();var s=i.d`
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
`;(0,n.i)();var p=i.d`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;(0,n.i)();var c=i.d`
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
`,l=t=>{var o;class e extends t{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=r.i.bind(this)}connectedCallback(){setTimeout((()=>{var t,o;let e=document.getElementById("superviz-style"),i=this.createCustomColors(),r=document.createElement("style");r.innerHTML=(null==e?void 0:e.innerHTML)||"",null==(t=this.shadowRoot)||t.appendChild(r),i&&(null==(o=this.shadowRoot)||o.appendChild(i))})),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach((t=>t(this)))}createCustomColors(){if(!r.b.get("colors"))return;let t=document.createElement("style"),o=Object.entries(r.b.get("colors")).map((([t,o])=>`--${t}: ${o} !important;`)).join(" ");return t.innerHTML=`\n      * {\n        ${o}\n      }\n    `,t}emitEvent(t,o,e={composed:!0,bubbles:!0}){let i=new CustomEvent(t,(0,n.b)({detail:o},e));this.dispatchEvent(i)}}return e.styles=[a,s,p,c,null!=(o=t.styles)?o:[]],e}}}]);