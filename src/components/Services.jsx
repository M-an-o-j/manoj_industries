// src/components/Services.jsx
import React from "react";

/**
 * Services - grid of service cards
 * - Mobile-first, expands gracefully for larger screens
 * - Uses semantic <article> elements for each service
 */
const services = [
  {
    id: 1,
    title: "Custom React Applications",
    desc: "Single-page applications, component-driven architectures, SSR/SSG with modern toolchains.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 2,
    title: "UI/UX & Component Systems",
    desc: "Design systems, reusable components, accessibility-first UI patterns.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Performance & Optimization",
    desc: "Code splitting, lazy loading, bundle optimization and runtime performance tuning.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Testing & CI/CD",
    desc: "End-to-end tests, unit tests, and automated pipelines for safe releases.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 12l3 3 9-9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {services.map((s) => (
        <article
          key={s.id}
          className="group rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
          aria-labelledby={`service-${s.id}-title`}
        >
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-white border border-gray-200">
              {/* icon */}
              <div className="text-black">{s.icon}</div>
            </div>

            <div>
              <h3 id={`service-${s.id}-title`} className="text-base font-semibold">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
