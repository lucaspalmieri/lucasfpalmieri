import React from "react";
import NavItem from "./NavItem";

import { Row, Col, Nav } from "react-bootstrap";
import { FaHome, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header(props) {
  const StyledLink = {
    color: "black",
  };

  const BtnHireMe = {
    color: "black",
    background: "#ffc500",
    borderRadius: "50px",
    padding: "10px",
    cursor: "pointer",
  };

  const StyleRow = {
    height: "100%",
    justifyContent: "space-between",
  };

  const StyleNav = {
    flexWrap: "nowrap",
  };

  return (
    <React.Fragment>
      <Wrapper>
        <Row style={StyleRow}>
          <Col md={7}>
            <Nav style={StyleNav}>
              <Home>
                <Link style={StyledLink} to="/">
                  <Div>
                    <FaHome />
                  </Div>
                </Link>
              </Home>
              <Link className="text-decoration-none" to="/Resume">
                <NavItem name="Resume" />
              </Link>
              <Link className="text-decoration-none" to="/Portfolio">
                <NavItem name="Portfolio" />
              </Link>
              <Link className="text-decoration-none" to="/Contact">
                <NavItem name="Contact" />
              </Link>
            </Nav>
          </Col>
          <Col className="d-none d-md-flex justify-content-end" md={5}>
            <SocialMedia>
              <LinkStyled href="https://www.linkedin.com/in/lucas-palmieri/">
                <FaLinkedin />
              </LinkStyled>
            </SocialMedia>
            <Button>
              <Link style={BtnHireMe} to="/Contact">
                Hire me
                <Span>
                  <FaTelegramPlane />
                </Span>
              </Link>
            </Button>
          </Col>
        </Row>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height: 73px;
  background: #fff;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
  border-radius: 10px;

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

const Home = styled.div`
  background: #ffc500;
  height: 72px;
  width: 60px;
  font-size: 30px;
  cursor: pointer;
`;

const Div = styled.div`
  margin-top: 10px;
  padding-left: 15px;
`;

const Button = styled.div`
  margin: 18px 18px 0 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Span = styled.span`
  font-size: 25px;
  margin-left: 20px;
`;

const SocialMedia = styled.div`
  margin: 16px 18px 0 5px;
  font-size: 30px;

  @media (max-width: 480px) {
    margin: 9px 18px 0 5px;
  }
`;

const LinkStyled = styled.a`
  color: black;
`;
