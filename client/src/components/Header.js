import React from "react";
import styled from "styled-components";
import palette from "../lib/styles/palette";
import NoDecorationLink from "./NoDecorationLink";

const Header = ({ auth = undefined }) => {
  return (
    <HeaderWrapper>
      <div className="contents">
        <ul>
          <li className="logo">
            <NoDecorationLink to="/">Code at Once</NoDecorationLink>
          </li>
          <li>
            <NoDecorationLink to="/course">Course</NoDecorationLink>
          </li>
          <li>
            <NoDecorationLink to="/theory">Theory</NoDecorationLink>
          </li>
          <li>
            <NoDecorationLink to="/practice">Practice</NoDecorationLink>
          </li>
        </ul>
        <div className="right">
          {auth ? <AuthenticatedRight /> : <UnAuthenticatedRight />}
        </div>
      </div>
    </HeaderWrapper>
  );
};

const AuthenticatedRight = () => {
  return (
    <ul>
      <li>
        <NoDecorationLink to="/logout">로그아웃</NoDecorationLink>
      </li>
      <li>
        <NoDecorationLink to="/mypage">정보관리</NoDecorationLink>
      </li>
      <li>
        <NoDecorationLink onClick={() => console.log("continue clicked")}>
          이어서 학습하기
        </NoDecorationLink>
      </li>
    </ul>
  );
};

const UnAuthenticatedRight = () => {
  return (
    <ul>
      <li>
        <NoDecorationLink to="/login">로그인</NoDecorationLink>
      </li>
      <li>
        <NoDecorationLink to="/register">회원가입</NoDecorationLink>
      </li>
    </ul>
  );
};

const HeaderWrapper = styled.nav`
  background-color: ${palette.pastelBlue};
  padding: 20px 0px;
  .contents {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .right {
    display: flex;
  }

  ul {
    display: flex;
    padding: 10px;
    align-items: center;
  }

  li {
    color: ${palette.white};
    padding: 0px 10px;
  }

  .logo {
    font-size: 30px;
  }

  ${NoDecorationLink} {
    color: white;
  }
`;
export default Header;
