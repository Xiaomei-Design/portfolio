import React from 'react';
import styled, { keyframes } from 'styled-components';
import Buttons from '../components/Buttons';
// import Typist from 'react-typist';
// import Typical from 'react-typical';
import Typing from 'react-typing-animation'
import Fade from 'react-reveal/Fade';
// import './Cursor.scss';

const Headline = styled.h1`
  ${'' /* font-family: 'Magnum'; */}
  font-size: 7em;
  font-weight: 900px;
  margin: 0;
  padding: 0;
  display: inline;
  color: #e26a6a;
`
const Wrapper = styled.div`
  ${'' /* background-color: #02021f; */}
  ${'' /* background-image: url(${backgroundImg}); */}
  ${'' /* background-size: cover; */}
  width: 100%;
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Headline2 = styled.h2`
  font-size: 3em;
  color: #e26a6a;
`

const Header = () => {
  return (
    <>
    <Fade left>
    <Wrapper>
      <div style={{paddingLeft: "40px"}}>
      <Typing speed={20} >
        <p>Hi, my name is</p>
        <Typing.Delay ms={500} />
        <Headline>Xiaomei Wu</Headline>
        <Typing.Delay ms={500} />
        <Headline2>I build websites.</Headline2>
      </Typing>
        {/* <Buttons title="Get in touch" /> */}
      
      </div>
      {/* <img src={backgroundImg}/> */}
    </Wrapper>
    </Fade>
    </>
  )
}

export default Header
