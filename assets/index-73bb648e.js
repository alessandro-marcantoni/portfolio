var z=Object.defineProperty;var D=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>(D(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function l(){}function C(e){return e()}function I(){return Object.create(null)}function m(e){e.forEach(C)}function M(e){return typeof e=="function"}function b(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function G(e){return Object.keys(e).length===0}function H(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function T(e){return document.createElement(e)}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function J(e){return Array.from(e.childNodes)}let x;function p(e){x=e}const f=[],q=[];let d=[];const B=[],Q=Promise.resolve();let v=!1;function W(){v||(v=!0,Q.then(K))}function y(e){d.push(e)}const $=new Set;let u=0;function K(){if(u!==0)return;const e=x;do{try{for(;u<f.length;){const t=f[u];u++,p(t),X(t.$$)}}catch(t){throw f.length=0,u=0,t}for(p(null),f.length=0,u=0;q.length;)q.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];$.has(n)||($.add(n),n())}d.length=0}while(f.length);for(;B.length;)B.pop()();v=!1,$.clear(),p(e)}function X(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}function Y(e){const t=[],n=[];d.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),d=t}const h=new Set;let Z;function O(e,t){e&&e.i&&(h.delete(e),e.i(t))}function R(e,t,n,r){if(e&&e.o){if(h.has(e))return;h.add(e),Z.c.push(()=>{h.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function U(e){e&&e.c()}function E(e,t,n){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,n),y(()=>{const s=e.$$.on_mount.map(C).filter(M);e.$$.on_destroy?e.$$.on_destroy.push(...s):m(s),e.$$.on_mount=[]}),a.forEach(y)}function N(e,t){const n=e.$$;n.fragment!==null&&(Y(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(f.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function S(e,t,n,r,a,s,c=null,V=[-1]){const g=x;p(e);const o=e.$$={fragment:null,ctx:[],props:s,update:l,not_equal:a,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:I(),dirty:V,skip_bound:!1,root:t.target||g.$$.root};c&&c(o.root);let P=!1;if(o.ctx=n?n(e,t.props||{},(i,A,...k)=>{const j=k.length?k[0]:A;return o.ctx&&a(o.ctx[i],o.ctx[i]=j)&&(!o.skip_bound&&o.bound[i]&&o.bound[i](j),P&&ee(e,i)),A}):[],o.update(),P=!0,m(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const i=J(t.target);o.fragment&&o.fragment.l(i),i.forEach(w)}else o.fragment&&o.fragment.c();t.intro&&O(e.$$.fragment),E(e,t.target,t.anchor),K()}p(g)}class L{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){N(this,1),this.$destroy=l}$on(t,n){if(!M(n))return l;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}$set(t){this.$$set&&!G(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const te="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(te);function ne(e){let t;return{c(){t=T("nav"),t.innerHTML='<div class="container-fluid"><a class="navbar-brand svelte-o7qy6p" href="#!"><img class="rounded-circle svelte-o7qy6p" alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"/></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navbarScroll"><ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li> <li class="nav-item"><a class="nav-link" href="#!">Link</a></li></ul></div></div>',F(t,"class","navbar navbar-dark navbar-expand-lg bg-dark shadow sticky-top")},m(n,r){H(n,t,r)},p:l,i:l,o:l,d(n){n&&w(t)}}}class re extends L{constructor(t){super(),S(this,t,null,ne,b,{})}}function ae(e){let t,n;return t=new re({}),{c(){U(t.$$.fragment)},m(r,a){E(t,r,a),n=!0},p:l,i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){R(t.$$.fragment,r),n=!1},d(r){N(t,r)}}}class se extends L{constructor(t){super(),S(this,t,null,ae,b,{})}}function oe(e){let t,n,r;return n=new se({}),{c(){t=T("main"),U(n.$$.fragment),F(t,"class","bg-dark vh-100")},m(a,s){H(a,t,s),E(n,t,null),r=!0},p:l,i(a){r||(O(n.$$.fragment,a),r=!0)},o(a){R(n.$$.fragment,a),r=!1},d(a){a&&w(t),N(n)}}}class ie extends L{constructor(t){super(),S(this,t,null,oe,b,{})}}new ie({target:document.getElementById("app")});
