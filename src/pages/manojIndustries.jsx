// ManojIndustries.js
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Code, Cpu, Zap, Shield, Globe, Users, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const ManojIndustries = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Enterprise-grade applications built with cutting-edge technologies and scalable architectures."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Robotics Solutions",
      description: "Advanced robotic systems for automation, manufacturing, and intelligent process optimization."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent systems that learn, adapt, and optimize your business processes automatically."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital infrastructure and sensitive data."
    }
  ];

  const projects = [
    {
      title: "Autonomous Manufacturing Line",
      category: "Robotics",
      description: "Fully automated production system with 99.7% efficiency rate"
    },
    {
      title: "Enterprise Management Platform",
      category: "Software",
      description: "Cloud-native solution serving 10,000+ users globally"
    },
    {
      title: "Smart Warehouse System",
      category: "AI/Robotics",
      description: "Intelligent inventory management with predictive analytics"
    }
  ];

  const handleContactSubmit = () => {
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-white text-xl font-bold">Manoj Industries</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="block bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-center">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Innovating the
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Advanced software solutions and cutting-edge robotics that transform industries and accelerate digital evolution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all transform hover:scale-105 flex items-center gap-2">
                Explore Solutions
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-purple-500/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Floating elements */}
          <div className="relative mt-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: <Globe className="h-12 w-12" />, stat: "50+", label: "Global Clients" },
                { icon: <Cpu className="h-12 w-12" />, stat: "200+", label: "Projects Delivered" },
                { icon: <Users className="h-12 w-12" />, stat: "25+", label: "Expert Engineers" }
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center hover:bg-slate-800/70 transition-all">
                  <div className="text-purple-400 mb-4 flex justify-center">{item.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions spanning software development and advanced robotics systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <a href="#contact" className="text-purple-400 hover:text-purple-300 flex items-center gap-2 font-semibold">
                  Learn More <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformative solutions that showcase our technical excellence and innovation capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300 group">
                <div className="mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <button className="text-purple-400 hover:text-white flex items-center gap-2 font-semibold transition-colors">
                  View Details <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pioneering Tomorrow's Technology Today
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Manoj Industries stands at the forefront of technological innovation, combining deep software expertise with advanced robotics engineering. Our mission is to create intelligent solutions that transform how businesses operate and evolve.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                With a team of world-class engineers and a commitment to excellence, we deliver solutions that don't just meet current needs but anticipate future challenges.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all transform hover:scale-105">
                Learn Our Story
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">5+</div>
                    <div className="text-gray-400">Years Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">99%</div>
                    <div className="text-gray-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-400">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">15+</div>
                    <div className="text-gray-400">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build the Future Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Get in touch with our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-gray-400">contact@manojindustries.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-gray-400">+91 (0) 123-456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-gray-400">Innovation Hub, Tech City</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                ></textarea>
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all transform hover:scale-105"
                  onClick={handleContactSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-white text-xl font-bold">Manoj Industries</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Empowering businesses through innovative software solutions and advanced robotics technology.
            </p>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-gray-500">© 2025 Manoj Industries. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ManojIndustries;