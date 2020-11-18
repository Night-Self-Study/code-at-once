import React from 'react';
import {
  makeStyles,
  Paper as MuiPaper,
  Box,
  Grid,
  Divider,
} from '@material-ui/core';

import PaperHead from './PaperHead';
import Example from './Example';
import Contents from './Contents';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  example: {
    background: '#f7f7f9',
    border: '1px solid #e1e1e8',
    padding: 4,
    height: '100%',
  },
  underline: {
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Paper({ data }) {
  const classes = useStyles();

  return (
    <MuiPaper className={classes.root}>
      <Box p={3}>
        <PaperHead title={data.title} />
        <Contents head={'설명'} body={data.problemDescription} />
        <Contents head={'입력'} body={data.inputDescription} />
        <Contents head={'출력'} body={data.outputDescription} />
        <Divider className={classes.divider} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Example head={'입력 예제'} body={data.inputExample[0]} />
          </Grid>
          <Grid item xs={6}>
            <Example head={'출력 예제'} body={data.outputExample[0]} />
          </Grid>
          <Grid item xs={6}>
            <Example head={'입력 예제'} body={data.inputExample[1]} />
          </Grid>
          <Grid item xs={6}>
            <Example head={'출력 예제'} body={data.outputExample[1]} />
          </Grid>
        </Grid>
      </Box>
    </MuiPaper>
  );
}
