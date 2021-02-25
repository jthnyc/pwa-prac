import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Welcome,
  NavMenu,
  Story,
  StoryImage,
  FindInvite,
  Event,
  EventImage,
} from "./components/index";
import styled from "styled-components";

const App = () => {
  return (
    <div className="App">
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
      <Decoration></Decoration>
      <Panels>
        <Left1>
          <EventImage />
        </Left1>
        <Right1>
          <Event />
        </Right1>
      </Panels>
      <Decoration></Decoration>
      <Panels>
        <Left1></Left1>
        <Right1>
          <FindInvite />
        </Right1>
      </Panels>
    </div>
  );
};

export default App;

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
