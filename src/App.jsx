import React from "react";
import { Navbar, Hero, Contact, Skills, Projects, Footer } from "./components";


function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Contact />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
