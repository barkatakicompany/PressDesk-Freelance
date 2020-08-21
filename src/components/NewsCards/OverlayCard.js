import React from "react";

const OverlayCard = (props) => {
  const news = props.news;

  return (
    <div className="card bg-dark text-white d-flex justify-content-end">
      <img src={news.imageURL} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h3 className="card-title">{news.title}</h3>
      </div>
    </div>
  );
};

export default OverlayCard;
