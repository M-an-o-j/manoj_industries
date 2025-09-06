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

      <main>
        <Hero />
        <section aria-labelledby="services" className="px-6 py-12">
          <div className="mx-auto container-max">
            <h2 id="services" className="text-lg font-semibold tracking-wide uppercase text-gray-700 mb-4">
              Our Services
            </h2>
            <Services />
          </div>
        </section>

        <section aria-labelledby="about" className="px-6 py-12 bg-white/90">
          <div className="mx-auto container-max">
            <h2 id="about" className="text-lg font-semibold tracking-wide uppercase text-gray-700 mb-4">
              About Manoj Industries
            </h2>
            <About />
          </div>
        </section>

        <section aria-labelledby="contact" className="px-6 py-12">
          <div className="mx-auto container-max">
            <h2 id="contact" className="text-lg font-semibold tracking-wide uppercase text-gray-700 mb-4">
              Get in touch
            </h2>
            <Contact />
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
