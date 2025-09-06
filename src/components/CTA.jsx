// src/components/CTA.jsx
import React from "react";

/**
 * CTA - minimal full-width call-to-action
 * Subtle animation when hovering the button.
 */
export default function CTA() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto container-max rounded-lg border border-gray-200 p-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div>
          <h3 className="text-lg font-semibold">Ready to build something great?</h3>
          <p className="mt-2 text-sm text-gray-600">Partner with Manoj Industries for focused React.js engineering and product delivery.</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="inline-block px-4 py-3 border border-black rounded-md font-medium hover:shadow-md transition-shadow">Start a Project</a>
          <a href="#services" className="inline-block px-4 py-3 text-sm">See services</a>
        </div>
      </div>
    </section>
  );
}
