(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1031:function(e,t,n){e.exports={todoWrap:"styles_todoWrap__1xpj9",contentWrap:"styles_contentWrap__1CP_s",controlInput:"styles_controlInput__3t5HP",input:"styles_input__1TZj2"}},1084:function(e,t,n){"use strict";n.r(t);var a=n(252),r=n(253),o=n(255),c=n(254),i=n(256),s=n(2),u=n.n(s),d=n(86),l=n(32),p=(n(4),n(821)),b=n(9),f=n(869),h=n(812),O=n(1031),m=n.n(O),E=n(835),j=n(902),_=n(909),T=function(e){var t=e.dailyTodos,n=e.isLoadingDailyTodos,a=e.handleGoBack,r=e.formItem,o=e.handleAction,c=e.isLoadingAction,i=e.handleResetFormItem,s=e.handleSetFormItem;return u.a.createElement(E.a,{title:"Daily Todo",handleGoBack:a},u.a.createElement("div",{id:m.a.todoWrap},n&&u.a.createElement(h.a,{active:!0,inline:"centered",size:"big"}),!n&&t&&u.a.createElement("div",{className:m.a.contentWrap},u.a.createElement(j.a,{item:r,handleAction:o,isLoadingAction:c,cancelEdit:i}),u.a.createElement("div",null,t.map(function(e){return u.a.createElement(_.a,{type:"dailyTodo",item:e,key:e.get("_id"),handleSetFormItem:s})})))))},x=n(844),v=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={formItem:{id:0,todo:""}},n.handleGoBack=function(){n.props.history.push("/todo")},n.handleSetFormItem=function(e){return function(t){t.stopPropagation();var a={id:e.get("_id"),todo:e.get("todo")};n.setState({formItem:a})}},n.handleResetFormItem=function(){n.setState({formItem:{id:0,todo:""}})},n.handleAction=function(e,t){var a=n.props,r=a.createDailyTodo,o=a.editDailyTodo;e.id?o(e,n.handleResetFormItem):r(e,t)},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getDailyTodos)()}},{key:"componentWillUnmount",value:function(){(0,this.props.clearDailyTodos)()}},{key:"render",value:function(){return u.a.createElement(T,Object.assign({formItem:this.state.formItem,handleAction:this.handleAction,handleSetFormItem:this.handleSetFormItem,handleResetFormItem:this.handleResetFormItem,handleGoBack:this.handleGoBack},this.props))}}]),t}(s.Component),g=Object(d.connect)(function(e){return{dailyTodos:Object(x.a)(e),isLoadingDailyTodos:Object(x.g)(e),isLoadingAction:Object(x.e)(e)}},function(e){return{getDailyTodos:function(){return e(b.a.getDailyTodosRequest())},clearDailyTodos:function(){return e(b.a.clearDailyTodos())},createDailyTodo:function(t,n){return e(b.a.createDailyTodoRequest(t,n))},editDailyTodo:function(t,n){return e(b.a.editDailyTodoRequest(t,n))}}}),y=Object(p.a)({key:"todo",saga:f.a});t.default=Object(l.d)(g,y)(v)},828:function(e,t,n){e.exports={messageWrapper:"styles_messageWrapper__1FvZ9"}},830:function(e,t,n){"use strict";var a=n(252),r=n(253),o=n(255),c=n(254),i=n(256),s=n(2),u=n.n(s),d=n(86),l=n(32),p=n(163),b=n(1076),f=n(1067),h=n(828),O=n.n(h),m=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={animation:"fade up",duration:500},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.open,n=e.onClose,a=e.color,r=e.message,o=e.title,c=this.state,i=c.animation,s=c.duration;return u.a.createElement(b.a,{closeOnTriggerClick:!0,open:t,transition:{animation:i,duration:s},onClose:n},u.a.createElement(f.a,{color:a,attached:"top",className:O.a.messageWrapper,onDismiss:n,header:o,content:r}))}}]),t}(s.Component),E=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return u.a.createElement(m,this.props)}}]),t}(u.a.Component);E.propsTypes={};var j=Object(d.connect)(function(e){return{open:e.notification.get("open"),title:e.notification.get("title"),message:e.notification.get("message"),color:e.notification.get("color")}},function(e){return{onClose:function(){return e(p.a.hideNotification())}}});t.a=Object(l.d)(j)(E)},833:function(e,t,n){e.exports={wrapper:"styles_wrapper__2rJf3",contentWrapper:"styles_contentWrapper__38BTI"}},834:function(e,t,n){e.exports={appBar:"styles_appBar__3pmVF"}},835:function(e,t,n){"use strict";var a=n(87),r=n(2),o=n.n(r),c=n(830),i=n(833),s=n.n(i),u=n(832),d=n(1078),l=n(931),p=n(834),b=n.n(p);var f=function(e){var t=e.handleGoBack,n=e.title;return o.a.createElement(d.a,{borderless:!0,fixed:"top",className:b.a.appBar,color:"blue",inverted:!0},o.a.createElement(d.a.Item,{onClick:t},o.a.createElement(l.a,{name:"arrow left"})),o.a.createElement(d.a.Item,{header:!0,as:"h4"},n))},h=n(1057);t.a=Object(h.a)(function(e){var t=e.title,n=e.handleGoBack,r=e.children;Object(a.a)(e,["title","handleGoBack","children"]);return o.a.createElement("div",{className:s.a.wrapper},o.a.createElement(f,{title:t,handleGoBack:n}),o.a.createElement("main",{className:s.a.contentWrapper},r),o.a.createElement(c.a,null),o.a.createElement(u.a,null))})},844:function(e,t,n){"use strict";n.d(t,"j",function(){return a}),n.d(t,"i",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"g",function(){return c}),n.d(t,"b",function(){return i}),n.d(t,"h",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return d}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return p});var a=function(e){return e.todo.get("todos")},r=function(e){return e.todo.get("isLoadingTodos")},o=function(e){return e.todo.get("dailyTodos")},c=function(e){return e.todo.get("isLoadingDaily")},i=function(e){return e.todo.get("histories")},s=function(e){return e.todo.get("isLoadingHistory")},u=function(e){return e.todo.get("isLoadingAction")},d=function(e){return e.todo.get("isLoadingCheck")},l=function(e){return e.todo.get("historyFilter")},p=function(e){return e.todo.get("historyPages")}},869:function(e,t,n){"use strict";var a=n(87),r=n(33),o=n.n(r),c=n(11),i=n(9),s=n(163),u=n(22),d=n(262),l=n(260),p=function(e){return l.a.get("/api/todos/",{},{headers:{Authorization:e}})},b=function(e){return l.a.get("/api/dailyTodos/",{},{headers:{Authorization:e}})},f=function(e,t){return l.a.get("/api/todoHistories/",Object(d.a)({},t),{headers:{Authorization:e}})},h=function(e,t){return l.a.post("/api/todos/",Object(d.a)({},t),{headers:{Authorization:e}})},O=function(e,t,n){return l.a.put("/api/todos/".concat(t),Object(d.a)({},n),{headers:{Authorization:e}})},m=function(e,t){return l.a.delete("/api/todos/".concat(t),{},{headers:{Authorization:e}})},E=function(e,t){return l.a.post("/api/todos/check/".concat(t),{},{headers:{Authorization:e}})},j=function(e,t){return l.a.post("/api/todos/uncheck/".concat(t),{},{headers:{Authorization:e}})},_=function(e,t){return l.a.post("/api/dailyTodos/",Object(d.a)({},t),{headers:{Authorization:e}})},T=function(e,t,n){return l.a.put("/api/dailyTodos/".concat(t),Object(d.a)({},n),{headers:{Authorization:e}})},x=function(e,t){return l.a.delete("/api/dailyTodos/".concat(t),{},{headers:{Authorization:e}})},v=n(164),g=n(844),y=o.a.mark(N),k=o.a.mark(W),D=o.a.mark(G),C=o.a.mark(B),w=o.a.mark(z),S=o.a.mark(H),A=o.a.mark(M),I=o.a.mark(Y),L=o.a.mark(Q),R=o.a.mark(P),U=o.a.mark(q),F=o.a.mark(K);function N(e){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.filter,r.prev=1,r.next=4,Object(c.d)(v.e);case 4:return n=r.sent,r.next=7,Object(c.b)(p,n,t);case 7:if("fail"!==(a=r.sent).data.result){r.next=10;break}throw new Error(a.error);case 10:return r.next=12,Object(c.c)({type:i.b.GET_TODOS_SUCCESS,items:a.data.items});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(c.c)({type:i.b.GET_TODOS_FAILURE});case 18:case"end":return r.stop()}},y,this,[[1,14]])}function W(e){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.filter,r.prev=1,r.next=4,Object(c.d)(v.e);case 4:return n=r.sent,r.next=7,Object(c.b)(b,n,t);case 7:if("fail"!==(a=r.sent).data.result){r.next=10;break}throw new Error(a.error);case 10:return r.next=12,Object(c.c)({type:i.b.GET_DAILY_TODOS_SUCCESS,items:a.data.items});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(c.c)({type:i.b.GET_DAILY_TODOS_FAILURE});case 18:case"end":return r.stop()}},k,this,[[1,14]])}function G(){var e,t,n;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(c.d)(v.e);case 3:return e=a.sent,a.next=6,Object(c.d)(g.c);case 6:return t=a.sent,a.next=9,Object(c.b)(f,e,t.toJS());case 9:if("fail"!==(n=a.sent).data.result){a.next=12;break}throw new Error(n.error);case 12:return a.next=14,Object(c.c)({type:i.b.GET_HISTORIES_SUCCESS,items:n.data.items,totalPages:n.data.totalPages});case 14:a.next=20;break;case 16:return a.prev=16,a.t0=a.catch(0),a.next=20,Object(c.c)({type:i.b.GET_HISTORIES_FAILURE});case 20:case"end":return a.stop()}},D,this,[[0,16]])}function B(e){var t,n,r,u,d;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.values,n=e.callback,o.prev=1,o.next=4,Object(c.d)(v.e);case 4:return r=o.sent,t.id,u=Object(a.a)(t,["id"]),o.next=8,Object(c.b)(h,r,u);case 8:if("fail"!==(d=o.sent).data.result){o.next=11;break}throw new Error(d.error);case 11:return o.next=13,Object(c.c)({type:i.b.CREATE_TODO_SUCCESS,item:d.data.item});case 13:return n(),o.next=16,Object(c.c)(s.a.showNotification("Create todo","Create Todo Success","blue"));case 16:o.next=24;break;case 18:return o.prev=18,o.t0=o.catch(1),o.next=22,Object(c.c)({type:i.b.CREATE_TODO_FAILURE});case 22:return o.next=24,Object(c.c)(s.a.showNotification("Create todo",o.t0.message,"red"));case 24:case"end":return o.stop()}},C,this,[[1,18]])}function z(e){var t,n,r,u,d,l;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.values,n=e.callback,o.prev=1,o.next=4,Object(c.d)(v.e);case 4:return r=o.sent,u=t.id,d=Object(a.a)(t,["id"]),o.next=8,Object(c.b)(O,r,u,d);case 8:if("fail"!==(l=o.sent).data.result){o.next=11;break}throw new Error(l.error);case 11:return o.next=13,Object(c.c)({type:i.b.EDIT_TODO_SUCCESS,item:l.data.item});case 13:return n(),o.next=16,Object(c.c)(s.a.showNotification("Edit todo","Edit Todo Success","blue"));case 16:o.next=24;break;case 18:return o.prev=18,o.t0=o.catch(1),o.next=22,Object(c.c)({type:i.b.EDIT_TODO_FAILURE});case 22:return o.next=24,Object(c.c)(s.a.showNotification("Edit todo",o.t0.message,"red"));case 24:case"end":return o.stop()}},w,this,[[1,18]])}function H(e){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.values,r.prev=1,r.next=4,Object(c.d)(v.e);case 4:return n=r.sent,r.next=7,Object(c.c)(u.a.showLoadingAction());case 7:return r.next=9,Object(c.b)(m,n,t._id);case 9:if("fail"!==(a=r.sent).data.result){r.next=12;break}throw new Error(a.error);case 12:return r.next=14,Object(c.c)({type:i.b.DELETE_TODO_SUCCESS,item:a.data.item});case 14:return r.next=16,Object(c.c)(i.a.getTodosRequest());case 16:return r.next=18,Object(c.c)(s.a.showNotification("Delete todo","Delete Todo Success","blue"));case 18:return r.next=20,Object(c.c)(u.a.hideLoadingAction());case 20:return r.next=22,Object(c.c)(u.a.clearModal());case 22:r.next=32;break;case 24:return r.prev=24,r.t0=r.catch(1),r.next=28,Object(c.c)({type:i.b.DELETE_TODO_FAILURE});case 28:return r.next=30,Object(c.c)(s.a.showNotification("Delete todo",r.t0.message,"red"));case 30:return r.next=32,Object(c.c)(u.a.hideLoadingAction());case 32:case"end":return r.stop()}},S,this,[[1,24]])}function M(e){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,r.prev=1,r.next=4,Object(c.d)(v.e);case 4:return n=r.sent,r.next=7,Object(c.b)(E,n,t);case 7:if("fail"!==(a=r.sent).data.result){r.next=10;break}throw new Error(a.error);case 10:return r.next=12,Object(c.c)({type:i.b.CHECK_TODO_SUCCESS,item:a.data.item});case 12:return r.next=14,Object(c.c)(s.a.showNotification("Check todo","Check to do success","blue"));case 14:r.next=22;break;case 16:return r.prev=16,r.t0=r.catch(1),r.next=20,Object(c.c)({type:i.b.CHECK_TODO_FAILURE,id:t});case 20:return r.next=22,Object(c.c)(s.a.showNotification("Check todo",r.t0.message,"red"));case 22:case"end":return r.stop()}},A,this,[[1,16]])}function Y(e){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,r.prev=1,r.next=4,Object(c.d)(v.e);case 4:return n=r.sent,r.next=7,Object(c.b)(j,n,t);case 7:if("fail"!==(a=r.sent).data.result){r.next=10;break}throw new Error(a.error);case 10:return r.next=12,Object(c.c)({type:i.b.UNCHECK_TODO_SUCCESS,item:a.data.item});case 12:return r.next=14,Object(c.c)(s.a.showNotification("Check todo","Check to do success","blue"));case 14:r.next=22;break;case 16:return r.prev=16,r.t0=r.catch(1),r.next=20,Object(c.c)({type:i.b.UNCHECK_TODO_FAILURE,id:t});case 20:return r.next=22,Object(c.c)(s.a.showNotification("Check todo",r.t0.message,"red"));case 22:case"end":return r.stop()}},I,this,[[1,16]])}function Q(e){var t,n,r,u,d;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.values,n=e.callback,o.prev=1,o.next=4,Object(c.d)(v.e);case 4:return r=o.sent,t.id,u=Object(a.a)(t,["id"]),o.next=8,Object(c.b)(_,r,u);case 8:if("fail"!==(d=o.sent).data.result){o.next=11;break}throw new Error(d.error);case 11:return o.next=13,Object(c.c)({type:i.b.CREATE_DAILY_TODO_SUCCESS,item:d.data.item});case 13:return n(),o.next=16,Object(c.c)(s.a.showNotification("Create todo","Create Todo Success","blue"));case 16:o.next=24;break;case 18:return o.prev=18,o.t0=o.catch(1),o.next=22,Object(c.c)({type:i.b.CREATE_DAILY_TODO_FAILURE});case 22:return o.next=24,Object(c.c)(s.a.showNotification("Create todo",o.t0.message,"red"));case 24:case"end":return o.stop()}},L,this,[[1,18]])}function P(e){var t,n,r,u,d,l;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.values,n=e.callback,o.prev=1,o.next=4,Object(c.d)(v.e);case 4:return r=o.sent,u=t.id,d=Object(a.a)(t,["id"]),o.next=8,Object(c.b)(T,r,u,d);case 8:if("fail"!==(l=o.sent).data.result){o.next=11;break}throw new Error(l.error);case 11:return o.next=13,Object(c.c)({type:i.b.EDIT_DAILY_TODO_SUCCESS,item:l.data.item});case 13:return n(),o.next=16,Object(c.c)(s.a.showNotification("Edit todo","Edit Todo Success","blue"));case 16:o.next=24;break;case 18:return o.prev=18,o.t0=o.catch(1),o.next=22,Object(c.c)({type:i.b.EDIT_DAILY_TODO_FAILURE});case 22:return o.next=24,Object(c.c)(s.a.showNotification("Edit todo",o.t0.message,"red"));case 24:case"end":return o.stop()}},R,this,[[1,18]])}function q(e){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.values,r.prev=1,r.next=4,Object(c.d)(v.e);case 4:return n=r.sent,r.next=7,Object(c.c)(u.a.showLoadingAction());case 7:return r.next=9,Object(c.b)(x,n,t._id);case 9:if("fail"!==(a=r.sent).data.result){r.next=12;break}throw new Error(a.error);case 12:return r.next=14,Object(c.c)({type:i.b.DELETE_DAILY_TODO_SUCCESS,item:a.data.item});case 14:return r.next=16,Object(c.c)(i.a.getDailyTodosRequest());case 16:return r.next=18,Object(c.c)(s.a.showNotification("Delete todo","Delete Todo Success","blue"));case 18:return r.next=20,Object(c.c)(u.a.hideLoadingAction());case 20:return r.next=22,Object(c.c)(u.a.clearModal());case 22:r.next=32;break;case 24:return r.prev=24,r.t0=r.catch(1),r.next=28,Object(c.c)({type:i.b.DELETE_DAILY_TODO_FAILURE});case 28:return r.next=30,Object(c.c)(s.a.showNotification("Delete todo",r.t0.message,"red"));case 30:return r.next=32,Object(c.c)(u.a.hideLoadingAction());case 32:case"end":return r.stop()}},U,this,[[1,24]])}function K(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)([Object(c.f)(i.b.GET_TODOS_REQUEST,N),Object(c.f)(i.b.GET_DAILY_TODOS_REQUEST,W),Object(c.f)(i.b.GET_HISTORIES_REQUEST,G),Object(c.f)(i.b.CREATE_TODO_REQUEST,B),Object(c.f)(i.b.EDIT_TODO_REQUEST,z),Object(c.f)(i.b.DELETE_TODO_REQUEST,H),Object(c.e)(i.b.CHECK_TODO_REQUEST,M),Object(c.e)(i.b.UNCHECK_TODO_REQUEST,Y),Object(c.f)(i.b.CREATE_DAILY_TODO_REQUEST,Q),Object(c.f)(i.b.EDIT_DAILY_TODO_REQUEST,P),Object(c.f)(i.b.DELETE_DAILY_TODO_REQUEST,q)]);case 2:case"end":return e.stop()}},F,this)}t.a=K},902:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(827),c=n(903),i=n.n(c),s=n(1070),u=n(825),d=n(824);t.a=function(e){var t=e.item,n=e.handleAction,a=e.isLoadingAction,c=e.cancelEdit;return r.a.createElement(u.a,{initialValues:t,onSubmit:function(e,t){n(e,t.resetForm)},validationSchema:d.object().shape({todo:d.string().trim().required("Please add todo")}),enableReinitialize:!0,render:function(e){var n=e.values,u=e.handleChange,d=e.handleBlur,l=e.errors,p=e.touched,b=e.handleSubmit;return e.setFieldValue,r.a.createElement("div",{className:i.a.controlInput},r.a.createElement("div",{className:i.a.input},r.a.createElement(o.a,{name:"todo",value:n.todo,handleChange:u,handleBlur:d,error:p.todo&&Boolean(l.todo),message:l.todo,inputProps:{fluid:!0,placeholder:"Add your task"}})),t.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{icon:"check",primary:!0,type:"submit",onClick:b,disabled:a,loading:a}),r.a.createElement(s.a,{icon:"cancel",negative:!0,type:"button",onClick:c,disabled:a,loading:a})):r.a.createElement(s.a,{icon:"add",primary:!0,type:"submit",onClick:b,disabled:a,loading:a}))}})}},903:function(e,t,n){e.exports={controlInput:"styles_controlInput__28bFx",input:"styles_input__2R0OF"}},904:function(e,t,n){e.exports={itemWrap:"styles_itemWrap__3xXS8",actionWrap:"styles_actionWrap__1aHab",loadingWrap:"styles_loadingWrap__jVk__",completed:"styles_completed__2ZAuf"}},909:function(e,t,n){"use strict";var a=n(252),r=n(253),o=n(255),c=n(254),i=n(256),s=n(2),u=n.n(s),d=n(86),l=n(32),p=n(9),b=n(22),f=n(1),h=n(812),O=n(1070),m=n(904),E=n.n(m),j=n(259),_=n.n(j),T=function(e){var t=e.item,n=e.handleSetFormItem,a=e.openModalDeleteTodo,r=e.handleCheckTodo,o=e.isLoadingCheck,c=e.type;return u.a.createElement("div",{onClick:"todo"===c?r:void 0,className:_()(E.a.itemWrap,Object(f.a)({},E.a.completed,t.get("isComplete")))},o.get(t.get("_id"))&&u.a.createElement("div",{className:E.a.loadingWrap},u.a.createElement(h.a,{inline:"centered",active:!0,size:"big"})),u.a.createElement("p",null,t.get("todo")),u.a.createElement("div",{className:E.a.actionWrap},u.a.createElement(O.a,{icon:"edit",primary:!0,circular:!0,onClick:n(t)}),u.a.createElement(O.a,{icon:"delete",negative:!0,circular:!0,onClick:a})))},x=n(844),v=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).openModalDeleteTodo=function(e){e.stopPropagation();var t=n.props,a=t.item;(0,t.openModal)("ConfirmationDialog",{values:a,title:"Confirm Delete Task",content:"Do you want to delete this Task",type:t.type})},n.handleCheckTodo=function(){var e=n.props,t=e.checkTodo,a=e.uncheckTodo,r=e.item;e.isLoadingCheck.get(r.get("_id"))||(r.get("isComplete")?a(r.get("_id")):t(r.get("_id")))},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(T,Object.assign({openModalDeleteTodo:this.openModalDeleteTodo,handleCheckTodo:this.handleCheckTodo},this.props))}}]),t}(s.Component),g=Object(d.connect)(function(e){return{isLoadingCheck:Object(x.f)(e)}},function(e){return{checkTodo:function(t){return e(p.a.checkTodoRequest(t))},uncheckTodo:function(t){return e(p.a.uncheckTodoRequest(t))},openModal:function(t,n){return e(b.a.setModal(t,n))}}});t.a=Object(l.d)(g)(v)}}]);
//# sourceMappingURL=13.5bd01d9f.chunk.js.map