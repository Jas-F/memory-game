(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},20:function(e,t){},22:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(8),i=c.n(s),r=(c(18),c(19),c(20),c(23)),j=c(0);var o=function(){return Object(j.jsx)(r.a,{fluid:!0,children:Object(j.jsxs)("container",{children:[Object(j.jsx)("h1",{children:"Clicky Game"}),Object(j.jsx)("h3",{children:"Click on an image to score points, click on the same image twice and you loose"})]})})},l=c(7),g=c(9),u=c(10),m=c(12),h=c(11),b=c(24),d=["cuban.jpg","kieser.jpg","kiyosaki.jpg","musk.jpg","rogers.jpg","buffet.jpg","cj.jpg","ma.jpg","pauly.jpg"],O=function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(g.a)(this,c),(n=t.call(this,e)).state={clickedImages:[],score:0,gameOver:!1},n}return Object(u.a)(c,[{key:"render",value:function(){var e=this,t=d;return console.log(this.state),Object(j.jsxs)("container",{children:[Object(j.jsxs)("h1",{children:["Score:",this.state.clickedImages.length]}),this.state.gameOver&&Object(j.jsx)("h1",{children:"Game Over"}),Object(j.jsx)(b.a,{className:"gallery",children:!this.state.gameOver&&t.map((function(t){return Object(j.jsx)("div",{className:"galleryImage",children:Object(j.jsx)("img",{src:"Images/".concat(t),onClick:function(){if(e.state.clickedImages.includes(t)){var c=Object(l.a)({},e.state);c.gameOver=!0,c.score=0,e.setState(c)}else{var n=Object(l.a)({},e.state);n.clickedImages.push(t),e.setState(n)}}})})}))})]})}}]),c}(a.a.Component);var p=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsx)(O,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),f()}},[[22,1,2]]]);
//# sourceMappingURL=main.160e4059.chunk.js.map