import{w as G,t as Ee,d as U,u as ie,r as T,g as F,c as Ne,_ as O,a as o,C as De,i as Pe,b as Fe,e as Be,f as Ue,v as je,h as $,T as He,P as x,j as Ve,I as ze,k as Qe,E as Je,l as qe,m as We,n as le,o as Ze,p as Ge,q as ue,s as ce,S as Ye,x as Xe,y as fe,z as Ke,A as de,B as ea,D as aa,F as ta,G as B,H as na,J as oa,K as E,L as j,M as A,N as L,O as te,Q as ne,R as H,U as V,V as z,W as ra,X as sa,Y as ia,Z as la,$ as ua,a0 as ca}from"./index-1e01706b.js";import{b as fa,a as da,t as ve,R as va,C as pa}from"./index-4e356a26.js";import{I as ma}from"./index-f051364f.js";import{u as ga}from"./useTaskListStore-48f1766b.js";import{T as _a}from"./task-a1abac1c.js";import{B as Ca}from"./button-0e64deba.js";var ya={success:Ve,info:ze,error:Qe,warning:Je},ba={success:qe,info:We,error:le,warning:Ze},Sa=Ee("success","info","warning","error"),$a=function(){return{type:x.oneOf(Sa),closable:{type:Boolean,default:void 0},closeText:x.any,message:x.any,description:x.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:x.any,closeIcon:x.any,onClose:Function}},xa=U({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:$a(),setup:function(e,n){var t=n.slots,f=n.emit,u=n.attrs,c=n.expose,y=ie("alert",e),i=y.prefixCls,g=y.direction,m=T(!1),_=T(!1),p=T(),s=function(v){v.preventDefault();var C=p.value;C.style.height="".concat(C.offsetHeight,"px"),C.style.height="".concat(C.offsetHeight,"px"),m.value=!0,f("close",v)},l=function(){var v;m.value=!1,_.value=!0,(v=e.afterClose)===null||v===void 0||v.call(e)};c({animationEnd:l});var r=T({});return function(){var d,v,C=e.banner,h=e.closeIcon,w=h===void 0?(d=t.closeIcon)===null||d===void 0?void 0:d.call(t):h,R=e.closable,k=e.type,b=e.showIcon,M=F(t,e,"closeText"),N=F(t,e,"description"),ee=F(t,e,"message"),D=F(t,e,"icon");b=C&&b===void 0?!0:b,k=C&&k===void 0?"warning":k||"info";var Oe=(N?ba:ya)[k]||null;M&&(R=!0);var S=i.value,Te=Ne(S,(v={},O(v,"".concat(S,"-").concat(k),!0),O(v,"".concat(S,"-closing"),m.value),O(v,"".concat(S,"-with-description"),!!N),O(v,"".concat(S,"-no-icon"),!b),O(v,"".concat(S,"-banner"),!!C),O(v,"".concat(S,"-closable"),R),O(v,"".concat(S,"-rtl"),g.value==="rtl"),v)),Ae=R?o("button",{type:"button",onClick:s,class:"".concat(S,"-close-icon"),tabindex:0},[M?o("span",{class:"".concat(S,"-close-text")},[M]):w===void 0?o(De,null,null):w]):null,Le=D&&(Pe(D)?Fe(D,{class:"".concat(S,"-icon")}):o("span",{class:"".concat(S,"-icon")},[D]))||o(Oe,{class:"".concat(S,"-icon")},null),Me=Be("".concat(S,"-motion"),{appear:!1,css:!0,onAfterLeave:l,onBeforeLeave:function(P){P.style.maxHeight="".concat(P.offsetHeight,"px")},onLeave:function(P){P.style.maxHeight="0px"}});return _.value?null:o(He,Me,{default:function(){return[Ue(o("div",$($({role:"alert"},u),{},{style:[u.style,r.value],class:[u.class,Te],"data-show":!m.value,ref:p}),[b?Le:null,o("div",{class:"".concat(S,"-content")},[ee?o("div",{class:"".concat(S,"-message")},[ee]):null,N?o("div",{class:"".concat(S,"-description")},[N]):null]),Ae]),[[je,!m.value]])]}})}}});const ha=G(xa);var wa=9007199254740991,Ra=Math.floor;function oe(a,e){var n="";if(!a||e<1||e>wa)return n;do e%2&&(n+=a),e=Ra(e/2),e&&(a+=a);while(e);return n}function ka(a,e,n){var t=a.length;return n=n===void 0?t:n,!e&&n>=t?a:fa(a,e,n)}var Ia="\\ud800-\\udfff",Oa="\\u0300-\\u036f",Ta="\\ufe20-\\ufe2f",Aa="\\u20d0-\\u20ff",La=Oa+Ta+Aa,Ma="\\ufe0e\\ufe0f",Ea="\\u200d",Na=RegExp("["+Ea+Ia+La+Ma+"]");function Y(a){return Na.test(a)}var Da=da("length");const Pa=Da;var pe="\\ud800-\\udfff",Fa="\\u0300-\\u036f",Ba="\\ufe20-\\ufe2f",Ua="\\u20d0-\\u20ff",ja=Fa+Ba+Ua,Ha="\\ufe0e\\ufe0f",Va="["+pe+"]",J="["+ja+"]",q="\\ud83c[\\udffb-\\udfff]",za="(?:"+J+"|"+q+")",me="[^"+pe+"]",ge="(?:\\ud83c[\\udde6-\\uddff]){2}",_e="[\\ud800-\\udbff][\\udc00-\\udfff]",Qa="\\u200d",Ce=za+"?",ye="["+Ha+"]?",Ja="(?:"+Qa+"(?:"+[me,ge,_e].join("|")+")"+ye+Ce+")*",qa=ye+Ce+Ja,Wa="(?:"+[me+J+"?",J,ge,_e,Va].join("|")+")",re=RegExp(q+"(?="+q+")|"+Wa+qa,"g");function Za(a){for(var e=re.lastIndex=0;re.test(a);)++e;return e}function X(a){return Y(a)?Za(a):Pa(a)}function Ga(a){return a.split("")}var be="\\ud800-\\udfff",Ya="\\u0300-\\u036f",Xa="\\ufe20-\\ufe2f",Ka="\\u20d0-\\u20ff",et=Ya+Xa+Ka,at="\\ufe0e\\ufe0f",tt="["+be+"]",W="["+et+"]",Z="\\ud83c[\\udffb-\\udfff]",nt="(?:"+W+"|"+Z+")",Se="[^"+be+"]",$e="(?:\\ud83c[\\udde6-\\uddff]){2}",xe="[\\ud800-\\udbff][\\udc00-\\udfff]",ot="\\u200d",he=nt+"?",we="["+at+"]?",rt="(?:"+ot+"(?:"+[Se,$e,xe].join("|")+")"+we+he+")*",st=we+he+rt,it="(?:"+[Se+W+"?",W,$e,xe,tt].join("|")+")",lt=RegExp(Z+"(?="+Z+")|"+it+st,"g");function ut(a){return a.match(lt)||[]}function ct(a){return Y(a)?ut(a):Ga(a)}var ft=Math.ceil;function Re(a,e){e=e===void 0?" ":Ge(e);var n=e.length;if(n<2)return n?oe(e,a):e;var t=oe(e,ft(a/X(e)));return Y(e)?ka(ct(t),0,a).join(""):t.slice(0,a)}function dt(a,e,n){a=ue(a),e=ve(e);var t=e?X(a):0;return e&&t<e?Re(e-t,n)+a:a}const vt=G(va),pt=G(pa);function mt(a,e,n){a=ue(a),e=ve(e);var t=e?X(a):0;return e&&t<e?a+Re(e-t,n):a}var ke=function(e){var n=e.value,t=e.formatter,f=e.precision,u=e.decimalSeparator,c=e.groupSeparator,y=c===void 0?"":c,i=e.prefixCls,g;if(typeof t=="function")g=t({value:n});else{var m=String(n),_=m.match(/^(-?)(\d*)(\.(\d+))?$/);if(!_)g=m;else{var p=_[1],s=_[2]||"0",l=_[4]||"";s=s.replace(/\B(?=(\d{3})+(?!\d))/g,y),typeof f=="number"&&(l=mt(l,f,"0").slice(0,f)),l&&(l="".concat(u).concat(l)),g=[o("span",{key:"int",class:"".concat(i,"-content-value-int")},[p,s]),l&&o("span",{key:"decimal",class:"".concat(i,"-content-value-decimal")},[l])]}}return o("span",{class:"".concat(i,"-content-value")},[g])};ke.displayName="StatisticNumber";const gt=ke;var Ie=function(){return{prefixCls:String,decimalSeparator:String,groupSeparator:String,format:String,value:{type:[String,Number,Object]},valueStyle:{type:Object,default:void 0},valueRender:x.any,formatter:x.any,precision:Number,prefix:x.any,suffix:x.any,title:x.any,loading:{type:Boolean,default:void 0}}};const I=U({compatConfig:{MODE:3},name:"AStatistic",props:ce(Ie(),{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(e,n){var t=n.slots,f=ie("statistic",e),u=f.prefixCls,c=f.direction;return function(){var y,i,g,m,_,p,s,l=e.value,r=l===void 0?0:l,d=e.valueStyle,v=e.valueRender,C=u.value,h=(y=e.title)!==null&&y!==void 0?y:(i=t.title)===null||i===void 0?void 0:i.call(t),w=(g=e.prefix)!==null&&g!==void 0?g:(m=t.prefix)===null||m===void 0?void 0:m.call(t),R=(_=e.suffix)!==null&&_!==void 0?_:(p=t.suffix)===null||p===void 0?void 0:p.call(t),k=(s=e.formatter)!==null&&s!==void 0?s:t.formatter,b=o(gt,$({"data-for-update":Date.now()},$($({},e),{},{prefixCls:C,value:r,formatter:k})),null);return v&&(b=v(b)),o("div",{class:[C,O({},"".concat(C,"-rtl"),c.value==="rtl")]},[h&&o("div",{class:"".concat(C,"-title")},[h]),o(Ye,{paragraph:!1,loading:e.loading},{default:function(){return[o("div",{style:d,class:"".concat(C,"-content")},[w&&o("span",{class:"".concat(C,"-content-prefix")},[w]),b,R&&o("span",{class:"".concat(C,"-content-suffix")},[R])])]}})])}}});var _t=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Ct(a,e){var n=a,t=/\[[^\]]*]/g,f=(e.match(t)||[]).map(function(i){return i.slice(1,-1)}),u=e.replace(t,"[]"),c=_t.reduce(function(i,g){var m=Xe(g,2),_=m[0],p=m[1];if(i.indexOf(_)!==-1){var s=Math.floor(n/p);return n-=s*p,i.replace(new RegExp("".concat(_,"+"),"g"),function(l){var r=l.length;return dt(s.toString(),r,"0")})}return i},u),y=0;return c.replace(t,function(){var i=f[y];return y+=1,i})}function yt(a,e){var n=e.format,t=n===void 0?"":n,f=new Date(a).getTime(),u=Date.now(),c=Math.max(f-u,0);return Ct(c,t)}var bt=1e3/30;function Q(a){return new Date(a).getTime()}var St=function(){return $($({},Ie()),{},{value:[Number,String,Object],format:String,onFinish:Function,onChange:Function})};const $t=U({compatConfig:{MODE:3},name:"AStatisticCountdown",props:ce(St(),{format:"HH:mm:ss"}),setup:function(e,n){var t=n.emit,f=n.slots,u=T(),c=T(),y=function(){var s=e.value,l=Q(s);l>=Date.now()?i():g()},i=function(){if(!u.value){var s=Q(e.value);u.value=setInterval(function(){c.value.$forceUpdate(),s>Date.now()&&t("change",s-Date.now()),y()},bt)}},g=function(){var s=e.value;if(u.value){clearInterval(u.value),u.value=void 0;var l=Q(s);l<Date.now()&&t("finish")}},m=function(s){var l=s.value,r=s.config,d=e.format;return yt(l,$($({},r),{},{format:d}))},_=function(s){return s};return fe(function(){y()}),Ke(function(){y()}),de(function(){g()}),function(){var p=e.value;return o(I,$({ref:c},$($({},ea(e,["onFinish","onChange"])),{},{value:p,valueRender:_,formatter:m})),f)}}});I.Countdown=$t;I.install=function(a){return a.component(I.name,I),a.component(I.Countdown.name,I.Countdown),a};I.Countdown;var xt={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"}}]},name:"loading-3-quarters",theme:"outlined"};const ht=xt;function se(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},t=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(f){return Object.getOwnPropertyDescriptor(n,f).enumerable}))),t.forEach(function(f){wt(a,f,n[f])})}return a}function wt(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var K=function(e,n){var t=se({},e,n.attrs);return o(aa,se({},t,{icon:ht}),null)};K.displayName="Loading3QuartersOutlined";K.inheritAttrs=!1;const Rt=K,kt={class:"container"},It={class:"log-container"},Ot={class:"scroll-container"},Tt=["onClick"],At=U({__name:"autoUpload",props:{tabIdx:null,paneIdx:null},emits:["runningChange"],setup(a,{emit:e}){const n=a,t=ta(),f=ga(),u=T([]),c=T(),y=B(()=>!!(c.value||u.value.length));na(()=>e("runningChange",y.value));const i=oa(new Map),g=B(()=>Array.from(i.values())),m=B(()=>g.value.reduce((r,d)=>r+d.n_success_files,0)),_=B(()=>g.value.reduce((r,d)=>r+d.n_failed_files,0));fe(()=>t.openBaiduYunIfNotLogged(n.tabIdx,n.paneIdx)),de(()=>{var r;(r=c.value)==null||r.clearTask()});const p=()=>_a.run({action:async()=>{const r=await la(t.autoUploadRecvDir);if(r.tick_info){const d=r.tick_info;i.set(d.task_summary.id,d.task_summary),f.taskLogMap.set(d.task_summary.id,d.tasks)}return u.value=r.pending_files,await ua(1e4*Math.random()),r},pollInterval:3e4}),s=async()=>{c.value?(c.value.clearTask(),c.value=void 0,u.value=[]):c.value=p()},l=r=>{t.openLogDetailInRight(n.tabIdx,r)};return(r,d)=>{const v=ma,C=Ca,h=I,w=pt,R=vt,k=ha;return E(),j("div",kt,[o(v,{value:A(t).autoUploadRecvDir,"onUpdate:value":d[0]||(d[0]=b=>A(t).autoUploadRecvDir=b)},null,8,["value"]),o(C,{onClick:s},{default:L(()=>[c.value?(E(),te(A(Rt),{key:0,spin:""})):ne("",!0),H(" "+V(c.value?r.$t("start"):r.$t("pause")),1)]),_:1}),o(R,null,{default:L(()=>[o(w,{span:12},{default:L(()=>[o(h,{title:r.$t("waitingUploadCount"),value:u.value.length,style:{"margin-right":"50px"}},null,8,["title","value"])]),_:1}),o(w,{span:12},{default:L(()=>[o(h,{title:r.$t("uploadFailureCount"),value:A(_)},null,8,["title","value"])]),_:1})]),_:1}),o(R,null,{default:L(()=>[o(w,{span:12},{default:L(()=>[o(h,{title:r.$t("completedCount"),value:A(m),style:{"margin-right":"50px"}},null,8,["title","value"])]),_:1})]),_:1}),z("div",It,[z("h2",null,V(r.$t("realTimeLog")),1),H(),o(k,{message:r.$t("tip"),description:r.$t("clickToViewLogs"),type:"info","show-icon":""},null,8,["message","description"]),z("ul",Ot,[(E(!0),j(ra,null,sa(i.values(),b=>(E(),j("li",{key:b.id,class:ia({err:b.n_failed_files}),onClick:M=>l(b.id)},[b.n_failed_files?(E(),te(A(le),{key:0})):ne("",!0),H(" "+V(r.$t("startedAt")+b.start_time),1)],10,Tt))),128))])])])}}});const Ft=ca(At,[["__scopeId","data-v-e8df9a1a"]]);export{Ft as default};