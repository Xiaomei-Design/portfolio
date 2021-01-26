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

const useStyles = makeStyles((theme) => ({
  root: {
    
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));

// const Menu_Wrapper = styled.div`
//   display: flex;
//   justify-content: left;
//   margin-top: 20px
// `

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
  const classes = useStyles();

  return (
    <div>
    <Grid container spacing={1} >
       <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <div>
            <Link to="/"><HomeOutlinedIcon color="primary" fontSize="large"/>Home</Link>
            </div>

            <div>
            <Link to='/about'><FaceOutlinedIcon color="primary" fontSize="large" />About</Link>
            <Link to="/projects"><ComputerOutlinedIcon color="primary" fontSize="large"/>Projects</Link>
            <Link to="/blog"><MusicVideoIcon color="primary" fontSize="large" />Hobbies</Link>
            </div>
          </div>
          {/* <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
            <EventAvailableIcon /> */}
            {/* <p><Icon path={mdiAccount} title="Home" size={2} horizontal 
   color="green" spin={2}/>Home</p> */}
          </Paper>
        </Grid>
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
            <EventAvailableIcon />
          </Paper>
        </Grid>
       */}
    </Grid>

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
