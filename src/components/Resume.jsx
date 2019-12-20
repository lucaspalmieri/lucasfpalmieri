import React from "react";
import Title from "./Title";
import WorkExperience from "../Models/WorkExperience";
import Education from "../Models/Education";

import styled from "styled-components";
import { Row } from "react-bootstrap";
import { IoIosSchool } from "react-icons/io";
import { IoIosBriefcase } from "react-icons/io";

export default function Resume(props) {
  const StylingIcon = {
    background: "#ffc500",
    textAlign: "center",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "24px"
  };

  const StylingRow = {
    marginLeft: "-50px",
    display: "flex"
  };

  const DisplayGrid = {
    display: "grid"
  };
  return (
    <React.Fragment>
      <Wrapper>
        <Section>
          <Title name="Resume" />
          <Row>
            <div className="col-md-6">
              <Ul>
                <Li>
                  <Row style={StylingRow}>
                    <div style={StylingIcon}>
                      <IoIosBriefcase />
                    </div>
                    <P>Working History</P>
                  </Row>
                </Li>
                {Object.values(WorkExperience).map((experience, index) => {
                  return (
                    <Li key={index}>
                      <Row>
                        <HeaderTitle>{experience.PositionCompany}</HeaderTitle>
                        <Year>{experience.Date}</Year>
                        <Description>{experience.Description}</Description>
                      </Row>
                    </Li>
                  );
                })}
              </Ul>
            </div>
            <div className="col-md-6">
              <Ul>
                <Li>
                  <Row style={StylingRow}>
                    <div style={StylingIcon}>
                      <IoIosSchool />
                    </div>
                    <P>Education History</P>
                  </Row>
                </Li>
                {Object.values(Education).map((education, index) => {
                  return (
                    <Li key={index}>
                      <Row style={DisplayGrid}>
                        <HeaderTitle>{education.School}</HeaderTitle>
                        <Year>{education.Date}</Year>
                        <Description>{education.Description}</Description>
                      </Row>
                    </Li>
                  );
                })}
              </Ul>
            </div>
          </Row>
        </Section>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

const Section = styled.section`
  padding: 30px;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  border-left: solid 2px #ececec;
  list-style: none;
  padding: 0 0 40px 30px;
  position: relative;

  :not(:first-child):before {
    border-color: #ffb100 !important;
    content: "";
    border: solid 2px;
    width: 8px;
    height: 8px;
    border-radius: 50px;
    font-size: 8px;
    margin-left: -35px;
    font-weight: 400;
    background: #fff;
    display: block;
    position: absolute;
    margin-top: 9px;
  }
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding-top: 7px;
  margin-left: 25px;
`;

const HeaderTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Year = styled.span`
  font-size: 12px;
`;

const Description = styled.span`
  color: #989898;
  font-size: 13px;
`;
