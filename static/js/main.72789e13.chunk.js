(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],{144:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),i=(a(54),a(55),a(5)),o=(a(56),a(12));var u=function(){var e=Object(o.d)((function(e){var t;return{title:null===e||void 0===e||null===(t=e.title)||void 0===t?void 0:t.data}}),o.b).title;return r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("section",{className:"title"},r.a.createElement("h1",null,e)),r.a.createElement("section",{className:"central-links"},r.a.createElement("nav",null,r.a.createElement(i.b,{to:"/"},"Quem eu sou"),r.a.createElement(i.b,{to:"/articles"},"Artigos")))))},m=a(22),s=(a(62),a(45)),p=function(e){return Object(s.action)("@title",e)},d=a(1),E=a.n(d),f=a(3),v=a(13),g=(a(64),"https://vitorjordao.herokuapp.com/"),b="";function h(e,t){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(E.a.mark((function e(t,a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"auth"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({login:t,password:a})});case 2:if(!(n=e.sent).ok){e.next=10;break}return e.next=6,n.json();case 6:r=e.sent,b=r.type+" "+r.token,e.next=11;break;case 10:b="";case 11:return e.abrupt("return",n.status);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=0;function N(e){return j.apply(this,arguments)}function j(){return(j=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"articles?page=").concat(x,"&type=").concat(t),{});case 2:return a=e.sent,e.abrupt("return",null===a||void 0===a?void 0:a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return O.apply(this,arguments)}function O(){return(O=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"article"),{body:JSON.stringify(t),method:"POST",headers:{Authorization:b,"Content-Type":"application/json"}});case 2:return 403===(a=e.sent).status?alert("Deslogou"):500===a.status&&alert("Ocorreu um erro"),e.abrupt("return",202===a.status);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return D.apply(this,arguments)}function D(){return(D=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"article?url=").concat(t),{method:"DELETE",headers:{Authorization:b}});case 2:return 403===(a=e.sent).status?alert("Deslogou"):500===a.status&&alert("Ocorreu um erro"),e.abrupt("return",202===a.status);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return F.apply(this,arguments)}function F(){return(F=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"article"),{body:JSON.stringify(t),method:"PUT",headers:{Authorization:b,"Content-Type":"application/json"}});case 2:return 403===(a=e.sent).status?alert("Deslogou"):500===a.status&&alert("Ocorreu um erro"),e.abrupt("return",202===a.status);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"articles/all"),{headers:{Authorization:b}});case 2:return 403===(t=e.sent).status?alert("Deslogou"):500===t.status&&alert("Ocorreu um erro"),e.abrupt("return",null===t||void 0===t?void 0:t.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=a(14);var V=function(){var e=Object(n.useState)(),t=Object(v.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),i=Object(v.a)(c,2),o=i[0],u=i[1],m=Object(A.g)();return Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=6;break}return e.next=3,N("ARTICLES");case 3:t=e.sent,u(t),l(t);case 6:case"end":return e.stop()}}),e)})))(),r.a.createElement("main",{className:"articles"},r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{alt:"Campo de perquisa dos artigos",type:"text",placeholder:"Pesquisar",className:"text_find"}),r.a.createElement("button",{type:"submit",className:"button_find",onClick:function(e){e.preventDefault();var t=e.currentTarget.form[0].value;if("meulogin"!==t){if(a){var n=a.filter((function(e){return e.name.includes(t)}));u(n)}}else m.push("/login")},"aria-label":"Pesquisar"},r.a.createElement("i",{className:"search-icon"})))),r.a.createElement("section",{className:"display"},null===o||void 0===o?void 0:o.map((function(e){return r.a.createElement("article",{className:"display__article",key:e.url,onClick:function(){return t=e.url,void m.push("/article/".concat(t));var t}},r.a.createElement("h2",null,null===e||void 0===e?void 0:e.name),r.a.createElement("figure",null,r.a.createElement("img",{srcSet:"".concat(null===e||void 0===e?void 0:e.image),src:"/images/blog.png",alt:null===e||void 0===e?void 0:e.imgDescription}),r.a.createElement("figcaption",null,null===e||void 0===e?void 0:e.description)),r.a.createElement("div",null))}))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){console.log("Precisa implementar!")},className:"load-articles"},"Carregar mais")))},J=a(46),_=a.n(J);a(144);function P(e){return I.apply(this,arguments)}function I(){return(I=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(g,"article?url=").concat(t));case 2:return a=e.sent,e.abrupt("return",200===a.status?null===a||void 0===a?void 0:a.json():null);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=a(47);var z=function(e){var t=Object(o.c)(),a=Object(n.useState)(),l=Object(v.a)(a,2),c=l[0],i=l[1];return t(p({data:(null===c||void 0===c?void 0:c.name)||"..."})),Object(f.a)(E.a.mark((function a(){var n,r,l;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c){a.next=5;break}return a.next=3,P((null===e||void 0===e||null===(n=e.match)||void 0===n||null===(r=n.params)||void 0===r?void 0:r.url)||"");case 3:(l=a.sent)?(document.getElementsByTagName("meta").description.content=l.description,i(l)):t(p({data:"Artigo n\xe3o encontrado"}));case 5:case"end":return a.stop()}}),a)})))(),c?r.a.createElement("main",{className:"article"},r.a.createElement("section",{className:"details"},r.a.createElement("div",{className:"datails__separator"},r.a.createElement("time",{dateTime:null===c||void 0===c?void 0:c.publicationDate},"Data de publica\xe7\xe3o - ",null===c||void 0===c?void 0:c.publicationDate),r.a.createElement("span",{className:"author"},"Feito por - Vitor Jord\xe3o")),r.a.createElement("div",{className:"datails__separator"},r.a.createElement("span",{className:"language"},null===c||void 0===c?void 0:c.language),r.a.createElement("span",{className:"type"},null===c||void 0===c?void 0:c.type),r.a.createElement("span",null,"Tags:",r.a.createElement("span",{className:"tags"},null===c||void 0===c?void 0:c.tags.reduce((function(e){return e+", "})))))),r.a.createElement("section",{className:"article-main"},r.a.createElement("blockquote",{className:"description"},null===c||void 0===c?void 0:c.description),r.a.createElement("figure",{className:"article-main__image"},r.a.createElement("img",{srcSet:"".concat(null===c||void 0===c?void 0:c.image),src:"/images/blog.png",alt:null===c||void 0===c?void 0:c.imgDescription}),r.a.createElement("figcaption",null,null===c||void 0===c?void 0:c.imgDescription)),r.a.createElement("article",{className:"article-text"},r.a.createElement(_.a,{escapeHtml:!1,source:null===c||void 0===c?void 0:c.article}))),r.a.createElement("section",{className:"article-comments"},r.a.createElement(L.DiscussionEmbed,{shortname:"vitorjordao",config:{url:"https://www.vitorjordao.dev/#"+c.url,identifier:c.url,title:c.name}}))):r.a.createElement(r.a.Fragment,null)};a(148);var B=function(){var e=Object(n.useState)(),t=Object(v.a)(e,2),a=t[0],l=t[1],c=Object(A.g)();function i(){return(i=Object(f.a)(E.a.mark((function e(t){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.form[0].value,n=t.target.form[1].value,e.next=5,h(a,n);case 5:if((r=e.sent)&&400!==r){e.next=9;break}return l("Login ou senha errados"),e.abrupt("return");case 9:l(""),c.push("/admin");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("main",{className:"login"},r.a.createElement("form",{id:"login-form"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"login"},"Login"),r.a.createElement("input",{type:"text",name:"login",id:"login"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"password"})),r.a.createElement("div",{className:"login-button"},r.a.createElement("button",{onClick:function(e){return i.apply(this,arguments)}},"Login")),r.a.createElement("span",null,a)))};a(149);var q=function(){return r.a.createElement("main",{className:"about"},r.a.createElement("div",null,r.a.createElement("img",{alt:"Vitor Jord\xe3o no Clojure South 2019",className:"image image-1",src:"/images/eu-clojure-south.jpg"}),r.a.createElement("p",null,"Hey! Como vai?"),r.a.createElement("p",null,"Meu nome \xe9 Vitor Jord\xe3o ",r.a.createElement("span",{className:"emoji",role:"img","aria-label":"Emoji de joinha"},"\ud83d\udc4d"))),r.a.createElement("div",null,r.a.createElement("p",null,"Comecei a programar em 2016 em uma ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/vitorjordao/Macros-de-minecraft"},"linguagem de programa\xe7\xe3o feita para automatizar rotinas no minecraft")," e desde l\xe1 nunca mais parei de estudar e aprender!"),r.a.createElement("img",{alt:"Vitor Jord\xe3o no Clojure South 2019",className:"image image-2",src:"/images/minecraft-code.png"})),r.a.createElement("div",null,r.a.createElement("p",null,"Tenho forma\xe7\xe3o em t\xe9cnico de inform\xe1tica na ETEC (2017 at\xe9 2018) e estou para me formar em An\xe1lise e Desenvolvimento de Sistemas na FATEC (2018 at\xe9 2020).")),r.a.createElement("div",null,r.a.createElement("p",null,"Tenho trabalhado com front-end desde 2019 passando por algumas tecnologias e linguagens, como JavaScript, ClojureScript, React, Re-Frame, AngulasJS, Svelte, etc.")),r.a.createElement("div",null,r.a.createElement("p",null,"Amo aprender novas linguagens e tecnologias, acumulando algumas com um n\xedvel de conhecimento suficiente para trabalhar, como Java, JavaScript, Clojure, ClojureScript, C#, entre outras...")),r.a.createElement("div",null,r.a.createElement("p",null,"Prezo muito pelo crescimento de novas comunidades da \xe1rea, e estou sempre disposto a participar de eventos relacionados!"),r.a.createElement("img",{alt:"Vitor Jord\xe3o no evento IA Rio Preto",className:"image image-1",src:"/images/eu-e-comunidade.jpg"})))};a(150);var R=function(){var e=Object(A.g)();return r.a.createElement("main",{className:"admin"},r.a.createElement("div",null,r.a.createElement("h2",null,"Articles"),r.a.createElement("button",{onClick:function(){return e.push("/admin/article/create")}},"Create"),r.a.createElement("button",{onClick:function(){return e.push("/admin/article/list")}},"List")))};a(151);var U,H=function(){var e=Object(A.g)();function t(){return(t=Object(f.a)(E.a.mark((function e(t){var a,n,r,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),a=t.target,n={},r=0;r<a.length-1;r++)"checkbox"===(l=t.target[r]).type?n[l.id]=l.checked:n[l.id]=l.value;return n.tags=n.tags.split(";"),e.next=7,k(n);case 7:if(!e.sent){e.next=9;break}a.reset();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("main",{className:"create"},r.a.createElement("button",{onClick:function(){return e.goBack()}},"Voltar"),r.a.createElement("form",{onSubmit:function(e){return t.apply(this,arguments)},className:"create-article"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"url"},"Url"),r.a.createElement("input",{name:"url",type:"text",id:"url"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",type:"text",id:"name"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{name:"description",type:"text",id:"description"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{name:"image",type:"text",id:"image"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"imgDescription"},"Image description"),r.a.createElement("input",{name:"imgDescription",type:"text",id:"imgDescription"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"article"},"Article"),r.a.createElement("textarea",{name:"article",id:"article"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"tags"},'Tags - (Separa por ";")'),r.a.createElement("input",{name:"tags",type:"text",id:"tags"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"type"},"Type"),r.a.createElement("input",{name:"type",type:"text",id:"type"})),r.a.createElement("div",null,r.a.createElement("input",{name:"publishable",type:"checkbox",id:"publishable"}),r.a.createElement("label",{htmlFor:"publishable"},"\xc9 public\xe1vel?")),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"publicationDate"},"Publication date"),r.a.createElement("input",{name:"publicationDate",type:"datetime-local",id:"publicationDate",defaultValue:"2020-06-12T19:30"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"language"},"Language"),r.a.createElement("input",{name:"language",type:"text",id:"language"})),r.a.createElement("button",null,"Invite")))};a(152);var M=function(){var e=Object(A.g)();function t(){return(t=Object(f.a)(E.a.mark((function t(a){var n,r,l,c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a.preventDefault(),n=a.target,r={},l=0;l<n.length-1;l++)"checkbox"===(c=a.target[l]).type?r[c.id]=c.checked:r[c.id]=c.value;return r.tags=r.tags.split(";"),t.next=7,C(r);case 7:if(!t.sent){t.next=9;break}e.goBack();case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("main",{className:"create"},r.a.createElement("button",{onClick:function(){return e.goBack()}},"Voltar"),r.a.createElement("form",{onSubmit:function(e){return t.apply(this,arguments)},className:"create-article"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"url"},"Url"),r.a.createElement("input",{disabled:!0,name:"url",type:"text",id:"url",defaultValue:U.url})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",type:"text",id:"name",defaultValue:U.name})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{name:"description",type:"text",id:"description",defaultValue:U.description})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{name:"image",type:"text",id:"image",defaultValue:U.image})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"imgDescription"},"Image description"),r.a.createElement("input",{name:"imgDescription",type:"text",id:"imgDescription",defaultValue:U.imgDescription})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"article"},"Article"),r.a.createElement("textarea",{name:"article",id:"article",defaultValue:U.article})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"tags"},'Tags - (Separa por ";")'),r.a.createElement("input",{name:"tags",type:"text",id:"tags",defaultValue:U.tags})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"type"},"Type"),r.a.createElement("input",{name:"type",type:"text",id:"type",defaultValue:U.type})),r.a.createElement("div",null,r.a.createElement("input",{name:"publishable",type:"checkbox",id:"publishable",defaultChecked:U.publishable}),r.a.createElement("label",{htmlFor:"publishable"},"\xc9 public\xe1vel?")),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"publicationDate"},"Publication date"),r.a.createElement("input",{name:"publicationDate",type:"datetime-local",id:"publicationDate",defaultValue:U.publicationDate})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"language"},"Language"),r.a.createElement("input",{name:"language",type:"text",id:"language",defaultValue:U.language})),r.a.createElement("button",null,"Invite")))};a(153);var Q=function(){var e=Object(A.g)(),t=Object(n.useState)(),a=Object(v.a)(t,2),l=a[0],c=a[1];function i(){return(i=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:if(!e.sent){e.next=7;break}return e.next=5,S();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(t){U=t,e.push("/admin/article/update")}return Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=5;break}return e.next=3,S();case 3:t=e.sent,c(t);case 5:case"end":return e.stop()}}),e)})))(),r.a.createElement("main",{className:"articles"},r.a.createElement("button",{onClick:function(){return e.goBack()}},"Voltar"),r.a.createElement("section",{className:"display"},null===l||void 0===l?void 0:l.map((function(t){return r.a.createElement("article",{className:"display__article",key:t.url},r.a.createElement("h2",null,null===t||void 0===t?void 0:t.name),r.a.createElement("figure",null,r.a.createElement("img",{srcSet:"".concat(null===t||void 0===t?void 0:t.image),src:"/images/blog.png",alt:null===t||void 0===t?void 0:t.imgDescription}),r.a.createElement("figcaption",null,null===t||void 0===t?void 0:t.description)),r.a.createElement("button",{onClick:function(){return o(t)}},"Editing"),r.a.createElement("button",{onClick:function(){return function(e){return i.apply(this,arguments)}(t.url)}},"Delete"),r.a.createElement("button",{onClick:function(){return a=t.url,void e.push("/article/".concat(a));var a}},"View"))}))))},G=a(48),K=function(e){var t=e.component,a=Object(G.a)(e,["component"]);return r.a.createElement(A.b,Object.assign({},a,{render:function(e){return b?r.a.createElement(t,e):r.a.createElement(A.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};function W(e){var t=Object(o.c)(),a=e.component;return e.title&&t(p({data:e.title})),Object(m.a)({},a,{props:e.params})}var X=function(){return r.a.createElement(A.d,null,r.a.createElement(A.b,{exact:!0,path:"/",component:function(e){return r.a.createElement(W,{title:"Sobre mim",component:r.a.createElement(q,null),params:e})}}),r.a.createElement(A.b,{exact:!0,path:"/articles",component:function(e){return r.a.createElement(W,{title:"Artigos",component:r.a.createElement(V,null),params:e})}}),r.a.createElement(A.b,{exact:!0,path:"/article/:url",component:function(e){return r.a.createElement(W,{title:"",component:r.a.createElement(z,null),params:e})}}),r.a.createElement(A.b,{exact:!0,path:"/login",component:function(e){return r.a.createElement(W,{title:"Login",component:r.a.createElement(B,null),params:e})}}),r.a.createElement(K,{exact:!0,path:"/admin",component:function(e){return r.a.createElement(W,{title:"Admin",component:r.a.createElement(R,null),params:e})}}),r.a.createElement(K,{exact:!0,path:"/admin/article/create",component:function(e){return r.a.createElement(W,{title:"Article create",component:r.a.createElement(H,null),params:e})}}),r.a.createElement(K,{exact:!0,path:"/admin/article/list",component:function(e){return r.a.createElement(W,{title:"Article list",component:r.a.createElement(Q,null),params:e})}}),r.a.createElement(K,{exact:!0,path:"/admin/article/update",component:function(e){return r.a.createElement(W,{title:"Article update",component:r.a.createElement(M,null),params:e})}}),r.a.createElement(A.b,{path:"*",component:function(e){return r.a.createElement(W,{title:"Not Found",component:r.a.createElement(r.a.Fragment,null),params:e})}}))};a(154);var Y=function(){return r.a.createElement("footer",null,"Todos os direitos reservados \xa9")};var Z=function(){return r.a.createElement(i.a,null,r.a.createElement(u,null),r.a.createElement(X,null),r.a.createElement(Y,null))},$=a(16),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:""},t=arguments.length>1?arguments[1]:void 0;return"@title"===t.type?Object(m.a)({},e,{data:t.payload.data}):e},te=Object($.b)({title:ee}),ae=Object($.c)(te);c.a.render(r.a.createElement(o.a,{store:ae},r.a.createElement(Z,null)),document.getElementById("root"))},49:function(e,t,a){e.exports=a(155)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.72789e13.chunk.js.map