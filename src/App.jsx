import React from "react";
import { Navbar, Hero, Contact, Skills, Projects, Footer } from "./components";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div id="contact">
        <Contact />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

export default App;
