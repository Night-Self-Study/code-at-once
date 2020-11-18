import React from 'react';

import ProblemResult from '#/components/problem/problemDetail/Result';
import MyContainer from '#/components/common/MyContainer';

export default function ProblemResultPage({ location }) {
  const data = location.state.data;
  console.log(data);
  return (
    <MyContainer>
      <ProblemResult data={data} />
    </MyContainer>
  );
}
