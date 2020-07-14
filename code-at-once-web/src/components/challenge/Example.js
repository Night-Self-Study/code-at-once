import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	lineHeight: {
		lineHeight: '1.5rem',
	},
}));

export default function Example({ children }) {
	const classes = useStyles();
	return (
		<>
			{children.map((child, key) => (
				<Typography className={classes.lineHeight} variant='body2' key={key}>
					{child}
				</Typography>
			))}
		</>
	);
}
