import React, { useState, useEffect } from 'react';
import { makeStyles, CircularProgress, Grid } from '@material-ui/core';

const useStyles = makeStyles({
	root: {},
});

export default function ChallengeResult() {
	const classes = useStyles();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<Grid container justify='center'>
			{isLoading ? <CircularProgress /> : ''}
		</Grid>
	);
}
