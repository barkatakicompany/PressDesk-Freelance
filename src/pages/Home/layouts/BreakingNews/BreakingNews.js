import React, { useState, useEffect } from "react";
// import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";

import "./BreakingNews.css";

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
      breakingNews[4],
    ];
    const topBreakingNews = breakingNews[0];
    setBreakingNews(breakingNews);
    setTopFourBreakingNews(topFourbreakingNews);
    setTopBreakingNews(topBreakingNews);
  }, [breakingNews]);

  breakingNews.sort(function (a, b) {
    return new Date(b.postedOn) - new Date(a.postedOn);
  });

  // console.log(breakingNews);
  console.log(topFourbreakingNews);

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col">
              <div className="breaking-news">Breaking News</div>
            </div>
            <div className="col d-flex justify-content-end breaking-news-link">
              View More
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="card-group">
        <div className="card">
          <img
            src={topBreakingNews.imageURL}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title">{topBreakingNews.title}</h2>
          </div>
        </div>
        <div className="card d-flex align-items-center">
          {topFourbreakingNews.map((news) => (
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={news.imageURL} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{news.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="breaking-news-advertisement">Advertisement</div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="col-md-3 breaking-news-advertisement">Advertisement</div> */
}
export default BreakingNews;

{
  /* <div className="row breaking-news-wrapper d-flex justify-content-between">
        <div className="breaking-news">Breaking News</div>
        <div className="breaking-news">View More</div>
    </div> */
}
