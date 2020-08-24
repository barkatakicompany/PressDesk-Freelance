import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
// import { NavLink } from "react-router-dom";
import { Topics } from "./";

import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function Page() {
  const {
    params: { topicId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [subTopics, setSubTopics] = useState([]);
  const [topicName, setTopicName] = useState("");

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
    fetch(`http://3.133.84.12:8004/api/topic/${topicId}`)
      .then((res) => res.json())
      .then((result) => {
        setTopicName(result.name);
      });
  }, [topicId, isLoaded]);

  return !error ? (
    <div className="container">
      <br />
      <Breadcrumb bg="transparent">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{topicName}</Breadcrumb.Item>
      </Breadcrumb>
      {subTopics.map(({ name, _id, topic }) => (
        <div key={_id}>
          {/* <div className="d-flex justify-content-between align-items-end">
            <h4>{name}</h4>
            <NavLink
              exact
              to={`/${topic}/${_id}`}
              className="btn btn-outline-danger"
            >
              View All
            </NavLink>
          </div> */}
          <div>
            <Topics subTopicName={name} subTopicId={_id} topicId={topic} />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>404</div>
  );
}
