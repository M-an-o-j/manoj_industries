// src/components/About.jsx
import React from "react";

/**
 * About - short company profile
 */
export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2">
        <p className="text-gray-700">
          Manoj Industries is a focused React.js development firm that builds production-grade frontends and single-page
          applications for companies that value maintainability and performance. We collaborate closely with product teams
          to deliver well-tested, accessible, and scalable solutions.
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-600">
          <li><strong>Approach:</strong> Component-driven design, type safety, continuous delivery.</li>
          <li><strong>Process:</strong> Discovery → Design → Implementation → Testing → Delivery.</li>
          <li><strong>Quality:</strong> Accessibility (WCAG-aware), performance budgets, extensive automated tests.</li>
        </ul>
      </div>

      <aside aria-label="Company highlights" className="p-6 rounded-lg border border-gray-200">
        <dl>
          <dt className="text-sm text-gray-600">Primary Tech</dt>
          <dd className="font-medium mb-3">React.js • Vite • TypeScript-ready</dd>

          <dt className="text-sm text-gray-600">Engagements</dt>
          <dd className="font-medium mb-3">Consulting • Dedicated teams • Project-based</dd>

          <dt className="text-sm text-gray-600">Contact</dt>
          <dd className="font-medium">hello@manojindustries.example</dd>
        </dl>
      </aside>
    </div>
  );
}
