import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Welcome, NavMenu, Story, StoryImage, Questionnaire} from "./components/index";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Welcome />
      <NavMenu />
      <Decoration></Decoration>
      <Panels>
        <Left1>
          <StoryImage />
        </Left1>
        <Right1>
          <Story />
          <Questionnaire />
        </Right1>
      </Panels>
      <Decoration></Decoration>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Decoration = styled.div`
  height: 10vh;
`;

const Panels = styled.div`
  display: flex;
`;

const Left1 = styled.div`
  width: 60%;
  height: 100vh;
`;

const Right1 = styled.div`
  width: 40%;
  height: 100vh;
`;
