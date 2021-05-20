import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import style from "../module.css/ScorerTable.module.css";

const ScorerTable = ({ scorers }) => {
  const leagueScorers = scorers.scorers;

  const scorerMap = leagueScorers.map((match, index) => (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{match.player.name}</td>
      <td>
        <Link to={`/teams/${match.team.id}`} className={style.teamName}>
          {match.team.name} 🔍
        </Link>
      </td>

      <td>{match.numberOfGoals}</td>
    </tr>
  ));

  return (
    <Table striped className={style.scorerWidth}>
      <thead>
        <tr style={{ backgroundColor: "red", color: "white", fontSize: "" }}>
          <th>순위</th>
          <th>선수</th>
          <th>구단</th>
          <th>득점</th>
        </tr>
      </thead>
      <tbody>{scorerMap}</tbody>
    </Table>
  );
};

export default ScorerTable;
