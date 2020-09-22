(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),l=a.n(o),r=(a(14),a(15),a(16),a(1)),i=a(8),u=a(2),s=a(3),m=a.n(s),d=function(e){var t=e.id,a=e.title,o=e.completed,l=e.changeStatus,r=e.deleteTodo,i=e.changeTitle,s=Object(n.useState)(a),d=Object(u.a)(s,2),f=d[0],p=d[1],b=Object(n.useState)(!1),E=Object(u.a)(b,2),g=E[0],h=E[1];return c.a.createElement("li",{className:m()({view:!o,completed:o,editing:g})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",checked:o,className:"toggle",onChange:function(){l(t)}}),c.a.createElement("label",{onDoubleClick:function(){h(!0)}},a),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){r(t)}})),g&&c.a.createElement("input",{autoFocus:!0,type:"text",className:"edit",onChange:function(e){p(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&f.trim()&&(i(t,f),p(""),h(!1)),"Enter"===e.key&&""===f.trim()&&r(t),"Escape"===e.key&&(p(""),h(!1))}}))},f=function(e){var t=e.todos,a=e.changeStatus,n=e.deleteTodo,o=e.changeTitle;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(d,Object.assign({key:e.id},e,{deleteTodo:n,changeTitle:o,changeStatus:a}))})))};f.defaultProps={todos:[]};var p="all",b="completed",E="active",g=function(e){var t=e.activeTodos,a=e.clearCompleted,n=e.completedTodos,o=e.visibleTodos,l=e.setVisibleTodos;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"todo-count"},"".concat(t.length,"\n        ").concat(1!==t.length?"items":"item"," left")),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:m()({selected:"all"===o}),onClick:function(){return l(p)}},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active",className:m()({selected:"active"===o}),onClick:function(){return l(E)}},"Active")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed",className:m()({selected:"completed"===o}),onClick:function(){return l(b)}},"Completed"))),n.length>0&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:a},"Clear completed"))};g.defaultProps={activeTodos:[],completedTodos:[]};var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(p),s=Object(u.a)(l,2),m=s[0],d=s[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),O=v[0],j=v[1];Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]);var N=a.filter((function(e){switch(m){case b:return e.completed;case E:return!e.completed;default:return e}})),k=a.every((function(e){return e.completed})),T=Object(n.useMemo)((function(){return a.filter((function(e){return!e.completed}))}),[a]),y=Object(n.useMemo)((function(){return a.filter((function(e){return e.completed}))}),[a]);return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},c.a.createElement("input",{type:"text",className:"new-todo",value:O,placeholder:"What needs to be done?",onChange:function(e){j(e.target.value)},onKeyDown:function(e){var t;"Enter"===e.key&&O.trim()&&(t=O.trim(),o([].concat(Object(i.a)(a),[{title:t,id:+new Date,completed:!1,editing:!1}])),j(""))}}))),c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",checked:a.length>0&&k,className:"toggle-all",onChange:function(){o(k?a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})})):a.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!0})})))}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(f,{todos:N,changeStatus:function(e){o(a.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},deleteTodo:function(e){o(a.filter((function(t){return t.id!==e})))},changeTitle:function(e,t){o(a.map((function(a){return a.id===e?Object(r.a)(Object(r.a)({},a),{},{title:t}):a})))}})),a.length>0&&c.a.createElement("footer",{className:"footer"},c.a.createElement(g,{activeTodos:T,completedTodos:y,clearCompleted:function(){o(T)},visibleTodos:m,setVisibleTodos:d})))};l.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a20f4fd8.chunk.js.map