import React from 'react';
import { makeStyles, Box, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	example: {
		background: '#f7f7f9',
		border: '1px solid #e1e1e8',
		padding: 4,
		height: '100%',
	},
	lineHeight: {
		lineHeight: '1.5rem',
	},
}));

export default function Example({ head, body = [] }) {
	const classes = useStyles();

	return (
		<Paper className={classes.example}>
			<Box p={1}>
				<Typography variant='h6'>{head}</Typography>
				{body.map((line, key) => (
					<Typography className={classes.lineHeight} variant='body2' key={key}>
						{line}
					</Typography>
				))}
			</Box>
		</Paper>
	);
}
