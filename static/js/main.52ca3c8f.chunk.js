(this["webpackJsonpreact-calendar"]=this["webpackJsonpreact-calendar"]||[]).push([[0],{19:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(13),i=n.n(a),s=n(3),j=(n(19),n(0)),l=function(e){var t=function(t,n){t=parseInt(t),n=parseInt(n);var r=new Date(n,t).getDay()-1;-1===r&&(r=6);for(var c=new Date(n,t+1,0).getDate(),a=new Date(n,t-1,0).getDate(),i=[],s=a;s>a-r;s--)i.unshift(s);var j=[];j=i;for(var l=function(t){var n=t;e.celebrations.map((function(e){return e[0]===n&&(n=[n,e[3]]),n})),j.push(n)},h=1;h<=c;h++)l(h);for(var d=1;j.length%7!==0;)j.push(d),d+=1;for(var o=[];j.length;)o.push(j.splice(0,7));return o}(e.month,e.year),n=t.map((function(e){return Object(j.jsx)("tr",{children:e.map((function(n){var r="thisMonth";return(t[0]===e&&n>20||t[t.length-1]===e&&n<20)&&(r="otherMonth"),"object"===typeof n?(r+=" celebration",Object(j.jsxs)("td",{className:r,children:[Object(j.jsx)("span",{children:n[0]}),Object(j.jsx)("p",{children:n[1]})]},n)):Object(j.jsx)("td",{className:r,children:n},n)}))},e)}));return Object(j.jsx)("tbody",{id:"calendar-body",children:n})},h=n(14),d=n.n(h),o=function(){var e=Object(r.useState)((new Date).getFullYear()),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)((new Date).getMonth()),i=Object(s.a)(a,2),h=i[0],o=i[1],u=Object(r.useState)([]),b=Object(s.a)(u,2),p=b[0],O=b[1],x=[["Januar",0],["Februar",1],["Marec",2],["April",3],["Maj",4],["Junij",5],["Julij",6],["Avgust",7],["September",8],["Oktober",9],["November",10],["December",11]];Object(r.useEffect)((function(){var e;d.a.get("./dates.txt").then((function(t){e=(e=(e=t.data.split("\n")).map((function(e){return e.split(";")}))).map((function(e){return e[0]=parseInt(e[0]),e[1]=parseInt(e[1]),e[2]=parseInt(e[2]),e})),O(e)}))}),[]);var v=p.filter((function(e){return e[1]-1===parseInt(h)&&(0===e[2]||e[2]===parseInt(n))})),f=x.map((function(e){return Object(j.jsx)("option",{value:e[1],children:e[0]},e[1])}));return Object(j.jsxs)("div",{id:"content",children:[Object(j.jsxs)("div",{id:"inputs",children:[Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"date",value:function(e,t){var n=parseInt(e)+1,r=n;return n<10&&(r="0"+n),t+"-"+r+"-01"}(h,n),id:"date",onChange:function(e){var t=e.target.value.split("-"),n=t[0];n.length>4&&(n=n.slice(1,5));var r=t[1];isNaN(parseInt(n))&&(n=2021,r=4),c(n),o(r-1)}})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("select",{id:"month-select",onChange:function(e){o(e.target.value)},value:h,children:f}),Object(j.jsx)("input",{value:n,id:"year-select",type:"number",min:"0001",max:"9999",onChange:function(e){var t=e.target.value;for(t.length>4&&(t=t.slice(1,5));4!==t.length;)t="0"+t;c(t)}})]})]}),Object(j.jsxs)("table",{id:"calendar",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:Object(j.jsxs)("th",{id:"header-month",colSpan:"7",children:[x[h][0]," ",n]})})}),Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Ponedeljek"}),Object(j.jsx)("th",{children:"Torek"}),Object(j.jsx)("th",{children:"Sreda"}),Object(j.jsx)("th",{children:"\u010cetrtek"}),Object(j.jsx)("th",{children:"Petek"}),Object(j.jsx)("th",{children:"Sobota"}),Object(j.jsx)("th",{children:"Nedelja"})]})}),Object(j.jsx)(l,{year:n,month:h,celebrations:v})]})]})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.52ca3c8f.chunk.js.map