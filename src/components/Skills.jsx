import React from "react";
import Title from "./Title";
import Skill from "./Skill";

import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

export default function Skills(props) {
  return (
    <React.Fragment>
      <Title name="Skills" />
      <Row>
        <Col md={6}>
          <Ul>
            <li>
              <Skill width="60%" name="JavaScript" />
            </li>
            <li>
              <Skill width="40%" name="Node" />
            </li>
            <li>
              <Skill width="60%" name="React" />
            </li>
          </Ul>
        </Col>
        <Col md={6}>
          <Ul>
            <li>
              <Skill width="50%" name="PHP" />
            </li>
            <li>
              <Skill width="80%" name="Wordpress" />
            </li>
            <li>
              <Skill width="45%" name="Laravel" />
            </li>
          </Ul>
        </Col>
      </Row>
    </React.Fragment>
  );
}

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;
