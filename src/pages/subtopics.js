import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { SingleCard } from "../components/shared";
import { News } from "../pages"

import { Link, Route, Switch } from "react-router-dom";

export default function SubTopics({ match }) {
  const {
    params: { subTopicId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsBySuptopic, setNewsBySuptopic] = useState([]);

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api//newsbysubtopic/${subTopicId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsBySuptopic(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [subTopicId]);


  return (
    <div>
      {isLoaded ? (
        <div className="row row-cols-1 row-cols-md-4">
          {newsBySuptopic.map((news, index) => (
            <div key={index} className="col mb-4 card-content">
              <Link to={`${match.url}/${news._id}`}>
                <SingleCard news={news} />
              </Link>
            </div>
          ))}
        </div>
      ) : null}
      <Switch>
        <Route exact path={`${match.path}/:newsId`} component={News} />
      </Switch>
    </div>
  );
}
