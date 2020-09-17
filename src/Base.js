import React from "react";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";

const Base = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Base;
