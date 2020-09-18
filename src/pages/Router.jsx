import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MovieList from "./movelist";
import MovieDetail from "./moviedetail";
import Navigation from "../components/navigation";
import MovieTable from "../pages/movieTable";
function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route path="/detail/:movieId">
          <MovieDetail />
        </Route>
        <Route path="/table/">
          <MovieTable />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
