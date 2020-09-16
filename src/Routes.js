import React from "react";
import { Switch, Route } from "react-router-dom";

import { Card, Home } from "./core";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={`/news/:newsId`} component={() => <Card mode={3} />} />
      <Route
        exact
        path={"/:topicName/:topicId"}
        component={() => <Card mode={1} />}
      />
      <Route
        exact
        path={`/:topicName/:topicId/:subTopicName/:subTopicId`}
        component={() => <Card mode={2} />}
      />
      <Route exact path={`/`} component={() => <Home />} />

      <Route component={() => 404} />
    </Switch>
  );
};

export default Routes;
