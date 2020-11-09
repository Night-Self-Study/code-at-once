import React from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';

const progressSize = 64;

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: `translate(50%, 50%)`,
  },
});

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        size={`${progressSize}px`}
        className={classes.progress}
      />
    </div>
  );
}
