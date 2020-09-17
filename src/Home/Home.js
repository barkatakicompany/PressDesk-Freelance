import React, { useState, useEffect } from "react";
import { getTopics } from "../helper/coreapicalls";
import ModularCard from "../Components/ModularCard";
import Base from "../Base";

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
    <Base>
      <div className="row">
        <div className="col">
          {topics.map((t, i) => {
            return (
              <div className="p-3 m-0" key={i}>
                <ModularCard
                  mode="home"
                  topic={t}
                  design={Math.floor(Math.random() * Math.floor(4))}
                ></ModularCard>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Home;
