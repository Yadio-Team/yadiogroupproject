import React from "react";
import Auth from "./Components/Auth";
import Home from "./Components/Home";
import About from "./Components/About";
import PodcastSearch from "./Components/PodcastSearch";
import ReviewPage from "./Components/ReviewPage";
import { HashRouter as Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/home" component={Home} />
    <Route path="/reviews" component={ReviewPage} />
    <Route path="/about" component={About} />
    <Route path="/podcasts" component={PodcastSearch} />
  </Switch>
);
