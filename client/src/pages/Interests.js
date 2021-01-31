import React from 'react'
import styled from 'styled-components'
import randomColor from "randomcolor";

import SVGIcon from "../components/SVGIcon";

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between",
};

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  ${'' /* justify-content: center; */}
  align-items: center
`
const skillsbadge = ["javascript", "react", "html", 
"css", "nodejs", "mongodb", "ui", "api", "ruby"]

const Interests = () => {
  
  return (
    <Wrapper>
      <h2>MY INTERESTS</h2>
      <div style={styles}>
      {skillsbadge.map((badge) => {
        return (<SVGIcon name={badge} width={100} fill={randomColor()} /> )
      })}
  </div>
    </Wrapper>
  )
}

export default Interests
