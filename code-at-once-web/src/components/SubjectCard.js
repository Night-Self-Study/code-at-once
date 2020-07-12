import React from 'react';
import { makeStyles, Avatar, CardActionArea } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.palette.primary.light,
	},
	details: {
		padding: '16px 16px',
	},
	content: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentText: {
		display: 'block',
	},
}));

export default function SubjectCard({ subject }) {
	const classes = useStyles();
	const history = useHistory();
	return (
		<Card>
			<CardActionArea
				className={classes.root}
				onClick={() => {
					console.log('test');
					history.push(`${subject.path}`);
				}}
			>
				<Avatar src={subject.img} variant='square' />
				<div className={classes.details}>
					<Typography align='center' component='h5' variant='h5'>
						{subject.title}
					</Typography>
				</div>
			</CardActionArea>
		</Card>
	);
}
