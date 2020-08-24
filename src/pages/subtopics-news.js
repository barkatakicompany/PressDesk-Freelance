import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useRouteMatch } from "react-router";
import { SingleCard } from "../components/shared";

export default function SubTopicsNews() {
  const {
    params: {topicId, subTopicId}
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsBySuptopic, setNewsBySuptopic] = useState([]);
  const [topicName, setTopicName] = useState('')
  const [subTopicName, setSubTopicName] = useState('')


  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api//newsbysubtopic/${subTopicId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsBySuptopic(result);
          const { subTopic } = result[0];
          const { name } = subTopic[0]
          setSubTopicName(name)
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
      // fetch(`http://3.133.84.12:8004/api/topic/${topicId}`)
      // .then((res) => res.json())
      // .then(
      //   (result) => {
      //     setTopicName(result.name  );
      //   }
      // );
  }, [topicId, subTopicId, isLoaded]);



  return !error ? (
    <div className="container">
      <br />
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{subTopicName}</Breadcrumb.Item>
      </Breadcrumb>
      {isLoaded ? (
        <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 mt-4">
            {newsBySuptopic.map((news, index) => (
              <div key={index} className="col mb-3 card-content">
                <a href={`/${topicId}/${subTopicId}/${news._id}`}>
                  <SingleCard news={news} subTopicId={subTopicId}/>
                </a>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  ) : <div>404</div>;
}
