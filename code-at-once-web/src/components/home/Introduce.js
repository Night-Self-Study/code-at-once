import React from 'react';
import { makeStyles, Typography, Container, Grid } from '@material-ui/core';
import code from 'lib/assets/code.png';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid black',
		height: '200px',
		backgroundImage: `url(${code})`,
		backgroundRepeat: 'no-repeat',
		backgroundPositionX: 40,
		backgroundColor: 'rgba(0, 0, 0, .8)',
		backgroundSize: 'contain',
	},
	description: {},
	introduce: {
		fontSize: '1.5em',
		color: '#fff',
	},
});

export default function Introduce() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container justify='flex-end'>
				<Grid item xs={9}>
					<Container>
						<Typography
							className={classes.introduce}
							align='right'
							color='primary'
						>
							Code at Once는 컴퓨터 전공 지식을 스스로 학습할 때 틀리기 쉬운
							부분을 hint를 통해 학습을 돕습니다.
						</Typography>
					</Container>
				</Grid>
			</Grid>
		</div>
	);
}
