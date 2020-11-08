import React from 'react';
import ChallengeList from '#/components/subject/ChallengeList';
import LearnUtilSection from '#/components/subject/ChallengeUtilSection';
import { Box } from '@material-ui/core';

const dummyChallenge = [
  {
    id: 0,
    title: '스택을 이용한 문제',
    category: '스택',
    level: '초급',
    content: '스택은 우리말로 선입선출',
  },
  {
    id: 1,
    title: '큐를 이용한 문제',
    category: '큐',
    level: '중급',
    content: '큐는 우리말로 선입후출',
  },
  {
    id: 2,
    title: '트리를 이용한 문제',
    category: '트리',
    level: '고급',
    content: '트리는 우리말로 나무ㅋㅋ',
  },
];

export default function SubjectsDetailContainer({ match }) {
  return (
    <>
      <Box py={2}>
        <LearnUtilSection />
      </Box>
      <Box py={2}>
        <ChallengeList challengeData={dummyChallenge} />
      </Box>
    </>
  );
}
