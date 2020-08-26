import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { makeStyles, Grid, Typography, Box } from '@material-ui/core';
import Loading from 'components/Loading';

const useStyles = makeStyles((theme) => ({
	title: {
		borderBottom: `1px solid ${theme.palette.primary.main}`,
	},
	infoArea: {
		background: 'gainsboro',
		padding: '20px 0px',
		borderRadius: 8,
	},
	infoItem: {
		borderRight: '1px solid white',
		'&::last-child': {
			borderRight: 'none',
		},
	},
	resultArea: {
		background: 'gainsboro',
		padding: '20px 20px',
		borderRadius: 8,
	},
}));

export default function ChallengeResult() {
	const classes = useStyles();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		//fetch data
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Grid container spacing={3} justify='center'>
			<Grid item xs={12}>
				<Typography className={classes.title} variant='h4'>
					제출 결과
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Grid container className={classes.infoArea}>
					<Grid className={classes.infoItem} item xs={3}>
						<Typography align='center'>
							문제: <strong>스택을 이용한 문제</strong>
						</Typography>
					</Grid>
					<Grid className={classes.infoItem} item xs={3}>
						<Typography align='center'>
							제출: <strong>{moment().format('HH:mm:ss')}</strong>
						</Typography>
					</Grid>
					<Grid className={classes.infoItem} item xs={3}>
						<Typography align='center'>
							언어: <strong>Python</strong>
						</Typography>
					</Grid>
					<Grid className={classes.infoItem} item xs={3}>
						<Typography align='center'>
							컴파일: <strong>성공</strong>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Typography variant='h5' align='center'>
					분석 결과
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Box className={classes.resultArea}>
					<Typography>
						<u>[오답]</u>
					</Typography>
					<Typography>{`해결 방법 추천: Map을 사용해보세요.`}</Typography>
				</Box>
			</Grid>
		</Grid>
	);
}
