import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProgressBar from 'components/ProgressBar';
import Button from 'components/Button';
import NoDecorationLink from 'components/NoDecorationLink';

const LevelTestResult = ({ location, match }) => {
  const { state } = location;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Do axios.get');
    console.log(JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const Content = () => {
    return (
      <>
        <div className="header">Level Test 결과</div>
        <div className="row">
          <div className="label">이용자 평균</div>
          <div className="result">
            <div className="progress">
              <ProgressBar percentage={60} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="label">추천 코스</div>
          <div className="result">
            <Button
              as={NoDecorationLink}
              to={`/category/${match.params['category']}`}
            >
              중급자 코스
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="label">다른 코스</div>
          <div className="result">
            <Button
              as={NoDecorationLink}
              to={`/category/${match.params['category']}`}
            >
              초급자 코스
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <LevelTestResultWrapper>
      {isLoading ? (
        <div>
          <h1 style={{ fontSize: '32px' }}>채점 중입니다.</h1>
          <div className="dot-pulse" />
        </div>
      ) : (
        <Content />
      )}
    </LevelTestResultWrapper>
  );
};

const LevelTestResultWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  .header {
    text-align: center;
    font-size: 32px;
    margin: 20px 0px;
  }
  .row {
    display: flex;
    align-items: center;
    margin: 20px 0px;
    .label {
      flex: 0.3;
      text-align: right;
    }
    .result {
      display: flex;
      flex: 0.7;
      justify-content: center;
      text-align: center;
      .progress {
        width: 50%;
      }
    }
  }
`;
export default LevelTestResult;
