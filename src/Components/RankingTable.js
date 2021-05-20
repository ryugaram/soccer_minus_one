import React from "react";
import { Table } from "reactstrap";
import "../module.css/RankingTable.module.css";
import style from "../module.css/RankingTable.module.css";
import { Link } from "react-router-dom";

const RankingTable = ({ rankings }) => {
  // console.log(rankings);
  const rankingsTable = rankings.standings[0].table;

  const scorerMap = rankingsTable.map((rankings, index) => (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>
        <img src={rankings.team.crestUrl} className={style.teamImage} />
      </td>
      <td>
        <Link to={`/teams/${rankings.team.id}`}>{rankings.team.name} 🔍</Link>
      </td>
      <td>{rankings.playedGames}</td>
      <td style={{ color: "#4B89DC" }}>{rankings.points}</td>
      <td>{rankings.won}</td>
      <td>{rankings.draw}</td>
      <td>{rankings.lost}</td>
      <td>{rankings.goalsFor}</td>
      <td>{rankings.goalsAgainst}</td>
      <td>{rankings.goalDifference}</td>
    </tr>
  ));

  return (
    <Table striped className={style.showRanking}>
      <thead>
        <tr>
          <th>순위</th>
          <th>구단</th>
          <th>구단명</th>
          <th>경기</th>
          <th>승점</th>
          <th>승</th>
          <th>무</th>
          <th>패</th>
          <th>득점</th>
          <th>실점</th>
          <th>득실</th>
        </tr>
      </thead>
      <tbody>{scorerMap}</tbody>
    </Table>
  );
};

export default RankingTable;
