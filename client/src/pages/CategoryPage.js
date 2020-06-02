import React from "react";
import { Route } from "react-router-dom";

import CategoryIndex from "containers/Categories/CategoryIndex";
import CategoryList from "containers/Categories/CategoryList";

const CategoryPage = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={CategoryIndex} />
      <Route path={`${match.path}/:category`} component={CategoryList} />
    </>
  );
};

export default CategoryPage;
