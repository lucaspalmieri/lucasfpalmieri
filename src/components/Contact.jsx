import React, { useState } from "react";
import Title from "./Title";

import axios from "axios";

import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

export default function Contact(props) {
  const baseURL = "https://mailerapplication.herokuapp.com/";
  const [data, setData] = useState({});
  const [hide, setHide] = useState(false);
  const http = axios.create({
    "Access-Control-Allow-Origin": "*",
    baseURL
  });

  let handleInput = event => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    http
      .post("https://mailerapplication.herokuapp.com/", data)
      // .post("http://localhost:5000/", data)
      .then(response => {
        if (response.status === 200) {
          setHide(true);
        }
      });
  };
  return (
    <React.Fragment>
      <Wrapper>
        <Row>
          <Col lg={6}>
            <Title name="Contact Form" />
            <Form onSubmit={handleSubmit} display={hide ? "none" : "unset"}>
              <Row>
                <Col lg={6}>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleInput}
                  />
                </Col>
                <Col lg={6}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={handleInput}
                    required
                  />
                </Col>
                <Col lg={12}>
                  <Textarea
                    name="message"
                    id=""
                    cols="44"
                    rows="10"
                    placeholder="Mensagem"
                    onChange={handleInput}
                    required
                  />
                </Col>
                <Button>Submit</Button>
              </Row>
            </Form>
            <P display={!hide ? "none" : "block"}>
              Thank you for your message!
            </P>
          </Col>
          <Col lg={6}>
            <Title name="Contact Informations" />
            <Ul>
              <Li>
                <b>Address: </b>Rua Correia de Lemos, 543
              </Li>
              <Li>
                <b>Phone:</b> +55 11 98922-9007
              </Li>
              <Li>
                <b>E-mail:</b> lucas.palmieri@hotmail.com
              </Li>
              <Li>
                <b>Skype:</b> palmieri.lucas
              </Li>
            </Ul>
          </Col>
        </Row>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  padding: 30px;
`;

const Form = styled.form`
  display: ${props => props.display};
`;

const P = styled.p`
  display: ${props => props.display};
`;

const Input = styled.input`
  border: 0;
  border-bottom: solid 1px #dfdfdf;
  margin-bottom: 10px;
  font-size: 13px;
  height: 45px;
  padding-left: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 0;
  border-bottom: solid 1px #dfdfdf;
  font-size: 13px;
  padding: 20px 0 0 10px;
  min-height: 100px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: 0;
  border-radius: 50px;
  padding: 1px 29px;
  line-height: 35px;
  background: #ffc500;
  color: black;
  margin-left: 10px;
  cursor: pointer;
`;

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
  font-size: 13px;
`;

const Li = styled.li`
  margin-bottom: 10px;
`;
