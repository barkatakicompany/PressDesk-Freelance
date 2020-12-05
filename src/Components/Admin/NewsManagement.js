import React, { useState, useEffect } from "react";
import { getNews, getNewsByTopic, getTopics } from "./helper/helper";
import Base from "../Base";

export default function NewsManagement() {
  const [pageView, setPageView] = useState({
    topic: false,
    news: false,
  });
  const [topics, setTopics] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [news, setNews] = useState({
    _id: undefined,
    topic: "",
    tags: [],
    dateOfNews: "",
    editor: "",
    heading: "",
    body: "",
    youtube: "",
    facebook: "",
    instagram: "",
    linkedIn: "",
  });

  useEffect(() => {
    loadTopics();
  }, []);
  const loadTopics = () => {
    getTopics().then((res) => {
      if (res.status === 0) {
        alert(res.error);
      } else {
        setTopics(res);
      }
    });
  };

  const loadNewsByTopic = (topicId) => {
    getNewsByTopic(topicId).then((res) => {
      if (res.status === 0) {
        alert(res.error);
      } else {
        setAllNews(res);
      }
    });
  };
  const loadNews = (newsId) => {
    getNews(newsId).then((res) => {
      if (res.error) {
        alert(res.error);
      } else {
        setNews(res);
      }
    });
  };

  return (
    <Base>
      <div className="row container-fluid m-0 p-0 justify-content-center p-4 align-items-center">
        <div className="border p-4 rounded shadow col-9">
          <h1 className="text-center display-4">News Management</h1>
          {/* cate subcate */}
          <div className="row container-fluid m-0 p-0">
            <div className="input-group col-6 mb-4">
              <label>Topic</label>
              <div className="input-group">
                <select
                  className="custom-select"
                  onChange={(e) => {
                    setPageView({
                      ...pageView,
                      topic: e.target.value,
                      news: false,
                    });

                    setNews({
                      ...news,
                      _id: undefined,
                      topic: "",
                      tags: [],
                      dateOfNews: "",
                      editor: "",
                      heading: "",
                      body: "",
                      youtube: "",
                      facebook: "",
                      instagram: "",
                      linkedIn: "",
                    });
                    setAllNews([]);
                    loadNewsByTopic(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Select Category
                  </option>

                  {topics.map((c, i) => {
                    return (
                      <option key={i} value={c._id} className="">
                        {c.name}
                      </option>
                    );
                  })}
                </select>
                <div className="input-group-append">
                  <button
                    type="button"
                    className="input-group-text btn "
                    data-toggle="modal"
                    data-target="#topicModel"
                  >
                    Add New
                  </button>
                </div>
              </div>
            </div>
            <div className="input-group col-6 mb-4">{/* //subcategory */}</div>
          </div>
          {/* news add */}
          {pageView.topic && (
            <div className="row container-fluid m-0 p-0">
              <div className="input-group col-6 mb-4">
                <label>News</label>
                <div className="input-group">
                  <select
                    className="custom-select"
                    onChange={(e) => {
                      setPageView({
                        ...pageView,
                        news: true,
                      });
                      loadNews(e.target.value);
                    }}
                  >
                    <option disabled selected>
                      Select News
                    </option>

                    {allNews.map((p, i) => {
                      return (
                        <option key={i} value={p._id} className="">
                          {p.heading}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              {
                <div className=" col-2 mb-4">
                  <div
                    className="input-group"
                    style={{ position: "absolute", bottom: "0" }}
                  >
                    <div
                      className="btn btn-warning"
                      onClick={() => {
                        setPageView({
                          ...pageView,
                          news: true,
                        });
                        setNews({
                          ...news,
                          _id: undefined,
                          topic: "",
                          tags: [],
                          dateOfNews: "",
                          editor: "",
                          heading: "",
                          body: "",
                          youtube: "",
                          facebook: "",
                          instagram: "",
                          linkedIn: "",
                        });
                      }}
                    >
                      Add New
                    </div>
                  </div>
                </div>
              }
              {/* {news._id && (
                <div className="input-group col-2 mb-4">
                  <div
                    className="btn btn-warning"
                    style={{ position: "absolute", bottom: "0" }}
                    onClick={() => {
                      alert("Feature Not Added Yet");
                    }}
                  >
                    Delete
                  </div>
                </div>
              )} */}
            </div>
          )}
          {/* fields */}
          {pageView.news && (
            <div className="col">
              {/* heading */}
              <div className="input-group mb-4">
                <label>Heading</label>
                <div className="input-group">
                  <input
                    name="heading"
                    id="heading"
                    type="text"
                    className="form-control"
                    placeholder="Heading"
                    value={news.heading}
                    onChange={(e) => {
                      setNews({ ...news, heading: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="row container-fluid m-0 p-0">
                <div className="col p-0 pr-1">
                  {/* date */}
                  <div className="input-group mb-4">
                    <label>Date</label>
                    <div className="input-group">
                      <input
                        name="date"
                        id="date"
                        type="text"
                        className="form-control"
                        placeholder="Date"
                        value={news.dateOfNews}
                        onChange={(e) => {
                          setNews({ ...news, dateOfNews: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  {/* fb */}
                  <div className="input-group mb-4">
                    <label>Facebook </label>
                    <div className="input-group">
                      <input
                        name="facebook"
                        id="facebook"
                        type="text"
                        className="form-control"
                        placeholder="Facebook Link"
                        value={news.facebook}
                        onChange={(e) => {
                          setNews({ ...news, facebook: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  {/* ig */}
                  <div className="input-group mb-4">
                    <label>Instagram </label>
                    <div className="input-group">
                      <input
                        name="instagram"
                        id="isatagram"
                        type="text"
                        className="form-control"
                        placeholder="Instagram Link"
                        value={news.instagram}
                        onChange={(e) => {
                          setNews({ ...news, instagram: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col p-0 pl-1">
                  {/* editor */}
                  <div className="input-group mb-4">
                    <label>Editor</label>
                    <div className="input-group">
                      <input
                        name="editor"
                        id="ediotor"
                        type="text"
                        className="form-control"
                        placeholder="Editor"
                        value={news.editor}
                        onChange={(e) => {
                          setNews({ ...news, editor: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  {/* yt */}
                  <div className="input-group mb-4">
                    <label>Youtube </label>
                    <div className="input-group">
                      <input
                        name="youtube"
                        id="youtube"
                        type="text"
                        className="form-control"
                        placeholder="Youtube Link"
                        value={news.youtube}
                        onChange={(e) => {
                          setNews({ ...news, youtube: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  {/* li */}
                  <div className="input-group mb-4">
                    <label>LinkedIn </label>
                    <div className="input-group">
                      <input
                        name="linkedin"
                        id="linkedin"
                        type="text"
                        className="form-control"
                        placeholder="LinkedIn Link"
                        value={news.linkedIn}
                        onChange={(e) => {
                          setNews({ ...news, linkedIn: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Base>
  );
}
