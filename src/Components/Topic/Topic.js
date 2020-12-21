import React, { useState, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import ReactDOM from "react-dom";
import Base from "../Base";
import { getNewsByTopicName } from "../helper/coreapicalls";
import { arrayRemove, sortTime } from "../helper/utilities";
import Cards from "../Cards/Cards";

export default function Topic() {
  const {
    params: { topicName },
  } = useRouteMatch();
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [covidCases, setCovidCases] = useState({});
  let query = new URLSearchParams(useLocation().search);
  var allNews = [],
    firstNews = {},
    topNews = [],
    latestNews = [],
    trendingNews = [],
    remainingNews = [];

  useEffect(() => {
    setNews([]);
    loadNews();
  }, [topicName]);

  const loadNews = () => {
    getNewsByTopicName(topicName).then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        console.log(query.get("showOnly"));
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
        <Cards
          newsList={specifiedNews}
          horizontal={true}
          className="card"
          topicName={topicName}
        />
      </>
    );
  };

  if (isLoaded) {
    allNews = sortTime(news);
    firstNews = allNews[0];
    // remainingNews = arrayRemove(allNews, firstNews);
    remainingNews = allNews.slice(1, allNews.length);
    topNews = getSpecifiedNews(remainingNews, "top");
    trendingNews = getSpecifiedNews(remainingNews, "trending");
    latestNews = getSpecifiedNews(remainingNews, "latest");

    // remainingNews = arrayRemove(remainingNews, topNews, true);
    // remainingNews = arrayRemove(remainingNews, trendingNews, true);
    // remainingNews = arrayRemove(remainingNews, latestNews, true);
  }

  return (
    <Base>
      {isLoaded && news.length > 0 ? (
        <div className="my-container">
          <div className="row mt-3 h-100 m-0">
            <div className="col-lg-8 col-sm-12 h-100 mb-2">
              <Cards newsList={firstNews} single={true} topicName={topicName} />
            </div>
            <div className="col-lg-4 col-sm-12 h-100 mb-2">
              <div className="text-center w-100">
                <a
                  className="inline-nav-link w-75 pr-4"
                  onClick={handleClick}
                  id="top"
                  href="#"
                >
                  Top
                </a>
                <a
                  className="inline-nav-link w-75 pr-4"
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
          <div className="row mt-2 m-0">
            <Cards
              newsList={remainingNews}
              horizontal={false}
              topicName={topicName}
            />
          </div>
        </div>
      ) : null}
    </Base>
  );
}
