import{d as j,r as B,ad as K,bb as Q,bc as J,o as a,l as k,c as o,y as m,m as r,B as b,t as v,n as e,H as f,p as $,q as A,A as W,K as V,bg as X,U as Y,N as Z,R as ee}from"./index-0f02634a.js";import{i as te,j as se,t as ie,L as ne,R as le,k as ae,S as oe}from"./fullScreenContextMenu-fe0991af.js";import{I as re}from"./index-4a161b9a.js";import{a as U,b as ue,d as de,M as ce,u as pe}from"./db-21cf6cff.js";import{u as me}from"./hook-24b66ee6.js";import{B as ve}from"./button-f8281d76.js";import"./index-afcf78a1.js";import"./_baseIteratee-6be9aae3.js";const fe={key:0,class:"search-bar"},ge={class:"hint"},ke={key:1,class:"preview-switch"},be=j({__name:"SubstrSearch",setup(Ce){const{queue:u,images:n,onContextMenuClickU:C,stackViewEl:R,previewIdx:d,previewing:w,onPreviewVisibleChange:D,previewImgMove:y,canPreview:I,itemSize:_,gridItems:E,showGenInfo:c,imageGenInfo:x,q:F,multiSelectedIdxs:N,onFileItemClick:q,scroller:h,showMenuIdx:g}=me(),p=B(""),s=B();K(async()=>{s.value=await U(),s.value.img_count&&s.value.expired&&S()});const S=Q(()=>u.pushAction(async()=>(await pe(),s.value=await U(),s.value)).res),P=async()=>{var i;n.value=await u.pushAction(()=>de(p.value)).res,(i=h.value)==null||i.scrollToItem(0),n.value.length||X.info(Y("fuzzy-search-noResults"))};return J("return-to-iib",async()=>{const i=await u.pushAction(ue).res;s.value.expired=i.expired}),(i,t)=>{const T=re,M=ve,G=Z,L=ce,O=oe;return a(),k("div",{class:"container",ref_key:"stackViewEl",ref:R},[s.value?(a(),k("div",fe,[o(T,{value:p.value,"onUpdate:value":t[0]||(t[0]=l=>p.value=l),placeholder:i.$t("fuzzy-search-placeholder")},null,8,["value","placeholder"]),s.value.expired||!s.value.img_count?(a(),m(M,{key:0,onClick:e(S),loading:!e(u).isIdle,type:"primary"},{default:r(()=>[b(v(s.value.img_count===0?i.$t("generateIndexHint"):i.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(a(),m(M,{key:1,type:"primary",onClick:P,loading:!e(u).isIdle,disabled:!p.value},{default:r(()=>[b(v(i.$t("search")),1)]),_:1},8,["loading","disabled"]))])):f("",!0),o(O,{size:"large",spinning:!e(u).isIdle},{default:r(()=>[o(L,{visible:e(c),"onUpdate:visible":t[2]||(t[2]=l=>$(c)?c.value=l:null),width:"70vw","mask-closable":"",onOk:t[3]||(t[3]=l=>c.value=!1)},{cancelText:r(()=>[]),default:r(()=>[o(G,{active:"",loading:!e(F).isIdle},{default:r(()=>[A("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:t[1]||(t[1]=l=>e(W)(e(x)))},[A("div",ge,v(i.$t("doubleClickToCopy")),1),b(" "+v(e(x)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(n)?(a(),m(e(te),{key:0,ref_key:"scroller",ref:h,class:"file-list",items:e(n),"item-size":e(_).first,"key-field":"fullpath","item-secondary-size":e(_).second,gridItems:e(E)},{default:r(({item:l,index:z})=>[o(se,{idx:z,file:l,"show-menu-idx":e(g),"onUpdate:showMenuIdx":t[4]||(t[4]=H=>$(g)?g.value=H:null),onFileItemClick:e(q),"full-screen-preview-image-url":e(n)[e(d)]?e(ie)(e(n)[e(d)]):"",selected:e(N).includes(z),onContextMenuClick:e(C),onPreviewVisibleChange:e(D)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):f("",!0),e(w)?(a(),k("div",ke,[o(e(ne),{onClick:t[5]||(t[5]=l=>e(y)("prev")),class:V({disable:!e(I)("prev")})},null,8,["class"]),o(e(le),{onClick:t[6]||(t[6]=l=>e(y)("next")),class:V({disable:!e(I)("next")})},null,8,["class"])])):f("",!0)]),_:1},8,["spinning"]),e(w)&&e(n)&&e(n)[e(d)]?(a(),m(ae,{key:1,file:e(n)[e(d)],idx:e(d),onContextMenuClick:e(C)},null,8,["file","idx","onContextMenuClick"])):f("",!0)],512)}}});const ze=ee(be,[["__scopeId","data-v-2feb1838"]]);export{ze as default};
