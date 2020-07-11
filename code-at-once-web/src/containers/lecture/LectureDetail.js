import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HamburgerMenuIcon from 'components/HamburgerMenuIcon';
import palette from 'lib/styles/palette';

import Learn from 'containers/lecture/Learn';
import Terminal from 'containers/lecture/Terminal';
import Editor from 'containers/lecture/Editor';
import QandA from 'containers/lecture/QandA';
import Result from 'containers/lecture/Result';

const QANDA = 'q&a';
const LEARN = 'learn';
const TERMINAL = 'terminal';
const RESULT = 'result';

const LectureDetail = () => {
  const [partitionInfo, setPartitionInfo] = useState({
    isLearn: false,
    isTerminal: true,
  });

  useEffect(() => {
    document.getElementsByTagName('main')[0].style.background =
      palette.pastelBlue;
  }, []);

  const onClickTab = (tabName) => {
    if (tabName === LEARN) {
      setPartitionInfo({ ...partitionInfo, isLearn: true });
      return;
    }
    if (tabName === QANDA) {
      setPartitionInfo({ ...partitionInfo, isLearn: false });
      return;
    }
    if (tabName === RESULT) {
      setPartitionInfo({ ...partitionInfo, isTerminal: false });
      return;
    }
    if (tabName === TERMINAL) {
      setPartitionInfo({ ...partitionInfo, isTerminal: true });
      return;
    }
  };

  return (
    <LectureDetailWrapper>
      <div className="partition">
        <div className="tab" onClick={() => onClickTab(LEARN)}>
          Learn
        </div>
        <div className="tab" onClick={() => onClickTab(QANDA)}>
          Q&A
        </div>
        <div className="contents">
          {partitionInfo['isLearn'] ? (
            <Learn title={'html'} src={'https://ko.wikipedia.org/wiki/HTML5'} />
          ) : (
            <QandA />
          )}
          {/*  or qna */}
        </div>
      </div>
      <div className="partition">
        <div className="tab">Practice</div>
        <div className="contents">
          <Editor />
        </div>
      </div>
      <div className="partition">
        <div className="tab" onClick={() => onClickTab(RESULT)}>
          Result
        </div>
        <div className="tab" onClick={() => onClickTab(TERMINAL)}>
          Terminal
        </div>
        <div className="contents">
          {partitionInfo['isTerminal'] ? (
            <Terminal />
          ) : (
            <Result result={'result'} />
          )}
        </div>
      </div>
      <div className="menu">
        <HamburgerMenuIcon />
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
        content: '';
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

    iframe {
      display: block;
      width: 100%;
      height: 100%;
    }

    .contents {
      position: relative;
      width: 100%;
      height: 100%;
      top: -2em;
    }
  }
  .menu {
    width: 33.33%;
    background: ${palette.pastelLavender};
    position: absolute;
    bottom: 0;
  }
`;

export default LectureDetail;
