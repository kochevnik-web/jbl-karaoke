(this["webpackJsonpjbl-karaoke"]=this["webpackJsonpjbl-karaoke"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(20),i=a.n(s),r=a(5),l=[{id:0,name:"lefgStartImage",url:a.p+"static/media/left.78b44509.png"},{id:1,name:"rightStartImage",url:a.p+"static/media/right.5cd3a919.png"},{id:2,name:"bgBalls",url:a.p+"static/media/bgBalls.85ef1d16.png"},{id:3,name:"jblLogo",url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA4CAYAAAChbZtkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR2SURBVHgB7Vk9TBRBFH6zB+c16tVScBYmx5noWWhpDk3s1LMXhcLGnyiJJiaacCSaaDRBBW0sROloJNKhBrTUBkzkpzsLqU+gAOR2fG+HuZvdnQV2OQ5c9kuGHd78vW/em/dm9xjP7OEQVpjlVja9MqaKDNhliAiHHRHhsCMiHHZEhMOOiHDYERFeE23XAX4u2svHmWq7Kj/QLGRX77vHyDKCY6/dt69BMtl+/CTUGv4IDw0AzJfsspcPYMOgsd+/ikJoahYbcuk61Av+CM//AXjXZ5dJ5TeCz8MA7WdEeXS7Kr94A+oF/2d4oLdaJ4v//gWBMP0DtgP+CZOViSjhlQ933iFogCCQhINadxsRjDCd25kauuRCCeoF/y69Nwlw9ynAi0GA0+cgMNSUM1W/8+zfwqfPinxMSB/ByPvB39gTq3lb5mkKXo/vQL0QwML7q3UKYH5A/b/hcZiaAJhdPf+0aafOQr3g38IUsNJHBfGBPn9jiey9K6KebwN4+FrU6fIhA+EWwz9hspJUejPYpgjvnzAFLenWRH6+ThG2Ruv6P8N05uiFgUrvINQNFCjlunefQFBEr4dhh3/C0xPVusylzjphYZ2U1aT097ppqX2amqEWCBal6R2YXtxJCUotdNVsU17xqH1OQ4JuV/0jok6xQOLTsH4tSlcUqPYlRRqrAYLdpektiS4ORJIUkcoQcbp5qfmZ+unememGNbf6QUDtT/JZJWXJ66s6h+plPsFq8vswufPsDnxz2rLfh3ciWQ9EUTrsiAiHHRHhsCMiHFbwdCJFz2BXy/8MPJMoWM+WPaXQW9iyrAmjwMr4FsKLZOEihBhserHIW+JZKMcmwNx1ISvCLgXPQhIj2ig/1JityDKNWafMkmNQ4Jn4G9ccmcZ2qz+24fM9lh6ZGkQ7yjXjrDbqn4kXXPLD9jlsujrlLfG8U1eC/hQvJpLAIAcxnqzIzJhbJma4jKGhnacbcvZJWAr7p9jkcgdw1omfGnJYFIIspxuHKaQLx+WxavuIZRHicAsMs0urq8HtpBlkXbrCJi8eYgGex8nHgMW6vPpRpMS/RSRcVYBjdnCME6RwY3SZg4iarMPaJJfl+BCWkou0BmsTRmUqrmeYN/VKlDuhzLppl91WRndD1ySXQ4JIlnfYWuU4dP/KfLzc7VxGksCN67c2qcHocXQpQXy5Fehj1TqkjTV3BBcnl7Tc0jSeu5TgDN02dh4tJ6zktjIp8gyf2I8X2eTfcbURCYzhA+c1uihGCJn9G5SFmHUUsmLj+Bfd5rJxXIuzCmlwHIkKYYCVlHXA04kcFdgoLGuwDja11ImlFd3toKcizLyA1Txa2+328aUCbh9a3xjFTdVZN4ckcbOWj9E6+Cx4HSHr6EjS6PpatdGtyPdTkFgcR8WS4IVyrKQokaosYFuMv9UqQpY1jU6sFXDsZVsbbQiQ9/Ch6ny8+lE7ht7j3AjvI6SSLsJacFrXSjeppG0D6H+1eMyTqvR1pgpFpmtzrqPrp+2j0cVLx39c4PiF6h7iCAAAAABJRU5ErkJggg=="},{id:4,name:"startTitle",url:a.p+"static/media/startTitle.b2448a3e.png"},{id:5,name:"discoBall",url:a.p+"static/media/discoBall.8c0331ec.png"}],d=a(2),j=c.a.createContext();function o(e){var t=e.children;function a(){return window.innerWidth<window.innerHeight&&window.innerWidth<768?window.innerWidth/192*6:window.innerWidth/192}function c(){return window.innerWidth<window.innerHeight&&window.innerWidth<768}var s=Object(n.useState)(a()),i=Object(r.a)(s,2),o=i[0],u=i[1],p=Object(n.useState)(c()),b=Object(r.a)(p,2),m=b[0],h=b[1],A=Object(n.useState)(!1),x=Object(r.a)(A,2),f=x[0],O=x[1],g=Object(n.useState)(0),v=Object(r.a)(g,2),w=v[0],B=v[1];return Object(n.useEffect)((function(){w===l.length?O(!0):function(e){var t=new Image;t.src=e.url,t.onload=function(){B(w+1),console.log("Loaded img",e.name)},t.onerror=function(e){console.log(e)}}(l[w])}),[w]),Object(n.useEffect)((function(){u(a()),h(c())}),[]),window.addEventListener("resize",(function(){u(a()),h(c())})),Object(d.jsx)(j.Provider,{value:{IMAGES:l,em:o,isMobale:m,imgsLoaded:f,countLoaded:w},children:t})}a(36);var u=a(30);a(37);function p(){var e=Object(n.useContext)(j).IMAGES;return Object(d.jsx)("div",{className:"jbl-logo",children:Object(d.jsx)("img",{src:e[3].url,alt:e[3].name})})}var b=a(23),m=(a(39),function(e,t){return[e-window.innerWidth/2,t-window.innerHeight/2]}),h=function(e,t){return"translate3d(".concat(e/-70,"px,").concat(t/-70,"px,0)")},A=function(e,t){return"translate3d(".concat(e/170,"px,0,0)")};function x(){var e=Object(n.useRef)(null),t=Object(n.useContext)(j).IMAGES;Object(n.useEffect)((function(){u.a.to(e,{duration:.75,opacity:1,ease:"power2.in"})}));var a=Object(b.useSpring)((function(){return{xy:[0,0],config:{mass:10,tension:1e3,friction:140}}})),c=Object(r.a)(a,2),s=c[0],i=c[1];return Object(d.jsxs)("div",{className:"start-app",ref:function(t){return e=t},children:[Object(d.jsx)("img",{src:t[0].url,alt:t[0].name,className:"start-app-abs-image start-app-bg-left"}),Object(d.jsx)("img",{src:t[1].url,alt:t[0].name,className:"start-app-abs-image start-app-bg-right"}),Object(d.jsxs)("div",{className:"start-paralax",onMouseMove:function(e){var t=e.clientX,a=e.clientY;return i({xy:m(t,a)})},children:[Object(d.jsx)(b.animated.img,{src:t[2].url,alt:t[2].name,style:{transform:s.xy.interpolate(h)},className:"start-paralax-confetti"}),Object(d.jsx)(b.animated.div,{className:"start-paralax-discoball",style:{transform:s.xy.interpolate(A)},children:Object(d.jsx)("img",{src:t[5].url,alt:t[5].name})}),Object(d.jsxs)("div",{className:"start-app-content",children:[Object(d.jsxs)("div",{className:"start-app-content-header",children:[Object(d.jsx)("div",{className:"start-app-content-header-text",children:Object(d.jsx)("span",{children:"\u0418\u0413\u0420\u0410"})}),Object(d.jsx)(p,{})]}),Object(d.jsxs)("div",{className:"start-app-content-title",children:[Object(d.jsx)("div",{className:"start-app-content-title-text",children:Object(d.jsx)("span",{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0439 \u043d\u0430\xa05\xa0\u0437\u0432\u0435\u0437\u0434 \u0438\xa0\u0437\u0430\u0436\u0433\u0438 \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0443 \u0441\xa0JBL!"})}),Object(d.jsx)("img",{src:t[4].url,alt:t[4].name})]}),Object(d.jsx)("div",{className:"start-app-content-paragraph",children:Object(d.jsx)("span",{children:"\u041e\u0442\u043b\u0438\u0447\u043d\u0430\u044f \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0430\xa0\u2014 \u044d\u0442\u043e \u043a\u043e\u0433\u0434\u0430 \u0433\u043e\u0441\u0442\u0438 \u0442\u0430\u043d\u0446\u0443\u044e\u0442, \u043f\u043e\u044e\u0442 \u0438\xa0\u043e\u0431\u0449\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0434 \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u043c\u0443\u0437\u044b\u043a\u0443. \u0412\u0435\u0441\u0435\u043b\u0430\u044f \u0438\xa0\u0434\u0440\u0443\u0436\u0435\u0441\u043a\u0430\u044f \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0430 \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u043d\u0430\xa0\u0442\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u0437\u044f\u0442\u044c \u0432\xa0\u0440\u0443\u043a\u0438 \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d \u0438\xa0\u0443\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043a\u0430\u0440\u0430\u043e\u043a\u0435-\u0431\u0430\u0442\u043b! \u0415\u0441\u043b\u0438 \u0442\u0432\u043e\u044f \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043a\u0430 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0441\xa0JBL, \u0432\u044b\u043f\u0443\u0441\u0442\u0438\u0432\u0448\u0438\u043c \u043d\u043e\u0432\u0443\u044e \u0430\u043a\u0443\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 JBL PartyBox On-the-Go \u0441\xa0\u0431\u0435\u0441\u043f\u0440\u043e\u0432\u043e\u0434\u043d\u044b\u043c \u043c\u0438\u043a\u0440\u043e\u0444\u043e\u043d\u043e\u043c, \u0442\u043e\xa0\u0443\xa0\u0442\u0435\u0431\u044f \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442 \u043f\u0440\u0438\u0447\u0438\u043d \u0441\u0442\u0435\u0441\u043d\u044f\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0438\u0445 \u0442\u0430\u043b\u0430\u043d\u0442\u043e\u0432. \u0413\u043e\u0442\u043e\u0432 \u043f\u043e\u0440\u0430\u0437\u0438\u0442\u044c \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0438\u043c \u0431\u0435\u0441\u043f\u043e\u0434\u043e\u0431\u043d\u044b\u043c \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435\u043c? \u0418\u0441\u043f\u043e\u043b\u043d\u044f\u0439 \u0442\u0440\u0435\u043a\u0438\xa0\u2014 \u0430\xa0\u043c\u044b\xa0\u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0435\u043c, \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c\xa0\u043b\u0438 \u0443\xa0\u0442\u0435\u0431\u044f \u0443\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043d\u0435\u0437\u0430\u0431\u044b\u0432\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0447\u0435\u0440 \u0434\u043b\u044f \u0441\u0432\u043e\u0438\u0445 \u0433\u043e\u0441\u0442\u0435\u0439."})}),Object(d.jsx)("div",{className:"start-app-content-button app-btn app-btn-red",children:Object(d.jsx)("span",{children:"\u0417\u0430\u0436\u0438\u0433\u0430\u0435\u043c!"})})]})]})]})}a(40);function f(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(j),i=s.IMAGES,l=s.countLoaded;return Object(n.useEffect)((function(){c(100/i.length*l)}),[l]),Object(d.jsxs)("div",{className:"loader",children:[Object(d.jsx)("div",{className:"loader-text",children:Object(d.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}),Object(d.jsx)("div",{className:"loader-bar",children:Object(d.jsx)("div",{className:"loader-bar-after",style:{width:a+"%"}})})]})}a(41);var O=function(){var e=Object(n.useContext)(j),t=e.em,a=e.imgsLoaded;return Object(d.jsx)("div",{className:"app app-jbl",style:{fontSize:t},children:a?Object(d.jsx)(x,{}):Object(d.jsx)(f,{})})};i.a.render(Object(d.jsx)(o,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e9b62fab.chunk.js.map