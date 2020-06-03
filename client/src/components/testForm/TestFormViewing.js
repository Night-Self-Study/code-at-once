import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";

const TestFormViewing = ({ no, choice, onChange }) => {
  return (
    <TestFormLabel name={no}>
      <input
        name={no}
        value={choice}
        type="radio"
        onChange={(e) => onChange(e)}
        required
      />
      {choice}
    </TestFormLabel>
  );
};

const TestFormLabel = styled.label`
  display: block;
  margin: 15px;
  padding: 15px;
  border: 2px solid gray;
  border-radius: 8px;
  input {
    margin-right: 10px;
    &:hover {
      background: ${palette.pastelPurple};
    }
  }
`;
export default TestFormViewing;
