import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SubjectCard from '#/components/LegacyLearn/SubjectCard';

const useStyles = makeStyles({});

export default function SubjectCardList({ subjects = [] }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {subjects.map((subject, key) => (
        <Grid item className={classes.item} xs={4} key={key}>
          <SubjectCard subject={subject} />
        </Grid>
      ))}
    </Grid>
  );
}
