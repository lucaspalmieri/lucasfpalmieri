import React from "react";
import Title from "./Title";

import styled from "styled-components";

export default function About(props) {
  return (
    <React.Fragment>
      <Title name="About Me" />
      <P>
        Hi! I'm Lucas, a junior developer from São Paulo, Brazil. Passionate for
        JavaScript and all of your frameworks and libraries. I'm very rigorous
        about clean code and best practices on my code. My stack is based on
        NodeJs for backend, Express as server, ReactJs for front end, MongoDB
        for data base, Docker for local enviroment, Gulp or Webpack as task
        runner and code compiling, GIT flow for version control.
        <br />
        <br />
        I have 2 years of experince. My first job was in a multinational American company with a small team of developers. I have experience with PHP object oriented, Laravel, SQL
        CRUD, Wordpress custom template, EJS PugJs JadeJs with Webpack or Gulp as template builder
        engine, NodeJs, Nodemailer with Google OAuth2, Express, Puppeteer, ReactJs,
        MongoDB.
        <br />
        I also know a little bit about Google Analytics datalayer push, RD
        Station API integration.        
        <br />
        <br />
        It is in my radar to learn Cloud Computing, Machine learning, Go,
        Flutter and Web scraping.
      </P>
    </React.Fragment>
  );
}

const P = styled.p`
  font-size: 13px;
  color: #4c4c4c;
  line-height: 24px;
`;
