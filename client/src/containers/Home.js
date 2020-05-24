import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "components/SearchBar";
import Card from "components/Card";

import dummyImage from "lib/assets/library.jpg";
import palette from "lib/styles/palette";

import HamburgerMenuIcon from "components/HamburgerMenuIcon";
import useToggle from "lib/hooks/useToggle";

const Home = () => {
  const [searchBar, setSearchBar] = useState("");
  const [isClicked, isClickedActions] = useToggle(false);

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

  const onClickHamburger = () => {
    isClickedActions.toggle();
  };

  const dummyWeb = ["", "CSS", "JavaScript", "TypeScript", "React"];
  const dummyCs = ["", "Compiler", "PL", "DataStructure", "Git"];
  const dummySystem = ["", "windows", "Ubuntu", "RedHat", "Kali-Linux"];
  const dummyAi = [
    "",
    "Reinforce",
    "Supervised",
    "Unsupervised",
    "Visualization",
  ];

  const dummyCategory = [[], dummyWeb, dummyCs, dummySystem, dummyAi];

  return (
    <HomeWrapper>
      <SearchInput type="container-1" inputWidth="50%" />
      <header>
        <li className="header-head">
          <ul>
            <HamburgerMenuIcon onClick={onClickHamburger} />
          </ul>
          <ul>WEB</ul>
          <ul>DATA STRUCTURE</ul>
          <ul>OS</ul>
          <ul>AI</ul>
        </li>
        {isClicked ? (
          <div className="header-body">
            {dummyCategory.map((category) => {
              return (
                <li key={category} className="column">
                  {category.map((item) => (
                    <ul key={item}>{item}</ul>
                  ))}
                </li>
              );
            })}
          </div>
        ) : null}
      </header>
      <section className="courses">
        {dummy.map((item) => (
          <Card
            key={item.title}
            path={item.path}
            title={item.title}
            thumbnail={item.thumbnail}
            level={item.level}
            author={item.author}
          />
        ))}
      </section>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  header {
    display: flex;
    flex-direction: column;
    align-self: stretch;

    .header-head {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px 0px;
      margin-top: 40px;
      background: ${palette.classicBlue};
      color: white;
    }

    .header-body {
      display: flex;
      justify-content: space-around;

      .column {
        display: flex;
        flex: 1 0 20%;
        flex-direction: column;
        align-items: center;
        padding: 10px 0px;
        background: ${palette.white};
        color: black;
        border-bottom: 1px solid gray;
      }
    }
    ul {
      display: flex;
      justify-content: center;
      flex: 0 1 20%;
      margin: 5px 0px;
    }
  }

  .courses {
    width: 100%;
    margin: 40px 0px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default Home;
