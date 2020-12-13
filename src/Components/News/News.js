import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Base from "../Base";
import { getNewsById, getNewsByTopicName } from "../helper/coreapicalls";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import "./style.css";
import { arrayRemove, sortTime } from "../helper/utilities";
import Cards from "../Cards/Cards";

const ShareWidget = ({ url }) => {
  return (
    <div className="share-widget">
      <EmailShareButton url={url} className="Demo__some-network__share-button">
        <EmailIcon size={32} round />
      </EmailShareButton>

      <FacebookShareButton
        url={url}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LinkedinShareButton
        url={url}
        className="Demo__some-network__share-button"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <PinterestShareButton
        url={url}
        className="Demo__some-network__share-button"
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <RedditShareButton url={url} className="Demo__some-network__share-button">
        <RedditIcon size={32} round />
      </RedditShareButton>

      <TelegramShareButton
        url={url}
        className="Demo__some-network__share-button"
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <TwitterShareButton
        url={url}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton
        url={url}
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default function News(props ) {
  const {
    params: { topicName, newsId },
  } = useRouteMatch();
  const [news, setNews] = useState([]);
  const [topicNews, setTopicNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadNews();
    loadTopicNews(topicName);
  }, [newsId, topicName]);

  const loadNews = () => {
    getNewsById(newsId).then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setNews(res);
        setIsLoaded(true);
      }
    });
  };
  console.log(news);
  const loadTopicNews = (topicName) => {
    getNewsByTopicName(topicName).then((res) => {
      if (res.error || res.length == 0) {
        setIsLoaded(false);
      } else {
        setTopicNews(res);
        setIsLoaded(true);
      }
    });
  };

  var date = String(news.updatedAt);
  date = String(new Date(date));

  var allNews,
    remainingNews = [];
  if (isLoaded) {
    allNews = sortTime(topicNews);
    allNews.forEach((item) => {
      if (item._id !== news._id) {
        remainingNews.push(item);
      }
    });
    remainingNews = remainingNews.slice(0, 4);
  }

  console.log(props.location);

  return (
    <Base>
      <div className="my-container">
        <div className="row">
          <div className="border p-4 col-8 m-3">
            <p className="text-muted">Last Updated: {date}</p>
            <h3 className="text-bold">{news.heading}</h3>
            <p className="">
              Written <span className="text-red">{news.editor}</span>
            </p>
            <div className="">
              <ShareWidget url={window.location.href} />
            </div>
            <hr />
            <img
              src={
                news.resources &&
                news.resources.find((n) => n.resType == "image")
                  ? news.resources.find((n) => n.resType == "image").link
                  : require("../../static/images/news.png")
              }
              className="img-fluid rounded w-100 mb-5"
              alt="...."
            />
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{
                __html: news.body,
              }}
            ></div>
          </div>
        </div>
        <div className="row">
          <h2 className="text-red text-bold-big m-3">Related News</h2>
          <Cards newsList={remainingNews} horizontal={false} topicName={topicName}/>
        </div>
      </div>
    </Base>
  );
}
