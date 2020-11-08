import React from 'react';
import { Route } from 'react-router-dom';

import ProblemPage from './index';
import ProblemDetailPage from './ProblemDetailPage';
import ProblemResultPage from './ProblemResultPage';

export default function ProblemRouter({ match }) {
  return (
    <>
      <Route exact path={`${match.url}`} component={ProblemPage} />
      <Route exact path={`${match.url}/:id`} component={ProblemDetailPage} />
      <Route
        exact
        path={`${match.url}/:id/result`}
        component={ProblemResultPage}
      />
    </>
  );
}
