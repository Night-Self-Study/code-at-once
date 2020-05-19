import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CoursePage from "./pages/CoursePage";
import TheoryPage from "./pages/TheoryPage";
import PracticePage from "./pages/PracticePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <MainWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/course" component={CoursePage} />
            <Route path="/theory" component={TheoryPage} />
            <Route path="/practice" component={PracticePage} />
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
