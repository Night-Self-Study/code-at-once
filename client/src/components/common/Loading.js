import React from 'react';
import { makeStyles, CircularProgress, Backdrop } from '@material-ui/core';

const progressSize = 64;

const useStyles = makeStyles({
  backdrop: {
    zIndex: 9999,
  },
  div: {
    top: '50%',
    right: '50%',
    transform: `translate(50%, 50%)`,
    width: '100%',
    height: '100%',
  },
});

export default function Loading() {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open>
      <div className={classes.div}>
        <CircularProgress
          size={`${progressSize}px`}
          className={classes.progress}
        />
      </div>
    </Backdrop>
  );
}
