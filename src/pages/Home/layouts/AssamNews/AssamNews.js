import React, { useState, useEffect } from "react";

import SingleCardList from "../../components/NewsCards/SingleCardList.js";
import StackedCardsVerical from "../../components/NewsCards/StackedCardsVertical.js";
import OverlayCard from "../../components/NewsCards/OverlayCard.js";

const Assam = (props) => {
  const [assamNews, setAssamNews] = useState([]);
  const [topNews, setTopNews] = useState({
    id: "",
    priority: "",
    title: "",
    postedOn: "",
    imageURL: "",
    desc: "",
    body: "",
  });
  const [assamNewsPriorityOne, setAssamNewsPriorityOne] = useState([]);
  const [assamNewsPriorityTwo, setAssamNewsPriorityTwo] = useState([]);
  const [
    assamNewsPriorityTwoTopFour,
    setAssamNewsPriorityTwoTopFour,
  ] = useState([]);
  const [assamNewsPriorityThree, setAssamNewsPriorityThree] = useState([]);
  const [assamNewsPriorityThreeTwo, setAssamNewsPriorityThreeTwo] = useState(
    []
  );
  const [assamNewsPriorityFour, setAssamNewsPriorityFour] = useState([]);
  const [assamNewsPriorityFourTop, setAssamNewsPriorityFourTop] = useState([]);

  useEffect(() => {
    const assamNews = props.assamNews.data;
    const assamNewsPriorityOne = [];
    const assamNewsPriorityTwo = [];
    const assamNewsPriorityThree = [];
    const assamNewsPriorityFour = [];

    assamNews.map((news) => {
      if (news.priority == 1) assamNewsPriorityOne.push(news);
      else if (news.priority == 2) assamNewsPriorityTwo.push(news);
      else if (news.priority == 3) assamNewsPriorityThree.push(news);
      else assamNewsPriorityFour.push(news);
    });

    const topNews = assamNewsPriorityOne[0];
    const assamNewsPriorityTwoTopFour = [
      assamNewsPriorityTwo[1],
      assamNewsPriorityTwo[2],
      assamNewsPriorityTwo[3],
      assamNewsPriorityTwo[4],
    ];

    const assamNewsPriorityFourTop = [
      assamNewsPriorityFour[0],
      assamNewsPriorityFour[1],
      assamNewsPriorityFour[2],
    ];

    const assamNewsPriorityThreeTwo = [
      assamNewsPriorityThree[0],
      assamNewsPriorityThree[1],
    ];

    setAssamNews(assamNews);
    setTopNews(topNews);
    setAssamNewsPriorityOne(assamNewsPriorityOne);
    setAssamNewsPriorityTwo(assamNewsPriorityTwo);
    setAssamNewsPriorityTwoTopFour(assamNewsPriorityTwoTopFour);
    setAssamNewsPriorityThree(assamNewsPriorityThree);
    setAssamNewsPriorityThreeTwo(assamNewsPriorityThreeTwo);
    setAssamNewsPriorityFour(assamNewsPriorityFour);
    setAssamNewsPriorityFourTop(assamNewsPriorityFourTop);
  }, [assamNews]);

  assamNews.sort(function (a, b) {
    return new Date(b.postedOn) - new Date(a.postedOn);
  });

  console.log("assamNewsPriorityThreeTwo");
  console.log(assamNewsPriorityThreeTwo);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col">
              <div className="news-tag">অসম</div>
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
          topListNews={assamNewsPriorityFourTop}
        />
        <div className="card justify-content-md-around">
          <StackedCardsVerical topFourNews={assamNewsPriorityTwoTopFour} />
        </div>
        <div className="card col-md-3 justify-content-md-around" style={{ padding: "0" }}>
          {assamNewsPriorityThreeTwo.map((news) => (
            <div className="row row-cols-1" style={{ margin: "0" }}>
              <OverlayCard news={news} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assam;
