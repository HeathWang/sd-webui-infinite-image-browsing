import{d as v,c5 as C,bP as I,o as l,y as _,p as f,c,n as r,x as h,v as d,r as e,m as F,L as x,c6 as z,c7 as B,V as $,X as R}from"./index-e958a380.js";import{u as S,b as V,k as E,F as A,g as L}from"./FileItem-caf7e020.js";import"./functionalCallableComp-dedd394b.js";import"./db-1786337f.js";import"./index-75af9b9c.js";/* empty css              */const T={class:"actions-panel actions"},N={key:0,class:"file-list"},U={class:"hint"},H=v({__name:"batchDownload",props:{tabIdx:{},paneIdx:{},id:{}},setup(j){const{stackViewEl:w}=S().toRefs(),{itemSize:p,gridItems:k,cellWidth:b}=V(),i=E(),{selectdFiles:n}=C(i),m=I(),y=async t=>{const s=z(t);s&&i.addFiles(s.nodes)},D=async()=>{m.pushAction(async()=>{const t=await B.value.post("/zip",{paths:n.value.map(o=>o.fullpath)},{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=s,a.setAttribute("download",`iib_${new Date().toLocaleString()}.zip`),document.body.appendChild(a),a.click()})},g=t=>{n.value.splice(t,1)};return(t,s)=>{const a=$;return l(),_("div",{class:"container",ref_key:"stackViewEl",ref:w,onDrop:y},[f("div",T,[c(a,{onClick:s[0]||(s[0]=o=>e(i).selectdFiles=[])},{default:r(()=>[h(d(t.$t("clear")),1)]),_:1}),c(a,{onClick:D,type:"primary",loading:!e(m).isIdle},{default:r(()=>[h(d(t.$t("zipDownload")),1)]),_:1},8,["loading"])]),e(n).length?(l(),F(e(L),{key:1,ref:"scroller",class:"file-list",items:e(n).slice(),"item-size":e(p).first,"key-field":"fullpath","item-secondary-size":e(p).second,gridItems:e(k)},{default:r(({item:o,index:u})=>[c(A,{idx:u,file:o,"cell-width":e(b),"enable-close-icon":"",onCloseIconClick:q=>g(u),"full-screen-preview-image-url":e(x)(o),"enable-right-click-menu":!1},null,8,["idx","file","cell-width","onCloseIconClick","full-screen-preview-image-url"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):(l(),_("div",N,[f("p",U,d(t.$t("batchDownloaDDragAndDropHint")),1)]))],544)}}});const J=R(H,[["__scopeId","data-v-aab31da2"]]);export{J as default};
