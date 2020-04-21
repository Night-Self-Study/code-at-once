import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";

const IndexPage = () => {
  const [searchBar, setSearchBar] = useState("");

  return (
    <IndexWrapper>
      <Input type="container-1" inputWidth="50%" />
    </IndexWrapper>
  );
};

const IndexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default IndexPage;
