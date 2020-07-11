import React, { useRef } from "react";
import styled from "styled-components";
import Button from "components/Button";

const UploadForm = ({ index, match, history }) => {
  const inputRef = useRef();
  const onClickUploadButton = () => {
    inputRef.current.click();
  };

  const onClickSetEnvironment = () => {
    history.push(`${match.url}/setting-env/${index}`);
  };

  return (
    <UploadFormWrapper>
      <label>
        <span>{index}강</span>
        <input type="text" placeholder={`${index}강 제목`} />
      </label>
      <Button onClick={onClickUploadButton} background="indianRed">
        업로드
      </Button>
      <Button onClick={onClickSetEnvironment}>실습 환경 설정</Button>
      <input ref={inputRef} type="file" style={{ display: "none" }}></input>
    </UploadFormWrapper>
  );
};

const UploadFormWrapper = styled.div`
  display: flex;
  width: 70%;
  margin: 10px auto;
  justify-content: flex-start;

  span {
    background: gray;
    padding: 20px 20px;
    border-radius: 5px;
    color: white;
  }
  input {
    margin-left: 10px;
  }
  ${Button} {
    margin-left: 20px;
    margin-left: 20px;
  }
`;
export default UploadForm;
