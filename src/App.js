import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Welcome,
  NavMenu,
  Story,
  StoryImage,
  // FindInvite,
  // Event,
  // EventImage,
} from "./components/index";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

const App = () => {
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
        </Right1>
      </Panels>
      {/* <Decoration></Decoration>
      <Panels>
        <Left1>
          <EventImage />
        </Left1>
        <Right1>
          <Event />
        </Right1>
      </Panels> */}
      {/* <Decoration></Decoration>
      <Panels>
        <Left1></Left1>
        <Right1>
          <FindInvite />
        </Right1>
      </Panels> */}
    </AppContainer>
  );
};

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
  // border: 1px solid red;
  width: 60%;
  height: 100vh;
`;

const Right1 = styled.div`
  // border: 1px solid green;
  width: 40%;
  height: 100vh;
`;
