import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import ReactDOM from "react-dom";
import Base from "../Base";
import { getTopicByTopicName } from "../helper/coreapicalls";
import Cards from "../Cards/Cards";

export default function Topic() {
  const {
    params: { topicName },
  } = useRouteMatch();
  const [news, setNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSpecifiedNews, setShowSpecifiedNews] = useState(false);

  useEffect(() => {
    loadNews();
  }, [topicName]);

  const loadNews = () => {
    getTopicByTopicName(topicName).then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setNews(res);
        setIsLoaded(true);
      }
    });
  };

  const getSpecifiedNews = (allNews, specifiedTag) => {
    var specifiedNews = [];
    allNews.forEach((item) => {
      var tags = item.tags;
      if (tags.includes(specifiedTag)) {
        specifiedNews.push(item);
      }
    });
    return specifiedNews;
  };

  const handleClick = (e) => {
    var tag = String(e.target.innerHTML).toLowerCase();
    var specifiedNews = getSpecifiedNews(news, tag);
    setShowSpecifiedNews(specifiedNews.length > 0);

    ReactDOM.render(
      <Cards newsList={specifiedNews} horizontal={false} />,
      document.getElementById("specified-news")
    );
  };

  console.log(isLoaded);

  return (
    <Base>
      {" "}
      {isLoaded ? (
        <>
          <div className="row mt-3">
            <div className="col-md-8">
              <img
                src={require("../../static/images/news.png")}
                style={{ width: "70%" }}
              />

              <h2>{news[0].heading}</h2>
            </div>
            <div className="col">
              <div className="row">
                <div className="inline-nav d-inline-flex justify-content-around w-75 pb-3">
                  <a className="inline-nav-link" onClick={handleClick} href="#">
                    Top
                  </a>
                  <a className="inline-nav-link" onClick={handleClick} href="#">
                    Latest
                  </a>
                  <a className="inline-nav-link" onClick={handleClick} href="#">
                    Trending
                  </a>
                </div>
              </div>
              <div
                className="row border"
                id="specified-news"
                style={{ display: showSpecifiedNews ? "block" : "none" }}
              ></div>
            </div>
          </div>
          <div className="row mt-3">
            <Cards newsList={news} horizontal={true} />
          </div>
        </>
      ) : null}
    </Base>
  );
}
