import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
});

export default function MyContainer({ maxWidth = 'lg', children = null }) {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth={maxWidth}>
      {children}
    </Container>
  );
}
