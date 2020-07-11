import React, { useState } from 'react';
import styled from 'styled-components';

const ImageInput = () => {
	const [file, setFile] = useState(null);
	const handleChange = (e) => {
		setFile(URL.createObjectURL(e.target.files[0]));
	};
	return (
		<ImageInputWrapper>
			<label htmlFor='ex_file'>
				{file && <img src={file} alt='thumbnail' />}
				썸네일 등록
			</label>
			<input type='file' id='ex_file' onChange={handleChange} />
		</ImageInputWrapper>
	);
};

const ImageInputWrapper = styled.div`
	flex-basis: 30%;
	height: 250px;
	label {
		display: inline-block;
		padding: 0.5em 0.75em;
		color: #999;
		font-size: inherit;
		line-height: normal;
		vertical-align: middle;
		background-color: #fdfdfd;
		cursor: pointer;
		border: 1px solid black;
		border-bottom-color: black;
		border-radius: 0.25em;

		width: 100%;
		height: 100%;
		font-align: center;
	}
	input {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		border: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
	}
	img {
		position: absolute;
		height: 250px;
		object-fit: cover;
	}
`;
export default ImageInput;
