(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{536:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var a=n(23),r=n(545),o=Object(a.createActions)({showNotification:["title","message","color"],hideNotification:null},{prefix:"@@".concat(r.b,"/")}),c=o.Types,i=o.Creators,s=c,u=i},545:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var a=n(10),r=Object(a.Map)({title:"",message:"",open:!1,color:"blue"}),o="notification"},561:function(e,t,n){e.exports={messageWrapper:"styles_messageWrapper__1FvZ9"}},562:function(e,t,n){"use strict";var a,r=n(32),o=n(44),c=n(147),i=n(145),s=n(148),u=n(1),d=n.n(u),l=n(33),b=n(17),O=n(5),f=n(545),p=n(23),E=n(536),_=n(45),m=Object(p.createReducer)(f.a,(a={},Object(O.a)(a,E.b.SHOW_NOTIFICATION,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.a,t=arguments.length>1?arguments[1]:void 0,n=t.title,a=t.message,r=t.color;return e.merge({title:n,message:a,color:r,open:!0})}),Object(O.a)(a,E.b.HIDE_NOTIFICATION,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.a).merge({open:!1})}),a));_.a.register(f.b,m);var T=n(889),h=n(885),j=n(561),S=n.n(j),g=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={animation:"fade up",duration:500},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.open,n=e.onClose,a=e.color,r=e.message,o=e.title,c=this.state,i=c.animation,s=c.duration;return d.a.createElement(T.a,{closeOnTriggerClick:!0,open:t,transition:{animation:i,duration:s},onClose:n},d.a.createElement(h.a,{color:a,attached:"top",className:S.a.messageWrapper,onDismiss:n,header:o,content:r}))}}]),t}(u.Component),D=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return d.a.createElement(g,this.props)}}]),t}(d.a.Component);D.propsTypes={};var C=Object(l.connect)(function(e){return{open:e.notification.get("open"),title:e.notification.get("title"),message:e.notification.get("message"),color:e.notification.get("color")}},function(e){return{onClose:function(){return e(E.a.hideNotification())}}});t.a=Object(b.d)(C)(D)},566:function(e,t,n){"use strict";n.d(t,"j",function(){return r}),n.d(t,"i",function(){return o}),n.d(t,"a",function(){return c}),n.d(t,"g",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"h",function(){return u}),n.d(t,"e",function(){return d}),n.d(t,"f",function(){return l}),n.d(t,"c",function(){return b}),n.d(t,"d",function(){return O});var a=n(102),r=function(e){return e[a.b].get("todos")},o=function(e){return e[a.b].get("isLoadingTodos")},c=function(e){return e[a.b].get("dailyTodos")},i=function(e){return e[a.b].get("isLoadingDaily")},s=function(e){return e[a.b].get("histories")},u=function(e){return e[a.b].get("isLoadingHistory")},d=function(e){return e[a.b].get("isLoadingAction")},l=function(e){return e[a.b].get("isLoadingCheck")},b=function(e){return e[a.b].get("historyFilter")},O=function(e){return e[a.b].get("historyPages")}},571:function(e,t,n){e.exports={wrapper:"styles_wrapper__2rJf3",contentWrapper:"styles_contentWrapper__38BTI"}},572:function(e,t,n){e.exports={appBar:"styles_appBar__3pmVF"}},574:function(e,t,n){"use strict";var a=n(57),r=n(1),o=n.n(r),c=n(562),i=n(571),s=n.n(i),u=n(559),d=n(891),l=n(698),b=n(572),O=n.n(b);var f=function(e){var t=e.handleGoBack,n=e.title;return o.a.createElement(d.a,{borderless:!0,fixed:"top",className:O.a.appBar,color:"blue",inverted:!0},o.a.createElement(d.a.Item,{onClick:t},o.a.createElement(l.a,{name:"arrow left"})),o.a.createElement(d.a.Item,{header:!0,as:"h4"},n))},p=n(48);t.a=Object(p.withRouter)(function(e){var t=e.title,n=e.handleGoBack,r=e.children;Object(a.a)(e,["title","handleGoBack","children"]);return o.a.createElement("div",{className:s.a.wrapper},o.a.createElement(f,{title:t,handleGoBack:n}),o.a.createElement("main",{className:s.a.contentWrapper},r),o.a.createElement(c.a,null),o.a.createElement(u.a,null))})},591:function(e,t,n){"use strict";var a,r=n(5),o=n(10),c=n(102),i=n(23),s=n(552),u=n(45),d=function(e){return e.set("isLoadingAction",!0)},l=function(e){return e.set("isLoadingAction",!1)},b=function(e,t){var n=t.id;return e.setIn(["isLoadingCheck",n],!0)},O=function(e,t){var n=t.id;return e.setIn(["isLoadingCheck",n],!1)},f=function(e,t){var n=t.item,a=e.get("todos").map(function(e){return e.get("_id")!==n._id?e:Object(o.fromJS)(n)});return e.set("todos",a).setIn(["isLoadingCheck",n._id],!1)},p=Object(i.createReducer)(c.a,(a={},Object(r.a)(a,s.b.GET_TODOS_REQUEST,function(e){return e.set("isLoadingTodos",!0)}),Object(r.a)(a,s.b.GET_TODOS_FAILURE,function(e){return e.set("isLoadingTodos",!1)}),Object(r.a)(a,s.b.GET_TODOS_SUCCESS,function(e,t){var n=t.items;return e.set("todos",Object(o.fromJS)(n)).set("isLoadingTodos",!1)}),Object(r.a)(a,s.b.CLEAR_TODOS,function(e){return e.set("todos",Object(o.fromJS)([]))}),Object(r.a)(a,s.b.GET_DAILY_TODOS_REQUEST,function(e){return e.set("isLoadingDaily",!0)}),Object(r.a)(a,s.b.GET_DAILY_TODOS_FAILURE,function(e){return e.set("isLoadingDaily",!1)}),Object(r.a)(a,s.b.GET_DAILY_TODOS_SUCCESS,function(e,t){var n=t.items;return e.set("dailyTodos",Object(o.fromJS)(n)).set("isLoadingDaily",!1)}),Object(r.a)(a,s.b.CLEAR_DAILY_TODOS,function(e){return e.set("dailyTodos",Object(o.fromJS)([]))}),Object(r.a)(a,s.b.GET_HISTORIES_REQUEST,function(e){return e.set("isLoadingHistory",!0)}),Object(r.a)(a,s.b.GET_HISTORIES_FAILURE,function(e){return e.set("isLoadingHistory",!1)}),Object(r.a)(a,s.b.GET_HISTORIES_SUCCESS,function(e,t){var n=t.items,a=t.totalPages;return e.merge(Object(o.fromJS)({histories:n,isLoadingHistory:!1,historyPages:a}))}),Object(r.a)(a,s.b.CLEAR_HISTORIES,function(e){return e.set("histories",Object(o.fromJS)([]))}),Object(r.a)(a,s.b.CREATE_TODO_REQUEST,d),Object(r.a)(a,s.b.CREATE_TODO_SUCCESS,function(e,t){var n=t.item,a=e.get("todos").push(Object(o.fromJS)(n));return e.set("todos",a).set("isLoadingAction",!1)}),Object(r.a)(a,s.b.CREATE_TODO_FAILURE,l),Object(r.a)(a,s.b.EDIT_TODO_REQUEST,d),Object(r.a)(a,s.b.EDIT_TODO_SUCCESS,function(e,t){var n=t.item,a=e.get("todos").map(function(e){return e.get("_id")!==n._id?e:Object(o.fromJS)(n)});return e.set("todos",a).set("isLoadingAction",!1)}),Object(r.a)(a,s.b.EDIT_TODO_FAILURE,l),Object(r.a)(a,s.b.CHECK_TODO_REQUEST,b),Object(r.a)(a,s.b.CHECK_TODO_SUCCESS,f),Object(r.a)(a,s.b.CHECK_TODO_FAILURE,O),Object(r.a)(a,s.b.UNCHECK_TODO_REQUEST,b),Object(r.a)(a,s.b.UNCHECK_TODO_SUCCESS,f),Object(r.a)(a,s.b.UNCHECK_TODO_FAILURE,O),Object(r.a)(a,s.b.CREATE_DAILY_TODO_REQUEST,d),Object(r.a)(a,s.b.CREATE_DAILY_TODO_SUCCESS,function(e,t){var n=t.item,a=e.get("dailyTodos").push(Object(o.fromJS)(n));return e.set("dailyTodos",a).set("isLoadingAction",!1)}),Object(r.a)(a,s.b.CREATE_DAILY_TODO_FAILURE,l),Object(r.a)(a,s.b.EDIT_DAILY_TODO_REQUEST,d),Object(r.a)(a,s.b.EDIT_DAILY_TODO_SUCCESS,function(e,t){var n=t.item,a=e.get("dailyTodos").map(function(e){return e.get("_id")!==n._id?e:Object(o.fromJS)(n)});return e.set("dailyTodos",a).set("isLoadingAction",!1)}),Object(r.a)(a,s.b.EDIT_DAILY_TODO_FAILURE,l),Object(r.a)(a,s.b.SET_HISTORY_FILTER,function(e,t){var n=t.name,a=t.value;return e.setIn(["historyFilter",n],a)}),a));u.a.register(c.b,p)},605:function(e,t,n){"use strict";var a=n(57),r=n(14),o=n.n(r),c=n(4),i=n(552),s=n(536),u=n(22),d=n(72),l=function(){return d.a.get("/api/todos/")},b=function(){return d.a.get("/api/dailyTodos/")},O=function(e){return d.a.get("/api/todoHistories/",e)},f=function(e){return d.a.post("/api/todos/",e)},p=function(e,t){return d.a.put("/api/todos/".concat(e),t)},E=function(e){return d.a.delete("/api/todos/".concat(e))},_=function(e){return d.a.post("/api/todos/check/".concat(e))},m=function(e){return d.a.post("/api/todos/uncheck/".concat(e))},T=function(e){return d.a.post("/api/dailyTodos/",e)},h=function(e,t){return d.a.put("/api/dailyTodos/".concat(e),t)},j=function(e){return d.a.delete("/api/dailyTodos/".concat(e))},S=n(566),g=n(106),D=n(102),C=o.a.mark(N),v=o.a.mark(H),y=o.a.mark(G),x=o.a.mark(W),I=o.a.mark(Y),k=o.a.mark(Q),L=o.a.mark(B),A=o.a.mark(J),R=o.a.mark(M),w=o.a.mark(K),U=o.a.mark(P),F=o.a.mark(q);function N(e){var t,n;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.filter,a.prev=1,a.next=4,Object(c.b)(l,t);case 4:if("fail"!==(n=a.sent).data.result){a.next=7;break}throw new Error(n.error);case 7:return a.next=9,Object(c.c)({type:i.b.GET_TODOS_SUCCESS,items:n.data.items});case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(c.c)({type:i.b.GET_TODOS_FAILURE});case 15:case"end":return a.stop()}},C,this,[[1,11]])}function H(e){var t,n;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.filter,a.prev=1,a.next=4,Object(c.b)(b,t);case 4:if("fail"!==(n=a.sent).data.result){a.next=7;break}throw new Error(n.error);case 7:return a.next=9,Object(c.c)({type:i.b.GET_DAILY_TODOS_SUCCESS,items:n.data.items});case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(c.c)({type:i.b.GET_DAILY_TODOS_FAILURE});case 15:case"end":return a.stop()}},v,this,[[1,11]])}function G(){var e,t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(c.d)(S.c);case 3:return e=n.sent,n.next=6,Object(c.b)(O,e.toJS());case 6:if("fail"!==(t=n.sent).data.result){n.next=9;break}throw new Error(t.error);case 9:return n.next=11,Object(c.c)({type:i.b.GET_HISTORIES_SUCCESS,items:t.data.items,totalPages:t.data.totalPages});case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,Object(c.c)({type:i.b.GET_HISTORIES_FAILURE});case 17:case"end":return n.stop()}},y,this,[[0,13]])}function W(e){var t,n,r,u;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.values,n=e.callback,o.prev=1,t.id,r=Object(a.a)(t,["id"]),o.next=5,Object(c.b)(f,r);case 5:if("fail"!==(u=o.sent).data.result){o.next=8;break}throw new Error(u.error);case 8:return o.next=10,Object(c.c)({type:i.b.CREATE_TODO_SUCCESS,item:u.data.item});case 10:return n(),o.next=13,Object(c.c)(s.a.showNotification("Create todo","Create Todo Success","blue"));case 13:o.next=21;break;case 15:return o.prev=15,o.t0=o.catch(1),o.next=19,Object(c.c)({type:i.b.CREATE_TODO_FAILURE});case 19:return o.next=21,Object(c.c)(s.a.showNotification("Create todo",o.t0.message,"red"));case 21:case"end":return o.stop()}},x,this,[[1,15]])}function Y(e){var t,n,r,u,d;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.values,n=e.callback,o.prev=1,r=t.id,u=Object(a.a)(t,["id"]),o.next=5,Object(c.b)(p,r,u);case 5:if("fail"!==(d=o.sent).data.result){o.next=8;break}throw new Error(d.error);case 8:return o.next=10,Object(c.c)({type:i.b.EDIT_TODO_SUCCESS,item:d.data.item});case 10:return n(),o.next=13,Object(c.c)(s.a.showNotification("Edit todo","Edit Todo Success","blue"));case 13:o.next=21;break;case 15:return o.prev=15,o.t0=o.catch(1),o.next=19,Object(c.c)({type:i.b.EDIT_TODO_FAILURE});case 19:return o.next=21,Object(c.c)(s.a.showNotification("Edit todo",o.t0.message,"red"));case 21:case"end":return o.stop()}},I,this,[[1,15]])}function Q(e){var t,n;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.values,a.prev=1,a.next=4,Object(c.c)(u.a.showLoadingAction());case 4:return a.next=6,Object(c.b)(E,t._id);case 6:if("fail"!==(n=a.sent).data.result){a.next=9;break}throw new Error(n.error);case 9:return a.next=11,Object(c.c)({type:i.b.DELETE_TODO_SUCCESS,item:n.data.item});case 11:return a.next=13,Object(c.c)(i.a.getTodosRequest());case 13:return a.next=15,Object(c.c)(s.a.showNotification("Delete todo","Delete Todo Success","blue"));case 15:return a.next=17,Object(c.c)(u.a.hideLoadingAction());case 17:return a.next=19,Object(c.c)(u.a.clearModal());case 19:a.next=29;break;case 21:return a.prev=21,a.t0=a.catch(1),a.next=25,Object(c.c)({type:i.b.DELETE_TODO_FAILURE});case 25:return a.next=27,Object(c.c)(s.a.showNotification("Delete todo",a.t0.message,"red"));case 27:return a.next=29,Object(c.c)(u.a.hideLoadingAction());case 29:case"end":return a.stop()}},k,this,[[1,21]])}function B(e){var t,n;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.id,a.prev=1,a.next=4,Object(c.b)(_,t);case 4:if("fail"!==(n=a.sent).data.result){a.next=7;break}throw new Error(n.error);case 7:return a.next=9,Object(c.c)({type:i.b.CHECK_TODO_SUCCESS,item:n.data.item});case 9:return a.next=11,Object(c.c)(s.a.showNotification("Check todo","Check to do success","blue"));case 11:a.next=19;break;case 13:return a.prev=13,a.t0=a.catch(1),a.next=17,Object(c.c)({type:i.b.CHECK_TODO_FAILURE,id:t});case 17:return a.next=19,Object(c.c)(s.a.showNotification("Check todo",a.t0.message,"red"));case 19:case"end":return a.stop()}},L,this,[[1,13]])}function J(e){var t,n;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.id,a.prev=1,a.next=4,Object(c.b)(m,t);case 4:if("fail"!==(n=a.sent).data.result){a.next=7;break}throw new Error(n.error);case 7:return a.next=9,Object(c.c)({type:i.b.UNCHECK_TODO_SUCCESS,item:n.data.item});case 9:return a.next=11,Object(c.c)(s.a.showNotification("Check todo","Check to do success","blue"));case 11:a.next=19;break;case 13:return a.prev=13,a.t0=a.catch(1),a.next=17,Object(c.c)({type:i.b.UNCHECK_TODO_FAILURE,id:t});case 17:return a.next=19,Object(c.c)(s.a.showNotification("Check todo",a.t0.message,"red"));case 19:case"end":return a.stop()}},A,this,[[1,13]])}function M(e){var t,n,r,u;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.values,n=e.callback,o.prev=1,t.id,r=Object(a.a)(t,["id"]),o.next=5,Object(c.b)(T,r);case 5:if("fail"!==(u=o.sent).data.result){o.next=8;break}throw new Error(u.error);case 8:return o.next=10,Object(c.c)({type:i.b.CREATE_DAILY_TODO_SUCCESS,item:u.data.item});case 10:return n(),o.next=13,Object(c.c)(s.a.showNotification("Create todo","Create Todo Success","blue"));case 13:o.next=21;break;case 15:return o.prev=15,o.t0=o.catch(1),o.next=19,Object(c.c)({type:i.b.CREATE_DAILY_TODO_FAILURE});case 19:return o.next=21,Object(c.c)(s.a.showNotification("Create todo",o.t0.message,"red"));case 21:case"end":return o.stop()}},R,this,[[1,15]])}function K(e){var t,n,r,u,d;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.values,n=e.callback,o.prev=1,r=t.id,u=Object(a.a)(t,["id"]),o.next=5,Object(c.b)(h,r,u);case 5:if("fail"!==(d=o.sent).data.result){o.next=8;break}throw new Error(d.error);case 8:return o.next=10,Object(c.c)({type:i.b.EDIT_DAILY_TODO_SUCCESS,item:d.data.item});case 10:return n(),o.next=13,Object(c.c)(s.a.showNotification("Edit todo","Edit Todo Success","blue"));case 13:o.next=21;break;case 15:return o.prev=15,o.t0=o.catch(1),o.next=19,Object(c.c)({type:i.b.EDIT_DAILY_TODO_FAILURE});case 19:return o.next=21,Object(c.c)(s.a.showNotification("Edit todo",o.t0.message,"red"));case 21:case"end":return o.stop()}},w,this,[[1,15]])}function P(e){var t,n;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.values,a.prev=1,a.next=4,Object(c.c)(u.a.showLoadingAction());case 4:return a.next=6,Object(c.b)(j,t._id);case 6:if("fail"!==(n=a.sent).data.result){a.next=9;break}throw new Error(n.error);case 9:return a.next=11,Object(c.c)({type:i.b.DELETE_DAILY_TODO_SUCCESS,item:n.data.item});case 11:return a.next=13,Object(c.c)(i.a.getDailyTodosRequest());case 13:return a.next=15,Object(c.c)(s.a.showNotification("Delete todo","Delete Todo Success","blue"));case 15:return a.next=17,Object(c.c)(u.a.hideLoadingAction());case 17:return a.next=19,Object(c.c)(u.a.clearModal());case 19:a.next=29;break;case 21:return a.prev=21,a.t0=a.catch(1),a.next=25,Object(c.c)({type:i.b.DELETE_DAILY_TODO_FAILURE});case 25:return a.next=27,Object(c.c)(s.a.showNotification("Delete todo",a.t0.message,"red"));case 27:return a.next=29,Object(c.c)(u.a.hideLoadingAction());case 29:case"end":return a.stop()}},U,this,[[1,21]])}function q(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)([Object(c.f)(i.b.GET_TODOS_REQUEST,N),Object(c.f)(i.b.GET_DAILY_TODOS_REQUEST,H),Object(c.f)(i.b.GET_HISTORIES_REQUEST,G),Object(c.f)(i.b.CREATE_TODO_REQUEST,W),Object(c.f)(i.b.EDIT_TODO_REQUEST,Y),Object(c.f)(i.b.DELETE_TODO_REQUEST,Q),Object(c.e)(i.b.CHECK_TODO_REQUEST,B),Object(c.e)(i.b.UNCHECK_TODO_REQUEST,J),Object(c.f)(i.b.CREATE_DAILY_TODO_REQUEST,M),Object(c.f)(i.b.EDIT_DAILY_TODO_REQUEST,K),Object(c.f)(i.b.DELETE_DAILY_TODO_REQUEST,P)]);case 2:case"end":return e.stop()}},F,this)}g.a.register(D.b,q)},647:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(549),c=n(648),i=n.n(c),s=n(887),u=n(544),d=n(543);t.a=function(e){var t=e.item,n=e.handleAction,a=e.isLoadingAction,c=e.cancelEdit;return r.a.createElement(u.a,{initialValues:t,onSubmit:function(e,t){n(e,t.resetForm)},validationSchema:d.object().shape({todo:d.string().trim().required("Please add todo")}),enableReinitialize:!0,render:function(e){var n=e.values,u=e.handleChange,d=e.handleBlur,l=e.errors,b=e.touched,O=e.handleSubmit;return e.setFieldValue,r.a.createElement("div",{className:i.a.controlInput},r.a.createElement("div",{className:i.a.input},r.a.createElement(o.a,{name:"todo",value:n.todo,handleChange:u,handleBlur:d,error:b.todo&&Boolean(l.todo),message:l.todo,inputProps:{fluid:!0,placeholder:"Add your task"}})),t.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{icon:"check",primary:!0,type:"submit",onClick:O,disabled:a,loading:a}),r.a.createElement(s.a,{icon:"cancel",negative:!0,type:"button",onClick:c,disabled:a,loading:a})):r.a.createElement(s.a,{icon:"add",primary:!0,type:"submit",onClick:O,disabled:a,loading:a}))}})}},648:function(e,t,n){e.exports={controlInput:"styles_controlInput__28bFx",input:"styles_input__2R0OF"}},649:function(e,t,n){e.exports={itemWrap:"styles_itemWrap__3xXS8",actionWrap:"styles_actionWrap__1aHab",loadingWrap:"styles_loadingWrap__jVk__",completed:"styles_completed__2ZAuf"}},654:function(e,t,n){"use strict";var a=n(32),r=n(44),o=n(147),c=n(145),i=n(148),s=n(1),u=n.n(s),d=n(33),l=n(17),b=n(552),O=n(22),f=n(5),p=n(535),E=n(887),_=n(649),m=n.n(_),T=n(146),h=n.n(T),j=function(e){var t=e.item,n=e.handleSetFormItem,a=e.openModalDeleteTodo,r=e.handleCheckTodo,o=e.isLoadingCheck,c=e.type;return u.a.createElement("div",{onClick:"todo"===c?r:void 0,className:h()(m.a.itemWrap,Object(f.a)({},m.a.completed,t.get("isComplete")))},o.get(t.get("_id"))&&u.a.createElement("div",{className:m.a.loadingWrap},u.a.createElement(p.a,{inline:"centered",active:!0,size:"big"})),u.a.createElement("p",null,t.get("todo")),u.a.createElement("div",{className:m.a.actionWrap},u.a.createElement(E.a,{icon:"edit",primary:!0,circular:!0,onClick:n(t)}),u.a.createElement(E.a,{icon:"delete",negative:!0,circular:!0,onClick:a})))},S=(n(591),n(566)),g=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).openModalDeleteTodo=function(e){e.stopPropagation();var t=n.props,a=t.item;(0,t.openModal)("ConfirmationDialog",{values:a,title:"Confirm Delete Task",content:"Do you want to delete this Task",type:t.type})},n.handleCheckTodo=function(){var e=n.props,t=e.checkTodo,a=e.uncheckTodo,r=e.item;e.isLoadingCheck.get(r.get("_id"))||(r.get("isComplete")?a(r.get("_id")):t(r.get("_id")))},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(j,Object.assign({openModalDeleteTodo:this.openModalDeleteTodo,handleCheckTodo:this.handleCheckTodo},this.props))}}]),t}(s.Component),D=Object(d.connect)(function(e){return{isLoadingCheck:Object(S.f)(e)}},function(e){return{checkTodo:function(t){return e(b.a.checkTodoRequest(t))},uncheckTodo:function(t){return e(b.a.uncheckTodoRequest(t))},openModal:function(t,n){return e(O.a.setModal(t,n))}}});t.a=Object(l.d)(D)(g)},854:function(e,t,n){e.exports={todoWrap:"styles_todoWrap__1xpj9",contentWrap:"styles_contentWrap__1CP_s",controlInput:"styles_controlInput__3t5HP",input:"styles_input__1TZj2"}},896:function(e,t,n){"use strict";n.r(t);var a=n(32),r=n(44),o=n(147),c=n(145),i=n(148),s=n(1),u=n.n(s),d=n(33),l=n(17),b=n(552),O=(n(605),n(591),n(535)),f=n(854),p=n.n(f),E=n(574),_=n(647),m=n(654),T=function(e){var t=e.dailyTodos,n=e.isLoadingDailyTodos,a=e.handleGoBack,r=e.formItem,o=e.handleAction,c=e.isLoadingAction,i=e.handleResetFormItem,s=e.handleSetFormItem;return u.a.createElement(E.a,{title:"Daily Todo",handleGoBack:a},u.a.createElement("div",{id:p.a.todoWrap},n&&u.a.createElement(O.a,{active:!0,inline:"centered",size:"big"}),!n&&t&&u.a.createElement("div",{className:p.a.contentWrap},u.a.createElement(_.a,{item:r,handleAction:o,isLoadingAction:c,cancelEdit:i}),u.a.createElement("div",null,t.map(function(e){return u.a.createElement(m.a,{type:"dailyTodo",item:e,key:e.get("_id"),handleSetFormItem:s})})))))},h=n(566),j=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={formItem:{id:0,todo:""}},n.handleGoBack=function(){n.props.history.push("/todo")},n.handleSetFormItem=function(e){return function(t){t.stopPropagation();var a={id:e.get("_id"),todo:e.get("todo")};n.setState({formItem:a})}},n.handleResetFormItem=function(){n.setState({formItem:{id:0,todo:""}})},n.handleAction=function(e,t){var a=n.props,r=a.createDailyTodo,o=a.editDailyTodo;e.id?o(e,n.handleResetFormItem):r(e,t)},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getDailyTodos)()}},{key:"componentWillUnmount",value:function(){(0,this.props.clearDailyTodos)()}},{key:"render",value:function(){return u.a.createElement(T,Object.assign({formItem:this.state.formItem,handleAction:this.handleAction,handleSetFormItem:this.handleSetFormItem,handleResetFormItem:this.handleResetFormItem,handleGoBack:this.handleGoBack},this.props))}}]),t}(s.Component),S=Object(d.connect)(function(e){return{dailyTodos:Object(h.a)(e),isLoadingDailyTodos:Object(h.g)(e),isLoadingAction:Object(h.e)(e)}},function(e){return{getDailyTodos:function(){return e(b.a.getDailyTodosRequest())},clearDailyTodos:function(){return e(b.a.clearDailyTodos())},createDailyTodo:function(t,n){return e(b.a.createDailyTodoRequest(t,n))},editDailyTodo:function(t,n){return e(b.a.editDailyTodoRequest(t,n))}}});t.default=Object(l.d)(S)(j)}}]);
//# sourceMappingURL=13.7baf4f21.chunk.js.map