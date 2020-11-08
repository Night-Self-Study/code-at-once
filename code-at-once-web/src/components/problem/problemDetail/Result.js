import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { makeStyles, Grid, Typography, Box } from '@material-ui/core';
import Loading from '#/components/common/Loading';

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

const now = moment().format('HH:mm:ss');

export default function Result() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //fetch data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Grid container spacing={3} justify='center'>
      <Grid item xs={12}>
        <Typography className={classes.title} variant='h4'>
          제출 결과
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.infoArea}>
          <Grid className={classes.infoItem} item xs={3}>
            <Typography align='center'>
              문제: <strong>책 정리하기</strong>
            </Typography>
          </Grid>
          <Grid className={classes.infoItem} item xs={3}>
            <Typography align='center'>
              제출: <strong>{now}</strong>
            </Typography>
          </Grid>
          <Grid className={classes.infoItem} item xs={3}>
            <Typography align='center'>
              언어: <strong>Java</strong>
            </Typography>
          </Grid>
          <Grid className={classes.infoItem} item xs={3}>
            <Typography align='center'>
              컴파일: <strong style={{ color: 'green' }}>성공</strong>
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
          <Typography>
            <u style={{ color: 'red' }}>오답</u>입니다.
          </Typography>
          <Typography>{`해결 방법 추천: Map을 사용해보세요.`}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
