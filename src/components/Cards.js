import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import search from "../helper/Search";
import { AdsCard, AdsType1 } from "./shared";

const tagColors = {
  0: "rgb(0,122,255)",
  1: "rgb(52,199,89)",
  2: "rgb(88,88,214)",
  3: "rgb(255,149,0)",
  4: "rgb(255,45,85)",
  5: "rgb(175,82,222)",
  6: "rgb(255,59,48)",
  7: "rgb(90,200,250)",
  8: "rgb(255,204,0)",
};

const SingleNews = (
  { news },
  // subTopicId,
  // topicId,
  // topicName,
  // subTopicName,
  showTags = false
) => {
  console.log(news);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsImage, setNewsImage] = useState("");
  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/news/photo/${news._id}`)
      .then((res) => res.url)
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsImage(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(false);
        }
      );
  }, [news._id]);

  return !error && isLoaded ? (
    <div className="pt-3">
      <div className="overflow card-img">
        <img
          src={newsImage}
          style={{ objectFit: "cover" }}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body pl-0 pt-1">
        <div className="text-dark">
          {showTags === true ? (
            <div className="tags-container">
              {news.tags.map((tag, index) => (
                <Link
                  to={`/search-result/?tag=${tag}`}
                  key={index}
                  className="tags px-2 m-1 text-white rounded"
                  style={{
                    backgroundColor: tagColors[Math.floor(Math.random() * 9)],
                  }}
                >
                  {tag}
                </Link>
              ))}
            </div>
          ) : null}
          {showTags === true ? (
            <p className="news-editor-wrapper">
              By <span className="news-editor">{news.editor}</span>
            </p>
          ) : null}
          <Link
            to="#"
            // to={
            //   topicId
            //     ? {
            //         pathname: `/${topicName}/${subTopicName}/news/${news._id}`,
            //         newsProps: {
            //           tId: topicId,
            //           stId: subTopicId,
            //         },
            //       }
            //     : { pathname: `/search-result/${news._id}` }
            // }
            className="news-link"
          >
            <p className="card-title m-0 p-0 pt-1 blue-link-text">
              {news.heading}
            </p>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};

const HorizontalNews = (news) => {};

const OverlayNews = (news) => {};

const ModeOneCard = (topicId, topicName) => {};

const ModeTwoCard = (topicId, topicName) => {};

const ModeThreeCard = (topicId, topicName) => {
  const [adsType1, setAdsType1] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api/getadvbytype/?type=1`)
      .then((res) => res.json())
      .then(
        (result) => {
          setAdsType1(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  console.log(adsType1)

  const trendingNews = search({ keyword: "news", searchByTags: true });
  return (
    <div className="my-container">
      <hr />
      <h3 className="heading-text">{topicName} News</h3>
      <hr />
      <div className="row">
        <div className="col-md-2 m-0 p-0 pr-5">
          <p className="small-heading-text">TRENDING</p>
          {trendingNews.map((news, i) => (
            <SingleNews key={i} news={news} />
          ))}
        </div>
        <div className="col">
          <div>aa</div>
          {/* <div>aa</div> */}
          {/* {adsType1.map((ads, index) => (
            <AdsCard key={index} ads={ads} />
          ))} */}
        </div>
        <div className="col-md-3 vertical-line">
          <AdsType1 />
        </div>
      </div>
    </div>
  );
};

export default function Card({ mode, topicId, topicName }) {
  if (mode === 1) return ModeOneCard(topicId, topicName);
  if (mode == 2) return ModeTwoCard(topicId, topicName);
  if (mode == 3) return ModeThreeCard(topicId, topicName);
}
