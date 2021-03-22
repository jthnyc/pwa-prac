import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Welcome,
  NavMenu,
  Story,
  StoryImage,
  FAQ,
  Questionnaire,
} from "./components/index";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import {device} from "./device";

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
          <FAQ />
          <Questionnaire />
        </Right1>
      </Panels>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  // @media ${device.mobileS} {
  //   max-width: 321px;
  // }
  // @media ${device.mobileM} {
  //   max-width: 376px;
  // }
  // @media ${device.mobileL} {
  //   max-width: 426px;
  // }
  // @media ${device.tablet} {
  //   max-width: 768px;
  // }
  // @media ${device.laptop} {
  //   max-width: 1024px;
  // }
  // @media ${device.laptopL} {
  //   max-width: 1440px;
  // }
  // @media ${device.desktop} {
  //   max-width: 2560px;
  // }
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
