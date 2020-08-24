import React, { useState, useEffect } from "react";

import "./styles.scss";

export default function HorizontalCard({ news, subTopicId, topicId }) {
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

  return (
    <div>
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
          <a
            className="news-link"
            href={`/${topicId}/${subTopicId}/${news._id}`}
          >
            <p className="news-heading">{news.heading}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
