(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(e,t,a){"use strict";a.d(t,"a",function(){return m}),a.d(t,"b",function(){return p});var n=a(26),r=a(1),o=a.n(r),c=a(43),l=a(28),i=(a(4),a(8)),s=a(24),u=a(27);o.a.Component;o.a.Component;var m=function(e){function t(){return e.apply(this,arguments)||this}Object(n.a)(t,e);var a=t.prototype;return a.handleClick=function(e,t){(this.props.onClick&&this.props.onClick(e),e.defaultPrevented||0!==e.button||this.props.target&&"_self"!==this.props.target||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))||(e.preventDefault(),(this.props.replace?t.replace:t.push)(this.props.to))},a.render=function(){var e=this,t=this.props,a=t.innerRef,n=(t.replace,t.to),r=Object(s.a)(t,["innerRef","replace","to"]);return o.a.createElement(c.__RouterContext.Consumer,null,function(t){t||Object(u.a)(!1);var c="string"===typeof n?Object(l.c)(n,null,null,t.location):n,s=c?t.history.createHref(c):"";return o.a.createElement("a",Object(i.a)({},r,{onClick:function(a){return e.handleClick(a,t.history)},href:s,ref:a}))})},t}(o.a.Component);function p(e){var t=e["aria-current"],a=void 0===t?"page":t,n=e.activeClassName,r=void 0===n?"active":n,l=e.activeStyle,u=e.className,p=e.exact,h=e.isActive,d=e.location,f=e.strict,v=e.style,b=e.to,y=Object(s.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to"]),E="object"===typeof b?b.pathname:b,g=E&&E.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return o.a.createElement(c.Route,{path:g,exact:p,strict:f,location:d,children:function(e){var t=e.location,n=e.match,c=!!(h?h(n,t):n),s=c?function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return e}).join(" ")}(u,r):u,p=c?Object(i.a)({},v,l):v;return o.a.createElement(m,Object(i.a)({"aria-current":c&&a||null,className:s,style:p,to:b},y))}})}},399:function(e,t,a){e.exports={AppbarNonAuth:"styles_AppbarNonAuth__1zar9",menuItem:"styles_menuItem__ZjxaD"}},400:function(e,t,a){e.exports={AppbarAuth:"styles_AppbarAuth__3BiBs",menuItem:"styles_menuItem__28cKS"}},401:function(e,t,a){e.exports={pageWrap:"styles_pageWrap__1EWNy",mainContent:"styles_mainContent__3QURM"}},405:function(e,t,a){"use strict";var n=a(30),r=a(42),o=a(114),c=a(113),l=a(115),i=a(1),s=a.n(i),u=a(31),m=a(16),p=a(43),h=a(51),d=a(884),f=a(399),v=a.n(f),b=function(e){var t=e.handleOpenModal;return s.a.createElement(d.a,{id:v.a.AppbarNonAuth,fixed:"top",borderless:!0,color:"blue",inverted:!0},s.a.createElement(d.a.Item,null,"Goal Plan"),s.a.createElement(d.a.Menu,{position:"right"},s.a.createElement(d.a.Item,{className:v.a.menuItem,onClick:function(){return t("RegisterModal",{})}},"Register"),s.a.createElement(d.a.Item,{className:v.a.menuItem,onClick:function(){return t("LoginModal",{item:{email:"",password:""}})}},"Log In")))},y=a(383),E=a(156),g=a(400),O=a.n(g),I=function(e){var t=e.handleLogout;return s.a.createElement(d.a,{id:O.a.AppbarAuth,fixed:"top",borderless:!0,color:"blue",inverted:!0},s.a.createElement(d.a.Item,{as:E.b,to:"/book",className:O.a.menuItem,activeClassName:O.a.activeItem},"Book"),s.a.createElement(d.a.Item,{as:E.b,to:"/word",className:O.a.menuItem,activeClassName:O.a.activeItem},"Word"),s.a.createElement(d.a.Item,{as:E.b,to:"/todo",className:O.a.menuItem,activeClassName:O.a.activeItem},"Todo"),s.a.createElement(d.a.Item,{as:E.b,to:"/diary",className:O.a.menuItem,activeClassName:O.a.activeItem},"Diary"),s.a.createElement(d.a.Menu,{position:"right"},s.a.createElement(d.a.Item,{className:O.a.menuItem,onClick:t},"Log Out")))},_=a(401),C=a.n(_),N=a(391),j=function(e){var t=e.children,a=e.auth,n=e.handleLogout,r=e.handleOpenModal,o=e.match;Object(h.a)(e,["children","auth","handleLogout","handleOpenModal","match"]);return s.a.createElement("div",{id:C.a.pageWrap},a&&"/welcome"===o.path&&s.a.createElement(p.Redirect,{to:"/book"}),!a&&s.a.createElement(b,{handleOpenModal:r}),a&&s.a.createElement(I,{handleLogout:n}),s.a.createElement("main",{className:C.a.mainContent},t),s.a.createElement(N.a,null),s.a.createElement(y.a,null))},A=a(14),w=a(21),k=a(116),x=a(33),L=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).handleLogout=function(){x.a.doSignOut(),a.props.clearAuth()},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(j,Object.assign({},this.props,{handleLogout:this.handleLogout}))}}]),t}(i.Component),M=Object(u.connect)(function(e){return{auth:Object(k.a)(e)}},function(e){return{handleOpenModal:function(t,a){return e(w.a.setModal(t,a))},clearAuth:function(){return e(A.a.clearUser())}}});t.a=Object(m.d)(M,p.withRouter)(L)},726:function(e,t,a){e.exports={welcomeWrap:"styles_welcomeWrap__mhUQ-"}},869:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(726),c=a.n(o),l=a(405);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:c.a.welcomeWrap},r.a.createElement("h1",null,"Welcome to Goal Achievement"),r.a.createElement("h2",null,"Please Login to continue")))}}}]);
//# sourceMappingURL=15.9cac9a6f.chunk.js.map