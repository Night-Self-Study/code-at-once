import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import SubjectCard from 'components/SubjectCard';

import algorithmImg from 'lib/assets/algorithm.png';
import dataStructureImg from 'lib/assets/data-structure.png';
import NoImg from 'lib/assets/noimage.jpg';

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
	{
		title: '프로그래밍1',
		path: '/learn/prograaming1',
		img: NoImg,
		description: '프로그래밍1',
	},
	{
		title: '프로그래밍2',
		path: '/learn/prograaming2',
		img: NoImg,
		description: '프로그래밍2',
	},
];
// TODO: Move dummySubject to container/

export default function HomeSubjectCardList() {
	const classes = useStyles();

	return (
		<Grid container spacing={2}>
			{dummySubject.map((subject, key) => {
				return (
					<Grid item className={classes.item} xs={4} key={key}>
						<SubjectCard subject={subject} />
					</Grid>
				);
			})}
		</Grid>
	);
}
