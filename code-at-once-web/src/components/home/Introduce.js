import React from 'react';
import { makeStyles, Typography, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid black',
		height: '250px',
		backgroundImage: `url('/images/code.png')`,
		backgroundRepeat: 'no-repeat',
		backgroundPositionX: 40,
		backgroundColor: 'rgba(0, 0, 0, .8)',
		backgroundSize: 'contain',
	},
	description: {},
	introduce: {
		width: '100%',
		fontSize: '1.5em',
		color: '#fff',
		lineHeight: '1.5em',
	},
});

export default function Introduce() {
	const classes = useStyles();
	return (
		<Grid className={classes.root} container justify='flex-end'>
			<Grid item xs={11}>
				<Typography className={classes.introduce} color='primary' align='right'>
					Code at Once는 컴퓨터 전공 지식을 코딩테스트를 통해 학습할 때,
					<br />
					어떤 부분을 수정하면 좋을 지 알려주는 코드분석 기반 SW자율학습 웹
					서비스입니다.
				</Typography>
			</Grid>
		</Grid>
	);
}
