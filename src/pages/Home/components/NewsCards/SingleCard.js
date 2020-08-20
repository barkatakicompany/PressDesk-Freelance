import React from "react";

const SingleCard = (props) => {
  const news = props.news;

  return (
    <div className="card h-100">
      <img
        src={news.imageURL}
        className="card-img-top"
        alt="..."
        style={{height: props.size}}
      />
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
      </div>
    </div>
  );
};

export default SingleCard;
