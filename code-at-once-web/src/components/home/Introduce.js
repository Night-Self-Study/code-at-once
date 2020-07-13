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
		lineHeight: '1.5em',
	},
});

export default function Introduce() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container justify='center'>
				<Grid item xs={6}>
					<Container>
						<Typography
							className={classes.introduce}
							color='primary'
							align='center'
						>
							Code at Once는 컴퓨터 전공 지식을 코딩테스트를 통해 학습할 때,
							<br />
							틀린 부분에 대해 HINT를 제공하는 자율 학습 서비스입니다.
						</Typography>
					</Container>
				</Grid>
			</Grid>
		</div>
	);
}
