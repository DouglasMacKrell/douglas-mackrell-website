import React from "react";
import "./App.css";
import ToolBar from "./Components/ToolBar/ToolBar";
import Home from "./Components/Home/Home";
import SideDrawer from "./Components/SideDrawer/SideDrawer";

function App() {
  return (
    <div style={{height: '100%'}}>
      <ToolBar />
      <SideDrawer />
      <main style={{marginTop: "64px"}}>
        This is my content.
      </main>
    </div>
  );
}

export default App;
