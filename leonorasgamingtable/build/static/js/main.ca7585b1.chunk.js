(this.webpackJsonpleonorasgamingtable=this.webpackJsonpleonorasgamingtable||[]).push([[0],{36:function(e,t,a){e.exports=a(80)},41:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,a){},76:function(e,t){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(18),i=a.n(c),l=(a(41),a(42),a(5)),s=a(4),r=a(7),u=a(1),m=(a(43),a(44),a(19)),b=a.n(m),f=a(2),d=a.n(f);var v=function(){var e=b()("wss://leonoraexquisite.herokuapp.com/",{transports:["websocket","polling"]}),t=Object(n.useRef)(),a=Object(n.useState)("off"),c=Object(u.a)(a,2),i=c[0],m=c[1],f=Object(n.useState)("off"),v=Object(u.a)(f,2),p=v[0],h=v[1],g=Object(n.useState)(""),j=Object(u.a)(g,2),O=j[0],E=j[1],N=Object(n.useState)("on"),y=Object(u.a)(N,2),S=y[0],k=y[1],x=Object(n.useState)(""),w=Object(u.a)(x,2),C=w[0],M=w[1],T=Object(n.useState)(""),B=Object(u.a)(T,2),P=(B[0],B[1],Object(n.useState)("please begin the story")),L=Object(u.a)(P,2),H=L[0],D=L[1],A=Object(n.useState)([]),R=Object(u.a)(A,2),F=R[0],W=R[1],I=Object(n.useState)(""),q=Object(u.a)(I,2),J=q[0],G=q[1],Q=Object(n.useState)([]),X=Object(u.a)(Q,2),$=X[0],z=X[1],K=Object(n.useState)([]),U=Object(u.a)(K,2),V=(U[0],U[1],Object(n.useState)("")),Y=Object(u.a)(V,2),Z=(Y[0],Y[1],Object(n.useState)([])),_=Object(u.a)(Z,2),ee=_[0],te=_[1],ae=Object(n.useState)(""),ne=Object(u.a)(ae,2),oe=ne[0],ce=ne[1],ie=Object(n.useState)(""),le=Object(u.a)(ie,2),se=(le[0],le[1]),re=Object(n.useState)("off"),ue=Object(u.a)(re,2),me=(ue[0],ue[1],Object(n.useState)("off")),be=Object(u.a)(me,2),fe=be[0],de=be[1],ve=Object(n.useState)("off"),pe=Object(u.a)(ve,2),he=pe[0],ge=pe[1],je=Object(n.useState)(""),Oe=Object(u.a)(je,2),Ee=Oe[0],Ne=Oe[1],ye=Object(n.useState)(""),Se=Object(u.a)(ye,2),ke=Se[0],xe=Se[1],we=Object(n.useState)("off"),Ce=Object(u.a)(we,2),Me=Ce[0],Te=Ce[1],Be=Object(n.useState)("off"),Pe=Object(u.a)(Be,2),Le=Pe[0],He=Pe[1],De=Object(n.useState)("off"),Ae=Object(u.a)(De,2),Re=Ae[0],Fe=Ae[1],We=Object(n.useState)(""),Ie=Object(u.a)(We,2),qe=Ie[0],Je=Ie[1],Ge=Object(n.useState)("Welcome dear visitor, what would you like to be called?"),Qe=Object(u.a)(Ge,2),Xe=Qe[0],$e=Qe[1];Object(n.useEffect)((function(){"off"===p&&xe("on")}),[]),Object(n.useEffect)((function(){C.length>0&&$e("please also Select a spirit guide"),0===C.length&&$e("Welcome dear visitor,what would you like to be called?")}),[C]),Object(n.useEffect)((function(){O.length>0&&(e.connect(),e.on("connect",(function(){e.emit("username",{userName:O,room:Ee})}))),e.on("users",(function(e){W(e)})),e.on("message",(function(e){z((function(t){return[].concat(Object(r.a)(t),[e])})),t.current.scrollTop=t.current.scrollHeight})),e.on("connected",(function(e){W((function(t){return[].concat(Object(r.a)(t),[e])}))})),e.on("start",(function(e){te((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.segments))})),Je(e.currentPlayer),ze(),e.currentPlayer===O?k("on"):(k("off"),D(""))})),e.on("rejected",(function(){$e("user name already Taken, sorry"),setTimeout((function(){$e("Welcome dear visitor,what would you like to be called?")}),1e3)})),e.on("segmentBroadcast",(function(e){console.log("newsentence"),console.log(e.text),console.log(e.player),function(e){var t=e.split(" ");t.length>5&&(t=t.slice(t.length-5,t.Length));var a=t.join(" ");se(a),D(a)}(e.text),Je(e.player),te((function(t){return[].concat(Object(r.a)(t),[e.text])})),e.player===O?k("on"):k("off")})),e.on("disconnected",(function(e){W((function(t){return t.filter((function(t){return t.id!==e}))}))}))}),[O]);var ze=function(){"Leonora"===C||"Max"===C||"Marcel"===C||"Andre"===C||"Rene"===C||"Pablo"===C||"Benjamin"===C?$e("sorry "+C+" is already playing"):Ee?C.length>0&&Ee.length>0&&(xe("off"),h("on"),He("on"),setTimeout((function(){He("off")}),2e3),setTimeout((function(){m("on")}),2e3)):$e("please click on a spirit guide to choose her/him")},Ke=function(t){t.preventDefault(),t.stopPropagation();var a={message:J,username:O,room:Ee};e.open(),e.emit("send",a),G("")},Ue=d()("invisible",{andreb:"on"===ke,andrebSelected:"1"===Ee}),Ve=d()("invisible",{rene:"on"===ke,reneSelected:"2"===Ee}),Ye=d()("invisible",{pablo:"on"===ke,pabloSelected:"3"===Ee}),Ze=d()("invisible",{benjamin:"on"===ke,benjaminSelected:"4"===Ee}),_e=d()("invisible",{leonora:"on"===ke,leonoraSelected:"5"===Ee}),et=d()("invisible",{max:"on"===ke,maxSelected:"6"===Ee}),tt=d()("invisible",{andre:"on"===ke,andreSelected:"7"===Ee}),at=d()("invisible",{marcel:"on"===ke,marcelSelected:"8"===Ee}),nt=d()({ghostHeadAndreB:"1"===Ee,andreBFall:"1"===Ee&&"on"===Le,ghostHeadRene:"2"===Ee,reneFall:"2"===Ee&&"on"===Le,ghostHeadPablo:"3"===Ee,pabloFall:"3"===Ee&&"on"===Le,ghostHeadBenjamin:"4"===Ee,benjaminFall:"4"===Ee&&"on"===Le,ghostHeadLeonora:"5"===Ee,leonoraFall:"5"===Ee&&"on"===Le,ghostHeadMax:"6"===Ee,maxFall:"6"===Ee&&"on"===Le,ghostHeadAndre:"7"===Ee,andreFall:"7"===Ee&&"on"===Le,ghostHeadMarcel:"8"===Ee,marcelFall:"8"===Ee&&"on"===Le},{rotateHead:"on"===Me},{flyAway:"on"===Re}),ot=["1","2","3","4","5","6","7","8"],ct=Object(n.useState)({1:"off",2:"off",3:"off",4:"off",5:"off",6:"off",7:"off",8:"off"}),it=Object(u.a)(ct,2),lt=it[0],st=it[1],rt=Object(n.useState)({1:"off",2:"off",3:"off",4:"off",5:"off",6:"off",7:"off",8:"off"}),ut=Object(u.a)(rt,2),mt=ut[0],bt=ut[1],ft=Object(n.useState)(""),dt=Object(u.a)(ft,2),vt=dt[0],pt=dt[1],ht=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;Ne(t),bt(Object(s.a)({},t,"on")),vt.length>0&&st(Object(l.a)(Object(l.a)({},lt),{},Object(s.a)({},vt,"off"))),pt(t)},gt=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;st(Object(l.a)(Object(l.a)({},lt),{},Object(s.a)({},t,"on")))},jt=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;"on"!==mt[t]&&st(Object(l.a)(Object(l.a)({},lt),{},Object(s.a)({},t,"off")))};return e.on("nextPlayer",(function(e){Je(e),k(e===O?"on":"off")})),o.a.createElement("div",{className:"allContainer"},o.a.createElement("div",{className:"rules "+("on"===fe?"":"invisible")},o.a.createElement("div",{className:"rulesContent "+("on"===fe?"visible":"invisible")},o.a.createElement("div",{className:"closeRules",onClick:function(){de("off")}},"X"),o.a.createElement("p",null,"How to play: When this game is played in person, each author writes a sentence (or a few sentences) on a piece of paper, then folds the paper so that all or some part of what they wrote is obscurred. The next author then contributes to the story using only the part of the sentence that is visible below the fold."))),o.a.createElement("div",{className:"on"===ke?"dollsBackDrop":"invisible"}),o.a.createElement("div",{className:"nameInputDiv "+("on"===p?" invisible":"")},o.a.createElement("div",{className:"nameQuestion"},Xe),o.a.createElement("input",{className:"nameinput",type:"text",onChange:function(e){e.preventDefault(),e.stopPropagation(),M(e.target.value)}}),o.a.createElement("input",{type:"submit",onClick:function(){"Leonora"===C||"Max"===C||"Marcel"===C||"Andre"===C||"Rene"===C||"Pablo"===C||"Benjamin"===C?$e("sorry "+C+" is already playing"):Ee?C.length>0&&Ee.length>0&&E(C):$e("please click on a spirit guide to choose her/him")}})),o.a.createElement("div",{id:ot[0],className:Ue,onClick:ht,onMouseOver:gt,onMouseLeave:jt},o.a.createElement("p",{className:"nameTag "+("on"===lt[1]?"":"invisible")},"Andre B")),o.a.createElement("div",{id:ot[1],className:Ve,onClick:ht,onMouseOver:gt,onMouseLeave:jt},o.a.createElement("p",{className:"nameTag "+("on"===lt[2]?"":"invisible")},"Rene")),o.a.createElement("div",{id:ot[2],className:Ye,onClick:ht,onMouseOver:gt,onMouseLeave:jt},o.a.createElement("p",{className:"nameTag "+("on"===lt[3]?"":"invisible")},"Pablo")),o.a.createElement("div",{id:ot[3],className:Ze,onClick:ht,onMouseOver:gt,onMouseLeave:jt},o.a.createElement("p",{className:"nameTag "+("on"===lt[4]?"":"invisible")},"Benjamin")),o.a.createElement("div",{id:ot[4],className:_e,onClick:ht,onMouseOver:gt,onMouseLeave:jt},o.a.createElement("p",{className:"nameTag "+("on"===lt[5]?"":"invisible")},"Leonora")),o.a.createElement("div",{id:ot[5],className:et,onClick:ht,onMouseOver:gt,onMouseLeave:jt},o.a.createElement("p",{className:"nameTag "+("on"===lt[6]?"":"invisible")},"max")),o.a.createElement("div",{id:ot[6],className:tt,onClick:ht,onMouseOver:gt,onMouseLeave:jt},o.a.createElement("p",{className:"nameTag "+("on"===lt[7]?"":"invisible")},"Andre M")),o.a.createElement("div",{id:ot[7],className:at,onClick:ht,onMouseOver:gt,onMouseLeave:jt},o.a.createElement("p",{className:"nameTag "+("on"===lt[8]?"":"invisible")},"Marcel")),o.a.createElement("div",{className:"exterior"},o.a.createElement("div",{className:"leftCurtain "+("on"===p?"leftcurtainOn":"")}),o.a.createElement("div",{className:"rightCurtain "+("on"===p?"rightCurtainOn":"")})),o.a.createElement("div",{className:"interior "},o.a.createElement("div",{className:"on"===p?nt:"invisible"}),o.a.createElement("div",{className:"title "+("on"===i?"titleAnimate":"invisible")},o.a.createElement("div",{className:"on"===i?"titleText":"invisible"},"welcome ",O),o.a.createElement("div",{className:"on"===i?"titleText":"invisible"},o.a.createElement("h1",null,"let's play Exquisite Corpse!")),o.a.createElement("div",{className:"on"===i?"titleText":"invisible"},"current player : ",qe)),o.a.createElement("div",{className:"table "+("on"===i?"tableAnimate":"invisible")},o.a.createElement("div",{className:"on"===i?"titleText":"invisible"},o.a.createElement("div",{className:"display "},H),o.a.createElement("div",{className:"on"===S?"invisible":""},"please wait your turn"),o.a.createElement("textarea",{className:"sentenceInput "+("on"===S?"":"invisible"),onChange:function(e){e.preventDefault(),e.stopPropagation(),ce(e.target.value)},type:"text",placeholder:"please proceed"}),o.a.createElement("button",{className:"submitbutton "+("on"===S?"":"invisible"),onClick:function(){Te("on"),e.open(),e.emit("segment",{segment:oe,room:Ee}),setTimeout((function(){Te("off")}),2e3)}},"broadcast Story Segment"),o.a.createElement("button",{className:"turnButtom gameButton",onClick:function(t){t.preventDefault(),t.stopPropagation(),e.open(),e.emit("nextPlayer",Ee)}},"next player"),o.a.createElement("button",{className:"gameButton"},o.a.createElement("a",{href:"data:text/plain;charset=utf-8, "+ee.join("\n"),download:"poem.txt"},"download story")),o.a.createElement("button",{className:"openRulesButton gameButton",onClick:function(){de("on")}},"see Rules")))),o.a.createElement("div",{className:"sidenavchat "+("on"===i?"visible ":"invisible ")+("on"===he?"largeChat":"")},o.a.createElement("div",{className:"chatWindow "+("on"===he?"visible":"invisible")},$.length?o.a.createElement("div",{ref:t,className:"messageBox "+("on"===he?"onChatbox":"")},$.map((function(e,t){var a=e.user,n=(e.date,e.text);return o.a.createElement("div",{key:t,className:a===O?"toLeft":"toRight"},a,": ",n," ")}))):o.a.createElement("h1",{className:"chat-title"},"Speak")),o.a.createElement("div",null,o.a.createElement("input",{className:"chatBox "+("on"===he?"visible":"invisible"),type:"text",placeholder:"message",value:J,onChange:function(e){return G(e.currentTarget.value)}}),o.a.createElement("button",{className:"chatbtn "+("on"===he?"":"invisible"),onClick:Ke},"speak"),o.a.createElement("button",Object(s.a)({className:"chatbtn "+("on"===he?"":"invisible"),onClick:Ke},"onClick",(function(t){t.preventDefault(),t.stopPropagation(),Fe("on"),e.open(),setTimeout((function(){Fe("off")}),1e3);var a={message:J,username:O,room:Ee};e.emit("sendToGhost",a),G("")})),"speak with ghost"),o.a.createElement("button",{className:"chatbtn "+("on"===he?"":"invisible"),onClick:function(){ge("off")}},"close chat"),o.a.createElement("button",{className:"chatbtn "+("on"===he?"invisible":""),onClick:function(){ge("on")}},"open chat"),o.a.createElement("div",{className:"roster "},o.a.createElement("h3",null,"players in the room"),o.a.createElement("ul",{id:"users"},F.map((function(e){var t=e.name,a=e.id;return o.a.createElement("li",{key:a,className:"on"===he?"centeredLi":""},t)})))))))};a(79);var p=function(){return o.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.ca7585b1.chunk.js.map