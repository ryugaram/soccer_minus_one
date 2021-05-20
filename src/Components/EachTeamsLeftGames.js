import { colors } from "@material-ui/core";
import React from "react";
import { Table } from "reactstrap";

const EachTeamsLeftGames = ({ matches }) => {
  console.log(matches);
  const matchesMap = matches.matches;
  const Utctime = (time) => {
    return time.substring(2, 10).replaceAll("-", "/");
  };

  const leftmatches = matchesMap.map((match, index) => (
    <tr key={index}>
      <th scope="row">{Utctime(match.utcDate)}</th>
      <td>
        {match.homeTeam.name} vs {match.awayTeam.name}
      </td>
      <td>{match.matchday}</td>
    </tr>
  ));

  return (
    <Table
      striped
      style={{ width: "90%", marginLeft: "5%", textAlign: "center" }}
    >
      <thead style={{ backgroundColor: "white", color: "black" }}>
        <tr>
          <th>경기일</th>
          <th>홈vs어웨이</th>
          <th>Round</th>
        </tr>
      </thead>
      <tbody>{leftmatches}</tbody>
    </Table>
  );
};

export default EachTeamsLeftGames;
