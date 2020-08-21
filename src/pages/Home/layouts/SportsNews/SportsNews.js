import React, { useState, useEffect } from "react";

import SingleCard from "../../../../components/NewsCards/SingleCard.js";
import StackedCardsVerical from "../../../../components/NewsCards/StackedCardsVertical.js";

const SportsNews = (props) => {
  const [SportsNews, setSportsNews] = useState([]);
  const [topSportsNews, setTopSportsNews] = useState([]);

  useEffect(() => {
    const SportsNews = props.sportsNews.data;
    const topSportsNews = [SportsNews[0], SportsNews[1]];

    setSportsNews(SportsNews);
    setTopSportsNews(topSportsNews);
  }, [SportsNews]);


  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col">
              <div className="news-tag">Sports News</div>
            </div>
            <div className="col d-flex justify-content-end news-tag-link">
              View More
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="card-group mb-3">
        <div className="card col-md-3">
          {topSportsNews.map((news) => (
            <div className="row row-cols-1" style={{ margin: "0" }}>
              <SingleCard news={news} />
            </div>
          ))}
        </div>
        <div className="card justify-content-md-around">
          <StackedCardsVerical topFourNews={SportsNews} />
        </div>

        <div className="card col-md-4" style={{ padding: "0" }}>
          <div className="news-advertisement">Advertisement!!</div>
        </div>
      </div>
    </div>
  );
};

export default SportsNews;
