// src/components/Contact.jsx
import React from "react";

/**
 * Contact - simple contact form and info block
 * Note: This sample form doesn't submit anywhere — replace with your endpoint/integration.
 */
export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact info */}
      <div className="space-y-4">
        <p className="text-gray-700">Interested in a custom React solution? Send a short message and we'll respond within 1-2 business days.</p>

        <ul className="text-sm text-gray-600 space-y-2">
          <li><strong>Email:</strong> <a href="mailto:hello@manojindustries.example" className="underline">hello@manojindustries.example</a></li>
          <li><strong>Phone:</strong> <a href="tel:+911234567890" className="underline">+91 12345 67890</a></li>
          <li><strong>Location:</strong> Tamil Nadu, India</li>
        </ul>
      </div>

      {/* Simple accessible form */}
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          // In production integrate with your API or email service
          alert("Thanks! Your message is received (demo).");
          e.currentTarget.reset();
        }}
        aria-label="Contact form"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input id="name" name="name" required className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" name="email" required className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" required className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md border border-black px-4 py-2 text-sm font-medium hover:translate-y-[-2px] transition-transform duration-200"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
