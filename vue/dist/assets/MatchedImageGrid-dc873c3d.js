import{d as q,l as Q,ax as W,o as r,y as h,c as l,n as a,r as e,s as y,p as b,t as X,v as S,x as j,m as M,L as H,C as m,N as T,Q as J,R as K,X as Y}from"./index-a7932720.js";import{L as Z,R as ee,f as te,S as ie}from"./fullScreenContextMenu-8579ab9a.js";import{g as se,F as le}from"./FileItem-9b16060e.js";import{g as ne}from"./db-53e081d6.js";import{c as ae,u as oe}from"./hook-4a0dfe2d.js";import"./shortcut-09836165.js";const re={class:"hint"},de={key:1,class:"preview-switch"},ce=q({__name:"MatchedImageGrid",props:{tabIdx:{},paneIdx:{},selectedTagIds:{},id:{}},setup(V){const u=V,p=ae(c=>ne(u.selectedTagIds,c)),{queue:D,images:i,onContextMenuClickU:g,stackViewEl:F,previewIdx:n,previewing:f,onPreviewVisibleChange:z,previewImgMove:v,canPreview:I,itemSize:w,gridItems:$,showGenInfo:o,imageGenInfo:k,q:B,multiSelectedIdxs:G,onFileItemClick:N,scroller:x,showMenuIdx:d,onFileDragStart:R,onFileDragEnd:E,cellWidth:P,onScroll:C}=oe(p);return Q(()=>u.selectedTagIds,async()=>{await p.reset(),await W(),x.value.scrollToItem(0),C()},{immediate:!0}),(c,t)=>{const U=J,A=K,L=ie;return r(),h("div",{class:"container",ref_key:"stackViewEl",ref:F},[l(L,{size:"large",spinning:!e(D).isIdle},{default:a(()=>[l(A,{visible:e(o),"onUpdate:visible":t[1]||(t[1]=s=>y(o)?o.value=s:null),width:"70vw","mask-closable":"",onOk:t[2]||(t[2]=s=>o.value=!1)},{cancelText:a(()=>[]),default:a(()=>[l(U,{active:"",loading:!e(B).isIdle},{default:a(()=>[b("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:t[0]||(t[0]=s=>e(X)(e(k)))},[b("div",re,S(c.$t("doubleClickToCopy")),1),j(" "+S(e(k)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(i)?(r(),M(e(se),{key:0,ref_key:"scroller",ref:x,class:"file-list",items:e(i),"item-size":e(w).first,"key-field":"fullpath","item-secondary-size":e(w).second,gridItems:e($),onScroll:e(C)},{default:a(({item:s,index:_})=>[l(le,{idx:_,file:s,"cell-width":e(P),"show-menu-idx":e(d),"onUpdate:showMenuIdx":t[3]||(t[3]=O=>y(d)?d.value=O:null),onDragstart:e(R),onDragend:e(E),onFileItemClick:e(N),"full-screen-preview-image-url":e(i)[e(n)]?e(H)(e(i)[e(n)]):"",selected:e(G).includes(_),onContextMenuClick:e(g),onPreviewVisibleChange:e(z)},null,8,["idx","file","cell-width","show-menu-idx","onDragstart","onDragend","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):m("",!0),e(f)?(r(),h("div",de,[l(e(Z),{onClick:t[4]||(t[4]=s=>e(v)("prev")),class:T({disable:!e(I)("prev")})},null,8,["class"]),l(e(ee),{onClick:t[5]||(t[5]=s=>e(v)("next")),class:T({disable:!e(I)("next")})},null,8,["class"])])):m("",!0)]),_:1},8,["spinning"]),e(f)&&e(i)&&e(i)[e(n)]?(r(),M(te,{key:0,file:e(i)[e(n)],idx:e(n),onContextMenuClick:e(g)},null,8,["file","idx","onContextMenuClick"])):m("",!0)],512)}}});const Ie=Y(ce,[["__scopeId","data-v-6cc08968"]]);export{Ie as default};
