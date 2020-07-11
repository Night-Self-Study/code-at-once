import React from 'react';
import styled from 'styled-components';

import QandAForm from 'containers/lecture/QandAForm';
import Input from 'components/Input';

const QUESTION = 'question';
const ANSWER = 'answer';

const QandA = () => {
	return (
		<QandAWrapper>
			<p className='question-index'>1. HTML5</p>
			<div className='q-and-a-list'>
				<div className='q-and-a'>
					<QandAForm
						type={QUESTION}
						paragraph='이 상황에서 이 Tag가 적용이 안되는 이유가 뭔가요?'
					/>
					<QandAForm type={ANSWER} paragraph='오타가 발생 했기 때문입니다.' />
				</div>
				<div className='q-and-a'>
					<QandAForm type={QUESTION} paragraph='설치가 안돼요' />
					<Input placeholder='답변을 작성해주세요.' />
				</div>
			</div>
		</QandAWrapper>
	);
};

const QandAWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding-top: 8px;
	padding-left: 8px;
	background: white;
	box-sizing: border-box;

	.question-index {
		font-size: 32px;
	}
	.q-and-a {
		display: flex;
		flex-direction: column;
	}
`;
export default QandA;
