import React from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginLeft: '-64px',
		marginTop: '-64px',
	},
});

export default function Loading() {
	const classes = useStyles();
	return <CircularProgress size='128px' className={classes.root} />;
}
