import React from 'react';
// import SingleLineGridList from '../components/SingleLineGridList'
// import styled from 'styled-components';
import AdvancedGridList from '../components/AdvancedGridList';
import styled from 'styled-components';

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
    <div>
      <h2>MY PROJECTS</h2>
      {/* <SingleLineGridList /> */}
      <AdvancedGridList />
    </div>
  )
}

export default Projects
