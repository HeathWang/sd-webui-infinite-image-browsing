import{d as ne,Z as k,aA as ie,bR as oe,aD as re,ak as ue,ah as de,bQ as q,o,y as C,q as L,c as i,r as e,bV as ce,p as d,L as _,m as x,n as r,x as S,v as g,C as h,s as N,t as pe,K as me,T as ve,U as ge,bT as fe,O as we,Q as ke,W as xe}from"./index-5f58fa79.js";import{L as he,R as be,f as Ie,S as ye}from"./fullScreenContextMenu-d2d04eb2.js";/* empty css              */import{g as Ce,F as _e}from"./FileItem-7a24456f.js";import{b as O,c as Se,f as Me,u as $e}from"./db-5a33988f.js";import{c as ze,u as De}from"./hook-3497f7e7.js";import"./index-6593cfe3.js";/* empty css              */import"./functionalCallableComp-9a9cbacb.js";const Be="/infinite_image_browsing/fe-static/assets/regex-a447f877.svg",Fe=["src"],Re={class:"search-bar last"},Ue={class:"form-name"},Ve={class:"hint"},Ae={key:1,class:"preview-switch"},Ee=ne({__name:"SubstrSearch",props:{tabIdx:{},paneIdx:{},searchScope:{}},setup(P){const M=P,c=k(!1),p=k(""),f=k(M.searchScope??""),b=ze(a=>{const s={cursor:a,regexp:c.value?p.value:"",surstr:c.value?"":p.value,folder_paths:(f.value??"").split(/,|\n/).map(v=>v.trim()).filter(v=>v)};return Me(s)}),{queue:u,images:n,onContextMenuClickU:$,stackViewEl:G,previewIdx:m,previewing:z,onPreviewVisibleChange:Q,previewImgMove:D,canPreview:B,itemSize:F,gridItems:H,showGenInfo:w,imageGenInfo:R,q:W,multiSelectedIdxs:U,onFileItemClick:Z,scroller:V,showMenuIdx:I,onFileDragStart:j,onFileDragEnd:J,cellWidth:X,onScroll:A}=De(b),t=k();ie(async()=>{t.value=await O(),t.value.img_count&&t.value.expired&&await E(),M.searchScope&&await y()});const E=oe(()=>u.pushAction(async()=>(await $e(),t.value=await O(),t.value)).res),y=async()=>{await b.reset({refetch:!0}),await re(),A(),V.value.scrollToItem(0),n.value.length||ue.info(de("fuzzy-search-noResults"))};q("returnToIIB",async()=>{const a=await u.pushAction(Se).res;t.value.expired=a.expired}),q("searchIndexExpired",()=>t.value&&(t.value.expired=!0));const Y=()=>{c.value=!c.value};return(a,s)=>{const v=ve,T=ge,ee=fe,se=we,te=ke,ae=ye;return o(),C("div",{class:"container",ref_key:"stackViewEl",ref:G},[t.value?(o(),C("div",{key:0,class:"search-bar",onKeydown:s[2]||(s[2]=L(()=>{},["stop"]))},[i(v,{value:p.value,"onUpdate:value":s[0]||(s[0]=l=>p.value=l),placeholder:a.$t("fuzzy-search-placeholder")+" "+a.$t("regexSearchEnabledHint"),disabled:!e(u).isIdle,onKeydown:ce(y,["enter"]),"allow-clear":""},null,8,["value","placeholder","disabled","onKeydown"]),d("div",{class:_(["regex-icon",{selected:c.value}]),onKeydown:s[1]||(s[1]=L(()=>{},["stop"])),onClick:Y,title:"Use Regular Expression"},[d("img",{src:e(Be)},null,8,Fe)],34),t.value.expired||!t.value.img_count?(o(),x(T,{key:0,onClick:e(E),loading:!e(u).isIdle,type:"primary"},{default:r(()=>[S(g(t.value.img_count===0?a.$t("generateIndexHint"):a.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(o(),x(T,{key:1,type:"primary",onClick:y,loading:!e(u).isIdle||e(b).loading,disabled:!p.value&&!f.value},{default:r(()=>[S(g(a.$t("search")),1)]),_:1},8,["loading","disabled"]))],32)):h("",!0),d("div",Re,[d("div",Ue,g(a.$t("searchScope")),1),i(ee,{"auto-size":{maxRows:8},value:f.value,"onUpdate:value":s[3]||(s[3]=l=>f.value=l),placeholder:a.$t("specifiedSearchFolder")},null,8,["value","placeholder"])]),i(ae,{size:"large",spinning:!e(u).isIdle},{default:r(()=>[i(te,{visible:e(w),"onUpdate:visible":s[5]||(s[5]=l=>N(w)?w.value=l:null),width:"70vw","mask-closable":"",onOk:s[6]||(s[6]=l=>w.value=!1)},{cancelText:r(()=>[]),default:r(()=>[i(se,{active:"",loading:!e(W).isIdle},{default:r(()=>[d("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:s[4]||(s[4]=l=>e(pe)(e(R)))},[d("div",Ve,g(a.$t("doubleClickToCopy")),1),S(" "+g(e(R)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(n)?(o(),x(e(Ce),{key:0,ref_key:"scroller",ref:V,class:"file-list",items:e(n),"item-size":e(F).first,"key-field":"fullpath","item-secondary-size":e(F).second,gridItems:e(H),onScroll:e(A)},{default:r(({item:l,index:K})=>[i(_e,{idx:K,file:l,"show-menu-idx":e(I),"onUpdate:showMenuIdx":s[7]||(s[7]=le=>N(I)?I.value=le:null),onFileItemClick:e(Z),"full-screen-preview-image-url":e(n)[e(m)]?e(me)(e(n)[e(m)]):"","cell-width":e(X),selected:e(U).includes(K),onContextMenuClick:e($),onDragstart:e(j),onDragend:e(J),"is-selected-mutil-files":e(U).length>1,onPreviewVisibleChange:e(Q)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","cell-width","selected","onContextMenuClick","onDragstart","onDragend","is-selected-mutil-files","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):h("",!0),e(z)?(o(),C("div",Ae,[i(e(he),{onClick:s[8]||(s[8]=l=>e(D)("prev")),class:_({disable:!e(B)("prev")})},null,8,["class"]),i(e(be),{onClick:s[9]||(s[9]=l=>e(D)("next")),class:_({disable:!e(B)("next")})},null,8,["class"])])):h("",!0)]),_:1},8,["spinning"]),e(z)&&e(n)&&e(n)[e(m)]?(o(),x(Ie,{key:1,file:e(n)[e(m)],idx:e(m),onContextMenuClick:e($)},null,8,["file","idx","onContextMenuClick"])):h("",!0)],512)}}});const He=xe(Ee,[["__scopeId","data-v-6c9b6792"]]);export{He as default};
