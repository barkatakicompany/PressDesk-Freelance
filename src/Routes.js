import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import SignIn from "./Components/Auth/SignIn";
import Home from "./Components/Home/Home";
import ProductManagement from "./Components/ProductManagement/ProductManagement";
import Topic from "./Components/Topic/Topic";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signIn" exact component={SignIn} />
        <PrivateRoute
          path="/productManagement"
          exact
          component={ProductManagement}
        />
        <Route path="/:topicName" exact component={Topic} />
      </Switch>
    </BrowserRouter>
  );
}
