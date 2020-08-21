import React, { useState, useEffect } from "react";

import "./BreakingNews.css";

import SingleCard from "../../../../components/NewsCards/SingleCard.js";
import StackedCardsVerical from "../../../../components/NewsCards/StackedCardsVertical.js";

const BreakingNews = (props) => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [topFourbreakingNews, setTopFourBreakingNews] = useState([]);
  const [topBreakingNews, setTopBreakingNews] = useState({
    id: "",
    title: "",
    postedOn: "",
    imageURL: "",
    desc: "",
    body: "",
  });

  useEffect(() => {
    const breakingNews = props.breakingNews.data;
    const topFourbreakingNews = [
      breakingNews[1],
      breakingNews[2],
      breakingNews[3],
    ];
    const topBreakingNews = breakingNews[0];
    setBreakingNews(breakingNews);
    setTopFourBreakingNews(topFourbreakingNews);
    setTopBreakingNews(topBreakingNews);
  }, [breakingNews]);

  breakingNews.sort(function (a, b) {
    return new Date(b.postedOn) - new Date(a.postedOn);
  });

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col">
              <div className="news-tag">Breaking News</div>
            </div>
            <div className="col d-flex justify-content-end news-tag-link">
              View More
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="card-group">
        <div className="col-md-4">
          <SingleCard news={topBreakingNews} />
        </div>
        <div className="card justify-content-md-around">
          <StackedCardsVerical topFourNews={topFourbreakingNews} />
        </div>
        <div className="card col-md-3" style={{ padding: "0" }}>
          <div className="news-advertisement">Advertisement</div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
