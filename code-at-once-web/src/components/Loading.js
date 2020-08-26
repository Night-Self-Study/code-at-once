import React from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';

const progressSize = 64;

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: ~~(progressSize / 2) * -1,
		marginLeft: ~~(progressSize / 2) * -1,
	},
});

export default function Loading() {
	const classes = useStyles();
	return (
		<CircularProgress size={`${progressSize}px`} className={classes.root} />
	);
}
