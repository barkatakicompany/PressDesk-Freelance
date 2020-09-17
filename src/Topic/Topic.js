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

  useEffect(() => {
    loadNews();
  }, []);

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
      <BaseFrame>
        <ModularCard mode="topic" data={news} />
      </BaseFrame>
    </Base>
  );
}
