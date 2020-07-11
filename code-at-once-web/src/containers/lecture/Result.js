import React from 'react';
import styled from 'styled-components';

const Result = ({ result }) => {
  return (
    <ResultWrapper>
      <div>{result}</div>
    </ResultWrapper>
  );
};

const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  div {
    padding: 10px;
  }
`;
export default Result;
