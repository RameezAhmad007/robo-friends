(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(42)},34:function(e,t,n){},35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),c=n.n(o),i=(n(34),n(13)),s=n(14),u=n(16),l=n(8),h=n(17),f=(n(35),n(6)),d=(n(36),n(15)),p=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-s"},a.a.createElement("img",{src:"https://robohash.org/".concat(t),alt:"Img Not Found"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r)))},m=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,t){return a.a.createElement(p,{key:t,id:e.id,name:e.name,email:e.email})}))},E=function(e){var t=e.value,n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",value:t,onChange:n}))},b=function(e){return a.a.createElement("div",{style:{overflowY:"auto",height:"440px",padding:"20px 0"}},e.children)};function g(e){return function(){var t,n=Object(l.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)}}var v=function(e){Object(h.a)(n,e);var t=g(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return a.a.createElement("div",null,this.state.hasError?a.a.createElement("h1",null,"Oooops! SomeThing Wrong in Your Code."):this.props.children)}}]),n}(r.Component);function R(e){return function(){var t,n=Object(l.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(u.a)(this,t)}}var y=function(e){Object(h.a)(n,e);var t=R(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=e.errorStatus,i=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return console.log("Error Status : ",c),a.a.createElement("div",{className:"App tc"},o?a.a.createElement("h1",null,"Loading"):c?a.a.createElement("h1",null,"Error"):a.a.createElement("div",null,a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(E,{searchChange:n,value:t}),a.a.createElement(b,null,a.a.createElement(v,null,a.a.createElement(m,{robots:i})))))}}]),n}(r.Component),O=Object(f.d)(Object(d.b)(function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error,errorStatus:e.requestRobots.errorStatus}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return function(e){e({type:"REQUEST_ROBOT_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOT_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOT_FAILED",payload:t})})}(e)}}})(y));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(20),j=n(9),w=n(27),C=n(28),_={searchField:""},T={isPending:!1,robots:[],error:"",errorStatus:!1},D=Object(C.createLogger)(),N=Object(j.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOT_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOT_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOT_FAILED":return Object.assign({},e,{error:t.payload,errorStatus:!0,isPending:!1});default:return e}}}),F=Object(j.d)(N,Object(j.a)(w.a,D));c.a.render(a.a.createElement(d.a,{store:F},a.a.createElement(S.a,null,a.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.0daf84f4.chunk.js.map