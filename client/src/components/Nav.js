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

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
    <Grid container spacing={1}>
       <Grid item xs={6}>
          <Paper className={classes.paper}>
          <HomeOutlinedIcon /><Link to="/">Home</Link>
          <FaceOutlinedIcon /><Link to='/about'>About</Link>
          <ComputerOutlinedIcon /><Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
            <EventAvailableIcon />
          </Paper>
        </Grid>
      
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
