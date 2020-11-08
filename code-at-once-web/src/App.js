import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

import Header from '#/components/common/Header';
import Copyright from '#/components/common/Copyright';
import HomePage from '#/pages/HomePage';
import AuthRouter from '#/pages/auth/Router';
import NotFoundPage from '#/pages/NotFoundPage';
import ProblemRouter from '#/pages/problem/Router';

moment.locale('ko');

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    flexGrow: 1,
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header auth={false} />
      <main className={classes.main}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/auth' component={AuthRouter} />
          <Route path='/problem' component={ProblemRouter} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Copyright />
    </div>
  );
}
