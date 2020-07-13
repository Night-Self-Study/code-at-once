import React from 'react';
import { makeStyles, CardActionArea } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
	title = 'title',
	content = 'content',
	category = 'category',
	level = 'level',
}) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
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
