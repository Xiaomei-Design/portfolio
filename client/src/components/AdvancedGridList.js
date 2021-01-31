import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from "@material-ui/icons/GitHub";
import StarBorderIcon from '@material-ui/icons/StarBorder';

import PetsApp from '../images/petsapp.png';
import HealthTracker from '../images/health-tracker.png';
import Sudoku from '../images/sudoku.png';
import Icons from '../components/Icons'



const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
    // overflow: 'hidden',
    height: 600,
    // padding: 10
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    // width: 500,
    // height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    listStyle: 'none',
    // margin: 30,
  },

  gridListTile : {
    width: 400,
    height: 330,
    // margin: 10
  },

  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },

  description: {
    color: "white",
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
  {
    img: HealthTracker,
    title: "Nutrition & Health Tracker",
    url: "https://github.com/My-Health-Tracker-V1/My-health-Tracker",
    icon: "health-tracker"
  },

  {
    img: PetsApp,
    title: "A Tinder-like Matching App based on Pets",
    url: "https://github.com/xiaodavi/petsapp",
    icon: "pets-app"
  },
  {
    img: Sudoku,
    title: "A Simplified Sudoku Game",
    url: "https://github.com/Xiaomei-Design/p5js-sudoku",
    icon: "sudoku"
  }
];

export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>

      <div className={classes.gridList}>
        {tileData.map((tile) => (
          <div>
          <GridListTile key={tile.img} className={classes.gridListTile}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon} href={tile.url}>
                  <GitHubIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            
          </GridListTile>
          </div>
          
        ))}
      </div>
    </div>
  );
}
