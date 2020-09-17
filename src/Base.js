import React from "react";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

const Base = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="my-container page-component">{children}</div>
      <Footer />
    </div>
  );
};

export default Base;
