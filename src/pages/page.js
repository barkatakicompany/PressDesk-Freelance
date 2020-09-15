import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";

import { AdsType0, SingleNews, ListNews } from "../components/shared";


export default function Page() {
  const {
    params: { topicName, topicId },
  } = useRouteMatch();


  return (
    <div className="my-container">
      <br />
      <AdsType0 />
      <br />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {topicName}
          </li>
        </ol>
      </nav>

      <h4 className="heading-text">{topicName}</h4>
      <div className="row">
        <div className="col-md-2 col-sm-12">a</div>
        <div className="col">{/* <TodaysNews news={news} /> */}</div>
        <div className="col-md-3 col-sm-12">a</div>
      </div>
    </div>
  );
}
