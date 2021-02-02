import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Me from '../images/me2.png'

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`

const Img = styled.img`
  width: 330px;
  height: 339px;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`
const Headline = styled.h1`
  font-size: 4em
`
const Paragraph = styled.p`
  padding: 50px;
  line-height: 1.8
`

const About = () => {
  return (
    <>
    <Fade top>
    <Wrapper id="about">
      <Headline>ABOUT ME</Headline>
      <Container>
      <Img src={Me} />
      <Paragraph>Hi! I’m Xiaomei, a full-stack web developer based in Berlin, Germany. After
      completing an MA degree in German Literature, I’ve decided to take the leap to
      pursue a career in software engineering. I’ve graduated from a full-time immersive
      software engineering program at Ironhack in Berlin. I love to learn new technologies and
      flex my creativity to create amazing things. </Paragraph>
      </Container>
    </Wrapper>
    </Fade>
    </>
  )
}

export default About
