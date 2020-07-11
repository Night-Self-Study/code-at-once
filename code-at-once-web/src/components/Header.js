import React from 'react';
import styled from 'styled-components';

import NoDecorationLink from 'components/NoDecorationLink';
import Button from 'components/Button';
import ProgressBar from 'components/ProgressBar';

import palette from 'lib/styles/palette';
import useToggle from 'lib/hooks/useToggle';
import NoImage from 'lib/assets/noimage.jpg';

const Header = ({ auth = undefined }) => {
  return (
    <HeaderWrapper>
      <div className="contents">
        <ul>
          <li className="logo">
            <NoDecorationLink to="/">Code at Once</NoDecorationLink>
          </li>
          <li>
            <NoDecorationLink to="/category">Category</NoDecorationLink>
          </li>
        </ul>
        <div className="right">
          {auth ? <AuthenticatedRight /> : <UnAuthenticatedRight />}
        </div>
      </div>
    </HeaderWrapper>
  );
};

const UnAuthenticatedRight = () => (
  <ul>
    <li>
      <NoDecorationLink to="/login">로그인</NoDecorationLink>
    </li>
    <li>
      <NoDecorationLink to="/register">회원가입</NoDecorationLink>
    </li>
  </ul>
);

const AuthenticatedRight = () => {
  const [isClicked, isClickedActions] = useToggle(false);
  const onClickModal = () => {
    isClickedActions.toggle();
  };

  return (
    <ul>
      <li>
        <NoDecorationLink to="/uploadcourse">강의 업로드</NoDecorationLink>
      </li>
      <li>
        <NoDecorationLink to="/logout">로그아웃</NoDecorationLink>
      </li>
      <li>
        <NoDecorationLink to="/mypage">마이페이지</NoDecorationLink>
      </li>
      {/* <li>
        <div onClick={onClickModal}>
          이어서 학습하기
          {isClicked ? (
            <div className="modal">
              <div className="modal-contents">
                <img alt="thumbnamil" src={NoImage} />
                <div className="description">
                  <span>[HTML로 혁신적인 웹사이트 만들기]</span>
                  <ProgressBar percentage="50" />
                  <NoDecorationLink to="/course/web/2/lecture/1">
                    <Button className="continue-button">이어서 학습하기</Button>
                  </NoDecorationLink>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </li> */}
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

  .modal {
    position: fixed;
    margin-top: 5px;
    right: 6vw;
    z-index: 1;
    border: 1px solid gray;
    border-radius: 8px;
    background-color: ${palette.classicBlue};
    pointer: cursor;
    .modal-contents {
      color: white;
      display: flex;
      padding: 10px 10px;
      img {
        max-width: 15vw;
        border-radius: 8px;
        overflow: hidden;
        align-self: row;
      }
      .description {
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        margin-left: 10px;
        justify-content: center;
      }
      ${NoDecorationLink} {
        ${Button} {
          width: 100%;
        }
      }
    }
  }
`;
export default Header;
