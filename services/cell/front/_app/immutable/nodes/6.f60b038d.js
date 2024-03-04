import{s as re}from"../chunks/scheduler.3f07874a.js";import{S as le,i as ie,g as l,s as V,r as X,h as i,j as p,f as o,c as b,x as Y,u as Z,k as e,a as A,y as s,v as ee,B as oe,C as ce,d as te,t as se,w as ae,m as de,n as ue,o as pe}from"../chunks/index.bce4ad42.js";import{g as fe,i as me}from"../chunks/navigation.cb5fd4ff.js";import{P as he,L as ve}from"../chunks/LockClosed.62f18369.js";import{P as _e}from"../chunks/public.aa8ed6af.js";import{u as ge}from"../chunks/storage.8c515f7d.js";function ne(_){let a,u,t;return{c(){a=l("div"),u=l("div"),t=de(_[0]),this.h()},l(r){a=i(r,"DIV",{class:!0});var f=p(a);u=i(f,"DIV",{class:!0});var v=p(u);t=ue(v,_[0]),v.forEach(o),f.forEach(o),this.h()},h(){e(u,"class","notification is-danger"),e(a,"class","container")},m(r,f){A(r,a,f),s(a,u),s(u,t)},p(r,f){f&1&&pe(t,r[0])},d(r){r&&o(a)}}}function $e(_){let a,u,t,r,f='<div class="column is-half has-text-centered"><p class="is-size-4">Let&#39;s signup.</p></div>',v,g,$,c,m,h,w,M,D,I,H,C,y,P,j,L,S,B,T,J='<p class="control"><input type="submit" value="SignUp" class="button is-success"/></p>',k,F,R,d=_[0]&&ne(_);return I=new he({}),S=new ve({}),{c(){a=l("section"),d&&d.c(),u=V(),t=l("section"),r=l("div"),r.innerHTML=f,v=V(),g=l("div"),$=l("div"),c=l("form"),m=l("div"),h=l("p"),w=l("input"),M=V(),D=l("span"),X(I.$$.fragment),H=V(),C=l("div"),y=l("p"),P=l("input"),j=V(),L=l("span"),X(S.$$.fragment),B=V(),T=l("div"),T.innerHTML=J,this.h()},l(n){a=i(n,"SECTION",{class:!0});var E=p(a);d&&d.l(E),E.forEach(o),u=b(n),t=i(n,"SECTION",{class:!0});var x=p(t);r=i(x,"DIV",{class:!0,"data-svelte-h":!0}),Y(r)!=="svelte-13w7eoo"&&(r.innerHTML=f),v=b(x),g=i(x,"DIV",{class:!0});var q=p(g);$=i(q,"DIV",{class:!0});var z=p($);c=i(z,"FORM",{});var N=p(c);m=i(N,"DIV",{class:!0});var G=p(m);h=i(G,"P",{class:!0});var O=p(h);w=i(O,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),M=b(O),D=i(O,"SPAN",{class:!0});var K=p(D);Z(I.$$.fragment,K),K.forEach(o),O.forEach(o),G.forEach(o),H=b(N),C=i(N,"DIV",{class:!0});var Q=p(C);y=i(Q,"P",{class:!0});var U=p(y);P=i(U,"INPUT",{class:!0,name:!0,type:!0,placeholder:!0}),j=b(U),L=i(U,"SPAN",{class:!0});var W=p(L);Z(S.$$.fragment,W),W.forEach(o),U.forEach(o),Q.forEach(o),B=b(N),T=i(N,"DIV",{class:!0,"data-svelte-h":!0}),Y(T)!=="svelte-1w4lgya"&&(T.innerHTML=J),N.forEach(o),z.forEach(o),q.forEach(o),x.forEach(o),this.h()},h(){e(a,"class","section"),e(r,"class","columns is-centered"),e(w,"class","input"),e(w,"name","username"),e(w,"type","text"),e(w,"placeholder","Username"),e(D,"class","icon is-small is-left"),e(h,"class","control has-icons-left has-icons-right"),e(m,"class","field"),e(P,"class","input"),e(P,"name","password"),e(P,"type","password"),e(P,"placeholder","Password"),e(L,"class","icon is-small is-left"),e(y,"class","control has-icons-left"),e(C,"class","field"),e(T,"class","field"),e($,"class","column is-half has-text-centered"),e(g,"class","columns is-centered"),e(t,"class","section")},m(n,E){A(n,a,E),d&&d.m(a,null),A(n,u,E),A(n,t,E),s(t,r),s(t,v),s(t,g),s(g,$),s($,c),s(c,m),s(m,h),s(h,w),s(h,M),s(h,D),ee(I,D,null),s(c,H),s(c,C),s(C,y),s(y,P),s(y,j),s(y,L),ee(S,L,null),s(c,B),s(c,T),k=!0,F||(R=oe(c,"submit",ce(_[1])),F=!0)},p(n,[E]){n[0]?d?d.p(n,E):(d=ne(n),d.c(),d.m(a,null)):d&&(d.d(1),d=null)},i(n){k||(te(I.$$.fragment,n),te(S.$$.fragment,n),k=!0)},o(n){se(I.$$.fragment,n),se(S.$$.fragment,n),k=!1},d(n){n&&(o(a),o(u),o(t)),d&&d.d(),ae(I),ae(S),F=!1,R()}}}function we(_,a,u){let t;async function r(f){const v=new FormData(f.currentTarget);let g=v.get("username"),$=v.get("password");try{const c=await fetch(`${_e}/signup`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({login:g,password:$})});if(c.ok){let m=await c.json(),h={uid:m.data.uid,username:m.data.username};ge.update(w=>h),await fe("/",{invalidateAll:!0});return}u(0,t=await c.text());try{u(0,t=JSON.parse(t).data.error)}catch{}}catch(c){u(0,t=c.toString())}await me()}return[t,r]}class De extends le{constructor(a){super(),ie(this,a,we,$e,re,{})}}export{De as component};
