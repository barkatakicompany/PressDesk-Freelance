import React from "react";
import Menu from "../Menu";
import "../styles.css";
const Base = ({ children }) => {
  return (
    <div className="">
      <Menu />
      <div className="pt-3 p-3">{children}</div>
      <div
        id="loading"
        className="loading-screen row m-0 p-0 h-100 w-100 align-items-center justify-content-center d-none"
      >
        <div class="loader"></div>
      </div>
    </div>
  );
};
export default Base;
