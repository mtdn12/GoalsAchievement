(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{375:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return u});var a=n(22),o=n(408),r=Object(a.createActions)({showNotification:["title","message","color"],hideNotification:null},{prefix:"@@".concat(o.b,"/")}),i=r.Types,c=r.Creators,s=i,u=c},383:function(e,t,n){"use strict";var a,o=n(30),r=n(42),i=n(114),c=n(113),s=n(115),u=n(1),l=n.n(u),p=n(31),f=n(16),b=n(6),m=n(408),d=n(22),g=n(375),h=n(44),O=Object(d.createReducer)(m.a,(a={},Object(b.a)(a,g.b.SHOW_NOTIFICATION,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,t=arguments.length>1?arguments[1]:void 0,n=t.title,a=t.message,o=t.color;return e.merge({title:n,message:a,color:o,open:!0})}),Object(b.a)(a,g.b.HIDE_NOTIFICATION,function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a).merge({open:!1})}),a));h.a.register(m.b,O);var v=n(882),j=n(877),y=n(430),C=n.n(y),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={animation:"fade up",duration:500},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,n=e.onClose,a=e.color,o=e.message,r=e.title,i=this.state,c=i.animation,s=i.duration;return l.a.createElement(v.a,{closeOnTriggerClick:!0,open:t,transition:{animation:c,duration:s},onClose:n},l.a.createElement(j.a,{color:a,attached:"top",className:C.a.messageWrapper,onDismiss:n,header:r,content:o}))}}]),t}(u.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(E,this.props)}}]),t}(l.a.Component);N.propsTypes={};var w=Object(p.connect)(function(e){return{open:e.notification.get("open"),title:e.notification.get("title"),message:e.notification.get("message"),color:e.notification.get("color")}},function(e){return{onClose:function(){return e(g.a.hideNotification())}}});t.a=Object(f.d)(w)(N)},408:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r});var a=n(9),o=Object(a.Map)({title:"",message:"",open:!1,color:"blue"}),r="notification"},430:function(e,t,n){e.exports={messageWrapper:"styles_messageWrapper__1FvZ9"}},885:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(883),i=n(879),c=n(51),s=n(383),u={display:"flex",flexDirection:"column",minHeight:"100vh",boxSizing:"border-box",padding:20},l=function(e){var t=e.children,n=Object(c.a)(e,["children"]);return o.a.createElement("div",Object.assign({},n,{style:u}),t,o.a.createElement(s.a,null))};t.default=function(){return o.a.createElement(l,null,o.a.createElement(r.a,{as:"h2"},"Not Found"),o.a.createElement(i.a,{as:"a",href:"/",primary:!0},"Go back to homepage"))}}}]);
//# sourceMappingURL=NotFound.2d29b762.chunk.js.map