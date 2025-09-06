// src/components/Header.jsx
import React from "react";

/**
 * Header - top navigation bar (mobile-first)
 * - Simple accessible nav
 * - Logo as text (minimalist). Could be replaced by SVG for branding.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto container-max px-4 py-4 flex items-center justify-between">
        {/* Logo (text-first, accessible) */}
        <div className="flex items-center gap-3">
          <span className="sr-only">Manoj Industries</span>
          <a href="/" className="text-black no-underline">
            <h1 className="text-xl font-bold tracking-tight">Manoj Industries</h1>
            <p className="text-xs -mt-1 text-gray-600">React.js • IT Services</p>
          </a>
        </div>

        {/* Primary nav - keep minimal */}
        <nav aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a className="hover:underline focus-visible:underline" href="#services">Services</a></li>
            <li><a className="hover:underline focus-visible:underline" href="#about">About</a></li>
            <li><a className="hover:underline focus-visible:underline" href="#contact">Contact</a></li>
          </ul>

          {/* Mobile simple menu button (non-interactive placeholder - keeps minimal code) */}
          <div className="md:hidden">
            <a href="#contact" className="inline-block text-sm px-3 py-2 border border-black rounded-md">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
