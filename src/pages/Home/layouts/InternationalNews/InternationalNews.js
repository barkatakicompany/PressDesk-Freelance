import React, { useState, useEffect } from "react";

import SingleCard from "../../../../components/NewsCards/SingleCard.js";

const InternationalNews = (props) => {
  const [internationalNews, setInternationalNews] = useState([]);
  const [topInternationalNews, setTopInternationalNews] = useState([]);

  useEffect(() => {
    const internationalNews = props.internationalNews.data;
    const topInternationalNews = [
      internationalNews[0],
      internationalNews[1],
      internationalNews[2],
    ];

    setInternationalNews(internationalNews);
    setTopInternationalNews(topInternationalNews);
  }, [internationalNews]);


  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col">
              <div className="news-tag">International</div>
            </div>
            <div className="col d-flex justify-content-end news-tag-link">
              View More
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4">  
        {internationalNews.map((news) => (
          <div className="col mb-4 card-content">
            <SingleCard news={news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalNews;
