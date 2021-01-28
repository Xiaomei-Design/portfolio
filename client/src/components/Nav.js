import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FaceOutlinedIcon from "@material-ui/icons/FaceOutlined";
import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import EventAvailableIcon from "@material-ui/icons/EventAvailableOutlined";

const Menu_Wrapper = styled.div`
  display: flex;
  flexdirection: row;
  justifycontent: left;
  margin: 10px 0;
  color: #baf73c;
`;

const Social_Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 10px 0;

  a:link {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: #baf73c;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;


const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #baf73c;
    }
`;

const Nav = () => {
  return (
    <Wrapper>
      <Menu_Wrapper>
        <Article>
          <HomeOutlinedIcon color="#64ffda" fontSize="large" />
          <StyledLink to="/">Home</StyledLink>
        </Article>
        <Article>
          <FaceOutlinedIcon color="#64ffda" fontSize="large" />
          <StyledLink to="/about">About</StyledLink>
        </Article>
        <Article>
          <ComputerOutlinedIcon color="#64ffda" fontSize="large" />
          <StyledLink to="/projects">Projects</StyledLink>
        </Article>
        <Article>
          <MusicVideoIcon color="#64ffda" fontSize="large" />
          <StyledLink to="/blog">Hobbies</StyledLink>
        </Article>
      </Menu_Wrapper>

      <Social_Wrapper>
        <a href="https://www.linkedin.com/in/xiaomei-wu">
        <LinkedInIcon
          color="#baf73c"
          fontSize="large"
          style={{ padding: "0 10px" }}
        /></a>
        <a href="https://github.com/Xiaomei-Design"><GitHubIcon
          color="#baf73c"
          fontSize="large"
          style={{ padding: "0 10px" }}
        /></a>
        <a href="mailto:xiaomeiwu@outlook.de?subject=Mail from your Website">
        <EmailIcon
          color="#baf73c"
          fontSize="large"
          style={{ padding: "0 10px" }}
        /></a>
        <a href='https://calendly.com/xiaomei-wu'>
        <EventAvailableIcon
          color="#baf73c"
          fontSize="large"
          style={{ padding: "0 10px" }}
        /></a>
        
      </Social_Wrapper>
    </Wrapper>
  );
};

export default Nav;
