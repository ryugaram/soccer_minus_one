(this["webpackJsonptoday_soccer-1"]=this["webpackJsonptoday_soccer-1"]||[]).push([[7],{143:function(e,t,c){},169:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return x}));var n=c(0),i=c(34),a=c(96),r=c.n(a);var s=c(93),o=c(156),j=c(164),l=c(14),d=c(3),h=function(e){var t=e.yesterdayMatch.filter((function(e){return"Premier League"===e.competition.name||"Serie A"===e.competition.name||"Bundesliga"===e.competition.name||"Primera Division"===e.competition.name||"Ligue 1"===e.competition.name}));return Object(d.jsxs)(j.a,{striped:!0,style:{width:"90%",marginLeft:"5%",textAlign:"center",marginTop:"2%"},children:[Object(d.jsx)("thead",{style:{backgroundColor:"black",color:"white"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"D-1"}),Object(d.jsx)("th",{children:"\uc9c4\ud589\ub41c \uacbd\uae30 (home&away)"}),Object(d.jsx)("th",{children:"\uc2b9\ub9ac\ud300"})]})}),Object(d.jsx)("tbody",{children:(null===t||void 0===t?void 0:t.length)?Object(d.jsx)(d.Fragment,{children:t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",style:{color:"red"},children:e.utcDate.substring(0,10)}),Object(d.jsxs)("td",{children:[Object(d.jsx)(l.b,{to:"/teams/".concat(e.homeTeam.id),children:e.homeTeam.name}),"\xa0\xa0",e.score.fullTime.homeTeam," \xa0vs \xa0",e.score.fullTime.awayTeam," \xa0",Object(d.jsx)(l.b,{to:"/teams/".concat(e.awayTeam.id),children:e.awayTeam.name})]}),Object(d.jsxs)("td",{children:[e.score.winner," "]})]},t)}))}):Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("td",{children:"\uc608\uc815\ub41c \ub9e4\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),Object(d.jsx)("td",{children:" "})]})})]})},m=function(e){var t=e.nowdayMatch.filter((function(e){return"Premier League"===e.competition.name||"Serie A"===e.competition.name||"Bundesliga"===e.competition.name||"Primera Division"===e.competition.name||"Ligue 1"===e.competition.name}));return Object(d.jsxs)(j.a,{striped:!0,style:{width:"90%",marginLeft:"5%",textAlign:"center",marginTop:"2%"},children:[Object(d.jsx)("thead",{style:{backgroundColor:"black",color:"white"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"today"}),Object(d.jsx)("th",{children:"\uc608\uc815\ub41c \uacbd\uae30 (home&away)"}),Object(d.jsx)("th",{children:"\uc2b9\ub9ac\ud300"})]})}),Object(d.jsx)("tbody",{children:(null===t||void 0===t?void 0:t.length)?t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:e.utcDate.substring(0,10)}),Object(d.jsxs)("td",{children:[Object(d.jsx)(l.b,{to:"/teams/".concat(e.homeTeam.id),children:e.homeTeam.name}),"\xa0\xa0",e.score.fullTime.homeTeam," \xa0vs \xa0",e.score.fullTime.awayTeam," \xa0",Object(d.jsx)(l.b,{to:"/teams/".concat(e.awayTeam.id),children:e.awayTeam.name})]}),Object(d.jsx)("td",{})]},t)})):Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("td",{children:"\uc608\uc815\ub41c \ub9e4\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),Object(d.jsx)("td",{children:" "})]})})]})},b=function(e){var t=e.twoDaysAgoDayMatch.filter((function(e){return"Premier League"===e.competition.name||"Serie A"===e.competition.name||"Bundesliga"===e.competition.name||"Primera Division"===e.competition.name||"Ligue 1"===e.competition.name}));return Object(d.jsxs)(j.a,{striped:!0,style:{width:"90%",marginLeft:"5%",textAlign:"center",marginTop:"2%"},children:[Object(d.jsx)("thead",{style:{backgroundColor:"black",color:"white"},children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"D-2"}),Object(d.jsx)("th",{children:"\uc9c4\ud589\ub41c \uacbd\uae30 (home&away)"}),Object(d.jsx)("th",{children:"\uc2b9\ub9ac\ud300"})]})}),Object(d.jsx)("tbody",{children:(null===t||void 0===t?void 0:t.length)?t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",style:{color:"blue"},children:e.utcDate.substring(0,10)}),Object(d.jsxs)("td",{children:[Object(d.jsx)(l.b,{to:"/teams/".concat(e.homeTeam.id),children:e.homeTeam.name}),"\xa0\xa0",e.score.fullTime.homeTeam," \xa0vs \xa0",e.score.fullTime.awayTeam," \xa0",Object(d.jsx)(l.b,{to:"/teams/".concat(e.awayTeam.id),children:e.awayTeam.name})]}),Object(d.jsxs)("td",{children:[e.score.winner," "]})]},t)})):Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("td",{children:"\uc608\uc815\ub41c \ub9e4\uce58\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),Object(d.jsx)("td",{children:" "})]})})]})},u=function(e){var t=e.matches,c=new Date,n=c.getFullYear(),i=c.getMonth()+1;i=i>=10?i:"0"+i;var a=c.getDate()-1,r=c.getDate()-2,s=c.getDate(),j=n+"-"+i+"-"+(a=a>=10?a:"0"+a),l=n+"-"+i+"-"+(r=r>=10?r:"0"+r),u=n+"-"+i+"-"+(s=s>=10?s:"0"+s),O=t.matches.filter((function(e){return e.utcDate.includes(j)})),x=t.matches.filter((function(e){return e.utcDate.includes(u)})),f=t.matches.filter((function(e){return e.utcDate.includes(l)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(o.a,{children:Object(d.jsx)(m,{nowdayMatch:x})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(h,{yesterdayMatch:O})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(b,{twoDaysAgoDayMatch:f})})]})},O=c(165);c(143);function x(){var e=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),o=Object(i.a)(s,2),j=o[0],l=o[1],d=new Date,h=d.getFullYear(),m=d.getMonth()+1;m=m>=10?m:"0"+m;var b=d.getDate()-2,u=d.getDate(),O=h+"-"+m+"-"+(b=b>=10?b:"0"+b),x=h+"-"+m+"-"+(u=u>=10?u:"0"+u);return Object(n.useEffect)((function(){a(!0),r.a.get("".concat("https://api.football-data.org/v2","/matches?dateFrom=").concat(O,"&dateTo=").concat(x),{headers:{"X-Auth-Token":"".concat("35707e4bd8c8416f8a9d93dcd3d6026a")}}).then((function(e){l(e.data)})).catch((function(e){console.log(e)})).finally((function(){a(!1)}))}),[]),{matches:j,loading:c}}(),t=e.matches;return e.loading||!t?Object(d.jsx)(s.a,{}):Object(d.jsx)(O.a,{children:Object(d.jsx)(u,{matches:t})})}},93:function(e,t,c){"use strict";c(0);var n=c(88),i=c(3);t.a=function(){return Object(i.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(i.jsx)(n.a,{style:{color:"green"}})})}}}]);
//# sourceMappingURL=7.8f8635f5.chunk.js.map