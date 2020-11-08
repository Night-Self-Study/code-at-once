import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

import ProblemCard from '#/components/problem/ProblemCard';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
  },
}));

export default function ProblemList({ challengeData = [] }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {challengeData.map((data, key) => (
        <Grid item xs={12} key={key}>
          <ProblemCard
            id={data.id}
            title={data.title}
            content={data.content}
            category={data.category}
            level={data.level}
          />
        </Grid>
      ))}
    </Grid>
  );
}
