import React from "react";

import CategoryRouter from "containers/Categories/CategoryRouter";

const CategoryPage = ({ match }) => {
  return <CategoryRouter match={match} />;
};

export default CategoryPage;
