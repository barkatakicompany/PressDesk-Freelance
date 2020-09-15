import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { AdsType0, SingleNews, ListNews } from "../components/shared";

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
    fetch(`http://3.133.84.12:8004/api//newsbysubtopic/${subTopicId}/?limit=5`)
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
  var listNews = newsBySuptopic.slice(1, 5);

  var isSubtopicEmpty = false;
  if (!(newsBySuptopic.length > 0)) {
    isSubtopicEmpty = true;
  }
  console.log(subTopicId);
  return isNewsLoaded && !isSubtopicEmpty && !error ? (
    <>
      <br />
      <div className="d-flex mx-3 justify-content-between align-items-end">
        <h4 className="heading-text">{subTopicName}</h4>
        {/* <NavLink
          exact
          to={{
            pathname: `/${topicName}/${topicId}/${subTopicName}/${subTopicId}`,
          }}
          className="btn btn-outline-danger"
        >
          View All
        </NavLink> */}
      </div>
      <div className="row">
        <div className="col">
          <div className="card-deck">
            <div className="col-md-7 mx-md-3 mt-3 single-news-card">
              <SingleNews
                news={firstNews}
                subTopicId={subTopicId}
                topicId={topicId}
                topicName={topicName}
                subTopicName={subTopicName}
              />
            </div>
            <div className="card col-md-5 mx-md-3 mt-3">
              <ListNews
                listNews={listNews}
                header={false}
                subTopicId={subTopicId}
                topicId={topicId}
                topicName={topicName}
                subTopicName={subTopicName}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <AdsType0 />
      <br />
    </>
  ) : null;
}
