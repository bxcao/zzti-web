import{d as w,p as q,r as f,q as I,a as s,b as i,c as p,f as t,h as a,F as v,e as h,s as Q,u as N,k as V,t as m,v as D,x as E,y as F,_ as M}from"./index-9026e15a.js";const $=["onClick"],j=w({__name:"QuestionsPage",setup(z){const g=q(),c=f([]),n=f([]),x=e=>{e.keyPath&&(n.value=D(e.keyPath))};I(()=>{const e=E(n.value);if(!e){c.value=[];return}c.value=e});const y=e=>{n.value=e},k=e=>{const l=[];for(var o=0,_=n.value.length;o<_&&!(o>e);o++)l.push(n.value[o]);n.value=l};return(e,l)=>{const o=s("a-breadcrumb-item"),_=s("a-breadcrumb"),b=s("a-menu"),d=s("a-col"),P=s("a-list-item"),C=s("a-list"),B=s("a-row");return i(),p(v,null,[t(_,null,{default:a(()=>[t(o,null,{default:a(()=>[h("a",{onClick:l[0]||(l[0]=u=>y([]))},"全部题目")]),_:1}),(i(!0),p(v,null,Q(n.value,(u,r)=>(i(),F(o,null,{default:a(()=>[h("a",{onClick:K=>k(r)},m(u),9,$)]),_:2},1024))),256))]),_:1}),t(B,{type:"flex",align:"start"},{default:a(()=>[t(d,{flex:"100px",style:{"margin-right":"16px"}},{default:a(()=>[t(b,{style:{width:"250px"},mode:"inline",items:N(g),onClick:x},null,8,["items"])]),_:1}),t(d,{flex:"auto"},{default:a(()=>[t(C,{"item-layout":"horizontal","data-source":c.value},{renderItem:a(({item:u,index:r})=>[t(P,null,{default:a(()=>[V(m(r+1)+"、"+m(u),1)]),_:2},1024)]),_:1},8,["data-source"])]),_:1})]),_:1})],64)}}});const O=M(j,[["__scopeId","data-v-583e6f36"]]);export{O as default};
