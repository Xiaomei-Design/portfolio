import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 
`
const FooterText = styled.p`
  ${'' /* font-size: 0.9em; */}
  text-align: center
` 
const Footer = () => {
  return (
    <div>
      <FooterText>- Made by Xiaomei Wu | All rights reserved. ⛅️ -</FooterText>
    </div>
  )
}

export default Footer
