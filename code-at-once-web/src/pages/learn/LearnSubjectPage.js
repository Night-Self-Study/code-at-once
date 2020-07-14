import React from 'react';
import { makeStyles, Container, Box } from '@material-ui/core';
import SubjectContainer from 'containers/subject/SubjectDatailContainer';

const useStyles = makeStyles({
	root: {},
});

export default function LearnSubjectPage({ match }) {
	const classes = useStyles();

	return (
		<Container maxWidth='md'>
			<Box py={3}>
				<SubjectContainer match={match} />
			</Box>
		</Container>
	);
}
