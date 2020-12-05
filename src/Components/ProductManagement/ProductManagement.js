import React, { useState, useEffect } from "react";
import { getNews, getNewsByTopic, getTopics } from "../Admin/helper/helper";
import Base from "../Base";
import { uploadFile } from "./helper/apiCalls";

export default function ProductManagement() {
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
      if (res.error) {
        alert(res.error);
      } else {
        setTopics(res);
      }
    });
  };

  const loadNewsByTopic = (topicId) => {
    getNewsByTopic(topicId).then((res) => {
      if (res.error) {
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
              {news._id && (
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
              )}
            </div>
          )}
        </div>
      </div>
    </Base>
  );
}
