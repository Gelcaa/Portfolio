//import { useState } from "react";

import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="w-full h-[1px] bg-[#484848] my-4"></div>
      <Skills />
      <div className="w-full h-[1px] bg-[#484848] my-4"></div>
    </>
  );
}

export default App;
