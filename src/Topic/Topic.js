import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Base from "../Base";
import BaseFrame from "../Components/BaseFrame";
import ModularCard from "../Components/ModularCard";
import { getNewsByTopics } from "../helper/coreapicalls";

export default function Topic() {
  const {
    params: { topicName, topicId },
  } = useRouteMatch();
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadNews();
  }, [topicId, topicName]);

  const loadNews = () => {
    getNewsByTopics(topicId).then((res) => {
      if (res.error) {
        //todo
        setIsLoaded(false);
      } else {
        setNews(res);
        setIsLoaded(true);
      }
    });
  };
  return (
    <Base>
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
