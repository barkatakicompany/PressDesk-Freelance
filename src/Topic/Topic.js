import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Base from "../Base";
import SimpleSlider from "../Components/Advertisement";
import BaseFrame from "../Components/BaseFrame";
import ModularCard from "../Components/ModularCard";
import { getNewsByTopics } from "../helper/coreapicalls";

export default function Topic() {
  const {
    params: { topicName, topicId },
  } = useRouteMatch();
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(isLoaded)

  useEffect(() => {
    loadNews();
    setIsLoaded(true);
  }, [topicId, topicName]);

  const loadNews = () => {
    getNewsByTopics(topicId).then((res) => {
      if (res.error) {
        //todo
      } else {
        setNews(res);
      }
    });
  };
  return (
    <Base>
    <SimpleSlider/>
      <BaseFrame>
        {isLoaded ? (
          <>
            <h2 className="heading-text">{topicName} News</h2>
            <ModularCard mode="topic" data={news} />
          </>
        ) : null}
      </BaseFrame>
    </Base>
  );
}
