(this.webpackJsonpleonoraexquisite=this.webpackJsonpleonoraexquisite||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},77:function(e,t){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),s=n.n(o),c=n(24),i=n.n(c),l=(n(44),n.p,n(5)),r=n(4),b=n(13),j=n(2),u=(n(45),n(46),n(25)),d=n.n(u),f=n(3),O=n.n(f);var h=function(){var e=d()("wss://leonoraexquisitecorpes.herokuapp.com/",{transports:["websocket","polling"]}),t=Object(o.useRef)(),n=Object(o.useState)("off"),s=Object(j.a)(n,2),c=s[0],i=s[1],u=Object(o.useState)("off"),f=Object(j.a)(u,2),h=f[0],m=f[1],v=Object(o.useState)(""),p=Object(j.a)(v,2),x=p[0],g=p[1],N=Object(o.useState)("on"),S=Object(j.a)(N,2),y=S[0],k=S[1],w=Object(o.useState)(""),C=Object(j.a)(w,2),M=C[0],T=C[1],B=Object(o.useState)(""),P=Object(j.a)(B,2),L=(P[0],P[1],Object(o.useState)("please begin the story")),H=Object(j.a)(L,2),D=H[0],A=H[1],R=Object(o.useState)([]),F=Object(j.a)(R,2),W=F[0],E=F[1],q=Object(o.useState)(""),I=Object(j.a)(q,2),J=I[0],G=I[1],Q=Object(o.useState)([]),X=Object(j.a)(Q,2),$=X[0],z=X[1],K=Object(o.useState)([]),U=Object(j.a)(K,2),V=(U[0],U[1],Object(o.useState)("")),Y=Object(j.a)(V,2),Z=(Y[0],Y[1],Object(o.useState)([])),_=Object(j.a)(Z,2),ee=_[0],te=_[1],ne=Object(o.useState)(""),ae=Object(j.a)(ne,2),oe=ae[0],se=ae[1],ce=Object(o.useState)(""),ie=Object(j.a)(ce,2),le=(ie[0],ie[1]),re=Object(o.useState)("off"),be=Object(j.a)(re,2),je=(be[0],be[1],Object(o.useState)("off")),ue=Object(j.a)(je,2),de=ue[0],fe=ue[1],Oe=Object(o.useState)("off"),he=Object(j.a)(Oe,2),me=he[0],ve=he[1],pe=Object(o.useState)(""),xe=Object(j.a)(pe,2),ge=xe[0],Ne=xe[1],Se=Object(o.useState)(""),ye=Object(j.a)(Se,2),ke=ye[0],we=ye[1],Ce=Object(o.useState)(""),Me=Object(j.a)(Ce,2),Te=Me[0],Be=Me[1],Pe=Object(o.useState)("off"),Le=Object(j.a)(Pe,2),He=Le[0],De=Le[1],Ae=Object(o.useState)("off"),Re=Object(j.a)(Ae,2),Fe=Re[0],We=Re[1],Ee=Object(o.useState)("off"),qe=Object(j.a)(Ee,2),Ie=qe[0],Je=qe[1],Ge=Object(o.useState)(""),Qe=Object(j.a)(Ge,2),Xe=Qe[0],$e=Qe[1],ze=Object(o.useState)("Welcome dear visitor, what would you like to be called?"),Ke=Object(j.a)(ze,2),Ue=Ke[0],Ve=Ke[1];Object(o.useEffect)((function(){"off"===h&&Be("on")}),[h]),Object(o.useEffect)((function(){M.length>0&&Ve("please also Select a spirit guide"),0===M.length&&Ve("Welcome dear visitor,what would you like to be called?")}),[M]),Object(o.useEffect)((function(){!function(e){var t=e.split(" ");t.length>5&&(t=t.slice(t.length-5,t.Length));var n=t.join(" ");le(n),A(n)}(ke)}),[ke]),Object(o.useEffect)((function(){x.length>0&&(e.connect(),e.on("connect",(function(){e.emit("username",{userName:x,room:ge})}))),e.on("users",(function(e){E(e)})),e.on("message",(function(e){z((function(t){return[].concat(Object(b.a)(t),[e])})),t.current.scrollTop=t.current.scrollHeight})),e.on("connected",(function(e){E((function(t){return[].concat(Object(b.a)(t),[e])}))})),e.on("start",(function(e){$e(e.currentPlayer),Ye(),e.currentPlayer===x?k("on"):(k("off"),A(""))})),e.on("rejected",(function(){Ve("user name already Taken, sorry"),setTimeout((function(){Ve("Welcome dear visitor,what would you like to be called?")}),1e3)})),e.on("segmentBroadcast",(function(e){console.log("newsentence"),console.log(e.text),console.log(e.player),we(e.text),$e(e.player),te((function(t){return[].concat(Object(b.a)(t),[e.text])})),e.player===x?k("on"):k("off")})),e.on("disconnected",(function(e){E((function(t){return t.filter((function(t){return t.id!==e}))}))}))}),[x]);var Ye=function(){"Leonora"===M||"Max"===M||"Marcel"===M||"Andre"===M||"Rene"===M||"Pablo"===M||"Benjamin"===M?Ve("sorry "+M+" is already playing"):ge?M.length>0&&ge.length>0&&(Be("off"),m("on"),We("on"),setTimeout((function(){We("off")}),2e3),setTimeout((function(){i("on")}),2e3)):Ve("please click on a spirit guide to choose her/him")},Ze=O()("invisible",{andreb:"on"===Te,andrebSelected:"1"===ge}),_e=O()("invisible",{rene:"on"===Te,reneSelected:"2"===ge}),et=O()("invisible",{pablo:"on"===Te,pabloSelected:"3"===ge}),tt=O()("invisible",{benjamin:"on"===Te,benjaminSelected:"4"===ge}),nt=O()("invisible",{leonora:"on"===Te,leonoraSelected:"5"===ge}),at=O()("invisible",{max:"on"===Te,maxSelected:"6"===ge}),ot=O()("invisible",{andre:"on"===Te,andreSelected:"7"===ge}),st=O()("invisible",{marcel:"on"===Te,marcelSelected:"8"===ge}),ct=O()({ghostHeadAndreB:"1"===ge,andreBFall:"1"===ge&&"on"===Fe,ghostHeadRene:"2"===ge,reneFall:"2"===ge&&"on"===Fe,ghostHeadPablo:"3"===ge,pabloFall:"3"===ge&&"on"===Fe,ghostHeadBenjamin:"4"===ge,benjaminFall:"4"===ge&&"on"===Fe,ghostHeadLeonora:"5"===ge,leonoraFall:"5"===ge&&"on"===Fe,ghostHeadMax:"6"===ge,maxFall:"6"===ge&&"on"===Fe,ghostHeadAndre:"7"===ge,andreFall:"7"===ge&&"on"===Fe,ghostHeadMarcel:"8"===ge,marcelFall:"8"===ge&&"on"===Fe},{rotateHead:"on"===He},{flyAway:"on"===Ie}),it=["1","2","3","4","5","6","7","8"],lt=Object(o.useState)({1:"off",2:"off",3:"off",4:"off",5:"off",6:"off",7:"off",8:"off"}),rt=Object(j.a)(lt,2),bt=rt[0],jt=rt[1],ut=Object(o.useState)({1:"off",2:"off",3:"off",4:"off",5:"off",6:"off",7:"off",8:"off"}),dt=Object(j.a)(ut,2),ft=dt[0],Ot=dt[1],ht=Object(o.useState)(""),mt=Object(j.a)(ht,2),vt=mt[0],pt=mt[1],xt=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;Ne(t),Ot(Object(r.a)({},t,"on")),vt.length>0&&jt(Object(l.a)(Object(l.a)({},bt),{},Object(r.a)({},vt,"off"))),pt(t)},gt=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;jt(Object(l.a)(Object(l.a)({},bt),{},Object(r.a)({},t,"on")))},Nt=function(e){e.stopPropagation(),e.preventDefault();var t=e.target.id;"on"!==ft[t]&&jt(Object(l.a)(Object(l.a)({},bt),{},Object(r.a)({},t,"off")))};return e.on("nextPlayer",(function(e){$e(e),k(e===x?"on":"off")})),Object(a.jsxs)("div",{className:"allContainer",children:[Object(a.jsx)("div",{className:"rules "+("on"===de?"":"invisible"),children:Object(a.jsxs)("div",{className:"rulesContent "+("on"===de?"visible":"invisible"),children:[Object(a.jsx)("div",{className:"closeRules",onClick:function(){fe("off")},children:"X"}),Object(a.jsx)("p",{children:"How to play: When this game is played in person, each author writes a sentence (or a few sentences) on a piece of paper, then folds the paper so that all or some part of what they wrote is obscurred. The next author then contributes to the story using only the part of the sentence that is visible below the fold."})]})}),Object(a.jsx)("div",{className:"on"===Te?"dollsBackDrop":"invisible"}),Object(a.jsxs)("div",{className:"nameInputDiv "+("on"===h?" invisible":""),children:[Object(a.jsx)("div",{className:"nameQuestion",children:Ue}),Object(a.jsx)("input",{className:"nameinput",type:"text",onChange:function(e){e.preventDefault(),e.stopPropagation(),T(e.target.value)}}),Object(a.jsx)("input",{type:"submit",onClick:function(){"Leonora"===M||"Max"===M||"Marcel"===M||"Andre"===M||"Rene"===M||"Pablo"===M||"Benjamin"===M?Ve("sorry "+M+" is already playing"):ge?M.length>0&&ge.length>0&&g(M):Ve("please click on a spirit guide to choose her/him")}})]}),Object(a.jsx)("div",{id:it[0],className:Ze,onClick:xt,onMouseOver:gt,onMouseLeave:Nt,children:Object(a.jsx)("p",{className:"nameTag "+("on"===bt[1]?"":"invisible"),children:"Andre B"})}),Object(a.jsx)("div",{id:it[1],className:_e,onClick:xt,onMouseOver:gt,onMouseLeave:Nt,children:Object(a.jsx)("p",{className:"nameTag "+("on"===bt[2]?"":"invisible"),children:"Rene"})}),Object(a.jsx)("div",{id:it[2],className:et,onClick:xt,onMouseOver:gt,onMouseLeave:Nt,children:Object(a.jsx)("p",{className:"nameTag "+("on"===bt[3]?"":"invisible"),children:"Pablo"})}),Object(a.jsx)("div",{id:it[3],className:tt,onClick:xt,onMouseOver:gt,onMouseLeave:Nt,children:Object(a.jsx)("p",{className:"nameTag "+("on"===bt[4]?"":"invisible"),children:"Benjamin"})}),Object(a.jsx)("div",{id:it[4],className:nt,onClick:xt,onMouseOver:gt,onMouseLeave:Nt,children:Object(a.jsx)("p",{className:"nameTag "+("on"===bt[5]?"":"invisible"),children:"Leonora"})}),Object(a.jsx)("div",{id:it[5],className:at,onClick:xt,onMouseOver:gt,onMouseLeave:Nt,children:Object(a.jsx)("p",{className:"nameTag "+("on"===bt[6]?"":"invisible"),children:"max"})}),Object(a.jsx)("div",{id:it[6],className:ot,onClick:xt,onMouseOver:gt,onMouseLeave:Nt,children:Object(a.jsx)("p",{className:"nameTag "+("on"===bt[7]?"":"invisible"),children:"Andre M"})}),Object(a.jsx)("div",{id:it[7],className:st,onClick:xt,onMouseOver:gt,onMouseLeave:Nt,children:Object(a.jsx)("p",{className:"nameTag "+("on"===bt[8]?"":"invisible"),children:"Marcel"})}),Object(a.jsxs)("div",{className:"exterior",children:[Object(a.jsx)("div",{className:"leftCurtain "+("on"===h?"leftcurtainOn":"")}),Object(a.jsx)("div",{className:"rightCurtain "+("on"===h?"rightCurtainOn":"")})]}),Object(a.jsxs)("div",{className:"interior ",children:[Object(a.jsx)("div",{className:"on"===h?ct:"invisible"}),Object(a.jsxs)("div",{className:"title "+("on"===c?"titleAnimate":"invisible"),children:[Object(a.jsxs)("div",{className:"on"===c?"titleText":"invisible",children:["welcome ",x]}),Object(a.jsx)("div",{className:"on"===c?"titleText":"invisible",children:Object(a.jsx)("h1",{children:"let's play Exquisite Corpse!"})}),Object(a.jsxs)("div",{className:"on"===c?"titleText":"invisible",children:["current player : ",Xe]})]}),Object(a.jsx)("div",{className:"table "+("on"===c?"tableAnimate":"invisible"),children:Object(a.jsxs)("div",{className:"on"===c?"titleText":"invisible",children:[Object(a.jsx)("div",{className:"display ",children:D}),Object(a.jsx)("div",{className:"on"===y?"invisible":"",children:"please wait your turn"}),Object(a.jsx)("input",{className:"sentenceInput "+("on"===y?"":"invisible"),onChange:function(e){e.preventDefault(),e.stopPropagation(),se(e.target.value)},type:"text",placeholder:"please proceed"}),Object(a.jsx)("button",{className:"submitbutton "+("on"===y?"":"invisible"),onClick:function(){De("on"),e.open(),e.emit("segment",{segment:oe,room:ge}),console.log("emitted sentence to server"),console.log(oe),setTimeout((function(){De("off")}),2e3)},children:"broadcast Story Segment"}),Object(a.jsx)("button",{className:"turnButtom gameButton",onClick:function(t){t.preventDefault(),t.stopPropagation(),e.open(),e.emit("nextPlayer",ge)},children:"next player"}),Object(a.jsx)("button",{className:"gameButton",children:Object(a.jsx)("a",{href:"data:text/plain;charset=utf-8, "+ee.join("\n"),download:"poem.txt",children:"download story"})}),Object(a.jsx)("button",{className:"openRulesButton gameButton",onClick:function(){fe("on")},children:"see Rules"})]})})]}),Object(a.jsxs)("div",{className:"sidenavchat "+("on"===c?"visible ":"invisible ")+("on"===me?"largeChat":""),children:[Object(a.jsx)("div",{className:"chatWindow "+("on"===me?"visible":"invisible"),children:$.length?Object(a.jsx)("div",{ref:t,className:"messageBox "+("on"===me?"onChatbox":""),children:$.map((function(e,t){var n=e.user,o=(e.date,e.text);return Object(a.jsxs)("div",{className:n===x?"toLeft":"toRight",children:[n,": ",o," "]},t)}))}):Object(a.jsx)("h1",{className:"chat-title",children:"Speak"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{className:"chatBox "+("on"===me?"visible":"invisible"),type:"text",placeholder:"message",value:J,onChange:function(e){return G(e.currentTarget.value)}}),Object(a.jsx)("button",{className:"chatbtn "+("on"===me?"":"invisible"),onClick:function(t){t.preventDefault(),t.stopPropagation();var n={message:J,username:x,room:ge};e.open(),e.emit("send",n),G("")},children:"speak"}),Object(a.jsx)("button",{className:"chatbtn "+("on"===me?"":"invisible"),onClick:function(t){t.preventDefault(),t.stopPropagation(),Je("on"),e.open(),setTimeout((function(){Je("off")}),1e3);var n={message:J,username:x,room:ge};e.emit("sendToGhost",n),G("")},children:"speak with ghost"}),Object(a.jsx)("button",{className:"chatbtn "+("on"===me?"":"invisible"),onClick:function(){ve("off")},children:"close chat"}),Object(a.jsx)("button",{className:"chatbtn "+("on"===me?"invisible":""),onClick:function(){ve("on")},children:"open chat"}),Object(a.jsxs)("div",{className:"roster ",children:[Object(a.jsx)("h3",{children:"players in the room"}),Object(a.jsx)("ul",{id:"users",children:W.map((function(e){var t=e.name,n=e.id;return Object(a.jsx)("li",{className:"on"===me?"centeredLi":"",children:t},n)}))})]})]})]})]})};n(80);var m=function(){return Object(a.jsx)(h,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.fbb7a2c6.chunk.js.map