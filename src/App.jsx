import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Project />
      <Contact />
    </>
  );
}

export default App;
