import React, { useState, useEffect } from "react";
import styled from "styled-components";

import palette from "lib/styles/palette";

import SimpleSearchBar from "components/SimpleSearchBar";
import Button from "components/Button";
import CourseList from "containers/Courses/CourseList";

import dummyCourse from "lib/dummyCourse";

const CategoryList = ({ history, match }) => {
  const [inputValue, setInputValue] = useState("");
  const categoryName = match.params.category;

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <CategoryPageWrapper>
      <div className="header">
        <SimpleSearchBar
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="buttons">
          <CategoryButton padding={"10px 20px"}>전체</CategoryButton>
          <CategoryButton>초급</CategoryButton>
          <CategoryButton>중급</CategoryButton>
        </div>
      </div>
      <CourseList
        category={categoryName}
        data={dummyCourse[categoryName]}
        goBack={history.goBack}
      />
    </CategoryPageWrapper>
  );
};

const CategoryButton = styled(Button)`
  padding: 0px 20px;
  margin: 0px 10px;
  &:focus {
    color: black;
    background: orange;
  }
`;
const CategoryPageWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  section {
    margin: 40px 0px;
  }
  header {
    text-align: center;
    padding: 20px 0px;
    background: ${palette.classicBlue};
    font-size: 36px;
    color: white;
  }
  li {
    list-style-type: none;
  }
`;

export default CategoryList;
