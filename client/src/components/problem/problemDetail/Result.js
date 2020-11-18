import React from 'react';
import moment from 'moment';
import { makeStyles, Grid, Typography, Box } from '@material-ui/core';

import { resultTable } from '#/lib/constants';

const useStyles = makeStyles((theme) => ({
  title: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  infoArea: {
    background: 'gainsboro',
    padding: '20px 0px',
    borderRadius: 8,
  },
  infoItem: {
    borderRight: '1px solid white',
    '&::last-child': {
      borderRight: 'none',
    },
  },
  resultArea: {
    background: 'gainsboro',
    padding: '20px 20px',
    borderRadius: 8,
  },
}));

export default function Result({ data }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify='center'>
      <Grid item xs={12}>
        <Typography className={classes.title} variant='h4'>
          결과
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.infoArea}>
          <Grid className={classes.infoItem} item xs={3}>
            <Typography align='center'>
              문제: <strong>First Book</strong>
            </Typography>
          </Grid>
          <Grid className={classes.infoItem} item xs={3}>
            <Typography align='center'>
              제출:{' '}
              <strong>
                {moment(data.submitAt).format('YY-MM-DD hh:mm:ss')}
              </strong>
            </Typography>
          </Grid>
          <Grid className={classes.infoItem} item xs={3}>
            <Typography align='center'>
              언어: <strong>{resultTable['language'][data.language]}</strong>
            </Typography>
          </Grid>
          <Grid className={classes.infoItem} item xs={3}>
            <Typography align='center'>
              컴파일: <strong>{resultTable['type'][data.resultType]}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5' align='center'>
          분석 결과
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.resultArea}>
          <Typography>{data.message}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
