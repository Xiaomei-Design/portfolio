import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PetsApp from '../images/petsapp.png';
import HealthTracker from '../images/health-tracker.png';
import Sudoku from '../images/sudoku.png';

const useStyles = makeStyles({
  root: {
    // maxWidth: 500,
  },
  media: {
    width: 400,
    height: 330,
  },
  wrapper: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
    // overflow: 'hidden',
    height: 600,
    padding: 20
  }
});

const tileData = [
  {
    img: HealthTracker,
    title: "Nutrition & Health Tracker",
    github: "https://github.com/My-Health-Tracker-V1/My-health-Tracker",
    webiste: "https://my-health-tracker-v1.herokuapp.com/",
    icon: "health-tracker",
    description: ""
  },

  {
    img: PetsApp,
    title: "A Matching App based on Pets",
    github: "https://github.com/xiaodavi/petsapp",
    website: "https://petsapp-xiaovid.herokuapp.com/",
    icon: "pets-app",
    description: "",
  },
  {
    img: Sudoku,
    title: "A Simplified Sudoku Game",
    github: "https://github.com/Xiaomei-Design/p5js-sudoku",
    webiste: "https://xiaomei-design.github.io/p5js-sudoku/",
    icon: "sudoku",
    description: ""
  }
];

export default function ProjectCard() {
  const classes = useStyles();

  return (
  <div className={classes.wrapper}>
  {tileData.map((tile) => (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={tile.img}
          title={tile.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {tile.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {tile.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={tile.github}>
          GitHub
        </Button>
        <Button size="small" color="primary" href={tile.website}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  ))}
  </div>
  );
}
