import React, { useState } from 'react'
import CTA from './CTA'
import logo from '../assets/images/manoj_industries.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const nav_items = [
    {
      name: "Home",
      link: "#home"
    },
    {
      name: "Service",
      link: "#service"
    },
    {
      name: "Portfolio",
      link: "#portfolio"
    },
    {
      name: "About Us",
      link: "#aboutus"
    },
    {
      name: "Careers",
      link: "#careers"
    },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="relative bg-white shadow-sm">
      {/* Desktop & Mobile Header */}
      <div className="flex flex-row justify-between items-center px-4 md:px-8 py-4">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <div className="w-[200px] h-10 flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {nav_items.map((item, index) => (
            <a
              key={index}
              className="font-barlow text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              href={item.link}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CTA cta_text="Contact us" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t transition-all duration-300 ease-in-out ${isMobileMenuOpen
        ? 'opacity-100 visible translate-y-0'
        : 'opacity-0 invisible -translate-y-2'
        }`}>
        <nav className="px-4 py-6 space-y-4">
          {nav_items.map((item, index) => (
            <a
              key={index}
              className="block font-barlow text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 border-b border-gray-100 last:border-b-0"
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile CTA */}
          <div className="pt-4">
            <CTA cta_text="Contact us" />
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header