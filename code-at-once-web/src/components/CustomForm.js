import React from 'react';
import styled from 'styled-components';
import Input from 'components/Input';

const CustomForm = ({ data }) => {
  return (
    <CustomFormWrapper>
      {data.map((item) => {
        return (
          <div key={item} className="row">
            <label>{item}</label>
            <Input />
          </div>
        );
      })}
    </CustomFormWrapper>
  );
};

const CustomFormWrapper = styled.form`
  .row {
    padding: 10px 0px;
    display: flex;
    align-items: center;
  }

  label {
    flex: 0.3;
  }

  Input {
    flex: 0.7;
  }
`;
export default CustomForm;
