import React from "react";
import { Navigation, Footer } from "./";
import Routes from "../Routes";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.scss";

const Base = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="page-component my-container">
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default Base;
