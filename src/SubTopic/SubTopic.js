import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Base from "../Base";
import BaseFrame from "../Components/BaseFrame";
import ModularCard from "../Components/ModularCard";
import { getNewsBySubTopics } from "../helper/coreapicalls";

export default function SubTopic() {
  const {
    params: { topicName, topicId, subTopicName, subTopicId },
  } = useRouteMatch();
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadNews();
  }, [subTopicName, subTopicId]);

  const loadNews = () => {
    getNewsBySubTopics(subTopicId).then((res) => {
      if (res.error) {
        //todo
        setIsLoaded(false);
      } else {
        setIsLoaded(true);

        setNews(res);
      }
    });
  };
  return (
    <Base>
      <BaseFrame>
        {isLoaded ? (
          <>
            <h2 className="heading-text">{subTopicName}</h2>
            <ModularCard mode="stopic" data={news} />
          </>
        ) : null}
      </BaseFrame>
    </Base>
  );
}
