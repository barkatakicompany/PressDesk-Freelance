import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { SingleCard, SingleNews, ListNews } from ".";

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

export default function SubTopics({ subTopicId, topicId }) {
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

  return isNewsLoaded ? (
    <div>
      <div className="row">
        <div className="col-md-7">
          <SingleNews news={firstNews} subTopicId={subTopicId} topicId={topicId}/>
        </div>
        <div className="col-md-5">
          <ListNews listNews={listNews} header={false} subTopicId={subTopicId} topicId={topicId}/>
        </div>
      </div>
      <div className="row row-cols-1">
        <Slider {...settings}>
          {newsBySuptopic.slice(0, 12).map((news, index) => (
            <div key={index} className="col mb-4 card-content">
              <a href={`/${topicId}/${subTopicId}/${news._id}`}>
                <SingleCard
                  news={news}
                  subTopicId={subTopicId}
                  topicId={topicId}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  ) : null;
}
