import React, {useEffect} from 'react'
import styled from 'styled-components'
import randomColor from "randomcolor";
import Fade from 'react-reveal/Fade';

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
const skillsbadge = ["javascript", "react", "mongodb", "html", 
"css", "nodejs", "ruby"]

const Interests = () => {
  useEffect(() => {
    document.title = "Interests | Web Developer Xiaomei Wu"
  })
  
  return (
    <>
    <Fade bottom>
    <Wrapper>
      <h2>MY INTERESTS</h2>
      <div style={styles}>
      {skillsbadge.map((badge) => {
        return (<SVGIcon name={badge} width={100} fill={randomColor()} /> )
      })}
  </div>
    </Wrapper>
    </Fade>
    </>
  )
}

export default Interests
