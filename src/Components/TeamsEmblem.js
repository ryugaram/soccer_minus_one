import React from "react";
import { Link } from "react-router-dom";
import style from "../module.css/TeamsEmblem.module.css";
import Paper from "@material-ui/core/Paper";

const TeamsEmblem = ({ rankings }) => {
  const teamsIcon = rankings.standings[0].table;
  const teamsIconMap = teamsIcon.map((team, index) => (
    <div key={index}>
      <Link to={`/teams/${team.team.id}`}>
        <img src={team.team.crestUrl} className={style.iconSize} />
      </Link>
    </div>
  ));
  return <Paper className={style.paperContainer}>{teamsIconMap}</Paper>;
};

export default TeamsEmblem;
