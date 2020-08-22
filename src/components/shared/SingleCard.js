import React, { useState, useEffect } from "react";

export default function SingleCard({ news }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsImage, setNewsImage] = useState("");

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/news/photo/${news._id}`)
      .then((res) => res.url)
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsImage(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [news._id]);

  return (
    <div className="card h-100">
      {isLoaded ? (
        <img src={newsImage} className="card-img-top" alt="..." />
      ) : null}
      <div className="card-body">
        <h3 className="card-title">{news.heading}</h3>
      </div>
    </div>
  );
}
