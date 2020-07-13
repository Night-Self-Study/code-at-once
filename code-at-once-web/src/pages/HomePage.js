import React from 'react';

import { Box } from '@material-ui/core';

import Introduce from 'components/home/Introduce';
import HomeSubjectCardList from 'components/SubjectCardList';

const HomePage = () => {
	return (
		<div>
			<Introduce />
			<Box p={5}>
				<HomeSubjectCardList />
			</Box>
		</div>
	);
};

export default HomePage;
