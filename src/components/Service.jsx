import React from "react";
import styled from "styled-components";

import { FaCode } from "react-icons/fa";
import { FaAudioDescription } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";

export default function Service(props) {
  const { children } = props;

  return <SubmitField>{children}</SubmitField>;
}

Service.LandingPage = props => {
  return (
    <StyledSubmit>
      <div>
        <FaCode />
      </div>
      <Span>Web Pages</Span>
      <P>Web Pages made with ReactJs, static templates with EJS or JadeJs.</P>
    </StyledSubmit>
  );
};

Service.Ecommerce = props => {
  return (
    <StyledSubmit>
      <div>
        <MdLocalGroceryStore />
      </div>
      <Span>Ecommerce</Span>
      <P>Ecommerce platform made with Wordpress.</P>
    </StyledSubmit>
  );
};

Service.WebServices = props => {
  return (
    <StyledSubmit>
      <div>
        <FaAudioDescription />
      </div>
      <Span>Animated banners</Span>
      <P>HTML5 animated ads.</P>
    </StyledSubmit>
  );
};

Service.WebAnalytics = props => {
  return (
    <StyledSubmit>
      <div>
        <FaEnvelope />
      </div>
      <Span>E-mail marketing</Span>
      <P>HTML5 e-mail marketing code with cross e-mail clients platform support.</P>
    </StyledSubmit>
  );
};


const SubmitField = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 48px 0px rgba(4, 6, 4, 0.08);
  min-height: 186px;
`;

const StyledSubmit = styled.div``;

const Span = styled.span`
  font-size: 13px;
  display: inline-block;
`;

const P = styled.p`
  font-size: 13px;
  color: #989898;
  font-weight: 400;
  line-height: 18px;
`;
