import{d as v,c4 as C,bP as I,o as l,y as _,p as f,c,n as r,x as h,v as d,r as e,m as F,K as x,c5 as z,c6 as B,U as $,W as R}from"./index-5f58fa79.js";import{u as S,b as E,k as V,F as A,g as T}from"./FileItem-7a24456f.js";import"./functionalCallableComp-9a9cbacb.js";import"./db-5a33988f.js";import"./index-6593cfe3.js";/* empty css              */const U={class:"actions-panel actions"},L={key:0,class:"file-list"},N={class:"hint"},H=v({__name:"batchDownload",props:{tabIdx:{},paneIdx:{},id:{}},setup(W){const{stackViewEl:w}=S().toRefs(),{itemSize:p,gridItems:k,cellWidth:y}=E(),i=V(),{selectdFiles:n}=C(i),m=I(),D=async t=>{const s=z(t);s&&i.addFiles(s.nodes)},b=async()=>{m.pushAction(async()=>{const t=await B.value.post("/zip",{paths:n.value.map(a=>a.fullpath)},{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=s,o.setAttribute("download",`iib_${new Date().toLocaleString()}.zip`),document.body.appendChild(o),o.click()})},g=t=>{n.value.splice(t,1)};return(t,s)=>{const o=$;return l(),_("div",{class:"container",ref_key:"stackViewEl",ref:w,onDrop:D},[f("div",U,[c(o,{onClick:s[0]||(s[0]=a=>e(i).selectdFiles=[])},{default:r(()=>[h(d(t.$t("clear")),1)]),_:1}),c(o,{onClick:b,type:"primary",loading:!e(m).isIdle},{default:r(()=>[h(d(t.$t("zipDownload")),1)]),_:1},8,["loading"])]),e(n).length?(l(),F(e(T),{key:1,ref:"scroller",class:"file-list",items:e(n).slice(),"item-size":e(p).first,"key-field":"fullpath","item-secondary-size":e(p).second,gridItems:e(k)},{default:r(({item:a,index:u})=>[c(A,{idx:u,file:a,"cell-width":e(y),"enable-close-icon":"",onCloseIconClick:j=>g(u),"full-screen-preview-image-url":e(x)(a),"enable-right-click-menu":!1},null,8,["idx","file","cell-width","onCloseIconClick","full-screen-preview-image-url"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):(l(),_("div",L,[f("p",N,d(t.$t("batchDownloaDDragAndDropHint")),1)]))],544)}}});const J=R(H,[["__scopeId","data-v-16c4c9dd"]]);export{J as default};
