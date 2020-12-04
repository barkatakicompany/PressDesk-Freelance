import React from "react";
import { withRouter, Link } from "react-router-dom";
// import { isAuthenticated, signout } from "./Components/Auth/helper/authApis";

const Menu = ({ history }) => {
  const topics = [
    "HOME",
    "ASSAM",
    "NORTHEAST",
    "NATIONAL",
    "INTERNATIONAL",
    "OPINION",
    "BUSINESS/ECONOMY",
    "POLITICS",
    "SPORTS",
    "GALLERY",
    "ARCHIVES",
  ];

  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return "text-warning nav-link active";
    } else {
      return "text-light nav-link";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <ul className="nav row m-0 p-0 align-items-center">
        <li className="nav-item">
          <Link className="navbar-brand" to="/">
            PressDesk
          </Link>
        </li>
        {topics.map((topic, index) => (
          <li className="nav-item" key={index}>
            <Link className="nav-link black-text">{topic}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default withRouter(Menu);
