import React, { useState, useEffect } from "react";

import "./App.css";
import "../components/shared/FontAwesomeIcons.js";

import Navigation from "../components/Navigation/Navigation";
import PageRenderer from "../components/PageRenderer.js";

import categories from "../data/categories.json"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



function App(props) {

  const navLinks = categories.data

  return (
    <Router>
      <div className="App page-component">
        <Navigation siteNavigations={navLinks} />
        <Switch className="page-component">
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" component={PageRenderer} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
