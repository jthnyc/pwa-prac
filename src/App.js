import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Welcome,
  NavMenu,
  Story,
  StoryImage,
  Faq,
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
      <Panels>
        <Story />
      </Panels>
      <StoryImage />
      <Panels>
        <Faq />
      </Panels>
      <Panels>
        <Email />
      </Panels>
      <Panels>
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

const Panels = styled.div`
  display: flex;
`;
