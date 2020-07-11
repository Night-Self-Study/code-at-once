import React from 'react';
import { Route } from 'react-router-dom';
import CourseDetail from 'containers/course/CourseDetail';
import LectureDetail from 'containers/lecture/LectureDetail';

const CoursePage = ({ match }) => {
	return (
		<>
			<Route
				exact
				path={`${match.path}/:category/:id`}
				component={CourseDetail}
			/>
			<Route
				exact
				path={`${match.path}/:category/:id/course/:lectureId`}
				component={LectureDetail}
			/>
		</>
	);
};

export default CoursePage;
