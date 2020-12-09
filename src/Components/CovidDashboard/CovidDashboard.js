import React, { useState, useEffect } from "react";
import "./style.css";
import { getCovidCases } from "../helper/coreapicalls";

const CovidCases = () => {
  const [covidCases, setCovidCases] = useState([]);
  const [isLoaded, setIsLoading] = useState(false);
  useEffect(() => {
    loadCovidCases();
  }, []);

  const loadCovidCases = () => {
    getCovidCases().then((res) => {
      if (res.error) {
        // TODO
      } else {
        var cases = {};
        res.forEach((item) => {
          if (item.sno === "11111") {
            cases.total_cases = parseInt(item.new_positive);
            cases.total_active = parseInt(item.new_active);
            cases.total_recovered = parseInt(item.new_cured);
            cases.total_death = parseInt(item.new_death);
            cases.cases_diff = item.new_positive - item.positive;
            cases.active_diff = item.new_active - item.active;
            cases.recovered_diff = item.new_cured - item.cured;
            cases.death_diff = item.new_death - item.death;
          }
        });
        setCovidCases(cases);
        setIsLoading(true);
      }
    });
  };
};

export default function CovidDashboard() {
  const [covidCases, setCovidCases] = useState([]);
  const [isLoaded, setIsLoading] = useState(false);
  useEffect(() => {
    loadCovidCases();
  }, []);

  const loadCovidCases = () => {
    getCovidCases().then((res) => {
      if (res.error) {
        // TODO
      } else {
        var cases = {};
        res.forEach((item) => {
          if (item.sno === "11111") {
            cases.total_cases = parseInt(item.new_positive).toLocaleString(
              "en-IN"
            );
            cases.total_active = parseInt(item.new_active).toLocaleString(
              "en-IN"
            );
            cases.total_recovered = parseInt(item.new_cured).toLocaleString(
              "en-IN"
            );
            cases.total_deaths = parseInt(item.new_death).toLocaleString(
              "en-IN"
            );
            cases.cases_diff = (
              item.new_positive - item.positive
            ).toLocaleString("en-IN");
            cases.active_diff = (item.new_active - item.active).toLocaleString(
              "en-IN"
            );
            cases.recovered_diff = (item.new_cured - item.cured).toLocaleString(
              "en-IN"
            );
            cases.deaths_diff = (item.new_death - item.death).toLocaleString(
              "en-IN"
            );
          }
        });
        setCovidCases(cases);
        setIsLoading(true);
      }
    });
  };

  return isLoaded ? (
    <div className="m-3 dashboard-wrapper">
      <div className="border covid-dashboard">
        <div className="mr-auto mt-auto mb-auto">
          <div className="text-bold-big text-red">Covid-19 in India</div>
          <div className="text-italic-small mt-2">Source: MoHFW</div>
        </div>
        <div style={{ backgroundColor: "#dadada" }} className="text-bold">
          <div style={{ color: "" }}>Total Cases</div>
          <div className="text-bold-big">{covidCases.total_cases}</div>
          <div className="text-red">
            <span className="p-1">
              <svg
                class="ctw_statsRMarker"
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 4.5L4 0.75L7.75 4.5H0.25Z"
                  fill="#D10014"
                ></path>
              </svg>
            </span>
            {covidCases.cases_diff}
          </div>
        </div>
        <div style={{ backgroundColor: "#cde6fd" }} className="text-bold">
          <div style={{ color: "#005ebb" }}>Total Active</div>
          <div className="text-bold-big">{covidCases.total_active}</div>
          <div className="text-red">
            <span className="p-1">
              <svg
                class="ctw_statsRMarker"
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 4.5L4 0.75L7.75 4.5H0.25Z"
                  fill="#D10014"
                ></path>
              </svg>
            </span>
            {covidCases.active_diff}
          </div>
        </div>
        <div style={{ backgroundColor: "#cdeadb" }} className="text-bold">
          <div style={{ color: "#03592e" }}>Total Recovered</div>
          <div className="text-bold-big">{covidCases.total_recovered}</div>
          <div style={{ color: "#03592e" }}>
            <span className="p-1">
              <svg
                class="ctw_statsRMarker"
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 4.5L4 0.75L7.75 4.5H0.25Z"
                  fill="#03592E"
                ></path>
              </svg>
            </span>
            {covidCases.recovered_diff}
          </div>
        </div>
        <div style={{ backgroundColor: "#f6ccd0" }} className="text-bold">
          <div className="text-red">Total Deaths</div>
          <div className="text-bold-big">{covidCases.total_deaths}</div>
          <div className="text-red">
            <span className="p-1">
              <svg
                class="ctw_statsRMarker"
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.25 4.5L4 0.75L7.75 4.5H0.25Z"
                  fill="#D10014"
                ></path>
              </svg>
            </span>
            {covidCases.deaths_diff}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
