import React, { useState, useEffect } from "react";

import SingleCard from "../../../../components/NewsCards/SingleCard";

const NationalNews = (props) => {
  const [nationalNews, setNationalNews] = useState([]);

  useEffect(() => {
    const nationalNews = props.nationalNews.data;

    setNationalNews(nationalNews);
  }, [nationalNews]);

  nationalNews.sort(function (a, b) {
    return new Date(b.postedOn) - new Date(a.postedOn);
  });

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col">
              <div className="news-tag">National</div>
            </div>
            <div className="col d-flex justify-content-end news-tag-link">
              View More
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4">  
        {nationalNews.map((news) => (
          <div className="col mb-4 card-content">
            <SingleCard news={news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NationalNews;
