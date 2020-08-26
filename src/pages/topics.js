import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SingleNews, ListNews } from "../components/shared";

export default function Topics({
  subTopicName,
  subTopicId,
  topicId,
  topicName,
}) {
  const [error, setError] = useState(null);
  const [isNewsLoaded, setIsNewsLoaded] = useState(false);
  const [newsBySuptopic, setNewsBySuptopic] = useState([]);

  var firstNews = {
    subTopic: [],
    tags: [],
    _id: "",
    dateOfNews: "",
    editor: "",
    heading: "",
    shortDsc: "",
    body: "",
    links: [],
    createdBy: "",
    createdAt: "",
    updatedAt: "",
    __v: "",
  };

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api//newsbysubtopic/${subTopicId}/?limit=6`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsNewsLoaded(true);
          setNewsBySuptopic(result);
        },
        (error) => {
          setError(error);
          setIsNewsLoaded(false);
        }
      );
  }, [subTopicId, isNewsLoaded]);

  if (newsBySuptopic[0] !== undefined) firstNews = newsBySuptopic[0];
  var listNews = newsBySuptopic.slice(1, 6);

  var isSubtopicEmpty = false;
  if (!(newsBySuptopic.length > 0)) {
    isSubtopicEmpty = true;
  }
  return isNewsLoaded && !isSubtopicEmpty  && !error ? (
    <>
      <div className="d-flex justify-content-between align-items-end">
        <h4>{subTopicName}</h4>
        <NavLink
          exact
          to={`/${topicId}/${subTopicId}`}
          className="btn btn-outline-danger"
        >
          View All
        </NavLink>
      </div>
      <div className="row">
        <div className="card-deck">
          <div className="col-md-7 col-sm-1 mr-3 single-news-card">
            <SingleNews
              news={firstNews}
              subTopicId={subTopicId}
              topicId={topicId}
              topicName={topicName}
            />
          </div>
          <div className="card col-md-5">
            <ListNews
              listNews={listNews}
              header={false}
              subTopicId={subTopicId}
              topicId={topicId}
              topicName={topicName}
            />
          </div>
        </div>
      </div>
      {/* <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 mt-4">
        {carouselNews.map((news, index) => (
          <div key={index} className="col mb-3 card-content">
            <SingleNews
              news={news}
              subTopicId={subTopicId}
              topicId={topicId}
              topicName={topicName}
            />
          </div>
        ))}
      </div> */}
      <div className="container my-3 d-flex justify-content-center">
        <div className="advertisement-long-1-2 text-center text-white">Ads</div>
      </div>
    </>
  ) : null;
}
