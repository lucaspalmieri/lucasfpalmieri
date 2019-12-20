import React from "react";

import styled from "styled-components";

export default function Title(props) {
  return (
    <React.Fragment>
      <Wrapper>
        <Span />
        <H2>{props.name}</H2>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 3px;
  margin-bottom: 8px;
`;

const Span = styled.span`
  background-color: #ffb100;
  position: absolute;
  height: 7px;
  width: 100%;
  bottom: 8px;
  opacity: 0.4;
  left: 0;
`;

const H2 = styled.h2`
  font-size: 18px;
`;
