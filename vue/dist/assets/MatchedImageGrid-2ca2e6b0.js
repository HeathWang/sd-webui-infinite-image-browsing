import{d as se,s as ne,a2 as oe,r as ie,o as u,k as I,c as s,B as e,A as n,E as R,l as d,G as ae,t as a,m as p,z as V,O as de,p as k,Q as z,T as re,U as ce,W as B,al as ue,am as me,bC as pe,q as ge}from"./index-3a8855dc.js";import{L as ve,R as fe,f as Ie,M as ke,S as _e}from"./MultiSelectKeep-20a7516f.js";import{g as Ce,h as he,F as we}from"./FileItem-5bdea8c1.js";import{c as Se,u as xe}from"./hook-67e14a72.js";import{o as be}from"./functionalCallableComp-6e95066f.js";import"./index-886cbaab.js";import"./index-e8853982.js";const Me=r=>(ue("data-v-183ddb50"),r=r(),me(),r),ye={class:"hint"},Ae={class:"action-bar"},Te=Me(()=>d("div",{style:{padding:"16px 0 512px"}},null,-1)),$e={key:1},Fe={class:"no-res-hint"},Re={class:"hint"},Ve={key:2,class:"preview-switch"},ze=se({__name:"MatchedImageGrid",props:{tabIdx:{},paneIdx:{},selectedTagIds:{},id:{}},setup(r){const _=r,g=Se(l=>pe(_.selectedTagIds,l)),{queue:D,images:i,onContextMenuClickU:C,stackViewEl:G,previewIdx:c,previewing:h,onPreviewVisibleChange:E,previewImgMove:w,canPreview:S,itemSize:x,gridItems:N,showGenInfo:m,imageGenInfo:b,q:U,multiSelectedIdxs:v,onFileItemClick:J,scroller:M,showMenuIdx:f,onFileDragStart:L,onFileDragEnd:O,cellWidth:P,onScroll:y,saveAllFileAsJson:q,saveLoadedFileAsJson:K}=xe(g);ne(()=>_.selectedTagIds,async()=>{var l;await g.reset(),await oe(),(l=M.value)==null||l.scrollToItem(0),y()},{immediate:!0});const Q=ie(),{onClearAllSelected:W,onSelectAll:j,onReverseSelect:H}=Ce();return(l,t)=>{const X=ke,Y=re,Z=ce,A=B,ee=B,te=_e;return u(),I("div",{class:"container",ref_key:"stackViewEl",ref:G},[s(X,{show:!!e(v).length||e(Q).keepMultiSelect,onClearAllSelected:e(W),onSelectAll:e(j),onReverseSelect:e(H)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),s(te,{size:"large",spinning:!e(D).isIdle},{default:n(()=>{var T,$;return[s(Z,{visible:e(m),"onUpdate:visible":t[1]||(t[1]=o=>R(m)?m.value=o:null),width:"70vw","mask-closable":"",onOk:t[2]||(t[2]=o=>m.value=!1)},{cancelText:n(()=>[]),default:n(()=>[s(Y,{active:"",loading:!e(U).isIdle},{default:n(()=>[d("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:t[0]||(t[0]=o=>e(ae)(e(b)))},[d("div",ye,a(l.$t("doubleClickToCopy")),1),p(" "+a(e(b)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),d("div",Ae,[s(A,{onClick:e(K)},{default:n(()=>[p(a(l.$t("saveLoadedImageAsJson")),1)]),_:1},8,["onClick"]),s(A,{onClick:e(q)},{default:n(()=>[p(a(l.$t("saveAllAsJson")),1)]),_:1},8,["onClick"])]),(T=e(i))!=null&&T.length?(u(),V(e(he),{key:0,ref_key:"scroller",ref:M,class:"file-list",items:e(i),"item-size":e(x).first,"key-field":"fullpath","item-secondary-size":e(x).second,gridItems:e(N),onScroll:e(y)},{after:n(()=>[Te]),default:n(({item:o,index:F})=>[s(we,{idx:F,file:o,"cell-width":e(P),"show-menu-idx":e(f),"onUpdate:showMenuIdx":t[3]||(t[3]=le=>R(f)?f.value=le:null),onDragstart:e(L),onDragend:e(O),onFileItemClick:e(J),"full-screen-preview-image-url":e(i)[e(c)]?e(de)(e(i)[e(c)]):"",selected:e(v).includes(F),onContextMenuClick:e(C),onPreviewVisibleChange:e(E),"is-selected-mutil-files":e(v).length>1},null,8,["idx","file","cell-width","show-menu-idx","onDragstart","onDragend","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange","is-selected-mutil-files"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):e(g).load&&l.selectedTagIds.and_tags.length===1&&!(($=l.selectedTagIds.folder_paths_str)!=null&&$.trim())?(u(),I("div",$e,[d("div",Fe,[d("p",Re,a(l.$t("tagSearchNoResultsMessage")),1),s(ee,{onClick:t[4]||(t[4]=o=>e(be)()),type:"primary"},{default:n(()=>[p(a(l.$t("rebuildImageIndex")),1)]),_:1})])])):k("",!0),e(h)?(u(),I("div",Ve,[s(e(ve),{onClick:t[5]||(t[5]=o=>e(w)("prev")),class:z({disable:!e(S)("prev")})},null,8,["class"]),s(e(fe),{onClick:t[6]||(t[6]=o=>e(w)("next")),class:z({disable:!e(S)("next")})},null,8,["class"])])):k("",!0)]}),_:1},8,["spinning"]),e(h)&&e(i)&&e(i)[e(c)]?(u(),V(Ie,{key:0,file:e(i)[e(c)],idx:e(c),onContextMenuClick:e(C)},null,8,["file","idx","onContextMenuClick"])):k("",!0)],512)}}});const Le=ge(ze,[["__scopeId","data-v-183ddb50"]]);export{Le as default};
