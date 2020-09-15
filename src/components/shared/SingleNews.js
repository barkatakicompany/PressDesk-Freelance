import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./styles.scss";

const tagColors = {
  0: "rgb(0,122,255)",
  1: "rgb(52,199,89)",
  2: "rgb(88,88,214)",
  3: "rgb(255,149,0)",
  4: "rgb(255,45,85)",
  5: "rgb(175,82,222)",
  6: "rgb(255,59,48)",
  7: "rgb(90,200,250)",
  8: "rgb(255,204,0)",
};

export default function SingleNews({
  news,
  subTopicId,
  topicId,
  topicName,
  subTopicName,
}) {
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

  // console.log(news.tags)

  return !error && isLoaded ? (
    <div className="single-card h-100 shadow">
      <div
        className="overflow card-img"
        style={{ background: "black", overflow: "hidden" }}
      >
        <img
          src={newsImage}
          style={{ objectFit: "cover", opacity: "0.6" }}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body single-card-body card-img-overlay d-flex align-items-end">
        <div className="text-white">
          <div className="tags-container">
            {news.tags.map((tag, index) => (
              <Link
                to={`/search-result/?tag=${tag}`}
                key={index}
                className="tags px-2 m-1 text-white rounded"
                style={{
                  backgroundColor: tagColors[Math.floor(Math.random() * 9)],
                }}
              >
                {tag}
              </Link>
            ))}
          </div>
          <p className="news-editor-wrapper">
            By <span className="news-editor">{news.editor}</span>
          </p>
          <Link
            to={
              topicId
                ? {
                    pathname: `/${topicName}/${subTopicName}/news/${news._id}`,
                    newsProps: {
                      tId: topicId,
                      stId: subTopicId,
                    },
                  }
                : { pathname: `/search-result/${news._id}` }
            }
            className="news-link"
          >
            <h5 className="card-title text-white">{news.heading}</h5>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}
