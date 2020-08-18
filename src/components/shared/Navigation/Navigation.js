import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      navLinks: this.props.siteNavigations
    };
  }

  render() {
    return (
      <div className="nav-bar-wrapper">
        <Navbar bg="light" expand="lg" className="nav-bar-date">
          <div className="container space-between">
            <div className="date-area">
              <p>{this.state.currentDate}</p>
            </div>
            <div className="social-media-links">
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className="font-awesome-icons"
              />
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                className="font-awesome-icons"
              />
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="font-awesome-icons"
              />
              <FontAwesomeIcon
                icon={["fab", "youtube"]}
                className="font-awesome-icons"
              />
            </div>
          </div>
        </Navbar>
        <Navbar bg="light" expand="lg" className="nav-bar-brand">
          <div className="container">
            <Navbar.Brand href="#home" className="navbar-brand">
              PressDesk.in
            </Navbar.Brand>
            <div className="ads">Advertisement</div>
          </div>
        </Navbar>
        <Navbar bg="light" expand="lg" className="site-navigations-wrapper">
          <div className="container site-navigations">
            <ul>
              { this.state.navLinks.map((link, index) => (
                <li key={index}>
                  {link.title}
                </li>
              ))}
            </ul>
          </div>
        </Navbar>
      </div>
    );
  }
}
