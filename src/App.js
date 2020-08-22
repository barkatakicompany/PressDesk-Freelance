import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

import "./App.css";
import "./components/shared/FontAwesomeIcons.js";

import Navigation from "./components/Navigation/Navigation";
import { Home, Page } from "./pages";

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

  console.log(error);

  return (
    <Router>
      <div className="App page-component">
        {isLoaded ? (
          <Navigation siteNavigationsObjects={topics} />
        ) : (
          <div>404</div>
        )}
        <Switch className="page-component">
          <Route path={`/:topicId`} component={Page} />
          <Route exact path={`/`} component={Home} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
