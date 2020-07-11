import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';

const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarWrapper percentage={percentage}>
      <div className="current-percentage"></div>
      <span className="value">학습율({percentage}%)</span>
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 14px;
  background-color: ${palette.whiteGray};
  border-radius: 8px;
  margin: 10px 0px;
  .current-percentage {
    width: ${(props) => props.percentage}%;
    height: 100%;
    line-height: 14px;
    background-color: ${palette.jade};
    border-radius: 8px;
  }
  .value {
    font-size: 10px;
    color: white;
    font-weight: 0;
  }
`;
export default ProgressBar;
