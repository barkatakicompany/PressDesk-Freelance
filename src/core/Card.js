import React, { useState } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

import {
  getNewsByTopics,
  searchNews,
  newsImageHelper,
} from "./helper/coreapicalls.js";
import { Advertisement } from "./";

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

const SingleNews = ({ news, showTags = false }) => {
  console.log(news);
  const [newsImage, setNewsImage] = useState("");

  newsImageHelper(news._id).then(setNewsImage);

  return (
    <div className="pt-3">
      <div className="overflow card-img">
        <img
          src={newsImage}
          style={{ objectFit: "cover" }}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body pl-0 pt-1">
        <div className="text-dark">
          {showTags === true ? (
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
          ) : null}
          {showTags === true ? (
            <p className="news-editor-wrapper">
              By <span className="news-editor">{news.editor}</span>
            </p>
          ) : null}
          <Link to="#">
            <p className="card-title m-0 p-0 pt-1 blue-link-text">
              {news.heading}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const HorizontalNews = ({ news }) => {
  const [newsImage, setNewsImage] = useState("");
  newsImageHelper(news._id).then(setNewsImage);

  return (
    <div className="horizontal-card">
      <div className="row">
        <div className="col-4 card-img">
          <img src={newsImage} className="img-thumbnail border-0" alt="..."/>
        </div>
        <div>
          <Link to="#">
            <p className="blue-link-text" style={{ fontSize: "1.3rem" }}>
              {news.heading}
            </p>
          </Link>
          <p>{news.shortDsc}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

const ModeOneCard = (topicId, topicName) => {
  const [newsList, setNewsList] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  getNewsByTopics(topicId).then((data) => {
    setNewsList(data);
  });

  searchNews({ keyword: "news", type: "tags" }).then(setTrendingNews);

  return (
    <>
      <Advertisement type={0} speed={10000} />
      <hr />
      <h3 className="heading-text">{topicName} News</h3>
      <hr />
      <div className="row">
        <div className="col-md-2 pr-5">
          <p className="small-heading-text">TRENDING</p>
          {trendingNews.map((news, i) => (
            <SingleNews key={i} news={news} />
          ))}
        </div>
        <div className="col">
          {/* <div><HorizontalNews /></div> */}
          {newsList.map((news, index) => (
            <HorizontalNews news={news} key={index} />
          ))}
        </div>
        <div className="col-md-3 vertical-line">
          <Advertisement type={1} speed={7000} />
        </div>
      </div>
    </>
  );
};

const ModeTwoCard = (topicId, topicName) => {};

const ModeThreeCard = (topicId, topicName) => {};

export default function Card({ mode }) {
  const {
    params: { topicName, topicId },
  } = useRouteMatch();

  // mode 1: Topics Page
  if (mode === 1) return ModeOneCard(topicId, topicName);
  // mode 2: SubTopics Page
  if (mode == 2) return ModeTwoCard(topicId, topicName);
  // Mode 3:
  if (mode == 3) return ModeThreeCard(topicId, topicName);
}
