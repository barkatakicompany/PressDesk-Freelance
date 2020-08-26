import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { SingleNews } from "../components/shared";

export default function SubTopicsNews() {
  const {
    params: { topicId, subTopicId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsBySuptopic, setNewsBySuptopic] = useState([]);
  const [topicName, setTopicName] = useState("");
  const [subTopicName, setSubTopicName] = useState("");

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api//newsbysubtopic/${subTopicId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsBySuptopic(result);
          var subtopicname = "";
          if (result[0] !== undefined) {
            const { subTopic } = result[0];
            const { name } = subTopic[0];
            subtopicname = name;
          }

          console.log(result);
          setSubTopicName(subtopicname);
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
  }, [topicId, subTopicId, isLoaded]);

  return !error ? (
    <div className="container-fluid">
      <br />
      <nav aria-label="breadcrumb" className="mx-md-5 px-md-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/${topicId}`}>{topicName}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {subTopicName}
          </li>
        </ol>
      </nav>
      {isLoaded ? (
        <div className="advertisement-large-1 text-center text-white">Ads</div>
      ) : null}

      <div className=" mx-md-5 px-md-5">
        <br />
        <h4 className="px-4">{subTopicName}</h4>
        {isLoaded ? (
          <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 mt-4">
            {newsBySuptopic.map((news, index) => (
              <div key={index} className="col mb-3 card-content">
                <SingleNews
                  news={news}
                  subTopicId={subTopicId}
                  topicId={topicId}
                  topicName={topicName}
                />
              </div>
            ))}
          </div>
        ) : null}
        {isLoaded ? (
          <div className="container d-flex justify-content-center">
            <div className="advertisement-long-1-2 text-center text-white">
              Ads
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <div>404</div>
  );
}
