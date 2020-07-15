import React from 'react';
import { Route } from 'react-router-dom';

import LearnMainPage from 'pages/learn/LearnMainPage';
import LearnSubjectPage from 'pages/learn/LearnSubjectPage';
import ChallengePage from 'pages/learn/ChallengePage';
import ResultPage from 'pages/learn/ChallengeResultPage';

export default function Learn({ match }) {
	return (
		<>
			<Route exact path={match.path} component={LearnMainPage} />
			<Route
				exact
				path={`${match.path}/:subject`}
				component={LearnSubjectPage}
			/>
			<Route
				exact
				path={`${match.path}/:subject/:id`}
				component={ChallengePage}
			/>
			<Route
				exact
				path={`${match.path}/:subject/:id/result`}
				component={ResultPage}
			/>
		</>
	);
}
