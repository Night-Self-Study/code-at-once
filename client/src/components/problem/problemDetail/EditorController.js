import React from 'react';
import {
	makeStyles,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '20%',
	},
	formControl: {
		minWidth: 100,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function EditorController({ language = 'python', setLanguage }) {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<FormControl className={classes.formControl}>
				<InputLabel id='demo-simple-select-label'>Language</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={language}
					onChange={(event) => {
						setLanguage(event.target.value);
					}}
				>
					<MenuItem value={'python'}>Python</MenuItem>
					<MenuItem value={'java'}>Java</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
