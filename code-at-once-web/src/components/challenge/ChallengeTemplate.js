import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		height: '100%',
		justifyContent: 'space-between',
	},
});

export default function ChallengeTemplate({ children }) {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Grid className={classes.root} container spacing={1}>
			{children.map((child, key) => (
				<Grid item xs={6} key={key}>
					{child}
				</Grid>
			))}
			<Button
				fullWidth
				color='primary'
				variant='contained'
				onClick={() => {
					history.push(`${history.location.pathname}/result`);
				}}
			>
				제출
			</Button>
		</Grid>
	);
}
