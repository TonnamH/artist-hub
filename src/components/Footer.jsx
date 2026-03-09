// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const YoutubeIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" /></svg>);
const TwitterIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>);
const InstagramIcon = () => (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.069-1.646-.069-4.849 0-3.204.012-3.583.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>);

export default function Footer() {
    return (
        <footer className="bg-black py-16 px-10 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 font-worksans text-zinc-300">
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center justify-center shrink-0">
                        <Link to="/">
                            <img src="/logo.png" alt="ONE OK ROCK Logo" className="w-40 md:w-50 h-auto object-contain" />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wider">
                            {["Home", "News", "About", "Schedule", "Discography"].map(link => {
                                const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
                                return (
                                    <Link key={link} to={path} className="hover:text-orange-600 transition-colors">
                                        {link}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="flex items-center gap-6 text-zinc-500">
                            <a href="https://twitter.com/ONEOKROCK_japan" target="_blank" rel="noreferrer" className="hover:text-white transition-opacity"><TwitterIcon /></a>
                            <a href="https://www.instagram.com/oneokrockofficial/" target="_blank" rel="noreferrer" className="hover:text-white transition-opacity"><InstagramIcon /></a>
                            <a href="https://www.youtube.com/channel/UCzycs8MqvIY4nXWwS-v4J9g" target="_blank" rel="noreferrer" className="hover:text-white transition-opacity"><YoutubeIcon /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center md:items-end border-t border-zinc-800 pt-8 space-y-2 text-xs text-zinc-600">
                    <p className="font-mono">© 10969 INC. All Rights Reserved.</p>
                    <p>(Student Project: Images used for educational purposes only)</p>
                </div>
            </div>
        </footer>
    );
}