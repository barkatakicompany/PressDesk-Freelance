import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Base from "../Base";
import BaseFrame from "../Components/BaseFrame";
import {
  getNews,
  getNewsBySubTopics,
  searchNews,
} from "../helper/coreapicalls";

import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";

import "react-sharingbuttons/dist/main.css";
import { API } from "../backend";
import Advertisement from "../Components/Advertisement";

const ShareWidget = ({ url }) => {
  return (
    <>
      <Facebook url={url} />
      <Twitter url={url} />
    </>
  );
};

//load here
export default function News(props) {
  const {
    params: { newsSlug },
  } = useRouteMatch();

  const [news, setNews] = useState({
    subTopic: [],
    tags: [],
    _id: "",
    dateOfNews: "",
    heading: "",
    shortDsc: "",
    editor: "",
    body: "",
    createdBy: "",
    slug: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  });
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    let allRelatedNews = [];

    loadNews();
    news.tags.forEach(async (tag) => {
      await searchNews({ keyword: tag, type: "tags" }).then((res) => {
        if (res.error) {
          // todo
          console.log(res.error);
        } else {
          res.forEach(async (n) => {
            await allRelatedNews.push(n);
          });
        }
      });
    });

    setRelatedNews(allRelatedNews);
  }, [newsSlug]);

  const loadNews = () => {
    getNews(newsSlug).then((res) => {
      if (res.error) {
        // todo
        console.log(res.error);
      } else {
        setNews(res[0]);
      }
    });
  };

  console.log(relatedNews);

  const RelatedNews = (news) => {
    console.log(news);
    return <li className="list-group-item">a</li>;
  };

  return news ? (
    <Base>
      <BaseFrame>
        <div className="row">
          <div className="border p-4">
            <p>Last Updated: {news.updatedAt}</p>
            <h3>{news.heading}</h3>
            <p>{news.shortDsc}</p>
            <p className="">
              Written By <span className="news-editor">{news.editor}</span>
            </p>
            <div className="">
              <ShareWidget url={window.location.href} />
            </div>
            <hr />
            <img
              src={`${API}/news/photo/${news._id}`}
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
        <div className="row mt-3">
          <div className="col-6 pl-0">
            <div className="card">
              <div
                className="card-header"
                style={{
                  backgroundColor: "#e92525",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                }}
              >
                Related News
              </div>
              <ul className="list-group list-group-flush">
                {/* {news.tags.map((tag) => {
                  searchNews({ keyword: tag, type: "tags" }).then((res) => {
                    if (res.error) {
                      // todo
                    } else {
                      res.map(
                        (n, i) => <RelatedNews news={n} />
                        // <li className="list-group-item" key={i}>
                        //   {n.heading} 
                        //   a
                        // </li>
                      );
                    }
                  });
                })} */}
              </ul>
            </div>
          </div>
          <div className="col-6 pr-0">
            <Advertisement type={2} speed={4000} />
          </div>
        </div>
      </BaseFrame>{" "}
    </Base>
  ) : null;
}
