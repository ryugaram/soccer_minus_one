import React from "react";
import style from "../module.css/LeftGames.module.css";
import { Table } from "reactstrap";

const LeftGames = ({ leftGames }) => {
  const fiveLeftGames = leftGames.matches;
  const Utctime = (time) => {
    return time.substring(0, 10);
  };

  return (
    <>
      <Table striped className={style.leftGamesTable}>
        <thead style={{ backgroundColor: "RoyalBlue" }}>
          <tr>
            <th>경기일</th>
            <th>구단</th>
          </tr>
        </thead>
        <tbody>
          {!fiveLeftGames.length === 0 ? (
            <>
              {fiveLeftGames.map((games, index) => {
                if (index < 5) {
                  return (
                    <tr key={index}>
                      <th>{Utctime(games.utcDate)}</th>
                      <td>
                        {games.awayTeam.name} : {games.homeTeam.name}
                      </td>
                    </tr>
                  );
                }
              })}
            </>
          ) : (
            <tr>
              <td>시즌 종료</td>
              <td>시즌 종료</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default LeftGames;
