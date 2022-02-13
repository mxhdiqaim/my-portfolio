(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{35:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(25),i=a.n(n),s=(a(35),a(2)),o=a(26),l=a(30),d=a(15),j=a.n(d),b=a(27),h=a.n(b),u=Object(r.createContext)(),f=a(11),O="SET_LOADING",m="GET_REPOS",x="SET_MODE",p=function(e,t){switch(t.type){case m:return Object(f.a)(Object(f.a)({},e),{},{repos:t.payload,loading:!1});case O:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case x:return Object(f.a)(Object(f.a)({},e),{},{nightMode:!t.payload});default:return e}},g=a(0),k=function(e){var t=Object(r.useReducer)(p,{repos:[],loading:!1,nightMode:!0}),a=Object(l.a)(t,2),c=a[0],n=a[1],i=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(),e.next=3,h.a.get("https://api.github.com/users/mahdiabubakar/repos?per_page=10&sort=created:asc?client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GITHUB_CLIENT_SECRET));case 3:t=e.sent,n({type:m,payload:t.data});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){c.nightMode?(document.getElementById("body").style.background="#333333",document.getElementById("body").style.color="#ffffff",document.getElementById("a").style.color="#ffffff",document.getElementById("b").style.color="#ffffff"):(document.getElementById("body").style.background="#ffffff",document.getElementById("body").style.color="#333333",document.getElementById("a").style.color="#333333",document.getElementById("b").style.color="#333333")},d=function(){return n({type:O})};return Object(g.jsx)(u.Provider,{value:{repos:c.repos,loading:c.loading,nightMode:c.nightMode,getGithubRepos:i,setNightmode:function(){n({type:x,payload:c.nightMode}),s()},toggleDarkMode:s},children:e.children})},y=a(9),v=a.p+"static/media/mahdi.cadd1ffd.jpg",_=a(8),N=a.n(_),E=function(){var e=Object(r.useContext)(u),t=e.getGithubRepos,a=e.setNightmode,c=e.nightMode;return Object(r.useEffect)((function(){t()}),[]),Object(g.jsxs)("div",{className:"navbar",children:[Object(g.jsx)("p",{style:{float:"right",position:"absolute",right:"24px",top:"20px",cursor:"pointer"},onClick:a,children:c?Object(g.jsx)("i",{class:"far fa-sun"}):Object(g.jsx)("i",{class:"fal fa-moon"})}),Object(g.jsx)("div",{className:"navbar-img",children:Object(g.jsx)("img",{src:v,alt:"Mahdi Abubakar",className:"round-img img",style:{width:"200px"}})}),Object(g.jsxs)("div",{className:"navbar-links",children:[Object(g.jsx)("h1",{children:"NigerianCoder"}),Object(g.jsxs)("ul",{id:"navbar",children:[Object(g.jsx)("li",{children:Object(g.jsx)(y.b,{id:"a",className:"a link",to:"/",children:"About"})}),Object(g.jsx)("li",{children:Object(g.jsx)(y.b,{id:"b",to:"/contact",className:"b link",onClick:t,children:"Contact"})})]})]})]})};E.propsType={darkMode:N.a.bool.isRequired,toggleDarkMode:N.a.func.isRequired};var T=E,S=function(){var e=(new Date).getFullYear()-2e3,t=(new Date).getFullYear()-2018;return Object(g.jsxs)("div",{className:"about",id:"about-light-text",children:[Object(g.jsxs)("h1",{children:["About ",Object(g.jsx)("span",{children:"Me!"})]}),Object(g.jsxs)("p",{children:["My name is Mahdi Abubakar I\u2019m ",e," years old. I am a very enthusiastic student, I like to receive and deal with challenging tasks, I am Front-End (ReactJS | Angular | React Native) developer, progressive mobile app developer, Javascript hero CSS hater \ud83d\ude1c, which I also work with Typescript and Node.js, little bit with python."]}),Object(g.jsxs)("p",{children:["I have been writing code for approximately ",t," years."]}),Object(g.jsx)("p",{children:"Learn more about my resource."}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsxs)("a",{href:"https://github.com/mahdiabubakar",target:"_blank",rel:"noreferrer",children:[Object(g.jsx)("i",{className:"fab fa-github"})," My Github repo"]})}),Object(g.jsx)("li",{children:Object(g.jsxs)("a",{href:"https://linktr.ee/nigeriancoder",target:"_blank",rel:"noreferrer",children:[Object(g.jsx)("i",{className:"fad fa-tasks",style:{padding:"0 4px"}}),"Check out my projects \ud83d\ude0e"]})}),Object(g.jsxs)("li",{children:[Object(g.jsx)("i",{className:"fas fa-building"})," I am Full-Stack JavaScript, self taught and also Pull-Stack developer \ud83d\ude03."]}),Object(g.jsxs)("li",{children:["You can also reach me out on"," ",Object(g.jsxs)("a",{href:"https://instagram.com/nigeriancoder",target:"_blank",rel:"noreferrer",children:[Object(g.jsx)("i",{className:"fab fa-instagram"})," nigeriancoder,"]})," ",Object(g.jsxs)("a",{href:"https://twitter.com/nigeriancoder",target:"_blank",rel:"noreferrer",children:[Object(g.jsx)("i",{className:"fab fa-twitter"})," @nigeriancoder"]})," ",Object(g.jsxs)("a",{href:"https://linkedin.com/in/mahdiabubakar",target:"_blank",rel:"noreferrer",children:[Object(g.jsx)("i",{className:"fab fa-linkedin"})," Mahdi Abubakar"]})," ","also."]})]}),Object(g.jsxs)("p",{className:"mailto",children:["Hey! Don't hesitate, catch me up at"," ",Object(g.jsx)("a",{href:"mailto:contact@mahdiabubakar.me",target:"_blank",rel:"noreferrer",children:"contact@mahdiabubakar.me"})]})]})},C=function(){return Object(g.jsxs)("div",{className:"not-found",children:[Object(g.jsx)("h1",{children:"404"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("p",{className:"lead",children:"Page not found..."}),Object(g.jsxs)(y.b,{to:"/",className:"bck-2-H",children:["Back to Home"," "]})]})]})},I=function(){return Object(g.jsxs)("div",{className:"contact",id:"contact-light-text",children:[Object(g.jsxs)("p",{children:["Address: ",Object(g.jsx)("i",{children:"Karshi Abuja, NG"})]}),Object(g.jsxs)("p",{children:["Email:"," ",Object(g.jsx)("i",{children:Object(g.jsx)("a",{href:"mailto:contact@mahdiabubakar.me",target:"_blank",rel:"noreferrer",children:"contact@mahdiabubakar.me"})})]}),Object(g.jsx)("div",{className:"social-media",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Other Links: "}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://twitter.com/nigeriancoder",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("i",{className:"fab fa-twitter"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://instagram.com/nigeriancoder",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("i",{className:"fab fa-instagram"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://linkedin.com/in/mahdiabubakar",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("i",{className:"fab fa-linkedin"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{href:"https://github.com/mahdiabubakar",target:"_blank",rel:"noreferrer",children:Object(g.jsx)("i",{className:"fab fa-github"})})})]})})]})},R=function(e){var t=e.repo;return Object(g.jsx)("div",{className:"card dark",children:Object(g.jsx)("a",{href:t.html_url,target:"_blank",rel:"noreferrer",children:t.name})})};R.propsTypes={repo:N.a.object.isRequired};var w=R,M=a.p+"static/media/spinner.5c2fa771.gif",D=function(){return Object(g.jsx)(r.Fragment,{children:Object(g.jsx)("img",{src:M,alt:"Loading...",className:"spinner"})})},A=function(){var e=Object(r.useContext)(u),t=e.repos,a=e.loading;return Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("h2",{children:"Recent Github Repos"}),a?Object(g.jsx)(D,{}):t.map((function(e){return Object(g.jsx)(w,{repo:e},e.id)}))]})},P=function(){return Object(g.jsx)("footer",{className:"footer",children:Object(g.jsxs)("p",{children:["Desing with ",Object(g.jsx)("i",{className:"fas fa-heart love-icon"})," by"," ",Object(g.jsx)("a",{href:"https://twitter.com/TheMahdisoft",target:"_blank",rel:"noreferrer",children:"The Mahdisoft Inc"})]})})},B=function(){var e=Object(r.useContext)(u).loading;return Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(I,{}),Object(g.jsx)(A,{}),!1===e&&Object(g.jsx)(P,{})]})},F=(a(65),function(){return Object(g.jsx)(k,{children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(T,{}),Object(g.jsxs)(s.c,{children:[Object(g.jsx)(s.a,{exact:!0,path:"/",component:S}),Object(g.jsx)(s.a,{exact:!0,path:"/contact",component:B}),Object(g.jsx)(s.a,{component:C})]})]})})}),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),c(e),n(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(y.a,{children:Object(g.jsx)(F,{})})}),document.getElementById("root")),L()}},[[66,1,2]]]);
//# sourceMappingURL=main.f6b0712e.chunk.js.map