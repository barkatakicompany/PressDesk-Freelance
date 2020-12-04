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
  const [isLoaded, setIsLoaded] = useState(false);

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

    var element = showSpecifiedNews(specifiedNews.slice(0, 4));
    ReactDOM.render(element, document.getElementById("specified-news"));
  };

  const showSpecifiedNews = (specifiedNews) => {
    return (
      <>
        <Cards newsList={specifiedNews} horizontal={true} className="card" />
        {/* {specifiedNews.length > 4 ? ( */}
        <i className="float-right p-3">
          <a href="#" style={{color: "#007bff", fontSize:"1.1rem"}}>more..</a>
        </i>
        {/* ) : null} */}
      </>
    );
  };

  console.log(isLoaded);

  return (
    <Base>
      {" "}
      {isLoaded ? (
        <div className="my-container">
          <div className="row mt-4 h-100 mb-4">
            <div className="col-lg-8 col-md-12 col-sm-1 h-100">
              <Cards newsList={news[0]} single={true} />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-1 h-100">
              <div className="row">
                <div className="inline-nav d-inline-flex justify-content-around w-100 pb-3">
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
                className="border shadow"
                id="specified-news"
                style={{ display: "block" }}
              >
                {showSpecifiedNews(
                  getSpecifiedNews(news, "trending").slice(0, 4)
                )}
              </div>
            </div>
          </div>
          <div className="">
            <Cards newsList={news} horizontal={false} />
          </div>
        </div>
      ) : null}
    </Base>
  );
}
