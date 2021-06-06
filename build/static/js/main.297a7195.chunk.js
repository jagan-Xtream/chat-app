(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{112:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(67),r=n.n(a),i=n(72),j=n(13),o=n(68),l=n.n(o),u=n(69),m=n.n(u),b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=",O=(n(112),n(1)),d=function(e){var t=e.users;return Object(O.jsxs)("div",{className:"textContainer",children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["Realtime Chat Application"," ",Object(O.jsx)("span",{role:"img","aria-label":"emoji",children:"\ud83d\udcac"})]}),Object(O.jsxs)("h2",{children:["Created with React, Express, Node and Socket.IO"," ",Object(O.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2764\ufe0f"})]}),Object(O.jsxs)("h2",{children:["Try it out right now!"," ",Object(O.jsx)("span",{role:"img","aria-label":"emoji",children:"\u2b05\ufe0f"})]})]}),t?Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"People currently chatting:"}),Object(O.jsx)("div",{className:"activeContainer",children:Object(O.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(O.jsxs)("div",{className:"activeItem",children:[t,Object(O.jsx)("img",{alt:"Online Icon",src:b})]},t)}))})})]}):null]})},h=n(70),A=n.n(h),x=(n(137),n(37)),p=n.n(x),g=function(e){var t=e.message,n=t.text,s=t.user,c=!1,a=e.name.trim().toLowerCase();return s===a&&(c=!0),c?Object(O.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(O.jsx)("p",{className:"sentText pr-10",children:a}),Object(O.jsx)("div",{className:"messageBox backgroundBlue",children:Object(O.jsx)("p",{className:"messageText colorWhite",children:p.a.emojify(n)})})]}):Object(O.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(O.jsx)("div",{className:"messageBox backgroundLight",children:Object(O.jsx)("p",{className:"messageText colorDark",children:p.a.emojify(n)})}),Object(O.jsx)("p",{className:"sentText pl-10 ",children:s})]})},f=(n(138),function(e){var t=e.messages,n=e.name;return Object(O.jsx)(A.a,{className:"messages",children:t.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)(g,{message:e,name:n})},t)}))})}),v=(n(139),function(e){var t=e.room;return Object(O.jsxs)("div",{className:"infoBar",children:[Object(O.jsxs)("div",{className:"leftInnerContainer",children:[Object(O.jsx)("img",{className:"onlineIcon",src:b,alt:"online icon"}),Object(O.jsx)("h3",{children:t})]}),Object(O.jsx)("div",{className:"rightInnerContainer",children:Object(O.jsx)("a",{href:"/",children:Object(O.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close icon"})})})]})}),N=(n(140),function(e){var t=e.setMessage,n=e.sendMessage,s=e.message;return Object(O.jsxs)("form",{className:"form",children:[Object(O.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:s,onChange:function(e){var n=e.target.value;return t(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(O.jsx)("button",{className:"sendButton",onClick:function(e){return n(e)},children:"Send"})]})}),C=(n(141),"https://real-time-mern-app.herokuapp.com/"),I=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(j.a)(n,2),r=a[0],o=a[1],u=Object(c.useState)(""),b=Object(j.a)(u,2),h=b[0],A=b[1],x=Object(c.useState)(""),p=Object(j.a)(x,2),g=p[0],I=p[1],S=Object(c.useState)(""),y=Object(j.a)(S,2),E=y[0],R=y[1],w=Object(c.useState)([]),B=Object(j.a)(w,2),k=B[0],M=B[1];Object(c.useEffect)((function(){var e=l.a.parse(t.search),n=e.name,c=e.room;s=m()(C),A(c),o(n),s.emit("join",{name:n,room:c},(function(e){e&&alert(e)}))}),[C,t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){M((function(t){return[].concat(Object(i.a)(t),[e])}))})),s.on("roomData",(function(e){var t=e.users;I(t)}))}),[]);return Object(O.jsxs)("div",{className:"outerContainer",children:[Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(v,{room:h}),Object(O.jsx)(f,{messages:k,name:r}),Object(O.jsx)(N,{message:E,setMessage:R,sendMessage:function(e){e.preventDefault(),E&&s.emit("sendMessage",E,(function(){return R("")}))}})]}),Object(O.jsx)(d,{users:g})]})},S=n(24);n(142);function y(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(j.a)(a,2),i=r[0],o=r[1];return Object(O.jsx)("div",{className:"joinOuterContainer",children:Object(O.jsxs)("div",{className:"joinInnerContainer",children:[Object(O.jsx)("h1",{className:"heading",children:"Join"}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return s(e.target.value)}})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return o(e.target.value)}})}),Object(O.jsx)(S.b,{onClick:function(e){return n&&i?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(i),children:Object(O.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})}var E=n(2),R=function(){return Object(O.jsxs)(S.a,{children:[Object(O.jsx)(E.a,{path:"/",exact:!0,component:y}),Object(O.jsx)(E.a,{path:"/chat",component:I})]})};r.a.render(Object(O.jsx)(R,{}),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.297a7195.chunk.js.map