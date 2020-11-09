import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

export default function AuthRouter({ match }) {
  return (
    <>
      <Route exact path={`${match.url}`} component={LoginPage} />
      <Route path={`${match.url}/login`} component={LoginPage} />
      <Route path={`${match.url}/register`} component={RegisterPage} />
    </>
  );
}
