import React, { useState, useEffect } from "react";
import UtilsCircularProgress from "../../utils/UtilsCircularProgress";
import RankingTable from "../../Components/RankingTable";
import NationNavbar from "../../utils/UtilsNationNavbar";
import ScorerTable from "../../Components/ScorerTable";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReagueLeftGames from "../../Components/ReagueLeftGames";
import style from "../../module.css/Leagues.module.css";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import "../../module.css/Leagues.module.css";

export default function Matches() {
  const { League } = useParams();

  const API_URL = "https://api.football-data.org/v2";
  const apiKey = process.env.REACT_APP_API_KEY;

  const [loading, setLoading] = useState(false);
  const [scorers, setScorers] = useState(null);
  const [rankings, setRankings] = useState(null);
  const [leftGames, setLeftGames] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get(`/v2/competitions/${League}/scorers?limit=5`, {
          headers: { "X-Auth-Token": `${apiKey}` },
        }),
        axios.get(`/v2/competitions/${League}/standings`, {
          headers: { "X-Auth-Token": `${apiKey}` },
        }),
        axios.get(`/v2/competitions/${League}/matches?status=SCHEDULED`, {
          headers: { "X-Auth-Token": `${apiKey}` },
        }),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          setScorers(res1.data);
          setRankings(res2.data);
          setLeftGames(res3.data);
        })
      )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [League]);

  if (!scorers || !rankings || loading || !leftGames)
    return <UtilsCircularProgress />;
  const teamsIcon = rankings.standings[0].table;
  const teamsIconMap = teamsIcon.map((team, index) => (
    <div key={index}>
      <Link to={`/teams/${team.team.id}`}>
        <img src={team.team.crestUrl} className={style.iconSize} />
      </Link>
    </div>
  ));
  console.log(rankings);
  console.log(scorers);
  console.log(leftGames);
  return (
    <Container>
      <Paper>
        <div className={style.teamIconContainer}>{teamsIconMap}</div>
      </Paper>

      <Paper>
        <div className={style.RoundInfo}>
          {leftGames.matches[0].matchday}R 진행 ({rankings.season.startDate}~
          {rankings.season.endDate})
        </div>
      </Paper>

      <div className={style.ranking_scorers}>
        <div className={style.leftFlex}>
          <Paper className={style.ranking}>
            <h4 className={style.Font}>팀순위표</h4>
            <RankingTable rankings={rankings} />
          </Paper>
        </div>

        <div className={style.rightFlex}>
          <Paper className={style.paperScorersrs}>
            <h4 className={style.Font}>득점순위표</h4>
            <ScorerTable scorers={scorers} />
          </Paper>

          <Paper className={style.paperLeftGames}>
            <h4 className={style.Font}>예정경기</h4>
            <ReagueLeftGames
              leftGames={leftGames}
              className={style.leftGames}
            />
          </Paper>
        </div>
      </div>
    </Container>
  );
}
