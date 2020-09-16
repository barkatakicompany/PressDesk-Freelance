import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { getTopics } from "./helper/coreapicalls.js";

export default function Navigation() {
  const [topics, setTopics] = useState([]);

  getTopics().then((data) => {
    setTopics(data);
  });

  return (
    <div className="navigation">
      <nav className="top-nav navbar navbar-expand-lg navbar-dark bg-transparent my-container">
        <a className="navbar-brand site-name" href="/">
          PressDesk<span style={{ color: "#e92525" }}>.</span>in
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="date-area">{date}</div> */}
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent nav-container">
        <div className="my-container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto topics-container">
              <span>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link topic pl-0"
                    activeClassName="topic-active"
                  >
                    Home
                  </NavLink>
                </li>
              </span>
              {topics.map((topic, i) =>
                topic.name !== "Breaking News" ? (
                  <span key={i} className="my-dropdown">
                    <li className="nav-item my-dropbtn">
                      <NavLink
                        to={{
                          pathname: `/${topic.name}/${topic._id}`,
                          navProps: {
                            id: topic._id,
                          },
                        }}
                        className="nav-link topic"
                        activeClassName="topic-active"
                      >
                        {topic.name}
                      </NavLink>
                    </li>
                    {topic.subTopics !== undefined &&
                    topic.subTopics[0] !== undefined ? (
                      <div className="dropdown-content pt-1 pb-1">
                        {topic.subTopics.map((subtopic, i) => (
                          <div key={i}>
                            <NavLink
                              to={{
                                pathname: `/${topic.name}/${topic._id}/${subtopic.name}/${subtopic._id}`,
                              }}
                              className="nav-link sub-topic"
                            >
                              {subtopic.name}
                            </NavLink>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </span>
                ) : null
              )}
            </ul>
            <form
              className="form-inline my-2 my-lg-0 search-wrapper"
              action="/search-result/"
              method="GET"
            >
              <input
                className="mr-sm-2 search-input"
                id="search-input"
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                autoComplete="off"
              />
              <button
                className="btn search-btn my-2 my-sm-0"
                id="search-btn"
                type="submit"
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
