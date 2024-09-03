import{r as J,D as be,E as H,G as _,l as xe,d as me,H as ye,I as je,J as Ce,K as Ee,L as W,c as A,e as N,n as I,t as Y,g as K,f as V,F as ke,M as ue,N as B,w as T,O as Q,P as X,Q as it,k as at,R as Fe,S as pe,U as Ke,V as Le,W as he,o as _e,X as Ve,Y as He,Z as ot,$ as lt,h as ce,a0 as ct,a1 as De,a2 as ut,a3 as ht,a4 as dt,a5 as ft,a6 as pt,z as gt,a as mt,a7 as yt,a8 as vt,a9 as bt,aa as kt,ab as z,ac as wt,ad as St,ae as It,af as Mt}from"./bwdbeQnN.js";import{r as $t,l as At,i as xt,u as Ct}from"./CfWPkJlM.js";import{_ as Ue,u as ze}from"./BcN1o7xj.js";import"./CC-RS6Nu.js";const Et={wrapper:"flex flex-col flex-1 min-h-0 divide-y divide-gray-100 dark:divide-gray-800",container:"relative flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800 scroll-py-2",input:{wrapper:"relative flex items-center",base:"w-full placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none",padding:"px-4",height:"h-12",size:"sm:text-sm",icon:{base:"pointer-events-none absolute start-4 text-gray-400 dark:text-gray-500",loading:"animate-spin",size:"h-5 w-5",padding:"ps-11"},closeButton:{base:"absolute end-4",padding:"pe-10"}},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",queryLabel:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},group:{wrapper:"p-2",label:"px-2.5 my-2 text-xs font-semibold text-gray-900 dark:text-white",container:"text-sm text-gray-700 dark:text-gray-200",command:{base:"flex justify-between select-none items-center rounded-md px-2.5 py-1.5 gap-2 relative",active:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactive:"",label:"flex items-center gap-1.5 min-w-0",prefix:"text-gray-400 dark:text-gray-500",suffix:"text-gray-400 dark:text-gray-500",container:"flex items-center gap-1.5 min-w-0",icon:{base:"flex-shrink-0 w-5 h-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"},disabled:"opacity-50",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5"},active:"flex-shrink-0 text-gray-500 dark:text-gray-400",inactive:"flex-shrink-0 text-gray-500 dark:text-gray-400"},default:{icon:"i-heroicons-magnifying-glass-20-solid",loadingIcon:"i-heroicons-arrow-path-20-solid",emptyState:{icon:"i-heroicons-magnifying-glass-20-solid",label:"We couldn't find any items.",queryLabel:"We couldn't find any items with that term. Please try again."},closeButton:null,selectedIcon:"i-heroicons-check-20-solid"}},Lt={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function G(e){return Array.isArray?Array.isArray(e):qe(e)==="[object Array]"}const Ot=1/0;function _t(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Ot?"-0":t}function Bt(e){return e==null?"":_t(e)}function D(e){return typeof e=="string"}function We(e){return typeof e=="number"}function Rt(e){return e===!0||e===!1||Pt(e)&&qe(e)=="[object Boolean]"}function Ge(e){return typeof e=="object"}function Pt(e){return Ge(e)&&e!==null}function R(e){return e!=null}function ve(e){return!e.trim().length}function qe(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Nt="Incorrect 'index' type",Tt=e=>`Invalid value for key ${e}`,jt=e=>`Pattern length exceeds max of ${e}.`,Ft=e=>`Missing ${e} property in key`,Kt=e=>`Property 'weight' in key '${e}' must be a positive integer`,Be=Object.prototype.hasOwnProperty;class Vt{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=Ye(r);n+=i.weight,this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ye(e){let t=null,n=null,r=null,i=1,s=null;if(D(e)||G(e))r=e,t=Re(e),n=we(e);else{if(!Be.call(e,"name"))throw new Error(Ft("name"));const a=e.name;if(r=a,Be.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(Kt(a));t=Re(a),n=we(a),s=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:s}}function Re(e){return G(e)?e:e.split(".")}function we(e){return G(e)?e.join("."):e}function Ht(e,t){let n=[],r=!1;const i=(s,a,l)=>{if(R(s))if(!a[l])n.push(s);else{let u=a[l];const c=s[u];if(!R(c))return;if(l===a.length-1&&(D(c)||We(c)||Rt(c)))n.push(Bt(c));else if(G(c)){r=!0;for(let o=0,d=c.length;o<d;o+=1)i(c[o],a,l+1)}else a.length&&i(c,a,l+1)}};return i(e,D(t)?t.split("."):t,0),r?n:n[0]}const Dt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ut={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},zt={location:0,threshold:.6,distance:100},Wt={useExtendedSearch:!1,getFn:Ht,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var m={...Ut,...Dt,...zt,...Wt};const Gt=/[^ ]+/g;function qt(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const s=i.match(Gt).length;if(n.has(s))return n.get(s);const a=1/Math.pow(s,.5*e),l=parseFloat(Math.round(a*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class Oe{constructor({getFn:t=m.getFn,fieldNormWeight:n=m.fieldNormWeight}={}){this.norm=qt(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,D(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();D(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!R(t)||ve(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(R(a)){if(G(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:c,value:o}=u.pop();if(R(o))if(D(o)&&!ve(o)){let d={v:o,i:c,n:this.norm.get(o)};l.push(d)}else G(o)&&o.forEach((d,h)=>{u.push({nestedArrIndex:h,value:d})})}r.$[s]=l}else if(D(a)&&!ve(a)){let l={v:a,n:this.norm.get(a)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Je(e,t,{getFn:n=m.getFn,fieldNormWeight:r=m.fieldNormWeight}={}){const i=new Oe({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(Ye)),i.setSources(t),i.create(),i}function Yt(e,{getFn:t=m.getFn,fieldNormWeight:n=m.fieldNormWeight}={}){const{keys:r,records:i}=e,s=new Oe({getFn:t,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function fe(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=m.distance,ignoreLocation:s=m.ignoreLocation}={}){const a=t/e.length;if(s)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function Jt(e=[],t=m.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let a=e.length;s<a;s+=1){let l=e[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[s-1]&&s-r>=t&&n.push([r,s-1]),n}const se=32;function Qt(e,t,n,{location:r=m.location,distance:i=m.distance,threshold:s=m.threshold,findAllMatches:a=m.findAllMatches,minMatchCharLength:l=m.minMatchCharLength,includeMatches:u=m.includeMatches,ignoreLocation:c=m.ignoreLocation}={}){if(t.length>se)throw new Error(jt(se));const o=t.length,d=e.length,h=Math.max(0,Math.min(r,d));let g=s,b=h;const w=l>1||u,L=w?Array(d):[];let O;for(;(O=e.indexOf(t,b))>-1;){let y=fe(t,{currentLocation:O,expectedLocation:h,distance:i,ignoreLocation:c});if(g=Math.min(y,g),b=O+o,w){let S=0;for(;S<o;)L[O+S]=1,S+=1}}b=-1;let E=[],P=1,U=o+d;const ae=1<<o-1;for(let y=0;y<o;y+=1){let S=0,x=U;for(;S<x;)fe(t,{errors:y,currentLocation:h+x,expectedLocation:h,distance:i,ignoreLocation:c})<=g?S=x:U=x,x=Math.floor((U-S)/2+S);U=x;let q=Math.max(1,h-x+1),M=a?d:Math.min(h+x,d)+o,C=Array(M+2);C[M+1]=(1<<y)-1;for(let f=M;f>=q;f-=1){let k=f-1,v=n[e.charAt(k)];if(w&&(L[k]=+!!v),C[f]=(C[f+1]<<1|1)&v,y&&(C[f]|=(E[f+1]|E[f])<<1|1|E[f+1]),C[f]&ae&&(P=fe(t,{errors:y,currentLocation:k,expectedLocation:h,distance:i,ignoreLocation:c}),P<=g)){if(g=P,b=k,b<=h)break;q=Math.max(1,2*h-b)}}if(fe(t,{errors:y+1,currentLocation:h,expectedLocation:h,distance:i,ignoreLocation:c})>g)break;E=C}const ee={isMatch:b>=0,score:Math.max(.001,P)};if(w){const y=Jt(L,l);y.length?u&&(ee.indices=y):ee.isMatch=!1}return ee}function Xt(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}class Qe{constructor(t,{location:n=m.location,threshold:r=m.threshold,distance:i=m.distance,includeMatches:s=m.includeMatches,findAllMatches:a=m.findAllMatches,minMatchCharLength:l=m.minMatchCharLength,isCaseSensitive:u=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:c},this.pattern=u?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const o=(h,g)=>{this.chunks.push({pattern:h,alphabet:Xt(h),startIndex:g})},d=this.pattern.length;if(d>se){let h=0;const g=d%se,b=d-g;for(;h<b;)o(this.pattern.substr(h,se),h),h+=se;if(g){const w=d-se;o(this.pattern.substr(w),w)}}else o(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,t.length-1]]),b}const{location:i,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:c}=this.options;let o=[],d=0,h=!1;this.chunks.forEach(({pattern:b,alphabet:w,startIndex:L})=>{const{isMatch:O,score:E,indices:P}=Qt(t,b,w,{location:i+L,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:c});O&&(h=!0),d+=E,O&&P&&(o=[...o,...P])});let g={isMatch:h,score:h?d/this.chunks.length:1};return h&&r&&(g.indices=o),g}}class Z{constructor(t){this.pattern=t}static isMultiMatch(t){return Pe(t,this.multiRegex)}static isSingleMatch(t){return Pe(t,this.singleRegex)}search(){}}function Pe(e,t){const n=e.match(t);return n?n[1]:null}class Zt extends Z{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class en extends Z{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class tn extends Z{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class nn extends Z{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class sn extends Z{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class rn extends Z{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Xe extends Z{constructor(t,{location:n=m.location,threshold:r=m.threshold,distance:i=m.distance,includeMatches:s=m.includeMatches,findAllMatches:a=m.findAllMatches,minMatchCharLength:l=m.minMatchCharLength,isCaseSensitive:u=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){super(t),this._bitapSearch=new Qe(t,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Ze extends Z{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],s=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Se=[Zt,Ze,tn,nn,rn,sn,en,Xe],Ne=Se.length,an=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,on="|";function ln(e,t={}){return e.split(on).map(n=>{let r=n.trim().split(an).filter(s=>s&&!!s.trim()),i=[];for(let s=0,a=r.length;s<a;s+=1){const l=r[s];let u=!1,c=-1;for(;!u&&++c<Ne;){const o=Se[c];let d=o.isMultiMatch(l);d&&(i.push(new o(d,t)),u=!0)}if(!u)for(c=-1;++c<Ne;){const o=Se[c];let d=o.isSingleMatch(l);if(d){i.push(new o(d,t));break}}}return i})}const cn=new Set([Xe.type,Ze.type]);class un{constructor(t,{isCaseSensitive:n=m.isCaseSensitive,includeMatches:r=m.includeMatches,minMatchCharLength:i=m.minMatchCharLength,ignoreLocation:s=m.ignoreLocation,findAllMatches:a=m.findAllMatches,location:l=m.location,threshold:u=m.threshold,distance:c=m.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:s,location:l,threshold:u,distance:c},this.pattern=n?t:t.toLowerCase(),this.query=ln(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let s=0,a=[],l=0;for(let u=0,c=n.length;u<c;u+=1){const o=n[u];a.length=0,s=0;for(let d=0,h=o.length;d<h;d+=1){const g=o[d],{isMatch:b,indices:w,score:L}=g.search(t);if(b){if(s+=1,l+=L,r){const O=g.constructor.type;cn.has(O)?a=[...a,...w]:a.push(w)}}else{l=0,s=0,a.length=0;break}}if(s){let d={isMatch:!0,score:l/s};return r&&(d.indices=a),d}}return{isMatch:!1,score:1}}}const Ie=[];function hn(...e){Ie.push(...e)}function Me(e,t){for(let n=0,r=Ie.length;n<r;n+=1){let i=Ie[n];if(i.condition(e,t))return new i(e,t)}return new Qe(e,t)}const ge={AND:"$and",OR:"$or"},$e={PATH:"$path",PATTERN:"$val"},Ae=e=>!!(e[ge.AND]||e[ge.OR]),dn=e=>!!e[$e.PATH],fn=e=>!G(e)&&Ge(e)&&!Ae(e),Te=e=>({[ge.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function et(e,t,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const a=dn(i);if(!a&&s.length>1&&!Ae(i))return r(Te(i));if(fn(i)){const u=a?i[$e.PATH]:s[0],c=a?i[$e.PATTERN]:i[u];if(!D(c))throw new Error(Tt(u));const o={keyId:we(u),pattern:c};return n&&(o.searcher=Me(c,t)),o}let l={children:[],operator:s[0]};return s.forEach(u=>{const c=i[u];G(c)&&c.forEach(o=>{l.children.push(r(o))})}),l};return Ae(e)||(e=Te(e)),r(e)}function pn(e,{ignoreFieldNorm:t=m.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:s))}),n.score=r})}function gn(e,t){const n=e.matches;t.matches=[],R(n)&&n.forEach(r=>{if(!R(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let a={indices:i,value:s};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),t.matches.push(a)})}function mn(e,t){t.score=e.score}function yn(e,t,{includeMatches:n=m.includeMatches,includeScore:r=m.includeScore}={}){const i=[];return n&&i.push(gn),r&&i.push(mn),e.map(s=>{const{idx:a}=s,l={item:t[a],refIndex:a};return i.length&&i.forEach(u=>{u(s,l)}),l})}class ie{constructor(t,n={},r){this.options={...m,...n},this.options.useExtendedSearch,this._keyStore=new Vt(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Oe))throw new Error(Nt);this._myIndex=n||Je(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){R(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];t(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:a,ignoreFieldNorm:l}=this.options;let u=D(t)?D(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return pn(u,{ignoreFieldNorm:l}),s&&u.sort(a),We(n)&&n>-1&&(u=u.slice(0,n)),yn(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=Me(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:a,n:l})=>{if(!R(s))return;const{isMatch:u,score:c,indices:o}=n.searchIn(s);u&&i.push({item:s,idx:a,matches:[{score:c,value:s,norm:l,indices:o}]})}),i}_searchLogical(t){const n=et(t,this.options),r=(l,u,c)=>{if(!l.children){const{keyId:d,searcher:h}=l,g=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(u,d),searcher:h});return g&&g.length?[{idx:c,item:u,matches:g}]:[]}const o=[];for(let d=0,h=l.children.length;d<h;d+=1){const g=l.children[d],b=r(g,u,c);if(b.length)o.push(...b);else if(l.operator===ge.AND)return[]}return o},i=this._myIndex.records,s={},a=[];return i.forEach(({$:l,i:u})=>{if(R(l)){let c=r(n,l,u);c.length&&(s[u]||(s[u]={idx:u,item:l,matches:[]},a.push(s[u])),c.forEach(({matches:o})=>{s[u].matches.push(...o)}))}}),a}_searchObjectList(t){const n=Me(t,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:a,i:l})=>{if(!R(a))return;let u=[];r.forEach((c,o)=>{u.push(...this._findMatches({key:c,value:a[o],searcher:n}))}),u.length&&s.push({idx:l,item:a,matches:u})}),s}_findMatches({key:t,value:n,searcher:r}){if(!R(n))return[];let i=[];if(G(n))n.forEach(({v:s,i:a,n:l})=>{if(!R(s))return;const{isMatch:u,score:c,indices:o}=r.searchIn(s);u&&i.push({score:c,key:t,value:s,idx:a,norm:l,indices:o})});else{const{v:s,n:a}=n,{isMatch:l,score:u,indices:c}=r.searchIn(s);l&&i.push({score:u,key:t,value:s,norm:a,indices:c})}return i}}ie.version="6.6.2";ie.createIndex=Je;ie.parseIndex=Yt;ie.config=m;ie.parseQuery=et;hn(un);function vn(e,t,n){const r=()=>{var a,l;return new ie((a=H(t))!=null?a:[],(l=H(n))==null?void 0:l.fuseOptions)},i=J(r());be(()=>{var a;return(a=H(n))==null?void 0:a.fuseOptions},()=>{i.value=r()},{deep:!0}),be(()=>H(t),a=>{i.value.setCollection(a)},{deep:!0});const s=_(()=>{const a=H(n);if(a!=null&&a.matchAllWhenSearchEmpty&&!H(e))return H(t).map((u,c)=>({item:u,refIndex:c}));const l=a==null?void 0:a.resultLimit;return i.value.search(H(e),l?{limit:l}:void 0)});return{fuse:i,results:s}}const bn=me({components:{HComboboxOption:$t,UIcon:ye,UAvatar:je,UKbd:Ue},props:{group:{type:Object,required:!0},query:{type:String,default:""},groupAttribute:{type:String,required:!0},commandAttribute:{type:String,required:!0},selectedIcon:{type:String,required:!0},ui:{type:Object,required:!0}},setup(e){const t=_(()=>{const r=e.group[e.groupAttribute];return typeof r=="function"?r(e.query):r});function n(r,{indices:i,value:s}){if(r===s)return"";let a="",l=0;i.forEach(c=>{const o=c[1]+1,d=o-c[0]>=e.query.length;a+=[s.substring(l,c[0]),d&&"<mark>",s.substring(c[0],o),d&&"</mark>"].filter(Boolean).join(""),l=o}),a+=s.substring(l);const u=a.indexOf("<mark>");return u>60&&(a=`...${a.substring(u-60)}`),a}return Ce(()=>Ee("$9NIgJbtiyy")),{label:t,highlight:n}}}),kn=["aria-label"],wn=["innerHTML"];function Sn(e,t,n,r,i,s){const a=ye,l=je,u=Ue,c=W("HComboboxOption");return A(),N("div",{class:I(e.ui.group.wrapper)},[e.label?(A(),N("h2",{key:0,class:I(e.ui.group.label)},Y(e.label),3)):K("",!0),V("div",{class:I(e.ui.group.container),"aria-label":e.group[e.groupAttribute]},[(A(!0),N(ke,null,ue(e.group.commands,(o,d)=>(A(),B(c,{key:`${e.group.key}-${d}`,value:o,disabled:o.disabled,as:"template"},{default:T(({active:h,selected:g})=>[V("div",{class:I([e.ui.group.command.base,h?e.ui.group.command.active:e.ui.group.command.inactive,o.disabled?"cursor-not-allowed":"cursor-pointer"])},[V("div",{class:I(e.ui.group.command.container)},[Q(e.$slots,`${e.group.key}-icon`,{group:e.group,command:o,active:h,selected:g},()=>[o.icon?(A(),B(a,{key:0,name:o.icon,class:I([e.ui.group.command.icon.base,h?e.ui.group.command.icon.active:e.ui.group.command.icon.inactive,o.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):o.avatar?(A(),B(l,X({key:1,ref_for:!0},{size:e.ui.group.command.avatar.size,...o.avatar},{class:e.ui.group.command.avatar.base,"aria-hidden":"true"}),null,16,["class"])):o.chip?(A(),N("span",{key:2,class:I(e.ui.group.command.chip.base),style:it({background:`#${o.chip}`})},null,6)):K("",!0)]),V("div",{class:I([e.ui.group.command.label,o.disabled&&e.ui.group.command.disabled])},[Q(e.$slots,`${e.group.key}-command`,{group:e.group,command:o,active:h,selected:g},()=>{var b,w;return[o.prefix?(A(),N("span",{key:0,class:I(["flex-shrink-0",o.prefixClass||e.ui.group.command.prefix])},Y(o.prefix),3)):K("",!0),V("span",{class:I(["truncate",{"flex-none":o.suffix||((b=o.matches)==null?void 0:b.length)}])},Y(o[e.commandAttribute]),3),(w=o.matches)!=null&&w.length?(A(),N("span",{key:1,class:I(["truncate",o.suffixClass||e.ui.group.command.suffix]),innerHTML:e.highlight(o[e.commandAttribute],o.matches[0])},null,10,wn)):o.suffix?(A(),N("span",{key:2,class:I(["truncate",o.suffixClass||e.ui.group.command.suffix])},Y(o.suffix),3)):K("",!0)]})],2)],2),g?(A(),B(a,{key:0,name:e.selectedIcon,class:I(e.ui.group.command.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])):h&&(e.group.active||e.$slots[`${e.group.key}-active`])?Q(e.$slots,`${e.group.key}-active`,{key:1,group:e.group,command:o,active:h,selected:g},()=>[e.group.active?(A(),N("span",{key:0,class:I(e.ui.group.active)},Y(e.group.active),3)):K("",!0)]):Q(e.$slots,`${e.group.key}-inactive`,{key:2,group:e.group,command:o,active:h,selected:g},()=>{var b;return[(b=o.shortcuts)!=null&&b.length?(A(),N("span",{key:0,class:I(e.ui.group.command.shortcuts)},[(A(!0),N(ke,null,ue(o.shortcuts,w=>(A(),B(u,{key:w},{default:T(()=>[at(Y(w),1)]),_:2},1024))),128))],2)):!o.disabled&&e.group.inactive?(A(),N("span",{key:1,class:I(e.ui.group.inactive)},Y(e.group.inactive),3)):K("",!0)]})],2)]),_:2},1032,["value","disabled"]))),128))],10,kn)],2)}const In=xe(bn,[["render",Sn]]),re=Fe(pe.ui.strategy,pe.ui.commandPalette,Et),Mn=me({components:{HCombobox:At,HComboboxInput:xt,HComboboxOptions:Ct,UIcon:ye,UButton:Ke,CommandPaletteGroup:In},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:null},by:{type:String,default:"id"},multiple:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},groups:{type:Array,default:()=>[]},icon:{type:String,default:()=>re.default.icon},loadingIcon:{type:String,default:()=>re.default.loadingIcon},selectedIcon:{type:String,default:()=>re.default.selectedIcon},closeButton:{type:Object,default:()=>re.default.closeButton},emptyState:{type:Object,default:()=>re.default.emptyState},placeholder:{type:String,default:"Search..."},groupAttribute:{type:String,default:"label"},commandAttribute:{type:String,default:"label"},autoselect:{type:Boolean,default:!0},autoclear:{type:Boolean,default:!0},debounce:{type:Number,default:200},fuse:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close"],setup(e,{emit:t,expose:n}){const{ui:r,attrs:i}=Le("commandPalette",he(e,"ui"),re,he(e,"class")),s=J(""),a=J(),l=J(null),u=J(!1);_e(()=>{e.autoselect&&U()}),_e(()=>{setTimeout(()=>{var x;const y=(x=a.value)==null?void 0:x.$.provides;if(!y)return;const S=Object.getOwnPropertySymbols(y);l.value=S.length&&y[S[0]]},200)});const c=_(()=>Ve({},e.fuse,{fuseOptions:{keys:[e.commandAttribute]},resultLimit:12,matchAllWhenSearchEmpty:!0})),o=_(()=>{var S;const y=[];for(const x of e.groups)!x.search&&!x.static&&y.push(...((S=x.commands)==null?void 0:S.map(q=>({...q,group:x.key})))||[]);return y}),d=J({}),{results:h}=vn(s,o,c);function g(y,S){if(y)return y.filter&&typeof y.filter=="function"&&(S=y.filter(s.value,S)),{...y,commands:S.slice(0,c.value.resultLimit)}}const b=_(()=>{if(!h.value)return[];const y=h.value.reduce((M,C)=>{var k;const{item:p,...f}=C;return p.group&&(M[k=p.group]||(M[k]=[]),M[p.group].push({...p,...f})),M},{}),S=Object.entries(y).map(([M,C])=>{const p=e.groups.find(f=>f.key===M);return p?g(p,C):null}).filter(Boolean),x=e.groups.filter(M=>{var C;return!!M.search&&((C=d.value[M.key])==null?void 0:C.length)}).map(M=>{const C=d.value[M.key]||[];return g(M,[...C])}),q=e.groups.filter(M=>{var C;return M.static&&((C=M.commands)==null?void 0:C.length)}).map(M=>g(M,M.commands));return[...S,...x,...q]}),w=He(async()=>{const y=e.groups.filter(S=>!!S.search);y.length&&(u.value=!0,await Promise.all(y.map(async S=>{d.value[S.key]=await S.search(s.value)})),u.value=!1,P())},e.debounce);be(s,()=>{w(),P()});const L=_(()=>(e.loading||u.value)&&e.loadingIcon?e.loadingIcon:e.icon),O=_(()=>ot(r.value.input.icon.base,r.value.input.icon.size,(e.loading||u.value)&&e.loadingIcon&&r.value.input.icon.loading)),E=_(()=>e.emptyState===null?null:{...r.value.default.emptyState,...e.emptyState});function P(){setTimeout(()=>{var y;(y=a.value)==null||y.$el.dispatchEvent(new KeyboardEvent("keydown",{key:"PageUp"}))},0)}function U(){setTimeout(()=>{var y;(y=a.value)==null||y.$el.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowDown"}))},0)}function ae(y){t("update:modelValue",y,{query:s.value}),e.autoclear&&setTimeout(()=>{s.value=""},0)}function ee(){s.value?s.value="":t("close")}return n({query:s,updateQuery:y=>{s.value=y},comboboxApi:l,results:h}),Ce(()=>Ee("$8JaLueuMEo")),{ui:r,attrs:i,groups:b,comboboxInput:a,query:s,iconName:L,iconClass:O,emptyState:E,onSelect:ae,onClear:ee}}});function $n(e,t,n,r,i,s){const a=ye,l=W("HComboboxInput"),u=Ke,c=W("CommandPaletteGroup"),o=W("HComboboxOptions"),d=W("HCombobox");return A(),B(d,X({by:e.by,"model-value":e.modelValue,multiple:e.multiple,nullable:e.nullable,class:e.ui.wrapper},e.attrs,{as:"div","onUpdate:modelValue":e.onSelect}),{default:T(()=>[lt(V("div",{class:I(e.ui.input.wrapper)},[e.iconName?(A(),B(a,{key:0,name:e.iconName,class:I(e.iconClass),"aria-hidden":"true"},null,8,["name","class"])):K("",!0),ce(l,{ref:"comboboxInput",value:e.query,class:I([e.ui.input.base,e.ui.input.size,e.ui.input.height,e.ui.input.padding,e.icon&&e.ui.input.icon.padding,e.closeButton&&e.ui.input.closeButton.padding]),placeholder:e.placeholder,"aria-label":e.placeholder,autocomplete:"off",onChange:t[0]||(t[0]=h=>e.query=h.target.value)},null,8,["value","class","placeholder","aria-label"]),e.closeButton?(A(),B(u,X({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{class:e.ui.input.closeButton.base,onClick:e.onClear}),null,16,["class","onClick"])):K("",!0)],2),[[ct,e.searchable]]),e.groups.length?(A(),B(o,{key:0,static:"",hold:"",as:"div","aria-label":"Commands",class:I(e.ui.container)},{default:T(()=>[(A(!0),N(ke,null,ue(e.groups,h=>(A(),B(c,{key:h.key,query:e.query,group:h,"group-attribute":e.groupAttribute,"command-attribute":e.commandAttribute,"selected-icon":e.selectedIcon,ui:e.ui},De({_:2},[ue(e.$slots,(g,b)=>({name:b,fn:T(w=>[Q(e.$slots,b,X({ref_for:!0},w))])}))]),1032,["query","group","group-attribute","command-attribute","selected-icon","ui"]))),128))]),_:3},8,["class"])):e.emptyState?Q(e.$slots,"empty-state",{key:1},()=>[V("div",{class:I(e.ui.emptyState.wrapper)},[e.emptyState.icon?(A(),B(a,{key:0,name:e.emptyState.icon,class:I(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):K("",!0),V("p",{class:I(e.query?e.ui.emptyState.queryLabel:e.ui.emptyState.label)},Y(e.query?e.emptyState.queryLabel:e.emptyState.label),3)],2)]):K("",!0)]),_:3},16,["by","model-value","multiple","nullable","class","onUpdate:modelValue"])}const An=xe(Mn,[["render",$n]]),xn=Fe(pe.ui.strategy,pe.ui.modal,Lt),Cn=me({components:{HDialog:ut,HDialogPanel:ht,TransitionRoot:dt,TransitionChild:ft},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:n,attrs:r}=Le("modal",he(e,"ui"),xn,he(e,"class")),i=_({get(){return e.modelValue},set(u){t("update:modelValue",u)}}),s=_(()=>e.transition?{...n.value.transition}:{});function a(u){if(e.preventClose){t("close-prevented");return}i.value=u,t("close")}const l=()=>{t("after-leave")};return Ce(()=>Ee("$zLJHBZGXAW")),{ui:n,attrs:r,isOpen:i,transitionClass:s,onAfterLeave:l,close:a}}});function En(e,t,n,r,i,s){const a=W("TransitionChild"),l=W("HDialogPanel"),u=W("HDialog"),c=W("TransitionRoot");return A(),B(c,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:T(()=>[ce(u,X({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:T(()=>[e.overlay?(A(),B(a,X({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:T(()=>[V("div",{class:I([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):K("",!0),V("div",{class:I(e.ui.inner)},[V("div",{class:I([e.ui.container,!e.fullscreen&&e.ui.padding])},[ce(a,X({as:"template",appear:e.appear},e.transitionClass),{default:T(()=>[ce(l,{class:I([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:T(()=>[Q(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const Ln=xe(Cn,[["render",En]]),tt=e=>{if(!e.children)return e._path;for(const t of(e==null?void 0:e.children)||[]){const n=tt(t);if(n)return n}},nt=(e,t)=>{for(const n of t){if(n._path===e&&!n._id)return n.children;if(n.children){const r=nt(e,n.children);if(r)return r}}},st=(e,t)=>{for(const n of t){if(n._path===e)return n;if(n.children){const r=st(e,n.children);if(r)return r}}},On=(e,t,n)=>{let r;const i=(s,a)=>{for(const l of a)if(!(s!=="/"&&l._path==="/")){if(s!=null&&s.startsWith(l._path)&&l[t]&&(r=l[t]),l._path===s)return;l.children&&i(s,l.children)}};return i(e,n),r},_n=()=>({navBottomLink:tt,navDirFromPath:nt,navPageFromPath:st,navKeyFromPath:On});function Bn(...e){return _(()=>e.every(t=>H(t)))}function Rn(e){return _(()=>!H(e))}const Pn=/^[^-]+.*-.*[^-]+$/,Nn=/^[^_]+.*_.*[^_]+$/,Tn=(e,t={})=>{const{macOS:n,usingInput:r}=ze();let i=[];const s=J([]),a=()=>{s.value.splice(0,s.value.length)},l=He(a,t.chainDelay??800),u=c=>{if(!c.key)return;const o=/^[a-z]{1}$/i.test(c.key);let d;if(s.value.push(c.key),s.value.length>=2){d=s.value.slice(-2).join("-");for(const h of i.filter(g=>g.chained))if(h.key===d){h.condition.value&&(c.preventDefault(),h.handler()),a();return}}for(const h of i.filter(g=>!g.chained))if(c.key.toLowerCase()===h.key&&c.metaKey===h.metaKey&&c.ctrlKey===h.ctrlKey&&!(o&&c.shiftKey!==h.shiftKey)){h.condition.value&&(c.preventDefault(),h.handler()),a();return}l()};i=Object.entries(e).map(([c,o])=>{var b,w;if(!o)return null;let d;c.includes("-")&&c!=="-"&&!((b=c.match(Pn))!=null&&b.length)&&console.trace(`[Shortcut] Invalid key: "${c}"`),c.includes("_")&&c!=="_"&&!((w=c.match(Nn))!=null&&w.length)&&console.trace(`[Shortcut] Invalid key: "${c}"`);const h=c.includes("-")&&c!=="-";if(h)d={key:c.toLowerCase(),metaKey:!1,ctrlKey:!1,shiftKey:!1,altKey:!1};else{const L=c.toLowerCase().split("_").map(O=>O);d={key:L.filter(O=>!["meta","ctrl","shift","alt"].includes(O)).join("_"),metaKey:L.includes("meta"),ctrlKey:L.includes("ctrl"),shiftKey:L.includes("shift"),altKey:L.includes("alt")}}if(d.chained=h,!n.value&&d.metaKey&&!d.ctrlKey&&(d.metaKey=!1,d.ctrlKey=!0),typeof o=="function"?d.handler=o:typeof o=="object"&&(d={...d,handler:o.handler}),!d.handler)return console.trace("[Shortcut] Invalid value"),null;const g=[];return o.usingInput?typeof o.usingInput=="string"&&g.push(_(()=>r.value===o.usingInput)):g.push(Rn(r)),d.condition=Bn(...g,...o.whenever||[]),d}).filter(Boolean),pt("keydown",u)},Hn=me({inheritAttrs:!1,__name:"ContentSearch",props:{modelValue:{type:Boolean,default:void 0},files:{type:Array,default:()=>[]},navigation:{type:Array,default:()=>[]},links:{type:Array,default:()=>[]},groups:{type:Array,default:()=>[]},fuse:{type:Object,default:()=>({})},hideColorMode:{type:Boolean,default:!1},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const r=gt(),i=_(()=>({padding:"p-0 sm:p-4",rounded:"rounded-none sm:rounded-lg",width:"sm:max-w-3xl",height:"h-dvh sm:h-[28rem]",commandPalette:{input:{height:"h-[--header-height] sm:h-12",icon:{size:"h-5 w-5",padding:"ps-11"}},group:{command:{prefix:"!text-foreground after:content-['_>']"}},container:"scroll-py-10"},fileIcon:{name:"i-heroicons-document-text"},default:{closeButton:{icon:r.ui.icons.close,color:"gray",variant:"ghost",size:"sm"}}})),s=e,a=n,l=mt(),{navKeyFromPath:u}=_n(),{usingInput:c}=ze(),{isContentSearchModalOpen:o}=yt(),d=vt(Mt),h=bt(),{ui:g,attrs:b}=Le("content.search",he(s,"ui"),i,void 0,!0),w=d.smaller("sm"),L=J();function O(p){var f;return p.icon?p.icon:(f=p.navigation)!=null&&f.icon?p.navigation.icon:(s.navigation&&(p.icon=u(p._path,"icon",s.navigation)),p.icon||g.value.fileIcon.name)}const E=_({get(){return s.modelValue!==void 0?s.modelValue:o.value},set(p){s.modelValue!==void 0?a("update:modelValue",p):o.value=p}}),P=_(()=>Ve({},s.fuse,{fuseOptions:{ignoreLocation:!0,includeMatches:!0,threshold:.1,keys:[{name:"title",weight:5},{name:"label",weight:5},{name:"suffix",weight:3},"children.children.value","children.children.children.value","children.children.children.children.value","children.children.children.children.children.value"]},resultLimit:12}));function U(p,f){return p?f:f==null?void 0:f.filter(k=>!k.child)}const ae=_(()=>{var f,k;let p=[];return(f=s.navigation)!=null&&f.length&&(s.navigation.some(v=>{var $;return!!(($=v.children)!=null&&$.length)})?p=(s.navigation||[]).map(v=>({key:v._path,label:v.title,commands:(s.files||[]).filter($=>{var j;return(j=$._path)==null?void 0:j.startsWith(v._path)}).flatMap($=>y($,v)),filter:U})):p=[{key:"docs",commands:(s.files||[]).flatMap(v=>y(v)),filter:U}]),[((k=s.links)==null?void 0:k.length)&&{key:"links",label:"Links",commands:s.links.flatMap(v=>[v.to&&{id:l.resolve(v.to).fullPath,...v,icon:v.icon||g.value.fileIcon.name},...(v.children||[]).map($=>({id:l.resolve($.to).fullPath,prefix:v.label,suffix:$.description,...$,icon:$.icon||v.icon||g.value.fileIcon.name}))]).filter(Boolean)},...p,...s.groups||[],!(h!=null&&h.forced)&&!s.hideColorMode&&{key:"theme",label:"Theme",commands:[{id:"theme-light",label:"Light",icon:r.ui.icons.light,disabled:h.preference==="light",click:()=>{h.preference="light"}},{id:"theme-dark",label:"Dark",icon:r.ui.icons.dark,disabled:h.preference==="dark",click:()=>{h.preference="dark"}}]}].filter(Boolean)}),ee=_(()=>E.value||!c.value);function y(p,f){var v,$,j,te,oe;const k=(v=kt((f==null?void 0:f.children)||[],p))==null?void 0:v.map(({title:F})=>F).join(" > ");return[{id:p._id,label:(($=p.navigation)==null?void 0:$.title)||p.title,title:((j=p.navigation)==null?void 0:j.title)||p.title,prefix:k,to:p._path,suffix:p.description,children:x(q(((te=p==null?void 0:p.body)==null?void 0:te.children)||[])),icon:O(p)},...Object.entries(M(((oe=p==null?void 0:p.body)==null?void 0:oe.children)||[])).map(([F,{title:ne,children:de}])=>{var le;if(ne)return{id:`${p._path}${F}`,label:ne,prefix:(k?`${k} > `:"")+`${((le=p.navigation)==null?void 0:le.title)||p.title}`,to:`${p._path}${F}`,children:x(de),icon:O(p),child:!0}})].filter(Boolean)}function S(p){return(p==null?void 0:p.map(f=>{var k,v;if(["code","code-inline","em","a","strong"].includes(f.tag))return{type:"text",value:((v=(k=f.children)==null?void 0:k.find($=>$.type==="text"))==null?void 0:v.value)||""};if(f.type==="text")return f}).filter(Boolean))||[]}function x(p){return p.map(f=>{if(["pre","style","video"].includes(f.tag))return;let k=[...f.children||[]];return["p","h1","h2","h3","h4","h5","h6","li","td","th"].includes(f.tag)&&k.length?(k=S(k).reduce((v,$)=>(v.length&&v[v.length-1].type==="text"?v[v.length-1].value+=$.value||"":v.push({...$}),v),[]),{...f,children:k}):{...f,children:x(k)}}).filter(Boolean)}function q(p){const f=[];for(const k of p){if(["h1","h2","h3"].includes(k.tag))break;f.push(k)}return f}function M(p){var $,j,te,oe;const f={};let k="",v="";for(const F of p)["h1","h2","h3"].includes(F.tag)&&(v=((te=(j=($=F.children)==null?void 0:$.map(ne=>{var de,le;if(ne.type==="text")return ne.value;if(["code","code-inline","em","a","strong"].includes(ne.tag))return(le=(de=ne.children)==null?void 0:de.find(rt=>rt.type==="text"))==null?void 0:le.value}))==null?void 0:j.filter(Boolean))==null?void 0:te.join(" "))||"",v&&((oe=F.props)!=null&&oe.id)&&(k=`#${encodeURIComponent(F.props.id)}`)),f[k]?f[k].children.push(F):f[k]={children:[F],title:v};return f}function C(p){E.value=!1;const f=p[0];f&&(f.click?f.click():f.to?f.target==="_blank"||f.to.startsWith("http")?window.open(f.to,f.target||"_blank"):l.push(f.to):f.href&&window.open(f.href,"_blank"))}return Tn({meta_k:{usingInput:!0,whenever:[ee],handler:()=>{E.value=!E.value}},escape:{usingInput:!0,whenever:[E],handler:()=>{E.value=!1}}}),t({commandPaletteRef:L}),(p,f)=>{const k=An,v=Ln;return A(),B(v,{modelValue:z(E),"onUpdate:modelValue":f[1]||(f[1]=$=>It(E)?E.value=$:null),overlay:!z(w),transition:!z(w),ui:z(g)},{default:T(()=>[ce(k,X({ref_key:"commandPaletteRef",ref:L,"model-value":[],groups:z(ae),ui:z(g).commandPalette,"close-button":z(g).default.closeButton,fuse:z(P),multiple:""},z(b),{"onUpdate:modelValue":C,onClose:f[0]||(f[0]=$=>E.value=!1)}),De({_:2},[ue(p.$slots,($,j)=>({name:j,fn:T(te=>[Q(p.$slots,j,wt(St(te)))])}))]),1040,["groups","ui","close-button","fuse"])]),_:3},8,["modelValue","overlay","transition","ui"])}}});export{Hn as default};
