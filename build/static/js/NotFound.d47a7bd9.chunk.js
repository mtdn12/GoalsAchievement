(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1021:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),i=n(1017),r=n(1010),c=n(76),s=n(731),l={display:"flex",flexDirection:"column",minHeight:"100vh",boxSizing:"border-box",padding:20},u=function(e){e.classes;var t=e.children,n=Object(c.a)(e,["classes","children"]);return o.a.createElement("div",Object.assign({},n,{style:l}),t,o.a.createElement(s.a,null))};t.default=function(e){e.classes;return o.a.createElement(u,null,o.a.createElement(i.a,{as:"h2"},"Not Found"),o.a.createElement(r.a,{as:"a",href:"/",primary:!0},"Go back to homepage"))}},729:function(e,t,n){e.exports={messageWrapper:"styles_messageWrapper__1FvZ9"}},731:function(e,t,n){"use strict";var a=n(212),o=n(213),i=n(215),r=n(214),c=n(216),s=n(2),l=n.n(s),u=n(75),p=n(30),f=n(140),m=n(1013),d=n(1006),h=n(729),b=n.n(h),g=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={animation:"fade up",duration:500},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.open,n=e.onClose,a=e.color,o=e.message,i=e.title,r=this.state,c=r.animation,s=r.duration;return l.a.createElement(m.a,{closeOnTriggerClick:!0,open:t,transition:{animation:c,duration:s},onClose:n},l.a.createElement(d.a,{color:a,attached:"top",className:b.a.messageWrapper,onDismiss:n,header:i,content:o}))}}]),t}(s.Component),O=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(g,this.props)}}]),t}(l.a.Component);O.propsTypes={};var j=Object(u.connect)(function(e){return{open:e.notification.get("open"),title:e.notification.get("title"),message:e.notification.get("message"),color:e.notification.get("color")}},function(e){return{onClose:function(){return e(f.a.hideNotification())}}});t.a=Object(p.d)(j)(O)}}]);
//# sourceMappingURL=NotFound.d47a7bd9.chunk.js.map