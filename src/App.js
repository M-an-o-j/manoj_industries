// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

/**
 * App - top-level layout
 * Uses semantic HTML5 sections for accessibility and SEO
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />

      <main className="md:px-24">
        <Hero />
        
      </main>

      <Footer />
    </div>
  );
}
