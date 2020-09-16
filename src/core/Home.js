import React, { useState, useEffect } from "react";
import { getNewsBySubTopics, getTopics } from "./helper/coreapicalls";
import ModularCard from "./ModularCard";

const Home = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    loadTopics();
  }, []);
  const loadTopics = () => {
    getTopics().then((res) => {
      if (res.error) {
        //todo
      } else {
        setTopics(res);
      }
    });
  };
  return (
    <div className="row">
      <div className="col">
        {topics.map((t, i) => {
          return (
            <div className="p-3 m-0" key={i}>
              <ModularCard mode="home" topic={t}></ModularCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
