import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";

export default function News() {
  const {
    params: { newsId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [news, setNews] = useState({
    subTopic: [
      {
        _id: "",
        name: "",
        description: "",
        topic: "",
        createdAt: "",
        updatedAt: "",
        __v: "",
      },
    ],
    tags: [],
    _id: "",
    dateOfNews: "",
    editor: "",
    heading: "",
    shortDsc: "",
    body: "",
    links: [],
    createdBy: "",
    createdAt: "",
    updatedAt: "",
    __v: "",
  });

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/news/${newsId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNews(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [newsId]);

  return isLoaded ? (
    <div>
      <h1>{news.heading}</h1>
      <h4>{news.shortDsc}</h4>
      <p>{news.body}</p>
    </div>
  ) : null;
}
