import React from 'react';

import Introduce from '#/components/home/Introduce';
import MyContainer from '#/components/common/MyContainer';
import ProblemSection from '#/components/problem/ProblemSection';
import { dummyProblems } from '#/lib/dummyDB';

const HomePage = () => {
  // TODO: use reducer
  return (
    <>
      <Introduce />
      <MyContainer>
        <ProblemSection data={dummyProblems} />
        {/* <SubjectCardList subjects={dummySubjects} /> */}
      </MyContainer>
    </>
  );
};

export default HomePage;
