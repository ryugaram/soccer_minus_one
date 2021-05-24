import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UtilsCircularProgress from "../../utils/UtilsCircularProgress";

import NationNavbar from "../../Components/NationNavbar";
import style from "../../module.css/TeamsInfo.module.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import PlayerInfo from "../../Components/PlayerInfo";
import PlayerTabs from "../../Components/PlayerTabs";
import EachTeamsLeftGames from "../../Components/EachTeamsLeftGames";
import TeamsEmblem from "../../Components/TeamsEmblem";

export default function TeamInfo() {
  const { id } = useParams();
  const API_URL = "https://api.football-data.org/v2";
  const apiKey = "35707e4bd8c8416f8a9d93dcd3d6026a";

  const [loading, setLoading] = useState(false);
  const [teamInfo, seTeamInfo] = useState(null);
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get(`${API_URL}/v2/teams/${id}`, {
          headers: { "X-Auth-Token": `${apiKey}` },
        }),
        axios.get(
          `${API_URL}/v2/teams/${id}/matches?status=SCHEDULED&&limit=3`,
          {
            headers: { "X-Auth-Token": `${apiKey}` },
          }
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          seTeamInfo(res1.data);
          setMatches(res2.data);
        })
      )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading || !teamInfo || !matches) return <UtilsCircularProgress />;

  const teamSquad = teamInfo.squad;
  const teamActive = teamInfo.activeCompetitions;

  // 선수 정보
  const teamSquadInfo = teamSquad.map((attend, index) => (
    <div key={index}>
      이름 : {attend.name}
      국가대표팀 : {attend.nationality} 선수/코치:{attend.role} 포지션 :{" "}
      {attend.position}
    </div>
  ));

  //참가한 대회
  const teamActiveInfo = teamActive.map((active, index) => (
    <div key={index}>{active.name}</div>
  ));

  //감독이름
  const coachName = teamSquad.filter((player) => player.role === "COACH");

  const teamColor = teamInfo.clubColors.split("/");
  teamColor[0] = teamColor[0].replace(" ", "");
  teamColor[1] = teamColor[1].replace(" ", "");

  const color = (
    <div className={style.colorDisplay}>
      <div
        className={style.item1}
        style={{ backgroundColor: teamColor[0] }}
      ></div>
      <div
        className={style.item2}
        style={{ backgroundColor: teamColor[1] }}
      ></div>
    </div>
  );
  return (
    <Container>
      <Paper>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={teamInfo.crestUrl} style={{ width: "100px" }} />
        </div>
        <div className={style.teamNameInfo} style={{ color: "white" }}>
          {teamInfo.name}&nbsp;&nbsp; ({teamInfo.venue})
        </div>
        <div className={style.activeInfo}>{teamActiveInfo}</div>
        <div className={style.coachName}>
          HEAD COACH : &nbsp; {coachName[0].name}
        </div>
      </Paper>
      {color}
      <div className={style.flexContainer}>
        <Paper className={style.squadPaper}>
          <PlayerTabs teamInfo={teamInfo} />
        </Paper>
        <Paper className={style.leftGames}>
          <EachTeamsLeftGames matches={matches} />
        </Paper>
      </div>
    </Container>
  );
}
