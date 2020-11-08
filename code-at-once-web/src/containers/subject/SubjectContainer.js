import React from 'react';
import SubjectCardList from '#/components/SubjectCardList';

const dummySubjects = [
  {
    title: '알고리즘',
    path: '/learn/algorithm',
    img: '/images/algorithm.png',
    description: '알고리즘',
  },
  {
    title: '자료구조',
    path: '/learn/data-structure',
    img: '/images/data-structure.png',
    description: '자료구조',
  },
  {
    title: '네트워크',
    path: '/learn/prograaming1',
    img: '/images/no-image.png',
    description: '네트워크',
  },
  {
    title: '운영체제',
    path: '/learn/prograaming2',
    img: '/images/no-image.png',
    description: '운영체제',
  },
];

export default function SubjectContainer() {
  return (
    <>
      <SubjectCardList subjects={dummySubjects} />
    </>
  );
}
