(this.webpackJsonpbtcrho=this.webpackJsonpbtcrho||[]).push([[0],{33:function(e,t,n){e.exports=n(53)},39:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),i=n(16),l=n(5),s=n(6),u=n(8),h=n(7),m=n(12),d=n(55),f=n(14),p=n(54),b=n(56),v=n(57),g=n(60),y=n(58),E=n(59),k=(n(39),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).toggleNavbar=a.toggleNavbar.bind(Object(f.a)(a)),a.state={collapsed:!0},a}return Object(s.a)(n,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(p.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0},r.a.createElement(d.a,null,r.a.createElement(b.a,{tag:i.b,to:"/"},"Bitcoin Display Rho"),r.a.createElement(v.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(g.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0},r.a.createElement("ul",{className:"navbar-nav flex-grow"},r.a.createElement(y.a,null,r.a.createElement(E.a,{tag:i.b,className:"text-dark",to:"/"},"Home")),r.a.createElement(y.a,null,r.a.createElement(E.a,{tag:i.b,className:"text-dark",to:"/chart"},"Chart")),r.a.createElement(y.a,null,r.a.createElement(E.a,{tag:i.b,className:"text-dark",to:"/about"},"About")))))))}}]),n}(a.Component));k.displayName=k.name;var w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(d.a,null,this.props.children))}}]),n}(a.Component);w.displayName=w.name;var j=n(30),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={data:[]},a}return Object(s.a)(n,[{key:"fetchData",value:function(){var e=this;fetch("https://api.coindesk.com/v1/bpi/historical/close").then((function(e){if(e.ok)return e.json();throw new Error("Request Failed")}),(function(e){return console.log(e.message)})).then((function(t){var n=t.bpi,a=[["x","Price Rate"]];for(var r in n)a.push([r,n[r]]);e.setState({data:a})}))}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{chartType:"LineChart",loader:r.a.createElement("div",null,"Loading Chart"),data:this.state.data,options:{chart:{title:"Rates from Past 30 Days",subtitle:"BTC - USD"},hAxis:{title:"Date"},vAxis:{title:"USD"}},rootProps:{"data-testid":"1"}}))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={rate:"",updateTime:""},a.fetchPresent=a.fetchPresent.bind(Object(f.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"current"},r.a.createElement("h2",null,"Current Price (",this.props.currency,"):"),r.a.createElement("h3",null,this.state.rate),r.a.createElement("h6",null,"Updated: ",this.state.updateTime.toString()))}},{key:"fetchPresent",value:function(){var e=this,t="https://api.coinbase.com/v2/prices/BTC-"+this.props.currency+"/spot";fetch(t).then((function(e){if(e.ok)return e.json();throw new Error("Request Failed")}),(function(e){return console.log(e.message)})).then((function(t){e.setState({rate:t.data.amount,updateTime:new Date})}))}},{key:"startInterval",value:function(){this.intervalID=setInterval(this.fetchPresent,6e4)}},{key:"componentDidMount",value:function(){this.fetchPresent(),this.startInterval()}},{key:"componentDidUpdate",value:function(e){e.currency!==this.props.currency&&(clearInterval(this.intervalID),this.fetchPresent(),this.startInterval())}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={rate:"",date:(new Date).toISOString().slice(0,10)},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"historical"},r.a.createElement("h3",null,"Historical Rates"),r.a.createElement("label",null,"View Rate by Date:",r.a.createElement("input",{type:"date",min:"2010-07-17",max:(new Date).toISOString().slice(0,10),defaultValue:(new Date).toISOString().slice(0,10),onChange:function(t){return e.setState({date:t.target.value})}}),r.a.createElement("h4",null,this.state.rate)),r.a.createElement(O,null))}},{key:"fetchPast",value:function(){var e=this,t="https://api.coinbase.com/v2/prices/BTC-"+this.props.currency+"/spot?date="+this.state.date;fetch(t).then((function(e){if(e.ok)return e.json();throw new Error("Request Failed")}),(function(e){return console.log(e.message)})).then((function(t){e.setState({rate:t.data.amount})}))}},{key:"componentDidMount",value:function(){this.fetchPast()}},{key:"componentDidUpdate",value:function(e,t){e.currency===this.props.currency&&t.date===this.state.date||this.fetchPast()}}]),n}(a.Component),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={currencyList:[],currency:"USD"},a.changeCurrency=a.changeCurrency.bind(Object(f.a)(a)),a}return Object(s.a)(n,[{key:"changeCurrency",value:function(e){this.setState({currency:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.coinbase.com/v2/currencies").then((function(e){if(e.ok)return e.json();throw new Error("Request Failed")}),(function(e){return console.log(e.message)})).then((function(t){e.setState({currencyList:t.data})}))}},{key:"render",value:function(){return this.state.currencyList?r.a.createElement("div",null,r.a.createElement("label",null,"Select a currency:",r.a.createElement("select",{id:"Currencies",defaultValue:"USD",onChange:this.changeCurrency},r.a.createElement("option",{value:"USD"},"US Dollar"),this.state.currencyList.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})))),r.a.createElement(C,{currency:this.state.currency}),r.a.createElement(S,{currency:this.state.currency})):r.a.createElement("div",null,"Loading...")}}]),n}(a.Component),P=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",{id:"disclaim"},"This data was produced from the ",r.a.createElement("a",{href:"https://developers.coinbase.com/api",target:"_blank",rel:"noopener noreferrer"},"Coinbase Digital Currency API"),".",r.a.createElement("br",null),"Copyright A. Abi-Karam, ",(new Date).getFullYear())}}]),n}(a.Component);c.a.render(r.a.createElement(P,null),document.getElementById("copy"));var N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={animated:document.body.style.animationPlayState},a.handleClick=a.handleClick.bind(Object(f.a)(a)),a.coloring="btn btn-light",a.text="Pause Background",a}return Object(s.a)(n,[{key:"handleClick",value:function(){var e=document.body,t=e.style.animationPlayState||"running";e.style.animationPlayState="running"===t?"paused":"running",this.coloring="running"===t?"btn btn-dark":"btn btn-light",this.text="running"===t?"Resume Background":"Pause Background",this.setState({animated:e.style.animationPlayState})}},{key:"render",value:function(){return r.a.createElement("button",{onClick:this.handleClick,className:this.coloring},this.text)}}]),n}(a.Component);c.a.render(r.a.createElement(N,null),document.getElementById("bottomButton"));var B=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"tabelLabel"},"About Bitcoin"),r.a.createElement("p",null,"Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. The cryptocurrency was invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software."),"BTC Links:",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://bitcoin.org",target:"_blank",rel:"noopener noreferrer"},"Bitcoin.org")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.coinbase.com/",target:"_blank",rel:"noopener noreferrer"},"Coinbase")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.coindesk.com/",target:"_blank",rel:"noopener noreferrer"},"Coindesk"))),r.a.createElement("h2",null,"About the Site"),r.a.createElement("p",null,"Hello and thanks for stopping by! As of summer 2021 I am a college student studying Computer Science. I built this site using React and ASP .NET to help familarize myself with web development. Let me know what you think!",r.a.createElement("br",null),"Check it out on ",r.a.createElement("a",{href:"https://github.com/abikaram",target:"_blank",rel:"noopener noreferrer"},"github")," to learn more."))}}]),n}(a.Component),x=(n(52),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(m.a,{exact:!0,path:"/",component:D}),r.a.createElement(m.a,{path:"/chart",component:O}),r.a.createElement(m.a,{path:"/about",component:B}))}}]),n}(a.Component));x.displayName=x.name;var I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=document.getElementsByTagName("base")[0].getAttribute("href"),A=document.getElementById("root");c.a.render(r.a.createElement(i.a,{basename:T},r.a.createElement(x,null)),A),function(){if("serviceWorker"in navigator){if(new URL("/BitcoinDisplayRho",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/BitcoinDisplayRho","/service-worker.js");I?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):R(e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.1d4b1dd7.chunk.js.map