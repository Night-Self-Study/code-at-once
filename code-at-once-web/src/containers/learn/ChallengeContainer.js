import React from 'react';
import ChallengeList from 'components/learn/ChallengeList';
import LearnUtilSection from 'components/learn/ChallengeUtilSection';

const dummyChallenge = [
	{
		title: '스택을 이용한 문제',
		category: '스택',
		level: '초급',
		content: '스택은 우리말로 선입선출',
	},
	{
		title: '큐를 이용한 문제',
		category: '큐는 우리말로 선입후출',
		level: '큐',
		content: '중급',
	},
	{
		title: '트리를 이용한 문제',
		category: '트리는 우리말로 나무ㅋㅋ',
		level: '트리',
		content: '고급',
	},
];

export default function SubjectContainer({ match }) {
	console.log(match.params);

	return (
		<>
			<LearnUtilSection />
			<ChallengeList challengeData={dummyChallenge} />
		</>
	);
}
