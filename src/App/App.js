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
  // const [navLinks, setNavLinks] = useState([]);

  // // setNavLinks(categories.data)
  // useEffect(() => {
  //   const navLinks = categories.data
  //   setNavLinks(navLinks)
  // }, [categories])

  // console.log(navLinks)

  const navLinks = categories.data

  return (
    <Router>
      <div className="App">
        <Navigation siteNavigations={navLinks} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" component={PageRenderer} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
