(this["webpackJsonpartyom-ganev-src"]=this["webpackJsonpartyom-ganev-src"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"data":[{"key":"0","value":"E-mail","link":"mailto:a.a.ganev@gmail.com","title":"a.a.ganev@gmail.com"},{"key":"1","value":"Facebook","link":"https://www.facebook.com/artyom.ganev","title":"artyom.ganev"},{"key":"2","value":"VK","link":"https://vk.com/a.a.ganev","title":"a.a.ganev"},{"key":"3","value":"GitHub","link":"https://github.com/Artyom-Ganev/","title":"Artyom-Ganev"},{"key":"4","value":"Hexlet","link":"https://ru.hexlet.io/u/artyom_ganev?ref=5328","title":"artyom_ganev"},{"key":"5","value":"LinkedIn","link":"https://www.linkedin.com/in/artem-ganev-185b38192","title":"artem-ganev-185b38192"}]}')},31:function(e){e.exports=JSON.parse('{"data":[{"key":"0","title":"Tensor ltd.","dates":["2017-02",""],"post":"Web developer, team lead.","description":"","tools":"TypeScript, Less, Git, JavaScript, CSS, HTML","site":"https://tensor.ru"},{"key":"1","dates":["2015-01","2017-02"],"title":"Scientific and Production Association \'Krista\'","post":"Java developer.","description":"","tools":"Java 7/8, JBoss Server, JBPM, Drools, Maven, Mercurial","site":"https://www.krista.ru"},{"key":"2","dates":["2011-06","2014-12"],"post":"Software implementation specialist","description":"","tools":"SQL, Delphi, Oracle, Yaffil, Firebird, Redmine"},{"key":"3","dates":["2010-02","2011-05"],"title":"Business Service ltd.","post":"Accountant economist and sysadmin","description":"","tools":"Joomla"},{"key":"4","dates":["2009-05","2009-08"],"title":"Cetera Labs","post":"Tester","description":"","tools":"Cetera CMS, Cetera ecommerce, Selenium, SVN, Jira","site":"https://cetera.ru/"}]}')},32:function(e,t,a){e.exports=a.p+"static/media/artyom.bbb441b2.jpg"},35:function(e,t,a){e.exports=a(69)},40:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),i=a.n(o),c=a(7),l=a(6),s=(a(40),function(){return r.a.createElement("div",{className:"flexBox nav-menu__root",id:"menu"},r.a.createElement(c.b,{className:"nav-menu__item",to:"/"},"Main"),r.a.createElement(c.b,{className:"nav-menu__item",to:"/blog"},"Blog"),r.a.createElement(c.b,{className:"nav-menu__item",to:"/careers"},"Careers"),r.a.createElement(c.b,{className:"nav-menu__item",to:"/contacts"},"Contacts"))}),m=a(9),u=a(10),d=a(33),f=a(30),p=a(34),v=a(15),g=a.n(v),h="https://shielded-brushlands-46595.herokuapp.com/blog/",y={headers:{"x-requested-with":"xhr"}},k=function(){function e(){Object(m.a)(this,e)}return Object(u.a)(e,null,[{key:"getList",value:function(){return new Promise((function(e){g.a.get(h,y).then((function(t){e(t.data||[])})).catch((function(){return e([])}))}))}},{key:"getById",value:function(e){return new Promise((function(t){g.a.get("".concat(h,"/").concat(e),y).then((function(e){t(e.data||null)})).catch((function(){return t()}))}))}}]),e}(),E=function(){function e(){Object(m.a)(this,e)}return Object(u.a)(e,null,[{key:"parseDateFromString",value:function(e){if(!e)return null;var t=e.split("-"),a=t[0],n=t[1],r=t[2]||"1";return a&&n?new Date(parseInt(a,10),parseInt(n,10)-1,parseInt(r,10)):null}},{key:"format",value:function(t){var a=e.parseDateFromString(t);return a?new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"long",year:"numeric"}).format(a):""}}]),e}(),b=(a(63),a(64),function(e){return r.a.createElement("div",{className:"page-container__root"},r.a.createElement("h2",null,e.title),r.a.createElement("div",null,e.content))}),w=function(e,t){return(E.parseDateFromString("".concat(e.year,"-").concat(e.month,"-").concat(e.day))||new Date)<(E.parseDateFromString("".concat(t.year,"-").concat(t.month,"-").concat(t.day))||new Date)?1:-1},_=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.getList().then((function(t){e.setState({items:t})}))}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"flexBox flexColumn"},this.getItems());return r.a.createElement(b,{title:"Blog",content:e})}},{key:"getItems",value:function(){return this.state.items.sort(w).map((function(e){return r.a.createElement("div",{key:e.id,className:"page-blog__itemContainer"},r.a.createElement("div",{className:"page-blog__title"},E.format("".concat(e.year,"-").concat(e.month,"-").concat(e.day))),r.a.createElement("div",{className:"page-blog__item"},e.title),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.linkCaption))}))}}]),t}(r.a.Component),N=a(31),S=(a(65),{month:"long",year:"numeric"}),x=N.data.map((function(e){return r.a.createElement("div",{key:e.key,className:"page-careers__item"},(t=e.site,a=e.title,t?r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",{className:"page-careers__title"},a)):r.a.createElement("h3",{className:"page-careers__title"},a)),r.a.createElement("div",{className:"page-careers__dates"},function(e){var t=E.parseDateFromString(e[0]),a=E.parseDateFromString(e[1]);if(t){var n=t.toLocaleDateString("en-US",S);return a?"".concat(n," - ").concat(a.toLocaleDateString("en-US",S)):"Since ".concat(n)}return""}(e.dates)),r.a.createElement("div",{className:""},e.post),r.a.createElement("div",{className:""},e.description),r.a.createElement("div",{className:"flexBox flexColumn"},r.a.createElement("div",{className:""},e.tools)));var t,a})),B=r.a.createElement("div",{className:"flexBox flexColumn"},x),C=function(){return r.a.createElement(b,{title:"Careers",content:B})},D=a(16),j=(a(66),D.data.map((function(e){return r.a.createElement("div",{key:e.key},e.value,":\xa0")}))),O=D.data.map((function(e){return r.a.createElement("div",{key:e.key},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title))})),I=r.a.createElement("div",{className:"flexBox alignItemsBaseline page-careers__item"},r.a.createElement("div",null,j),r.a.createElement("div",null,O)),L=function(){return r.a.createElement(b,{title:"Contacts and Social",content:I})},J=a(32),A=a.n(J),F=(a(67),"https://github.com/Artyom-Ganev/artyom-ganev-server"),M="https://github.com/Artyom-Ganev/artyom-ganev-src",T="https://en.wikipedia.org/wiki/Rybinsk",G="noopener noreferrer",H="page-main__contentBlock",R=r.a.createElement("div",{className:"page-main__root"},r.a.createElement("img",{className:"page-main__image",src:A.a,alt:"Artyom",title:"artyom.jpg"}),r.a.createElement("h2",{className:H},"Hi! My name is Artyom."),r.a.createElement("div",{className:H},r.a.createElement("div",null,"I'm a programmer, based in\xa0",r.a.createElement("a",{href:T,target:"_blank",rel:G},"Rybinsk"),",\xa0Russia. There are some facts about me on this site.")),r.a.createElement("div",{className:H},r.a.createElement("div",null,"You can contact me if you have some ideas for it's improvement or have found bugs, typos etc. I'm still working on it.")),r.a.createElement("div",{className:H},"Frontend of this site is based on React, TypeScript and Sass, the sources of this part are located on GitHub\xa0",r.a.createElement("a",{href:M,target:"_blank",rel:G},"here"),"."),r.a.createElement("div",{className:H},"Backend uses Spring Boot, Maven, Heroku and PostgreSQL and is located\xa0",r.a.createElement("a",{href:F,target:"_blank",rel:G},"here"),".")),W=function(){return R},P=(a(68),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Q(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement((function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"flexBox flexColumn"},r.a.createElement(s,null),r.a.createElement(l.a,{exact:!0,path:"/",component:W}),r.a.createElement(l.a,{path:"/blog",component:_}),r.a.createElement(l.a,{path:"/careers",component:C}),r.a.createElement(l.a,{path:"/contacts",component:L})))}),null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");P?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Q(e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.1213a298.chunk.js.map