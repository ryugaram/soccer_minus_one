import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const NowdayMatches = ({ nowdayMatch }) => {
  const nowdayMatchFilter = nowdayMatch.filter(
    (match) =>
      match.competition.name === "Premier League" ||
      match.competition.name === "Serie A" ||
      match.competition.name === "Bundesliga" ||
      match.competition.name === "Primera Division" ||
      match.competition.name === "Ligue 1"
  );

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
          <th>today</th>
          <th>예정된 경기 (home&away)</th>
          <th>승리팀</th>
        </tr>
      </thead>
      <tbody>
        {nowdayMatchFilter?.length ? (
          nowdayMatchFilter.map((match, index) => (
            <tr key={index}>
              <th scope="row">{match.utcDate.substring(0, 10)}</th>
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
              <td></td>
            </tr>
          ))
        ) : (
          <tr>
            <th></th>
            <td>예정된 매치가 없습니다</td>
            <td> </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default NowdayMatches;
