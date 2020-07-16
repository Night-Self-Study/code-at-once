import React, { useState, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Loading from 'components/Loading';

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

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Grid container justify='center'>
			"결과!"
		</Grid>
	);
}
