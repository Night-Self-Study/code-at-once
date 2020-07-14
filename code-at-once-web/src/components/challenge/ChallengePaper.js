import React from 'react';
import { makeStyles, Paper, Typography, Box, Grid } from '@material-ui/core';
import Content from './Content';
import Headline from './Headline';
import Example from './Example';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	},
	example: {
		background: '#f7f7f9',
		border: '1px solid #e1e1e8',
		padding: 4,
	},
	underline: {
		borderBottom: `1px solid ${theme.palette.primary.light}`,
	},
}));

export default function ChallengePaper({ challenge }) {
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<Box p={2}>
				<Headline>{challenge.title}</Headline>
				<Content>{challenge.challengeDescription}</Content>
				<br />
				<Box>
					<Typography variant='h6'>입력</Typography>
					<Typography>{challenge.inputDescription}</Typography>
				</Box>
				<br />
				<Box>
					<Typography variant='h6'>출력</Typography>
					<Typography>{challenge.outputDescription}</Typography>
				</Box>
				<br />
				<Grid container>
					<Grid item xs={6}>
						<Paper className={classes.example}>
							<Typography variant='h6'>입력 예제</Typography>
							<Example>{challenge.inputExample}</Example>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.example}>
							<Typography variant='h6'>출력 예제</Typography>
							<Example>{challenge.outputExample}</Example>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</Paper>
	);
}
