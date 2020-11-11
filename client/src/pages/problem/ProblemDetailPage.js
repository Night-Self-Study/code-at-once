import React from 'react';
import { useQuery } from '@apollo/client';

import Template from '#/components/problem/problemDetail/Template';
import MyContainer from '#/components/common/MyContainer';
import Loading from '#/components/common/Loading';
import { QUERIES } from '#/modules/ApolloClient';

export default function DetailPage() {
  const { data, loading } = useQuery(QUERIES.GET_PROBLEM, {
    variables: { id: 0 },
  });

  if (loading) {
    return <Loading />;
  }

  const { getProblem: problem } = data;

  return (
    <MyContainer>
      <Template data={problem} />
    </MyContainer>
  );
}
