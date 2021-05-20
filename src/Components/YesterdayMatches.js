import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const YesterdayMatches = ({ yesterdayMatch }) => {
  console.log(yesterdayMatch);

  const yesterdayMatchFilter = yesterdayMatch.filter(
    (match) =>
      match.competition.name === "Premier League" ||
      match.competition.name === "Serie A" ||
      match.competition.name === "Bundesliga" ||
      match.competition.name === "Primera Division" ||
      match.competition.name === "Ligue 1"
  );
  console.log(yesterdayMatchFilter);

  const yesterdayMap = yesterdayMatchFilter.map((match, index) => {
    if (match.length === 0) {
      return (
        <tr>
          <th></th>
          <td>해당된 경기가 없습니다</td>
          <td></td>
        </tr>
      );
    } else {
      return (
        <tr key={index}>
          <th scope="row" style={{ color: "red" }}>
            {match.utcDate.substring(0, 10)}
          </th>
          <td>
            <Link to={`/teams/${match.homeTeam.id}`}>
              {match.homeTeam.name}
            </Link>
            &nbsp;&nbsp;{match.score.fullTime.homeTeam} &nbsp;vs &nbsp;
            {match.score.fullTime.awayTeam} &nbsp;
            <Link to={`/teams/${match.awayTeam.id}`}>
              {match.awayTeam.name}
            </Link>
          </td>
          <td>{match.score.winner} </td>
        </tr>
      );
    }
  });

  return (
    <Table
      striped
      style={{
        width: "90%",
        marginLeft: "5%",
        textAlign: "center",
        marginTop: "2%",
      }}
    >
      <thead style={{ backgroundColor: "black", color: "white" }}>
        <tr>
          <th>D-1</th>
          <th>진행된 경기 (home&away)</th>
          <th>승리팀</th>
        </tr>
      </thead>
      <tbody>{yesterdayMap}</tbody>
    </Table>
  );
};

export default YesterdayMatches;
