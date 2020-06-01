import React from "react";
import styled from "styled-components";

import Card from "components/Card";
import Button from "components/Button";

const CourseList = ({ category, data = [], goBack }) => {
  const content = data.map((item) => (
    <li key={item.title}>
      <Card isLong {...item} />
    </li>
  ));

  return (
    <CourseListSection>
      <header>{category.toUpperCase()}</header>
      {data.length === 0 ? (
        <div className="no-content">
          <Button onClick={goBack}>
            불러올 데이터가 없습니다. <i>Go back</i>
          </Button>
        </div>
      ) : (
        content
      )}
    </CourseListSection>
  );
};

const CourseListSection = styled.section`
  .no-content {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    margin: 10px 0px;
    ${Button} {
      flex-grow: 1;
      margin: 0px;
      padding: 30px 0px;
    }
  }
`;

export default CourseList;
