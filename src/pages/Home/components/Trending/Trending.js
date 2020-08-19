import React, { useState, useEffect } from "react";

// import trendingPost from "../../../../data/trending_news.json";

import "./Trending.css";

const Trending = (props) => {
  const [trendings, setTrendings] = useState([]);

  const [trending, setTrending] = useState({
    "id": "",
    "title": "",
    "postedOn": "",
  });

  useEffect(() => {
    const trendings = props.trendingPost.data;
    const trending = trendings[0]
    setTrendings(trendings);
    setTrending(trending)
  }, [trendings]);

  trendings.sort(function (a, b) {
    return new Date(b.postedOn) - new Date(a.postedOn);
  });
  

  return (
    <div className="container trending-now-wrapper">
      <div className="row trending-now-content">
        <div className="col-md-2 trending-now-box text-center">
          Trending Headlines
        </div>
        <div className="col-md-7 trending-now-news">{trending.title}</div>
      </div>
    </div>
  );
};

export default Trending;
