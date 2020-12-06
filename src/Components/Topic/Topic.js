import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import ReactDOM from "react-dom";
import Base from "../Base";
import { getNewsByTopicName, getCovidCases } from "../helper/coreapicalls";
import { arrayRemove, sortTime } from "../helper/utilities";
import Cards from "../Cards/Cards";

export default function Topic() {
  const {
    params: { topicName },
  } = useRouteMatch();
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [covidCases, setCovidCases] = useState({});

  var allNews = [],
    firstNews = {},
    topNews = [],
    latestNews = [],
    trendingNews = [],
    remainingNews = [];

  useEffect(() => {
    loadNews();
    loadCovidCases();
  }, [topicName]);

  const loadCovidCases = () => {
    getCovidCases().then((res) => {
      if (res.error) {
        // TODO
      } else {
        setCovidCases(res);
      }
    });
  };

  const loadNews = () => {
    getNewsByTopicName(topicName).then((res) => {
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
    if (isLoaded) {
      var specifiedNews = [];

      switch (tag) {
        case "top":
          specifiedNews = topNews;
          break;
        case "latest":
          specifiedNews = latestNews;
          break;
        case "trending":
          specifiedNews = trendingNews;
          break;
        default:
          break;
      }

      var element = showSpecifiedNews(specifiedNews.slice(0, 4));
      ReactDOM.render(element, document.getElementById("specified-news"));
    }
  };

  const showSpecifiedNews = (specifiedNews) => {
    return (
      <>
        <Cards newsList={specifiedNews} horizontal={true} className="card" />
      </>
    );
  };

  if (isLoaded) {
    allNews = sortTime(news);
    firstNews = allNews[0];
    remainingNews = arrayRemove(allNews, firstNews);

    topNews = getSpecifiedNews(remainingNews, "top");
    trendingNews = getSpecifiedNews(remainingNews, "trending");
    latestNews = getSpecifiedNews(remainingNews, "latest");
    console.log("top", topNews);

    remainingNews = arrayRemove(remainingNews, topNews, true);
    remainingNews = arrayRemove(remainingNews, trendingNews, true);
    remainingNews = arrayRemove(remainingNews, latestNews, true);
  }

  return (
    <Base>
      {" "}
      {isLoaded ? (
        <div className="my-container">
          <div className="row mt-4 h-100 m-0">
            <div className="col-lg-8 col-md-12 col-sm-1 h-100">
              <Cards newsList={firstNews} single={true} />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-1 h-100">
              <div className="text-center w-100">
                <a
                  className="inline-nav-link w-75 pr-5"
                  onClick={handleClick}
                  id="top"
                  href="#"
                >
                  Top
                </a>
                <a
                  className="inline-nav-link w-75 pr-5"
                  onClick={handleClick}
                  id="latest"
                  href="#"
                >
                  Latest
                </a>
                <a
                  className="inline-nav-link w-75"
                  onClick={handleClick}
                  id="trending"
                  href="#"
                >
                  Trending
                </a>
              </div>
              <div
                className="border shadow"
                id="specified-news"
                style={{ display: "block" }}
              >
                {showSpecifiedNews(getSpecifiedNews(news, "top").slice(0, 4))}
              </div>
            </div>
          </div>
          <div className="row mt-4 m-0">
            <Cards newsList={remainingNews} horizontal={false} />
          </div>
        </div>
      ) : null}
    </Base>
  );
}