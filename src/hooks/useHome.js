import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.football-data.org/v2";
const apiKey = process.env.REACT_APP_API_KEY;

export default function useHome() {
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState(null);

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  let twoDaysAgo = today.getDate() - 2;
  let nowday = today.getDate();
  twoDaysAgo = twoDaysAgo >= 10 ? twoDaysAgo : "0" + twoDaysAgo;
  nowday = nowday >= 10 ? nowday : "0" + nowday;

  let twoDaysDate = year + "-" + month + "-" + twoDaysAgo;
  let nowdate = year + "-" + month + "-" + nowday;

  useEffect(() => {
    setLoading(true);
    axios
      // 손흥민 players/3343
      .get(`${API_URL}/matches?dateFrom=${twoDaysDate}&dateTo=${nowdate}`, {
        headers: { "X-Auth-Token": `${apiKey}` },
      })
      .then((response) => {
        setMatches(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { matches, loading };
}
