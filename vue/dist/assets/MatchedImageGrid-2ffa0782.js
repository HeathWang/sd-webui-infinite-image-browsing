import{d as q,l as Q,ax as W,o as r,y as _,c as s,n as a,r as e,s as h,p as y,t as X,v as b,x as j,m as M,L as H,E as m,N as S,Q as J,R as K,X as Y}from"./index-24041d00.js";import{L as Z,R as ee,f as te,S as ie}from"./fullScreenContextMenu-fb07cfd1.js";import{g as le,F as se}from"./FileItem-ce43e0c3.js";import{g as ne}from"./db-df8b57f9.js";import{u as ae}from"./hook-dcc0cb12.js";import"./shortcut-f1370d0c.js";const oe={class:"hint"},re={key:1,class:"preview-switch"},de=q({__name:"MatchedImageGrid",props:{tabIdx:{},paneIdx:{},selectedTagIds:{},id:{}},setup(T){const u=T,{queue:p,images:i,onContextMenuClickU:g,stackViewEl:V,previewIdx:n,previewing:v,onPreviewVisibleChange:D,previewImgMove:f,canPreview:w,itemSize:I,gridItems:F,showGenInfo:o,imageGenInfo:k,q:z,multiSelectedIdxs:$,onFileItemClick:B,scroller:x,showMenuIdx:d,onFileDragStart:E,onFileDragEnd:G,cellWidth:N,onScroll:R,updateImageTag:A}=ae();return Q(()=>u.selectedTagIds,async()=>{const{res:c}=p.pushAction(()=>ne(u.selectedTagIds));i.value=await c,await W(),A(),x.value.scrollToItem(0)},{immediate:!0}),(c,t)=>{const P=J,U=K,L=ie;return r(),_("div",{class:"container",ref_key:"stackViewEl",ref:V},[s(L,{size:"large",spinning:!e(p).isIdle},{default:a(()=>[s(U,{visible:e(o),"onUpdate:visible":t[1]||(t[1]=l=>h(o)?o.value=l:null),width:"70vw","mask-closable":"",onOk:t[2]||(t[2]=l=>o.value=!1)},{cancelText:a(()=>[]),default:a(()=>[s(P,{active:"",loading:!e(z).isIdle},{default:a(()=>[y("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:t[0]||(t[0]=l=>e(X)(e(k)))},[y("div",oe,b(c.$t("doubleClickToCopy")),1),j(" "+b(e(k)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(i)?(r(),M(e(le),{key:0,ref_key:"scroller",ref:x,class:"file-list",items:e(i),"item-size":e(I).first,"key-field":"fullpath","item-secondary-size":e(I).second,gridItems:e(F),onScroll:e(R)},{default:a(({item:l,index:C})=>[s(se,{idx:C,file:l,"cell-width":e(N),"show-menu-idx":e(d),"onUpdate:showMenuIdx":t[3]||(t[3]=O=>h(d)?d.value=O:null),onDragstart:e(E),onDragend:e(G),onFileItemClick:e(B),"full-screen-preview-image-url":e(i)[e(n)]?e(H)(e(i)[e(n)]):"",selected:e($).includes(C),onContextMenuClick:e(g),onPreviewVisibleChange:e(D)},null,8,["idx","file","cell-width","show-menu-idx","onDragstart","onDragend","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):m("",!0),e(v)?(r(),_("div",re,[s(e(Z),{onClick:t[4]||(t[4]=l=>e(f)("prev")),class:S({disable:!e(w)("prev")})},null,8,["class"]),s(e(ee),{onClick:t[5]||(t[5]=l=>e(f)("next")),class:S({disable:!e(w)("next")})},null,8,["class"])])):m("",!0)]),_:1},8,["spinning"]),e(v)&&e(i)&&e(i)[e(n)]?(r(),M(te,{key:0,file:e(i)[e(n)],idx:e(n),onContextMenuClick:e(g)},null,8,["file","idx","onContextMenuClick"])):m("",!0)],512)}}});const fe=Y(de,[["__scopeId","data-v-d698e678"]]);export{fe as default};
