import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/SearchBar";
import Card from "../components/Card";

import dummyImage from "../lib/asset/library.jpg";
import palette from "../lib/styles/palette";

import HamburgerMenuIcon from "../components/HamburgerMenuIcon";

const IndexPage = () => {
  const [searchBar, setSearchBar] = useState("");
  const makeDummyCard = () => {
    const dummy = [];
    for (let count = 0; count < 4; count++) {
      dummy.push({
        path: "/course/web/1",
        title: `Course${count}`,
        thumbnail: count % 3 === 1 ? dummyImage : undefined,
        level: count % 3 === 1 ? "초급" : "중급",
        author: `author${count}`,
      });
    }
    return dummy;
  };
  const dummy = makeDummyCard();
  return (
    <IndexWrapper>
      <Input type="container-1" inputWidth="50%" />
      <header>
        <HamburgerMenuIcon />
        <span>web</span>
        <span>ai</span>
        <span>OS</span>
        <span>Data Structure</span>
      </header>
      <section className="courses">
        {dummy.map((item) => (
          <Card
            path={item.path}
            title={item.title}
            thumbnail={item.thumbnail}
            level={item.level}
            author={item.author}
          />
        ))}
      </section>
    </IndexWrapper>
  );
};

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  header {
    display: flex;
    align-self: stretch;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0px;
    margin: 40px 0px;
    background: ${palette.classicBlue};
    color: white;
  }

  .courses {
    width: 100%;
    margin: 40px 0px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default IndexPage;
