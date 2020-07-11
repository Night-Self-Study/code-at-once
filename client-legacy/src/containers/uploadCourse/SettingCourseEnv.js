import React from "react";
import styled from "styled-components";
import palette from "lib/styles/palette";
import Terminal from "containers/lecture/Terminal";
import Learn from "containers/lecture/Learn";

const SettingCourseEnv = ({ match, history }) => {
  const onSubmit = () => {
    history.goBack();
  };
  return (
    <SettingCourseEnvWrapper>
      <div className="lecture-panel">
        <div className="tab">Lecture</div>
        <div className="contents">
          <Learn title="html" src="https://ko.wikipedia.org/wiki/HTML5" />
        </div>
      </div>
      <div className="shell-panel">
        <div className="tab">Shell</div>
        <div className="tab" onClick={() => onSubmit()}>
          Submit
        </div>
        <div className="contents">
          <Terminal />
        </div>
      </div>
    </SettingCourseEnvWrapper>
  );
};

const SettingCourseEnvWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  height: ${`calc(100vh - 122px)`};
  top: 122px;
  .lecture-panel,
  .shell-panel {
    background: gray;
    flex-basis: 50%;
  }
  .contents {
    width: 100%;
    height: 100%;
    position: relative;
    top: -2em;
  }
  .tab {
    display: inline-block;
    width: 100px;
    height: 2em;
    background: ${palette.classicBlue};
    color: white;
    position: relative;
    top: -2em;
    text-align: center;
    line-height: 2em;
    user-drag: none;

    &:after {
      content: "";
      position: absolute;
      right: 0;
      width: 0;
      height: 0;
      border-top: 15px solid ${palette.pastelBlue};
      border-left: 15px solid transparent;
    }
    &:hover,
    &:focus {
      cursor: pointer;
      background: ${palette.darkBlue};
    }
    transition: background 0.3s linear;
  }
`;
export default SettingCourseEnv;
