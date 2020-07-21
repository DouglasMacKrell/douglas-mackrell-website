import React, { useState } from "react";
import "./App.css";
import ToolBar from "./Components/ToolBar/ToolBar";
import Home from "./Components/Home/Home";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const handleDrawerToggleClick = () => {
    setSideDrawerOpen((prevDrawerState) => !prevDrawerState)
  }

  let sideDrawer;
  let backdrop;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop />;
  }

  return (
    <div style={{height: '100%'}}>
      <ToolBar handleDrawerToggleClick={handleDrawerToggleClick}/>
      {sideDrawer}
      {backdrop}
      <main style={{marginTop: "64px"}}>
        This is my content.
      </main>
    </div>
  );
}

export default App;
