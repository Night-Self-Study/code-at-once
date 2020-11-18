import React from 'react';
import { useQuery } from '@apollo/client';

import Template from '#/components/problem/problemDetail/Template';
import MyContainer from '#/components/common/MyContainer';
import Loading from '#/components/common/Loading';
import { QUERIES } from '#/modules/ApolloClient';
import { dummyProblemDataToDemo } from '#/lib/dummyDB';

export default function DetailPage() {
  const { data, loading, error } = useQuery(QUERIES.GET_PROBLEM, {
    variables: { id: 7 },
  });
  console.log(data, error);
  if (loading) {
    return <Loading />;
  }

  let problem = dummyProblemDataToDemo;
  console.log(problem);
  return (
    <MyContainer>
      <Template data={problem} />
    </MyContainer>
  );
}
