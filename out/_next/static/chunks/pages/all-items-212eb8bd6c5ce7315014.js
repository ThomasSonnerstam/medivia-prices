_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"2cu+":function(n,e,t){"use strict";var i=t("h4VS");function a(){var n=Object(i.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]);return a=function(){return n},n}var r=t("5D9J").a.section(a());e.a=r},"6zAE":function(n,e,t){"use strict";var i=t("h4VS");function a(){var n=Object(i.a)(["\n  display: flex;\n  width: 100vw;\n  align-items: center;\n  flex-direction: column;\n  padding: 2vh;\n\n  @media screen and (min-width: 1000px) {\n    padding: 2vh 5vw;\n  }\n"]);return a=function(){return n},n}var r=t("5D9J").a.section(a());e.a=r},Rz42:function(n,e,t){"use strict";t.r(e);var i=t("q1tI"),a=t.n(i),r=t("r/3v"),c=t("6zAE"),o=t("Qog0"),l=t("hSTJ"),u=t("X2+y"),d=t("kCUw"),s=t("2cu+"),p=a.a.createElement;e.default=function(){var n=Object(i.useState)(""),e=n[0],t=n[1],a=e?l.a.items.filter((function(n){return n.name.toLowerCase().includes(e.toLocaleLowerCase())})):l.a.items;return p(o.a,null,p(c.a,null,p(c.a,null,p(u.a,null,p("label",{htmlFor:"search",style:{color:"white"}},"Search item:"),p("input",{style:{paddingLeft:"15px",height:"5vh",width:"100%",maxWidth:"300px",marginTop:"10px",border:"none",borderRadius:"5px"},type:"text",name:"search",id:"search",value:e,onChange:function(n){t(n.target.value)}}))),p(s.a,null,a.sort((function(n,e){return n.name>e.name?1:-1})).map((function(n,e){return p(d.a,{key:e},p("img",{style:{width:"32px",height:"32px"},src:n.url}),p("a",{href:"https://wiki.mediviastats.info/".concat(n.name.split(" ").join("_"))},p(r.a,{item:n.name})),p("p",{style:{color:"#dee0df",fontSize:"16px",margin:"0",textAlign:"center"}},n.price,"gp"),p("p",{style:{color:"#fac125",fontSize:"16px",margin:"0",textAlign:"center"}},"Location:"),p("p",{style:{color:"#dee0df",fontSize:"16px",margin:"0",textAlign:"center"}},n.location))}))),p("p",{style:{fontSize:"20px",textAlign:"center"}},"If you find any errors, or want items added - message Revi Black on Legacy.")))}},Ublh:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-items",function(){return t("Rz42")}])},"X2+y":function(n,e,t){"use strict";var i=t("h4VS");function a(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  width: 60%;\n  align-items: center;\n  margin-bottom: 3vh;\n\n  @media screen and (min-width: 700px) {\n    width: 80%;\n  }\n\n  @media screen and (min-width: 1250px) {\n    width: 50%;\n  }\n"]);return a=function(){return n},n}var r=t("5D9J").a.div(a());e.a=r},kCUw:function(n,e,t){"use strict";var i=t("h4VS");function a(){var n=Object(i.a)(["\n  width: 45%;\n  height: 20vh;\n  padding: 5px;\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  border: 1px solid #2783ba;\n  border-radius: 4px;\n\n  @media screen and (min-width: 700px) {\n    width: 22%;\n  }\n\n  @media screen and (min-width: 1000px) {\n    width: 15%;\n    max-width: 150px;\n  }\n"]);return a=function(){return n},n}var r=t("5D9J").a.div(a());e.a=r},"r/3v":function(n,e,t){"use strict";var i=t("h4VS"),a=t("q1tI"),r=t.n(a),c=t("5D9J"),o=r.a.createElement;function l(){var n=Object(i.a)(["\n  color: #58b85b;\n  font-size: 16px;\n  margin: 0;\n  text-align: center;\n"]);return l=function(){return n},n}var u=c.a.p(l());e.a=function(n){var e=n.item;return o(r.a.Fragment,null,o(u,null,e))}}},[["Ublh",0,1,2,3]]]);