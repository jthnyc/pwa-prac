import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/NavMenu";
import Welcome from "./components/Welcome";
import RSVP from "./components/RSVP";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Welcome />
      <RSVP />
    </div>
  );
}

export default App;
