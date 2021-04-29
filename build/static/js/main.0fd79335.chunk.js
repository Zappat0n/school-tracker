(this["webpackJsonpschool-tracker"]=this["webpackJsonpschool-tracker"]||[]).push([[0],{13:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={load:function(){var e=localStorage.getItem("token");try{return e?JSON.parse(e):[]}catch(t){return[]}},save:function(e){localStorage.token=JSON.stringify(e)}}},14:function(e,t,r){"use strict";(function(e){r.d(t,"e",(function(){return a})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return o})),r.d(t,"f",(function(){return i})),r.d(t,"a",(function(){return u}));var n=r(13);r(48).config();var a=function(e,t){return new Request("".concat("https://school-tracker-api.herokuapp.com","/users"),{method:"POST",headers:{"content-type":"application/json"},body:'{\n      "user" : {\n        "username" : "'.concat(e,'",\n        "password" : "').concat(t,'",\n        "password_confirmation" : "').concat(t,'"\n      }\n    }')})},c=function(e,t){return new Request("".concat("https://school-tracker-api.herokuapp.com","/authentications"),{method:"POST",headers:{"content-Type":"application/json"},body:'{\n      "username" : "'.concat(e,'",\n      "password" : "').concat(t,'"\n    }')})},s=function(t,r){return new Request("".concat("https://school-tracker-api.herokuapp.com","/oauth/revoke"),{method:"POST",headers:{Authorization:"Basic ".concat(e.from("".concat(t,":").concat(r)).toString("base64"))},body:JSON.stringify({token:n.a.load(),client_id:Object({NODE_ENV:"production",PUBLIC_URL:"/school-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER:"https://school-tracker-api.herokuapp.com"}).REACT_APP_CLIENT_ID,client_secret:Object({NODE_ENV:"production",PUBLIC_URL:"/school-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER:"https://school-tracker-api.herokuapp.com"}).REACT_APP_CLIENT_SECRET})})},o=function(e,t,r,a){return new Request("".concat("https://school-tracker-api.herokuapp.com","/events"),{method:"POST",headers:{"content-Type":"application/json",Authorization:"Bearer ".concat(n.a.load())},body:'{\n      "date" : "'.concat(e,'",\n      "student_id" : ').concat(t,',\n      "presentation_id" : ').concat(r,',\n      "score" : ').concat(a,"\n    }")})},i=function(e,t,r,a,c){return new Request("".concat("https://school-tracker-api.herokuapp.com","/events/").concat(e),{method:"PUT",headers:{"content-Type":"application/json",Authorization:"Bearer ".concat(n.a.load())},body:'{\n      "date" : "'.concat(t,'",\n      "student_id" : ').concat(r,',\n      "presentation_id" : ').concat(a,',\n      "score" : ').concat(c,"\n    }")})},u=function(e){return new Request("".concat("https://school-tracker-api.herokuapp.com","/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(n.a.load())}})}}).call(this,r(44).Buffer)},28:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},42:function(e,t,r){},51:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(19),s=r.n(c),o=r(17),i=r(7),u=r(18),l="SET_USERNAME",d="SET_TITLE",j="SAVE_SCORE",h="SAVE_SCORES",b=function(e){return{type:d,payload:e}},p=function(e){return{type:j,payload:e}},f=function(e){return{type:h,payload:e}},O={username:"",title:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{username:t.payload});case d:return Object(u.a)(Object(u.a)({},e),{},{title:t.payload});default:return e}},x={scores:{}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var r=t.payload,n=r.presentation,a=r.student,c=r.score,s=r.id;return e.scores["".concat(n,"-").concat(a)]={id:s,score:c},e;case h:return t.payload.forEach((function(t){e.scores["".concat(t.presentation_id,"-").concat(t.student_id)]={id:t.id,score:t.score}})),e;default:return e}},k=(r(38),r(11)),E=r(5),y=r(4),g=(r(39),r(0)),N=function(){var e=Object(i.c)((function(e){return e.title})),t=function(e){e.preventDefault();var t=document.querySelector(".menu-content");t.classList.contains("d-none")?t.classList.remove("d-none"):t.classList.add("d-none")};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"nav-bar",children:[Object(g.jsx)("div",{className:"left nav-col ta-left",children:Object(g.jsx)("i",{id:"menu-toggle",role:"menubar",tabIndex:0,className:"fas fa-bars",onKeyDown:function(e){return t(e)},onClick:function(e){return t(e)}})}),Object(g.jsx)("div",{className:"center nav-col ta-center",children:e||"Welcome"}),Object(g.jsx)("div",{className:"right nav-col ta-right",children:Object(g.jsx)(E.b,{to:"/school-tracker/user/signin",className:"link",children:Object(g.jsx)("i",{className:"fas fa-user"})})})]}),Object(g.jsxs)("div",{className:"menu-content d-none",children:[Object(g.jsx)(E.b,{to:"/school-tracker/classrooms/",className:"link",children:"Classrooms"}),Object(g.jsx)(E.b,{to:"/school-tracker/presentation_areas/",className:"link",children:"Curriculum"}),Object(g.jsx)(E.b,{to:"/school-tracker/presentation_subareas/",className:"link",children:"Subareas"})]})]})},w=(r(42),function(e){var t=e.messages,r=e.setMessages;Object(n.useEffect)((function(){if(!t||0===t.length)return null;var e=setInterval((function(){r([])}),3e3);return function(){return clearInterval(e)}}));return Object(g.jsx)("div",{className:"errors",children:t instanceof Array?t.map((function(e){return Object(g.jsx)("p",{children:e},e)})):t})});w.defaultProps={messages:[]};var S=w,_=function(e){var t=e.errors,r=e.setErrors;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("header",{children:[Object(g.jsx)(N,{}),Object(g.jsx)(S,{messages:t,setMessages:function(e){return r(e)}})]})})};_.defaultProps={errors:[]};var T=_,C=r(2),R=r.n(C),P=r(3),A=r(14);function F(e){return I.apply(this,arguments)}function I(){return(I=Object(P.a)(R.a.mark((function e(t){var r,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var D=function(){var e=Object(P.a)(R.a.mark((function e(t,r){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F(Object(A.b)(t,r)));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();function L(e,t){return W.apply(this,arguments)}function W(){return(W=Object(P.a)(R.a.mark((function e(t,r){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(Object(A.e)(t,r));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return B.apply(this,arguments)}function B(){return(B=Object(P.a)(R.a.mark((function e(t){var r,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(A.a)(t),e.next=3,F(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t,r,n){return K.apply(this,arguments)}function K(){return(K=Object(P.a)(R.a.mark((function e(t,r,n,a){var c,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(A.d)(t,r,n,a),e.next=3,F(c);case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,r,n,a){return V.apply(this,arguments)}function V(){return(V=Object(P.a)(R.a.mark((function e(t,r,n,a,c){var s,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(A.f)(t,r,n,a,c),e.next=3,F(s);case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r(51);var J=r(13),z=function(e){var t=e.action,r=e.handleError,a=Object(i.c)((function(e){return e.userReducer.username})),c=Object(n.useState)(""),s=Object(k.a)(c,2),o=s[0],u=s[1],d=Object(y.f)(),j=Object(i.b)();function h(e,t){return p.apply(this,arguments)}function p(){return(p=Object(P.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t,n);case 2:if(!(a=e.sent)||!a.token){e.next=6;break}return J.a.save(a.token),e.abrupt("return",!0);case 6:return r(a.errors),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return O.apply(this,arguments)}function O(){return(O=Object(P.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t,n);case 2:if(!(a=e.sent)||!a.username){e.next=5;break}return e.abrupt("return",a&&h(t,n));case 5:return r(a.errors),e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(P.a)(R.a.mark((function e(r){var n,a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=r.target,a=n.username,c=n.password,"Log In"!==t){e.next=9;break}return e.next=5,h(a.value,c.value);case 5:e.sent&&d.push("/school-tracker/classrooms/"),e.next=13;break;case 9:return e.next=11,f(a.value,c.value);case 11:e.sent&&d.push("/school-tracker/classrooms/");case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){j(b(t))}),[]);var x=function(e,t){e.preventDefault(),"username"===t?j(function(e){return{type:l,payload:e}}(e.target.value)):u(e.target.value)};return Object(g.jsxs)("form",{className:"user-form table",onSubmit:function(e){return function(e){return m.apply(this,arguments)}(e)},children:[Object(g.jsx)("section",{className:"username",children:Object(g.jsxs)("label",{htmlFor:"username",children:["Username",Object(g.jsx)("input",{id:"username",type:"text",value:a,onChange:function(e){return x(e,"username")}})]})}),Object(g.jsx)("section",{className:"password",children:Object(g.jsxs)("label",{htmlFor:"password",children:["Password",Object(g.jsx)("input",{id:"password",type:"password",autoComplete:"on",value:o,onChange:function(e){return x(e,"password")}})]})}),Object(g.jsxs)("section",{className:"buttons",children:[Object(g.jsx)("button",{className:"submit",type:"submit",children:t}),Object(g.jsx)("div",{className:"link-container",children:"Log In"===t?Object(g.jsx)(E.b,{to:"/school-tracker/user/signup",className:"link",children:"Sign up"}):Object(g.jsx)(E.b,{to:"/school-tracker/user/signin",className:"link",children:"Log In"})})]})]})},M=function(e){var t=e.setErrors;return Object(g.jsx)(z,{action:"Log In",handleError:function(e){return t(e)}})},G=function(e){var t=e.setErrors;return Object(g.jsx)(z,{action:"Sign Up",handleError:function(e){return t(e)}})};function Q(e){return X.apply(this,arguments)}function X(){return(X=Object(P.a)(R.a.mark((function e(t){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t);case 2:return r=e.sent,e.abrupt("return",{tableName:t,data:r});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(P.a)(R.a.mark((function e(t){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.split("/"),e.t0=r[0],e.next="classrooms"===e.t0||"students"===e.t0||"presentation_areas"===e.t0||"presentation_subareas"===e.t0?4:5;break;case 4:return e.abrupt("return",Q(t));case 5:return e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(e){return Y.apply(this,arguments)},$=function(e){return e.filter((function(e){return!["id","created_at","updated_at"].includes(e)&&!e.endsWith("_id")}))},ee=function(e){return e.startsWith("classrooms")?e.includes("/")?[{name:"scores",route:"/school-tracker/students/:id"}]:[{name:"list",route:"/school-tracker/classrooms/:id"},{name:"scores",route:"/school-tracker/events/:id"}]:e.startsWith("presentation_areas")?e.includes("/")?[{name:"list",route:"/school-tracker/presentation_subareas/:id"}]:[{name:"list",route:"/school-tracker/presentation_areas/:id"}]:e.startsWith("presentation_subareas")?e.includes("/")?[]:[{name:"list",route:"/school-tracker/presentation_subareas/:id"}]:e.includes("/")?[]:[{name:"list",route:""}]},te=function(e){var t=e.data,r=e.commands;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("tr",{className:"row",children:[$(Object.keys(t)).map((function(e,r){return Object(g.jsx)("td",{className:"column".concat(r+1),children:t[e]},e)})),0!==r.length&&Object(g.jsx)("td",{className:"buttons",children:r.map((function(e){return Object(g.jsx)(E.b,{to:e.route.replace(":id",t.id),className:"row-link",children:e.name},e.name)}))})]},t.id)})},re=(r(28),function(e){var t=e.tableName,r=e.id,a=e.title,c=e.handleError,s="".concat(t).concat(r?"/".concat(r):""),o=ee(s),u=Object(n.useState)([]),l=Object(k.a)(u,2),d=l[0],j=l[1],h=Object(i.b)();function p(){return(p=Object(P.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(s);case 2:(t=e.sent)&&t.data?j(t.data):c(t.errors);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){p.apply(this,arguments)}(),h(b(a))}),[s]),Object(g.jsx)("div",{className:"container-table",children:d&&d.length>0&&Object(g.jsx)("div",{className:"table",children:Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{className:"table-head",children:Object(g.jsxs)("tr",{children:[$(Object.keys(d[0])).map((function(e,t){return Object(g.jsx)("th",{className:"column".concat(t+1),children:(r=e,(r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()).replace("_"," ").trim())},e);var r})),o.length>0&&Object(g.jsx)("th",{children:"Commands"},"commands")]})}),Object(g.jsx)("tbody",{className:"table-body js-pscroll",children:d.map((function(e){return Object(g.jsx)(te,{data:e,commands:o},e.id)}))})]})})})});re.defaultProps={id:void 0};var ne=re,ae=function(e){var t=e.setErrors,r=Object(y.g)().id;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ne,{tableName:"classrooms",id:r,handleError:function(e){return t(e)},title:r?"Students":"Classrooms",commands:[{className:"fas fa-list",route:"/classrooms/:id"},{className:"fas fa-th",route:"/classrooms/:id/scores"}]})})},ce=function(e){var t=e.setErrors;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ne,{tableName:"students",title:"Students",handleError:function(e){return t(e)}})})},se=function(e){var t=e.setErrors,r=Object(y.g)().id;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ne,{tableName:"presentation_areas",id:r,title:r?"Presentation Subareas":"Presentation Areas",handleError:function(e){return t(e)}})})},oe=function(e){var t=e.setErrors,r=Object(y.g)().id;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(ne,{tableName:"presentation_subareas",id:r,title:r?"Presentations":"Presentation Subareas",handleError:function(e){return t(e)}})})},ie=function(e){var t=e.presentation,r=e.student,n=e.handleChange,a=Object(i.c)((function(e){return e.classroomTableReducer.scores["".concat(t,"-").concat(r)]||0}));return Object(g.jsx)("td",{children:Object(g.jsxs)("select",{className:"combo",id:a.id,presentation:t,student:r,onChange:function(e){return n(e,t,r,a.id)},value:function(){switch(a.score){case 0:return" ";case 1:return"/";case 2:return"\ua4e5";case 3:return"\ud800\ude85";default:return""}}(),children:[Object(g.jsx)("option",{value:" ",children:" "}),Object(g.jsx)("option",{value:"/",children:"/"}),Object(g.jsx)("option",{value:"\ua4e5",children:"\ua4e5"}),Object(g.jsx)("option",{value:"\ud800\ude85",children:"\ud800\ude85"})]})})},ue=function(e){var t=e.presentation,r=e.students,n=e.handleChange;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("tr",{className:"row",children:[Object(g.jsx)("td",{children:t.name}),(r||[]).map((function(e){return Object(g.jsx)(ie,{presentation:t.id,student:e.id,handleChange:function(e,t,r,a){n(e,t,r,a)}},e.id)}))]})})},le=(r(52),function(e){var t=e.id,r=e.title,a=e.handleError,c="events/".concat(t),s=Object(n.useState)([]),o=Object(k.a)(s,2),u=o[0],l=o[1],d=Object(n.useState)([]),j=Object(k.a)(d,2),h=j[0],O=j[1],m=Object(i.b)(),x=function(e){switch(e){case" ":return 0;case"/":return 1;case"\ua4e5":return 2;case"\ud800\ude85":return 3;default:return""}};function v(){return(v=Object(P.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,U(c);case 3:e.t1=e.sent,(t={tableName:e.t0,data:e.t1})&&t.data?(l(t.data.students),O(t.data.presentations),m(f(t.data.events))):a(t.errors);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(P.a)(R.a.mark((function e(t,r,n,c){var s,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s=x(t.target.value),c){e.next=8;break}return e.next=5,q((new Date).toISOString().split("T")[0],n,r,s);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,H(c,(new Date).toISOString().split("T")[0],n,r,s);case 10:e.t0=e.sent;case 11:(o=e.t0)?m(p({id:o.id,presentation:r,student:n,score:s})):a(o.errors);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){m(b(r)),function(){v.apply(this,arguments)}()}),[]),Object(g.jsx)("div",{className:"container-table-scores",children:u&&u.length>0&&h.length>0&&Object(g.jsx)("div",{className:"table",children:Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{className:"table-classroom-head",children:Object(g.jsx)("tr",{children:(u?[{id:0}].concat(u):[]).map((function(e,t){return Object(g.jsx)("th",{className:"column".concat(t+1),children:Object(g.jsx)(E.b,{to:"/school-tracker/students/".concat(e.id),className:"head-link",children:e.name})},e.id)}))})}),Object(g.jsx)("tbody",{className:"table-classroom-body",children:(h?h.slice(0,10):[]).map((function(e){return Object(g.jsx)(ue,{presentation:e,students:u,handleChange:function(e,t,r,n){!function(e,t,r,n){y.apply(this,arguments)}(e,t,r,n)}},e.id)}))})]})})})}),de=function(e){var t=e.setErrors,r=Object(y.g)().id;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(le,{id:r,title:"Classroom Scores",handleError:function(e){return t(e)}})})},je=function(e){var t=e.data,r=e.commands;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("tr",{className:"row",children:[$(Object.keys(t)).map((function(e,r){return Object(g.jsx)("td",{className:"column".concat(r+1),children:t[e]},e)})),0!==r.length&&Object(g.jsx)("td",{className:"buttons",children:r.map((function(e){return Object(g.jsx)(E.b,{to:e.route.replace(":id",t.id),className:"row-link",children:e.name},e.name)}))})]},t.id)})},he=function(e){var t=e.id,r=e.title,a=e.handleError,c="/students/".concat(t),s=ee(c),o=Object(n.useState)([]),u=Object(k.a)(o,2),l=u[0],d=u[1],j=Object(i.b)();function h(){return(h=Object(P.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,U(c);case 3:e.t1=e.sent,(t={tableName:e.t0,data:e.t1})&&t.data?d(t):a(t.errors);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){j(b(r)),function(){h.apply(this,arguments)}()}),[]),Object(g.jsx)("div",{className:"container-table",children:l&&l.data&&l.data.length>0&&Object(g.jsx)("div",{className:"table",children:Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{className:"table-head",children:Object(g.jsxs)("tr",{children:[$(Object.keys(l.data[0])).map((function(e,t){return Object(g.jsx)("th",{className:"column".concat(t+1),children:(r=e,(r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()).replace("_"," ").trim())},e);var r})),s.length>0&&Object(g.jsx)("th",{children:"Commands"},"commands")]})}),Object(g.jsx)("tbody",{className:"table-body js-pscroll",children:l.data.map((function(e){return Object(g.jsx)(je,{data:e,commands:s},e.id)}))})]})})})};he.defaultProps={id:void 0};var be=he,pe=function(e){var t=e.setErrors,r=Object(y.g)().id;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(be,{id:r,title:"Student scores",handleError:function(e){return t(e)}})})},fe=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),r=t[0],a=t[1];return Object(g.jsx)(E.a,{children:Object(g.jsx)(y.c,{children:Object(g.jsxs)(y.a,{path:"/school-tracker",children:[Object(g.jsx)(T,{messages:r,setErrors:function(e){return a(e)}}),Object(g.jsx)(y.a,{path:"/school-tracker/user/signin",children:Object(g.jsx)(M,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{path:"/school-tracker/user/signup",children:Object(g.jsx)(G,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{exact:!0,path:"/school-tracker/classrooms",children:Object(g.jsx)(ae,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{exact:!0,path:"/school-tracker/classrooms/:id",children:Object(g.jsx)(ae,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{exact:!0,path:"/school-tracker/students",children:Object(g.jsx)(ce,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{exact:!0,path:"/school-tracker/presentation_areas",children:Object(g.jsx)(se,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{path:"/school-tracker/presentation_areas/:id",children:Object(g.jsx)(se,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{exact:!0,path:"/school-tracker/presentation_subareas",children:Object(g.jsx)(oe,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{path:"/school-tracker/presentation_subareas/:id",children:Object(g.jsx)(oe,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{path:"/school-tracker/events/:id",children:Object(g.jsx)(de,{setErrors:function(e){return a(e)}})}),Object(g.jsx)(y.a,{path:"/school-tracker/students/:id",children:Object(g.jsx)(pe,{setErrors:function(e){return a(e)}})})]})})})},Oe=Object(o.b)({userReducer:m,classroomTableReducer:v});s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(i.a,{store:Object(o.c)(Oe),children:Object(g.jsx)(fe,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.0fd79335.chunk.js.map