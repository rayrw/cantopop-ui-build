(this.webpackJsonpcantopop=this.webpackJsonpcantopop||[]).push([[5],{56:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}n.r(t),n.d(t,"SongListPage",(function(){return m}));n(0);var o,a,i,s=n(29),u=n(30),p=n(2),b=n(10),f=n.n(b),O=n(11),l=n(33),j=n(3),d=n(4),h=n(20),y=n(19),g=n(1);function v(e){var t=e.id,n=e.title,r=e.artist,c=Object(y.b)(),o=Object(l.a)(c,2)[1],a=Object(d.f)(),i=function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,Promise.all([h.b.preload(),Object(s.b)(["songs",t],u.a.fetchById(t),!1)]);case 3:o(!1),a.push("songs/".concat(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(w,{onClick:i,children:[Object(g.jsx)(x,{children:n}),Object(g.jsx)(P,{children:r})]})}var w=j.a.a(o||(o=Object(p.a)(["\n  display: flex;\n  width: 200px;\n  text-decoration: none;\n  flex-direction: column;\n  cursor: pointer;\n"]))),x=j.a.h1(a||(a=Object(p.a)(["\n  font-size: 16px;\n  color: #fff;\n  margin-top: 0;\n"]))),P=j.a.span(i||(i=Object(p.a)(["\n  color: #d9d9de;\n"])));function m(){var e=Object(s.a)("songList",u.a.fetchAll,{suspense:!0,revalidateOnFocus:!1,revalidateOnReconnect:!1}).data;return Object(g.jsx)("div",{children:e.map((function(e){return Object(g.jsx)(v,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),e.id)}))})}t.default=m}}]);
//# sourceMappingURL=5.4e81bd1b.chunk.js.map