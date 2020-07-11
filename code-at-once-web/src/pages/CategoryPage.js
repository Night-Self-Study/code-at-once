import React from 'react';
import { Route } from 'react-router-dom';

import CategoryIndex from 'containers/category/CategoryIndex';
import CategoryDetail from 'containers/category/CategoryDetail';
import LevelTest from 'containers/category/LevelTest';
import LevelTestResult from 'containers/category/LevelTestResult';

const CategoryPage = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={CategoryIndex} />
      <Route
        exact
        path={`${match.path}/:category`}
        component={CategoryDetail}
      />
      <Route
        exact
        path={`${match.path}/:category/leveltest`}
        component={LevelTest}
      />
      <Route
        exact
        path={`${match.path}/:category/leveltest/result`}
        component={LevelTestResult}
      />
    </>
  );
};

export default CategoryPage;
