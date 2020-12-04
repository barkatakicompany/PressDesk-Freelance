import React from "react";
import Menu from "../Menu";

const Base = ({ children }) => {
  return (
    <div className="my-container">
      <Menu />
      <div className="">{children}</div>
    </div>
  );
};
export default Base;
