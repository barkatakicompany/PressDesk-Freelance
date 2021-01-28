import React from "react";
import { Link } from "react-router-dom";
import { calculateElapsedTime, correctImageUrl } from "../helper/utilities";

const VerticalCard = (newsList, topicName) => {
  // console.log('cardNews', newsList)
  var n = newsList[0];

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 m-0">
      {newsList.map((news, i) => (
        <div className="col mb-3" key={i}>
          <div className="card h-100">
            <div className="img-wrapper">
              <img
                src={
                  news.resources &&
                  news.resources.find((n) => n.resType == "image")
                    ? correctImageUrl(
                        news.resources.find((n) => n.resType == "image").link
                      )
                    : require("../../static/images/news.png")
                }
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body p-2">
              <p className="text-muted mb-0 font-weight-bold">
                {calculateElapsedTime(news.createdAt)}
                ago
              </p>
              <a
                href={`../${topicName}/${news._id}`}
                // currentPath="/"
                className="card-title text-bold-small m-0 truncate-text"
              >
                {news.heading}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const HorizontalCard = (newsList, topicName) => {
  return (
    <ul className="list-unstyled align-content-between m-0">
      {newsList.map((news, i) => (
        <li className="media py-2" key={i} style={{ height: "120px" }}>
          <img
            src={
              news.resources && news.resources.find((n) => n.resType == "image")
                ? correctImageUrl(
                    news.resources.find((n) => n.resType == "image").link
                  )
                : require("../../static/images/news.png")
            }
            className="px-2"
            height="100px"
            style={{
              objectFit: "cover",
              width: "45%",
            }}
          />
          <div className="media-body align-self-center">
            <a
              href={`../${topicName}/${news._id}`}
              className="mt-0 mb-1 text-bold-small truncate-text-2"
            >
              {news.heading}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

const SingleCard = (news, topicName) => {
  return (
    <div className="card bg-darken-1 text-bold">
      {news &&
        news.resources &&
        news.resources.find((r) => r.resType === "youtube_video") && (
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              style={{ zIndex: 1 }}
              className="embed-responsive-item"
              src={
                "https://www.youtube.com/embed/" +
                news.resources.find((r) => r.resType === "youtube_video").link +
                "?controls=0"
              }
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        )}
      {news &&
        news.resources &&
        !news.resources.find((r) => r.resType === "youtube_video") &&
        news.resources.find((r) => r.resType === "image") && (
          <div className="img-wrapper">
            <img
              src={correctImageUrl(
                news.resources.find((n) => n.resType == "image").link
              )}
              className="card-img"
            />
          </div>
        )}
      {news &&
        news.resources &&
        !news.resources.find((r) => r.resType === "image") &&
        !news.resources.find((r) => r.resType === "youtube_video") && (
          <div className="img-wrapper">
            <img
              src={require("../../static/images/news.png")}
              className="card-img"
            />
          </div>
        )}
      <div className="card-img-overlay d-flex align-items-end p-0">
        <div className="w-100 px-3 py-2 gradient-overlay">
          <a
            href={`../${topicName}/${news._id}`}
            className="card-title text-white text-bold-big m-0 truncate-text"
          >
            {news.heading}
          </a>
        </div>
      </div>
    </div>
  );
};

const WithoutImage = (news, topicName) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 m-0">
      {news.map((news, i) => (
        <div className="col mb-3" key={i}>
          <a
            href={`../${topicName}/${news._id}`}
            // currentPath="/"
            className="card-title m-0 truncate-text blue-link"
          >
            {news.heading}
          </a>
        </div>
      ))}
    </div>
  );
};

export default function Cards({
  newsList,
  topicName,
  showImage = true,
  horizontal = false,
  single = false, // card type can be single or multi(for multi it will be false)
}) {
  if (single) return SingleCard(newsList, topicName);
  else if (!showImage) return WithoutImage(newsList, topicName);
  else
    return horizontal
      ? HorizontalCard(newsList, topicName)
      : VerticalCard(newsList, topicName);
}
