import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "components/Header";

import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import CoursePage from "pages/CoursePage";
import CategoryPage from "pages/CategoryPage";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import CategoryIndex from "containers/Categories/CategoryIndex";
import CategoryRouter from "containers/Categories/CategoryRouter";

const App = () => {
  return (
    <>
      <Header auth={true} />
      <Main>
        <MainWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/course" component={CoursePage} />
            <Route path="/category" component={CategoryRouter} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </MainWrapper>
      </Main>
    </>
  );
};

const MainWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Main = styled.main`
  padding: 2em 0px;
  height: 100%;
`;
export default App;
