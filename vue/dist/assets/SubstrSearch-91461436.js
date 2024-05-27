import{d as ve,v as S,at as me,bO as L,bQ as ge,a2 as fe,a8 as he,a5 as we,bP as O,bR as ke,r as Se,o as c,k as A,c as n,B as e,C as P,bZ as _e,l as r,Q as M,z as _,A as o,m as h,t as d,p as b,E as J,G as be,O as Ce,V as Ie,W as N,bW as xe,T as ye,U as Ae,al as Me,am as $e,b_ as ze,bY as Re,q as Fe}from"./index-6c2db580.js";import{M as Be,L as De,R as Ee,f as Ue,S as Ve}from"./MultiSelectKeep-c0b6db92.js";/* empty css              */import{g as Te,h as Ke,F as qe}from"./FileItem-11045013.js";import{c as Ge,u as Le}from"./hook-3dbc9103.js";import"./index-3270d12b.js";import"./index-14a9dcde.js";import"./functionalCallableComp-07e627f1.js";const Oe="/infinite_image_browsing/fe-static/assets/regex-a447f877.svg",Pe=p=>(Me("data-v-39554c4f"),p=p(),$e(),p),Je=["src"],Ne={class:"search-bar"},Qe={class:"form-name"},We={class:"search-bar last actions"},He={class:"hint"},Ye=Pe(()=>r("div",{style:{padding:"16px 0 512px"}},null,-1)),Ze={key:1,class:"preview-switch"},je=ve({__name:"SubstrSearch",props:{tabIdx:{},paneIdx:{},searchScope:{}},setup(p){const $=p,v=S(!1),m=S(""),w=S($.searchScope??""),C=Ge(s=>{const l={cursor:s,regexp:v.value?m.value:"",surstr:v.value?"":m.value,folder_paths:(w.value??"").split(/,|\n/).map(f=>f.trim()).filter(f=>f)};return ze(l)}),{queue:u,images:i,onContextMenuClickU:z,stackViewEl:Q,previewIdx:g,previewing:R,onPreviewVisibleChange:W,previewImgMove:F,canPreview:B,itemSize:D,gridItems:H,showGenInfo:k,imageGenInfo:E,q:Y,multiSelectedIdxs:I,onFileItemClick:Z,scroller:U,showMenuIdx:x,onFileDragStart:j,onFileDragEnd:X,cellWidth:ee,onScroll:V,saveAllFileAsJson:le,saveLoadedFileAsJson:se}=Le(C),t=S();me(async()=>{t.value=await L(),t.value.img_count&&t.value.expired&&await T(),$.searchScope&&await y()});const T=ge(()=>u.pushAction(async()=>(await Re(),t.value=await L(),t.value)).res),y=async()=>{await C.reset({refetch:!0}),await fe(),V(),U.value.scrollToItem(0),i.value.length||he.info(we("fuzzy-search-noResults"))};O("returnToIIB",async()=>{const s=await u.pushAction(ke).res;t.value.expired=s.expired}),O("searchIndexExpired",()=>t.value&&(t.value.expired=!0));const te=()=>{v.value=!v.value},ae=Se(),{onClearAllSelected:ne,onSelectAll:oe,onReverseSelect:ie}=Te();return(s,l)=>{const f=Ie,K=N,re=xe,q=N,ce=ye,de=Ae,ue=Ve;return c(),A("div",{class:"container",ref_key:"stackViewEl",ref:Q},[n(Be,{show:!!e(I).length||e(ae).keepMultiSelect,onClearAllSelected:e(ne),onSelectAll:e(oe),onReverseSelect:e(ie)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),t.value?(c(),A("div",{key:0,class:"search-bar",onKeydown:l[2]||(l[2]=P(()=>{},["stop"]))},[n(f,{value:m.value,"onUpdate:value":l[0]||(l[0]=a=>m.value=a),placeholder:s.$t("fuzzy-search-placeholder")+" "+s.$t("regexSearchEnabledHint"),disabled:!e(u).isIdle,onKeydown:_e(y,["enter"]),"allow-clear":""},null,8,["value","placeholder","disabled","onKeydown"]),r("div",{class:M(["regex-icon",{selected:v.value}]),onKeydown:l[1]||(l[1]=P(()=>{},["stop"])),onClick:te,title:"Use Regular Expression"},[r("img",{src:e(Oe)},null,8,Je)],34),t.value.expired||!t.value.img_count?(c(),_(K,{key:0,onClick:e(T),loading:!e(u).isIdle,type:"primary"},{default:o(()=>[h(d(t.value.img_count===0?s.$t("generateIndexHint"):s.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(c(),_(K,{key:1,type:"primary",onClick:y,loading:!e(u).isIdle||e(C).loading,disabled:!m.value&&!w.value},{default:o(()=>[h(d(s.$t("search")),1)]),_:1},8,["loading","disabled"]))],32)):b("",!0),r("div",Ne,[r("div",Qe,d(s.$t("searchScope")),1),n(re,{"auto-size":{maxRows:8},value:w.value,"onUpdate:value":l[3]||(l[3]=a=>w.value=a),placeholder:s.$t("specifiedSearchFolder")},null,8,["value","placeholder"])]),r("div",We,[n(q,{onClick:e(se)},{default:o(()=>[h(d(s.$t("saveLoadedImageAsJson")),1)]),_:1},8,["onClick"]),n(q,{onClick:e(le)},{default:o(()=>[h(d(s.$t("saveAllAsJson")),1)]),_:1},8,["onClick"])]),n(ue,{size:"large",spinning:!e(u).isIdle},{default:o(()=>[n(de,{visible:e(k),"onUpdate:visible":l[5]||(l[5]=a=>J(k)?k.value=a:null),width:"70vw","mask-closable":"",onOk:l[6]||(l[6]=a=>k.value=!1)},{cancelText:o(()=>[]),default:o(()=>[n(ce,{active:"",loading:!e(Y).isIdle},{default:o(()=>[r("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:l[4]||(l[4]=a=>e(be)(e(E)))},[r("div",He,d(s.$t("doubleClickToCopy")),1),h(" "+d(e(E)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(i)?(c(),_(e(Ke),{key:0,ref_key:"scroller",ref:U,class:"file-list",items:e(i),"item-size":e(D).first,"key-field":"fullpath","item-secondary-size":e(D).second,gridItems:e(H),onScroll:e(V)},{after:o(()=>[Ye]),default:o(({item:a,index:G})=>[n(qe,{idx:G,file:a,"show-menu-idx":e(x),"onUpdate:showMenuIdx":l[7]||(l[7]=pe=>J(x)?x.value=pe:null),onFileItemClick:e(Z),"full-screen-preview-image-url":e(i)[e(g)]?e(Ce)(e(i)[e(g)]):"","cell-width":e(ee),selected:e(I).includes(G),onContextMenuClick:e(z),onDragstart:e(j),onDragend:e(X),"is-selected-mutil-files":e(I).length>1,onPreviewVisibleChange:e(W)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","cell-width","selected","onContextMenuClick","onDragstart","onDragend","is-selected-mutil-files","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):b("",!0),e(R)?(c(),A("div",Ze,[n(e(De),{onClick:l[8]||(l[8]=a=>e(F)("prev")),class:M({disable:!e(B)("prev")})},null,8,["class"]),n(e(Ee),{onClick:l[9]||(l[9]=a=>e(F)("next")),class:M({disable:!e(B)("next")})},null,8,["class"])])):b("",!0)]),_:1},8,["spinning"]),e(R)&&e(i)&&e(i)[e(g)]?(c(),_(Ue,{key:1,file:e(i)[e(g)],idx:e(g),onContextMenuClick:e(z)},null,8,["file","idx","onContextMenuClick"])):b("",!0)],512)}}});const il=Fe(je,[["__scopeId","data-v-39554c4f"]]);export{il as default};