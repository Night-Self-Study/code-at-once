import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	underline: {
		borderBottom: `2px solid ${theme.palette.primary.dark}`,
	},
}));

export default function Headline({ children }) {
	const classes = useStyles();
	return (
		<Box py={2}>
			<Typography className={classes.underline} variant='h5'>
				{children}
			</Typography>
		</Box>
	);
}
