import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import trendingPost from "../../data/trending_news.json";
import breakingNews from "../../data/breaking_news.json";
import assamNews from "../../data/assam_news.json";
import nationalNews from "../../data/national_news.json";
import internationalNews from "../../data/international_news.json";
import covidNews from "../../data/covid_news.json";
import sportsNews from "../../data/sports_news.json";
import techNews from "../../data/tech_news.json";


import Trending from "./components/Trending";
import BreakingNews from "./layouts/BreakingNews";
import AssamNews from "./layouts/AssamNews";
import NationalNews from "./layouts/NationalNews";
import InternationalNews from "./layouts/InternationalNews";
import CovidNews from "./layouts/CovidNews"
import SportsNews from "./layouts/SportsNews";
import TechNews from "./layouts/TechNews";

import Example from "./layouts/Example";

import "./home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <Trending trendingPost={trendingPost} />
          <Row className="ads-wrapper">
            <Col md={{ span: 6, offset: 3 }} className="text-center ads">
              Advertisement
            </Col>
          </Row>
          <BreakingNews breakingNews={breakingNews} />
          <Row className="ads-wrapper" style={{ margin: "20px 0px" }}>
            <Col md={{ span: 8, offset: 2 }} className="text-center ads">
              Advertisement
            </Col>
          </Row>
          <AssamNews assamNews={assamNews} />
          <Row className="ads-wrapper" style={{ margin: "20px 0px" }}>
            <Col md={{ span: 8, offset: 2 }} className="text-center ads">
              Advertisement
            </Col>
          </Row>
          <NationalNews nationalNews={nationalNews} />
          <Row className="ads-wrapper" style={{ margin: "20px 0px" }}>
            <Col md={{ span: 8, offset: 2 }} className="text-center ads">
              Advertisement
            </Col>
          </Row>
          <InternationalNews internationalNews={internationalNews} />
        </div>

        <Row className="covid-dash text-center">
          <Col>Covid</Col>
        </Row>
        <div className="container">
          <CovidNews covidNews={covidNews}/>
          <SportsNews sportsNews={sportsNews}/>
          <TechNews techNews={techNews}/>
        </div>
      </div>
    );
  }
}
