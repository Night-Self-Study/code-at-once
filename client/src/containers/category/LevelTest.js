import React from "react";
import styled from "styled-components";
import dummyLevelTest from "lib/dummyLevelTest";
import TestForm from "components/testForm/TestForm";

const LevelTest = ({ match }) => {
  const testId = 1;

  const handleCreate = (data) => {
    console.log(data);
  };
  return (
    <LevelTestWrapper>
      <div className="header">
        <p className="title">{match.params.category} Level Test</p>
        <p className="description">
          Level Test는 어떤 수준의 강의를 듣는게 적절할 지 추천해주기 위한
          테스트입니다. 다음 문제들에 대해 알맞은 답을 고르거나, 채우시길
          바랍니다.
        </p>
      </div>
      <div className="test">
        <TestForm
          onCreate={handleCreate}
          problems={dummyLevelTest["testId"][testId]["problems"]}
        />
      </div>
    </LevelTestWrapper>
  );
};

const LevelTestWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  .header {
  }
  .title {
    text-align: center;
    font-size: 2em;
  }
  .description {
    font-size: 1em;
  }
  .test {
    margin: 20px 0px;
  }
`;
export default LevelTest;
