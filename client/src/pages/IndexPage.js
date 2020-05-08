import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/SearchBar";
import Card from "../components/Card";

const IndexPage = () => {
  const [searchBar, setSearchBar] = useState("");

  return (
    <IndexWrapper>
      <Input type="container-1" inputWidth="50%" />
      <section className="section1">
        <Card cardWidth="7" />
        <Card cardWidth="7" />
        <Card cardWidth="7" />
      </section>
    </IndexWrapper>
  );
};

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  .section1 {
    width: 100%;
    margin: 40px 0px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default IndexPage;
