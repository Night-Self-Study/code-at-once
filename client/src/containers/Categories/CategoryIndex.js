import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import palette from "lib/styles/palette";

import { dummyCategory } from "lib/dummyCourse";
import NoDecorationLink from "components/NoDecorationLink";
import SimpleCard from "components/SimpleCard";

const categories = ["WEB", "OS", "AI", "DATA STRUCTURE", "SECURITY"];
const CategoryIndex = ({ match }) => {
  return (
    <CategoryIndexWrapper>
      <h1>Categories</h1>
      <div className="categories">
        {categories.map((category) => {
          return (
            <NoDecorationLink
              key={category}
              to={`${match.url}/${category.replace(" ", "").toLowerCase()}`}
            >
              <CategorySimpleCard background={palette.classicBlue}>
                {category}
              </CategorySimpleCard>
            </NoDecorationLink>
          );
        })}
      </div>
    </CategoryIndexWrapper>
  );
};

const CategoryIndexWrapper = styled.div`
  h1 {
    font-size: 30px;
    margin: 0 auto;
    text-align: center;
    padding: 10px 0px;
    margin: 40px 0px;
    border-bottom: 1px solid gray;
  }
  .categories {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, minmax(200px, auto));
    gap: 80px;
  }
`;

const CategorySimpleCard = styled(SimpleCard)`
  color: white;
  background: ${(props) => props.background || palette.pastelBlue};
  border: 1px solid gray;
  border-radius: 8px;
  font-size: 32px;
  &:hover {
    background: ${palette.pastelBlue};
  }
`;
export default CategoryIndex;
