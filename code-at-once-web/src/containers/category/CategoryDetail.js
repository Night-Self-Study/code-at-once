import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import SimpleSearchBar from 'components/SimpleSearchBar';
import Button from 'components/Button';
import NoDecorationLink from 'components/NoDecorationLink';

import { replaceWhiteSpaceAndLowerCase } from 'lib/utils';
import dummyCourse from 'lib/dummyCourse';
import palette from 'lib/styles/palette';

import CourseList from 'containers/category/CourseList';
const buttonGroup = ['전체', '초급', '중급', '고급'];

const CategoryDetail = ({ history, match }) => {
	const [inputValue, setInputValue] = useState('');
	const categoryName = match.params.category;
	const originalData = dummyCourse[categoryName];

	const [courseData, setCourseData] = useState(originalData);
	const [latestButtonIndex, setLatestButtonIndex] = useState(0);

	const onClickButton = (level, e) => {
		const buttonObj = { 전체: 0, 초급: 1, 중급: 2, 고급: 3 };
		setLatestButtonIndex(buttonObj[e.currentTarget.innerHTML]);
		if (level === '전체') setCourseData(originalData);
		else {
			setCourseData(
				originalData.filter((item) =>
					replaceWhiteSpaceAndLowerCase(item.level).includes(level),
				),
			);
		}
	};
	const onInputChange = (e) => {
		const input = replaceWhiteSpaceAndLowerCase(e.target.value);
		setInputValue(e.target.value);
		setCourseData(
			originalData.filter((item) =>
				replaceWhiteSpaceAndLowerCase(item.title).includes(input),
			),
		);
	};

	return (
		<CategoryPageWrapper>
			<div className='header'>
				<Button as={NoDecorationLink} to={`${match.url}/leveltest`}>
					Level Test
				</Button>
				<SimpleSearchBar
					value={inputValue}
					onChange={(e) => onInputChange(e)}
				/>
				<div className='buttons'>
					{buttonGroup.map((button, index) => (
						<CategoryButton
							clicked={index === latestButtonIndex * 1 ? true : false}
							key={index}
							onClick={(e) => onClickButton(button, e)}
						>
							{button}
						</CategoryButton>
					))}
				</div>
			</div>
			<CourseList
				category={categoryName}
				data={courseData}
				goBack={history.goBack}
			/>
		</CategoryPageWrapper>
	);
};

const CategoryButton = styled(Button)`
	padding: 0px 20px;
	margin: 0px 10px;
	color: ${(props) => (props.clicked ? 'white' : '')};
	background: ${(props) => (props.clicked ? palette.classicBlue : '')};
	&:hover {
		color: 'white';
		background: ${palette.classicBlue};
	}
	transition: background 0.3s linear, color 0.3s linear;
`;
const CategoryPageWrapper = styled.div`
	${Button} {
		flex-basis: 30%;
		text-align: center;
	}
	.header {
		display: flex;
		justify-content: space-between;
	}
	.buttons {
		display: flex;
		justify-content: space-between;
	}
	section {
		margin: 40px 0px;
	}
	header {
		text-align: center;
		padding: 20px 0px;
		background: ${palette.classicBlue};
		font-size: 36px;
		color: white;
	}
	li {
		list-style-type: none;
	}
`;

export default CategoryDetail;
