(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{178:function(e,a,t){e.exports=t(390)},198:function(e,a){},200:function(e,a){},246:function(e,a){},247:function(e,a){},258:function(e,a){},275:function(e,a){},280:function(e,a){function t(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=280},289:function(e,a){},291:function(e,a){},319:function(e,a){},321:function(e,a){},322:function(e,a){},327:function(e,a){},329:function(e,a){},335:function(e,a){},337:function(e,a){},356:function(e,a){},368:function(e,a){},371:function(e,a){},390:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(177),c=t.n(r),m=t(8),s=t(2);var o=function(){return l.a.createElement("div",{className:"px-4 py-5 my-5 text-center"},l.a.createElement("h1",{className:"display-5 fw-bold"},"CarCar"),l.a.createElement("div",{className:"col-lg-6 mx-auto"},l.a.createElement("p",{className:"lead mb-4"},"The premiere solution for automobile dealership management!")))};var i=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-success"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m.b,{className:"navbar-brand",to:"/"},"CarCar"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/manufacturers"},"Manufacturers")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/manufacturers/create"},"Create a Manufacturer")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/models/create"},"Create a Car Model")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/models"},"Car Models")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/automobiles"},"Automobiles")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/automobiles/create"},"Create an Automobile")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/technicians/create"},"Create a Technician")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/technicians"},"Technician List")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/appointments/create"},"Create a Service Appointment")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/appointments"},"Appointments")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/appointments/history"},"Service History")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/salespeople"},"Salespeople")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/salespeople/create"},"Create a Salesperson")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/customers"},"Customers")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/customers/create"},"Create a Customer")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/sales/"},"Sales")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/sales/create"},"Create a Sale")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/sales/history"},"Salesperson History"))))))};var u=function(){const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{!async function(){const e=await fetch("".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","salespeople/"));if(e.ok){const t=await e.json();a(t.salesperson)}}()},[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Salespeople"),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Employee ID"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.employee_id),l.a.createElement("td",null,e.first_name),l.a.createElement("td",null,e.last_name))))))};var d=function(e){const[a,t]=Object(n.useState)(""),[r,c]=Object(n.useState)(""),[m,s]=Object(n.useState)(""),[o,i]=Object(n.useState)(""),[u,d]=Object(n.useState)(""),E="https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/";return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"offset-3 col-6"},l.a.createElement("div",{className:"shadow p-4 mt-4"},l.a.createElement("h1",null,"Add a Salesperson"),l.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const n={};n.first_name=a,n.last_name=r,n.employee_id=m;const l="".concat(E,"salespeople/"),o={method:"post",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}},i=await fetch(l,o);if(i.ok){const e=await i.json();console.log(e),t(""),c(""),s("")}},id:"create-salesperson-form"},l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{value:a,onChange:e=>{const a=e.target.value;t(a)},placeholder:"First name",required:!0,type:"text",name:"first_name",id:"first_name",className:"form-control"}),l.a.createElement("label",{htmlFor:"first_name"},"First name...")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{value:r,onChange:e=>{const a=e.target.value;c(a)},placeholder:"Last name",required:!0,type:"text",name:"last_name",id:"last_name",className:"form-control"}),l.a.createElement("label",{htmlFor:"last_name"},"Last name...")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{value:m,onChange:e=>{const a=e.target.value;s(a)},placeholder:"Employee ID",required:!0,type:"text",name:"employee_id",id:"employee_id",className:"form-control"}),l.a.createElement("label",{htmlFor:"employee_id"},"Employee ID...")),l.a.createElement("button",{className:"btn btn-primary"},"Create")))))))};var E=function(){const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{!async function(){const e=await fetch("".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","customers/"));if(e.ok){const t=await e.json();a(t.customer)}}()},[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Customers"),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Phone Number"),l.a.createElement("th",null,"Address"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.first_name),l.a.createElement("td",null,e.last_name),l.a.createElement("td",null,e.phone_number),l.a.createElement("td",null,e.address))))))};function p(e){let{getCustomers:a}=e;const[t,r]=Object(n.useState)(""),[c,m]=Object(n.useState)(""),[s,o]=Object(n.useState)(""),[i,u]=Object(n.useState)(""),[d,E]=Object(n.useState)(""),p="https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/";return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"offset-3 col-6"},l.a.createElement("div",{className:"shadow p-4 mt-4"},l.a.createElement("h1",null,"Add a Customer"),l.a.createElement("form",{onSubmit:async e=>{e.preventDefault();const a={};a.first_name=t,a.last_name=c,a.address=s,a.phone_number=i;const n="".concat(p,"customers/"),l={method:"post",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}},d=await fetch(n,l);if(d.ok){const e=await d.json();console.log(e),r(""),m(""),o(""),u("")}},id:"create-customer-form"},l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{const a=e.target.value;r(a)},placeholder:"First name",required:!0,type:"text",name:"first_name",id:"first_name",className:"form-control",value:t}),l.a.createElement("label",{htmlFor:"first_name"},"First name...")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{const a=e.target.value;m(a)},placeholder:"Last name",required:!0,type:"text",name:"last_name",id:"last_name",className:"form-control",value:c}),l.a.createElement("label",{htmlFor:"first_name"},"Last name...")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{const a=e.target.value;o(a)},placeholder:"Address",required:!0,type:"text",name:"address",id:"address",className:"form-control",value:s}),l.a.createElement("label",{htmlFor:"address"},"Address...")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{const a=e.target.value;u(a)},placeholder:"Phone Number",required:!0,type:"text",name:"phone_number",id:"phone_number",className:"form-control",value:i}),l.a.createElement("label",{htmlFor:"phone_number"},"Phone number...")),l.a.createElement("button",{className:"btn btn-primary"},"Create")))))}var h=function(){const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{!async function(){const e=await fetch("".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","sales/"));if(e.ok){const t=await e.json();a(t.sale)}}()},[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Sales"),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Salesperson Employee ID"),l.a.createElement("th",null,"Salesperson Name"),l.a.createElement("th",null,"Customer"),l.a.createElement("th",null,"VIN"),l.a.createElement("th",null,"Price"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.salesperson.employee_id),l.a.createElement("td",null,e.salesperson.first_name),l.a.createElement("td",null,e.customer.first_name),l.a.createElement("td",null,e.automobile.vin),l.a.createElement("td",null,e.price))))))};const b="https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/";var f=function(e){let{getSales:a}=e;const[t,r]=Object(n.useState)(""),[c,m]=Object(n.useState)(""),[s,o]=Object(n.useState)([]),[i,u]=Object(n.useState)(""),[d,E]=Object(n.useState)([]),[p,h]=Object(n.useState)(""),[f,v]=Object(n.useState)([]),[N,y]=Object(n.useState)([]),[g,j]=Object(n.useState)(!1);Object(n.useEffect)(()=>{(async()=>{const e="".concat(b,"salespeople/"),a="".concat(b,"customers/"),t="".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","automobiles/"),n="".concat(b,"sales/"),l=await fetch(e),r=await fetch(a),c=await fetch(t),m=await fetch(n);if(l.ok){const e=await l.json();v(e.salesperson)}if(r.ok){const e=await r.json();o(e.customer)}if(c.ok){const e=await c.json();E(e.autos)}if(m.ok){const e=await m.json();y(e.sale)}})()},[]);let C=[],S=[];for(let n=0;n<N.length;n++)C.push(N[n].automobile.vin);for(let n=0;n<d.length;n++)!1===C.includes(d[n].vin)&&S.push(d[n]);let k="";return g&&(k="d-none"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"offset-3 col-6"},l.a.createElement("div",{className:"shadow p-4 mt-4"},l.a.createElement("h1",null,"Record a new sale"),l.a.createElement("form",{className:k,onSubmit:async e=>{e.preventDefault();const a={};a.price=t,a.customer=c,a.automobile=i,a.salesperson=p,console.log(a);const n="".concat(b,"sales/"),l={method:"post",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}},s=await fetch(n,l);if(s.ok){const e=await s.json();console.log(e),r(""),m(""),u(""),h(""),j(!0)}},id:"create-sale-form"},l.a.createElement("div",{className:"mb-3"},"Automobile VIN",l.a.createElement("select",{onChange:e=>{const a=e.target.value;u(a)},value:i,required:!0,id:"automobile",name:"automobile",className:"form-select"},l.a.createElement("option",{value:""},"Choose an automobile VIN..."),S.map(e=>l.a.createElement("option",{key:e.id,value:e.vin},e.vin)))),l.a.createElement("div",{className:"mb-3"},"Salesperson",l.a.createElement("select",{onChange:e=>{const a=e.target.value;h(a)},value:p,required:!0,id:"salesperson",name:"salesperson",className:"form-select"},l.a.createElement("option",{value:""},"Choose a salesperson..."),f.map(e=>l.a.createElement("option",{key:e.id,value:e.id},e.first_name)))),l.a.createElement("div",{className:"mb-3"},"Customer",l.a.createElement("select",{onChange:e=>{const a=e.target.value;m(a)},value:c,required:!0,id:"customer",name:"customer",className:"form-select"},l.a.createElement("option",{value:""},"Choose a customer..."),s.map(e=>l.a.createElement("option",{key:e.id,value:e.id},e.first_name)))),l.a.createElement("div",{className:"form-floating mb-3"},"Price",l.a.createElement("input",{onChange:e=>{const a=e.target.value;r(a)},value:t,placeholder:"price",required:!0,type:"number",name:"price",id:"price",className:"form-control"}),l.a.createElement("label",{htmlFor:"Price"})),l.a.createElement("button",{className:"btn btn-primary"},"Create")))))};function v(){const[e,a]=Object(n.useState)([]),[t,r]=Object(n.useState)(""),[c,m]=Object(n.useState)([]),s="https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/";return Object(n.useEffect)(()=>{!async function(){const e=await fetch("".concat(s,"sales/"));if(e.ok){const t=await e.json();a(t.sale)}}(),async function(){const e="".concat(s,"salespeople/"),a=await fetch(e);if(a.ok){const e=await a.json();m(e.salesperson)}}()},[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Salesperson History"),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("select",{value:t,onChange:t=>{const n=t.target.value;r(n);const l=e.filter(e=>e.salesperson.first_name===n);a(l)},placeholder:"salesPerson",required:!0,type:"text",name:"salesPerson",id:"salesPerson",className:"form-select"},l.a.createElement("option",{value:""},"Choose a salesperson"),c.map(e=>l.a.createElement("option",{key:e.id,value:e.first_name},e.first_name)))),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Salesperson"),l.a.createElement("th",null,"Customer"),l.a.createElement("th",null,"VIN"),l.a.createElement("th",null,"Price"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.salesperson.first_name),l.a.createElement("td",null,e.customer.first_name),l.a.createElement("td",null,e.automobile.vin),l.a.createElement("td",null,e.price))))))}function N(){const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{!async function(){const e=await fetch("".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","manufacturers/"));if(e.ok){const t=await e.json();a(t.manufacturers)}}()},[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Manufacturers"),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name))))))}function y(){const[e,a]=Object(n.useState)(""),t={name:e},r="".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","manufacturers/"),c={method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}};return l.a.createElement("div",null,l.a.createElement("div",{className:"my-5 container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"offset-3 col-6"},l.a.createElement("div",{className:"shadow p-4 mt-4"},l.a.createElement("h1",null,"Create a manufacturer"),l.a.createElement("form",{onSubmit:async e=>{e.preventDefault();(await fetch(r,c)).ok&&a("")},id:"create-salesperson-form"},l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{value:e,onChange:e=>{const t=e.target.value;a(t)},placeholder:"Name",required:!0,type:"text",name:"name",id:"name",className:"form-control"}),l.a.createElement("label",{htmlFor:"name"},"Manufacturer Name")),l.a.createElement("button",{className:"btn btn-primary"},"Create")))))))}function g(){const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),[c,m]=Object(n.useState)(""),[s,o]=Object(n.useState)([]),i="https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/";return Object(n.useEffect)(()=>{(async()=>{const e="".concat(i,"manufacturers/"),a=await fetch(e);if(a.ok){const e=await a.json();o(e.manufacturers)}})()},[]),l.a.createElement("div",null,l.a.createElement("div",{className:"my-5 container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"offset-3 col-6"},l.a.createElement("div",{className:"shadow p-4 mt-4"},l.a.createElement("h1",null,"Create a vehicle model"),l.a.createElement("form",{onSubmit:async n=>{n.preventDefault();const l={name:e,picture_url:t,manufacturer_id:c},s="".concat(i,"models/"),o={method:"post",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}};(await fetch(s,o)).ok&&(a(""),r(""),m(""))},id:"create-model-form"},l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{value:e,onChange:e=>{const t=e.target.value;a(t)},placeholder:"name",required:!0,type:"text",name:"name",id:"name",className:"form-control"}),l.a.createElement("label",{htmlFor:"model_name"},"Model Name")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{value:t,onChange:e=>{const a=e.target.value;r(a)},placeholder:"picture_url",required:!0,type:"text",name:"picture_url",id:"picture_url",className:"form-control"}),l.a.createElement("label",{htmlFor:"picture"},"Picture URL")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("select",{value:c,onChange:e=>{const a=e.target.value;m(a)},placeholder:"manufacturer_id",required:!0,type:"text",name:"manufacturer_id",id:"manufacturer_id",className:"form-select"},l.a.createElement("option",{value:""},"Choose a manufacturer_id"),s.map(e=>l.a.createElement("option",{key:e.id,value:e.id},e.name)))),l.a.createElement("button",{className:"btn btn-primary"},"Create")))))))}const j=()=>{const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{(async()=>{const e="".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","models/"),t=await fetch(e);if(t.ok){const e=await t.json();a(e.models)}})()},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Models"),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Manufacturer"),l.a.createElement("th",null,"Picture"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.manufacturer.name),l.a.createElement("td",null,l.a.createElement("img",{src:e.picture_url,alt:"Car"})))))))},C=()=>{const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),[c,m]=Object(n.useState)("");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"offset-3 col-6"},l.a.createElement("div",{className:"shadow p-4 mt-4"},l.a.createElement("h1",null,"Add a Technician"),l.a.createElement("form",{onSubmit:async n=>{n.preventDefault();const l={employee_id:c,first_name:e,last_name:t},s="".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","technicians/"),o={method:"post",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}};(await fetch(s,o)).ok,a(""),r(""),m("")},id:"create-technician-form"},l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{m(e.target.value)},placeholder:"Employee ID",required:!0,value:c,type:"text",name:"employee_id",id:"employee_id",className:"form-control"}),l.a.createElement("label",{htmlFor:"employee_id"},"Employee ID")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{a(e.target.value)},placeholder:"First name",required:!0,value:e,type:"text",name:"first_name",id:"first_name",className:"form-control"}),l.a.createElement("label",{htmlFor:"first_name"},"First Name")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{r(e.target.value)},placeholder:"Last name",required:!0,value:t,type:"text",name:"last_name",id:"last_name",className:"form-control"}),l.a.createElement("label",{htmlFor:"last_name"},"Last name")),l.a.createElement("button",{className:"btn btn-primary"},"Create"))))))},S=()=>{const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{(async()=>{const e="".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","technicians/"),t=await fetch(e);if(t.ok){const e=await t.json();a(e.technicians)}})()},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Technicians"),l.a.createElement("table",{className:"table table-striped table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Employee ID"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.employee_id},l.a.createElement("td",null,e.employee_id),l.a.createElement("td",null,e.first_name),l.a.createElement("td",null,e.last_name))))))},k=()=>{const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),[c,m]=Object(n.useState)(""),[s,o]=Object(n.useState)(""),[i,u]=Object(n.useState)([]),[d,E]=Object(n.useState)([]),p="https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/";Object(n.useEffect)(()=>{!async function(){const e="".concat(p,"technicians/"),a=await fetch(e);if(a.ok){const e=await a.json();u(e.technicians)}}()},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"offset-3 col-6"},l.a.createElement("div",{className:"shadow p-4 mt-4"},l.a.createElement("h1",null,"Create an appointment"),l.a.createElement("form",{onSubmit:async n=>{n.preventDefault();const l={date_time:c,reason:d,vin:e,customer:t,technician:s},i="".concat(p,"appointments/"),u={method:"post",body:JSON.stringify(l),headers:{"Content-type":"application/json"}};await fetch(i,u);a(""),r(""),m(""),o(""),E("")},id:"create-appointment-form"},l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{a(e.target.value)},placeholder:"VIN",required:!0,value:e,type:"text",name:"vin",id:"vin",className:"form-control"}),l.a.createElement("label",{htmlFor:"vin"},"VIN")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{r(e.target.value)},placeholder:"Customer",required:!0,value:t,type:"text",name:"customer",id:"customer",className:"form-control"}),l.a.createElement("label",{htmlFor:"customer"},"Customer")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{m(e.target.value)},placeholder:"Date & Time",required:!0,value:c,type:"datetime-local",name:"dateTime",id:"dateTime",className:"form-control"}),l.a.createElement("label",{htmlFor:"dateTime"},"Date & Time")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("select",{onChange:e=>{o(e.target.value)},required:!0,value:s,name:"technician",id:"technician",className:"form-select"},l.a.createElement("option",{value:""},"Choose a technician"),i.map(e=>l.a.createElement("option",{key:e.employee_id,value:e.employee_id},e.first_name," ",e.last_name)))),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>{E(e.target.value)},placeholder:"Reason",required:!0,value:d,type:"text",name:"reason",id:"reason",className:"form-control"}),l.a.createElement("label",{htmlFor:"reason"},"Reason")),l.a.createElement("button",{className:"btn btn-primary"},"Create"))))))},_=()=>{const[e,a]=Object(n.useState)([]),t="https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/";Object(n.useEffect)(()=>{!async function(){const e="".concat(t,"appointments/"),n=await fetch(e);if(n.ok){const e=(await n.json()).appointments;a(e.filter(e=>"created"===e.status))}}()},[e]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Appointments"),l.a.createElement("p",null,"NOTE: If your appointment is canceled or finished, it will NOT show up on this list"),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"VIN"),l.a.createElement("th",null,"Is VIP?"),l.a.createElement("th",null,"Customer"),l.a.createElement("th",null,"Date + time"),l.a.createElement("th",null,"Technician"),l.a.createElement("th",null,"Reason"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.vin),l.a.createElement("td",null,e.is_vip?"Yes":"No"),l.a.createElement("td",null,e.customer),l.a.createElement("td",null,e.date_time),l.a.createElement("td",null,e.technician.first_name),l.a.createElement("td",null,e.reason),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-danger",onClick:()=>(async e=>{const a="".concat(t,"appointments/").concat(e,"/cancel/");await fetch(a,{method:"put"})})(e.id)},"Cancel"),l.a.createElement("button",{className:"btn btn-success",onClick:()=>(async e=>{const a="".concat(t,"appointments/appointments/").concat(e,"/finish/");await fetch(a,{method:"put"})})(e.id)},"Finish")))))))},O=()=>{const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)([]);Object(n.useEffect)(()=>{!async function(){const e="".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","appointments/"),a=await fetch(e);if(a.ok){const e=await a.json();r(e.appointments)}}()},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Service History"),l.a.createElement("input",{type:"text",value:e,placeholder:"Search by VIN",onChange:e=>{a(e.target.value)}}),l.a.createElement("button",{className:"btn btn-outline-secondary",onClick:()=>{r(t.filter(a=>a.vin===e))}},"Search")),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"VIN"),l.a.createElement("th",null,"Is VIP?"),l.a.createElement("th",null,"Customer"),l.a.createElement("th",null,"Date + Time"),l.a.createElement("th",null,"Technician"),l.a.createElement("th",null,"Reason"),l.a.createElement("th",null,"Status"))),l.a.createElement("tbody",null,t.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.vin),l.a.createElement("td",null,e.is_vip?"Yes":"No"),l.a.createElement("td",null,e.customer),l.a.createElement("td",null,e.date_time),l.a.createElement("td",null,e.technician.first_name),l.a.createElement("td",null,e.reason),l.a.createElement("td",null,e.status))))))},w=()=>{const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{(async()=>{const e="".concat("https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/","automobiles/"),t=await fetch(e);if(t.ok){const e=await t.json();a(e.autos)}})()},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Automobiles"),l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"VIN"),l.a.createElement("th",null,"Color"),l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Model"),l.a.createElement("th",null,"Manufacturer"),l.a.createElement("th",null,"Sold"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.vin),l.a.createElement("td",null,e.color),l.a.createElement("td",null,e.year),l.a.createElement("td",null,e.model.name),l.a.createElement("td",null,e.model.manufacturer.name),l.a.createElement("td",null,e.sold?"Yes":"No"))))))},F=()=>{const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),[c,m]=Object(n.useState)(""),[s,o]=Object(n.useState)(""),[i,u]=Object(n.useState)([]),d="https://dealer-dashboard-8d7b3aea3ae7.herokuapp.com/";Object(n.useEffect)(()=>{(async()=>{const e="".concat(d,"models/"),a=await fetch(e);if(a.ok){const e=await a.json();u(e.models)}})()},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"offset-3 col-6"},l.a.createElement("div",{className:"shadow p-4 mt-4"},l.a.createElement("h1",null,"Add an automobile to inventory"),l.a.createElement("form",{onSubmit:async n=>{n.preventDefault();const l={color:e,year:t,vin:c,model_id:s},i="".concat(d,"automobiles/"),u={method:"post",body:JSON.stringify(l),headers:{"Content-type":"application/json"}};await fetch(i,u);a(""),r(""),o(""),m("")},id:"add-automobile-form"},l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>a(e.target.value),placeholder:"Color",required:!0,value:e,type:"text",name:"color",id:"color",className:"form-control"}),l.a.createElement("label",{htmlFor:"color"},"Color")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>r(e.target.value),placeholder:"Year",required:!0,value:t,type:"text",name:"year",id:"year",className:"form-control"}),l.a.createElement("label",{htmlFor:"year"},"Year")),l.a.createElement("div",{className:"form-floating mb-3"},l.a.createElement("input",{onChange:e=>m(e.target.value),placeholder:"VIN",required:!0,value:c,type:"text",name:"vin",id:"vin",className:"form-control"}),l.a.createElement("label",{htmlFor:"vin"},"VIN")),l.a.createElement("div",{className:" mb-3"},l.a.createElement("select",{onChange:e=>o(e.target.value),required:!0,value:s,name:"model",id:"model",className:"form-select"},l.a.createElement("option",{value:""},"Choose a model"),null===i||void 0===i?void 0:i.map(e=>l.a.createElement("option",{key:e.id,value:e.id},e.name)))),l.a.createElement("button",{className:"btn btn-primary"},"Create"))))))},x=t(184);t(186)().use(x());var q=function(e){return l.a.createElement(m.a,null,l.a.createElement(i,null),l.a.createElement("div",{className:"container"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(o,null)}),l.a.createElement(s.a,{path:"automobiles"},l.a.createElement(s.a,{index:!0,element:l.a.createElement(w,null)}),l.a.createElement(s.a,{path:"create",element:l.a.createElement(F,null)})),l.a.createElement(s.a,{path:"technicians"},l.a.createElement(s.a,{index:!0,element:l.a.createElement(S,null)}),l.a.createElement(s.a,{path:"create",element:l.a.createElement(C,null)})),l.a.createElement(s.a,{path:"appointments"},l.a.createElement(s.a,{index:!0,element:l.a.createElement(_,null)}),l.a.createElement(s.a,{path:"create",element:l.a.createElement(k,null)}),l.a.createElement(s.a,{path:"history",element:l.a.createElement(O,null)})),l.a.createElement(s.a,{path:"salespeople/",element:l.a.createElement(u,null)}),l.a.createElement(s.a,{path:"salespeople/create",element:l.a.createElement(d,null)}),l.a.createElement(s.a,{path:"customers/",element:l.a.createElement(E,null)}),l.a.createElement(s.a,{path:"customers/create",element:l.a.createElement(p,null)}),l.a.createElement(s.a,{path:"manufacturers/",element:l.a.createElement(N,null)}),l.a.createElement(s.a,{path:"manufacturers/create",element:l.a.createElement(y,null)}),l.a.createElement(s.a,{path:"models/create",element:l.a.createElement(g,null)}),l.a.createElement(s.a,{path:"models",element:l.a.createElement(j,null)}),l.a.createElement(s.a,{path:"sales/",element:l.a.createElement(h,null)}),l.a.createElement(s.a,{path:"sales/create",element:l.a.createElement(f,null)}),l.a.createElement(s.a,{path:"sales/history",element:l.a.createElement(v,null)}))))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)))}},[[178,1,2]]]);
//# sourceMappingURL=main.26468b6d.chunk.js.map