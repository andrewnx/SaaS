import{_ as w,a as x}from"./Bw1F2yjo.js";import B from"./EshwSo5i.js";import{_ as P,a as S}from"./DnIWbb57.js";import{d as U,x as b,ah as d,ai as E,aj as H,G as N,ab as t,c as r,N as p,a1 as R,w as c,g as l,al as m,aE as T,ap as A,h as i,e as D,s as f,an as G}from"./bwdbeQnN.js";import"./D8snbTiw.js";import"./Dnd51l0P.js";const M={key:1},K=U({__name:"[...slug]",async setup(V){let a,o;const s=b(),{data:e}=([a,o]=d(()=>m(s.path,()=>f(s.path).findOne(),"$BiR4XG95H5")),a=await a,o(),a);if(!e.value)throw E({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:u}=([a,o]=d(()=>m(`${s.path}-surround`,()=>f("/docs").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(G(s.path)),{default:()=>[]})),a=await a,o(),a);H({title:e.value.title,ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description});const h=N(()=>T(e.value));return(j,q)=>{const g=w,k=B,y=P,v=x,C=S,$=A;return t(e)?(r(),p($,{key:0},R({default:c(()=>[i(g,{title:t(e).title,description:t(e).description,links:t(e).links,headline:t(h)},null,8,["title","description","links","headline"]),i(v,{prose:""},{default:c(()=>{var n;return[t(e).body?(r(),p(k,{key:0,value:t(e)},null,8,["value"])):l("",!0),(n=t(u))!=null&&n.length?(r(),D("hr",M)):l("",!0),i(y,{surround:t(u)},null,8,["surround"])]}),_:1})]),_:2},[t(e).toc!==!1?{name:"right",fn:c(()=>{var n,_;return[i(C,{links:(_=(n=t(e).body)==null?void 0:n.toc)==null?void 0:_.links},null,8,["links"])]}),key:"0"}:void 0]),1024)):l("",!0)}}});export{K as default};
