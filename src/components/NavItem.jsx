import React from "react";

import styled from "styled-components";
import { Nav } from "react-bootstrap";

export default function NavItem(props) {
  return (
    <React.Fragment>
      <Link>
          <Nav.Item>{props.name}</Nav.Item>
      </Link>
    </React.Fragment>
  );
}

const Link = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  padding: 0 10px;
  line-height: 73px;
  cursor: pointer;
  
  &:hover {
    color: #ffb100;
  }
`;