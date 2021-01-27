import React from 'react';
import styled from 'styled-components';
import backgroundImg  from "../images/sincerely-media-ZnEkNHWZEWU-unsplash.jpg";
import Buttons from '../components/Buttons'

const Headline = styled.h1`
  font-family: 'Magnum';
  font-size: 80px;
  font-weight: 500px;
  margin: 0;
  padding: 0;
  display: inline;
  color: #0a192f;
`
const Wrapper = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = () => {
  return (
    <Wrapper>
      <div style={{paddingLeft: "40px"}}>
      <p>Hi, my name is</p>
      <Headline>Xiaomei Wu</Headline>
      <h2>I build websites.</h2>
      <Buttons title="Get in touch" />
      </div>
      {/* <img src={backgroundImg}/> */}
    </Wrapper>
  )
}

export default Header
