var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}function l(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let f;function d(t){f=t}const p=[],h=[],m=[],$=[],g=Promise.resolve();let b=!1;function y(t){m.push(t)}let _=!1;const v=new Set;function x(){if(!_){_=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];d(n),k(n.$$)}for(d(null),p.length=0;h.length;)h.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];v.has(n)||(v.add(n),n())}m.length=0}while(p.length);for(;$.length;)$.pop()();b=!1,_=!1,v.clear()}}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const w=new Set;function E(t,n){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,g.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(c,i,u,a,l,p,h=[-1]){const m=f;d(c);const $=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:h,skip_bound:!1};let g=!1;if($.ctx=u?u(c,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),g&&E(c,t)),n})):[],$.update(),g=!0,o($.before_update),$.fragment=!!a&&a($.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();i.intro&&((b=c.$$.fragment)&&b.i&&(w.delete(b),b.i(_))),function(t,e,c,i){const{fragment:s,on_mount:u,on_destroy:a,after_update:l}=t.$$;s&&s.m(e,c),i||y((()=>{const e=u.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(y)}(c,i.target,i.anchor,i.customElement),x()}var b,_;d(m)}function T(n){let e,o,r;return{c(){e=u("header"),e.innerHTML='<div class="topbar"><div class="container"><div class="logo">☎️</div></div></div>',o=a(),r=u("main"),r.innerHTML='<div class="hero is-primary"><div class="container"><h1>Tauri App Demo</h1></div></div>',l(e,"class","header"),l(r,"class","main")},m(t,n){i(t,e,n),i(t,o,n),i(t,r,n)},p:t,i:t,o:t,d(t){t&&s(e),t&&s(o),t&&s(r)}}}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,null,T,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map