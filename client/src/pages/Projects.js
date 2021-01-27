import React from 'react';
import Nav from "../components/Nav"
// import SingleLineGridList from '../components/SingleLineGridList'
// import styled from 'styled-components';
import AdvancedGridList from '../components/AdvancedGridList';


const Projects = () => {
  return (
    <div>
      <Nav />
      <h1>My projects</h1>
      {/* <SingleLineGridList /> */}
      <AdvancedGridList />
    </div>
  )
}

export default Projects
