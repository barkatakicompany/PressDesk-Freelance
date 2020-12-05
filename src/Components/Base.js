import React from "react";
import Menu from "../Menu";
import "../styles.css";
const Base = ({ children }) => {
  return (
    <div className="m-0 p-0">
      <Menu />
      <div className="pt-3">{children}</div>
    </div>
  );
};
export default Base;
