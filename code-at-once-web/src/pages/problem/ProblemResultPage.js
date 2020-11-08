import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProblemResult from '#/components/problem/problemDetail/Result';
import MyContainer from '#/components/common/MyContainer';

const useStyles = makeStyles({
  root: {},
});

export default function ProblemResultPage() {
  const classes = useStyles();

  return (
    <MyContainer>
      <ProblemResult />
    </MyContainer>
  );
}
