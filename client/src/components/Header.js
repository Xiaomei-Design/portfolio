import React from 'react';
import styled from 'styled-components';
import Nav from './Nav'

const Headline = styled.h1`
  font-family: 'Magnum';
  font-size: 40px;
  color: #2d4059;
  margin: 0;
  padding: 0;
  display: inline;
`

const Header = () => {
  return (
    <div>
      <Headline>Xiaomei Wu</Headline>
      <Nav />
    </div>
  )
}

export default Header
