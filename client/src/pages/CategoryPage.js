import React from "react";
import styled from "styled-components";
import Card from "components/Card";

import { dummyWeb, dummyOs, dummyCategory } from "lib/dummyCourse";
import palette from "lib/styles/palette";

const CategoryPage = () => {
  return (
    <CategoryPageWrapper>
      <section>
        <header>WEB Course</header>
        {dummyWeb.map((item) => (
          <li>
            <Card isLong />
          </li>
        ))}
      </section>

      <section>
        <header>OS Course</header>
        {dummyOs.map((item) => (
          <li>
            <Card isLong />
          </li>
        ))}
      </section>
    </CategoryPageWrapper>
  );
};

const CategoryPageWrapper = styled.div`
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
export default CategoryPage;
