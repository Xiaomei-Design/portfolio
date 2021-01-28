import React from 'react';
import styled from 'styled-components';
import backgroundImg  from "../images/sincerely-media-ZnEkNHWZEWU-unsplash.jpg";
import Buttons from '../components/Buttons'

const Headline = styled.h1`
  font-family: 'Magnum';
  font-size: 80px;
  font-weight: 800px;
  margin: 0;
  padding: 0;
  display: inline;
  color: #c9f227;
`
const Wrapper = styled.div`
  ${'' /* background-color: #02021f; */}
  ${'' /* background-image: url(${backgroundImg}); */}
  ${'' /* background-size: cover; */}
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Headline2 = styled.h2`
  color: #fffacd
`

const Header = () => {
  return (
    <Wrapper>
      <div style={{paddingLeft: "40px"}}>
      <p>Hi, my name is</p>
      <Headline>Xiaomei Wu</Headline>
      <Headline2>I build websites.</Headline2>
      <Buttons title="Get in touch" />
      </div>
      {/* <img src={backgroundImg}/> */}
    </Wrapper>
  )
}

export default Header
