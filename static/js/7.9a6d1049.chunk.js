(this["webpackJsonptoday_soccer-1"]=this["webpackJsonptoday_soccer-1"]||[]).push([[7],{143:function(e,t,c){},169:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return x}));var n=c(0),a=c(34),r=c(96),i=c.n(r);var s=c(93),o=c(156),l=c(164),j=c(14),d=c(3),h=function(e){var t=e.yesterdayMatch;console.log(t);var c=t.filter((function(e){return"Premier League"===e.competition.name||"Serie A"===e.competition.name||"Bundesliga"===e.competition.name||"Primera Division"===e.competition.name||"Ligue 1"===e.competition.name}));return console.log(c),Object(d.jsxs)(l.a,{striped:!0,style:{width:"90%",marginLeft:"5%",textAlign:"center",marginTop:"2%"},children:[Object(d.jsx)("thead",{style:{backgroundColor:"black",color:"white"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"D-1"}),Object(d.jsx)("th",{children:"\uc9c4\ud589\ub41c \uacbd\uae30 (home&away)"}),Object(d.jsx)("th",{children:"\uc2b9\ub9ac\ud300"})]})}),Object(d.jsx)("tbody",{children:(null===c||void 0===c?void 0:c.length)?Object(d.jsx)(d.Fragment,{children:c.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",style:{color:"red"},children:e.utcDate.substring(0,10)}),Object(d.jsxs)("td",{children:[Object(d.jsx)(j.b,{to:"/teams/".concat(e.homeTeam.id),children:e.homeTeam.name}),"\xa0\xa0",e.score.fullTime.homeTeam," \xa0vs \xa0",e.score.fullTime.awayTeam," \xa0",Object(d.jsx)(j.b,{to:"/teams/".concat(e.awayTeam.id),children:e.awayTeam.name})]}),Object(d.jsxs)("td",{children:[e.score.winner," "]})]},t)}))}):Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("td",{children:"\uc608\uc815\ub41c \ub9e4\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),Object(d.jsx)("td",{children:" "})]})})]})},b=function(e){var t=e.nowdayMatch;return Object(d.jsxs)(l.a,{striped:!0,style:{width:"90%",marginLeft:"5%",textAlign:"center",marginTop:"2%"},children:[Object(d.jsx)("thead",{style:{backgroundColor:"black",color:"white"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"today"}),Object(d.jsx)("th",{children:"\uc608\uc815\ub41c \uacbd\uae30 (home&away)"}),Object(d.jsx)("th",{children:"\uc2b9\ub9ac\ud300"})]})}),Object(d.jsx)("tbody",{children:(null===t||void 0===t?void 0:t.length)?t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:e.utcDate.substring(0,10)}),Object(d.jsxs)("td",{children:[Object(d.jsx)(j.b,{to:"/teams/".concat(e.homeTeam.id),children:e.homeTeam.name}),"\xa0\xa0",e.score.fullTime.homeTeam," \xa0vs \xa0",e.score.fullTime.awayTeam," \xa0",Object(d.jsx)(j.b,{to:"/teams/".concat(e.awayTeam.id),children:e.awayTeam.name})]}),Object(d.jsx)("td",{})]},t)})):Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("td",{children:"\uc608\uc815\ub41c \ub9e4\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),Object(d.jsx)("td",{children:" "})]})})]})},m=function(e){var t=e.twoDaysAgoDayMatch.filter((function(e){return"Premier League"===e.competition.name||"Serie A"===e.competition.name||"Bundesliga"===e.competition.name||"Primera Division"===e.competition.name||"Ligue 1"===e.competition.name}));return Object(d.jsxs)(l.a,{striped:!0,style:{width:"90%",marginLeft:"5%",textAlign:"center",marginTop:"2%"},children:[Object(d.jsx)("thead",{style:{backgroundColor:"black",color:"white"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"D-2"}),Object(d.jsx)("th",{children:"\uc9c4\ud589\ub41c \uacbd\uae30 (home&away)"}),Object(d.jsx)("th",{children:"\uc2b9\ub9ac\ud300"})]})}),Object(d.jsx)("tbody",{children:(null===t||void 0===t?void 0:t.length)?t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",style:{color:"blue"},children:e.utcDate.substring(0,10)}),Object(d.jsxs)("td",{children:[Object(d.jsx)(j.b,{to:"/teams/".concat(e.homeTeam.id),children:e.homeTeam.name}),"\xa0\xa0",e.score.fullTime.homeTeam," \xa0vs \xa0",e.score.fullTime.awayTeam," \xa0",Object(d.jsx)(j.b,{to:"/teams/".concat(e.awayTeam.id),children:e.awayTeam.name})]}),Object(d.jsxs)("td",{children:[e.score.winner," "]})]},t)})):Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("td",{children:"\uc608\uc815\ub41c \ub9e4\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),Object(d.jsx)("td",{children:" "})]})})]})},u=function(e){var t=e.matches,c=new Date,n=c.getFullYear(),a=c.getMonth()+1;a=a>=10?a:"0"+a;var r=c.getDate()-1,i=c.getDate()-2,s=c.getDate(),l=n+"-"+a+"-"+(r=r>=10?r:"0"+r),j=n+"-"+a+"-"+(i=i>=10?i:"0"+i),u=n+"-"+a+"-"+(s=s>=10?s:"0"+s),O=t.matches.filter((function(e){return e.utcDate.includes(l)})),x=t.matches.filter((function(e){return e.utcDate.includes(u)})),g=t.matches.filter((function(e){return e.utcDate.includes(j)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(o.a,{children:Object(d.jsx)(b,{nowdayMatch:x})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(h,{yesterdayMatch:O})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(m,{twoDaysAgoDayMatch:g})})]})},O=c(165);c(143);function x(){var e=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(null),o=Object(a.a)(s,2),l=o[0],j=o[1],d=new Date,h=d.getFullYear(),b=d.getMonth()+1;b=b>=10?b:"0"+b;var m=d.getDate()-2,u=d.getDate(),O=h+"-"+b+"-"+(m=m>=10?m:"0"+m),x=h+"-"+b+"-"+(u=u>=10?u:"0"+u);return Object(n.useEffect)((function(){r(!0),i.a.get("http://api.football-data.org/v2/matches?dateFrom=".concat(O,"&dateTo=").concat(x),{headers:{"X-Auth-Token":"".concat("35707e4bd8c8416f8a9d93dcd3d6026a")}}).then((function(e){j(e.data)})).catch((function(e){console.log(e)})).finally((function(){r(!1)}))}),[]),{matches:l,loading:c}}(),t=e.matches;return e.loading||!t?Object(d.jsx)(s.a,{}):(console.log(t),Object(d.jsx)(O.a,{children:Object(d.jsx)(u,{matches:t})}))}},93:function(e,t,c){"use strict";c(0);var n=c(88),a=c(3);t.a=function(){return Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(a.jsx)(n.a,{style:{color:"green"}})})}}}]);
//# sourceMappingURL=7.9a6d1049.chunk.js.map