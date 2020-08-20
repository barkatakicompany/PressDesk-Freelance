import React, { useState, useEffect } from "react";

import SingleCard from "../../components/NewsCards/SingleCard.js";
import StackedCardsVerical from "../../components/NewsCards/StackedCardsVertical.js";

const InternationalNews = (props) => {
  const [internationalNews, setInternationalNews] = useState([]);
  const [topInternationalNews, setTopInternationalNews] = useState([]);

  useEffect(() => {
    const internationalNews = props.internationalNews.data;
    const topInternationalNews = [internationalNews[0], internationalNews[1]];

    setInternationalNews(internationalNews);
    setTopInternationalNews(topInternationalNews);
  }, [internationalNews]);

  console.log(internationalNews);

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col">
              <div className="news-tag">International News</div>
            </div>
            <div className="col d-flex justify-content-end news-tag-link">
              View More
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="card-group">
        <div className="card">
          {topInternationalNews.map((news) => (
            <div className="row row-cols-1" style={{ margin: "0" }}>
              <SingleCard news={news} size={"12rem"} />
            </div>
          ))}
        </div>
        <div className="card justify-content-md-around">
          <StackedCardsVerical topFourNews={internationalNews} />
        </div>

        <div className="card col-md-3" style={{ padding: "0" }}>
          <div className="breaking-news-advertisement">Advertisement</div>
        </div>
      </div>
    </div>
  );
};

export default InternationalNews;
