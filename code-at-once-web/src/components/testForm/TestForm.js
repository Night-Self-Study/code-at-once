import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

import TestFormProblem from 'components/testForm/TestFormProblem';
import NoDecorationLink from 'components/NoDecorationLink';

/*
          no: 1,
          question: "Javascript를 사용할 때 html 상에서 선언을 해 주어야 한다.",
          isMultipleQuestion: true,
          viewing: ["Yes", "No"],
          answer: "Yes",
          score: 10,
*/

let initialState = {};
const TestForm = ({ onCreate, problems, linkTo }) => {
  const [value, setValue] = useState(initialState);
  const onChange = (e) => {
    const currentTarget = e.currentTarget;
    setValue({ ...value, [currentTarget.name]: currentTarget.value });
  };

  useEffect(() => {
    problems.forEach((item, index) => {
      initialState[index + 1] = '';
    });
    console.log(initialState);
  }, [problems]);

  const validation = () => {
    Object.keys(value);
  };

  return (
    <TestFormWrapper
      onSubmit={(e) => {
        e.preventDefault();
        onCreate(value);
      }}
    >
      {problems.map((item) => (
        <TestFormProblem key={item.no} item={item} onChange={onChange} />
      ))}

      <Button
        as={NoDecorationLink}
        to={{ pathname: linkTo, state: value }}
        type="submit"
      >
        제출
      </Button>
    </TestFormWrapper>
  );
};

const TestFormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  ${Button} {
    text-align: center;
    margin: 15px;
  }
`;
export default TestForm;
