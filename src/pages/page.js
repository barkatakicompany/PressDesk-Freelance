import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
// import { NavLink } from "react-router-dom";
import { Topics } from "./";

export default function Page({ location }) {
  const {
    params: { topicId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [subTopics, setSubTopics] = useState([]);
  const [topicName, setTopicName] = useState("");

  useEffect(() => {
    if (location.navProps) {
      var { topicName } = location.navProps;
      setTopicName(topicName);
    } else
      fetch(`http://3.133.84.12:8004/api/topic/${topicId}`)
        .then((res) => res.json())
        .then((result) => {
          setTopicName(result.name);
        });
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
  }, [topicId, isLoaded, location.navProps]);

  return !error ? (
    <div className="container-fluid">
      <br />

      <nav aria-label="breadcrumb" className="mx-md-5 px-md-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {topicName}
          </li>
        </ol>
      </nav>
      {isLoaded ? (
        <div className="advertisement-large-1 text-center text-white">Ads</div>
      ) : null}

      <div className="row mx-md-5 px-md-5">
        {subTopics.map(({ name, _id, topic }) => (
          <div key={_id}>
            <Topics
              topicName={topicName}
              subTopicName={name}
              subTopicId={_id}
              topicId={topic}
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>404</div>
  );
}
