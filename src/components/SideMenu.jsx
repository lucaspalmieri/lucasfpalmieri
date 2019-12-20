import React from "react";

import { Link } from "react-router-dom";

import Profile from "../images/profile.jpg";
import styled from "styled-components";
import { IoMdDownload } from "react-icons/io";

export default function SideMenu(props) {
  const styledButton = {
    background: "white",
    fontSize: "20px",
    height: "25px",
    width: "25px",
    borderRadius: "50px",
    marginLeft: "10px",
    padding: "4px"
  };

  const DownloadPDF = () => {
    window.open("./resume.pdf", "_blank");
  };
  return (
    <React.Fragment>
      <Wrapper>
        <ProfileName>
          <Name>Lucas Palmieri</Name>
          <br />
          <Job>Web Developer Full Stack</Job>
        </ProfileName>

        <ProfileImg>
          <img width="100%" src={Profile} alt="Profile avatar" />
        </ProfileImg>

        <Ul>
          <li>
            <Key>
              Name: <Value>Lucas Francisco Palmieri</Value>
            </Key>
          </li>
          <li>
            <Key>
              Job: <Value>Web Developer Full Stack</Value>
            </Key>
          </li>
          <li>
            <Key>
              Email: <Value>lucas.palmieri@hotmail.com</Value>
            </Key>
          </li>
          <li>
            <Key>
              Phone: <Value>+55 11 989229007</Value>
            </Key>
          </li>
        </Ul>
        <DivButton>
          <Link to="/docs/resume.pdf" target="_blank">
            <Button>
              Download Cv
              <IoMdDownload style={styledButton} onClick={DownloadPDF} />
            </Button>
          </Link>
        </DivButton>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

const ProfileName = styled.div`
  padding: 20px;
`;

const Name = styled.span`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
`;

const Job = styled.span`
  font-size: 13px;
  color: #777777;
`;

const ProfileImg = styled.div`
  width: 100%;
`;

const Ul = styled.ul`
  list-style: none;
  font-size: 13px;
  padding: 10px;
`;

const Key = styled.p`
  color: #000;
`;
const Value = styled.span`
  color: #000;
  color: #7f7f7f;
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: 0;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  padding: 1px 29px;
  line-height: 35px;
  background: #ffc500;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;
