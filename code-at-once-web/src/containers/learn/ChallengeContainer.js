import React from 'react';
import ChallengeList from 'components/learn/ChallengeList';
import LearnUtilSection from 'components/learn/ChallengeUtilSection';
import { Box } from '@material-ui/core';

const dummyChallenge = [
	{
		title: '스택을 이용한 문제',
		category: '스택',
		level: '초급',
		content: '스택은 우리말로 선입선출',
	},
	{
		title: '큐를 이용한 문제',
		category: '큐',
		level: '중급',
		content: '큐는 우리말로 선입후출',
	},
	{
		title: '트리를 이용한 문제',
		category: '트리',
		level: '고급',
		content: '트리는 우리말로 나무ㅋㅋ',
	},
];

export default function SubjectContainer({ match }) {
	console.log(match.params);

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
