import React from 'react';
import { Grid } from '@material-ui/core';

import ProblemCard from '#/components/problem/ProblemCard';

export default function ProblemList({ challengeData = [], level = '전체' }) {
  const filteredData = challengeData.filter((data) =>
    level.includes(data.level),
  );

  return (
    <Grid container spacing={2}>
      {filteredData.map((data, key) => (
        <Grid item xs={12} key={key}>
          <ProblemCard {...data} />
        </Grid>
      ))}
    </Grid>
  );
}
