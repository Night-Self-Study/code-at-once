import React from 'react';
import {
  makeStyles,
  Paper as MuiPaper,
  Typography,
  Box,
  Grid,
} from '@material-ui/core';
import Headline from './Headline';
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
}));

export default function Paper({ data, editorController }) {
  const classes = useStyles();

  return (
    <MuiPaper className={classes.root}>
      <Box p={2}>
        <Headline head={data.title}>{editorController}</Headline>
        <Contents head={'설명'} body={data.problemDescription} />
        <br />
        <Contents head={'입력'} body={data.inputDescription} />
        <br />
        <Contents head={'출력'} body={data.outputDescription} />
        <br />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Example head={'입력 예제'} body={data.inputExample} />
          </Grid>
          <Grid item xs={6}>
            <Example head={'출력 예제'} body={data.outputExample} />
          </Grid>
          <Grid item xs={6}>
            <Example head={'입력 예제'} body={data.inputExample} />
          </Grid>
          <Grid item xs={6}>
            <Example head={'출력 예제'} body={data.outputExample} />
          </Grid>
        </Grid>
      </Box>
    </MuiPaper>
  );
}
