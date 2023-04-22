import{B as s}from"./button-3e5cfde3.js";import{d as g,u as O,G as C,_ as u,a as m,a3 as y,D as h}from"./index-6eb64f08.js";import{_ as E,a as _}from"./styleChecker-572b0d40.js";var z=E(function e(t){_(this,e),this.error=new Error("unreachable case: ".concat(JSON.stringify(t)))}),P=function(){return{prefixCls:String,size:{type:String}}};const l=g({compatConfig:{MODE:3},name:"AButtonGroup",props:P(),setup:function(t,n){var a=n.slots,o=O("btn-group",t),i=o.prefixCls,v=o.direction,b=C(function(){var r,p=t.size,c="";switch(p){case"large":c="lg";break;case"small":c="sm";break;case"middle":case void 0:break;default:console.warn(new z(p).error)}return r={},u(r,"".concat(i.value),!0),u(r,"".concat(i.value,"-").concat(c),c),u(r,"".concat(i.value,"-rtl"),v.value==="rtl"),r});return function(){var r;return m("div",{class:b.value},[y((r=a.default)===null||r===void 0?void 0:r.call(a))])}}});s.Group=l;s.install=function(e){return e.component(s.name,s),e.component(l.name,l),e};var w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};const x=w;function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},a=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),a.forEach(function(o){S(e,o,n[o])})}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(t,n){var a=d({},t,n.attrs);return m(h,d({},a,{icon:x}),null)};f.displayName="EyeOutlined";f.inheritAttrs=!1;const $=f;export{$ as E};