import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../backend";
import { getNewsBySubTopics, getNewsByTopics } from "./helper/coreapicalls";

const ModularCard = ({
  mode = "home",
  design = Math.floor(Math.random() * Math.floor(3)),
  // design = 2,
  topic,
}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadDefaultNews();
  }, []);
  const news1 = news.shift();
  const loadNews = (e, id) => {
    e.preventDefault();
    getNewsBySubTopics(id, 4).then((res) => {
      if (res.error) {
        //todo
        console.log(res.error);
      } else {
        setNews(res);
      }
    });
  };
  const loadDefaultNews = () => {
    getNewsByTopics(topic._id).then((res) => {
      if (res.error) {
        //todo
      } else {
        setNews(res.slice(0, 6));
      }
    });
  };

  const loadNewsComp0 = () => {
    return news.map((n, i) => {
      return (
        <div key={i} className="">
          <div className="">
            <div className="row m-0 p-0">
              <div className="col m-0 p-0">
                <img
                  src={`${API}/news/photo/${n._id}`}
                  className="h-100 w-100"
                  alt="..."
                />
              </div>
              <div className="col-9 p-4 m-0">
                <Link to={`/news/${n._id}`}>
                  <h5 className="" style={{ fontSize: "1.4rem" }}>
                    {n.heading}
                  </h5>
                </Link>
                <span>
                  <small>{n.editor}</small>
                  {" | "}
                  <small>
                    {new Date(n.createdAt).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </small>
                </span>
                <p>{n.shortDsc}</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      );
    });
  };

  const loadNewsComp1 = () => {
    return (
      <div className="row m-0 p-0">
        {news.map((n, i) => {
          return (
            <div className="col-md-6 m-0 p-2" key={i}>
              <div className="col m-0 p-0">
                <img
                  src={`${API}/news/photo/${n._id}`}
                  className="h-100 w-100"
                  alt="..."
                />
              </div>
              <div className="col p-0 m-0">
                <Link to={`/news/${n._id}`}>
                  <h5 className="" style={{ fontSize: "1.4rem" }}>
                    {n.heading}
                  </h5>
                </Link>
                <span>
                  <small>{n.editor}</small>
                  {" | "}
                  <small>
                    {new Date(n.createdAt).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </small>
                </span>
                <p>{n.shortDsc}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const loadNewsComp2 = () => {
    return (
      news[0] && (
        <div className="row m-0 p-0">
          <div className="col-md-6 m-0 p-0 pr-1">
            <div className="col m-0 p-0">
              <img
                src={`${API}/news/photo/${news[0]._id}`}
                className="h-100 w-100"
                alt="..."
              />
            </div>
            <div className="col p-0 m-0">
              <Link to={`/news/${news[0]._id}`}>
                <h5 className="" style={{ fontSize: "1.4rem" }}>
                  {news[0].heading}
                </h5>
              </Link>
              <span>
                <small>{news[0].editor}</small>
                {" | "}
                <small>
                  {new Date(news[0].createdAt).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </small>
              </span>
              <p>{news[0].shortDsc}</p>
            </div>
          </div>
          <div className="col-md-6 m-0 p-0 pl-1">
            {news.map((n, i) => {
              if (i === 0) {
                return "";
              }
              return (
                <div key={i} className="">
                  <div className="">
                    <div className="row m-0 p-0 align-items-center">
                      <div className="col m-0 p-0 ">
                        <div className="embed-responsive embed-responsive-1by1">
                          <img
                            src={`${API}/news/photo/${n._id}`}
                            className="embed-responsive-item"
                            // style={{ width: "100%", height: "" }}
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col-9 p-2 m-0">
                        <Link to={`/news/${n._id}`}>
                          <h5 className="" style={{ fontSize: "1.4rem" }}>
                            {n.heading}
                          </h5>
                        </Link>
                        <span>
                          <small>{n.editor}</small>
                          {" | "}
                          <small>
                            {new Date(n.createdAt).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </small>
                        </span>
                        <p>{n.shortDsc}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )
    );
  };
  const loadHomeCardComp = (topic) => {
    return (
      <div className="col-sm-9 border border-grey p-4 m-0">
        <div className="row justify-content-between align-items-center m-0 p-0">
          <h4 className="pl-2">{topic.name}</h4>
          <ul className="nav row justify-content-center m-0 p-0">
            {topic.subTopics &&
              topic.subTopics.map((st, i) => {
                return (
                  <li key={i} className="nav-item">
                    <button
                      className="btn"
                      onClick={(e) => {
                        loadNews(e, st._id);
                      }}
                    >
                      {st.name}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        {design == 0 && loadNewsComp0()}
        {design == 1 && loadNewsComp1()}
        {design == 2 && loadNewsComp2()}
      </div>
    );
  };

  return <div>{mode === "home" && loadHomeCardComp(topic)}</div>;
};
export default ModularCard;
