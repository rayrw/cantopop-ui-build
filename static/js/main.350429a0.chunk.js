(this.webpackJsonpcantopop=this.webpackJsonpcantopop||[]).push([[0],{25:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var c,i=e(2),r=e(4).a.div(c||(c=Object(i.a)(["\n  padding-bottom: 56.25%; /* 16:9 */\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  background: #292929;\n"])))},28:function(n,t,e){"use strict";e.d(t,"e",(function(){return O})),e.d(t,"b",(function(){return f})),e.d(t,"c",(function(){return h})),e.d(t,"d",(function(){return p})),e.d(t,"a",(function(){return v})),e.d(t,"f",(function(){return m})),e.d(t,"g",(function(){return w}));var c,i,r,a,o,d,j,s=e(2),b=(e(0),e(4)),u=e(25),x=e(29),l=e(1);function O(){return Object(l.jsxs)(f,{children:[Object(l.jsxs)(h,{children:[Object(l.jsx)(u.a,{}),Object(l.jsxs)(p,{children:[Object(l.jsx)(g,{}),Object(l.jsx)(v,{children:Object(l.jsx)(x.a,{})})]})]}),Object(l.jsxs)(m,{children:[Object(l.jsx)(w,{}),Object(l.jsx)(w,{}),Object(l.jsx)(w,{}),Object(l.jsx)(w,{}),Object(l.jsx)(w,{})]})]})}var f=b.a.div(c||(c=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),h=b.a.div(i||(i=Object(s.a)(["\n  width: 70%;\n  margin-right: 20px;\n"]))),p=b.a.div(r||(r=Object(s.a)(["\n  margin-top: 20px;\n"]))),g=b.a.div(a||(a=Object(s.a)(["\n  margin-top: 10px;\n  background: #292929;\n  width: 200px;\n  height: 26px;\n"]))),v=b.a.div(o||(o=Object(s.a)(["\n  width: 500px;\n  margin-top: 20px;\n"]))),m=b.a.div(d||(d=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n"]))),w=b.a.div(j||(j=Object(s.a)(["\n  width: 100%;\n  height: 150px;\n  background: #292929;\n  margin-bottom: 20px;\n"])))},29:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var c,i,r=e(2),a=(e(0),e(4)),o=e(1);function d(){return Object(o.jsx)(j,{children:Array.from(Array(30).keys()).map((function(n){return Object(o.jsx)(s,{width:350,height:24},n)}))})}var j=a.a.div(c||(c=Object(r.a)(["\n  display: block;\n"]))),s=a.a.div(i||(i=Object(r.a)(["\n  background: #292929;\n  width: ",";\n  height: ",";\n  margin-bottom: 8px;\n"])),(function(n){return"".concat(n.width,"px")}),(function(n){return"".concat(n.height,"px")}))},35:function(n,t,e){},42:function(n,t,e){"use strict";e.r(t);var c=e(0),i=e.n(c),r=e(30),a=e.n(r),o=(e(35),e(10)),d=e(2),j=e(4),s=e(3),b=e(1);function u(){return Object(b.jsx)("div",{children:"loading song list page from zero ..."})}var x=e(28),l=Object(c.lazy)((function(){return e.e(6).then(e.bind(null,49))})),O=Object(c.lazy)((function(){return Promise.all([e.e(3),e.e(4)]).then(e.bind(null,50))}));function f(){return Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",children:Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(u,{}),children:Object(b.jsx)(l,{})})}),Object(b.jsx)(s.a,{exact:!0,path:"/songs/:songId",children:Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(x.e,{}),children:Object(b.jsx)(O,{})})})]})}var h,p,g,v=e(15);function m(n){var t=n.active,e=void 0!==t&&t;return Object(b.jsx)(z,{active:e})}var w,k,y=Object(v.b)(h||(h=Object(d.a)(["\n  0% {\n    transform: scaleX(0);\n  }\n\n  10% {\n    transform: scaleX(0.3);\n  }\n\n  50% {\n    transform: scaleX(0.7);\n  }\n\n  90% {\n    transform: scaleX(0.8);\n  }\n\n  100% {\n    transform: scaleX(1);\n  }\n"]))),z=j.a.div(p||(p=Object(d.a)(["\n  position: fixed;\n  height: 3px;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  transform: scaleX(0);\n  transform-origin: left center;\n  transition: transform ease-in 300ms, opacity ease-in 300ms;\n  transition-delay: 0;\n  background-color: rgb(245, 67, 145);\n  opacity: ",";\n  animation-fill-mode: forwards;\n  animation: ",";\n"])),(function(n){return n.active?1:0}),(function(n){return n.active&&Object(v.a)(g||(g=Object(d.a)(["\n      "," 2s cubic-bezier(0.4, 0.45, 0.6, 0.55) infinite;\n    "])),y)}));function X(){return Object(b.jsxs)(S,{children:[Object(b.jsx)(m,{active:!1}),Object(b.jsx)(I,{to:"/",children:"Cantopop"})]})}var C,F,S=j.a.div(w||(w=Object(d.a)(["\n  font-size: 16px;\n  background: #0e0e0e;\n  color: #d9d9de;\n  padding: 20px 40px;\n"]))),I=Object(j.a)(o.b)(k||(k=Object(d.a)(["\n  color: #d9d9de;\n  text-decoration: none;\n"])));function P(){return Object(b.jsxs)(A,{children:[Object(b.jsx)(X,{}),Object(b.jsx)(B,{children:Object(b.jsx)(f,{})})]})}var A=j.a.div(C||(C=Object(d.a)(["\n  background: #000;\n  color: #d9d9de;\n  min-height: 100vh;\n"]))),B=j.a.div(F||(F=Object(d.a)(["\n  padding: 30px 40px;\n"])));var J=function(){return Object(b.jsx)(o.a,{children:Object(b.jsx)(P,{})})},L=function(n){n&&n instanceof Function&&e.e(8).then(e.bind(null,47)).then((function(t){var e=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;e(n),c(n),i(n),r(n),a(n)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(J,{})}),document.getElementById("root")),L()}},[[42,1,2]]]);
//# sourceMappingURL=main.350429a0.chunk.js.map