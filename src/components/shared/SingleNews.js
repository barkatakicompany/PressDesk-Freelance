import React, { useState, useEffect } from "react";

import "./single-news.scss";

export default function SingleNews({ news, subTopicId, topicId }) {
  // console.log(news);
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
      <div className="card single-card h-100 shadow">
        <div className="overflow">
          {isLoaded ? (
            <img src={newsImage} className="card-img-top" alt="..." />
          ) : null}
        </div>
        <div className="card-body single-card-body text-dark">
          <p className="news-editor-wrapper">By <span className="news-editor">{news.editor}</span></p>
          <a className="news-link" href={`/${topicId}/${subTopicId}/${news._id}`}>
            <h5 className="card-title">{news.heading}</h5>
          </a>
        </div>
      </div>
    </div>
  );
}
