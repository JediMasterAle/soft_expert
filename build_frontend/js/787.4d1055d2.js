"use strict";(globalThis["webpackChunkakc_solutions"]=globalThis["webpackChunkakc_solutions"]||[]).push([[787],{8236:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(5474),o=a(4434);function n(e){const t=async(t=null,a=null)=>{try{const o={};t&&(o.page=t),a&&Object.assign(o,a);const{data:n}=await l.api.get(e+"/read.php",{params:o});return n}catch(o){return{error:i(o)}}},a=async t=>{try{const{data:a}=await l.api.get(`${e}/read.php?id=${t}`);return a}catch(a){return{error:i(a)}}},n=async t=>{t=u(t);try{const{data:a}=await l.api.post(e+"/store.php",t);return o.Z.create({color:"positive",position:"top-right",message:a.success,icon:"done"}),a}catch(a){return{error:i(a)}}},s=async t=>{t=u(t);try{const{data:a}=await l.api.post(e+"/update.php",t);return o.Z.create({color:"positive",position:"top-right",message:a.success,icon:"done"}),a}catch(a){return{error:i(a)}}},r=async t=>{try{const{data:a}=await l.api["delete"](`${e}/delete.php?id=${t}`);return o.Z.create({color:"positive",position:"top-right",message:a.success,icon:"done"}),a}catch(a){return{error:i(a)}}};return{list:t,post:n,update:s,remove:r,getById:a}}function i(e){const t=e.response.status,a=e.response.data.errors,l=e.response.data.message;if(404==t&&o.Z.create({color:"negative",position:"top-right",message:"Falha na solicitação.",icon:"report_problem"}),a)for(let n=0;n<Object.keys(a).length;n++){const e=Object.keys(a)[n],t=a[e];if("string"===typeof t)o.Z.create({color:"negative",position:"top-right",message:t,icon:"report_problem"});else for(let a=0;a<t.length;a++)o.Z.create({color:"negative",position:"top-right",message:t[a],icon:"report_problem"})}else if(l&&"Unauthenticated."==l)return}function u(e){const t=new FormData;for(const a in e)Array.isArray(e[a])?e[a].forEach((e=>t.append(a,e))):t.append(a,e[a]);return t}l.api.defaults.headers.common.Authorization=`Bearer ${localStorage.getItem("token")}`,l.api.defaults.baseURL="http://localhost:8000/"},5625:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(8236);function o(){const{list:e,post:t,update:a,remove:o,getById:n}=(0,l.Z)("product");return{list:e,post:t,update:a,remove:o,getById:n}}},3759:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(8236);function o(){const{list:e,post:t,update:a,remove:o,getById:n}=(0,l.Z)("type");return{list:e,post:t,update:a,remove:o,getById:n}}},8366:(e,t,a)=>{a.d(t,{Z:()=>q});var l=a(3673),o=a(1959),n=a(8880),i=a(2323);const u={class:"text-h6"},s={key:0},r={key:1},p={key:2},d={__name:"GenericModalInputs",props:{input:{type:Object,required:!0},loading:{type:Boolean,required:!0},title:{type:String,required:!0},is_show:{type:Boolean,required:!0},action:{type:String,required:!0}},emits:["inputs_data","close_modal"],setup(e,{emit:t}){const a=e,d=(0,o.iH)([]);function c(){d.value&&d.value.types_id&&d.value.types_id.value&&(d.value.types_id=d.value.types_id.value),t("inputs_data",d.value),m(!0)}function m(e=!1){e||(a.input.forEach((e=>{d.value[e.name]=e.value})),t("close_modal",a.action))}a.input.forEach((e=>{d.value[e.name]=e.value}));const v=(0,l.Fl)({get:()=>a.is_show,set:e=>{m()}});return(t,m)=>{const y=(0,l.up)("q-card-section"),g=(0,l.up)("q-input"),b=(0,l.up)("q-select"),f=(0,l.up)("q-btn"),_=(0,l.up)("q-card-actions"),w=(0,l.up)("q-card"),h=(0,l.up)("q-dialog"),Z=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(h,{modelValue:(0,o.SU)(v),"onUpdate:modelValue":m[1]||(m[1]=e=>(0,o.dq)(v)?v.value=e:null)},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{style:{width:"700px","max-width":"80vw"}},{default:(0,l.w5)((()=>[(0,l._)("form",{onSubmit:m[0]||(m[0]=(0,n.iM)((e=>c()),["prevent"]))},[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l._)("div",u,(0,i.zw)(e.title),1)])),_:1}),(0,l.Wm)(y,{class:"q-pt-none"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.input,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},["date"==e.type?((0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(g,{outlined:"",label:e.label,type:"date",class:"q-my-sm",modelValue:d.value[e.name],"onUpdate:modelValue":t=>d.value[e.name]=t},null,8,["label","modelValue","onUpdate:modelValue"])])):"text"==e.type?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(g,{outlined:"",label:e.label,type:"text",class:"q-my-sm",modelValue:d.value[e.name],"onUpdate:modelValue":t=>d.value[e.name]=t},null,8,["label","modelValue","onUpdate:modelValue"])])):"select"==e.type?((0,l.wg)(),(0,l.iD)("div",p,[(0,l.Wm)(b,{outlined:"",label:e.label,class:"q-my-sm",modelValue:d.value[e.name],"onUpdate:modelValue":t=>d.value[e.name]=t,options:e.options,"option-label":"label","emit-value":"","map-options":""},null,8,["label","modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0)])))),128))])),_:1}),(0,l.Wm)(_,{align:"right"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{flat:"",label:"OK",color:"primary",type:"submit"}),(0,l.wy)((0,l.Wm)(f,{flat:"",label:"Cancelar",color:"negative"},null,512),[[Z]])])),_:1})],32)])),_:1})])),_:1},8,["modelValue"])}}};var c=a(6778),m=a(151),v=a(5589),y=a(4842),g=a(7637),b=a(9367),f=a(8240),_=a(677),w=a(7518),h=a.n(w);const Z=d,q=Z;h()(d,"components",{QDialog:c.Z,QCard:m.Z,QCardSection:v.Z,QInput:y.Z,QSelect:g.Z,QCardActions:b.Z,QBtn:f.Z}),h()(d,"directives",{ClosePopup:_.Z})},7706:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(3673),o=a(2323),n=a(8880),i=a(1959);const u={__name:"GenericTable",props:{columns:{type:Object,required:!0},rows:{type:Object,required:!0},loading:{type:Boolean,required:!0}},emits:["change_page","line_clicked","delete_item"],setup(e,{emit:t}){const a=e,u=(0,i.iH)("");function s(e){if(null==e||""==e)return;let t=e.split("-");return`${t[2]}/${t[1]}/${t[0]}`}function r(e){const t=new Date(e),a=t.toLocaleDateString("pt-BR"),l=t.toLocaleTimeString("pt-BR");return`${a} ${l}`}function p(e,a){t("line_clicked",a.id)}function d(e){t("delete_item",e)}return(e,t)=>{const i=(0,l.up)("q-td"),c=(0,l.up)("q-btn"),m=(0,l.up)("q-icon"),v=(0,l.up)("q-input"),y=(0,l.up)("q-table");return(0,l.wg)(),(0,l.j4)(y,{loading:a.loading,class:"my-sticky-header-table",rows:a.rows,columns:a.columns,"row-key":"name",flat:"",bordered:"",onRowClick:p,filter:u.value},{"body-cell-date":(0,l.w5)((e=>[(0,l.Wm)(i,{props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s(e.value)),1)])),_:2},1032,["props"])])),"body-cell-date_time":(0,l.w5)((e=>[(0,l.Wm)(i,{props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(r(e.value)),1)])),_:2},1032,["props"])])),"body-cell-delete_id":(0,l.w5)((e=>[(0,l.Wm)(i,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{icon:"delete",flat:"",round:"",color:"negative",onClick:(0,n.iM)((t=>d(e.value)),["stop"])},null,8,["onClick"])])),_:2},1032,["props"])])),"top-right":(0,l.w5)((()=>[(0,l.Wm)(v,{borderless:"",dense:"",debounce:"300",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),placeholder:"Buscar"},{append:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["loading","rows","columns","filter"])}}};var s=a(6429),r=a(3884),p=a(8240),d=a(4842),c=a(4554),m=a(7518),v=a.n(m);const y=u,g=y;v()(u,"components",{QTable:s.Z,QTd:r.Z,QBtn:p.Z,QInput:d.Z,QIcon:c.Z})},3787:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(3673),o=a(1959),n=a(5625),i=a(3759),u=a(7706),s=a(8366);const r=(0,l._)("h1",{class:"text-center text-h3"},"Produtos",-1),p={class:"q-ma-md"},d={class:"q-ma-md"},c={__name:"Product",setup(e){const{list:t}=(0,i.Z)(),a=(0,o.iH)([]),c=async(e=0,l={})=>{let o=await t(0,null),n=JSON.parse(o.success);a.value=n.map((e=>({value:e.id,label:e.name})))};c();const{list:m,post:v,remove:y,update:g}=(0,n.Z)(),b=async(e=0,t={})=>{Z.value=!0;let a=await m(0,null);q.value=JSON.parse(a.success),Z.value=!1},f=async e=>{await v(e);b(),V.value=[{label:"Código",type:"text",name:"code",value:""},{label:"Produto",type:"text",name:"name",value:""},{label:"Valor",type:"text",name:"value",value:""},{label:"Tipo do produto",type:"select",name:"types_id",value:"",options:a}]},_=async e=>{await g(e);b()},w=async e=>{await y(e);b()},h=[{name:"id",align:"left",label:"ID",field:"id"},{name:"name",align:"left",label:"Produto",field:"name"},{name:"code",align:"left",label:"Código",field:"code"},{name:"value",align:"left",label:"Valor",field:"value"},{name:"value_withou_tax",align:"left",label:"Valor sem imposto",field:"value_withou_tax"},{name:"types_name",align:"left",label:"Tipo",field:"types_name"},{name:"types_tax",align:"left",label:"Imposto",field:"types_tax"},{name:"delete_id",align:"left",label:"AÇÃO",field:"id"}],Z=(0,o.iH)(!1),q=(0,o.iH)([]);function k(e){b(e)}function x(e){w(e)}b();const V=(0,o.iH)([{label:"Código",type:"text",name:"code",value:""},{label:"Produto",type:"text",name:"name",value:""},{label:"Valor",type:"text",name:"value",value:""},{label:"Tipo do produto",type:"select",name:"types_id",value:"",options:a}]),C=(0,o.iH)(!1),H=(0,o.iH)("Adicionar tipo de produto"),I=(0,o.iH)(!1),W=(0,o.iH)("plus"),B=(0,o.iH)(0);function D(e){V.value.forEach((t=>{t.name in e&&(t.value=e[t.name])})),f(e),U(!1)}function Q(e){U(!1)}function U(e){B.value=B.value+1,I.value=e}function S(e){const t=q.value.find((t=>t.id==e));T.value=[{label:"ID",type:"hidden",name:"id",value:e},{label:"Código",type:"text",name:"code",value:t.code},{label:"Produto",type:"text",name:"name",value:t.name},{label:"Valor",type:"text",name:"value",value:t.value},{label:"Tipo do produto",type:"select",name:"types_id",value:t.types_id,options:a}],B.value=B.value+1,z(!0)}const T=(0,o.iH)([{label:"ID",type:"hidden",name:"id",value:""},{label:"Tipo",type:"text",name:"name",value:""},{label:"Imposto",type:"text",name:"text",value:""}]),j=(0,o.iH)(!1),O=(0,o.iH)("Alterar tipo de produto"),$=(0,o.iH)(!1),A=(0,o.iH)("update");function P(e){T.value.forEach((t=>{t.name in e&&(t.value=e[t.name])})),_(e),b(null,e),z(!1)}function E(e){z(!1)}function z(e){$.value=e}return(e,t)=>{const a=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)(l.HY,null,[r,(0,l._)("div",p,[(0,l.Wm)(a,{label:"Adicionar item",onClick:t[0]||(t[0]=e=>U(!0))}),((0,l.wg)(),(0,l.j4)(s.Z,{input:V.value,loading:C.value,title:H.value,is_show:I.value,action:W.value,onInputs_data:D,onClose_modal:Q,key:B.value},null,8,["input","loading","title","is_show","action"])),((0,l.wg)(),(0,l.j4)(s.Z,{input:T.value,loading:j.value,title:O.value,is_show:$.value,action:A.value,onInputs_data:P,onClose_modal:E,key:B.value},null,8,["input","loading","title","is_show","action"]))]),(0,l._)("div",d,[(0,l.Wm)(u.Z,{columns:h,loading:Z.value,rows:q.value,onChange_page:k,onLine_clicked:S,onDelete_item:x},null,8,["loading","rows"])])],64)}}};var m=a(8240),v=a(7518),y=a.n(v);const g=c,b=g;y()(c,"components",{QBtn:m.Z})}}]);