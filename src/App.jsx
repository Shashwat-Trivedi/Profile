import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Contact />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
