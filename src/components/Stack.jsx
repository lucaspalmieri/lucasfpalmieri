import React from "react";
import Title from "./Title";
import Service from "./Service";

import { Row, Col } from "react-bootstrap";

export default function Stack(props) {
  return (
    <React.Fragment>
      <Title name="My Services" />
      <Row>
        <Col md={3} sm={6} xs={12}>
          <Service>
            <Service.LandingPage />
          </Service>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Service>
            <Service.WebServices />
          </Service>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Service>
            <Service.WebAnalytics />
          </Service>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Service>
            <Service.Ecommerce />
          </Service>
        </Col>
      </Row>
    </React.Fragment>
  );
}
