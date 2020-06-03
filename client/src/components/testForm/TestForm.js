import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";

import TestFormProblem from "components/testForm/TestFormProblem";

/*
          no: 1,
          question: "Javascript를 사용할 때 html 상에서 선언을 해 주어야 한다.",
          isMultipleQuestion: true,
          viewing: ["Yes", "No"],
          answer: "Yes",
          score: 10,
*/
const TestForm = ({ onCreate, problems }) => {
  const [value, setValue] = useState({
    1: "Yes",
    2: "Yes",
    3: "a",
  });

  const onChange = (e) => {
    const currentTarget = e.currentTarget;
    setValue({ ...value, [currentTarget.name]: currentTarget.value });
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
      <Button type="submit">제출</Button>
    </TestFormWrapper>
  );
};

const TestFormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  ${Button} {
    margin: 15px;
  }
`;
export default TestForm;
