(this.webpackJsonpcountry=this.webpackJsonpcountry||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),o=n.n(a),i=(n(22),n(9)),r=n.n(i),l=n(11),d=n(4),u=n(12),j=n(13),m=n(17),p=n(16),b=n.p+"static/media/winner.cee19990.svg",O=(n(24),n(0)),h=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).reload=function(){window.location.replace("")},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"results-supremo",children:[Object(O.jsxs)("div",{className:"congragulations",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]}),Object(O.jsxs)("div",{className:"box-inside",children:[Object(O.jsx)("div",{className:"title-result",children:Object(O.jsx)("p",{children:"Country Quiz Results"})}),Object(O.jsxs)("div",{className:"results-info-container",children:[Object(O.jsx)("div",{className:"image-result",children:Object(O.jsx)("img",{src:b,alt:"Results"})}),Object(O.jsxs)("div",{className:"results-items",children:[Object(O.jsx)("div",{className:"item-title-result",children:Object(O.jsx)("p",{children:"Results"})}),Object(O.jsx)("div",{className:"correct-answers",children:Object(O.jsxs)("p",{children:["You got ",Object(O.jsx)("span",{className:"final-results",children:this.props.correct})," correct answers"]})})]}),Object(O.jsx)("div",{className:"try-again-container",children:Object(O.jsx)("button",{type:"button",className:"try-again",onClick:this.reload,children:"Try Again"})})]})]})]})}}]),n}(s.a.Component);n(26);var y=function(){return Object(O.jsx)("div",{className:"loading-container",children:Object(O.jsx)("div",{className:"loading"})})},v=n(3),f=n(2),x={allCountriesArray:[],option1:"",option2:"",option3:"",option4:"",capital:null,country:void 0,check:void 0,points:-1,showResults:!1,loader:!1},w="CHANGE_OPTION_1",g="CHANGE_OPTION_2",N="CHANGE_OPTION_3",S="CHANGE_OPTION_4",E="SETCAPITAL",I="SETCOUNTRY",C="SETCHECK",B="SETPOINTS",k="SETSHOWRESULTS",L="SETLOADER",A=function(e){return function(t,n){t({type:w,payload:e})}},T=function(e){return function(t,n){t({type:g,payload:e})}},R=function(e){return function(t,n){t({type:N,payload:e})}},M=function(e){return function(t,n){t({type:S,payload:e})}},_=function(e){return function(t,n){t({type:E,payload:e})}},P=function(e){return function(t,n){t({type:I,payload:e})}},H=function(e){return function(t,n){t({type:C,payload:e})}},G=function(e){return function(t,n){t({type:B,payload:e})}},q=function(e){return function(t,n){t({type:k,payload:e})}},D=function(e){return function(t,n){t({type:L,payload:e})}},z=s.a.createContext();function J(e){var t=Object(v.c)((function(e){return e.countries.allCountriesArray})),n=Object(v.c)((function(e){return e.countries.option1})),c=Object(v.c)((function(e){return e.countries.option2})),a=Object(v.c)((function(e){return e.countries.option3})),o=Object(v.c)((function(e){return e.countries.option4})),i=Object(v.c)((function(e){return e.countries.capital})),r=Object(v.c)((function(e){return e.countries.country})),l=Object(v.c)((function(e){return e.countries.check})),u=Object(v.c)((function(e){return e.countries.points})),j=Object(v.c)((function(e){return e.countries.showResults})),m=Object(v.c)((function(e){return e.countries.loader})),p=s.a.useState(!1),b=Object(d.a)(p,2),h=b[0],y=b[1];return Object(O.jsx)(z.Provider,{value:{allCountriesArray:t,option1:n,option2:c,option3:a,option4:o,capital:i,country:r,check:l,points:u,showResults:j,loader:m,error:h,setError:y},children:e.children})}n(31);var Q=function(e){Object(v.b)();var t=s.a.useContext(z).error;Object(c.useEffect)((function(){document.getElementById("next").setAttribute("disabled","")}),[]);var n=Object(v.c)((function(e){return e.countries.check}));return n&&document.getElementById("next").removeAttribute("disabled"),Object(O.jsx)("div",{className:"app-container",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("h1",{children:"Country Quiz"})}),Object(O.jsx)("div",{className:"work-space",children:Object(O.jsxs)("div",{className:"questions-container",children:[Object(O.jsx)("div",{className:"api-question",children:Object(O.jsxs)("p",{children:[e.capital," is the capital of"]})}),Object(O.jsxs)("div",{className:"answers",children:[Object(O.jsxs)("div",{className:"answers-items",id:"answers-items-1",onClick:e.optionSelectedSwitchStyle1,children:[Object(O.jsx)("div",{className:"id-answer",children:Object(O.jsx)("span",{children:"A"})}),Object(O.jsx)("div",{className:"option",children:Object(O.jsx)("p",{children:e.option1})})]}),Object(O.jsxs)("div",{className:"answers-items",id:"answers-items-2",onClick:e.optionSelectedSwitchStyle2,children:[Object(O.jsx)("div",{className:"id-answer",children:Object(O.jsx)("p",{children:"B"})}),Object(O.jsx)("div",{className:"option",children:Object(O.jsx)("p",{children:e.option2})})]}),Object(O.jsxs)("div",{className:"answers-items",id:"answers-items-3",onClick:e.optionSelectedSwitchStyle3,children:[Object(O.jsx)("div",{className:"id-answer",children:Object(O.jsx)("p",{children:"C"})}),Object(O.jsx)("div",{className:"option",children:Object(O.jsx)("p",{children:e.option3})})]}),Object(O.jsxs)("div",{className:"answers-items",id:"answers-items-4",onClick:e.optionSelectedSwitchStyle4,children:[Object(O.jsx)("div",{className:"id-answer",children:Object(O.jsx)("p",{children:"D"})}),Object(O.jsx)("div",{className:"option",children:Object(O.jsx)("p",{children:e.option4})})]})]}),Object(O.jsx)("div",{className:"send-container",children:Object(O.jsx)("div",{className:"next-container",children:Object(O.jsx)("button",{id:"next",type:"button",className:n?"next":"next disable",onClick:t?e.setShowResults:e.checkIfTheAnswerIsCorrect,children:t?"Results":"Next"})})})]})})]})})};var U=function(){Object(c.useEffect)((function(){Y()}),[]);var e=s.a.useContext(z),t=(e.allCountriesArray,e.option1),n=e.option2,a=e.option3,o=e.option4,i=e.capital,u=e.country,j=e.check,m=e.points,p=e.showResults,b=e.loader,f=e.setError,x=e.error,w=s.a.useState(),g=Object(d.a)(w,2),N=g[0],S=g[1],E=s.a.useState(),I=Object(d.a)(E,2),C=I[0],B=I[1],k=s.a.useState(),L=Object(d.a)(k,2),J=L[0],U=L[1],W=Object(v.b)(),Y=function(){var e=Object(l.a)(r.a.mark((function e(){var t,n,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(D(!0)),W(G(m+1)),e.prev=2,"https://countriesnow.space/api/v0.1/countries/capital",e.next=6,fetch("https://countriesnow.space/api/v0.1/countries/capital");case 6:return t=e.sent,e.next=9,t.json();case 9:n=e.sent,c=Math.floor(Math.random()*n.data.length-1+1),W(_(n.data[c].capital)),W(P(n.data[c].name)),X(n),s=n.data[c].name,V(F(),s),console.log(s),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0);case 22:W(D(!1));case 23:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=4*Math.random();return Math.floor(e+1)},K=function(e){B(document.getElementById("answers-items-".concat(e))),console.log("se ejecuto")},V=function(e,t){1===e&&(W(A(t)),U(1)),2===e&&(W(T(t)),U(2)),3===e&&(W(R(t)),U(3)),4===e&&(W(M(t)),U(4))},X=function(e){W(A(e.data[Math.floor(Math.random()*e.data.length-1+1)].name)),W(T(e.data[Math.floor(Math.random()*e.data.length-1+1)].name)),W(R(e.data[Math.floor(Math.random()*e.data.length-1+1)].name)),W(M(e.data[Math.floor(Math.random()*e.data.length-1+1)].name))};return!0===p&&!0===x?Object(O.jsx)(h,{correct:m}):b?Object(O.jsx)(y,{}):Object(O.jsx)(Q,{capital:i,option1:t,option2:n,option3:a,option4:o,optionSelectedSwitchStyle1:function(e){W(H(t)),document.getElementById("answers-items-1").classList.add("selected"),document.getElementById("answers-items-2").classList.remove("selected"),document.getElementById("answers-items-3").classList.remove("selected"),document.getElementById("answers-items-4").classList.remove("selected"),S(document.getElementById("answers-items-1")),C||K(J)},optionSelectedSwitchStyle2:function(){W(H(n)),document.getElementById("answers-items-2").classList.add("selected"),document.getElementById("answers-items-1").classList.remove("selected"),document.getElementById("answers-items-3").classList.remove("selected"),document.getElementById("answers-items-4").classList.remove("selected"),S(document.getElementById("answers-items-2")),C||K(J)},optionSelectedSwitchStyle3:function(){W(H(a)),document.getElementById("answers-items-3").classList.add("selected"),document.getElementById("answers-items-1").classList.remove("selected"),document.getElementById("answers-items-2").classList.remove("selected"),document.getElementById("answers-items-4").classList.remove("selected"),S(document.getElementById("answers-items-3")),C||K(J)},optionSelectedSwitchStyle4:function(){W(H(o)),document.getElementById("answers-items-4").classList.add("selected"),document.getElementById("answers-items-1").classList.remove("selected"),document.getElementById("answers-items-2").classList.remove("selected"),document.getElementById("answers-items-3").classList.remove("selected"),S(document.getElementById("answers-items-4")),C||K(J)},check:j,checkIfTheAnswerIsCorrect:function(e){u===j?(U(""),B(""),Y(),W(H("")),console.log(document.querySelector(".option").parentNode)):(console.log("Fallastes papa"),console.log(N),console.log(C),N.classList.add("wrong"),C.classList.add("selected"),console.log(m),x&&W(q(!0)),f(!0))},setShowResults:function(e){W(q(!0))}})},W=n(5),Y=n(14),F=n(15),K=Object(W.combineReducers)({countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(f.a)(Object(f.a)({},e),{},{option1:t.payload});case g:return Object(f.a)(Object(f.a)({},e),{},{option2:t.payload});case N:return Object(f.a)(Object(f.a)({},e),{},{option3:t.payload});case S:return Object(f.a)(Object(f.a)({},e),{},{option4:t.payload});case E:return Object(f.a)(Object(f.a)({},e),{},{capital:t.payload});case I:return Object(f.a)(Object(f.a)({},e),{},{country:t.payload});case C:return Object(f.a)(Object(f.a)({},e),{},{check:t.payload});case B:return Object(f.a)(Object(f.a)({},e),{},{points:t.payload});case k:return Object(f.a)(Object(f.a)({},e),{},{showResults:t.payload});case L:return Object(f.a)(Object(f.a)({},e),{},{loader:t.payload});default:return e}}});var V=document.getElementById("root"),X=Object(W.createStore)(K,Object(Y.composeWithDevTools)(Object(W.applyMiddleware)(F.a)));o.a.render(Object(O.jsx)(v.a,{store:X,children:Object(O.jsxs)(J,{children:["'",Object(O.jsx)(U,{})]})}),V)}},[[32,1,2]]]);
//# sourceMappingURL=main.10609710.chunk.js.map