import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	lineHeight: {
		lineHeight: '1.3rem',
	},
}));

export default function Contents({ head, body = [] }) {
	const classes = useStyles();
	return (
		<>
			<Typography variant='h6'>{head}</Typography>
			{Array.isArray(body) ? (
				body.map((line, key) => (
					<Typography
						className={classes.lineHeight}
						varaint={'subtitle1'}
						key={key}
					>
						{line}
					</Typography>
				))
			) : (
				<Typography className={classes.lineHeight} variant={'subtitle1'}>
					{body}
				</Typography>
			)}
		</>
	);
}
