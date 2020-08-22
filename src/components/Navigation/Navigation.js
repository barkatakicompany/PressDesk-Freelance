import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar } from "react-bootstrap";

import "./Navigation.css";

export default function Navigation({ siteNavigationsObjects }) {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const today = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date =
      today.getDate() +
      " " +
      months[today.getMonth()] +
      ", " +
      today.getFullYear();

    setDate(date);
  }, [date]);

  return (
    <div className="nav-bar-wrapper">
      <Navbar bg="light" expand="lg" className="nav-bar-date-wrapper">
        <div className="container space-between">
          <div className="date-area">
            <p>{date}</p>
          </div>
          <div className="social-media-links">
            <a href="#instagram">
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className="font-awesome-icons"
              />
            </a>
            <a href="#facebook">
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                className="font-awesome-icons"
              />
            </a>
            <a href="#twitter">
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="font-awesome-icons"
              />
            </a>
            <a href="#youtube">
              <FontAwesomeIcon
                icon={["fab", "youtube"]}
                className="font-awesome-icons"
              />
            </a>
          </div>
        </div>
      </Navbar>
      <Navbar bg="light" expand="lg" className="nav-bar-brand-wrapper">
        <div className="container">
          <Navbar.Brand href="/" className="navbar-brand">
            PressDesk<span style={{ color: "#e92525" }}>.</span>in
          </Navbar.Brand>
          <div className="navbar-ads text-center">Advertisement</div>
        </div>
      </Navbar>
      <Navbar bg="light" expand="lg" className="site-navigations-wrapper">
        <div className="container site-navigations-content">
          <ul className="site-navigation-list">
            <li>
              <NavLink
                exact
                to="/"
                className="site-nav-link"
                activeClassName="site-nav-link-active"
              >
                Home
              </NavLink>
            </li>
            {siteNavigationsObjects.map((link, index) => (
              <li key={index}>
                <NavLink
                  exact
                  to={`/${link._id}`}
                  className="site-nav-link"
                  activeClassName="site-nav-link-active"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Navbar>
    </div>
  );
}
