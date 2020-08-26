import React from "react";
import { HorizontalCard } from ".";

// import "./styles.scss"

export default function ListNews({ listNews, header, subTopicId, topicId, topicName }) {
  return (
    <div className="">
      {header ? <div className="card-header">Featured</div> : null}
      <ul className="list-group list-group-flush">
        {listNews.map((news, index) => (
          <li key={index} className="list-group-item news-list">
            <HorizontalCard topicName={topicName} subTopicId={subTopicId} topicId={topicId} news={news} />
          </li>
        ))}
      </ul>
    </div>
  );
}
