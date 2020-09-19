import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import News from "./News/News";
import SubTopic from "./SubTopic/SubTopic";
import Topic from "./Topic/Topic";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={() => <Home />} />
        <Route exact path={`/news/:newsSlug`} component={() => <News />} />
        <Route
          exact
          path={"/:topicName/:topicId"}
          component={() => <Topic />}
        />
        <Route
          exact
          path={`/:topicName/:topicId/:subTopicName/:subTopicId`}
          component={() => <SubTopic />}
        />
        <Route component={() => 404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
