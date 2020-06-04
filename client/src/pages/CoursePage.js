import React from "react";
import { Route } from "react-router-dom";
import CourseDetail from "containers/course/CourseDetail";

const CoursePage = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={CourseDetail} />
      <Route exact path={`${match.url}/:category`} component={CourseDetail} />
      <Route
        exact
        path={`${match.path}/:category/:id`}
        component={CourseDetail}
      />
    </>
  );
};

export default CoursePage;
