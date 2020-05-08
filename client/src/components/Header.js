import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../lib/styles/palette";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="contents">
        <ul>
          <li className="logo">
            <NoUnderlineLink to="/">Code at Once</NoUnderlineLink>
          </li>
          <li>
            <NoUnderlineLink to="/course">Course</NoUnderlineLink>
          </li>
          <li>
            <NoUnderlineLink to="/theory">Theory</NoUnderlineLink>
          </li>
          <li>
            <NoUnderlineLink to="/practice">Practice</NoUnderlineLink>
          </li>
        </ul>
        <div className="right">
          <ul>
            <li>
              <NoUnderlineLink to="/login">로그인</NoUnderlineLink>
            </li>
            <li>
              <NoUnderlineLink to="/register">회원가입</NoUnderlineLink>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
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
`;

const NoUnderlineLink = styled(Link)`
  text-decoration: none;
  font-weight: 200;
  color: white;
`;
export default Header;
