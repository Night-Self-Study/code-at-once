import React from 'react';

import { Box } from '@material-ui/core';

import Introduce from '#/components/home/Introduce';
import SubjectContainer from '#/containers/subject/SubjectContainer';

const HomePage = () => {
  return (
    <div>
      <Introduce />
      <Box p={5}>
        <SubjectContainer />
      </Box>
    </div>
  );
};

export default HomePage;
