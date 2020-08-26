import React from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		top: '50%',
		left: '50%',
	},
});

export default function Loading() {
	const classes = useStyles();
	return <CircularProgress size='64px' className={classes.root} />;
}
