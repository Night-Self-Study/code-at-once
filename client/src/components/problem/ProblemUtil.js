import React from 'react';
import {
  makeStyles,
  TextField,
  Button,
  ButtonGroup,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  buttonGrid: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  selectedButton: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function ProblemUtil({
  buttonGroup = [],
  currentItem = 0,
  changeItem = () => {},
}) {
  const classes = useStyles();

  const onClickTab = (index) => {
    changeItem(index);
  };

  return (
    <Grid container>
      <Grid item xs={8}>
        <TextField fullWidth id='search-filed' label='Search' type='search' />
      </Grid>
      <Grid item xs={4} className={classes.buttonGrid}>
        <ButtonGroup
          className={classes.buttons}
          variant='contained'
          color='primary'
        >
          {buttonGroup.map((button) => (
            <Button
              className={
                currentItem.idx === button.idx ? classes.selectedButton : ''
              }
              key={button.idx}
              onClick={() => onClickTab(button.idx)}
            >
              {button.text}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
