import useTab from '#/hooks/useTab';
import React from 'react';

import ProblemList from './ProblemList';
import ProblemUtil from './ProblemUtil';

const buttonGroup = [
  { idx: 0, text: '전체', level: ['초급', '중급', '고급'] },
  { idx: 1, text: '초급', level: ['초급'] },
  { idx: 2, text: '중급', level: ['중급'] },
  { idx: 3, text: '고급', level: ['고급'] },
];

export default function ProblemSection({ data }) {
  const { currentItem, changeItem } = useTab(0, buttonGroup);

  return (
    <>
      <ProblemUtil
        buttonGroup={buttonGroup}
        currentItem={currentItem}
        changeItem={changeItem}
      />
      <ProblemList challengeData={data} level={currentItem.level} />
    </>
  );
}
