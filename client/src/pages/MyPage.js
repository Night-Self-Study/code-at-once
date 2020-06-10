import React, { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import Card from "components/Card";
import dummyCourse from "lib/dummyCourse";

const MyPage = () => {
  const [isRendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);
  return (
    <MyPageWrapper isRendered={isRendered}>
      <div className="mypage-header">
        <p>My Page</p>
        <hr />
        <div className="depth-1">
          <span>내 강좌</span>
        </div>
        <div className="depth-2">
          <span>수강 중인 강좌</span>
          <span> | </span>
          <span>내 Q&A</span>
        </div>
      </div>
      <div className="course-contents">
        {dummyCourse["web"].map((item) => (
          <Card isLong category="web" {...item} />
        ))}
      </div>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  position: absolute;
  top: ${(props) =>
    props.isRendered &&
    document.getElementsByTagName("nav")[0].offsetHeight + "px"}};
  left: 0;
  right: 0;
  .mypage-header {
    background: ${palette.classicBlue};
    padding: 30px;
    color: white;
    p {
      font-size: 32px;
    }
    hr {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
      border: 3px solid white;
    }
  }
  .depth-1,
  .depth-2 {
    margin: 10px 0px;
    cursor: pointer;
  }
  .depth-1 {
    font-size: 24px;
  }
  .depth-2 {
    font-size: 18px;
  }
  .course-contents {
      width: 80%;
      margin: 0 auto;
      background: white;
  }
`;
export default MyPage;
