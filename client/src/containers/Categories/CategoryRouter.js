import React from "react";
import { Route } from "react-router-dom";

import CategoryIndex from "./CategoryIndex";
import CategoryList from "./CategoryList";

const CategoryRouter = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={CategoryIndex} />
      <Route path={`${match.path}/:category`} component={CategoryList} />
    </>
  );
};

export default CategoryRouter;
