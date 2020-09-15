import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { ShareWidget } from "../components";

import { AdsType0, AdsType1, SingleNews } from "../components/shared";

export default function SearchNews(props) {
  const {
    params: { newsId },
  } = useRouteMatch();

  const [newsImage, setNewsImage] = useState({});
  const [news, setNews] = useState({});
  const [subTopicId, setSubTopicId] = useState("");

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/news/${newsId}`)
      .then((res) => res.json())
      .then((result) => {
        setNews(result);
        var subTopicId = result.subTopic[0];
        setSubTopicId(subTopicId);
      });
    fetch(`http://3.133.84.12:8004/api/news/photo/${newsId}`)
      .then((res) => res.url)
      .then((result) => {
        setNewsImage(result);
      });
  }, [newsId]);

  var updatedAtDate = new Date(news.updatedAt);

  console.log(subTopicId);

  console.log(news);

  return (
    <div className="container-fluid">
      <br />
      <AdsType0 />
      <br />
      <div className="row mx-md-5 px-md-5">
        <div className="col-md-8 col-sm-12 my-3">
          <div className="news-container">
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
            <img
              src={newsImage}
              className="img-fluid rounded w-100"
              alt="...."
            />
            <p className="news-body news-text">{news.body}</p>
          </div>
          <br />
          <div>
            <AdsType1 />
          </div>
        </div>
        <div className="col-md col-sm-12 ads-wrapper ml-3 my-3">
          <AdsType1 />
        </div>
      </div>
      <AdsType0 />
      <br />
    </div>
  );
}
