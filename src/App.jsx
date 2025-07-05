import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Contact />
      <Skills />
    </main>
  );
}

export default App;
