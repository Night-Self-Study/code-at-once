import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

import Header from '#/components/common/Header';
import HomePage from '#/pages/HomePage';
import RegisterPage from '#/pages/auth/RegisterPage';
import LoginPage from '#/pages/auth/LoginPage';
import LearnMainPage from '#/pages/learn/LearnMainPage';
import NotFoundPage from '#/pages/NotFoundPage';
import Copyright from '#/components/common/Copyright';

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
          <Route path='/register' component={RegisterPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/learn' component={LearnMainPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Copyright />
    </div>
  );
}
