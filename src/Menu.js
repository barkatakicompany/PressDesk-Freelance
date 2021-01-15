import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { isAuthenticated, signout } from "./Components/Auth/helper/authApis";
import { getNewsHeadings } from "./Components/helper/coreapicalls";

const Menu = ({ history }) => {
  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return " nav-link active text-selected";
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
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Assam")}
                to="/Assam"
              >
                Assam
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Northeast")}
                to="/Northeast"
              >
                Northeast
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/National")}
                to="/National"
              >
                National
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/International")}
                to="/International"
              >
                International
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Opinion")}
                to="/Opinion"
              >
                Opinion
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Business")}
                to="/Business"
              >
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Politics")}
                to="/Politics"
              >
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Sports")}
                to="/Sports"
              >
                Sports
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Gallery")}
                to="/Gallery"
              >
                Gallery
              </Link>
  </li>*/}
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Archives")}
                to="/Archives"
              >
                Archives
              </Link>
            </li>
            {isAuthenticated() && (
              <li className="nav-item dropdown nav-link ">
                <div
                  className="dropdown-toggle nav-link text-dark p-0"
                  data-toggle="dropdown"
                >
                  Admin
                </div>
                <div className="dropdown-menu">
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
