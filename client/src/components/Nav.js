import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const Menu_Wrapper = styled.div`
  display: flex;
  justify-content: left;
`

const Social_Wrapper = styled.div`
  display: flex;
  justify-content: right;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  
`
const Nav = () => {
  return (
    <Wrapper>
    <Menu_Wrapper>
      <HomeOutlinedIcon /><Link to="/home">Home</Link>
      <FaceOutlinedIcon /><Link to='/about'>About</Link>
      <ComputerOutlinedIcon /><Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
    </Menu_Wrapper>

  <Social_Wrapper>
    <LinkedInIcon />
    <GitHubIcon />
    <EmailIcon />
    <EventAvailableIcon />
  </Social_Wrapper>
</Wrapper>
  )
}

export default Nav
