import React from "react";
import CustomForm from "../components/CustomForm";
import styled from "styled-components";
import Button from "../components/Button";

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <div className="header">로그인</div>
      <CustomForm data={["ID", "Password"]} />
      <Button>로그인</Button>
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.div`
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
export default LoginPage;
