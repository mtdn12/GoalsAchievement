(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({showNotification:["title","message","color"],hideNotification:null}),c=a.Types,i=a.Creators,s=c,u=i},142:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return s});var r=function(e){var t=e.firebase.auth;return t.isLoaded&&!t.isEmpty},a=function(e){return e.firebase.auth.isLoaded},c=function(e){return e.firebase.profile},i=function(e){return e.firebase.auth},s=function(e){return e.firebase.auth.stsTokenManager.accessToken}},20:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({setModal:["modalType","modalProps"],clearModal:null,showLoadingAction:null,hideLoadingAction:null}),c=a.Types,i=a.Creators,s=c,u=i},223:function(e,t,n){"use strict";var r=n(341),a=Object(r.create)({baseURL:"http://localhost:5000",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},timeout:3e3});t.a=a},29:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({getItemsRequest:["filter"],getItemsSuccess:["items"],getItemsFailure:null,clearItems:null,getItemRequest:["id"],getItemSuccess:["item"],getItemFailure:null,clearItem:null,createItemRequest:["values"],createItemSuccess:null,createItemFailure:null,editItemRequest:["values"],editItemSuccess:null,editItemFailure:null,deleteItemRequest:["values"],deleteItemSuccess:null,deleteItemFailure:null,setFilter:["name","value"],checkRecallRequest:["id"],checkRecallSuccess:["id"],checkRecallFailure:["id"]},{prefix:"@@Word/"}),c=a.Types,i=a.Creators,s=c,u=i},36:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({getItemsRequest:["id"],getItemsSuccess:["items"],getItemsFailure:null,clearItems:null,checkItemRequest:["id"],checkItemSuccess:["item"],checkItemFailure:["id"],uncheckItemRequest:["id"],uncheckItemSuccess:["item"],uncheckItemFailure:["id"]},{prefix:"@@dailyTask/"}),c=a.Types,i=a.Creators,s=c,u=i},373:function(e,t,n){e.exports=n(715)},40:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({getItemsRequest:["filter"],getItemsSuccess:["items"],getItemsFailure:null,clearItems:null,getItemRequest:["id"],getItemSuccess:["item"],getItemFailure:null,clearItem:null,createItemRequest:["values"],createItemSuccess:null,createItemFailure:null,editItemRequest:["values"],editItemSuccess:null,editItemFailure:null,deleteItemRequest:["values"],deleteItemSuccess:null,deleteItemFailure:null,changeStatusRequest:["id","status"],changeStatusSuccess:null,changeStatusFailure:null,addReviewRequest:["values"],addReviewSuccess:["item"],addReviewFailure:null,setFilter:["name","value"]},{prefix:"@@book/"}),c=a.Types,i=a.Creators,s=c,u=i},42:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({registerRequest:["values"],registerSuccess:null,registerFailure:null,loginRequest:["values"],loginSuccess:null,loginFailure:null,socialLoginRequest:["provider"],socialLoginSuccess:null,socialLoginFailure:null}),c=a.Types,i=a.Creators,s=c,u=i},424:function(e,t,n){},44:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({getItemsRequest:null,getItemsSuccess:["items"],getItemsFailure:null,clearItems:null,getItemRequest:["id"],getItemSuccess:["item"],getItemFailure:null,clearItem:null,createItemRequest:["values"],createItemSuccess:null,createItemFailure:null,editItemRequest:["values","match"],editItemSuccess:null,editItemFailure:null,deleteItemRequest:["values","match"],deleteItemSuccess:null,deleteItemFailure:null},{prefix:"goal/"}),c=a.Types,i=a.Creators,s=c,u=i},45:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({getItemRequest:["id"],getItemSuccess:null,getItemFailure:null,clearItem:null,createItemRequest:["values"],createItemSuccess:null,createItemFailure:null,editItemRequest:["values","match"],editItemSuccess:null,editItemFailure:null,deleteItemRequest:["values","match"],deleteItemSuccess:null,deleteItemFailure:null,getHistoriesRequest:["id"],getHistoriesSuccess:["items"],getHistoriesFailure:null,clearHistories:null},{prefix:"tatic/"}),c=a.Types,i=a.Creators,s=c,u=i},715:function(e,t,n){"use strict";n.r(t);var r=n(33),a=n.n(r),c=n(336),i=n(1),s=n.n(i),u=n(229),o=n.n(u),l=n(28),m=n(74),d=n(138),b=n(339),I=(n(392),n(414),n(420),n(422),n(424),n(30)),f=n(343),E=n(140),O=n(340),S=n.n(O),g=n(10),j=n(147),h=n(42),p=n(226),T=n(223),_=function(e){return T.a.post("api/users/register",Object(p.a)({},e))},v=n(97),L=n(20),R=a.a.mark(F),C=a.a.mark(w),A=a.a.mark(M),U=a.a.mark(x);function F(e,t){var n,r,c,i;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.values,a.prev=1,a.next=4,Object(g.c)(L.a.showLoadingAction());case 4:return a.next=6,e.auth().createUserWithEmailAndPassword(n.email,n.password);case 6:return r=a.sent,a.next=9,e.auth().currentUser.getIdToken(!0);case 9:if(c=a.sent,Object(v.b)(c),!r.additionalUserInfo.isNewUser){a.next=15;break}return i={uid:r.user.uid,email:n.email,name:n.name},a.next=15,Object(g.b)(_,i);case 15:return a.next=17,r.user.updateProfile({displayName:n.name});case 17:return a.next=19,Object(g.c)({type:h.b.REGISTER_SUCCESS});case 19:return a.next=21,Object(g.c)(L.a.hideLoadingAction());case 21:return a.next=23,Object(g.c)(L.a.clearModal());case 23:return a.next=25,Object(g.c)(L.a.setModal("LoginModal",{item:{email:n.email,password:n.password}}));case 25:a.next=33;break;case 27:return a.prev=27,a.t0=a.catch(1),a.next=31,Object(g.c)({type:h.b.REGISTER_FAILURE});case 31:return a.next=33,Object(g.c)(L.a.hideLoadingAction());case 33:case"end":return a.stop()}},R,this,[[1,27]])}function w(e,t){var n,r;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.values,a.prev=1,a.next=4,Object(g.c)(L.a.showLoadingAction());case 4:return a.next=6,e.auth().signInWithEmailAndPassword(n.email,n.password);case 6:return a.next=8,e.auth().currentUser.getIdToken(!0);case 8:return r=a.sent,Object(v.b)(r),a.next=12,Object(g.c)({type:h.b.LOGIN_SUCCESS});case 12:return a.next=14,Object(g.c)(L.a.hideLoadingAction());case 14:return a.next=16,Object(g.c)(L.a.clearModal());case 16:a.next=24;break;case 18:return a.prev=18,a.t0=a.catch(1),a.next=22,Object(g.c)({type:h.b.LOGIN_FAILURE});case 22:return a.next=24,Object(g.c)(L.a.hideLoadingAction());case 24:case"end":return a.stop()}},C,this,[[1,18]])}function M(e,t){var n,r,c,i;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.provider,a.prev=1,a.next=4,Object(g.c)(L.a.clearModal());case 4:return a.next=6,e.login({provider:n,type:"popup"});case 6:return r=a.sent,a.next=9,e.auth().currentUser.getIdToken(!0);case 9:if(c=a.sent,Object(v.b)(c),!r.additionalUserInfo.isNewUser){a.next=15;break}return i={uid:r.user.uid,email:r.user.email,name:r.user.displayName},a.next=15,Object(g.b)(_,i);case 15:return a.next=17,Object(g.c)({type:h.b.SOCIAL_LOGIN_SUCCESS});case 17:a.next=23;break;case 19:return a.prev=19,a.t0=a.catch(1),a.next=23,Object(g.c)({type:h.b.SOCIAL_LOGIN_FAILURE});case 23:case"end":return a.stop()}},A,this,[[1,19]])}function x(e){var t;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e(),n.next=3,Object(g.a)([Object(g.f)(h.b.REGISTER_REQUEST,F,t),Object(g.f)(h.b.LOGIN_REQUEST,w,t),Object(g.f)(h.b.SOCIAL_LOGIN_REQUEST,M,t)]);case 3:case"end":return n.stop()}},U,this)}var k,y,G,q,J,N,P,H,Q,D,W=x,K=n(3),X=n(5),z=Object(X.Map)({title:"",message:"",open:!1,color:"blue"}),B=n(8),V=n(141),$=Object(B.createReducer)(z,(k={},Object(K.a)(k,V.b.SHOW_NOTIFICATION,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.title,r=t.message,a=t.color;return e.merge({title:n,message:r,color:a,open:!0})}),Object(K.a)(k,V.b.HIDE_NOTIFICATION,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:z).merge({open:!1})}),k)),Y=n(78),Z=Object(X.fromJS)({modal:null,isLoadingAction:!1}),ee=Object(B.createReducer)(Z,(y={},Object(K.a)(y,L.b.SET_MODAL,function(e,t){var n=t.modalType,r=t.modalProps;return e.set("modal",Object(X.fromJS)({modalType:n,modalProps:r}))}),Object(K.a)(y,L.b.CLEAR_MODAL,function(e,t){return e.set("modal",null)}),Object(K.a)(y,L.b.SHOW_LOADING_ACTION,function(e,t){return e.set("isLoadingAction",!0)}),Object(K.a)(y,L.b.HIDE_LOADING_ACTION,function(e,t){return e.set("isLoadingAction",!1)}),y)),te=Object(X.fromJS)({items:[],isLoadingItems:!1,item:{},isLoadingItem:!1}),ne=n(44),re=Object(B.createReducer)(te,(G={},Object(K.a)(G,ne.b.GET_ITEMS_REQUEST,function(e){return e.set("isLoadingItems",!0)}),Object(K.a)(G,ne.b.GET_ITEMS_SUCCESS,function(e,t){var n=t.items;return e.set("items",Object(X.fromJS)(n)).set("isLoadingItems",!1)}),Object(K.a)(G,ne.b.GET_ITEMS_FAILURE,function(e){return e.set("isLoadingItems",!1)}),Object(K.a)(G,ne.b.CLEAR_ITEMS,function(e){return e.set("items",Object(X.fromJS)([]))}),Object(K.a)(G,ne.b.GET_ITEM_REQUEST,function(e){return e.set("isLoadingItem",!0)}),Object(K.a)(G,ne.b.GET_ITEM_SUCCESS,function(e,t){var n=t.item;return e.set("item",Object(X.fromJS)(n)).set("isLoadingItem",!1)}),Object(K.a)(G,ne.b.GET_ITEM_FAILURE,function(e){return e.set("isLoadingItem",!1)}),Object(K.a)(G,ne.b.CLEAR_ITEM,function(e){return e.set("item",Object(X.fromJS)({}))}),G)),ae=Object(X.fromJS)({item:{},isLoadingItem:!1}),ce=n(79),ie=Object(B.createReducer)(ae,(q={},Object(K.a)(q,ce.b.GET_ITEM_REQUEST,function(e){return e.set("isLoadingItem",!0)}),Object(K.a)(q,ce.b.GET_ITEM_FAILURE,function(e){return e.set("isLoadingItem",!1)}),Object(K.a)(q,ce.b.GET_ITEM_SUCCESS,function(e,t){var n=t.item;return e.set("item",Object(X.fromJS)(n)).set("isLoadingItem",!1)}),Object(K.a)(q,ce.b.CLEAR_ITEM,function(e){return e.set("item",Object(X.fromJS)({}))}),q)),se=Object(X.fromJS)({item:{},isLoadingItem:!1}),ue=n(81),oe=Object(B.createReducer)(se,(J={},Object(K.a)(J,ue.b.GET_ITEM_REQUEST,function(e){return e.set("isLoadingItem",!0)}),Object(K.a)(J,ue.b.GET_ITEM_FAILURE,function(e){return e.set("isLoadingItem",!1)}),Object(K.a)(J,ue.b.GET_ITEM_SUCCESS,function(e,t){var n=t.item;return e.set("item",Object(X.fromJS)(n)).set("isLoadingItem",!1)}),Object(K.a)(J,ue.b.CLEAR_ITEM,function(e){return e.set("item",Object(X.fromJS)({}))}),J)),le=Object(X.fromJS)({item:{},isLoadingItem:!1,histories:[],isLoadingHistories:!1}),me=n(45),de=Object(B.createReducer)(le,(N={},Object(K.a)(N,me.b.GET_ITEM_REQUEST,function(e){return e.set("isLoadingItem",!0)}),Object(K.a)(N,me.b.GET_ITEM_FAILURE,function(e){return e.set("isLoadingItem",!1)}),Object(K.a)(N,me.b.GET_ITEM_SUCCESS,function(e,t){var n=t.item;return e.set("item",Object(X.fromJS)(n)).set("isLoadingItem",!1)}),Object(K.a)(N,me.b.CLEAR_ITEM,function(e){return e.set("item",Object(X.fromJS)({}))}),Object(K.a)(N,me.b.GET_HISTORIES_REQUEST,function(e){return e.set("isLoadingHistories",!0)}),Object(K.a)(N,me.b.GET_HISTORIES_SUCCESS,function(e,t){var n=t.items;return e.merge(Object(X.fromJS)({histories:n,isLoadingHistories:!1}))}),Object(K.a)(N,me.b.GET_HISTORIES_FAILURE,function(e){return e.set("isLoadingHistories",!1)}),Object(K.a)(N,me.b.CLEAR_HISTORIES,function(e){return e.set("histories",Object(X.fromJS)([]))}),N)),be=Object(X.fromJS)({items:[],isLoadingItems:!1}),Ie=n(93),fe=Object(B.createReducer)(be,(P={},Object(K.a)(P,Ie.b.GET_ITEMS_REQUEST,function(e){return e.set("isLoadingItems",!0)}),Object(K.a)(P,Ie.b.GET_ITEMS_FAILURE,function(e){return e.set("isLoadingItems",!1)}),Object(K.a)(P,Ie.b.GET_ITEMS_SUCCESS,function(e,t){var n=t.items;return e.set("items",Object(X.fromJS)(n)).set("isLoadingItems",!1)}),Object(K.a)(P,Ie.b.CLEAR_ITEMS,function(e){return e.set("items",Object(X.fromJS)({}))}),P)),Ee=Object(X.fromJS)({items:[],isLoadingItems:!1,isLoadingCheck:{}}),Oe=n(36),Se=function(e,t){var n=t.id;return e.setIn(["isLoadingCheck","".concat(n)],!0)},ge=function(e,t){var n=t.id;return e.setIn(["isLoadingCheck","".concat(n)],!1)},je=function(e,t){var n=t.item,r=e.get("items").map(function(e){return e.get("_id")===n._id?Object(X.fromJS)(n):e});return e.set("items",r).setIn(["isLoadingCheck","".concat(n._id)],!1)},he=Object(B.createReducer)(Ee,(H={},Object(K.a)(H,Oe.b.GET_ITEMS_REQUEST,function(e){return e.set("isLoadingItems",!0)}),Object(K.a)(H,Oe.b.GET_ITEMS_FAILURE,function(e){return e.set("isLoadingItems",!1)}),Object(K.a)(H,Oe.b.GET_ITEMS_SUCCESS,function(e,t){var n=t.items;return e.set("items",Object(X.fromJS)(n)).set("isLoadingItems",!1)}),Object(K.a)(H,Oe.b.CLEAR_ITEMS,function(e){return e.set("items",Object(X.fromJS)([]))}),Object(K.a)(H,Oe.b.CHECK_ITEM_REQUEST,Se),Object(K.a)(H,Oe.b.CHECK_ITEM_FAILURE,ge),Object(K.a)(H,Oe.b.CHECK_ITEM_SUCCESS,je),Object(K.a)(H,Oe.b.UNCHECK_ITEM_SUCCESS,je),Object(K.a)(H,Oe.b.UNCHECK_ITEM_REQUEST,Se),Object(K.a)(H,Oe.b.UNCHECK_ITEM_FAILURE,ge),H)),pe=Object(X.fromJS)({items:[],isLoadingItems:!1,item:{},isLoadingItem:!1,filter:{status:"reading"}}),Te=n(40),_e=Object(B.createReducer)(pe,(Q={},Object(K.a)(Q,Te.b.GET_ITEMS_REQUEST,function(e){return e.set("isLoadingItems",!0)}),Object(K.a)(Q,Te.b.GET_ITEMS_FAILURE,function(e){return e.set("isLoadingItems",!1)}),Object(K.a)(Q,Te.b.GET_ITEMS_SUCCESS,function(e,t){var n=t.items;return e.set("items",Object(X.fromJS)(n)).set("isLoadingItems",!1)}),Object(K.a)(Q,Te.b.CLEAR_ITEMS,function(e){return e.set("items",Object(X.fromJS)([]))}),Object(K.a)(Q,Te.b.GET_ITEM_REQUEST,function(e){return e.set("isLoadingItem",!0)}),Object(K.a)(Q,Te.b.GET_ITEM_SUCCESS,function(e,t){var n=t.item;return e.set("item",Object(X.fromJS)(n)).set("isLoadingItem",!1)}),Object(K.a)(Q,Te.b.GET_ITEM_FAILURE,function(e){return e.set("isLoadingItem",!1)}),Object(K.a)(Q,Te.b.CLEAR_ITEM,function(e){return e.set("item",Object(X.fromJS)({}))}),Object(K.a)(Q,Te.b.SET_FILTER,function(e,t){var n=t.name,r=t.value;return e.setIn(["filter",n],r)}),Q)),ve=Object(X.fromJS)({items:[],isLoadingItems:!1,filter:{isRecall:!1},item:{},isLoadingItem:!1,isLoadingCheck:{}}),Le=n(29),Re=function(e,t){var n=t.id;return e.setIn(["isLoadingCheck",n],!1)},Ce=Object(B.createReducer)(ve,(D={},Object(K.a)(D,Le.b.GET_ITEMS_REQUEST,function(e){return e.set("isLoadingItems",!0)}),Object(K.a)(D,Le.b.GET_ITEMS_FAILURE,function(e){return e.set("isLoadingItems",!1)}),Object(K.a)(D,Le.b.GET_ITEMS_SUCCESS,function(e,t){var n=t.items;return e.set("items",Object(X.fromJS)(n)).set("isLoadingItems",!1)}),Object(K.a)(D,Le.b.CLEAR_ITEMS,function(e){return e.set("items",Object(X.fromJS)([]))}),Object(K.a)(D,Le.b.SET_FILTER,function(e,t){var n=t.name,r=t.value;return e.setIn(["filter",n],r)}),Object(K.a)(D,Le.b.CHECK_RECALL_REQUEST,function(e,t){var n=t.id;return e.setIn(["isLoadingCheck",n],!0)}),Object(K.a)(D,Le.b.CHECK_RECALL_SUCCESS,Re),Object(K.a)(D,Le.b.CHECK_RECALL_FAILURE,Re),Object(K.a)(D,Le.b.GET_ITEM_REQUEST,function(e){return e.set("isLoadingItem",!0)}),Object(K.a)(D,Le.b.GET_ITEM_SUCCESS,function(e,t){var n=t.item;return e.set("item",Object(X.fromJS)(n)).set("isLoadingItem",!1)}),Object(K.a)(D,Le.b.GET_ITEM_FAILURE,function(e){return e.set("isLoadingItem",!1)}),Object(K.a)(D,Le.b.CLEAR_ITEM,function(e){return e.set("item",Object(X.fromJS)({}))}),D));var Ae=function(e){return Object(I.c)({router:Object(j.connectRouter)(e),notification:$,firebase:Y.firebaseReducer,modal:ee,goal:re,objective:ie,strategy:oe,tatic:de,action:fe,dailyTask:he,book:_e,word:Ce})},Ue=n(213),Fe={apiKey:"AIzaSyDmLhCC7NIQhhJFeuWW483X8ORzrUvdPoE",authDomain:"goals-achievement-8451b.firebaseapp.com",databaseURL:"https://goals-achievement-8451b.firebaseio.com",projectId:"goals-achievement-8451b",storageBucket:"goals-achievement-8451b.appspot.com",messagingSenderId:"779770208723"};Ue.initializeApp(Fe);var we=Ue,Me=n(342),xe=n.n(Me),ke={transforms:[S()()],key:"root",storage:xe.a,blacklist:["router","notification"]},ye={userProfile:"users",attachAuthIsReady:!0},Ge=function(e){var t=[],n=[],r=Object(f.a)();t.push(r),t.push(Object(d.routerMiddleware)(e)),n.push(I.a.apply(void 0,t)),n.push(Object(Y.reactReduxFirebase)(we,ye));var a=I.d;"object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&(a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);var c=Ae(e),i=Object(E.persistReducer)(ke,c),s=Object(I.e)(i,a.apply(void 0,n));return s.injectedSagas=[],s.runSaga=r.run,s.injectedSagas.push("auth"),s.runSaga(W,Y.getFirebase),{store:s,persistor:Object(E.persistStore)(s)}},qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Je(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Ne=n(971),Pe=n(970),He=n(84),Qe=n(75),De=n(142),We=n(969),Ke=function(e){var t=e.children,n=Object(Qe.a)(e,["children"]);return s.a.createElement("div",n,t)},Xe=function(e){if(e.error)throw console.log(e.error),new Error("Couldn't load LoadingPage");return s.a.createElement(Ke,null,s.a.createElement(We.a,{active:!0,inline:"centered"}))},ze=Object(m.connect)(function(e){return{isAuthenticated:Object(De.b)(e),isLoadedAuthen:Object(De.c)(e)}})(function(e){var t=e.component,n=e.isAuthenticated,r=e.isLoadedAuthen,a=Object(Qe.a)(e,["component","isAuthenticated","isLoadedAuthen"]);return s.a.createElement(He.a,Object.assign({},a,{render:function(e){var a=e.location,c=Object(Qe.a)(e,["location"]);return r?n?s.a.createElement(t,Object.assign({location:a},c)):s.a.createElement(Pe.a,{to:{pathname:"/welcome",state:{from:a}}}):s.a.createElement(Xe,null)}}))}),Be=n(216),Ve=n(217),$e=n(219),Ye=n(218),Ze=n(220),et=function(e){function t(){var e,n;Object(Be.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object($e.a)(this,(e=Object(Ye.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(Ze.a)(t,e),Object(Ve.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?s.a.createElement(Ke,null,"Something is wrong here! Please try refresh."):this.props.children}}]),t}(i.PureComponent),tt=n(25),nt=n.n(tt),rt=nt()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(5)]).then(n.bind(null,992))},loading:Xe}),at=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,984))},loading:Xe}),ct=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7)]).then(n.bind(null,975))},loading:Xe}),it=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(8)]).then(n.bind(null,980))},loading:Xe}),st=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(9)]).then(n.bind(null,990))},loading:Xe}),ut=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(10)]).then(n.bind(null,989))},loading:Xe}),ot=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(11)]).then(n.bind(null,988))},loading:Xe}),lt=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(12)]).then(n.bind(null,982))},loading:Xe}),mt=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(13)]).then(n.bind(null,993))},loading:Xe}),dt=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(14)]).then(n.bind(null,979))},loading:Xe}),bt=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(15)]).then(n.bind(null,994))},loading:Xe}),It=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(16)]).then(n.bind(null,986))},loading:Xe}),ft=nt()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(17)]).then(n.bind(null,995))},loading:Xe}),Et=function(){return s.a.createElement(et,null,s.a.createElement(Ne.a,null,s.a.createElement(Pe.a,{exact:!0,from:"/",to:"/dashboard"}),s.a.createElement(ze,{path:"/dashboard",exact:!0,component:at}),s.a.createElement(ze,{path:"/dailytask",exact:!0,component:lt}),s.a.createElement(ze,{path:"/goal/:id",exact:!0,component:it}),s.a.createElement(ze,{path:"/objective/:id",exact:!0,component:st}),s.a.createElement(ze,{path:"/strategy/:id",exact:!0,component:ut}),s.a.createElement(ze,{path:"/tatic/:id",exact:!0,component:ot}),s.a.createElement(ze,{path:"/tatic/history/:taticId",exact:!0,component:mt}),s.a.createElement(ze,{path:"/book",exact:!0,component:dt}),s.a.createElement(ze,{path:"/book/:id",exact:!0,component:bt}),s.a.createElement(ze,{path:"/word",exact:!0,component:It}),s.a.createElement(ze,{path:"/word/:id",exact:!0,component:ft}),s.a.createElement(He.a,{path:"/welcome",exact:!0,component:ct}),s.a.createElement(He.a,{component:rt})))},Ot=Object(l.a)();function St(){return(St=Object(c.a)(a.a.mark(function e(){var t,n,r,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=Ge(Ot),n=t.store,r=t.persistor,c=document.getElementById("root"),function(){return o.a.render(s.a.createElement(m.Provider,{store:n},s.a.createElement(b.PersistGate,{loading:s.a.createElement("div",null),persistor:r},s.a.createElement(d.ConnectedRouter,{history:Ot},s.a.createElement(Et,null)))),c)}();case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}!function(){St.apply(this,arguments)}(),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");qe?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Je(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):Je(e)})}}()},79:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({getItemRequest:["id"],getItemSuccess:null,getItemFailure:null,clearItem:null,createItemRequest:["values"],createItemSuccess:null,createItemFailure:null,editItemRequest:["values","match"],editItemSuccess:null,editItemFailure:null,deleteItemRequest:["values","match"],deleteItemSuccess:null,deleteItemFailure:null},{prefix:"objective/"}),c=a.Types,i=a.Creators,s=c,u=i},81:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({getItemRequest:["id"],getItemSuccess:null,getItemFailure:null,clearItem:null,createItemRequest:["values"],createItemSuccess:null,createItemFailure:null,editItemRequest:["values","match"],editItemSuccess:null,editItemFailure:null,deleteItemRequest:["values","match"],deleteItemSuccess:null,deleteItemFailure:null},{prefix:"strategy/"}),c=a.Types,i=a.Creators,s=c,u=i},93:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var r=n(8),a=Object(r.createActions)({getItemsRequest:["id"],getItemsSuccess:null,getItemsFailure:null,clearItems:null,createItemRequest:["values"],createItemSuccess:null,createItemFailure:null,editItemRequest:["values"],editItemSuccess:null,editItemFailure:null,deleteItemRequest:["values"],deleteItemSuccess:null,deleteItemFailure:null},{prefix:"@@action/"}),c=a.Types,i=a.Creators,s=c,u=i},97:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){return localStorage.setItem("auth",e)},a=function(){return localStorage.removeItem("auth")}}},[[373,19,18]]]);
//# sourceMappingURL=main.df9bf450.chunk.js.map