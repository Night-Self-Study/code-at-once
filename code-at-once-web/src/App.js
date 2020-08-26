import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import RegisterPage from 'pages/auth/RegisterPage';
import LoginPage from 'pages/auth/LoginPage';
import LearnPage from 'pages/learn/LearnPage';
import Copyright from 'components/Copyright';

moment.locale('ko');

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
	},
	main: {
		flexGrow: 1,
	},
});
const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Header auth={false} />
			<main className={classes.main}>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/login' component={LoginPage} />
					<Route path='/learn' component={LearnPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</main>
			<Copyright />
		</div>
	);
};

export default App;
