import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar } from "react-bootstrap";

import "./Navigation.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    var today = new Date();

    var months = [
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

    var date =
      today.getDate() +
      " " +
      months[today.getMonth()] +
      ", " +
      today.getFullYear();

    this.state = {
      currentDate: date,
      navLinks: this.props.siteNavigations,
    };
  }

  render() {
    return (
      <div className="nav-bar-wrapper">
        <Navbar bg="light" expand="lg" className="nav-bar-date-wrapper">
          <div className="container space-between">
            <div className="date-area">
              <p>{this.state.currentDate}</p>
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
              {this.state.navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    exact
                    to={link.path}
                    className="site-nav-link"
                    activeClassName="site-nav-link-active"
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Navbar>
      </div>
    );
  }
}
