import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';

import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import RegisterPage from 'pages/auth/RegisterPage';
import LoginPage from 'pages/auth/LoginPage';
// import MyPage from 'pages/MyPage';
import LearnPage from 'pages/learn/LearnPage';

import Copyright from 'components/Copyright';

const App = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<Header auth={false} />
			<main>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/login' component={LoginPage} />
					{/* <Route path='/mypage' component={MyPage} /> */}
					<Route path='/learn' component={LearnPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</main>
			<Copyright />
		</div>
	);
};

export default App;
