import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navigation from "../components/Navigation/Navigation";
import { Home, Page, SubTopicsNews, News } from "../pages";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("http://3.133.84.12:8004/api/topics")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTopics(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, []);

  return (
    <Router>
      <div className="App page-component">
        {isLoaded ? <Navigation topics={topics} /> : <div></div>}
        <Switch className="page-component">
          <Route exact path={`/:topicId/:subTopicId/:newsId`} component={News} />
          <Route
            exact
            path={`/:topicId/:subTopicId`}
            component={SubTopicsNews}
          />
          <Route path={`/:topicId`} component={Page} />
          <Route exact path={`/`} component={() => <Home topics={topics} />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
