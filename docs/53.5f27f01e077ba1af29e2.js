(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{BHpw:function(t,i,e){"use strict";e.r(i),e.d(i,"ion_menu",function(){return l}),e.d(i,"ion_menu_button",function(){return v}),e.d(i,"ion_menu_controller",function(){return f}),e.d(i,"ion_menu_toggle",function(){return w});var n=e("c1op"),s=e("AfW+"),o=e("aiEM"),a=(e("+4pY"),e("mUkt")),r=e("930v"),d=e("Dl6n"),h=e("qaSm");const l=class{constructor(t){Object(n.l)(this,t),this.lastOnEnd=0,this.blocker=a.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(n.d)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(n.e)(this,"ionWillOpen",7),this.ionWillClose=Object(n.e)(this,"ionWillClose",7),this.ionDidOpen=Object(n.e)(this,"ionDidOpen",7),this.ionDidClose=Object(n.e)(this,"ionDidClose",7),this.ionMenuChange=Object(n.e)(this,"ionMenuChange",7)}typeChanged(t,i){const e=this.contentEl;e&&(void 0!==i&&e.classList.remove(`menu-content-${i}`),e.classList.add(`menu-content-${t}`),e.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=Object(o.h)(this.side)}swipeGestureChanged(){this.updateState()}async connectedCallback(){void 0===this.type&&(this.type=s.b.get("menuType","ios"===this.mode?"reveal":"overlay"));const t=this.el.parentNode;void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="my-content"></ion-menu>\n  <div id="my-content">...</div>\n');const i=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");i&&i.tagName?(this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),r.a._register(this),this.gesture=(await Promise.resolve().then(e.bind(null,"mUkt"))).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}async componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}disconnectedCallback(){this.blocker.destroy(),r.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,i=!0){return r.a._setOpen(this,t,i)}async _setOpen(t,i=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,i),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await r.a._createAnimation(this.type,this),s.b.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"))}async startAnimation(t,i){const e=!t,n=this.animation.direction(e?"reverse":"normal").easing(e?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)");i?await n.playAsync():n.playSync()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!r.a._getOpenSync()&&u(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):Object(o.b)(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void Object(o.b)(!1,"isAnimating has to be true");const i=c(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(i/this.width)}onEnd(t){if(!this.isAnimating||!this.animation)return void Object(o.b)(!1,"isAnimating has to be true");const i=this._isOpen,e=this.isEndSide,n=c(t.deltaX,i,e),s=this.width,a=n/s,r=t.velocityX,d=s/2,l=r>=0&&(r>.2||t.deltaX>d),u=r<=0&&(r<-.2||t.deltaX<-d),m=i?e?l:u:e?u:l;let p=!i&&m;i&&!m&&(p=!0),this.lastOnEnd=t.timeStamp;let b=m?.001:-.001;const g=a<=0?.01:a;b+=Object(h.b)(new h.a(0,0),new h.a(.4,0),new h.a(.6,1),new h.a(1,1),Object(o.c)(0,g,1)),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(p),{oneTimeCallback:!0}).progressEnd(m?1:0,b,300)}beforeAnimation(t){Object(o.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(m),this.backdropEl&&this.backdropEl.classList.add(p),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){Object(o.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(b),this.ionDidOpen.emit()):(this.el.classList.remove(m),this.contentEl&&this.contentEl.classList.remove(b),this.backdropEl&&this.backdropEl.classList.remove(p),this.animation&&this.animation.stop(),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||r.a._setActiveMenu(this),Object(o.b)(!this.isAnimating,"can not be animating")}forceClosing(){Object(o.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").playSync(),this.afterAnimation(!1)}render(){const{isEndSide:t,type:i,disabled:e,mode:s,isPaneVisible:o}=this;return Object(n.i)(n.a,{role:"navigation",class:{[s]:!0,[`menu-type-${i}`]:!0,"menu-enabled":!e,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":o}},Object(n.i)("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},Object(n.i)("slot",null)),Object(n.i)("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}get el(){return Object(n.f)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}static get style(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"}},c=(t,i,e)=>Math.max(0,i!==e?-t:t),u=(t,i,e,n)=>e?i>=t.innerWidth-n:i<=n,m="show-menu",p="show-backdrop",b="menu-content-open",g=async t=>{const i=await r.a.get(t);return!(!i||!(await i.isActive()))},v=class{constructor(t){Object(n.l)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=async()=>r.a.toggle(this.menu)}componentDidLoad(){this.visibilityChanged()}async visibilityChanged(){this.visible=await g(this.menu)}render(){const{color:t,disabled:i}=this,e=Object(n.d)(this),o=s.b.get("menuIcon","menu"),a=this.autoHide&&!this.visible,r={type:this.type};return Object(n.i)(n.a,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":a?"true":null,class:Object.assign(Object.assign({[e]:!0},Object(d.a)(t)),{button:!0,"menu-button-hidden":a,"menu-button-disabled":i,"ion-activatable":!0,"ion-focusable":!0})},Object(n.i)("button",Object.assign({},r,{disabled:i,class:"button-native"}),Object(n.i)("slot",null,Object(n.i)("ion-icon",{icon:o,mode:e,lazy:!1})),"md"===e&&Object(n.i)("ion-ripple-effect",{type:"unbounded"})))}static get style(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}"}},f=class{constructor(t){Object(n.l)(this,t)}open(t){return r.a.open(t)}close(t){return r.a.close(t)}toggle(t){return r.a.toggle(t)}enable(t,i){return r.a.enable(t,i)}swipeGesture(t,i){return r.a.swipeGesture(t,i)}isOpen(t){return r.a.isOpen(t)}isEnabled(t){return r.a.isEnabled(t)}get(t){return r.a.get(t)}getOpen(){return r.a.getOpen()}getMenus(){return r.a.getMenus()}isAnimating(){return r.a.isAnimating()}async registerAnimation(t,i){return r.a.registerAnimation(t,i)}},w=class{constructor(t){Object(n.l)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>r.a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await g(this.menu)}render(){const t=Object(n.d)(this),i=this.autoHide&&!this.visible;return Object(n.i)(n.a,{onClick:this.onClick,"aria-hidden":i?"true":null,class:{[t]:!0,"menu-toggle-hidden":i}},Object(n.i)("slot",null))}static get style(){return":host(.menu-toggle-hidden){display:none}"}}}}]);