import React from "react";
import styled from "styled-components";
import questionMark from "lib/assets/question.png";
import answerMark from "lib/assets/answer.png";
import palette from "lib/styles/palette";

export const QUESTION = "question";
export const ANSWER = "answer";

const QandAForm = ({ type, paragraph }) => {
  const getMark = (type) => {
    if (type === QUESTION) {
      return questionMark;
    }
    if (type === ANSWER) {
      return answerMark;
    }
    console.log("getMark() Error");
  };
  const mark = getMark(type);
  return (
    <QandAFormWrapper>
      <img src={mark} alt="mark" />
      <div className={"paragraph-" + (type === ANSWER ? "answer" : "question")}>
        {paragraph}
      </div>
    </QandAFormWrapper>
  );
};

const QandAFormWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  img {
    display: inline-block;
    width: 30px;
    margin-right: 15px;
  }
  .paragraph-question {
    font-size: 18px;
  }

  .paragraph-answer {
    padding: 10px;
    background: ${palette.pastelBlue};
  }
`;
export default QandAForm;
