import React from 'react';
import styled from 'styled-components';
import Buttons from '../components/Buttons';
import Typist from 'react-typist';

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
      {/* <p>Hi, my name is</p> */}
      {/* <Typical steps={['Hi, my name is']}
        wrapper="p"
      /> */}
      <Typist >
        <p>Hi, my name is</p>
        <Typist.Delay ms={500} />
        <Headline>Xiaomei Wu</Headline>
        <Typist.Delay ms={500} />
        <Headline2>I build websites.</Headline2>
      </Typist>
        <Buttons title="Get in touch" />
      
      </div>
      {/* <img src={backgroundImg}/> */}
    </Wrapper>
  )
}

export default Header
