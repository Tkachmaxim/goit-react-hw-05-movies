"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{7364:function(e,t,n){n.d(t,{s:function(){return i}});var r=n(6871),a=n(501),c=n(184),i=function(e){var t=e.data,n=(0,r.TH)(),i=n.pathname+n.search;return t.map((function(e){var t=e.original_name,n=e.original_title,r=e.id;return(0,c.jsx)("li",{children:(0,c.jsxs)(a.Link,{to:i.search?"/movies/".concat(r):"movies/".concat(r),state:{from:{location:i}},children:[t||n," "]})},r)}))}},2591:function(e,t,n){n.d(t,{AX:function(){return p},Bt:function(){return h},Tg:function(){return s},cT:function(){return l},lu:function(){return f}});var r=n(5861),a=n(7757),c=n.n(a),i="985bc3c757188a382d12315376e2d5f0";function o(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Some occured"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}var s=function(){return function(){m.apply(this,arguments)}(),o("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i))},f=function(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"))},p=function(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i))},l=function(e){return o("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(e))},h=function(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i))};function m(){return(m=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("genres")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,o("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(i));case 4:t=e.sent,localStorage.setItem("genres",JSON.stringify(t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},4820:function(e,t,n){n.r(t);var r=n(885),a=n(2791),c=n(6871),i=n(501),o=n(2591),u=n(7364),s=n(184);t.default=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],f=t[1],p=(0,a.useState)(null),l=(0,r.Z)(p,2),h=l[0],m=l[1],v=(0,c.TH)().search,d=(0,i.useSearchParams)(),g=(0,r.Z)(d,2),k=g[0],b=g[1];console.log(k),(0,a.useEffect)((function(){if(v){var e=v.slice(7);(0,o.cT)(e).then(m)}}),[v]);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.toLowerCase().trim();t&&((0,o.cT)(t).then(m),b("query=".concat(t)))},children:[(0,s.jsxs)("label",{children:["Input film name",(0,s.jsx)("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",name:"film",value:n,required:!0})]}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),h&&(0,s.jsx)(u.s,{data:h.results})]})}}}]);
//# sourceMappingURL=820.bd6541b3.chunk.js.map