import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ToolBar from "./Components/ToolBar/ToolBar";
import Home from "./Components/Home/Home";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skills/Skills"
import Footer from "./Components/Footer/Footer";
import Social from "./Components/Social/Social";


const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const handleDrawerToggleClick = () => {
    setSideDrawerOpen((prevDrawerState) => !prevDrawerState);
  };

  const handleBackdropClick = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleBackdropClick} />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Router>
        <ToolBar handleDrawerToggleClick={handleDrawerToggleClick} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <Footer />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/social" component={Social} />
        </main>
      </Router>
    </div>
  );
};

export default App;
