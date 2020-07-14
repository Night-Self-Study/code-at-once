import React from 'react';
import { makeStyles, CardActionArea } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 16,
	},
	pos: {
		fontSize: 12,
		marginBottom: 12,
	},
});

export default function SubjectDetailCard({
	id = -1,
	title = 'title',
	content = 'content',
	category = 'category',
	level = 'level',
}) {
	const classes = useStyles();
	const history = useHistory();

	return (
		<Card className={classes.root}>
			<CardActionArea
				onClick={() => {
					history.push(`${history.location.pathname}/${id}`);
				}}
			>
				<CardContent>
					<Typography
						className={classes.title}
						color='textSecondary'
						gutterBottom
					>
						{title}
					</Typography>
					<Typography className={classes.pos} color='textSecondary'>
						{category}, {level}
					</Typography>

					<Typography variant='body2' component='p'>
						{content}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
