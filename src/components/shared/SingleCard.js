import React, { useState, useEffect } from "react";

import "./single-card.scss";

export default function SingleCard({ news }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsImage, setNewsImage] = useState("");
  // const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/news/photo/${news._id}`)
      .then((res) => res.url)
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsImage(result);
          // setCreatedAt(news.createdAt)
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [news._id]);

  // var time = new Date(createdAt);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // const date =
  //   time.getDate() + " " + months[time.getMonth()] + ", " + time.getFullYear();

  // console.log(newsImage);

  // console.log('news', news)

  return (
    // <div>aa</div>
    <div className="card single-card h-100 shadow">
      <div className="overflow">
        {isLoaded ? (
          <img
            src={newsImage}
            className="card-img-top"
            alt="..."
          />
        ) : null}
      </div>
      <div className="card-body single-card-body text-dark">
        <div className="body-text-small d-flex justify-content-between">
          {/* <span>{date}</span> */}
        </div>
        <h4 className="card-title">{news.heading}</h4>
      </div>
    </div>
  )
}
