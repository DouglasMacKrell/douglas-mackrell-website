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

  const handleBackdropClick = () => {
    setSideDrawerOpen(false)
  }

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleBackdropClick} />;
  }

  return (
    <div style={{height: '100%'}}>
      <ToolBar handleDrawerToggleClick={handleDrawerToggleClick}/>
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{marginTop: "64px"}}>
        This is my content.
      </main>
    </div>
  );
}

export default App;
