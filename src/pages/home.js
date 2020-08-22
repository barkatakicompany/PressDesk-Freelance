import React from "react";
import {PostMasonary} from "../components/shared";

import assam_news from "../data/assam_news.js";
import breaking_news from "../data/breaking_news.js";
import national_news from "../data/national_news.js";
import international_news from "../data/international_news.js";


const assamNewsConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const breakingNewsConfig = {
  // 0: {
  //   gridArea: "1 / 1 / 4 / 1",
  //   height: "480px"
  // },
  // 1: {
  //   height: "100%"
  // }
};


const nationalNewsConfig = {
  0: {
    gridArea: "1 / 1 / 1 / 3",
  }
}

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
};

mergeStyles(assam_news, assamNewsConfig);
mergeStyles(breaking_news, breakingNewsConfig);
mergeStyles(national_news, nationalNewsConfig);

export default function Home() {
  return (
    <section className="container home">
      <div className="row">
        <h2>Breaking News</h2>
        <section className="breaking-news-container">
          <div className="col-md" style={{paddingLeft: "0"}}>
          <PostMasonary posts={breaking_news} columns={2} overlay={false}/>
          </div>
          <div className="col-md-3" style={{backgroundColor: "red", padding: "0"}}>Ads</div>
        </section>
        <h2>Assam</h2>
        <PostMasonary posts={assam_news} columns={3} overlay={true}/>
        <div style={{backgroundColor: "red", height: "50px", width: "100%", margin: "10px"}}>Ads</div>
        <h2>National</h2>
        <PostMasonary posts={national_news} columns={3} overlay={false}/>
        <div style={{backgroundColor: "red", height: "50px", width: "100%", margin: "10px"}}>Ads</div>
        <h2>International</h2>
        <PostMasonary posts={international_news} columns={3} overlay={false}/>
        <div style={{backgroundColor: "red", height: "50px", width: "100%", margin: "10px"}}>Ads</div>
      </div>
    </section>
  );
}
