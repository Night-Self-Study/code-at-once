import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  TextField,
  Button,
  ButtonGroup,
  Box,
  Grid,
} from '@material-ui/core';
import useTab from '#/hooks/useTab';

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
}));

const buttonGroup = [
  { idx: 0, value: '전체' },
  { idx: 1, value: '초급' },
  { idx: 2, value: '중급' },
  { idx: 3, value: '고급' },
];

export default function ProblemUtil() {
  const classes = useStyles();
  const { currentItem, changeItem } = useTab(0, buttonGroup);

  useEffect(() => {}, []);

  return (
    <Grid container>
      <Grid item xs={8}>
        <TextField fullWidth id='search-filed' label='search' type='search' />
      </Grid>
      <Grid item xs={4} className={classes.buttonGrid}>
        <ButtonGroup
          className={classes.buttons}
          variant='contained'
          color='primary'
        >
          {buttonGroup.map((level, index) => (
            <Button key={level.idx} onClick={() => changeItem(level.idx)}>
              {level.value}
            </Button>
          ))}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
