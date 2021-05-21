import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import UtilsNationNavbar from "./utils/UtilsNationNavbar";

const TeamInfoPage = lazy(() => import("./pages/TeamsInfo"));
const HomePage = lazy(() => import("./pages/Home"));
const LeaguePage = lazy(() => import("./pages/Leagues"));

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Router>
        <UtilsNationNavbar />
        <Switch>
          <Route path="/teams/:id" children={<TeamInfoPage />}>
            <TeamInfoPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/Leagues/:League" children={<LeaguePage />}>
            <LeaguePage />
          </Route>
          <Redirect path="**" to="/" />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
