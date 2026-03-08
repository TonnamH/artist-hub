// src/pages/Schedule.jsx
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// A reusable row component for each tour date
const ScheduleRow = ({ date, title, location }) => {
  // Add a quick state for the ticket button
  const [ticketStatus, setTicketStatus] = useState("TICKETS");

  return (
    <div className="flex flex-col py-5 group font-worksans">
      {/* Top Row: Date and Stretching Orange Line */}
      <div className="flex items-center gap-4 mb-3">
        <span className="text-orange-600 font-bold text-lg md:text-xl whitespace-nowrap">{date}</span>
        <div className="flex-grow h-[1.5px] bg-orange-700/60 group-hover:bg-orange-500 transition-colors"></div>
      </div>
      
      {/* Bottom Row: Event, Location, and Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
        <h4 className="text-white font-bold text-lg md:text-xl md:w-5/12 leading-tight group-hover:text-orange-400 transition-colors">
          {title}
        </h4>
        
        <span className="text-white font-bold text-base md:text-lg md:w-4/12">
          {location}
        </span>
        
        {/* The Interactive Button */}
        <div className="w-full md:w-3/12 flex md:justify-end">
          <button 
            onClick={() => setTicketStatus("SOLD OUT")}
            disabled={ticketStatus === "SOLD OUT"}
            className={`w-full md:w-auto px-10 py-2.5 font-bold text-sm tracking-wide uppercase transition-colors ${
              ticketStatus === "SOLD OUT" 
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700" 
                : "bg-orange-600 hover:bg-orange-500 text-white"
            }`}
          >
            {ticketStatus}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Schedule() {
  // Tour Data mapped exactly from your Figma prototype
  const tourDates = [
    { date: "Sat, FEB 21", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Amhpoe Pak Kret, Thailand" },
    { date: "Fri, FEB 27", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Songpa-gu, South Korea" },
    { date: "Sat, FEB 28", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Songpa-gu, South Korea" },
    { date: "Wed, MAR 4", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Pasay, Philippines" },
    { date: "Sun, MAR 8", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Singapore, Singapore" },
    { date: "Thu, MAR 12", title: "Margaret Court Arena", location: "Melbourne, Australia" },
    { date: "Sat, MAR 14", title: "Hordern Pavilion", location: "Moore Park, Australia" },
    { date: "Sun, MAR 15", title: "The Fortitude Music Hall", location: "Brisbane, Australia" },
    { date: "Sat, APR 25", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Xinyi District, Taiwan" },
    { date: "Sat, MAY 2", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Central, Hongkong" },
    { date: "Sun, MAY 3", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Central, Hongkong" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-worksans selection:bg-orange-600/30 flex flex-col">
      <Navbar />

      <main className="flex-grow relative pt-32 pb-24">
        {/* Subtle Background Texture (Reusing your events-bg for a live concert feel) */}
        <div className="absolute inset-0 z-0">
          <img src="/events-bg.jpg" alt="Background" className="w-full h-full object-cover opacity-10 blur-sm grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <h2 className="font-oswald text-3xl md:text-4xl font-extrabold text-white mb-12 tracking-wide uppercase">
            SCHEDULE
          </h2>
          
          <div className="space-y-2">
            {tourDates.map((tour, idx) => (
              <ScheduleRow key={idx} {...tour} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}