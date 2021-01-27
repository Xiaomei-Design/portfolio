import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    background: '#0a192f',
    borderRadius: 3,
    border: 0,
    color: 'white',
    width: 180,
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const Buttons = (props) => {
  return (
    <>
      <StyledButton>{props.title}</StyledButton>
    </>
  )
}

export default Buttons
