import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import trendingPost from "../../data/trending_news.json";
import breakingNews from "../../data/breaking_news.json";

import Trending from "./components/Trending";
import BreakingNews from "./layouts/BreakingNews"
import Example from "./layouts/Example"

import "./home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Trending trendingPost={trendingPost} />
        <Row className="ads-wrapper">
          <Col md={{ span: 6, offset: 3 }} className="text-center ads">Advertisement</Col>
        </Row>
        <BreakingNews breakingNews={breakingNews} />
        {/* <Example /> */}
        <div>Hello</div>
      </div>
    );
  }
}
