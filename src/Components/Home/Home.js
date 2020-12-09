import React from "react";
import Base from "../Base";
import CovidDashboard from "../CovidDashboard/CovidDashboard";

export default function Home() {
  var showCovidDashboard = true;

  return (
    <Base>
      <div className="my-container">
        {" "}
        {showCovidDashboard ? <CovidDashboard /> : null}
      </div>
    </Base>
  );
}
