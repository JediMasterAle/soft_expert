"use strict";(globalThis["webpackChunkakc_solutions"]=globalThis["webpackChunkakc_solutions"]||[]).push([[629],{8236:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(5474),n=a(4434);function o(e){const t=async(t=null,a=null)=>{try{const n={};t&&(n.page=t),a&&Object.assign(n,a);const{data:o}=await l.api.get(e+"/read.php",{params:n});return o}catch(n){return{error:i(n)}}},a=async t=>{try{const{data:a}=await l.api.get(`${e}/read.php?id=${t}`);return a}catch(a){return{error:i(a)}}},o=async t=>{t=u(t);try{const{data:a}=await l.api.post(e+"/store.php",t);return n.Z.create({color:"positive",position:"top-right",message:a.success,icon:"done"}),a}catch(a){return{error:i(a)}}},s=async t=>{t=u(t);try{const{data:a}=await l.api.post(e+"/update.php",t);return n.Z.create({color:"positive",position:"top-right",message:a.success,icon:"done"}),a}catch(a){return{error:i(a)}}},r=async t=>{try{const{data:a}=await l.api["delete"](`${e}/delete.php?id=${t}`);return n.Z.create({color:"positive",position:"top-right",message:a.success,icon:"done"}),a}catch(a){return{error:i(a)}}};return{list:t,post:o,update:s,remove:r,getById:a}}function i(e){const t=e.response.status,a=e.response.data.errors,l=e.response.data.message;if(404==t&&n.Z.create({color:"negative",position:"top-right",message:"Falha na solicitação.",icon:"report_problem"}),a)for(let o=0;o<Object.keys(a).length;o++){const e=Object.keys(a)[o],t=a[e];if("string"===typeof t)n.Z.create({color:"negative",position:"top-right",message:t,icon:"report_problem"});else for(let a=0;a<t.length;a++)n.Z.create({color:"negative",position:"top-right",message:t[a],icon:"report_problem"})}else if(l&&"Unauthenticated."==l)return}function u(e){const t=new FormData;for(const a in e)Array.isArray(e[a])?e[a].forEach((e=>t.append(a,e))):t.append(a,e[a]);return t}l.api.defaults.headers.common.Authorization=`Bearer ${localStorage.getItem("token")}`,l.api.defaults.baseURL="http://localhost:8000/"},5625:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(8236);function n(){const{list:e,post:t,update:a,remove:n,getById:o}=(0,l.Z)("product");return{list:e,post:t,update:a,remove:n,getById:o}}},8366:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(3673),n=a(1959),o=a(8880),i=a(2323);const u={class:"text-h6"},s={key:0},r={key:1},d={key:2},p={__name:"GenericModalInputs",props:{input:{type:Object,required:!0},loading:{type:Boolean,required:!0},title:{type:String,required:!0},is_show:{type:Boolean,required:!0},action:{type:String,required:!0}},emits:["inputs_data","close_modal"],setup(e,{emit:t}){const a=e,p=(0,n.iH)([]);function c(){p.value&&p.value.types_id&&p.value.types_id.value&&(p.value.types_id=p.value.types_id.value),t("inputs_data",p.value),m(!0)}function m(e=!1){e||(a.input.forEach((e=>{p.value[e.name]=e.value})),t("close_modal",a.action))}a.input.forEach((e=>{p.value[e.name]=e.value}));const v=(0,l.Fl)({get:()=>a.is_show,set:e=>{m()}});return(t,m)=>{const y=(0,l.up)("q-card-section"),g=(0,l.up)("q-input"),_=(0,l.up)("q-select"),f=(0,l.up)("q-btn"),b=(0,l.up)("q-card-actions"),w=(0,l.up)("q-card"),h=(0,l.up)("q-dialog"),q=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(h,{modelValue:(0,n.SU)(v),"onUpdate:modelValue":m[1]||(m[1]=e=>(0,n.dq)(v)?v.value=e:null)},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{style:{width:"700px","max-width":"80vw"}},{default:(0,l.w5)((()=>[(0,l._)("form",{onSubmit:m[0]||(m[0]=(0,o.iM)((e=>c()),["prevent"]))},[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l._)("div",u,(0,i.zw)(e.title),1)])),_:1}),(0,l.Wm)(y,{class:"q-pt-none"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.input,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},["date"==e.type?((0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(g,{outlined:"",label:e.label,type:"date",class:"q-my-sm",modelValue:p.value[e.name],"onUpdate:modelValue":t=>p.value[e.name]=t},null,8,["label","modelValue","onUpdate:modelValue"])])):"text"==e.type?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(g,{outlined:"",label:e.label,type:"text",class:"q-my-sm",modelValue:p.value[e.name],"onUpdate:modelValue":t=>p.value[e.name]=t},null,8,["label","modelValue","onUpdate:modelValue"])])):"select"==e.type?((0,l.wg)(),(0,l.iD)("div",d,[(0,l.Wm)(_,{outlined:"",label:e.label,class:"q-my-sm",modelValue:p.value[e.name],"onUpdate:modelValue":t=>p.value[e.name]=t,options:e.options,"option-label":"label","emit-value":"","map-options":""},null,8,["label","modelValue","onUpdate:modelValue","options"])])):(0,l.kq)("",!0)])))),128))])),_:1}),(0,l.Wm)(b,{align:"right"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{flat:"",label:"OK",color:"primary",type:"submit"}),(0,l.wy)((0,l.Wm)(f,{flat:"",label:"Cancelar",color:"negative"},null,512),[[q]])])),_:1})],32)])),_:1})])),_:1},8,["modelValue"])}}};var c=a(6778),m=a(151),v=a(5589),y=a(4842),g=a(7637),_=a(9367),f=a(8240),b=a(677),w=a(7518),h=a.n(w);const q=p,Z=q;h()(p,"components",{QDialog:c.Z,QCard:m.Z,QCardSection:v.Z,QInput:y.Z,QSelect:g.Z,QCardActions:_.Z,QBtn:f.Z}),h()(p,"directives",{ClosePopup:b.Z})},7706:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(3673),n=a(2323),o=a(8880),i=a(1959);const u={__name:"GenericTable",props:{columns:{type:Object,required:!0},rows:{type:Object,required:!0},loading:{type:Boolean,required:!0}},emits:["change_page","line_clicked","delete_item"],setup(e,{emit:t}){const a=e,u=(0,i.iH)("");function s(e){if(null==e||""==e)return;let t=e.split("-");return`${t[2]}/${t[1]}/${t[0]}`}function r(e){const t=new Date(e),a=t.toLocaleDateString("pt-BR"),l=t.toLocaleTimeString("pt-BR");return`${a} ${l}`}function d(e,a){t("line_clicked",a.id)}function p(e){t("delete_item",e)}return(e,t)=>{const i=(0,l.up)("q-td"),c=(0,l.up)("q-btn"),m=(0,l.up)("q-icon"),v=(0,l.up)("q-input"),y=(0,l.up)("q-table");return(0,l.wg)(),(0,l.j4)(y,{loading:a.loading,class:"my-sticky-header-table",rows:a.rows,columns:a.columns,"row-key":"name",flat:"",bordered:"",onRowClick:d,filter:u.value},{"body-cell-date":(0,l.w5)((e=>[(0,l.Wm)(i,{props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(s(e.value)),1)])),_:2},1032,["props"])])),"body-cell-date_time":(0,l.w5)((e=>[(0,l.Wm)(i,{props:e},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(r(e.value)),1)])),_:2},1032,["props"])])),"body-cell-delete_id":(0,l.w5)((e=>[(0,l.Wm)(i,{props:e},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{icon:"delete",flat:"",round:"",color:"negative",onClick:(0,o.iM)((t=>p(e.value)),["stop"])},null,8,["onClick"])])),_:2},1032,["props"])])),"top-right":(0,l.w5)((()=>[(0,l.Wm)(v,{borderless:"",dense:"",debounce:"300",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),placeholder:"Buscar"},{append:(0,l.w5)((()=>[(0,l.Wm)(m,{name:"search"})])),_:1},8,["modelValue"])])),_:1},8,["loading","rows","columns","filter"])}}};var s=a(6429),r=a(3884),d=a(8240),p=a(4842),c=a(4554),m=a(7518),v=a.n(m);const y=u,g=y;v()(u,"components",{QTable:s.Z,QTd:r.Z,QBtn:d.Z,QInput:p.Z,QIcon:c.Z})},3629:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var l=a(3673),n=a(2323),o=a(1959),i=a(8339),u=a(8236);function s(){const{list:e,post:t,update:a,remove:l,getById:n}=(0,u.Z)("sale_product");return{list:e,post:t,update:a,remove:l,getById:n}}var r=a(5625),d=a(7706),p=a(8366);const c=(0,l._)("h1",{class:"text-center text-h3"},"Produtos da Venda",-1),m={class:"q-ma-md"},v={class:"flex justify-between"},y=(0,l._)("b",null,"Total à pagar:",-1),g=(0,l._)("b",null,"Total de imposto:",-1),_={class:"q-ma-md"},f={__name:"SaleProducts",setup(e){const t=(0,i.yj)(),a=t.params.id,{list:u}=(0,r.Z)(),f=(0,o.iH)([]),b=async(e=0,t={})=>{let a=await u(0,null),l=JSON.parse(a.success);f.value=l.map((e=>({value:e.id,label:e.name})))};b();const{post:w,remove:h,update:q,getById:Z}=s(),k=(0,o.iH)([]),V=async(e=0,t={})=>{B.value=!0;let l=await Z(a);C.value=JSON.parse(l.success),l[0]?k.value=JSON.parse(l[0]):k.value=["0.00","0.00"],B.value=!1},H=async e=>{sd;await w(e);V(),S.value=[{label:"Produto",type:"select",name:"products_id",value:"",options:f},{label:"Quantidade",type:"text",name:"qty",value:""},{label:"",type:"hidden",name:"sales_id",value:a}]},Q=async e=>{await q(e);V()},W=async e=>{await h(e);V()},U=[{name:"id",align:"left",label:"ID",field:"id"},{name:"code",align:"left",label:"Código",field:"code"},{name:"name",align:"left",label:"Produto",field:"name"},{name:"unit_value_tax",align:"left",label:"Valor Unitário Imposto",field:"unit_value_tax"},{name:"unit_value",align:"left",label:"Valor Unitário",field:"unit_value"},{name:"qty",align:"left",label:"Qtd",field:"qty"},{name:"total",align:"left",label:"Total",field:"total"},{name:"delete_id",align:"left",label:"AÇÃO",field:"id"}],B=(0,o.iH)(!1),C=(0,o.iH)([]);function I(e){V(e)}function x(e){W(e)}V();const S=(0,o.iH)([{label:"Produto",type:"select",name:"products_id",value:"",options:f},{label:"Quantidade",type:"text",name:"qty",value:""},{label:"",type:"hidden",name:"sales_id",value:a}]),j=(0,o.iH)(!1),D=(0,o.iH)("Adicionar produto"),O=(0,o.iH)(!1),$=(0,o.iH)("plus"),T=(0,o.iH)(0);function A(e){S.value.forEach((t=>{t.name in e&&(t.value=e[t.name])})),H(e),P(!1)}function z(e){P(!1)}function P(e){T.value=T.value+1,O.value=e}function E(e){const t=C.value.find((t=>t.id==e));F.value=[{label:"",type:"hidden",name:"id",value:t.id},{label:"Quantidade",type:"text",name:"qty",value:t.qty}],T.value=T.value+1,K(!0)}const F=(0,o.iH)([{label:"",type:"hidden",name:"id",value:""},{label:"Quantidade",type:"text",name:"qty",value:""}]),L=(0,o.iH)(!1),R=(0,o.iH)("Alterar tipo de produto"),J=(0,o.iH)(!1),M=(0,o.iH)("update");function N(e){F.value.forEach((t=>{t.name in e&&(t.value=e[t.name])})),Q(e),V(null,e),K(!1)}function G(e){K(!1)}function K(e){J.value=e}return(e,t)=>{const a=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)(l.HY,null,[c,(0,l._)("div",m,[(0,l._)("div",v,[(0,l.Wm)(a,{label:"Adicionar item",onClick:t[0]||(t[0]=e=>P(!0))}),(0,l._)("span",null,[y,(0,l.Uk)(" "+(0,n.zw)(k.value[0]),1)]),(0,l._)("span",null,[g,(0,l.Uk)(" "+(0,n.zw)(k.value[1]),1)]),(0,l.Wm)(a,{color:"positive",label:"Finalizar",to:"/venda"})]),((0,l.wg)(),(0,l.j4)(p.Z,{input:S.value,loading:j.value,title:D.value,is_show:O.value,action:$.value,onInputs_data:A,onClose_modal:z,key:T.value},null,8,["input","loading","title","is_show","action"])),((0,l.wg)(),(0,l.j4)(p.Z,{input:F.value,loading:L.value,title:R.value,is_show:J.value,action:M.value,onInputs_data:N,onClose_modal:G,key:T.value},null,8,["input","loading","title","is_show","action"]))]),(0,l._)("div",_,[(0,l.Wm)(d.Z,{columns:U,loading:B.value,rows:C.value,onChange_page:I,onLine_clicked:E,onDelete_item:x},null,8,["loading","rows"])])],64)}}};var b=a(8240),w=a(7518),h=a.n(w);const q=f,Z=q;h()(f,"components",{QBtn:b.Z})}}]);