import React from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'Magnum';
  margin: 0;
  padding: 0;
  display: inline;
`

const Header = () => {
  return (
    <div>
      <Headline>Xiaomei Wu</Headline>
    </div>
  )
}

export default Header
