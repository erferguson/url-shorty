import React from "react";
import "./App.css";

import Welcome from "./components/welcome";
import Navigation from "./components/NavComponents/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
    </div>
  );
}

export default App;
