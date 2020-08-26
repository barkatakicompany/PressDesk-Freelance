import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { ShareWidget } from "../components";

export default function News(props) {
  const {
    params: { topicId, subTopicId, newsId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsImage, setNewsImage] = useState("");
  const [subTopicName, setSubTopicName] = useState("");
  const [topicName, setTopicName] = useState("");

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
    if (props.location.navProps) {
      var { topicName } = props.location.navProps;
      setTopicName(topicName);
    } else
      fetch(`http://3.133.84.12:8004/api/topic/${topicId}`)
        .then((res) => res.json())
        .then((result) => {
          setTopicName(result.name);
        });
    fetch(`http://3.133.84.12:8004/api/news/${newsId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNews(result);
          const { subTopic } = result;
          const { name } = subTopic[0];
          setSubTopicName(name);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
    if (isLoaded)
      fetch(`http://3.133.84.12:8004/api/news/photo/${newsId}`)
        .then((res) => res.url)
        .then(
          (result) => {
            setNewsImage(result);
          },
          (error) => {
            setError(error);
          }
        );
  }, [newsId, isLoaded, props.location.navProps, topicId]);

  var updatedAtDate = new Date(news.updatedAt);

  // console.log(props.match);

  return !error ? (
    <div className="container-fluid">
      <br />
      <nav aria-label="breadcrumb" className="mx-md-5">
        <ol className="breadcrumb mx-md-5">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/${topicId}`}>{topicName}</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/${topicId}/${subTopicId}`}>{subTopicName}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {news.heading}
          </li>
        </ol>
      </nav>
      <div className="advertisement-large-1 text-center text-white">Ads</div>
      <div className="row mx-md-5 px-md-5">
        <div className="col-md-8 news-container">
          <p className="news-time-wrapper">
            Last Updated:{" "}
            <span className="news-updated-time">
              {updatedAtDate.toString()}
            </span>
          </p>
          <h1 className="news-heading">{news.heading}</h1>
          <p className="news-desc news-text">{news.shortDsc}</p>
          <p className="">
            Written By <span className="news-editor">{news.editor}</span>
          </p>
          <div className="">
            <ShareWidget url={props.match.url} />
          </div>
          <hr />
          <img src={newsImage} className="img-fluid rounded w-100" alt="...." />
          <p className="news-body news-text">{news.body}</p>
        </div>
        <div className="col-md ads-wrapper ml-3">
          <div className="row mb-3 advertisement-long-2-2 text-center">ads</div>
          <div className="row advertisement-long-2-2 text-center">ads</div>
        </div>
      </div>
    </div>
  ) : (
    <div>404</div>
  );
}
