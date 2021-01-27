import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { HomeIcon } from './Icons';

import { Home, Food} from 'mdi-material-ui';
import { Hobby } from 'mdi-material-ui';

import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';



const Menu_Wrapper = styled.div`
  display: flex;
  flexDirection:"row";
  justifyContent:"space-between";
  margin-top: 20px;
  color: #64ffda;
`

// const Social_Wrapper = styled.div`
//   display: flex;
//   justify-content: right;
//   margin-top: 20px
// `
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
  
// `

const Nav = () => {

  return (
    <div>
 
          <Menu_Wrapper>
            <article>
            <HomeOutlinedIcon color="#64ffda" fontSize="large"/>
            <Link to="/">Home</Link>
            </article>

            <article>
            <FaceOutlinedIcon color="#64ffda" fontSize="large" />
            <Link to='/about'>About</Link>
            <ComputerOutlinedIcon color="#64ffda" fontSize="large"/>
            <Link to="/projects">Projects</Link>
            <MusicVideoIcon color="#64ffda" fontSize="large" />
            <Link to="/blog">Hobbies</Link>
            </article>
          </Menu_Wrapper>
          {/* <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
            <EventAvailableIcon /> */}
            {/* <p><Icon path={mdiAccount} title="Home" size={2} horizontal 
   color="green" spin={2}/>Home</p> */}
         
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
            <EventAvailableIcon />
          </Paper>
        </Grid>
       */}

  {/* <Social_Wrapper>
    <LinkedInIcon />
    <GitHubIcon />
    <EmailIcon />
    <EventAvailableIcon />
  </Social_Wrapper> */}

  
</div>
  )
}

export default Nav
