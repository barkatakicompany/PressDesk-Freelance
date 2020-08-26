import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("http://3.133.84.12:8004/api/topics")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTopics(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, []);

  var date = new Date().toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return isLoaded && !error ? (
    <div className="navigation">
      <nav className="top-nav navbar navbar-expand-lg navbar-dark bg-transparent pl-4">
        <a className="navbar-brand site-name" href="/">
          PressDesk<span style={{ color: "#e92525" }}>.</span>in
        </a>
        <div className="date-area">{date}</div>
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
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent nav-container">
        <div className="container-fluid mx-md-5 px-md-5">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto topics-container">
              <span>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link topic"
                    activeClassName="topic-active"
                  >
                    Home
                  </NavLink>
                </li>
              </span>
              {topics.map((topic, i) => (
                <span key={i} className="my-dropdown">
                  <li className="nav-item my-dropbtn">
                    <NavLink
                      to={{
                        pathname: `/${topic._id}`,
                        navProps: {
                          topicName: topic.name,
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
                      {topic.subTopics.map((suptopic, i) => (
                        <div key={i}>
                          <NavLink
                            to={{
                              pathname: `/${topic._id}/${suptopic._id}`,
                            }}
                            className="nav-link sub-topic"
                          >
                            {suptopic.name}
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </span>
              ))}
            </ul>
            <form className="form-inline my-2 my-lg-0 search-wrapper">
              <input
                className="mr-sm-2 search-input"
                id="search-input"
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
  ) : null;
}
