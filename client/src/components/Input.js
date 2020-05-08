import React from "react";
import styled from "styled-components";

const Input = () => {
  return <InputWrapper />;
};

const InputWrapper = styled.input`
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  font-weight: 200px;
  padding: 20px 30px;
`;
export default Input;
