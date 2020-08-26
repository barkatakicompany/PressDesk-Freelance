import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import  {Navigation, Footer } from "../components";
import { Home, Page, SubTopicsNews, News } from "../pages";

function App() {


  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch className="page-component">
          <Route exact path={`/:topicId/:subTopicId/:newsId`} component={News} />
          <Route
            exact
            path={`/:topicId/:subTopicId`}
            component={SubTopicsNews}
          />
          <Route path={`/:topicId`} component={Page} />
          <Route exact path={`/`} component={() => <Home />} />
          <Route component={() => 404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
