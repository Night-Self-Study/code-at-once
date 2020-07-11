import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage = () => {
	return (
		<NotFoundContainer>
			<section className='section1'>
				<p>페이지를 찾을 수 없습니다.</p>
				<p>다시 시도해주세요.</p>
			</section>
			<Link to='/'>
				<h2> 홈으로 돌아가기</h2>
			</Link>
		</NotFoundContainer>
	);
};

const NotFoundContainer = styled.div`
	display: flex;
	padding: 20px;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	.section1 {
		line-height: 300%;
	}
`;
export default NotFoundPage;
