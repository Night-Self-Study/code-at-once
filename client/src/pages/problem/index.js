import React from 'react';
import { Container } from '@material-ui/core';

import ProblemSection from '#/components/problem/ProblemSection';
import { dummyProblems } from '#/lib/dummyDB';

export default function ProblemPage() {
  return (
    <Container maxWidth='lg'>
      <ProblemSection data={dummyProblems} />
    </Container>
  );
}
