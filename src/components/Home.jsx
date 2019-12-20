import React from "react";
import About from "./About";
import Stack from "./Stack";
import Skills from "./Skills";

import styled from "styled-components";

export default function Home(props) {
  return (
    <React.Fragment>
      <Wrapper>
        <About />
        <Stack />
        <Skills />
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
  padding: 30px;
`;
