import React from 'react';
import { makeStyles, Typography, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid black',
    height: '250px',
    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    maxHeight: '100%',
  },
  img: {
    objectFit: 'contain',
    maxHeight: '100%',
  },
  introduce: {
    width: '100%',
    fontSize: '2rem',
    color: '#fff',
    lineHeight: '2rem',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
});

export default function Introduce() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify='flex-end'>
      <Container className={classes.container} maxWidth='lg'>
        <img className={classes.img} src='/images/code.png' alt='code' />
        <Typography className={classes.introduce} color='primary' align='right'>
          코딩이 어렵다면, Code at Once
        </Typography>
      </Container>
    </Grid>
  );
}
