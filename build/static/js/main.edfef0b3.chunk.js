(this.webpackJsonpfrontpuhelinluettelo=this.webpackJsonpfrontpuhelinluettelo||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var c=t(16),r=t.n(c),a=t(3),o=t(2),u=t(4),i=t.n(u),d="/api/persons",s=function(){return i.a.get(d).then((function(e){return e.data}))},l=function(e){return i.a.post(d,e).then((function(e){return e.data}))},b=function(e,n){return i.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},j=t(0),f=function(e){var n=e.name,t=e.number;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("li",{children:[n," ",t]})})},m=function(e){var n=e.persons,t=e.search,c=e.deletePerson;return Object(j.jsx)(j.Fragment,{children:n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return Object(j.jsxs)("ul",{children:[Object(j.jsx)(f,{name:e.name,number:e.number},e.name),Object(j.jsx)("button",{onClick:function(){return c(e.name,e.id)},children:"delete"})]},e.id)}))})},O=function(e){var n=e.search,t=e.handleSearch;return Object(j.jsxs)("div",{children:["name: ",Object(j.jsx)("input",{value:n,onChange:t})]})},x=function(e){var n=e.addPerson,t=e.newName,c=e.handleNameChange,r=e.newNumber,a=e.handleNumberChange;return Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:["name: \xa0 \xa0 ",Object(j.jsx)("input",{value:t,onChange:c})]}),Object(j.jsxs)("div",{children:["number: ",Object(j.jsx)("input",{value:r,onChange:a})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.message;if(null===n)return null;return n.includes("already")?Object(j.jsx)("div",{style:{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},children:n}):Object(j.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"},children:n})},g=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),u=Object(a.a)(r,2),i=u[0],d=u[1],f=Object(o.useState)(""),g=Object(a.a)(f,2),v=g[0],w=g[1],y=Object(o.useState)(""),S=Object(a.a)(y,2),C=S[0],N=S[1],k=Object(o.useState)(null),P=Object(a.a)(k,2),E=P[0],B=P[1];Object(o.useEffect)((function(){s().then((function(e){c(e)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(p,{message:E}),Object(j.jsx)(O,{search:C,handleSearch:function(e){N(e.target.value.toLowerCase())}}),Object(j.jsx)("h2",{children:"Add new"}),Object(j.jsx)(x,{addPerson:function(e){e.preventDefault();var n=!1;t.forEach((function(e){n=n||e.name===i}));var r={name:i,number:v};if(n){if(window.confirm("".concat(i," is already added to phonebook, \n        replace the old number with a new one?"))){var a=0;t.forEach((function(e){e.name===i&&(a=e.id)})),b(a,r).then((function(e){c(t.map((function(n){return n.id!==a?n:e})))})).catch((function(e){B("".concat(i," was already deleted")),c(t.filter((function(e){return e.id!==a})))})),d(""),w(""),B("".concat(i,"'s number changed to ").concat(v)),setTimeout((function(){B(null)}),5e3)}}else l(r).then((function(e){c(t.concat(e))})),d(""),w(""),B("Added ".concat(i)),setTimeout((function(){B(null)}),5e3)},newName:i,handleNameChange:function(e){d(e.target.value)},newNumber:v,handleNumberChange:function(e){w(e.target.value)}}),Object(j.jsx)("h2",{children:"Numbers"}),Object(j.jsx)(m,{persons:t,search:C,deletePerson:function(e,n){window.confirm("Delete ".concat(e,"?"))&&(h(n).then((function(e){console.log(e)})).catch((function(e){B("".concat(i," was already deleted"))})),c(t.filter((function(e){return e.id!==n}))),B("Deleted ".concat(e)),setTimeout((function(){B(null)}),5e3))}})]})};r.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.edfef0b3.chunk.js.map