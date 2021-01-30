import React from 'react';
import styled from 'styled-components';
import Buttons from '../components/Buttons';
// import Typist from 'react-typist';
// import Typical from 'react-typical';
import Typing from 'react-typing-animation'
// import './Cursor.scss';

const Headline = styled.h1`
  ${'' /* font-family: 'Magnum'; */}
  font-size: 80px;
  font-weight: 900px;
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
  font-size: 30px;
  color: white
`

const Header = () => {
  return (
    <Wrapper>
      
      <div style={{paddingLeft: "40px"}}>
      {/* <p>Hi, my name is</p> */}
      {/* <Typical steps={['Hi, my name is']}
        wrapper="p"
      /> */}
      {/* <Typist >
        <p>Hi, my name is</p>
        <Typist.Delay ms={500} />
        <Headline>Xiaomei Wu</Headline>
        <Typist.Delay ms={500} />
        <Headline2>I build websites.</Headline2>
      </Typist> */}
      <Typing speed={30} >
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
  )
}

export default Header
