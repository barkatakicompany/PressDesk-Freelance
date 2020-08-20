import React from "react";

const SingleCardsVertical = (props) => {
  const topFourNews = props.topFourNews;

  return (
    <div>
      {topFourNews.map((news) => (
        <div className="row no-gutters card-horizontal">
          <div className="col-md-4">
            <img src={news.imageURL} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCardsVertical;
