import React from "react";

import styled from "styled-components";

export default function Button(props) {
  return (
    <React.Fragment>
      <Wrapper>Hire me</Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.a`
  margin: 18px 18px 0 5px;
`;
