import React from 'react';
import { Grid, FormControl, InputLabel, Input } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

export default function CustomForm({ data }) {
	const classes = useStyles();

	return (
		<form className={classes.root} noValidate autoComplete='off'>
			<Grid container>
				{data.map((item, key) => (
					<FormControl fullWidth key={key}>
						<InputLabel htmlFor={item}>{item}</InputLabel>
						<Input id={item} />
					</FormControl>
				))}
			</Grid>
		</form>
	);
}
