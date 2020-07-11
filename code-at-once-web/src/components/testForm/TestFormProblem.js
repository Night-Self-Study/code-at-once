import React from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import TestFormViewing from './TestFormViewing';

const TestFormProblem = ({ item, onChange }) => {
  return (
    <TestFormDiv>
      <div>{`${item.no}. ${item.question}`}</div>
      {item.isMultipleQuestion ? (
        item.viewing.map((choice) => (
          <TestFormViewing
            key={choice}
            no={item.no}
            choice={choice}
            onChange={(e) => onChange(e)}
          />
        ))
      ) : (
        <Input
          className="input"
          name={item.no}
          type="text"
          onChange={(e) => onChange(e)}
          required
        />
      )}
    </TestFormDiv>
  );
};

const TestFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  .input {
    margin: 15px;
  }
`;
export default TestFormProblem;
