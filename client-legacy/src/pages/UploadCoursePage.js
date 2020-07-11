import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import UploadCourse from "containers/uploadCourse/UploadCourse";
import SettingCourseEnv from "containers/uploadCourse/SettingCourseEnv";

const UploadCoursePage = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} component={UploadCourse} />
      <Route
        exact
        path={`${match.path}/setting-env/:index`}
        component={SettingCourseEnv}
      />
    </>
  );
};

export default UploadCoursePage;
