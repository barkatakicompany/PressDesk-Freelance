import React from "react";

import "./App.css";
import "../components/shared/FontAwesomeIcons.js";

import Navigation from "../components/Navigation/Navigation";
import PageRenderer from "../components/PageRenderer.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Today's",
    path: "/todays",
  },
  {
    title: "Assam",
    path: "/assam",
  },
  {
    title: "National",
    path: "/national",
  },
  {
    title: "International",
    path: "/internnational",
  },
  {
    title: "Sports",
    path: "/sports",
  },
  {
    title: "Employment",
    path: "/employment",
  },
  {
    title: "COVID",
    path: "/covid",
  },
  {
    title: "Tech",
    path: "/technology",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation siteNavigations={navLinks} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" component={PageRenderer} />
          {/* <Route path="/" render={() => <Redirect to="/home" />} /> */}
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
