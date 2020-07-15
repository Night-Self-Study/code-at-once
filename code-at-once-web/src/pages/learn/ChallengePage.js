import React from 'react';
import { makeStyles, Container, Box } from '@material-ui/core';
import ChallengeContainer from 'containers/challenge/ChallengeContainer';

const useStyles = makeStyles({
	root: {
		height: '100%',
	},
	long: {
		height: '100%',
	},
});

export default function ChallengePage({ match }) {
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth='lg'>
			<Box className={classes.long} py={3}>
				<ChallengeContainer match={match} />
			</Box>
		</Container>
	);
}
