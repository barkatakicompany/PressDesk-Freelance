import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import "./styles.scss";

export default function HorizontalCard({
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
        <div className="col-md-4 image-wrapper">
          {isLoaded ? (
            <img
              src={newsImage}
              className="img-thumbnail img-hover"
              alt="..."
            />
          ) : null}
        </div>
        <div className="col-md-8 news-wrapper d-flex align-items-center">
          <Link
            to={{
              pathname: `/${topicId}/${subTopicId}/${news._id}`,
              topicName: topicName,
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
