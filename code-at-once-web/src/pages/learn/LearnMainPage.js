import React from 'react';
import { makeStyles, Container, Box, Typography } from '@material-ui/core';
import SubjectCardList from 'components/SubjectCardList';

const useStyles = makeStyles({
	root: {},
});

export default function LearnMainPage() {
	const classes = useStyles();
	return (
		<Box p={4}>
			<Container>
				<Box py={2}>
					<Typography variant='h5'>학습하기</Typography>
				</Box>
				<SubjectCardList />
			</Container>
		</Box>
	);
}
