import React, { useState, useEffect } from "react";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
  addResource,
  getNews,
  getNewsByTopic,
  getTopics,
  uploadFile,
  addNews,
  updateNews,
  getSubTopicsByTopicId,
} from "./helper/helper";
import Base from "../Base";
import { API } from "../../backend";

export default function NewsManagement() {
  const [pageView, setPageView] = useState({
    topic: false,
    news: false,
  });
  const [topics, setTopics] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [allSubTopics, setAllSubTopics] = useState([]);
  const [news, setNews] = useState({
    _id: undefined,
    topic: "",
    subTopic: null,
    tags: [],
    dateOfNews: new Date().toLocaleString(),
    editor: "",
    heading: "",
    body: "",
    youtube: "",
    facebook: "",
    instagram: "",
    linkedIn: "",
    resources: [],
    files: [],
    images: [],
    videos: [],
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
  const loadSubTopics = (tId) => {
    getSubTopicsByTopicId(tId).then((res) => {
      if (res.error) {
        alert(res.error);
      } else {
        setAllSubTopics([]);
        setAllSubTopics(res);
      }
    });
  };
  const loadNewsByTopic = (topicId) => {
    getNewsByTopic(topicId).then((res) => {
      if (res.error) {
        alert(res.error);
      } else {
        setAllNews([]);
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
          {/* topic */}
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
                      topic: e.target.value,
                      subTopic: null,
                      tags: [],
                      dateOfNews: new Date(),
                      editor: "",
                      heading: "",
                      body: "",
                      youtube: "",
                      facebook: "",
                      instagram: "",
                      linkedIn: "",
                      resources: [],
                      files: [],
                      images: [],
                      videos: [],
                    });
                    setAllNews([]);
                    loadNewsByTopic(e.target.value);
                    loadSubTopics(e.target.value);
                  }}
                >
                  <option disabled selected>
                    Select Topic
                  </option>

                  {topics.map((c, i) => {
                    return (
                      <option key={i} value={c._id} className="">
                        {c.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
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
                          subTopic: null,
                          tags: [],
                          dateOfNews: new Date(),
                          editor: "",
                          heading: "",
                          body: "",
                          youtube: "",
                          facebook: "",
                          instagram: "",
                          linkedIn: "",
                          resources: [],
                          files: [],
                          images: [],
                          videos: [],
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



              {/* body */}
              <div className="input-group mb-4">
                <label>Body</label>
                <div className="input-group">

                    <CKEditor 
                    editor={ClassicEditor}
                    data={news.body}
                    onChange={(event, editor) => {
                      const data = editor.getData()
                      setNews({...news, body: data})
                    }}
                    />

                  {/* <textarea
                    style={{ minHeight: "30rem" }}
                    name="body"
                    id="body"
                    type="text"
                    className="form-control"
                    placeholder="Body"
                    value={news.body}
                    onChange={(e) => {
                      setNews({ ...news, body: e.target.value });
                    }}
                  ></textarea> */}
                </div>
              </div>





              {/* Resources */}
              <div className="p-0 mb-4 col">
                <label>Resources</label>
                <div
                  className="btn"
                  data-toggle="modal"
                  data-target="#addResModal"
                >
                  <svg
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 16 16"
                    className="bi bi-plus border rounded-circle p-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </div>
                <div className="mx-4 ">
                  {news.resources &&
                    news.resources.map((t, i) => {
                      return (
                        <div
                          className="row align-items-center m-1 p-1 px-2 border-bottom border-light"
                          key={i}
                        >
                          <div
                            className="col-4 p-0 "
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {t._id}
                          </div>
                          <div
                            className="col-4 p-0 "
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {t.link}
                          </div>
                          <div
                            className="col-3 p-0 "
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {t.resType}
                          </div>
                          <div
                            className="col btn text-center p-0 m-0"
                            style={{ height: "2rem" }}
                            onClick={() => {
                              var x = news.resources;
                              x.splice(i, 1);
                              setNews({
                                ...news,
                                resources: x,
                              });
                            }}
                          >
                            <svg
                              width="2em"
                              height="2em"
                              viewBox="0 0 16 16"
                              className="bi bi-x  h-100 w-100"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </div>
                        </div>
                      );
                    })}
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
                        value={
                          new Date(news.dateOfNews).toISOString().split("T")[0]
                        }
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
                  {/* tags */}
                  <div className="input-group mb-4">
                    <label>Tags</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="tag"
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            if (e.target.value.trim() === "") {
                              return;
                            }
                            var x = news.tags;
                            x.push(e.target.value);
                            setNews({ ...news, tags: x });
                            e.target.value = "";
                          }
                        }}
                        onBlur={(e) => {
                          e.preventDefault();
                          if (e.target.value.trim() === "") {
                            return;
                          }
                          var x = news.tags;
                          x.push(e.target.value);
                          setNews({ ...news, tags: x });
                          e.target.value = "";
                        }}
                      />
                    </div>
                    <div className="row mx-4 ">
                      {news.tags &&
                        news.tags.map((t, i) => {
                          return (
                            <div
                              className="row rounded border align-items-center m-1 p-1 px-2"
                              key={i}
                            >
                              <div
                                className="p"
                                style={{
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {t}
                              </div>
                              <div
                                className="btn text-center p-0 m-0"
                                onClick={() => {
                                  var x = news.tags;
                                  x.splice(i, 1);
                                  setNews({
                                    ...news,
                                    tags: x,
                                  });
                                }}
                              >
                                <svg
                                  width="2em"
                                  height="2em"
                                  viewBox="0 0 16 16"
                                  className="bi bi-x  h-100 w-100"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                  />
                                </svg>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="col p-0 pl-1">
                  {/* subcategory */}
                  {allSubTopics.length>0 && <div className="input-group mb-4">
                    <label>Sub Topic</label>
                    <div className="input-group">
                      <select
                        className="custom-select"
                        onChange={(e) => {
                          setNews({
                            ...news,
                            subTopic: e.target.value,
                          });
                        }}
                      >
                        <option value="null">None</option>

                        {news &&
                          allSubTopics &&
                          allSubTopics.map((c, i) => {
                            var selected = false;
                            if(news.subTopic)   {
                            selected = c._id === news.subTopic[0]._id;
                            }
                            return (
                              <option
                                key={i}
                                value={c._id}
                                selected={selected}
                                className=""
                              >
                                {c.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>}
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
              <div
                className="btn col-4 border"
                onClick={(e) => {
                  if (news.heading.trim() === "") {
                    alert("Please enter a heading.");
                    return;
                  }
                  if (!news.topic) {
                    alert("Please select a topic.");
                    return;
                  }
                  if (!new Date(news.dateOfNews)) {
                    alert("Please enter a valid date.");
                    return;
                  }
                  if (!news.editor) {
                    alert("Please enter a valid date.");
                    return;
                  }
                  if (!news.body) {
                    alert("Please enter a valid date.");
                    return;
                  }
                  if (news.tags.length === 0) {
                    alert("Please add some tags.");
                    return;
                  }
                  if (!news._id) {
                    delete news._id;
                    addNews(news).then((res) => {
                      if (res.error) {
                        alert(res.error);
                      } else {
                        //todo
                        setNews(res);
                        alert("News added successfully");
                      }
                    });
                  } else {
                    updateNews(news).then((res) => {
                      if (res.error) {
                        alert(res.error);
                      } else {
                        setNews(res);
                        alert("News updated successfully");
                        document.location.reload();
                      }
                    });
                  }
                }}
              >
                {news._id ? "Update" : "Add"}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="modals">
        <div
          className="modal fade"
          id="addResModal"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-labelledby="addResourceModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addResourceModalLabel">
                  Add New Resource
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    document.getElementById("resLink").value = "";
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="input-group mb-4">
                  <div className="input-group">
                    <select
                      className="custom-select"
                      id="resType"
                      onChange={(e) => {
                        if (e.target.value == "image") {
                          document
                            .getElementById("fileUpload")
                            .classList.remove("d-none");
                        } else {
                          document
                            .getElementById("fileUpload")
                            .classList.add("d-none");
                        }
                      }}
                    >
                      <option disabled selected>
                        Select Resource Type
                      </option>
                      <option value="image">Image</option>
                      <option value="youtube_video">Youtube Video</option>
                    </select>
                  </div>
                </div>
                {/* link */}
                <div className="input-group mb-4">
                  <input
                    id="resLink"
                    type="text"
                    className="form-control"
                    placeholder="Resource Link"
                  />
                </div>
                {/* files */}
                <div id="fileUpload" className="col m-0 p-0 mb-4 d-none">
                  <div className="input-group">
                    <label>Files</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          accept="image/png,image/gif,image/jpeg"
                          id="fileInput"
                          onChange={(e) => {
                            if (!e.target.files[0]) {
                              return;
                            }
                            if (e.target.files[0].size > 2097152) {
                              alert("File size cannot be more than 2mb.");
                              return;
                            }
                            document.getElementById("fileStatus").innerText =
                              "Uploading File...";
                            document.getElementById("fileLabel").innerText =
                              e.target.files[0].name;
                            var formData = new FormData();
                            formData.set("file", e.target.files[0]);
                            formData.set("for", "News");
                            uploadFile(formData).then((res) => {
                              if (res.error) {
                                alert(res.error);
                              } else {
                                document.getElementById(
                                  "fileStatus"
                                ).innerText = "File Uploaded Successfully";
                                document.getElementById("resLink").value =
                                  API + "filesync?fileId=" + res._id;
                                document
                                  .getElementById("resLink")
                                  .classList.add("d-none");
                              }
                            });
                          }}
                        />
                        <label
                          className="custom-file-label"
                          style={{ overflow: "hidden" }}
                          id="fileLabel"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                    <p id="fileStatus"> </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {/* <button
                  id="resModalCLose"
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    var resource = {
                      link: document.getElementById("resLink").value,
                      resType: document.getElementById("resType").value.trim(),
                    };
                    if (resource.link === "") {
                      alert("Enter Valid Resource");
                      return;
                    }
                    addResource(resource).then((res) => {
                      if (res.error) {
                        alert(res.error);
                        return;
                      }
                      alert("Resource Added.");
                      document.getElementById("resLink").value = "";
                      var reso = news.resources;
                      reso.push(res);
                      setNews({ ...news, resources: reso });
                    });
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
