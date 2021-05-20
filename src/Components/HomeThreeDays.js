import { Paper } from "@material-ui/core";
import React from "react";
import YesterdayMatches from "./YesterdayMatches";
import NowdayMatches from "./NowdayMatches";
import TwoDaysAgo from "./TwoDaysAgo";

const HomeThreeDays = ({ matches }) => {
  console.log(matches);
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;

  let yesterdate = today.getDate() - 1;
  let twoDaysAgo = today.getDate() - 2;
  let nowday = today.getDate();
  yesterdate = yesterdate >= 10 ? yesterdate : "0" + yesterdate;
  twoDaysAgo = twoDaysAgo >= 10 ? twoDaysAgo : "0" + twoDaysAgo;
  nowday = nowday >= 10 ? nowday : "0" + nowday;

  let yesterday = year + "-" + month + "-" + yesterdate;
  let twoDaysAgoDay = year + "-" + month + "-" + twoDaysAgo;
  let nowdate = year + "-" + month + "-" + nowday;

  let yesterdayMatch = matches.matches.filter((match) =>
    match.utcDate.includes(yesterday)
  );
  let nowdayMatch = matches.matches.filter((match) =>
    match.utcDate.includes(nowdate)
  );
  let twoDaysAgoDayMatch = matches.matches.filter((match) =>
    match.utcDate.includes(twoDaysAgoDay)
  );
  console.log(yesterdayMatch);
  console.log(twoDaysAgoDayMatch);
  return (
    <div>
      <Paper>
        <NowdayMatches nowdayMatch={nowdayMatch} />
      </Paper>
      <Paper>
        <YesterdayMatches yesterdayMatch={yesterdayMatch} />
      </Paper>
      <Paper>
        <TwoDaysAgo twoDaysAgoDayMatch={twoDaysAgoDayMatch} />
      </Paper>
    </div>
  );
};

export default HomeThreeDays;
