import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About /> */}
    </div>
  );
}

export default App;
