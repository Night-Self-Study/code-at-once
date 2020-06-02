import React from "react";
import { Route } from "react-router-dom";

import CategoryIndex from "containers/category/CategoryIndex";
import CategoryDetail from "containers/category/CategoryDetail";
import LevelTest from "containers/category/LevelTest";

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
    </>
  );
};

export default CategoryPage;
