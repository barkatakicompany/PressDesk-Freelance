import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Base from "../Base";
import { getNewsById } from "../helper/coreapicalls";

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

export default function News() {
  const {
    params: { topicName, newsId },
  } = useRouteMatch();
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadNews();
  }, [newsId]);

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

  var date = String(news.updatedAt)
  date = String(new Date(date))

  return (
    <Base>
      <div className="my-container">
        <div className="row">
          <div className="border p-4 col-8">
            <p className="text-muted">Last Updated: {date}</p>
            <h3>{news.heading}</h3>
            <p>{news.shortDsc}</p>
            <p className="">
              Written <span className="news-editor">{news.editor}</span>
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
              className=""
              dangerouslySetInnerHTML={{
                __html: news.body,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Base>
  );
}
