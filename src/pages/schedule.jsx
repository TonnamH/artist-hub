// src/pages/Schedule.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ScheduleRow = ({ date, title, location, onTicketClick }) => (
  <div className="flex flex-col py-5 group font-worksans">
    <div className="flex items-center gap-4 mb-3">
      <span className="text-orange-600 font-bold text-lg md:text-xl whitespace-nowrap">{date}</span>
      <div className="flex-grow h-[1.5px] bg-orange-700/60 group-hover:bg-orange-500 transition-colors"></div>
    </div>
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
      <h4 className="text-white font-bold text-lg md:text-xl md:w-5/12 leading-tight group-hover:text-orange-400 transition-colors">
        {title}
      </h4>
      <span className="text-white font-bold text-base md:text-lg md:w-4/12">
        {location}
      </span>
      <div className="w-full md:w-3/12 flex md:justify-end">
        <button 
          onClick={onTicketClick}
          className="w-full md:w-auto px-10 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm tracking-wide uppercase transition-colors"
        >
          TICKETS
        </button>
      </div>
    </div>
  </div>
);

export default function Schedule() {
  const [modalOpen, setModalOpen] = useState(false);
  const [vipCode, setVipCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleTicketClick = () => {
    setModalOpen(true);
    setVipCode('');
    setError('');
    setSuccess(false);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!vipCode.trim()) {
      setError('Please enter a pre-sale code.');
      return;
    }
    if (vipCode.toUpperCase() !== 'DETOX26') {
      setError('Invalid Pre-sale Code. Please try again.');
      return;
    }

    setSuccess(true);
  };

  const tourDates = [
    { date: "Sat, FEB 21", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Amhpoe Pak Kret, Thailand" },
    { date: "Fri, FEB 27", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Songpa-gu, South Korea" },
    { date: "Sat, FEB 28", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Songpa-gu, South Korea" },
    { date: "Wed, MAR 4", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Pasay, Philippines" },
    { date: "Sun, MAR 8", title: "ONE OK ROCK DETOX Asia Tour 2026", location: "Singapore, Singapore" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-worksans selection:bg-orange-600/30 flex flex-col relative">
      <Navbar />

      <main className="flex-grow relative pt-32 pb-24">
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
              <ScheduleRow key={idx} {...tour} onTicketClick={handleTicketClick} />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* VIP PRE-SALE MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
          <div className="bg-zinc-900 border border-zinc-800 p-8 w-full max-w-md relative shadow-2xl">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white"
            >
              ✕
            </button>
            <h3 className="font-oswald text-2xl font-bold text-white mb-2 uppercase">Unlock Tickets</h3>
            <p className="text-sm text-zinc-400 mb-6">Enter your 7-character VIP Pre-sale code to access tickets.</p>
            
            {!success ? (
              <form onSubmit={handleCodeSubmit} className="space-y-4">
                <input 
                  type="text" 
                  value={vipCode}
                  onChange={(e) => setVipCode(e.target.value)}
                  placeholder="e.g. DETOX26"
                  maxLength={7}
                  className="w-full bg-zinc-950 border border-zinc-800 p-3 text-white text-center font-bold tracking-widest uppercase focus:outline-none focus:border-orange-600"
                />
                {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
                <button type="submit" className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-wide uppercase transition-colors">
                  Verify Code
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <p className="text-green-500 font-bold text-lg">Code Accepted!</p>
                <p className="text-zinc-300 text-sm">Redirecting to ticketing queue...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}