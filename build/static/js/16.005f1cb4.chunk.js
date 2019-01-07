(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{24:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(2),o=a.n(c),i=a(13),s=a.n(i),u=a(28),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),o=0;o<r;o++)c[o]=arguments[o];return a=n=d(this,e.call.apply(e,[this].concat(c))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!p(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,c=a.to;r?t.replace(c):t.push(c)}},d(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var c=this.context.router.history,o="string"===typeof t?Object(u.b)(t,null,null,c.location):t,i=c.createHref(o);return r.a.createElement("a",l({},n,{onClick:this.handleClick,href:i,ref:a}))},t}(r.a.Component);f.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=f},735:function(e,t,a){e.exports={AppbarNonAuth:"styles_AppbarNonAuth__1zar9",menuItem:"styles_menuItem__ZjxaD"}},737:function(e,t,a){e.exports={AppbarAuth:"styles_AppbarAuth__3BiBs",menuItem:"styles_menuItem__28cKS"}},739:function(e,t,a){e.exports={pageWrap:"styles_pageWrap__1EWNy",mainContent:"styles_mainContent__3QURM"}},745:function(e,t,a){"use strict";var n=a(216),r=a(217),c=a(219),o=a(218),i=a(220),s=a(1),u=a.n(s),l=a(74),d=a(30),p=a(78),f=a(974),b=a(75),m=a(983),h=a(735),E=a.n(h),O=function(e){var t=e.handleOpenModal;return u.a.createElement(m.a,{id:E.a.AppbarNonAuth,fixed:"top",borderless:!0,color:"blue",inverted:!0},u.a.createElement(m.a.Item,null,"Goal Plan"),u.a.createElement(m.a.Menu,{position:"right"},u.a.createElement(m.a.Item,{className:E.a.menuItem,onClick:function(){return t("RegisterModal",{})}},"Register"),u.a.createElement(m.a.Item,{className:E.a.menuItem,onClick:function(){return t("LoginModal",{item:{email:"",password:""}})}},"Log In")))},j=a(2),v=a.n(j),g=a(84),y=a(24),w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var _=function(e){var t=e.to,a=e.exact,n=e.strict,r=e.location,c=e.activeClassName,o=e.className,i=e.activeStyle,s=e.style,l=e.isActive,d=e["aria-current"],p=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),f="object"===("undefined"===typeof t?"undefined":x(t))?t.pathname:t,b=f&&f.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return u.a.createElement(g.a,{path:b,exact:a,strict:n,location:r,children:function(e){var a=e.location,n=e.match,r=!!(l?l(n,a):n);return u.a.createElement(y.a,w({to:t,className:r?[o,c].filter(function(e){return e}).join(" "):o,style:r?w({},s,i):s,"aria-current":r&&d||null},p))}})};_.propTypes={to:y.a.propTypes.to,exact:v.a.bool,strict:v.a.bool,location:v.a.object,activeClassName:v.a.string,className:v.a.string,activeStyle:v.a.object,style:v.a.object,isActive:v.a.func,"aria-current":v.a.oneOf(["page","step","location","date","time","true"])},_.defaultProps={activeClassName:"active","aria-current":"page"};var k=_,C=a(737),M=a.n(C),W=function(e){var t=e.handleLogout;return u.a.createElement(m.a,{id:M.a.AppbarAuth,fixed:"top",borderless:!0,color:"blue",inverted:!0},u.a.createElement(m.a.Item,{as:k,to:"/dashboard",className:M.a.menuItem,activeClassName:M.a.activeItem},"Dashboard"),u.a.createElement(m.a.Item,{as:k,to:"/dailytask",className:M.a.menuItem,activeClassName:M.a.activeItem},"Daily Task"),u.a.createElement(m.a.Item,{as:k,to:"/book",className:M.a.menuItem,activeClassName:M.a.activeItem},"Book"),u.a.createElement(m.a.Item,{as:k,to:"/word",className:M.a.menuItem,activeClassName:M.a.activeItem},"Word"),u.a.createElement(m.a.Menu,{position:"right"},u.a.createElement(m.a.Item,{className:M.a.menuItem,onClick:t},"Log Out")))},I=a(739),R=a.n(I),A=a(734),L=a(970),T=function(e){var t=e.children,a=e.isAuthenticated,n=(e.profile,e.handleLogout),r=e.handleOpenModal,c=e.match;Object(b.a)(e,["children","isAuthenticated","profile","handleLogout","handleOpenModal","match"]);return u.a.createElement("div",{id:R.a.pageWrap},a&&"/welcome"===c.path&&u.a.createElement(L.a,{to:"/dashboard"}),!a&&u.a.createElement(O,{handleOpenModal:r}),a&&u.a.createElement(W,{handleLogout:n}),u.a.createElement("main",{className:R.a.mainContent},t),u.a.createElement(A.a,null))},S=a(20),N=a(142),D=a(97),U=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).handleLogout=function(){a.props.firebase.logout(),a.props.history.push("/"),Object(D.a)()},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(T,Object.assign({},this.props,{handleLogout:this.handleLogout}))}}]),t}(s.Component),P=Object(l.connect)(function(e){return{isAuthenticated:Object(N.b)(e),profile:Object(N.d)(e),auth:Object(N.a)(e)}},function(e){return{handleOpenModal:function(t,a){return e(S.a.setModal(t,a))}}});t.a=Object(d.d)(P,p.withFirebase,f.a,Object(p.firebaseConnect)())(U)},758:function(e,t,a){"use strict";a.d(t,"f",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"a",function(){return c}),a.d(t,"b",function(){return o}),a.d(t,"e",function(){return i}),a.d(t,"c",function(){return s});var n=function(e){return e.word.get("items")},r=function(e){return e.word.get("isLoadingItems")},c=function(e){return e.word.get("filter")},o=function(e){return e.word.get("isLoadingCheck")},i=function(e){return e.word.get("item")},s=function(e){return e.word.get("isLoadingItem")}},789:function(e,t,a){"use strict";var n=a(75),r=a(33),c=a.n(r),o=a(10),i=a(29),s=a(141),u=a(20),l=a(226),d=a(223),p=function(e,t){return d.a.get("/api/words/",Object(l.a)({},t),{headers:{Authorization:e}})},f=function(e,t){return d.a.get("/api/words/".concat(t),{},{headers:{Authorization:e}})},b=function(e,t){return d.a.post("/api/words/",Object(l.a)({},t),{headers:{Authorization:e}})},m=function(e,t,a){return d.a.put("/api/words/".concat(t),Object(l.a)({},a),{headers:{Authorization:e}})},h=function(e,t){return d.a.delete("/api/words/".concat(t),{},{headers:{Authorization:e}})},E=function(e,t){return d.a.post("/api/words/check/".concat(t),{},{headers:{Authorization:e}})},O=a(142),j=a(758),v=a(78),g=c.a.mark(M),y=c.a.mark(W),w=c.a.mark(I),x=c.a.mark(R),_=c.a.mark(A),k=c.a.mark(L),C=c.a.mark(T);function M(e){var t,a,n;return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.filter,r.prev=1,r.next=4,Object(o.d)(O.e);case 4:return a=r.sent,r.next=7,Object(o.b)(p,a,t);case 7:if("fail"!==(n=r.sent).data.result){r.next=10;break}throw new Error(n.error);case 10:return r.next=12,Object(o.c)({type:i.b.GET_ITEMS_SUCCESS,items:n.data.items});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(o.c)({type:i.b.GET_ITEMS_FAILURE});case 18:case"end":return r.stop()}},g,this,[[1,14]])}function W(e){var t,a,n;return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,r.prev=1,r.next=4,Object(o.d)(O.e);case 4:return a=r.sent,r.next=7,Object(o.b)(f,a,t);case 7:if("fail"!==(n=r.sent).data.result){r.next=10;break}throw new Error(n.error);case 10:return r.next=12,Object(o.c)({type:i.b.GET_ITEM_SUCCESS,item:n.data.item});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(o.c)({type:i.b.GET_ITEM_FAILURE});case 18:case"end":return r.stop()}},y,this,[[1,14]])}function I(e){var t,a,r,l,d,p,f,m,h,E,g,y;return c.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.values,c.prev=1,c.next=4,Object(o.c)(u.a.showLoadingAction());case 4:return a=Object(v.getFirebase)(),r=a.auth().currentUser,l="".concat(r.uid,"/words"),d=Date.now(),p={name:d},c.next=11,a.uploadFile(l,t.image,null,p);case 11:return f=c.sent,c.next=14,f.uploadTaskSnapshot.ref.getDownloadURL();case 14:return m=c.sent,t.image,(h=Object(n.a)(t,["image"])).linkMap=m,h.filePath=l+"/"+d,c.next=20,Object(o.d)(O.e);case 20:return E=c.sent,c.next=23,Object(o.b)(b,E,h);case 23:if("fail"!==(g=c.sent).data.result){c.next=26;break}throw new Error(g.data.error);case 26:return c.next=28,Object(o.c)({type:i.b.CREATE_ITEM_SUCCESS});case 28:return c.next=30,Object(o.d)(j.a);case 30:return y=c.sent,c.next=33,Object(o.c)(i.a.getItemsRequest(y.toJS()));case 33:return c.next=35,Object(o.c)(s.a.showNotification("Create word","Create word success","blue"));case 35:return c.next=37,Object(o.c)(u.a.hideLoadingAction());case 37:return c.next=39,Object(o.c)(u.a.clearModal());case 39:c.next=49;break;case 41:return c.prev=41,c.t0=c.catch(1),c.next=45,Object(o.c)({type:i.b.CREATE_ITEM_FAILURE});case 45:return c.next=47,Object(o.c)(s.a.showNotification("Create word",c.t0.message,"red"));case 47:return c.next=49,Object(o.c)(u.a.hideLoadingAction());case 49:case"end":return c.stop()}},w,this,[[1,41]])}function R(e){var t,a,r,l,d,p,f,b,h,E,g,y,w,_,k;return c.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.values,c.prev=1,c.next=4,Object(o.c)(u.a.showLoadingAction());case 4:return c.next=6,Object(o.d)(O.e);case 6:if(a=c.sent,!t.image){c.next=29;break}return l=Object(v.getFirebase)(),d=l.auth().currentUser,c.next=12,l.deleteFile(t.filePath);case 12:return p="".concat(d.uid,"/words"),f=Date.now(),b={name:f},c.next=17,l.uploadFile(p,t.image,null,b);case 17:return h=c.sent,c.next=20,h.uploadTaskSnapshot.ref.getDownloadURL();case 20:return E=c.sent,t.image,g=t.id,(y=Object(n.a)(t,["image","id"])).linkMap=E,y.filePath=p+"/"+f,c.next=26,Object(o.b)(m,a,g,y);case 26:r=c.sent,c.next=33;break;case 29:return w=t.id,_=Object(n.a)(t,["id"]),c.next=32,Object(o.b)(m,a,w,_);case 32:r=c.sent;case 33:if("fail"!==r.data.result){c.next=35;break}throw new Error(r.data.error);case 35:return c.next=37,Object(o.c)({type:i.b.EDIT_ITEM_SUCCESS});case 37:return c.next=39,Object(o.d)(j.a);case 39:return k=c.sent,c.next=42,Object(o.c)(i.a.getItemsRequest(k.toJS()));case 42:return c.next=44,Object(o.c)(s.a.showNotification("Edit word","Edit word success","blue"));case 44:return c.next=46,Object(o.c)(u.a.hideLoadingAction());case 46:return c.next=48,Object(o.c)(u.a.clearModal());case 48:c.next=58;break;case 50:return c.prev=50,c.t0=c.catch(1),c.next=54,Object(o.c)({type:i.b.EDIT_ITEM_FAILURE});case 54:return c.next=56,Object(o.c)(s.a.showNotification("Edit word",c.t0.message,"red"));case 56:return c.next=58,Object(o.c)(u.a.hideLoadingAction());case 58:case"end":return c.stop()}},x,this,[[1,50]])}function A(e){var t,a,n,r,l;return c.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.values,c.prev=1,c.next=4,Object(o.d)(O.e);case 4:return a=c.sent,c.next=7,Object(o.c)(u.a.showLoadingAction());case 7:return c.next=9,Object(o.b)(h,a,t._id);case 9:if("fail"!==(n=c.sent).data.result){c.next=12;break}throw new Error(n.data.error);case 12:return r=Object(v.getFirebase)(),c.next=15,r.deleteFile(t.filePath);case 15:return c.next=17,Object(o.c)({type:i.b.DELETE_ITEM_SUCCESS});case 17:return c.next=19,Object(o.d)(j.a);case 19:return l=c.sent,c.next=22,Object(o.c)(i.a.getItemsRequest(l.toJS()));case 22:return c.next=24,Object(o.c)(s.a.showNotification("Delete word","Delete word success","blue"));case 24:return c.next=26,Object(o.c)(u.a.hideLoadingAction());case 26:return c.next=28,Object(o.c)(u.a.clearModal());case 28:c.next=38;break;case 30:return c.prev=30,c.t0=c.catch(1),c.next=34,Object(o.c)({type:i.b.DELETE_ITEM_FAILURE});case 34:return c.next=36,Object(o.c)(s.a.showNotification("Delete word",c.t0.message,"red"));case 36:return c.next=38,Object(o.c)(u.a.hideLoadingAction());case 38:case"end":return c.stop()}},_,this,[[1,30]])}function L(e){var t,a,n,r;return c.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.id,c.prev=1,c.next=4,Object(o.d)(O.e);case 4:return a=c.sent,c.next=7,Object(o.b)(E,a,t);case 7:if("fail"!==(n=c.sent).data.result){c.next=10;break}throw new Error(n.data.error);case 10:return c.next=12,Object(o.c)({type:i.b.CHECK_RECALL_SUCCESS,id:t});case 12:return c.next=14,Object(o.d)(j.a);case 14:return r=c.sent,c.next=17,Object(o.c)(i.a.getItemsRequest(r.toJS()));case 17:return c.next=19,Object(o.c)(s.a.showNotification("Check word","Check word success","blue"));case 19:c.next=27;break;case 21:return c.prev=21,c.t0=c.catch(1),c.next=25,Object(o.c)({type:i.b.CHECK_RECALL_FAILURE,id:t});case 25:return c.next=27,Object(o.c)(s.a.showNotification("check word",c.t0.message,"red"));case 27:case"end":return c.stop()}},k,this,[[1,21]])}function T(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)([Object(o.f)(i.b.GET_ITEMS_REQUEST,M),Object(o.f)(i.b.GET_ITEM_REQUEST,W),Object(o.f)(i.b.CREATE_ITEM_REQUEST,I),Object(o.f)(i.b.EDIT_ITEM_REQUEST,R),Object(o.f)(i.b.DELETE_ITEM_REQUEST,A),Object(o.f)(i.b.CHECK_RECALL_REQUEST,L)]);case 2:case"end":return e.stop()}},C,this)}t.a=T},955:function(e,t,a){e.exports={wordWrap:"styles_wordWrap__1ifkU",btnWrap:"styles_btnWrap__3tBKO",headerWrap:"styles_headerWrap__K6I11",selectWrap:"styles_selectWrap__3db9e",bookListWrap:"styles_bookListWrap__2W3vK"}},957:function(e,t,a){e.exports={itemWrap:"styles_itemWrap__26AwC",actionWrap:"styles_actionWrap__3p1fl"}},986:function(e,t,a){"use strict";a.r(t);var n=a(216),r=a(217),c=a(219),o=a(218),i=a(220),s=a(1),u=a.n(s),l=a(74),d=a(30),p=a(5),f=a(725),b=a(29),m=a(20),h=a(789),E=a(758),O=a(969),j=a(991),v=a(985),g=a(955),y=a.n(g),w=a(745),x=a(765),_=a(974),k=a(957),C=a.n(k),M=a(724),W=a.n(M),I=function(e){var t=e.item,a=e.openModalEditWord,n=e.openModalDeleteWord,r=e.seeWordDetail,c=e.handleCheckRecall,o=e.isLoadingCheck;return u.a.createElement("div",{className:C.a.itemWrap,onClick:r},u.a.createElement("p",null,t.get("word")),u.a.createElement("pre",null,t.get("description")),u.a.createElement("p",null,"Next recall: ",W()(t.get("nextRecall")).format("DD-MM-YYYY")),u.a.createElement("div",{className:C.a.actionWrap},u.a.createElement(v.a,{icon:"checkmark",primary:!0,circular:!0,onClick:c,loading:o.get(t.get("_id")),disabled:o.get(t.get("_id"))}),u.a.createElement(v.a,{icon:"edit",primary:!0,circular:!0,onClick:a}),u.a.createElement(v.a,{icon:"delete",negative:!0,circular:!0,onClick:n})))},R=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).openModalEditWord=function(e){e.stopPropagation();var t=a.props,n=t.item;(0,t.openModal)("CreateEditWordModal",{item:{id:n.get("_id"),word:n.get("word"),description:n.get("description"),linkMap:n.get("linkMap"),filePath:n.get("filePath")},action:"edit"})},a.openModalDeleteWord=function(e){e.stopPropagation();var t=a.props,n=t.item;(0,t.openModal)("ConfirmationDialog",{values:n,title:"Confirm Delete Word",content:"Do you want to delete this Word",type:"word"})},a.seeWordDetail=function(){var e=a.props,t=e.item;e.history.push("/word/".concat(t.get("_id")))},a.handleCheckRecall=function(e){e.stopPropagation();var t=a.props,n=t.item;(0,t.checkRecall)(n.get("_id"))},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){return u.a.createElement(I,Object.assign({openModalDeleteWord:this.openModalDeleteWord,openModalEditWord:this.openModalEditWord,seeWordDetail:this.seeWordDetail,handleCheckRecall:this.handleCheckRecall},this.props))}}]),t}(s.Component),A=Object(l.connect)(function(e){return{isLoadingCheck:Object(E.b)(e)}},function(e){return{openModal:function(t,a){return e(m.a.setModal(t,a))},checkRecall:function(t){return e(b.a.checkRecallRequest(t))}}}),L=Object(d.d)(A,_.a)(R),T=a(766),S=function(e){var t=e.openModalCreateWord,a=e.words,n=e.isLoadingWords,r=e.setFilter,c=e.filter;return u.a.createElement(w.a,null,u.a.createElement("div",{id:y.a.wordWrap},n&&u.a.createElement(O.a,{active:!0,inline:"centered",size:"big"}),!n&&u.a.createElement("div",{className:y.a.headerWrap},u.a.createElement(j.a,{textAlign:"center",color:"blue",as:"h1"},c.get("isRecall")?"Recall Words":"All Word"),u.a.createElement("div",{className:y.a.selectWrap},u.a.createElement(x.a,{name:"isRecall",value:c.get("isRecall"),options:T.c,handleChange:function(e,t){var a=t.value;return r("isRecall",a)},inputProps:{fluid:!0}}))),!n&&a&&u.a.createElement("div",{className:y.a.bookListWrap},a.size>0?u.a.createElement("div",null,a.map(function(e){return u.a.createElement(L,{key:e.get("_id"),item:e})})):u.a.createElement("p",null,"No word exist")),u.a.createElement("div",{className:y.a.btnWrap},u.a.createElement(v.a,{icon:"add",circular:!0,size:"massive",primary:!0,onClick:t}))))},N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).openModalCreateWord=function(){(0,a.props.openModal)("CreateEditWordModal",{item:{word:"",description:"",linkMap:""},action:"create"})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.filter;(0,e.getListWord)(t.toJS())}},{key:"componentWillUnmount",value:function(){this.props.clearListWord()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.filter,n=t.getListWord;Object(p.is)(e.filter,a)||n(a.toJS())}},{key:"render",value:function(){return u.a.createElement(S,Object.assign({openModalCreateWord:this.openModalCreateWord},this.props))}}]),t}(s.Component),D=Object(l.connect)(function(e){return{words:Object(E.f)(e),isLoadingWords:Object(E.d)(e),filter:Object(E.a)(e)}},function(e){return{getListWord:function(t){return e(b.a.getItemsRequest(t))},clearListWord:function(){return e(b.a.clearItems())},openModal:function(t,a){return e(m.a.setModal(t,a))},setFilter:function(t,a){return e(b.a.setFilter(t,a))}}}),U=Object(f.a)({key:"word",saga:h.a});t.default=Object(d.d)(D,U)(N)}}]);
//# sourceMappingURL=16.005f1cb4.chunk.js.map