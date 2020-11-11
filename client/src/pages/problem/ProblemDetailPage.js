import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import Editor from '#/components/problem/problemDetail/Editor';
import Paper from '#/components/problem/problemDetail/Paper';
import Template from '#/components/problem/problemDetail/Template';
import LanguageController from '#/components/problem/problemDetail/LanguageController';
import MyContainer from '#/components/common/MyContainer';
import { dummyProblemDataToDemo } from '#/lib/dummyDB';
import { QUERIES } from '#/modules/ApolloClient';
import Loading from '#/components/common/Loading';

export default function DetailPage() {
  const { data, loading, error } = useQuery(QUERIES.GET_PROBLEM, {
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
