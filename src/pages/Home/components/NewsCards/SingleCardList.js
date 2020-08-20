import React, { useState, useEffect } from "react";

const SingleCardList = (props) => {
  const topNews = props.topNews;
  const topListNews = props.topListNews;

  return (
    <div className="card">
      <img src={topNews.imageURL} className="card-img-top" alt="..." />
      <div className="card-body" style={{height: "max-content"}}>
        <h2 className="card-title">{topNews.title}</h2>
        <p className="card-text">aaa</p>
      </div>
      <ul className="list-group list-group-flush">
        {topListNews.map((news, index) => (
          <li className="list-group-item" key={index}>
            <div style={{ fontWeight: "500", fontSize: "1.2rem" }}>
              {news.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleCardList;
