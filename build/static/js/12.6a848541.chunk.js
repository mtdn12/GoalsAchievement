(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{24:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(2),o=a.n(c),s=a(13),i=a.n(s),u=a(28),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),o=0;o<r;o++)c[o]=arguments[o];return a=n=p(this,e.call.apply(e,[this].concat(c))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,c=a.to;r?t.replace(c):t.push(c)}},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);i()(this.context.router,"You should not use <Link> outside a <Router>"),i()(void 0!==t,'You must specify the "to" property');var c=this.context.router.history,o="string"===typeof t?Object(u.b)(t,null,null,c.location):t,s=c.createHref(o);return r.a.createElement("a",l({},n,{onClick:this.handleClick,href:s,ref:a}))},t}(r.a.Component);m.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=m},735:function(e,t,a){e.exports={AppbarNonAuth:"styles_AppbarNonAuth__1zar9",menuItem:"styles_menuItem__ZjxaD"}},737:function(e,t,a){e.exports={AppbarAuth:"styles_AppbarAuth__3BiBs",menuItem:"styles_menuItem__28cKS"}},739:function(e,t,a){e.exports={pageWrap:"styles_pageWrap__1EWNy",mainContent:"styles_mainContent__3QURM"}},745:function(e,t,a){"use strict";var n=a(216),r=a(217),c=a(219),o=a(218),s=a(220),i=a(1),u=a.n(i),l=a(74),p=a(30),f=a(78),m=a(974),d=a(75),h=a(983),b=a(735),y=a.n(b),k=function(e){var t=e.handleOpenModal;return u.a.createElement(h.a,{id:y.a.AppbarNonAuth,fixed:"top",borderless:!0,color:"blue",inverted:!0},u.a.createElement(h.a.Item,null,"Goal Plan"),u.a.createElement(h.a.Menu,{position:"right"},u.a.createElement(h.a.Item,{className:y.a.menuItem,onClick:function(){return t("RegisterModal",{})}},"Register"),u.a.createElement(h.a.Item,{className:y.a.menuItem,onClick:function(){return t("LoginModal",{item:{email:"",password:""}})}},"Log In")))},v=a(2),g=a.n(v),O=a(84),E=a(24),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var C=function(e){var t=e.to,a=e.exact,n=e.strict,r=e.location,c=e.activeClassName,o=e.className,s=e.activeStyle,i=e.style,l=e.isActive,p=e["aria-current"],f=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),m="object"===("undefined"===typeof t?"undefined":_(t))?t.pathname:t,d=m&&m.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return u.a.createElement(O.a,{path:d,exact:a,strict:n,location:r,children:function(e){var a=e.location,n=e.match,r=!!(l?l(n,a):n);return u.a.createElement(E.a,j({to:t,className:r?[o,c].filter(function(e){return e}).join(" "):o,style:r?j({},i,s):i,"aria-current":r&&p||null},f))}})};C.propTypes={to:E.a.propTypes.to,exact:g.a.bool,strict:g.a.bool,location:g.a.object,activeClassName:g.a.string,className:g.a.string,activeStyle:g.a.object,style:g.a.object,isActive:g.a.func,"aria-current":g.a.oneOf(["page","step","location","date","time","true"])},C.defaultProps={activeClassName:"active","aria-current":"page"};var x=C,I=a(737),T=a.n(I),w=function(e){var t=e.handleLogout;return u.a.createElement(h.a,{id:T.a.AppbarAuth,fixed:"top",borderless:!0,color:"blue",inverted:!0},u.a.createElement(h.a.Item,{as:x,to:"/dashboard",className:T.a.menuItem,activeClassName:T.a.activeItem},"Dashboard"),u.a.createElement(h.a.Item,{as:x,to:"/dailytask",className:T.a.menuItem,activeClassName:T.a.activeItem},"Daily Task"),u.a.createElement(h.a.Item,{as:x,to:"/book",className:T.a.menuItem,activeClassName:T.a.activeItem},"Book"),u.a.createElement(h.a.Item,{as:x,to:"/word",className:T.a.menuItem,activeClassName:T.a.activeItem},"Word"),u.a.createElement(h.a.Menu,{position:"right"},u.a.createElement(h.a.Item,{className:T.a.menuItem,onClick:t},"Log Out")))},N=a(739),A=a.n(N),S=a(734),R=a(970),M=function(e){var t=e.children,a=e.isAuthenticated,n=(e.profile,e.handleLogout),r=e.handleOpenModal,c=e.match;Object(d.a)(e,["children","isAuthenticated","profile","handleLogout","handleOpenModal","match"]);return u.a.createElement("div",{id:A.a.pageWrap},a&&"/welcome"===c.path&&u.a.createElement(R.a,{to:"/dashboard"}),!a&&u.a.createElement(k,{handleOpenModal:r}),a&&u.a.createElement(w,{handleLogout:n}),u.a.createElement("main",{className:A.a.mainContent},t),u.a.createElement(S.a,null))},L=a(20),U=a(142),D=a(97),K=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).handleLogout=function(){a.props.firebase.logout(),a.props.history.push("/"),Object(D.a)()},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(M,Object.assign({},this.props,{handleLogout:this.handleLogout}))}}]),t}(i.Component),q=Object(l.connect)(function(e){return{isAuthenticated:Object(U.b)(e),profile:Object(U.d)(e),auth:Object(U.a)(e)}},function(e){return{handleOpenModal:function(t,a){return e(L.a.setModal(t,a))}}});t.a=Object(p.d)(q,f.withFirebase,m.a,Object(f.firebaseConnect)())(K)},945:function(e,t,a){e.exports={taskWrap:"styles_taskWrap__qNj-Z",listTask:"styles_listTask__2j4tg",taskItem:"styles_taskItem__80jyp",isDone:"styles_isDone__1tGxc"}},982:function(e,t,a){"use strict";a.r(t);var n=a(216),r=a(217),c=a(219),o=a(218),s=a(220),i=a(1),u=a.n(i),l=a(74),p=a(30),f=a(725),m=a(36),d=a(33),h=a.n(d),b=a(10),y=a(141),k=a(223),v=function(e){return k.a.get("/api/dailytasks/",{},{headers:{Authorization:e}})},g=function(e,t){return k.a.post("/api/dailytasks/check/".concat(t),{},{headers:{Authorization:e}})},O=function(e,t){return k.a.post("/api/dailytasks/uncheck/".concat(t),{},{headers:{Authorization:e}})},E=a(142),j=h.a.mark(I),_=h.a.mark(T),C=h.a.mark(w),x=h.a.mark(N);function I(){var e,t;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(b.d)(E.e);case 3:return e=a.sent,a.next=6,Object(b.b)(v,e);case 6:if("fail"!==(t=a.sent).data.result){a.next=9;break}throw new Error(t.error);case 9:return a.next=11,Object(b.c)({type:m.b.GET_ITEMS_SUCCESS,items:t.data.items});case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(0),a.next=17,Object(b.c)({type:m.b.GET_ITEMS_FAILURE});case 17:case"end":return a.stop()}},j,this,[[0,13]])}function T(e){var t,a,n;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,r.prev=1,r.next=4,Object(b.d)(E.e);case 4:return a=r.sent,r.next=7,Object(b.b)(g,a,t);case 7:if("fail"!==(n=r.sent).data.result){r.next=10;break}throw new Error(n.error);case 10:return r.next=12,Object(b.c)({type:m.b.CHECK_ITEM_SUCCESS,item:n.data.item});case 12:return r.next=14,Object(b.c)(y.a.showNotification("Check Task","Check task success","blue"));case 14:r.next=22;break;case 16:return r.prev=16,r.t0=r.catch(1),r.next=20,Object(b.c)({type:m.b.CHECK_ITEM_FAILURE,id:t});case 20:return r.next=22,Object(b.c)(y.a.showNotification("Check Task",r.t0.message,"red"));case 22:case"end":return r.stop()}},_,this,[[1,16]])}function w(e){var t,a,n;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,r.prev=1,r.next=4,Object(b.d)(E.e);case 4:return a=r.sent,r.next=7,Object(b.b)(O,a,t);case 7:if("fail"!==(n=r.sent).data.result){r.next=10;break}throw new Error(n.error);case 10:return r.next=12,Object(b.c)({type:m.b.UNCHECK_ITEM_SUCCESS,item:n.data.item});case 12:return r.next=14,Object(b.c)(y.a.showNotification("unCheck Task","unCheck task success","blue"));case 14:r.next=22;break;case 16:return r.prev=16,r.t0=r.catch(1),r.next=20,Object(b.c)({type:m.b.UNCHECK_ITEM_FAILURE,id:t});case 20:return r.next=22,Object(b.c)(y.a.showNotification("unCheck Task",r.t0.message,"red"));case 22:case"end":return r.stop()}},C,this,[[1,16]])}function N(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.f)(m.b.GET_ITEMS_REQUEST,I),Object(b.e)(m.b.CHECK_ITEM_REQUEST,T),Object(b.e)(m.b.UNCHECK_ITEM_REQUEST,w)]);case 2:case"end":return e.stop()}},x,this)}var A=N,S=a(3),R=a(969),M=a(991),L=a(985),U=a(221),D=a.n(U),K=a(945),q=a.n(K),P=a(745),W=function(e){var t=e.items,a=e.isLoadingItems,n=e.handleCheckTask,r=e.handleUncheckTask,c=e.isLoadingCheck;return u.a.createElement(P.a,null,a&&u.a.createElement(R.a,{active:!0,inline:"centered",size:"big"}),!a&&u.a.createElement("div",{className:q.a.taskWrap},u.a.createElement(M.a,{as:"h1",textAlign:"center",inverted:!0},"Daily Task"),u.a.createElement("div",{className:q.a.listTask},t&&t.map(function(e){return u.a.createElement("div",{className:D()(q.a.taskItem,Object(S.a)({},q.a.isDone,e.get("isDone"))),key:e.get("_id")},u.a.createElement("p",null,e.get("task")),e.get("isDone")?u.a.createElement(L.a,{icon:"cancel",circular:!0,negative:!0,disabled:c.get(e.get("_id")),loading:c.get(e.get("_id")),onClick:r(e.get("_id"))}):u.a.createElement(L.a,{icon:"checkmark",circular:!0,primary:!0,disabled:c.get(e.get("_id")),loading:c.get(e.get("_id")),onClick:n(e.get("_id"))}))}))))},H=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.handleGetTasks()}},{key:"componentWillUnmount",value:function(){this.props.handleClearTasks()}},{key:"render",value:function(){return u.a.createElement(W,this.props)}}]),t}(i.Component),G=Object(l.connect)(function(e){return{items:function(e){return e.dailyTask.get("items")}(e),isLoadingItems:function(e){return e.dailyTask.get("isLoadingItems")}(e),isLoadingCheck:function(e){return e.dailyTask.get("isLoadingCheck")}(e)}},function(e){return{handleGetTasks:function(){return e(m.a.getItemsRequest())},handleClearTasks:function(){return e(m.a.clearItems())},handleCheckTask:function(t){return function(){return e(m.a.checkItemRequest(t))}},handleUncheckTask:function(t){return function(){return e(m.a.uncheckItemRequest(t))}}}}),z=Object(f.a)({key:"dailyTask",saga:A});t.default=Object(p.d)(z,G)(H)}}]);
//# sourceMappingURL=12.6a848541.chunk.js.map