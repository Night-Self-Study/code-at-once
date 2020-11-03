import React, { useState } from 'react';
import ChallengeTemplate from 'components/challenge/ChallengeTemplate';
import ChallengePaper from 'components/challenge/ChallengePaper';
import Editor from 'components/challenge/Editor';
import EditorController from 'components/challenge/EditorController';

const dummyChallenge = {
	title: '스택을 이용한 문제',
	challengeDescription: [
		'정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.',
		'명령은 총 다섯 가지이다.',
		'push X: 정수 X를 스택에 넣는 연산이다.',
		'pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.',
		'size: 스택에 들어있는 정수의 개수를 출력한다.',
		'empty: 스택이 비어있으면 1, 아니면 0을 출력한다.',
		'top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.',
	],
	inputDescription: [
		'첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다.',
		'둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다.',
		'주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다.',
		'문제에 나와있지 않은 명령이 주어지는 경우는 없다.',
	],
	outputDescription: `출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.`,
	inputExample: [
		'14',
		'push 1',
		'push 2',
		'top',
		'size',
		'empty',
		'pop',
		'pop',
		'pop',
		'size',
		'empty',
		'pop',
		'push 3',
		'empty',
		'top',
	],
	outputExample: ['2', '2', '0', '2', '1', '-1', '0', '1', '-1', '0', '3'],
};

const dummyChallengeToDemo = {
	title: '책 정리하기',
	challengeDescription: [
		`책 이름과 책에 대한 번호가 input으로 주어질 때, 번호가 가장 작은 책에 대해서, 해당 책 이름과 책의 번호를 출력하시오.`,
	],
	inputDescription: ['책 이름과 책 번호가 입력된다.'],
	outputDescription: ['책 이름과 책 번호가 출력된다.'],
	inputExample: [1, 2, 3, 4],
	outputExample: [2, 4, 6, 8],
};

export default function ChallengeContainer({ match }) {
	const [language, setLanguage] = useState('python');

	return (
		<ChallengeTemplate
			paper={
				<ChallengePaper
					challenge={dummyChallengeToDemo}
					editorController={
						<EditorController language={language} setLanguage={setLanguage} />
					}
				/>
			}
			editor={<Editor language={language} />}
		/>
	);
}
