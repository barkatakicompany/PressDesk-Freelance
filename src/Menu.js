import React from "react";
import { withRouter, Link } from "react-router-dom";
import { isAuthenticated, signout } from "./Components/Auth/helper/authApis";

const Menu = ({ history }) => {
  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return " nav-link active text-selected";
    } else {
      return " nav-link";
    }
  };
  const marqueeText =
    "All girls’ bike rally in Guwahati to mark World AIDS Day 2020 | Sukapha Divas celebrated across the State | RSS chief Mohan Bhagwat in Guwahati, likely to meet Assam Chief Minister | Cinema Halls Begin to Reopen Partially in Guwahati | Gauhati High Court Directs Assam Govt to Take Action Against Sale of Pan Masala";

  return (
    <div className="col p-0 ">
      <nav className="navbar navbar-expand-lg my-container">
        <Link className="navbar-brand mr-5" to="/">
          <img src="./logo.png" alt="LOGO" style={{ width: "70px" }} />
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
          <ul className="nav row m-0 p-0 align-items-center">
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
                Business/Economy
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
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Gallery")}
                to="/Gallery"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"navbar-nav" + currentTab(history, "/Archives")}
                to="/Archives"
              >
                Archives
              </Link>
            </li>
            {isAuthenticated() && (
              <li className="dropdown nav-link ">
                <a
                  className="dropdown-toggle nav-link text-dark"
                  data-toggle="dropdown"
                >
                  Admin
                </a>
                <div className="dropdown-menu">
                  <Link
                    className={"" + currentTab(history, "/newsManagement")}
                    to="/newsManagement"
                  >
                    News Management
                  </Link>
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
