import React from "react";
import styled from "styled-components";
import UploadForm from "components/uploadCourse/UploadForm";
import ImageInput from "components/ImageInput";
import Button from "components/Button";

const UploadCourse = ({ match, history }) => {
  return (
    <UploadCourseWrapper>
      <div className="upload-form">
        <div className="left-forms">
          <div className="row">
            <span>강의 이름</span>
            <input type="text" placeholder="강의 이름" />
          </div>
          <div className="row">
            <span>강의 수준</span>
            <label name="level">
              초급
              <input type="radio" name="level" />
            </label>
            <label name="level">
              중급
              <input type="radio" name="level" />
            </label>
          </div>
          <div className="row">
            <span>공개 여부</span>
            <label name="open">
              Public
              <input type="radio" name="open" />
            </label>
            <label name="open">
              Private
              <input type="radio" name="open" />
            </label>
          </div>
        </div>
        <ImageInput />
      </div>
      <div className="upload-index">
        <UploadForm match={match} history={history} index={1} />
        <UploadForm match={match} history={history} index={2} />
        <UploadForm match={match} history={history} index={3} />
      </div>
      <Button>저장</Button>
    </UploadCourseWrapper>
  );
};

const UploadCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: 0 auto;
  .upload-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-forms {
      .row {
        margin: 20px 0px;
        padding: 20px 0px;
      }
      span {
        background: gray;
        text-align: right;
        padding: 20px;
        border-radius: 0.25em;
        margin-right: 10px;
        color: white;
      }
      label {
        padding: 20px;
        input {
          margin: 0px 7px;
        }
      }
    }
  }

  input {
    padding: 19px;
    border: 1px solid black;
    border-radius: 8px;
  }
  .upload-index {
    margin: 20px 0px;
  }
`;
export default UploadCourse;
