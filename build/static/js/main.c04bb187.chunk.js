(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),u=n(16),a=n.n(u),i=n(7),o=n(3),s=n(17),l=n.n(s).a.create({baseURL:"/api/contacts"}),d=function(){return l.get().then((function(e){return e.data}))},j=function(e){return l.post("",e).then((function(e){return e.data}))},b=function(e,t){return l.put("/".concat(e),t).then((function(e){return e.data}))},f=function(e){return l.delete("/".concat(e)).then((function(e){return e.data}))},m=n(0),h=function(e){var t=e.filterValue,n=e.setFilterValue;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("label",{htmlFor:"filter",children:"filter shown with"}),Object(m.jsx)("input",{id:"filter",value:t,onChange:function(e){return n(e.target.value)}})]})},O=function(e){var t=e.handleAdd,n=e.newName,c=e.setNewName,r=e.newNumber,u=e.setNewNumber;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{id:"name",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("label",{htmlFor:"number",children:"Number"}),Object(m.jsx)("input",{id:"number",value:r,onChange:function(e){return u(e.target.value)}})]}),Object(m.jsx)("button",{type:"submit",children:"add"})]})},p=function(e){var t=e.filterValue,n=e.contacts,c=e.filteredContacts,r=e.handleDelete;return Object(m.jsx)("ul",{children:t?c.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{children:[e.name,"  ",e.number,Object(m.jsx)("button",{onClick:function(){return r(e._id)},children:"delete"})]})},e._id)})):n.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{children:[e.name,"  ",e.number,Object(m.jsx)("button",{onClick:function(){return r(e._id)},children:"delete"})]})},e._id)}))})},x=function(e){var t=e.message,n=e.type;return Object(m.jsx)(m.Fragment,{children:"error"===n?Object(m.jsx)("p",{style:{color:"red"},children:t}):Object(m.jsx)("p",{style:{color:"green"},children:t})})};n(41);var g=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(""),a=Object(o.a)(u,2),s=a[0],l=a[1],g=Object(c.useState)(""),v=Object(o.a)(g,2),w=v[0],N=v[1],y=Object(c.useState)(""),C=Object(o.a)(y,2),k=C[0],_=C[1],F=Object(c.useState)(!1),S=Object(o.a)(F,2),T=S[0],V=S[1];Object(c.useEffect)((function(){d().then((function(e){return r(e)}))}),[]);var D=k?n.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})):[];return Object(m.jsxs)("div",{className:"App",children:[T&&Object(m.jsx)(x,{message:T.message,type:T.type}),Object(m.jsx)(h,{filterValue:k,setFilterValue:_}),Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(O,{handleAdd:function(e){e.preventDefault();var t=n.find((function(e){return e.name===s})),c={name:s,number:w};if(void 0===t)j(c).then((function(e){r([].concat(Object(i.a)(n),[e])),V({message:"Contact added",type:"success"}),setTimeout((function(){V(null)}),5e3)})).catch((function(e){V({message:e.response.data.error,type:"error"}),setTimeout((function(){V(null)}),5e3)}));else{if(!window.confirm("Name ".concat(s," is already added to phonebook, replace the old number with a new one?")))return;b(t._id,c).then((function(e){r([].concat(Object(i.a)(n.filter((function(e){return e._id!==t._id}))),[e])),V({message:"Contact updated",type:"success"}),setTimeout((function(){V(null)}),5e3)})).catch((function(e){console.log(e),V({message:e.response.data.error,type:"error"}),setTimeout((function(){V(null)}),5e3)}))}},newName:s,setNewName:l,newNumber:w,setNewNumber:N}),Object(m.jsx)("h2",{children:"Numbers"}),Object(m.jsx)(p,{filterValue:k,contacts:n,filteredContacts:D,handleDelete:function(e){window.confirm("Delete person?")&&f(e).then((function(){r(n.filter((function(t){return t._id!==e}))),V({message:"Contact deleted",type:"success"}),setTimeout((function(){V(null)}),5e3)})).catch((function(e){console.log(e),V({message:"Contact already deleted",type:"error"}),setTimeout((function(){V(null)}),5e3)}))}})]})};a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.c04bb187.chunk.js.map