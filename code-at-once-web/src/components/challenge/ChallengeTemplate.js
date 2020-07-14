import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		height: '100%',
		justifyContent: 'space-between',
	},
});

export default function ChallengeTemplate({ children }) {
	const classes = useStyles();
	console.log(children);
	return (
		<Grid className={classes.root} container spacing={1}>
			{children.map((child, key) => (
				<Grid item xs={6}>
					{child}
				</Grid>
			))}
			<Button fullWidth color='primary' variant='contained'>
				제출
			</Button>
		</Grid>
	);
}
