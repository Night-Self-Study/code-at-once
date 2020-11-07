import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	toolbar: {
		justifyContent: 'space-between',
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header() {
	const classes = useStyles();
	const [isLoggedIn, setLoggedIn] = useState(false);
	const history = useHistory();

	return (
		<AppBar position='static'>
			<Toolbar className={classes.toolbar} p={2}>
				<Button
					color='inherit'
					onClick={() => {
						history.push('/');
					}}
				>
					<Typography variant='h6' className={classes.title}>
						Code at Once
					</Typography>
				</Button>
				<RightPanel
					isLoggedIn={isLoggedIn}
					setLoggedIn={setLoggedIn}
					history={history}
				/>
			</Toolbar>
		</AppBar>
	);
}

const RightPanel = ({ isLoggedIn, setLoggedIn, history }) => {
	return (
		<div>
			{' '}
			{isLoggedIn ? (
				<>
					<Button
						color='inherit'
						onClick={() => {
							history.push('/mypage');
						}}
					>
						<Typography>MyPage</Typography>
					</Button>
					<Button
						color='inherit'
						onClick={() => {
							setLoggedIn(false);
						}}
					>
						<Typography>Logout</Typography>
					</Button>
				</>
			) : (
				<>
					<Button
						color='inherit'
						onClick={() => {
							setLoggedIn(true);
						}}
					>
						<Typography>Login</Typography>
					</Button>
					<Button
						color='inherit'
						onClick={() => {
							history.push('/register');
						}}
					>
						<Typography>Register</Typography>
					</Button>
				</>
			)}
		</div>
	);
};
