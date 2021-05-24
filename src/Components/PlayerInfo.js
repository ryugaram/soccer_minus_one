import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    paddingLeft: "5%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const setBirthday = (birthday) => {
  return birthday.substring(0, 10);
};

export default function SimpleAccordion({ teamInfo, position }) {
  const classes = useStyles();

  const teamSquad = teamInfo.squad;
  const filter = teamSquad.filter((player) => player.position === position);

  const squadMap = filter.map((player, index) => (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{player.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          출생지 : {player.countryOfBirth}
          <br />
          생년월일 : {setBirthday(player.dateOfBirth)} <br />
          국가대표팀 : {player.nationality}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));

  return <div className={classes.root}>{squadMap}</div>;
}
