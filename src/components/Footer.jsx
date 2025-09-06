// src/components/Footer.jsx
import React from "react";

/**
 * Footer - small and semantic
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 mt-12">
      <div className="mx-auto container-max px-6 py-8 flex flex-col md:flex-row md:justify-between items-center gap-4 text-sm text-gray-600">
        <div>
          <p className="text-black font-medium">Manoj Industries</p>
          <p className="mt-1">React.js • IT Services</p>
        </div>

        <div className="text-center md:text-right">
          <p>© {year} Manoj Industries. All rights reserved.</p>
          <p className="mt-1"><a href="#contact" className="underline">hello@manojindustries.example</a></p>
        </div>
      </div>
    </footer>
  );
}
