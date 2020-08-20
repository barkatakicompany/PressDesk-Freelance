import React, { useState, useEffect } from "react";

import SingleCardList from "../../components/NewsCards/SingleCardList.js";
import StackedCardsVerical from "../../components/NewsCards/StackedCardsVertical.js";
import OverlayCard from "../../components/NewsCards/OverlayCard.js";

const Tech = (props) => {
  const [TechNews, setTechNews] = useState([]);
  const [topNews, setTopNews] = useState({
    id: "",
    priority: "",
    title: "",
    postedOn: "",
    imageURL: "",
    desc: "",
    body: "",
  });
  const [TechNewsPriorityOne, setTechNewsPriorityOne] = useState([]);
  const [TechNewsPriorityTwo, setTechNewsPriorityTwo] = useState([]);
  const [
    TechNewsPriorityTwoTopFour,
    setTechNewsPriorityTwoTopFour,
  ] = useState([]);
  const [TechNewsPriorityThree, setTechNewsPriorityThree] = useState([]);
  const [TechNewsPriorityThreeTwo, setTechNewsPriorityThreeTwo] = useState(
    []
  );
  const [TechNewsPriorityFour, setTechNewsPriorityFour] = useState([]);
  const [TechNewsPriorityFourTop, setTechNewsPriorityFourTop] = useState([]);

  useEffect(() => {
    const TechNews = props.techNews.data;
    const TechNewsPriorityOne = [];
    const TechNewsPriorityTwo = [];
    const TechNewsPriorityThree = [];
    const TechNewsPriorityFour = [];

    TechNews.map((news) => {
      if (news.priority == 1) TechNewsPriorityOne.push(news);
      else if (news.priority == 2) TechNewsPriorityTwo.push(news);
      else if (news.priority == 3) TechNewsPriorityThree.push(news);
      else TechNewsPriorityFour.push(news);
    });

    const topNews = TechNewsPriorityOne[0];
    const TechNewsPriorityTwoTopFour = [
      TechNewsPriorityTwo[1],
      TechNewsPriorityTwo[2],
      TechNewsPriorityTwo[3],
      TechNewsPriorityTwo[4],
    ];

    const TechNewsPriorityFourTop = [
      TechNewsPriorityFour[0],
      TechNewsPriorityFour[1],
      TechNewsPriorityFour[2],
    ];

    const TechNewsPriorityThreeTwo = [
      TechNewsPriorityThree[0],
      TechNewsPriorityThree[1],
    ];

    setTechNews(TechNews);
    setTopNews(topNews);
    setTechNewsPriorityOne(TechNewsPriorityOne);
    setTechNewsPriorityTwo(TechNewsPriorityTwo);
    setTechNewsPriorityTwoTopFour(TechNewsPriorityTwoTopFour);
    setTechNewsPriorityThree(TechNewsPriorityThree);
    setTechNewsPriorityThreeTwo(TechNewsPriorityThreeTwo);
    setTechNewsPriorityFour(TechNewsPriorityFour);
    setTechNewsPriorityFourTop(TechNewsPriorityFourTop);
  }, [TechNews]);

  TechNews.sort(function (a, b) {
    return new Date(b.postedOn) - new Date(a.postedOn);
  });

  console.log("TechNewsPriorityThreeTwo");
  console.log(TechNewsPriorityThreeTwo);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col">
              <div className="news-tag">Technology</div>
            </div>
            <div className="col d-flex justify-content-end news-tag-link">
              View More
            </div>
          </div>
        </div>
      </div>

      <div className="card-group">
        <SingleCardList
          topNews={topNews}
          topListNews={TechNewsPriorityFourTop}
        />
        <div className="card justify-content-md-around">
          <StackedCardsVerical topFourNews={TechNewsPriorityTwoTopFour} />
        </div>
        <div
          className="card col-md-3 justify-content-md-around"
          style={{ padding: "0" }}
        >
          {TechNewsPriorityThreeTwo.map((news) => (
            <div className="row row-cols-1" style={{ margin: "0" }}>
              <OverlayCard news={news} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
