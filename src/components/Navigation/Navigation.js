import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

export default function Navigation({ topics }) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent nav-container">
        <div className="container">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav topics-container">
              <li className="nav-item">
                <Link to="/" className="nav-link topic">
                  Home
                </Link>
              </li>
              {topics.map(({ name, _id, subTopics }) => (
                <span key={_id} className="topic-link">
                  <li className="nav-item">
                    <Link
                      to={{
                        pathname: `/${_id}`,
                      }}
                      className="nav-link topic"
                    >
                      {name}
                    </Link>
                  </li>

                  {/* {subTopics !== []
                      ? subTopics.map(({ name, _id, topic }) => (
                          <div className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <Link
                                to={`/${topic}/${_id}`}
                                className="nav-link topic"
                              >
                                {name}
                              </Link>
                            </div>
                          </div>
                        ))
                      : null} */}
                </span>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
