import React from 'react';
import styled from 'styled-components';

import Me from '../images/R0023171.JPG'

const Wrapper = styled.div`
  ${'' /* background-color: #02021f; */}
  ${'' /* background-image: url(${backgroundImg}); */}
  ${'' /* background-size: cover; */}
  width: 100%;
  height: 600px;
  ${'' /* display: flex; */}
  ${'' /* flex-direction: column; */}
  ${'' /* justify-content: center; */}
`

const Img = styled.img`
  width: 267px;
  height: 339px;
`

const About = () => {
  return (
    <Wrapper>
      <h1>About me</h1>
      <Img src={Me} />
    </Wrapper>
  )
}

export default About
