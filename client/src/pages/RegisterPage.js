import React from "react";
import CustomForm from "../components/CustomForm";
import styled from "styled-components";
import Button from "../components/Button";

const RegisterPage = () => {
  return (
    <RegisterPageWrapper>
      <div className="header">회원가입</div>
      <CustomForm
        data={["ID", "Password", "Password 확인", "이름", "E-Mail"]}
      />
      <Button>회원가입</Button>
    </RegisterPageWrapper>
  );
};

const RegisterPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;

  .header {
    text-align: center;
    margin: 20px 0px;
    font-size: 28px;
  }

  Button {
    text-algin: center;
  }
`;
export default RegisterPage;
