import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreakingNews = (props) => {
  return (
    <div className="container">
      <Row>
        <div>Breaking News All</div>
        <Link to="/assam">Assam</Link>
      </Row>
    </div>
  );
};

export default BreakingNews;
