import React from "react";
import Advertisement from "./Advertisement";

export default function BaseFrame({ children }) {
  return (
    <div>
      <div className="row m-0 p-0">
        {/* <Advertisement type={0} speed={5000} /> */}
      </div>
      <div className="row m-0 p-0">
        <div className="col-md-2"></div>
        <div className="col-md">{children}</div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
