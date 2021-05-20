import React from "react";
import useHome from "../../hooks/useHome";
import UtilsCircularProgress from "../../utils/UtilsCircularProgress";
import HomeThreeDays from "../../Components/HomeThreeDays";

import NationNavbar from "../../utils/UtilsNationNavbar";
import Container from "@material-ui/core/Container";
import style from "../../module.css/Home.module.css";

export default function PlayerInfo() {
  const { matches, loading } = useHome();

  if (loading || !matches) return <UtilsCircularProgress />;

  console.log(matches);

  return (
    <Container>
      <HomeThreeDays matches={matches} />
    </Container>
  );
}
