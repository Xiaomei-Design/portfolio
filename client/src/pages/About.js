import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav'
import Me from '../images/R0023171.JPG'

const Img = styled.img`
  width: 267px;
  height: 339px;
`

const About = () => {
  return (
    <div>
      <Nav />
      <h1>About me</h1>
      <Img src={Me} />
    </div>
  )
}

export default About
