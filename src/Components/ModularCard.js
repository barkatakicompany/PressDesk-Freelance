import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../backend";
import { getNewsBySubTopics, getNewsByTopics } from "../helper/coreapicalls";

const ModularCard = ({ mode, design, data }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadDefaultNews();
  }, []);
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
    mode === "home" &&
      getNewsByTopics(data._id).then((res) => {
        if (res.error) {
          //todo
        } else {
          setNews(res.slice(0, 6));
        }
      });
  };

  const loadNewsComp0 = () => {
    return (
      news &&
      news.map((n, i) => {
        return (
          <div key={i} className="">
            <div className="">
              <div className="row m-0 p-0">
                <div className="col m-0 p-0">
                  <div className="embed-responsive embed-responsive-1by1">
                    <img
                      src={`${API}/news/photo/${n._id}`}
                      className="embed-responsive-item"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-9 p-2 m-0">
                  <Link to={`/news/${n._id}`}>
                    <h5
                      className="blue-link-text"
                      style={{ fontSize: "1.4rem" }}
                    >
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
                  <p>
                    {n.shortDsc.slice(0, 90)}
                    <Link to={`/news/${n._id}`}>
                      {n.shortDsc.length > 90 ? "....." : null}
                    </Link>
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        );
      })
    );
  };

  const loadNewsComp1 = () => {
    return (
      <div className="row m-0 p-0">
        {news.map((n, i) => {
          return (
            <div className="col-6 p-2">
              <div className="card h-70 border-0">
                <div className="embed-responsive embed-responsive-1by1">
                  <img
                    src={`${API}/news/photo/${n._id}`}
                    className="embed-responsive-item"
                    alt="..."
                  />
                </div>
                <div className="card-body p-0 m-0 h-100">
                  {" "}
                  <>
                    <Link to={`/news/${n._id}`}>
                      <h5
                        className="blue-link-text"
                        style={{ fontSize: "1.4rem" }}
                      >
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
                    <p>
                      {n.shortDsc.slice(0, 90)}
                      <Link to={`/news/${n._id}`}>
                        {n.shortDsc.length > 90 ? "....." : null}
                      </Link>
                    </p>
                  </>
                </div>
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
          <div className="col-md-5 m-0 p-0 pr-3">
            <div className="col m-0 p-0">
              <img
                src={`${API}/news/photo/${news[0]._id}`}
                className="h-100 w-100"
                alt="..."
              />
            </div>
            <div className="col p-0 m-0">
              <Link to={`/news/${news[0]._id}`}>
                <h5 className="blue-link-text" style={{ fontSize: "1.4rem" }}>
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
              {/* <p>{news[0].shortDsc}</p> */}
              <p>
                {news[0].shortDsc.slice(0, 90)}
                <Link to={`/news/${news[0]._id}`}>
                  <span style={{fontSize: "1.4rem"}} className="blue-link-text">{news[0].shortDsc.length > 90 ? "...." : null}</span>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-7 m-0 p-0 pl-1">
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
                          <h5
                            className="blue-link-text"
                            style={{ fontSize: "1.4rem" }}
                          >
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
                        <p>
                          {n.shortDsc.slice(0, 90)}
                          <Link to={`/news/${n._id}`}>
                            {n.shortDsc.length > 90 ? "....." : null}
                          </Link>
                        </p>
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

  const loadNewsComp3 = () => {
    return (
      <div className="row m-0 p-0">
        {news.slice(0, 2).map((n, i) => {
          return (
            <div className="col-md-6 m-0 p-2" key={i}>
              <div className="col m-0 p-0">
                <div className="embed-responsive embed-responsive-1by1">
                  <img
                    src={`${API}/news/photo/${n._id}`}
                    className="embed-responsive-item"
                    // style={{ width: "100%", height: "" }}
                    alt="..."
                  />
                </div>
              </div>
              <div className="col p-0 m-0">
                <Link to={`/news/${n._id}`}>
                  <h5 className="blue-link-text" style={{ fontSize: "1.4rem" }}>
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
                <p>
                  {n.shortDsc.slice(0, 90)}
                  <Link to={`/news/${n._id}`}>
                    {n.shortDsc.length > 90 ? "....." : null}
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
        {news.slice(2, 4).map((n, i) => {
          return (
            <div key={i} className="col-md-6 m-0 p-2">
              <div className="">
                <div className="row m-0 p-0">
                  <div className="col m-0 p-0 d-flex align-items-center">
                    <div className="embed-responsive embed-responsive-1by1">
                      <img
                        src={`${API}/news/photo/${n._id}`}
                        className="embed-responsive-item"
                        // style={{ width: "100%", height: "" }}
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-9 p-4 m-0">
                    <Link to={`/news/${n._id}`}>
                      <h5
                        className="blue-link-text"
                        style={{ fontSize: "1.4rem" }}
                      >
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
                    <p>
                      {n.shortDsc.slice(0, 90)}
                      <Link to={`/news/${n._id}`}>
                        {n.shortDsc.length > 90 ? "....." : null}
                      </Link>
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
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
        {design == 3 && loadNewsComp3()}
      </div>
    );
  };

  const loadHorizontalCardComp = (data) => {
    return (
      data &&
      data.map((n, i) => {
        return (
          <div key={i} className="">
            <div className="">
              <div className="row m-0 p-0">
                <div className="col m-0 p-0">
                  <img
                    src={`${API}/news/photo/${n._id}`}
                    className="h-100 w-100"
                    alt="..."
                    style={{ objectFit: "scale-down" }}
                  />
                </div>
                <div className="col-9 p-4 m-0">
                  <Link to={`/news/${n._id}`}>
                    <h5
                      className="blue-link-text"
                      style={{ fontSize: "1.4rem" }}
                    >
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
      })
    );
  };
  return (
    <div>
      {mode === "home" && loadHomeCardComp(data)}
      {(mode === "topic" || mode === "stopic") && loadHorizontalCardComp(data)}
    </div>
  );
};
export default ModularCard;
