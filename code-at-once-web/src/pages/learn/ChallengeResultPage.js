import React, { useEffect } from 'react';
import { makeStyles, Container, Box } from '@material-ui/core';
import ChallengeResultContainer from 'containers/challenge/ChallengeResultContainer';

const useStyles = makeStyles({
	root: {},
});

export default function ResultPage() {
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth='lg'>
			<Box className={classes.long} py={3}>
				<ChallengeResultContainer />
			</Box>
		</Container>
	);
}
