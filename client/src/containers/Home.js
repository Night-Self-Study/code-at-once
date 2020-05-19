import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/SearchBar";
import Card from "../components/Card";

import dummyImage from "../lib/assets/library.jpg";
import palette from "../lib/styles/palette";

import HamburgerMenuIcon from "../components/HamburgerMenuIcon";
import useToggle from "../lib/hooks/useToggle";

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

  return (
    <HomeWrapper>
      <Input type="container-1" inputWidth="50%" />
      <header>
        <li className="header-head">
          <ul>
            <HamburgerMenuIcon onClick={onClickHamburger} />
          </ul>
          <ul>a</ul>
          <ul>a</ul>
          <ul>o</ul>
          <ul>d</ul>
        </li>
        {isClicked ? (
          <div className="header-body">
            <li className="header-row">
              <ul> </ul>
              <ul>a</ul>
              <ul>b</ul>
              <ul>c</ul>
              <ul>d</ul>
            </li>
            <li className="header-row">
              <ul> </ul>
              <ul>a</ul>
              <ul>b</ul>
              <ul>c</ul>
              <ul>d</ul>
            </li>
            <li className="header-row">
              <ul> </ul>
              <ul>a</ul>
              <ul>b</ul>
              <ul>c</ul>
              <ul>d</ul>
            </li>
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
  }

  .header-head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0px;
    margin-top: 40px;
    background: ${palette.classicBlue};
    color: white;
    ul {
      display: flex;
      justify-content: center;
      flex: 0 1 20%;
    }
  }
  .header-body {
    display: flex;
    flex-direction: column;

    .header-row {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 20px 0px;
      background: ${palette.white};
      color: black;
      border-bottom: 1px solid gray;

      ul {
        display: flex;
        justify-content: center;
        flex: 0 1 20%;
      }
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
