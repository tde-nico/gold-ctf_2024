function x(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function S(){return Object.create(null)}function j(t){t.forEach(E)}function A(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function F(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function P(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t,n,e){t.$$.on_destroy.push(q(n,e))}function C(t,n,e,r){if(t){const c=m(t,n,e,r);return t[0](c)}}function m(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function D(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],_=Math.max(n.dirty.length,c.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|c[s];return l}return n.dirty|c}return n.dirty}function G(t,n,e,r,c,l){if(c){const _=m(n,e,r,l);t.p(_,c)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function I(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function J(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}let f;function h(t){f=t}function y(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){y().$$.on_mount.push(t)}function L(t){y().$$.after_update.push(t)}function N(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const a=[],b=[];let u=[];const g=[],k=Promise.resolve();let p=!1;function v(){p||(p=!0,k.then(z))}function Q(){return v(),k}function O(t){u.push(t)}const d=new Set;let o=0;function z(){if(o!==0)return;const t=f;do{try{for(;o<a.length;){const n=a[o];o++,h(n),M(n.$$)}}catch(n){throw a.length=0,o=0,n}for(h(null),a.length=0,o=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(a.length);for(;g.length;)g.pop()();p=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function R(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{a as A,v as B,L as a,b,C as c,D as d,U as e,F as f,H as g,w as h,J as i,I as j,N as k,S as l,z as m,x as n,K as o,A as p,P as q,j as r,B as s,Q as t,G as u,O as v,R as w,f as x,h as y,E as z};
