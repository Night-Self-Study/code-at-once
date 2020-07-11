import React from 'react';
import styled from 'styled-components';
import QandAForm, { QUESTION } from 'containers/lecture/QandAForm';

const MyQandA = () => {
	return (
		<MyQandAWrapper>
			<QandAForm
				type={QUESTION}
				paragraph='이 상황에서 이 Tag가 적용이 안되는 이유가 뭔가요?'
			/>
			<QandAForm
				type={QUESTION}
				paragraph='익스플로러에서 동작하지 않습니다.'
			/>
			<QandAForm
				type={QUESTION}
				paragraph='a 태그 대신 다른 태그로 구현할 수 있을까요?'
			/>
		</MyQandAWrapper>
	);
};

const MyQandAWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0px;
`;
export default MyQandA;
