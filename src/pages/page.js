import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import { Cards } from "../components";

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
      <Cards mode={3} topicId={topicId} topicName={topicName} />
    </div>
  );
}
