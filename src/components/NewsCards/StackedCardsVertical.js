import React from "react";

import "./Cards.css"

const SingleCardsVertical = (props) => {
  const topFourNews = props.topFourNews;
  console.log(topFourNews)

  return (
    <div>
      {topFourNews.map((news) => (
        <div className="row no-gutters card-horizontal">
          <div className="col-md-4 align-items-center">
            <img src={news.imageURL} className="card-img my-card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-title stacked-card-title">{news.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCardsVertical;
