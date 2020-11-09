import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	underline: {
		borderBottom: `2px solid ${theme.palette.primary.dark}`,
	},
}));

export default function Headline({ head, children }) {
	const classes = useStyles();

	return (
		<Box className={classes.root} py={2}>
			<Typography className={classes.underline} variant='h5'>
				{head}
			</Typography>
			{children}
		</Box>
	);
}
