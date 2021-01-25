import React from 'react';
import styled from 'styled-components';
import Nav from './Nav'

const Headline = styled.h1`
  font-family: 'Magnum';
  font-size: 40px;
  font-weight: 500px;
  color: #bce6eb;
  margin: 0;
  padding: 0;
  display: inline;
`

const Header = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

export default Header
