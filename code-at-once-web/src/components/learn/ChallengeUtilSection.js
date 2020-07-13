import React, { useState } from 'react';
import {
	makeStyles,
	TextField,
	Button,
	ButtonGroup,
	Box,
	Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {},
	buttonGrid: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'stretch',
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
}));

const buttonGroup = ['전체', '초급', '중급', '고급'];

export default function LearnUtilSection() {
	const classes = useStyles();
	const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

	return (
		<Grid container>
			<Grid item xs={8}>
				<TextField fullWidth id='search-filed' label='Search' type='search' />
			</Grid>
			<Grid item xs={4} className={classes.buttonGrid}>
				<ButtonGroup
					className={classes.buttons}
					variant='contained'
					color='primary'
					aria-label='contained primary button group'
				>
					{buttonGroup.map((level, key) => (
						<Button key={key}>{level}</Button>
					))}
				</ButtonGroup>
			</Grid>
		</Grid>
	);
}

// export default function LevelButtons() {
// 	const classes = useStyles();
// 	const [latestButtonIndex, setLatestButtonIndex] = useState(0);

// 	const onClickButton = (level, e) => {
// 		const buttonObj = { 전체: 0, 초급: 1, 중급: 2, 고급: 3 };
// 		setLatestButtonIndex(buttonObj[e.currentTarget.innerHTML]);
// 		if (level === '전체') setCourseData(originalData);
// 		else {
// 			setCourseData(
// 				originalData.filter((item) =>
// 					replaceWhiteSpaceAndLowerCase(item.level).includes(level),
// 				),
// 			);
// 		}
// 	};

// 	return (
// 		<>
// 			{buttonGroup.map((level, key) => (
// 				<Button
// 					color='primary'
// 					clicked={index === latestButtonIndex * 1 ? true : false}
// 					key={index}
// 					onClick={(e) => onClickButton(button, e)}
// 				>
// 					{level}
// 				</Button>
// 			))}
// 		</>
// 	);
// }

// const CategoryDetail = ({ history, match }) => {
// 	const [inputValue, setInputValue] = useState('');
// 	const categoryName = match.params.category;
// 	const originalData = dummyCourse[categoryName];

// 	const [courseData, setCourseData] = useState(originalData);
// 	const [latestButtonIndex, setLatestButtonIndex] = useState(0);

// 	const onClickButton = (level, e) => {
// 		const buttonObj = { 전체: 0, 초급: 1, 중급: 2, 고급: 3 };
// 		setLatestButtonIndex(buttonObj[e.currentTarget.innerHTML]);
// 		if (level === '전체') setCourseData(originalData);
// 		else {
// 			setCourseData(
// 				originalData.filter((item) =>
// 					replaceWhiteSpaceAndLowerCase(item.level).includes(level),
// 				),
// 			);
// 		}
// 	};
// 	const onInputChange = (e) => {
// 		const input = replaceWhiteSpaceAndLowerCase(e.target.value);
// 		setInputValue(e.target.value);
// 		setCourseData(
// 			originalData.filter((item) =>
// 				replaceWhiteSpaceAndLowerCase(item.title).includes(input),
// 			),
// 		);
// 	};

// 	return (
// 		<CategoryPageWrapper>
// 			<div className='header'>
// 				<Button as={NoDecorationLink} to={`${match.url}/leveltest`}>
// 					Level Test
// 				</Button>
// 				<SimpleSearchBar
// 					value={inputValue}
// 					onChange={(e) => onInputChange(e)}
// 				/>
// 				<div className='buttons'>
// 					{buttonGroup.map((button, index) => (
// 						<CategoryButton
// 							clicked={index === latestButtonIndex * 1 ? true : false}
// 							key={index}
// 							onClick={(e) => onClickButton(button, e)}
// 						>
// 							{button}
// 						</CategoryButton>
// 					))}
// 				</div>
// 			</div>
// 			<CourseList
// 				category={categoryName}
// 				data={courseData}
// 				goBack={history.goBack}
// 			/>
// 		</CategoryPageWrapper>
// 	);
// };
