import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Card, Home } from "./core";

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path={`/search-result/`} component={SearchResult} />
        <Route exact path={`/search-result/:newsId`} component={SearchNews} />
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
        <Route exact path={`/:topicName/:topicId`} component={Page} /> */}
      <Route
        exact
        path={"/:topicName/:topicId"}
        component={() => <Card mode={1} />}
      />
      <Route exact path={`/`} component={() => <Home />} />

      <Route component={() => 404} />
    </Switch>
  );
};

export default Routes;
