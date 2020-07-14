import React from 'react';
import SubjectCardList from 'components/SubjectCardList';

import algorithmImg from 'lib/assets/algorithm.png';
import dataStructureImg from 'lib/assets/data-structure.png';
import NoImg from 'lib/assets/noimage.jpg';

const dummySubjects = [
	{
		title: '알고리즘',
		path: '/learn/algorithm',
		img: algorithmImg,
		description: '알고리즘',
	},
	{
		title: '자료구조',
		path: '/learn/data-structure',
		img: dataStructureImg,
		description: '자료구조',
	},
	{
		title: '프로그래밍1',
		path: '/learn/prograaming1',
		img: NoImg,
		description: '프로그래밍1',
	},
	{
		title: '프로그래밍2',
		path: '/learn/prograaming2',
		img: NoImg,
		description: '프로그래밍2',
	},
];

export default function SubjectContainer() {
	return (
		<>
			<SubjectCardList subjects={dummySubjects} />
		</>
	);
}
