import React from 'react';
import Home from 'containers/home/Home';

import { Container, makeStyles, Box, Typography } from '@material-ui/core';

import Introduce from 'components/home/Introduce';
import SubjectCardList from 'components/home/SubjectCardList';

const HomePage = () => {
	return (
		<div>
			<Introduce />
			<Box p={5}>
				<Box p={3}>
					<Typography variant='h6'>지금 시작하기</Typography>
				</Box>
				<SubjectCardList />
			</Box>
		</div>
	);
};

export default HomePage;
