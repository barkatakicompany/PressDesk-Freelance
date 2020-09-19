import React, { useState, useEffect } from "react";
import { getTopics } from "../helper/coreapicalls";
import ModularCard from "../Components/ModularCard";
import Base from "../Base";
import Advertisement from "../Components/Advertisement";

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
      <Advertisement type={0} speed={8000} />
      <div className="row">
        <div className="col-md-9">
          {topics.map((t, i) => {
            return (
              <div className="pt-3 m-0" key={i}>
                <ModularCard
                  mode="home"
                  data={t}
                  design={Math.floor(Math.random() * Math.floor(4))}
                  // design={3}
                ></ModularCard>
                <div className="row mt-3 mb-0 ">
                  <div className="col-6">
                    <Advertisement type={2} speed={7000} />
                  </div>
                  <div className="col-6">
                    <Advertisement type={2} speed={7000} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-3 col-sm-12 py-2 m-0">
          <Advertisement type={1} speed={5000} />
          <Advertisement type={4} speed={4000} />
          <Advertisement type={2} speed={4500} />
          <Advertisement type={3} speed={5500} />
        </div>
      </div>
    </Base>
  );
};

export default Home;
