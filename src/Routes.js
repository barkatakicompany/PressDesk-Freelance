import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AlbumManagement from "./Components/Admin/AlbumManagement";
import NewsManagement from "./Components/Admin/NewsManagement";
import Archive from "./Components/Archive/Archive";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import SignIn from "./Components/Auth/SignIn";
import Home from "./Components/Home/Home";
import News from "./Components/News/News";
import ProductManagement from "./Components/ProductManagement/ProductManagement";
import Topic from "./Components/Topic/Topic";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Archives" exact component={Archive} />
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/:topicName/:newsId" exact component={News} />
        <PrivateRoute path="/newsManagement" exact component={NewsManagement} />
        <PrivateRoute
          path="/galleryManagement"
          exact
          component={AlbumManagement}
        />
        <Route path="/:topicName" exact component={Topic} />
      </Switch>
    </BrowserRouter>
  );
}
