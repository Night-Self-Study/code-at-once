import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  section: {
    lineHeight: '300%',
  },
});

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <section className={classes.section}>
        <p>페이지를 찾을 수 없습니다.</p>
        <p>다시 시도해주세요.</p>
      </section>
      <Link to='/'>
        <h2>홈으로 돌아가기</h2>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
