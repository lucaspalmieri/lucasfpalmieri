import React from "react";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import styled from "styled-components";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

console.log(window.location)

function App() {
  return (
    <Router>
      <Wrapper>
        <Container>
          <Row>
            <Col lg={3} md={4}>
              <SideMenu />
            </Col>
            <Col lg={9} md={8}>
              <Row>
                <Col md={12}>
                  <Header />
                </Col>
                <Col md={12}>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Resume" component={Resume} />
                    <Route path="/Portfolio" component={Portfolio} />
                    <Route path="/Contact" component={Contact} />
                  </Switch>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 60px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;
