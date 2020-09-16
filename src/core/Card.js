import React, { useState } from "react";
import { useRouteMatch } from "react-router";
import { Link, NavLink } from "react-router-dom";

import {
  getNewsByTopics,
  searchNews,
  newsImageHelper,
  getNews,
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
          <NavLink exact 
          to={`/news/${news._id}`}
          >
            <p className="card-title m-0 p-0 pt-1 blue-link-text">
              {news.heading}
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const HorizontalNews = ({ news }) => {
  const [newsImage, setNewsImage] = useState("");
  newsImageHelper(news._id).then(setNewsImage);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="horizontal-card">
      <div className="row">
        <div className="col image-wrapper">
          <img src={newsImage} className="img-thumbnail border-0" alt="..." />
        </div>
        <div className="col-9">
          <Link to="#">
            <p className="blue-link-text mb-1" style={{ fontSize: "1.4rem" }}>
              {news.heading}
            </p>
          </Link>
          <span>
            <small>{news.editor}</small>
            {" | "}
            <small>
              {new Date(news.createdAt).toLocaleDateString("en-US", options)}
            </small>
          </span>
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
          {newsList.map((news, index) => (
            <HorizontalNews news={news} key={index} />
          ))}
          <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-md-3 vertical-line">
          <Advertisement type={1} speed={7000} />
        </div>
      </div>
    </>
  );
};

const ModeTwoCard = ({ ...props }) => {
  console.log(props);
  return <div>aa</div>;
};

const ModeThreeCard = (topicId, topicName) => {
  const {
    params: { newsId },
  } = useRouteMatch();

  const [news, setNews] = useState({});
  const [newsImage, setNewsImage] = useState('')

  getNews(newsId).then(setNews);
  newsImageHelper(newsId).then(setNewsImage)

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <Advertisement type={0} speed={5000} />
      <div className="row mx-md-5 px-md-5" id="content">
        <section className="col-md-7 col-sm-12" id="left">
          <article className="news-container">
            <p className="news-time-wrapper">
              Last Updated:{" "}
              <span className="news-updated-time">
              {new Date(news.updatedAt).toLocaleDateString("en-US", options)}
              </span>
            </p>
            <h1 className="news-heading">{news.heading}</h1>
            <p className="news-desc news-text">{news.shortDsc}</p>
            <p className="">
              Written By <span className="news-editor">{news.editor}</span>
            </p>
            <div className="">
              {/* <ShareWidget url={props.match.url} /> */}
            </div>
            <hr />
            <img
              src={newsImage}
              className="img-fluid rounded w-100 mb-5"
              alt="...."
            />
            <div
              className="news-body news-text"
              dangerouslySetInnerHTML={{
                __html: news.body,
              }}
            ></div>
          </article>
          <br />
        </section>
      </div>
    </>
  );
};

export default function Card({ mode }) {
  const {
    params: { topicName, topicId, subTopicName, subTopicId },
  } = useRouteMatch();

  // mode 1: Topics Page
  if (mode === 1) return ModeOneCard(topicId, topicName);
  // mode 2: SubTopics Page
  if (mode == 2)
    return ModeTwoCard({ topicName, topicId, subTopicName, subTopicId });
  // Mode 3: News Page
  if (mode == 3) return ModeThreeCard(topicId, topicName);
}
