import React from "react";

import styled from "styled-components";

export default function Skill(props) {
  return (
    <React.Fragment>
      <H3>{props.name}</H3>
      <Progress>
        <Percentage width={props.width} />
      </Progress>
    </React.Fragment>
  );
}

const H3 = styled.h3`
  font-size: 12px;
`;

const Progress = styled.div`
  margin: 10px 0 20px;
  display: block;
  height: 5px;
  position: relative;
  width: 100%;
  overflow: visible;
  border-radius: 50px;
  background: #dfdfdf;
`;

const Percentage = styled.div`
  background: #ffc500;
  width: ${props => props.width};
  height: 100%;
`;
