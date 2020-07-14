import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	lineHeight: {
		lineHeight: '1.5rem',
	},
}));

export default function Content({ children }) {
	const classes = useStyles();
	return (
		<>
			{children.map((child, key) => (
				<Typography
					className={classes.lineHeight}
					varaint='subtitle1'
					key={key}
				>
					{child}
				</Typography>
			))}
		</>
	);
}
