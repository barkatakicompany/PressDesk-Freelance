import React from "react";

const SingleCard = (props) => {
  const topNews = props.topNews;

  return (
    <div className="card">
      <img src={topNews.imageURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">{topNews.title}</h2>
      </div>
    </div>
  );
};

export default SingleCard;
