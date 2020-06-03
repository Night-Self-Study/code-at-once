import React, { useEffect } from "react";
import styled from "styled-components";

const LevelTestResult = ({ location, match }) => {
  const { state } = location;
  useEffect(() => {
    console.log("Do axios.get");
  }, []);

  return (
    <LevelTestResultWrapper>
      <div className="header">
        Level Test 결과
        {JSON.stringify(state)}
      </div>
      <div>이용자 평균</div>
      <div>추천 코스</div>
      <div>다른 코스</div>
    </LevelTestResultWrapper>
  );
};

const LevelTestResultWrapper = styled.div``;
export default LevelTestResult;
