import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { SingleCard, SingleNews, ListNews } from "../components/shared";

import "./styles.scss";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Topics({ subTopicName, subTopicId, topicId }) {
  const [error, setError] = useState(null);
  const [isNewsLoaded, setIsNewsLoaded] = useState(false);
  const [newsBySuptopic, setNewsBySuptopic] = useState([]);

  var firstNews = {
    subTopic: [],
    tags: [],
    _id: "",
    dateOfNews: "",
    editor: "",
    heading: "",
    shortDsc: "",
    body: "",
    links: [],
    createdBy: "",
    createdAt: "",
    updatedAt: "",
    __v: "",
  };

  useEffect(() => {
    fetch(`http://3.133.84.12:8004/api//newsbysubtopic/${subTopicId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsNewsLoaded(true);
          setNewsBySuptopic(result);
        },
        (error) => {
          setError(error);
          setIsNewsLoaded(false);
        }
      );
  }, [subTopicId, isNewsLoaded]);

  if (newsBySuptopic[0] !== undefined) firstNews = newsBySuptopic[0];
  var listNews = newsBySuptopic.slice(1, 6);
  var carouselNews = newsBySuptopic.slice(6, 11);

  // console.log(newsBySuptopic)

  var isSubtopicEmpty = false
  if (!(newsBySuptopic.length > 0)) {
    isSubtopicEmpty = true;
  }

  return (isNewsLoaded && !isSubtopicEmpty) ? (
    <div>
      <div className="d-flex justify-content-between align-items-end">
        <h4>{subTopicName}</h4>
        <NavLink
          exact
          to={`/${topicId}/${subTopicId}`}
          className="btn btn-outline-danger"
        >
          View All
        </NavLink>
      </div>
      <div className="row">
        <div className="card-deck">
          <div className="card col-md-7 col-sm-1 single-news-card">
            <SingleNews
              news={firstNews}
              subTopicId={subTopicId}
              topicId={topicId}
            />
          </div>
          <div className="card col-md-5">
            <ListNews
              listNews={listNews}
              header={false}
              subTopicId={subTopicId}
              topicId={topicId}
            />
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 mt-4">
        {carouselNews.map((news, index) => (
          <div key={index} className="col mb-3 card-content">
            <a href={`/${topicId}/${subTopicId}/${news._id}`}>
              <SingleCard news={news} subTopicId={subTopicId} />
            </a>
          </div>
        ))}
      </div>
    </div>
  ) : null;
}
