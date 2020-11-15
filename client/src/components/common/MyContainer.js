import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    flexGrow: 1,
  },
}));

export default function MyContainer({ maxWidth = 'lg', children = null }) {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth={maxWidth}>
      {children}
    </Container>
  );
}
