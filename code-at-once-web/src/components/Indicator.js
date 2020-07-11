import React, { useState } from 'react';
import styled from 'styled-components';

const Indicator = () => {
	const [isOn, setOn] = useState(0);

	return (
		<IndicatorWrapper>
			<span class='dot' />
			<span class='dot' />
			<span class='dot' />
		</IndicatorWrapper>
	);
};

const IndicatorWrapper = styled.div`
	display: flex;
	.dot {
		display: inline-block;
		width: 25px;
		height: 25px;
		background-color: #ccc;
		border-radius: 50%;
		margin: 10px;
	}
`;
export default Indicator;
