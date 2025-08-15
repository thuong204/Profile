"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-20 z-50 bg-[rgba(15,15,35,0.98)] backdrop-blur-[20px] border-b border-purple-500/30 shadow-2xl">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full floating-particle opacity-60"></div>
        <div
          className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-indigo-400 rounded-full floating-particle opacity-80"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full floating-particle opacity-70"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-purple-300 rounded-full floating-particle opacity-60"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/6 w-1 h-1 bg-cyan-400 rounded-full floating-particle opacity-50"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-700 flex items-center justify-center shadow-lg border border-purple-400/30 overflow-hidden">
                  <img
                    src="/Thuong.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="block">
                <h2 className="text-xl font-bold animated-gradient-text tracking-wide">
                  Joyce Tran
                </h2>
                <p className="text-sm text-purple-300 font-medium">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center gap-1">
              {[
                { href: "#home", text: "Home" },
                { href: "#experience", text: "Experience" },
                { href: "#skills", text: "Technologies" },
                { href: "#projects", text: "Projects" },
                { href: "#contact", text: "Contact" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-gray-300 hover:text-white overflow-hidden"
                >
                  <span className="relative z-10">{link.text}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl scale-0 hover:scale-100 transition-transform duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Actions - Right Side */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-2 rounded-lg transition-all duration-300 hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2"
                      : "translate-y-0"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 translate-y-2 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "-rotate-45 translate-y-2"
                      : "translate-y-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-[rgba(15,15,35,0.98)] backdrop-blur-[20px] border-t border-purple-500/20">
          {[
            { href: "#home", text: "Home", color: "bg-purple-400" },
            { href: "#experience", text: "Experience", color: "bg-orange-400" },
            { href: "#skills", text: "Technologies", color: "bg-cyan-400" },
            { href: "#projects", text: "Projects", color: "bg-purple-400" },
            { href: "#contact", text: "Contact", color: "bg-emerald-400" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block px-5 py-4 rounded-xl text-lg font-semibold transition-all duration-300 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-indigo-500/10 transform hover:translate-x-2 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${link.color} shadow-lg shadow-purple-400/50`}
                ></div>
                <span>{link.text}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
