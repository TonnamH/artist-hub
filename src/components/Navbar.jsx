// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const YoutubeIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg>);
const TwitterIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
const InstagramIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.069-1.646-.069-4.849 0-3.204.012-3.583.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full h-20 md:h-24 bg-black z-50 border-b border-black px-4 md:px-8 flex items-center justify-between gap-6 font-oswald text-xs tracking-wider">
            {/* Logo */}
            <Link to="/" className="flex items-center justify-start shrink-0" onClick={() => setIsOpen(false)}>
                <img src="/logo.png" alt="ONE OK ROCK Logo" className="w-20 md:w-40 h-auto object-contain" />
            </Link>

            <div className="hidden md:flex items-center gap-10 ml-auto">
                <div className="flex items-center gap-8 text-white">
                    <Link to="/" className="font-bold hover:text-orange-600 transition-colors">HOME</Link>
                    <Link to="/news" className="font-bold hover:text-orange-600 transition-colors">NEWS</Link>
                    <Link to="/discography" className="font-bold hover:text-orange-600 transition-colors">DISCOGRAPHY</Link>
                    <Link to="/schedule" className="font-bold hover:text-orange-600 transition-colors">SCHEDULE</Link>
                    <Link to="/about" className="font-bold hover:text-orange-600 transition-colors">ABOUT</Link>
                </div>

                <div className="flex items-center gap-6 text-white/80">
                    <a href="https://www.youtube.com/channel/UCzycs8MqvIY4nXWwS-v4J9g" target="_blank" rel="noreferrer" className="hover:text-white transition-opacity"><YoutubeIcon /></a>
                    <a href="https://twitter.com/ONEOKROCK_japan" target="_blank" rel="noreferrer" className="hover:text-white transition-opacity"><TwitterIcon /></a>
                    <a href="https://www.instagram.com/oneokrockofficial/" target="_blank" rel="noreferrer" className="hover:text-white transition-opacity"><InstagramIcon /></a>
                </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
                className="md:hidden text-white hover:text-orange-600 transition-colors p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    // Close 'X' Icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger Menu Icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Dropdown Menu */}
            <div 
                className={`absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 transition-all duration-300 overflow-hidden md:hidden shadow-2xl ${
                    isOpen ? 'max-h-[400px] py-8 border-t border-zinc-900 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
            >
                {/* Mobile Links */}
                <div className="flex flex-col items-center gap-6 text-white text-sm">
                    <Link to="/" onClick={() => setIsOpen(false)} className="font-bold hover:text-orange-600 transition-colors">HOME</Link>
                    <Link to="/news" onClick={() => setIsOpen(false)} className="font-bold hover:text-orange-600 transition-colors">NEWS</Link>
                    <Link to="/discography" onClick={() => setIsOpen(false)} className="font-bold hover:text-orange-600 transition-colors">DISCOGRAPHY</Link>
                    <Link to="/schedule" onClick={() => setIsOpen(false)} className="font-bold hover:text-orange-600 transition-colors">SCHEDULE</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="font-bold hover:text-orange-600 transition-colors">ABOUT</Link>
                </div>

                {/* Mobile Social Icons */}
                <div className="flex items-center gap-8 text-white/80 mt-2">
                    <a href="https://www.youtube.com/channel/UCzycs8MqvIY4nXWwS-v4J9g" target="_blank" rel="noreferrer" className="hover:text-white transition-opacity"><YoutubeIcon /></a>
                    <a href="https://twitter.com/ONEOKROCK_japan" target="_blank" rel="noreferrer" className="hover:text-white transition-opacity"><TwitterIcon /></a>
                    <a href="https://www.instagram.com/oneokrockofficial/" target="_blank" rel="noreferrer" className="hover:text-white transition-opacity"><InstagramIcon /></a>
                </div>
            </div>

        </nav>
    );
}