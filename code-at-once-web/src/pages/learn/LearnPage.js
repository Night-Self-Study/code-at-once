import React from 'react';
import { Route } from 'react-router-dom';

import LearnMainPage from 'pages/learn/LearnMainPage';
import LearnSubjectPage from 'pages/learn/LearnSubjectPage';

export default function Learn({ match }) {
	return (
		<>
			<Route exact path={match.path} component={LearnMainPage} />
			<Route
				exact
				path={`${match.path}/:subject`}
				component={LearnSubjectPage}
			/>
		</>
	);
}
