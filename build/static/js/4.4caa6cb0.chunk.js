(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{424:function(e,t,n){"use strict";n.d(t,"j",function(){return r}),n.d(t,"i",function(){return c}),n.d(t,"a",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"h",function(){return u}),n.d(t,"e",function(){return d}),n.d(t,"f",function(){return b}),n.d(t,"c",function(){return O}),n.d(t,"d",function(){return l});var a=n(86),r=function(e){return e[a.b].get("todos")},c=function(e){return e[a.b].get("isLoadingTodos")},o=function(e){return e[a.b].get("dailyTodos")},i=function(e){return e[a.b].get("isLoadingDaily")},s=function(e){return e[a.b].get("histories")},u=function(e){return e[a.b].get("isLoadingHistory")},d=function(e){return e[a.b].get("isLoadingAction")},b=function(e){return e[a.b].get("isLoadingCheck")},O=function(e){return e[a.b].get("historyFilter")},l=function(e){return e[a.b].get("historyPages")}},428:function(e,t,n){"use strict";var a=n(362),r=n.n(a),c=n(363),o=n.n(c),i=(n(4),n(1)),s=n.n(i),u=n(411),d=n(579),b=n(578),O=n(361);function l(e){var t=e.active,n=e.children,a=e.className,c=e.content,i=e.disabled,E=e.indeterminate,f=e.inline,_=e.inverted,T=e.size,p=o()("ui",T,Object(u.a)(t,"active"),Object(u.a)(i,"disabled"),Object(u.a)(E,"indeterminate"),Object(u.a)(_,"inverted"),Object(u.a)(n||c,"text"),Object(u.b)(f,"inline"),"loader",a),j=Object(d.a)(l,e),S=Object(b.a)(l,e);return s.a.createElement(S,r()({},j,{className:p}),O.b.isNil(n)?c:n)}l.handledProps=["active","as","children","className","content","disabled","indeterminate","inline","inverted","size"],l.propTypes={},t.a=l},449:function(e,t,n){"use strict";var a,r=n(6),c=n(9),o=n(86),i=n(22),s=n(389),u=n(44),d=function(e){return e.set("isLoadingAction",!0)},b=function(e){return e.set("isLoadingAction",!1)},O=function(e,t){var n=t.id;return e.setIn(["isLoadingCheck",n],!0)},l=function(e,t){var n=t.id;return e.setIn(["isLoadingCheck",n],!1)},E=function(e,t){var n=t.item,a=e.get("todos").map(function(e){return e.get("_id")!==n._id?e:Object(c.fromJS)(n)});return e.set("todos",a).setIn(["isLoadingCheck",n._id],!1)},f=Object(i.createReducer)(o.a,(a={},Object(r.a)(a,s.b.GET_TODOS_REQUEST,function(e){return e.set("isLoadingTodos",!0)}),Object(r.a)(a,s.b.GET_TODOS_FAILURE,function(e){return e.set("isLoadingTodos",!1)}),Object(r.a)(a,s.b.GET_TODOS_SUCCESS,function(e,t){var n=t.items;return e.set("todos",Object(c.fromJS)(n)).set("isLoadingTodos",!1)}),Object(r.a)(a,s.b.CLEAR_TODOS,function(e){return e.set("todos",Object(c.fromJS)([]))}),Object(r.a)(a,s.b.GET_DAILY_TODOS_REQUEST,function(e){return e.set("isLoadingDaily",!0)}),Object(r.a)(a,s.b.GET_DAILY_TODOS_FAILURE,function(e){return e.set("isLoadingDaily",!1)}),Object(r.a)(a,s.b.GET_DAILY_TODOS_SUCCESS,function(e,t){var n=t.items;return e.set("dailyTodos",Object(c.fromJS)(n)).set("isLoadingDaily",!1)}),Object(r.a)(a,s.b.CLEAR_DAILY_TODOS,function(e){return e.set("dailyTodos",Object(c.fromJS)([]))}),Object(r.a)(a,s.b.GET_HISTORIES_REQUEST,function(e){return e.set("isLoadingHistory",!0)}),Object(r.a)(a,s.b.GET_HISTORIES_FAILURE,function(e){return e.set("isLoadingHistory",!1)}),Object(r.a)(a,s.b.GET_HISTORIES_SUCCESS,function(e,t){var n=t.items,a=t.totalPages;return e.merge(Object(c.fromJS)({histories:n,isLoadingHistory:!1,historyPages:a}))}),Object(r.a)(a,s.b.CLEAR_HISTORIES,function(e){return e.set("histories",Object(c.fromJS)([]))}),Object(r.a)(a,s.b.CREATE_TODO_REQUEST,d),Object(r.a)(a,s.b.CREATE_TODO_SUCCESS,function(e,t){var n=t.item,a=e.get("todos").push(Object(c.fromJS)(n));return e.set("todos",a).set("isLoadingAction",!1)}),Object(r.a)(a,s.b.CREATE_TODO_FAILURE,b),Object(r.a)(a,s.b.EDIT_TODO_REQUEST,d),Object(r.a)(a,s.b.EDIT_TODO_SUCCESS,function(e,t){var n=t.item,a=e.get("todos").map(function(e){return e.get("_id")!==n._id?e:Object(c.fromJS)(n)});return e.set("todos",a).set("isLoadingAction",!1)}),Object(r.a)(a,s.b.EDIT_TODO_FAILURE,b),Object(r.a)(a,s.b.CHECK_TODO_REQUEST,O),Object(r.a)(a,s.b.CHECK_TODO_SUCCESS,E),Object(r.a)(a,s.b.CHECK_TODO_FAILURE,l),Object(r.a)(a,s.b.UNCHECK_TODO_REQUEST,O),Object(r.a)(a,s.b.UNCHECK_TODO_SUCCESS,E),Object(r.a)(a,s.b.UNCHECK_TODO_FAILURE,l),Object(r.a)(a,s.b.CREATE_DAILY_TODO_REQUEST,d),Object(r.a)(a,s.b.CREATE_DAILY_TODO_SUCCESS,function(e,t){var n=t.item,a=e.get("dailyTodos").push(Object(c.fromJS)(n));return e.set("dailyTodos",a).set("isLoadingAction",!1)}),Object(r.a)(a,s.b.CREATE_DAILY_TODO_FAILURE,b),Object(r.a)(a,s.b.EDIT_DAILY_TODO_REQUEST,d),Object(r.a)(a,s.b.EDIT_DAILY_TODO_SUCCESS,function(e,t){var n=t.item,a=e.get("dailyTodos").map(function(e){return e.get("_id")!==n._id?e:Object(c.fromJS)(n)});return e.set("dailyTodos",a).set("isLoadingAction",!1)}),Object(r.a)(a,s.b.EDIT_DAILY_TODO_FAILURE,b),Object(r.a)(a,s.b.SET_HISTORY_FILTER,function(e,t){var n=t.name,a=t.value;return e.setIn(["historyFilter",n],a)}),a));u.a.register(o.b,f)},482:function(e,t,n){"use strict";var a=n(51),r=n(13),c=n.n(r),o=n(5),i=n(389),s=n(375),u=n(21),d=n(36),b=function(){return d.a.get("/api/todos/")},O=function(){return d.a.get("/api/dailyTodos/")},l=function(e){return d.a.get("/api/todoHistories/",e)},E=function(e){return d.a.post("/api/todos/",e)},f=function(e,t){return d.a.put("/api/todos/".concat(e),t)},_=function(e){return d.a.delete("/api/todos/".concat(e))},T=function(e){return d.a.post("/api/todos/check/".concat(e))},p=function(e){return d.a.post("/api/todos/uncheck/".concat(e))},j=function(e){return d.a.post("/api/dailyTodos/",e)},S=function(e,t){return d.a.put("/api/dailyTodos/".concat(e),t)},m=function(e){return d.a.delete("/api/dailyTodos/".concat(e))},h=n(424),C=n(88),D=n(86),g=c.a.mark(F),x=c.a.mark(H),v=c.a.mark(Y),L=c.a.mark(Q),I=c.a.mark(G),k=c.a.mark(J),A=c.a.mark(K),w=c.a.mark(M),R=c.a.mark(P),y=c.a.mark(W),U=c.a.mark(q),N=c.a.mark(z);function F(e){var t,n;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.filter,a.prev=1,a.next=4,Object(o.b)(b,t);case 4:if("fail"!==(n=a.sent).data.result){a.next=7;break}throw new Error(n.error);case 7:return a.next=9,Object(o.c)({type:i.b.GET_TODOS_SUCCESS,items:n.data.items});case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(o.c)({type:i.b.GET_TODOS_FAILURE});case 15:case"end":return a.stop()}},g,null,[[1,11]])}function H(e){var t,n;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.filter,a.prev=1,a.next=4,Object(o.b)(O,t);case 4:if("fail"!==(n=a.sent).data.result){a.next=7;break}throw new Error(n.error);case 7:return a.next=9,Object(o.c)({type:i.b.GET_DAILY_TODOS_SUCCESS,items:n.data.items});case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(o.c)({type:i.b.GET_DAILY_TODOS_FAILURE});case 15:case"end":return a.stop()}},x,null,[[1,11]])}function Y(){var e,t;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(o.d)(h.c);case 3:return e=n.sent,n.next=6,Object(o.b)(l,e.toJS());case 6:if("fail"!==(t=n.sent).data.result){n.next=9;break}throw new Error(t.error);case 9:return n.next=11,Object(o.c)({type:i.b.GET_HISTORIES_SUCCESS,items:t.data.items,totalPages:t.data.totalPages});case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,Object(o.c)({type:i.b.GET_HISTORIES_FAILURE});case 17:case"end":return n.stop()}},v,null,[[0,13]])}function Q(e){var t,n,r,u;return c.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.values,n=e.callback,c.prev=1,t.id,r=Object(a.a)(t,["id"]),c.next=5,Object(o.b)(E,r);case 5:if("fail"!==(u=c.sent).data.result){c.next=8;break}throw new Error(u.error);case 8:return c.next=10,Object(o.c)({type:i.b.CREATE_TODO_SUCCESS,item:u.data.item});case 10:return n(),c.next=13,Object(o.c)(s.a.showNotification("Create todo","Create Todo Success","blue"));case 13:c.next=21;break;case 15:return c.prev=15,c.t0=c.catch(1),c.next=19,Object(o.c)({type:i.b.CREATE_TODO_FAILURE});case 19:return c.next=21,Object(o.c)(s.a.showNotification("Create todo",c.t0.message,"red"));case 21:case"end":return c.stop()}},L,null,[[1,15]])}function G(e){var t,n,r,u,d;return c.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.values,n=e.callback,c.prev=1,r=t.id,u=Object(a.a)(t,["id"]),c.next=5,Object(o.b)(f,r,u);case 5:if("fail"!==(d=c.sent).data.result){c.next=8;break}throw new Error(d.error);case 8:return c.next=10,Object(o.c)({type:i.b.EDIT_TODO_SUCCESS,item:d.data.item});case 10:return n(),c.next=13,Object(o.c)(s.a.showNotification("Edit todo","Edit Todo Success","blue"));case 13:c.next=21;break;case 15:return c.prev=15,c.t0=c.catch(1),c.next=19,Object(o.c)({type:i.b.EDIT_TODO_FAILURE});case 19:return c.next=21,Object(o.c)(s.a.showNotification("Edit todo",c.t0.message,"red"));case 21:case"end":return c.stop()}},I,null,[[1,15]])}function J(e){var t,n;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.values,a.prev=1,a.next=4,Object(o.c)(u.a.showLoadingAction());case 4:return a.next=6,Object(o.b)(_,t._id);case 6:if("fail"!==(n=a.sent).data.result){a.next=9;break}throw new Error(n.error);case 9:return a.next=11,Object(o.c)({type:i.b.DELETE_TODO_SUCCESS,item:n.data.item});case 11:return a.next=13,Object(o.c)(i.a.getTodosRequest());case 13:return a.next=15,Object(o.c)(s.a.showNotification("Delete todo","Delete Todo Success","blue"));case 15:return a.next=17,Object(o.c)(u.a.hideLoadingAction());case 17:return a.next=19,Object(o.c)(u.a.clearModal());case 19:a.next=29;break;case 21:return a.prev=21,a.t0=a.catch(1),a.next=25,Object(o.c)({type:i.b.DELETE_TODO_FAILURE});case 25:return a.next=27,Object(o.c)(s.a.showNotification("Delete todo",a.t0.message,"red"));case 27:return a.next=29,Object(o.c)(u.a.hideLoadingAction());case 29:case"end":return a.stop()}},k,null,[[1,21]])}function K(e){var t,n;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.id,a.prev=1,a.next=4,Object(o.b)(T,t);case 4:if("fail"!==(n=a.sent).data.result){a.next=7;break}throw new Error(n.error);case 7:return a.next=9,Object(o.c)({type:i.b.CHECK_TODO_SUCCESS,item:n.data.item});case 9:return a.next=11,Object(o.c)(s.a.showNotification("Check todo","Check to do success","blue"));case 11:a.next=19;break;case 13:return a.prev=13,a.t0=a.catch(1),a.next=17,Object(o.c)({type:i.b.CHECK_TODO_FAILURE,id:t});case 17:return a.next=19,Object(o.c)(s.a.showNotification("Check todo",a.t0.message,"red"));case 19:case"end":return a.stop()}},A,null,[[1,13]])}function M(e){var t,n;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.id,a.prev=1,a.next=4,Object(o.b)(p,t);case 4:if("fail"!==(n=a.sent).data.result){a.next=7;break}throw new Error(n.error);case 7:return a.next=9,Object(o.c)({type:i.b.UNCHECK_TODO_SUCCESS,item:n.data.item});case 9:return a.next=11,Object(o.c)(s.a.showNotification("Check todo","Check to do success","blue"));case 11:a.next=19;break;case 13:return a.prev=13,a.t0=a.catch(1),a.next=17,Object(o.c)({type:i.b.UNCHECK_TODO_FAILURE,id:t});case 17:return a.next=19,Object(o.c)(s.a.showNotification("Check todo",a.t0.message,"red"));case 19:case"end":return a.stop()}},w,null,[[1,13]])}function P(e){var t,n,r,u;return c.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.values,n=e.callback,c.prev=1,t.id,r=Object(a.a)(t,["id"]),c.next=5,Object(o.b)(j,r);case 5:if("fail"!==(u=c.sent).data.result){c.next=8;break}throw new Error(u.error);case 8:return c.next=10,Object(o.c)({type:i.b.CREATE_DAILY_TODO_SUCCESS,item:u.data.item});case 10:return n(),c.next=13,Object(o.c)(s.a.showNotification("Create todo","Create Todo Success","blue"));case 13:c.next=21;break;case 15:return c.prev=15,c.t0=c.catch(1),c.next=19,Object(o.c)({type:i.b.CREATE_DAILY_TODO_FAILURE});case 19:return c.next=21,Object(o.c)(s.a.showNotification("Create todo",c.t0.message,"red"));case 21:case"end":return c.stop()}},R,null,[[1,15]])}function W(e){var t,n,r,u,d;return c.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.values,n=e.callback,c.prev=1,r=t.id,u=Object(a.a)(t,["id"]),c.next=5,Object(o.b)(S,r,u);case 5:if("fail"!==(d=c.sent).data.result){c.next=8;break}throw new Error(d.error);case 8:return c.next=10,Object(o.c)({type:i.b.EDIT_DAILY_TODO_SUCCESS,item:d.data.item});case 10:return n(),c.next=13,Object(o.c)(s.a.showNotification("Edit todo","Edit Todo Success","blue"));case 13:c.next=21;break;case 15:return c.prev=15,c.t0=c.catch(1),c.next=19,Object(o.c)({type:i.b.EDIT_DAILY_TODO_FAILURE});case 19:return c.next=21,Object(o.c)(s.a.showNotification("Edit todo",c.t0.message,"red"));case 21:case"end":return c.stop()}},y,null,[[1,15]])}function q(e){var t,n;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.values,a.prev=1,a.next=4,Object(o.c)(u.a.showLoadingAction());case 4:return a.next=6,Object(o.b)(m,t._id);case 6:if("fail"!==(n=a.sent).data.result){a.next=9;break}throw new Error(n.error);case 9:return a.next=11,Object(o.c)({type:i.b.DELETE_DAILY_TODO_SUCCESS,item:n.data.item});case 11:return a.next=13,Object(o.c)(i.a.getDailyTodosRequest());case 13:return a.next=15,Object(o.c)(s.a.showNotification("Delete todo","Delete Todo Success","blue"));case 15:return a.next=17,Object(o.c)(u.a.hideLoadingAction());case 17:return a.next=19,Object(o.c)(u.a.clearModal());case 19:a.next=29;break;case 21:return a.prev=21,a.t0=a.catch(1),a.next=25,Object(o.c)({type:i.b.DELETE_DAILY_TODO_FAILURE});case 25:return a.next=27,Object(o.c)(s.a.showNotification("Delete todo",a.t0.message,"red"));case 27:return a.next=29,Object(o.c)(u.a.hideLoadingAction());case 29:case"end":return a.stop()}},U,null,[[1,21]])}function z(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)([Object(o.f)(i.b.GET_TODOS_REQUEST,F),Object(o.f)(i.b.GET_DAILY_TODOS_REQUEST,H),Object(o.f)(i.b.GET_HISTORIES_REQUEST,Y),Object(o.f)(i.b.CREATE_TODO_REQUEST,Q),Object(o.f)(i.b.EDIT_TODO_REQUEST,G),Object(o.f)(i.b.DELETE_TODO_REQUEST,J),Object(o.e)(i.b.CHECK_TODO_REQUEST,K),Object(o.e)(i.b.UNCHECK_TODO_REQUEST,M),Object(o.f)(i.b.CREATE_DAILY_TODO_REQUEST,P),Object(o.f)(i.b.EDIT_DAILY_TODO_REQUEST,W),Object(o.f)(i.b.DELETE_DAILY_TODO_REQUEST,q)]);case 2:case"end":return e.stop()}},N)}C.a.register(D.b,z)},619:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(397),o=n(845),i=n.n(o),s=n(879),u=n(382),d=n(381);t.a=function(e){var t=e.item,n=e.handleAction,a=e.isLoadingAction,o=e.cancelEdit;return r.a.createElement(u.a,{initialValues:t,onSubmit:function(e,t){n(e,t.resetForm)},validationSchema:d.object().shape({todo:d.string().trim().required("Please add todo")}),enableReinitialize:!0,render:function(e){var n=e.values,u=e.handleChange,d=e.handleBlur,b=e.errors,O=e.touched,l=e.handleSubmit;return e.setFieldValue,r.a.createElement("div",{className:i.a.controlInput},r.a.createElement("div",{className:i.a.input},r.a.createElement(c.a,{name:"todo",value:n.todo,handleChange:u,handleBlur:d,error:O.todo&&Boolean(b.todo),message:b.todo,inputProps:{fluid:!0,placeholder:"Add your task"}})),t.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{icon:"check",primary:!0,type:"submit",onClick:l,disabled:a,loading:a}),r.a.createElement(s.a,{icon:"cancel",negative:!0,type:"button",onClick:o,disabled:a,loading:a})):r.a.createElement(s.a,{icon:"add",primary:!0,type:"submit",onClick:l,disabled:a,loading:a}))}})}},623:function(e,t,n){"use strict";var a=n(30),r=n(42),c=n(114),o=n(113),i=n(115),s=n(1),u=n.n(s),d=n(31),b=n(16),O=n(389),l=n(21),E=n(6),f=n(428),_=n(879),T=n(846),p=n.n(T),j=n(363),S=n.n(j),m=function(e){var t=e.item,n=e.handleSetFormItem,a=e.openModalDeleteTodo,r=e.handleCheckTodo,c=e.isLoadingCheck,o=e.type;return u.a.createElement("div",{onClick:"todo"===o?r:void 0,className:S()(p.a.itemWrap,Object(E.a)({},p.a.completed,t.get("isComplete")))},c.get(t.get("_id"))&&u.a.createElement("div",{className:p.a.loadingWrap},u.a.createElement(f.a,{inline:"centered",active:!0,size:"big"})),u.a.createElement("p",null,t.get("todo")),u.a.createElement("div",{className:p.a.actionWrap},u.a.createElement(_.a,{icon:"edit",primary:!0,circular:!0,onClick:n(t)}),u.a.createElement(_.a,{icon:"delete",negative:!0,circular:!0,onClick:a})))},h=(n(449),n(424)),C=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).openModalDeleteTodo=function(e){e.stopPropagation();var t=n.props,a=t.item;(0,t.openModal)("ConfirmationDialog",{values:a,title:"Confirm Delete Task",content:"Do you want to delete this Task",type:t.type})},n.handleCheckTodo=function(){var e=n.props,t=e.checkTodo,a=e.uncheckTodo,r=e.item;e.isLoadingCheck.get(r.get("_id"))||(r.get("isComplete")?a(r.get("_id")):t(r.get("_id")))},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(m,Object.assign({openModalDeleteTodo:this.openModalDeleteTodo,handleCheckTodo:this.handleCheckTodo},this.props))}}]),t}(s.Component),D=Object(d.connect)(function(e){return{isLoadingCheck:Object(h.f)(e)}},function(e){return{checkTodo:function(t){return e(O.a.checkTodoRequest(t))},uncheckTodo:function(t){return e(O.a.uncheckTodoRequest(t))},openModal:function(t,n){return e(l.a.setModal(t,n))}}});t.a=Object(b.d)(D)(C)},845:function(e,t,n){e.exports={controlInput:"styles_controlInput__28bFx",input:"styles_input__2R0OF"}},846:function(e,t,n){e.exports={itemWrap:"styles_itemWrap__3xXS8",actionWrap:"styles_actionWrap__1aHab",loadingWrap:"styles_loadingWrap__jVk__",completed:"styles_completed__2ZAuf"}}}]);
//# sourceMappingURL=4.4caa6cb0.chunk.js.map