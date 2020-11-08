import React from 'react';
import { makeStyles } from '@material-ui/core';
import ChallengeResult from '#/components/challenge/ChallengeResult';
import MyContainer from '#/components/common/MyContainer';

const useStyles = makeStyles({
  root: {},
});

export default function ResultPage() {
  const classes = useStyles();

  return (
    <MyContainer>
      <ChallengeResult />
    </MyContainer>
  );
}
