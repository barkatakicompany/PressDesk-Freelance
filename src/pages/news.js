import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function News() {
  const {
    params: { topicId, subTopicId, newsId },
  } = useRouteMatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsImage, setNewsImage] = useState("");
  const [subTopicName, setSubTopicName] = useState("");
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
          const { subTopic } = result;
          const { name } = subTopic[0];
          setSubTopicName(name);
          setUpdatedAt(result.updatedAt);
          setEditor(result.editor);
          console.log('result', result)
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
  }, [newsId, isLoaded]);

  // console.log('newsId', newsId)

  const [updatedAt, setUpdatedAt] = useState(news.updatedAt);
  const [editor, setEditor] = useState(news.editor);
  var updatedAtDate = new Date(updatedAt);

  return !error ? (
    <div className="container">
      <br />
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/${topicId}/${subTopicId}`}>
          {subTopicName}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>News</Breadcrumb.Item>
      </Breadcrumb>
      <div>Ads</div>
      <div className="row">
        <div className="col-md-9 news-container">
          <p className="news-time-wrapper">
            Last Updated:{" "}
            <span className="news-updated-time">
              {updatedAtDate.toString()}
            </span>
          </p>
          <h1 className="news-heading">{news.heading}</h1>
          <p className="news-desc news-text">{news.shortDsc}</p>
          <p>
            Written By <span className="news-editor">{editor}</span>
          </p>
          {/* <img src={newsImage} className="news-img" alt="..." /> */}
          <hr/> 
          <figure className="figure">
            <img
              src={newsImage}
              className="figure-img img-fluid rounded"
              alt="...."
            />
          </figure>
          <p className="news-body news-text">{news.body}</p>
        </div>
        <div className="col-md-3 ads-wrapper text-center">
          <div className="row">ads</div>
          <div className="row">ads</div>
        </div>
      </div>
    </div>
  ) : <div>404</div>;
}
