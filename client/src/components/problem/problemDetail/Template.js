import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Paper from './Paper';
import Editor from './Editor';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  contents: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
});

export default function Template({ data }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6}>
        <Paper data={data} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Editor />
      </Grid>
    </Grid>
  );
}
