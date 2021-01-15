import React, { useEffect, useState } from "react";
import Base from "../Base";
import {
  addResource,
  getAllAlbums,
  uploadFile,
  addAlbum,
  updateAlbum,
} from "./helper/helper";

export default function AlbumManagement() {
  const [album, setAlbum] = useState({
    _id: null,
    view: true,
    name: "",
    tags: [],
    resources: [],
  });
  const [allAlbums, setAllAlbums] = useState([]);
  const [showFields, setShowFields] = useState(false);
  useEffect(() => {
    getAllAlbums().then((res) => {
      if (res.error) {
        alert(res.error);
      } else {
        setAllAlbums(res);
      }
    });
  }, []);
  return (
    <Base>
      <div className="row container-fluid m-0 p-0 justify-content-center p-4 align-items-center">
        <div className="border p-4 rounded shadow col-9">
          <h1 className="text-center display-4">Gallery Management</h1>
          {/* all albums */}
          <div className="row container-fluid m-0 p-0">
            <div className="input-group col-6 mb-4">
              <label>Album</label>
              <div className="input-group">
                <select
                  className="custom-select"
                  onChange={(e) => {
                    setAlbum(allAlbums.find((x) => x._id == e.target.value));
                    setShowFields(true);
                  }}
                >
                  <option disabled selected>
                    Select Album
                  </option>
                  {allAlbums &&
                    allAlbums.map((a, i) => {
                      return (
                        <option key={i} value={a._id} className="">
                          {a.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className=" col-2 mb-4">
              <div
                className="input-group"
                style={{ position: "absolute", bottom: "0" }}
              >
                <div
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowFields(true);
                  }}
                >
                  Add New
                </div>
              </div>
            </div>
          </div>
          {/* fields */}
          {showFields && (
            <div className="row container-fluid m-0 p-0">
              <div className="col">
                {/* name */}
                <div className="input-group mb-4">
                  <label>Name</label>
                  <div className="input-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={album.name}
                      onChange={(e) => {
                        setAlbum({ ...album, name: e.target.value });
                      }}
                    />
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
                    {album.resources &&
                      album.resources.map((t, i) => {
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
                                var x = album.resources;
                                x.splice(i, 1);
                                setAlbum({
                                  ...album,
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
                          var x = album.tags;
                          x.push(e.target.value);
                          setAlbum({ ...album, tags: x });
                          e.target.value = "";
                        }
                      }}
                      onBlur={(e) => {
                        e.preventDefault();
                        if (e.target.value.trim() === "") {
                          return;
                        }
                        var x = album.tags;
                        x.push(e.target.value);
                        setAlbum({ ...album, tags: x });
                        e.target.value = "";
                      }}
                    />
                  </div>
                  <div className="row mx-4 ">
                    {album.tags &&
                      album.tags.map((t, i) => {
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
                                var x = album.tags;
                                x.splice(i, 1);
                                setAlbum({
                                  ...album,
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
                <div
                  className="btn col-4 border"
                  onClick={(e) => {
                    if (album.name.trim() === "") {
                      alert("Please enter a name.");
                      return;
                    }

                    if (!album._id) {
                      delete album._id;

                      addAlbum(album).then((res) => {
                        if (res.error) {
                          alert(res.error);
                        } else {
                          //todo
                          setAlbum(res);
                          alert("Album created successfully");
                        }
                      });
                    } else {
                      updateAlbum(album).then((res) => {
                        if (res.error) {
                          alert(res.error);
                        } else {
                          setAlbum(res);
                          alert("Album updated successfully");
                          document.location.reload();
                        }
                      });
                    }
                  }}
                >
                  {album._id ? "Update" : "Add"}
                </div>
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
                                  "http://" +
                                  window.location.hostname.trim() +
                                  ":8006/api/filesync?fileId=" +
                                  res._id;
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
                      var reso = album.resources;
                      reso.push(res);
                      setAlbum({ ...album, resources: reso });
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
