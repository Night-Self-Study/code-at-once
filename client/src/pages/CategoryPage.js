import React from "react";
import { Route } from "react-router-dom";

import CategoryIndex from "containers/Category/CategoryIndex";
import CategoryDetail from "containers/Category/CategoryDetail";

const CategoryPage = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={CategoryIndex} />
      <Route path={`${match.path}/:category`} component={CategoryDetail} />
    </>
  );
};

export default CategoryPage;
