//import { useState } from "react";

import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="w-full h-[1px] bg-[#484848] mt-4"></div>
      <Skills />
      <div className="w-full h-[1px] bg-[#484848] my-4"></div>
      <Project />
      <div className="w-full h-[1px] bg-[#484848] my-4"></div>
      <Experience />
      <div className="w-full h-[1px] bg-[#484848] my-4"></div>
      {/* Footer Trademark */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} @angelicaysabelbuan. All rights reserved.
      </footer>
    </>
  );
}

export default App;
