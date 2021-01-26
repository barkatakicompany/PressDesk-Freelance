import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { isAuthenticated, signout } from "./Components/Auth/helper/authApis";
import { getNewsHeadings } from "./Components/helper/coreapicalls";

const Menu = ({ history }) => {

  const topics = [
    {
      _id: "5f53b8655f93960f3df852b1",
      name: "Assam",
    },
    {
      _id: "5f53b9035f93960f3df852b8",
      name: "National",
    },
    {
      _id: "5f53b94f5f93960f3df852bd",
      name: "International",
    },
    {
      _id: "5f53b9d95f93960f3df852c7",
      name: "Sports",
    },
    {
      _id: "5fc89a79f2a72f067186b3fe",
      name: "Northeast",
    },
    {
      _id: "5fcde94b0835bb064a0094f7",
      name: "Opinion",
    },
    {
      _id: "5fcde9750835bb064a0094f8",
      name: "Business",
    },
    {
      _id: "5fcde97c0835bb064a0094f9",
      name: "Politics",
    },
  ];


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
