import React from "react";
import styled from "styled-components";

const LectureDetail = () => {
  return (
    <LectureDetailWrapper>
      <div className="partition">
        <div className="tab">tab1</div>
        <div className="contents">a</div>
      </div>
      <div className="partition">
        <div className="tab">tab1</div>
        <div className="tab">tab2</div>
        <div className="contents">a</div>
      </div>
      <div className="partition">
        <div className="tab">tab1</div>
        <div className="tab">tab2</div>
        <div className="contents">
          <iframe title="right-panel"></iframe>
        </div>
      </div>
    </LectureDetailWrapper>
  );
};

const LectureDetailWrapper = styled.div`
  display: flex;

  position: absolute;
  left: 0;
  right: 0;

  height: ${`calc(100vh - 122px - 2em)`};
  .partition {
    flex-basis: 33.333%;
    background: #123456;
    box-shadow: 2px 0 0 0 #888, 0 2px 0 0 #888, 2px 2px 0 0 #888,
      2px 0 0 0 #888 inset, 0 2px 0 0 #888 inset;
    .tab {
      display: inline-block;
      width: 60px;
      height: 2em;
      background: #555555;
      position: relative;
      top: -2em;
      &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 0;
        height: 0;
        border-top: 15px solid white;
        border-left: 15px solid transparent;
      }
    }
    .contents {
      position: absolute;
      top: 0;
      overflow-y: auto;
      width: 33.33%;
      height: 100%;
    }
  }
`;

export default LectureDetail;
