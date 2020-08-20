import React, { useState, useEffect } from "react";

import SingleCard from "../../components/NewsCards/SingleCard.js";
import StackedCardsVerical from "../../components/NewsCards/StackedCardsVertical.js";

const CovidNews = (props) => {
  const [CovidNews, setCovidNews] = useState([]);
  const [topCovidNews, setTopCovidNews] = useState([]);

  useEffect(() => {
    const CovidNews = props.covidNews.data;
    const topCovidNews = [CovidNews[0], CovidNews[1]];

    setCovidNews(CovidNews);
    setTopCovidNews(topCovidNews);
  }, [CovidNews]);

  console.log(CovidNews);

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col">
              <div className="news-tag">Covid News</div>
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
          {topCovidNews.map((news) => (
            <div className="row row-cols-1" style={{ margin: "0" }}>
              <SingleCard news={news} />
            </div>
          ))}
        </div>
        <div className="card col">
          <div className="row row-cols-1 row-cols-md-2">
            {CovidNews.map((news) => (
              <div className="col mb-4 card-content">
                <SingleCard news={news} />
              </div>
            ))}
          </div>
        </div>

        <div className="card col-md-3" style={{ padding: "0" }}>
          <div className="news-advertisement">Advertisement!!</div>
        </div>
      </div>
    </div>
  );
};

export default CovidNews;
