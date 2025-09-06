// src/components/Hero.jsx
import React from "react";

/**
 * Hero - top section with headline and quick CTA
 * Mobile-first layout, accessible and semantic.
 */
export default function Hero() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto container-max flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
        {/* Left: Content */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-3">Trusted React.js Experts</p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Building clean, performant React apps <span className="block text-xl text-gray-600 font-medium mt-2">that scale with your business.</span>
          </h2>

          <p className="mt-6 max-w-lg text-gray-700">
            Manoj Industries crafts modern, maintainable React.js solutions — from design-to-production. We focus on performance, accessibility and reliable engineering workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-black px-4 py-3 text-sm font-medium hover:translate-y-[-2px] transition-transform duration-200"
            >
              Contact Us
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-medium text-gray-700 hover:underline"
            >
              Our services
            </a>
          </div>

          {/* Key stats — minimal */}
          <ul className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
            <li><strong className="text-black">100+</strong> Projects</li>
            <li><strong className="text-black">95%</strong> Client Satisfaction</li>
            <li><strong className="text-black">15+</strong> React Experts</li>
          </ul>
        </div>

        {/* Right: Minimal visual / code-style card */}
        <div className="flex-1 md:max-w-sm">
          {/* Accessible decorative element */}
          <figure aria-hidden="true" className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <pre className="text-sm font-mono overflow-x-auto leading-snug">
{`// Example: small React component
export default function Hello() {
  return <button onClick={() => alert('Hi!')}>Say Hi</button>
}`}
            </pre>
          </figure>
        </div>
      </div>
    </section>
  );
}
