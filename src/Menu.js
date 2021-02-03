import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { isAuthenticated, signout } from "./Components/Auth/helper/authApis";
import { getNewsHeadings } from "./Components/helper/coreapicalls";

import {
  getSubtopics,
  getSubtopicSlug,
  getTopic,
  getTopicSlug,
} from "./Components/helper/utilities";

const Menu = ({ history }) => {
  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return " nav-link text-selected";
    } else {
      return " nav-link";
    }
  };

  const [marqueeText, setMarqueeText] = useState("");

  const topics = getTopic();

  // console.log(getTopic())
  // console.log(getTopicSlug("Life style"))

  useEffect(() => {
    getNewsHeadings().then((res) => {
      if (res.error) {
        alert(res.error);
      } else {
        setMarqueeText(
          res
            .map((e) => {
              return e.heading;
            })
            .join("   |   ")
        );
      }
    });
  }, []);

  // getSubtopicSlug("Assam", "Upper Assam");

  return (
    <div className="col p-0 sticky-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-lg mx-2 navbar-light d-flex justify-content-center">
        <Link className="navbar-brand ml-5" to="/">
          <img
            src={require("./static/images/logo.png")}
            alt="LOGO"
            style={{ width: "70px" }}
          />
          <span className="text-bold-big mt-4" style={{ fontSize: "1.5rem" }}>
            PressDesk.in
          </span>
        </Link>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav row m-0 p-0 align-items-right">
            {topics.map((topic, i) =>
              getSubtopics(topic).length === 0 ? (
                <li className="nav-item mr-3">
                  <Link
                    className={
                      "text-dark p-0" +
                      currentTab(history, "/" + getTopicSlug(topic))
                    }
                    to={"/" + getTopicSlug(topic)}
                  >
                    {topic}
                  </Link>
                </li>
              ) : (
                <li className="nav-item dropdown mr-3" key={i}>
                  <a
                    className="nav-link dropdown-toggle p-0"
                    href={"/" + getTopicSlug(topic)}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {topic}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {getSubtopics(topic).map((item, i) => (
                      <Link
                        className="dropdown-item"
                        to={
                          "/" +
                          getTopicSlug(topic) +
                          "?subtopic=" +
                          getSubtopicSlug(topic, item)
                        }
                        key={i}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </li>
              )
            )}
            {isAuthenticated() && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark p-0"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Admin
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className={
                      "dropdown-item" + currentTab(history, "/admin/news")
                    }
                    to="/admin/news"
                  >
                    Manage News
                  </Link>
                  <Link
                    className={
                      "dropdown-item" + currentTab(history, "/admin/gallery")
                    }
                    to="/admin/gallery"
                  >
                    Manage Gallery
                  </Link>
                  <div
                    onClick={() => {
                      signout(() => {
                        window.location.href = "/";
                      });
                    }}
                    className="nav-link dropdown-item"
                  >
                    Sign Out
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <marquee className="p-2 border">
        <big>{marqueeText}</big>
      </marquee>
    </div>
  );
};
export default withRouter(Menu);
