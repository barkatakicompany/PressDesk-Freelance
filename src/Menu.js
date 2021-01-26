import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { isAuthenticated, signout } from "./Components/Auth/helper/authApis";
import { getNewsHeadings } from "./Components/helper/coreapicalls";

import { getSubtopics, getSubtopicSlug } from "./Components/helper/utilities";

const Menu = ({ history }) => {
  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return " nav-link text-selected";
    } else {
      return " nav-link";
    }
  };

  const [marqueeText, setMarqueeText] = useState("");

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
    <div className="col p-0 ">
      <nav className="navbar navbar-expand-lg my-container navbar-light">
        <Link className="navbar-brand mr-5" to="/">
          <img
            src={require("./static/images/logo.png")}
            alt="LOGO"
            style={{ width: "70px" }}
          />
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
            <li className="nav-item dropdown mr-3">
              <a
                className="nav-link dropdown-toggle p-0"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Assam
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {getSubtopics("Assam").map((item, i) => (
                  <Link
                    className="dropdown-item"
                    to={"/" + getSubtopicSlug("Assam", item)}
                    key={i}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item dropdown mr-3">
              <a
                className="nav-link dropdown-toggle p-0"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Northeast
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {getSubtopics("Northeast").map((item, i) => (
                  <Link
                    className="dropdown-item"
                    to={"/" + getSubtopicSlug("Northeast", item)}
                    key={i}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </li>
            {getSubtopics("National").length === 0 ? (
              <li className="nav-item mr-3">
                <Link
                  className={"text-dark p-0" + currentTab(history, "/National")}
                  to="/National"
                >
                  National
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown mr-3">
                <a
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  National
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {getSubtopics("National").map((item, i) => (
                    <Link
                      className="dropdown-item"
                      to={"/" + getSubtopicSlug("National", item)}
                      key={i}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </li>
            )}
            {getSubtopics("International").length === 0 ? (
              <li className="nav-item mr-3">
                <Link
                  className={
                    "text-dark p-0" + currentTab(history, "/International")
                  }
                  to="/International"
                >
                  International
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown mr-3">
                <a
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  International
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {getSubtopics("International").map((item, i) => (
                    <Link
                      className="dropdown-item"
                      to={"/" + getSubtopicSlug("International", item)}
                      key={i}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </li>
            )}
            {getSubtopics("Opinion").length === 0 ? (
              <li className="nav-item mr-3">
                <Link
                  className={"text-dark p-0" + currentTab(history, "/Opinion")}
                  to="/Opinion"
                >
                  Opinion
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown mr-3">
                <a
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Opinion
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {getSubtopics("Opinion").map((item, i) => (
                    <Link
                      className="dropdown-item"
                      to={"/" + getSubtopicSlug("Opinion", item)}
                      key={i}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </li>
            )}
            {getSubtopics("Business").length === 0 ? (
              <li className="nav-item mr-3">
                <Link
                  className={"text-dark p-0" + currentTab(history, "/Business")}
                  to="/Business"
                >
                  Business
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown mr-3">
                <a
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Business
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {getSubtopics("Business").map((item, i) => (
                    <Link
                      className="dropdown-item"
                      to={"/" + getSubtopicSlug("Business", item)}
                      key={i}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </li>
            )}
            {getSubtopics("Politics").length === 0 ? (
              <li className="nav-item mr-3">
                <Link
                  className={"text-dark p-0" + currentTab(history, "/Politics")}
                  to="/Politics"
                >
                  Politics
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown mr-3">
                <a
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Politics
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {getSubtopics("Politics").map((item, i) => (
                    <Link
                      className="dropdown-item"
                      to={"/" + getSubtopicSlug("Politics", item)}
                      key={i}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </li>
            )}
            {getSubtopics("Sports").length === 0 ? (
              <li className="nav-item mr-3">
                <Link
                  className={"text-dark p-0" + currentTab(history, "/Sports")}
                  to="/Sports"
                >
                  Sports
                </Link>
              </li>
            ) : (
              <li className="nav-item dropdown mr-3">
                <a
                  className="nav-link dropdown-toggle p-0"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sports
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {getSubtopics("Sports").map((item, i) => (
                    <Link
                      className="dropdown-item"
                      to={"/" + getSubtopicSlug("Sports", item)}
                      key={i}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </li>
            )}
            {/* <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Gallery")}
                to="/Gallery"
              >
                Gallery
              </Link>
  </li>*/}
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
                {/* <div
                  className="dropdown-toggle nav-link text-dark p-0"
                  data-toggle="dropdown"
                >
                  Admin
                </div> */}
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className={"" + currentTab(history, "/newsManagement")}
                    to="/newsManagement"
                  >
                    News Management
                  </Link>
                  {/* <Link
                    className={"" + currentTab(history, "/galleryManagement")}
                    to="/galleryManagement"
                  >
                    Gallery Management
                  </Link> */}
                  <div
                    onClick={() => {
                      signout(() => {
                        window.location.href = "/";
                      });
                    }}
                    className="nav-link"
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
