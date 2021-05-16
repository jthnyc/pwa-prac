import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Welcome,
  Photos,
  // Landing,
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
      {/* <Landing /> */}
      <NavMenu />
      <Test>
        <Left>
          <Photos />
        </Left>
        <Right>
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
        </Right>
      </Test>
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

const Test = styled.div`
  display: flex;
`;

const Left = styled.div`
  border: 1px solid green;
  width: 60%;
`;

const Right = styled.div`
  border: 1px solid red;
  width: 40%;
`;
