import React from "react";
import { API } from "../../backend";
import { addResource, uploadFile } from "./helper/helper";

export default function ResourceModal({ setNews, news, newsData }) {
  return (
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
                              document.getElementById("fileStatus").innerText =
                                "File Uploaded Successfully";
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
                  var newResLink = "";
                  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                  var match = document
                    .getElementById("resLink")
                    .value.match(regExp);
                  if (!document.getElementById("resLink").value) {
                    alert("Link cannot be empty.");
                    return;
                  }
                  if (
                    document.getElementById("resType").value === "youtube_video"
                  ) {
                    if (match && match[2].length == 11) {
                      newResLink = match[2];
                    } else {
                      alert("Enter valid youtube url.");
                      return;
                    }
                  } else {
                    newResLink = document.getElementById("resLink").value;
                  }
                  var resource = {
                    link: newResLink,
                    resType: document.getElementById("resType").value,
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
  );
}
