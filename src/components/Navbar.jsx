// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // An array of our links to keep the code clean
  const navLinks = ["Home", "News", "Discography", "Schedule", "About"];

  return (
    <nav className="fixed w-full top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="shrink-0" onClick={() => setIsOpen(false)}>
          <img src="/logo.png" alt="ONE OK ROCK" className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Menu (Hidden on mobile, flex on md and up) */}
        <div className="hidden md:flex items-center gap-8 font-worksans font-bold text-sm tracking-widest uppercase">
          {navLinks.map((link) => {
            const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
            return (
              <Link key={link} to={path} className="text-zinc-300 hover:text-orange-600 transition-colors">
                {link}
              </Link>
            );
          })}
        </div>

        {/* Hamburger Button (Visible only on mobile) */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close "X" Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-zinc-950 border-b border-zinc-900 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col items-center gap-6 font-worksans font-bold text-lg tracking-widest uppercase">
          {navLinks.map((link) => {
            const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
            return (
              <Link 
                key={link} 
                to={path} 

                onClick={() => setIsOpen(false)} 
                className="text-zinc-300 hover:text-orange-600 transition-colors w-full text-center"
              >
                {link}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}