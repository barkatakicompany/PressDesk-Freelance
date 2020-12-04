import React from "react";
import Menu from "../Menu";
import "../styles.css";
const Base = ({ children }) => {
  return (
    <div className="m-0 p-0">
      <Menu />
      <div className="">{children}</div>
    </div>
  );
};
export default Base;
