import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Welcome,
  Photos,
  // Landing,
  // NavMenu,
  Nav,
  Story,
  StoryImage,
  Faq,
  Email,
  COVID,
  Footer,
} from "./components/index";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import {device} from "./device";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Welcome />
      {/* <Landing /> */}
      {/* <NavMenu /> */}
      <Nav />
      <Test>
        <Left>
          <Photos />
        </Left>
        <Right>
          <Panels>
            <Story />
          </Panels>
          {/* <StoryImage /> */}
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
  @media ${device.laptop} {
    width: 60%;
  }
`;

const Right = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 40%;
  }
`;
