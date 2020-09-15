import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { SingleNews, AdsType0 } from "../components/shared";

export default function SubTopics({ location }) {
  const {
    params: { topicName, topicId, subTopicName, subTopicId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsBySuptopic, setNewsBySuptopic] = useState([]);
  // const [topicId, setTopicId] = useState("");
  // const [subTopicId, setSubTopicId] = useState("");

  useEffect(() => {
    // if (location.subTopicProps) {
    //   var { tId, stId } = location.subTopicProps;
    //   sessionStorage.removeItem("topicId");
    //   sessionStorage.removeItem("subTopicId");
    //   setTopicId(tId);
    //   setSubTopicId(stId);
    //   sessionStorage.setItem("topicId", tId);
    //   sessionStorage.setItem("subTopicId", stId);
    // } else {
    //   setTopicId(sessionStorage.getItem("topicId"));
    //   setSubTopicId(sessionStorage.getItem("subTopicId"));
    // }
    fetch(`http://3.133.84.12:8004/api//newsbysubtopic/${subTopicId}/?limit=15`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsBySuptopic(result);
          // var subtopicname = "";
          // if (result[0] !== undefined) {
          //   const { subTopic } = result[0];
          //   const { name } = subTopic[0];
          //   subtopicname = name;
          // }
          // setSubTopicName(subtopicname);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
    // fetch(`http://3.133.84.12:8004/api/topic/${topicId}`)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setTopicName(result.name);
    //   });
  }, [subTopicId, isLoaded, location.subTopicProps]);

  return isLoaded ? (
    <div className="container-fluid">
      <br />
      <nav aria-label="breadcrumb" className="mx-md-5 px-md-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/${topicName}/${topicId}`}>{topicName}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {subTopicName}
          </li>
        </ol>
      </nav>
      {isLoaded ? <AdsType0 /> : null}

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
                  subTopicName={subTopicName}
                />
              </div>
            ))}
          </div>
        ) : null}
        {isLoaded ? <AdsType0 /> : null}
      </div>
    </div>
  ) : null;
}
