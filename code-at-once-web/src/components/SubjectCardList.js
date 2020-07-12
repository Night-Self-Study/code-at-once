import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SubjectCard from 'components/SubjectCard';

import algorithmImg from 'lib/assets/algorithm.png';
import dataStructureImg from 'lib/assets/data-structure.png';

const useStyles = makeStyles({});

const dummySubject = [
	{
		title: '알고리즘',
		path: '/learn/algorithm',
		img: algorithmImg,
		description: '알고리즘',
	},
	{
		title: '자료구조',
		path: '/learn/data-structure',
		img: dataStructureImg,
		description: '자료구조',
	},
];

export default function CardList() {
	const classes = useStyles();

	return (
		<Grid container spacing={2}>
			{dummySubject.map((subject, key) => {
				return (
					<Grid item className={classes.item} xs={3} key={key}>
						<SubjectCard subject={subject} />
					</Grid>
				);
			})}
		</Grid>
	);
}
