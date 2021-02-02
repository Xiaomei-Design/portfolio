import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Fade from 'react-reveal/Fade'

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
  color: white;
  line-height: 1.8
`

const Projects = () => {
  return (
    <>
    <Fade top>
    <Wrapper>
      <h2>MY PROJECTS</h2>
      <ProjectCard />
    </Wrapper>
    </Fade>
    </>
  )
}

export default Projects
