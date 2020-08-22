import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { Navbar } from "react-bootstrap";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { SubTopics } from "./";

export default function Page({ match }) {
  const {
    params: { topicId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [subTopics, setSubTopics] = useState([]);

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/subtopics/${topicId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSubTopics(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [topicId]);

  return (
    <div className="container">
      <br />
      <Router>
          {isLoaded ? (
            <Navbar bg="light" expand="lg" className="site-navigations-wrapper">
              <div className="container site-navigations-content">
                <ul className="site-navigation-list">
                  {subTopics.map(({ name, _id }) => (
                    <li key={_id}>
                      <NavLink
                        exact
                        to={`${match.url}/${_id}`}
                        className="site-nav-link"
                        activeClassName="site-nav-link-active"
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Navbar>
          ) : null}
        <Switch>
          <Route path={`${match.path}/:subTopicId`} component={SubTopics} />
        </Switch>
      </Router>
    </div>
  );
}
