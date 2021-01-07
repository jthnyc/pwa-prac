import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/NavMenu";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Welcome />
    </div>
  );
}

export default App;
