import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

import SubjectDetailCard from 'components/ChallengeCard';

const useStyles = makeStyles({});

export default function ChallengeList({ challengeData = [] }) {
	const classes = useStyles();

	return (
		<Grid container spacing={2}>
			{challengeData.map((data, key) => (
				<Grid item xs={12} key={key}>
					<SubjectDetailCard
						title={data.title}
						content={data.content}
						category={data.category}
						level={data.level}
					/>
				</Grid>
			))}
		</Grid>
	);
}
