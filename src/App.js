import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Welcome,
  NavMenu,
  Story,
  StoryImage,
  FAQ,
  Email,
  COVID,
  Footer,
} from "./components/index";
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
        <StoryImage />
        <Story />
      </Panels>
      <Decoration></Decoration>
      <Panels>
        <StoryImage />
        <FAQ />
      </Panels>
      <Decoration></Decoration>
      <Panels>
        <StoryImage />
        <Email />
      </Panels>
      <Decoration></Decoration>
      <Panels>
        <StoryImage />
        <COVID />
      </Panels>
      <Footer />
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
