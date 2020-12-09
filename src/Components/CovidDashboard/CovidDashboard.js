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
        <div className="mr-auto">Covid-19 in India</div>
        <div style={{backgroundColor: "#dadada"}}>
          <div>Total Cases</div>
          <div>{covidCases.total_cases}</div>
          <div>{covidCases.cases_diff}</div>
        </div>
        <div style={{backgroundColor: "#cde6fd"}}>
          <div>Total Active</div>
          <div>{covidCases.total_active}</div>
          <div>{covidCases.active_diff}</div>
        </div>
        <div style={{backgroundColor: "#cdeadb"}}>
          <div>Total Recovered</div>
          <div>{covidCases.total_recovered}</div>
          <div>{covidCases.recovered_diff}</div>
        </div>
        <div style={{backgroundColor: "#f6ccd0"}}>
          <div>Total Deaths</div>
          <div>{covidCases.total_deaths}</div>
          <div>{covidCases.deaths_diff}</div>
        </div>
      </div>
    </div>
  ) : null;
}
