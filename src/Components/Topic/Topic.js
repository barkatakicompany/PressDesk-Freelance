import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import Base from "../Base";
import { getTopicByTopicName } from "../helper/coreapicalls";

export default function Topic() {
  const {
    params: { topicName },
  } = useRouteMatch();
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadNews();
  }, [topicName]);

  const loadNews = () => {
    getTopicByTopicName(topicName).then((res) => {
      console.log('res',res)
      if (res.error) {
        setIsLoaded(false);
      } else {
        setNews(res);
        setIsLoaded(true);
      }
    });
  };

  console.log(news)

  return <Base>{topicName}</Base>;
}
