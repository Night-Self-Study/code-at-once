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

  if (loading) {
    return <Loading />;
  }
  console.log(data, error);

  let problem = dummyProblemDataToDemo;
  return (
    <MyContainer>
      <Template data={problem} />
    </MyContainer>
  );
}
