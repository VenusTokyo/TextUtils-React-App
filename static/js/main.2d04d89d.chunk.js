(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),c=a.n(o),r=(a(12),a(1));a(13);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},e.aboutText))),l.a.createElement("div",{className:"d-flex text-".concat("light"===e.mode?"dark":"light")},"Change Color",l.a.createElement("div",{className:"bg-primary rounded mx-2",onClick:function(){e.changeColor("primary")},style:{height:"20px",width:"20px"}}),l.a.createElement("div",{className:"bg-danger rounded mx-2",onClick:function(){e.changeColor("danger")},style:{height:"20px",width:"20px"}}),l.a.createElement("div",{className:"bg-success rounded mx-2",onClick:function(){e.changeColor("success")},style:{height:"20px",width:"20px"}}),l.a.createElement("div",{className:"bg-warning rounded mx-2",onClick:function(){e.changeColor("warning")},style:{height:"20px",width:"20px"}})),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onChange:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode")))))}function i(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),o=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading," "),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#343a40":"white",color:"dark"===e.mode?"white":"black"},value:o,id:"MyBox",rows:"8"})),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat(e.color," mx-2 my-1"),onClick:function(){c(o.toUpperCase()),e.showAlert("Converted to UpperCase","success")}},"Convert to UPPERCASE"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat(e.color," mx-2 my-1"),onClick:function(){c(o.toLowerCase()),e.showAlert("Converted to LowerCase","success")}},"Convert to lowercase"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat(e.color," mx-2 my-1"),onClick:function(){c(""),e.showAlert("Cleared","success")}},"Clear Text"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat(e.color," mx-2 my-1"),onClick:function(){navigator.clipboard.writeText(o),e.showAlert("Text copied to Clipboard","success")}},"Copy Text"),l.a.createElement("button",{disabled:0===o.length,className:"btn btn-".concat(e.color," mx-2 my-1"),onClick:function(){var t=o.split(/[ ]+/);c(t.join(" ")),e.showAlert("Removed Extra Spaces","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your Text summary"),l.a.createElement("p",null,o.split(/\s+/).filter((function(e){return 0!==e.length})).length," Words and ",o.length," characters"),l.a.createElement("p",null,.008*o.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes Reading time"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,o)))}s.defaultProps={title:"set title here",aboutText:"abouttexthere"};var m=function(e){var t;return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",null,l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(t=e.alert.type).charAt(0).toUpperCase()+t.slice(1)," "),e.alert.msg,l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))))};var d=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(null),d=Object(r.a)(c,2),u=d[0],h=d[1],b=Object(n.useState)("primary"),g=Object(r.a)(b,2),p=g[0],v=g[1],E=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(o("dark"),document.body.style.backgroundColor="#343a40",E("Dark Mode has been Enabled","success"),document.title="TextUtils DarkMode"):(o("light"),document.body.style.backgroundColor="white",E("Light Mode has been Enabled","success"),document.title="TextUtils LightMode")},changeColor:function(e){v(e)}}),l.a.createElement(m,{alert:u}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{showAlert:E,heading:"Enter the Text to Analyze",mode:a,color:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports=a(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.2d04d89d.chunk.js.map