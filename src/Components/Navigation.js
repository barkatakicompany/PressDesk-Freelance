import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navigation = ({ topics }) => {
  return (
    <div className="navigation">
      <nav className="top-nav navbar navbar-expand-lg navbar-dark bg-transparent px-5">
        <a className="navbar-brand site-name pr-3" href="/">
          PressDesk<span style={{ color: "#e92525" }}>.</span>in
        </a>
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
            {topics.map((topic, i) => (
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
            ))}
          </ul>
          <div className="text-white nav-link text-right">
            {new Date().toDateString()}
          </div>
        </div>
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
    </div>
  );
};
export default withRouter(Navigation);
