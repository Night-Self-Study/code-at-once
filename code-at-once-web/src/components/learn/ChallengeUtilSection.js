import React, { useState } from 'react';
import {
	makeStyles,
	TextField,
	Button,
	ButtonGroup,
	Box,
	Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {},
	buttonGrid: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'stretch',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
}));

const buttonGroup = ['전체', '초급', '중급', '고급'];

export default function LearnUtilSection() {
	const classes = useStyles();
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

	return (
		<Grid container>
			<Grid item xs={8}>
				<TextField fullWidth id='search-filed' label='Search' type='search' />
			</Grid>
			<Grid item xs={4} className={classes.buttonGrid}>
				<ButtonGroup
					className={classes.buttons}
					variant='contained'
					color='primary'
					aria-label='contained primary button group'
				>
					{buttonGroup.map((level, key) => (
						<Button key={key}>{level}</Button>
					))}
				</ButtonGroup>
			</Grid>
		</Grid>
	);
}
