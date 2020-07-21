import React from "react";
import "./App.css";
import ToolBar from "./Components/ToolBar/ToolBar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <ToolBar />
      <main style={{marginTop: "64px"}}>
        This is my content.
      </main>
    </div>
  );
}

export default App;
