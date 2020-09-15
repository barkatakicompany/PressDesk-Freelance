import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Navigation, Footer } from "../components";
import {
  Home,
  Page,
  SubTopics,
  News,
  SearchResult,
  SearchNews,
} from "../pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="page-component">
          <Switch>
            <Route exact path={`/search-result/`} component={SearchResult} />
            <Route
              exact
              path={`/search-result/:newsId`}
              component={SearchNews}
            />
            <Route
              exact
              path={`/:topicName/:subTopicName/news/:newsId`}
              component={News}
            />
            <Route
              exact
              path={`/:topicName/:topicId/:subTopicName/:subTopicId`}
              component={SubTopics}
            />
            <Route exact path={`/:topicName/:topicId`} component={Page} />
            <Route exact path={`/`} component={() => <Home />} />

            <Route component={() => 404} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
