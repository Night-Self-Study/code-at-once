import React from 'react';

import ProblemList from './ProblemList';
import ProblemUtil from './ProblemUtil';

export default function ProblemSection({ data }) {
  return (
    <>
      <ProblemUtil />
      <ProblemList challengeData={data} />
    </>
  );
}
