import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { HorizontalCard } from ".";

// import "./styles.scss"

function HorizontalCard({
  subTopicName,
  news,
  subTopicId,
  topicId,
  topicName,
}) {
  // console.log("news", news);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsImage, setNewsImage] = useState("");
  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/news/photo/${news._id}`)
      .then((res) => res.url)
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsImage(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [news._id]);

  return !error ? (
    <div className="horizontal-card">
      <div className="row news-list">
        <div className="col image-wrapper">
          {isLoaded ? (
            <img
              src={newsImage}
              className="img-thumbnail img-hover"
              alt="..."
            />
          ) : null}
        </div>
        <div className="col-8 news-wrapper d-flex align-items-center">
          <Link
            to={{
              pathname: `/${topicName}/${subTopicName}/news/${news._id}`,
              newsProps: {
                tId: topicId,
                stId: subTopicId,
              },
            }}
            className="news-link"
          >
            <p className="news-heading">{news.heading}</p>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}

export default function ListNews({
  listNews,
  header,
  subTopicId,
  topicId,
  topicName,
  subTopicName,
}) {
  return (
    <div className="">
      {header ? <div className="card-header">{header}</div> : null}
      <ul className="list-group list-group-flush">
        {listNews.map((news, index) => (
          <li key={index} className="list-group-item news-list">
            <HorizontalCard
              subTopicName={subTopicName}
              topicName={topicName}
              subTopicId={subTopicId}
              topicId={topicId}
              news={news}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
