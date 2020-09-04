(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var n,c=t(0),s=t.n(c),l=t(46),r=t.n(l),m=t(12),o=t(1),u=t(6),i=(t(55),function(){var e=Object(c.useState)(""),a=Object(u.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(""),r=Object(u.a)(l,2),o=r[0],i=r[1];return s.a.createElement("div",{className:"box"},s.a.createElement("h1",{align:"center"},"Welcome to simple chat"),s.a.createElement("div",{className:"panel-login"},s.a.createElement("input",{type:"text",placeholder:"username",onChange:function(e){n(e.target.value)}}),s.a.createElement("input",{type:"text",placeholder:"room",onChange:function(e){i(e.target.value)}}),s.a.createElement("div",{className:"buttons"},s.a.createElement(m.b,{onClick:function(e){return t&&o?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(o)},s.a.createElement("input",{type:"submit",value:"Join",id:"btn-join"})),s.a.createElement(m.b,{onClick:function(e){return t&&o?null:e.preventDefault()},to:"/error?name=".concat(t,"&room=").concat(o)},s.a.createElement("input",{type:"submit",value:"Create",id:"btn-create"})))))}),E=t(26),p=t(48),v=t.n(p),d=t(49),f=t.n(d),b=(t(98),function(e){var a=e.message,t=e.user;return a.username===t?s.a.createElement("div",{className:"message you-message"},s.a.createElement("div",{className:"message-head"},s.a.createElement("div",{className:"message-username"},a.username),s.a.createElement("div",{className:"message-time"},a.time)),s.a.createElement("div",{className:"message-text"},a.message)):null!==a.username?s.a.createElement("div",{className:"message another-message"},s.a.createElement("div",{className:"message-head"},s.a.createElement("div",{className:"message-username"},a.username),s.a.createElement("div",{className:"message-time"},a.time)),s.a.createElement("div",{className:"message-text"},a.message)):s.a.createElement("div",{className:"info-message"},a.message)}),g=function(e){var a=e.messages,t=e.user;return s.a.createElement("div",{className:"messages"},a.map((function(e){return s.a.createElement(b,{message:e,user:t})})))},N=function(e){var a=e.location,t=Object(c.useState)(""),l=Object(u.a)(t,2),r=l[0],m=l[1],o=Object(c.useState)(""),i=Object(u.a)(o,2),p=(i[0],i[1]),d=Object(c.useState)(""),b=Object(u.a)(d,2),N=b[0],h=b[1],j=Object(c.useState)([]),O=Object(u.a)(j,2),x=O[0],y=O[1],S=Object(c.useState)([]),k=Object(u.a)(S,2),C=k[0],J=(k[1],"https://react-simple-message.herokuapp.com/");Object(c.useEffect)((function(){var e=v.a.parse(a.search),t=e.name,c=e.room;n=f()(J),m(t),p(c),n.emit("joinUser",{name:t,room:c})}),[J,a.search]),Object(c.useEffect)((function(){n.on("messageInfo",(function(e){y([].concat(Object(E.a)(x),[e]))})),n.on("message",(function(e){y([].concat(Object(E.a)(x),[e]))}))}),[x]),Object(c.useEffect)((function(){}),[C]);var D=function(e){e.preventDefault(),N&&n.emit("sendMessage",N,(function(){return h("")}))};return s.a.createElement("div",{className:"box"},s.a.createElement("div",{className:"rooms"},s.a.createElement("div",{className:"room-list"},s.a.createElement("div",{className:"room"},s.a.createElement("div",{className:"room-info"},s.a.createElement("div",{className:"room-name"},"\u041a\u043e\u043c\u043d\u0430\u0442\u0430 123"),s.a.createElement("div",{className:"room-participants"},"\u0423\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432: 15")),s.a.createElement("input",{type:"button",value:"Join",hidden:!0})))),s.a.createElement("div",{className:"chat"},s.a.createElement(g,{messages:x,user:r}),s.a.createElement("textarea",{className:"input-field",value:N,placeholder:"Write your message...",onChange:function(e){return h(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?D(e):null}}),s.a.createElement("input",{type:"button",value:"Send",onClick:function(e){return D(e)}})))},h=(t(99),function(){return s.a.createElement("div",{className:"box-not-found"},s.a.createElement("div",{className:"main-container"},s.a.createElement("div",{className:"container-text container-text-not-found"},s.a.createElement("span",null,"p"),s.a.createElement("span",null,"a"),s.a.createElement("span",null,"g"),s.a.createElement("span",null,"e"),s.a.createElement("span",{className:"spacebar"}," "),s.a.createElement("span",null,"n"),s.a.createElement("span",null,"o"),s.a.createElement("span",null,"t"),s.a.createElement("span",{className:"spacebar"}," "),s.a.createElement("span",null,"f"),s.a.createElement("span",null,"o"),s.a.createElement("span",null,"u"),s.a.createElement("span",null,"n"),s.a.createElement("span",null,"d")),s.a.createElement("div",{className:"container-text container-text-error"},s.a.createElement("span",null,"e"),s.a.createElement("span",null,"r"),s.a.createElement("span",null,"r"),s.a.createElement("span",null,"o"),s.a.createElement("span",null,"r"),s.a.createElement("span",{className:"spacebar"}," "),s.a.createElement("span",null,"4"),s.a.createElement("span",null,"0"),s.a.createElement("span",null,"4"))))}),j=function(){return s.a.createElement(m.a,null,s.a.createElement(o.a,{path:"/",exact:!0,component:i}),s.a.createElement(o.a,{path:"/chat",component:N}),s.a.createElement(o.a,{path:"error",component:h}))};r.a.render(s.a.createElement(j,null),document.querySelector("#root"))},50:function(e,a,t){e.exports=t(100)},55:function(e,a,t){},95:function(e,a){},98:function(e,a,t){},99:function(e,a,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.90b4a1c2.chunk.js.map