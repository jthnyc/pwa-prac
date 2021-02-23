import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {Welcome, NavMenu, Story, FindInvite, Event} from "./components/index";

const App = () => {
  return (
    <div className="App">
      <Welcome />
      <NavMenu />
      {/* <Story /> */}
      {/* <Event /> */}
      <FindInvite />
    </div>
  );
};

export default App;
