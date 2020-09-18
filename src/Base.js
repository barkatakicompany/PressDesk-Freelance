import React, { useState, useEffect } from "react";

import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { getTopics } from "./helper/coreapicalls";

const Base = ({ children }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    loadTopics();
  }, []);
  const loadTopics = () => {
    getTopics().then((data) => {
      setTopics(data);
    });
  };

  return (
    <div>
      <Navigation topics={topics} />
      <div className="my-container page-component">{children}</div>
      <Footer topics={topics}/>
    </div>
  );
};

export default Base;
