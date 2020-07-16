import React from 'react';
import { makeStyles, Grid, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		height: '100%',
		justifyContent: 'space-between',
	},
});

export default function ChallengeTemplate({ editorController, paper, editor }) {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Grid className={classes.root} container spacing={1}>
			<Grid item xs={6}>
				{paper}
			</Grid>
			<Grid item xs={6}>
				{editor}
			</Grid>

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
