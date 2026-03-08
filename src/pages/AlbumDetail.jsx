// src/pages/AlbumDetail.jsx
import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// The Upgraded Interactive Track Row Component (State is controlled by the parent!)
const TrackRow = ({ title, duration, isPlaying, onToggle }) => {
  return (
    <li 
      onClick={onToggle}
      className={`flex items-center gap-4 py-2 px-3 rounded-md cursor-pointer transition-all duration-300 ${
        isPlaying ? 'bg-zinc-900 shadow-inner' : 'hover:bg-zinc-900/50'
      }`}
    >
      <div className={`w-6 h-6 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${
        isPlaying 
          ? 'border-orange-600 bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.5)]' 
          : 'border-zinc-500 hover:border-white'
      }`}>
        {isPlaying ? (
          <svg className="w-3 h-3 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
        ) : (
          <svg className="w-3 h-3 text-zinc-300 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        )}
      </div>
      
      <span className={`font-bold text-[15px] tracking-wide flex-grow transition-colors ${
        isPlaying ? 'text-orange-500' : 'text-zinc-200 hover:text-white'
      }`}>
        {title}
      </span>
      
      {isPlaying ? (
        <span className="text-xs font-bold text-orange-500 uppercase tracking-widest animate-pulse">Playing</span>
      ) : (
        <span className="text-xs text-zinc-500 font-mono font-bold">{duration}</span>
      )}
    </li>
  );
};

export default function AlbumDetail() {
  const { albumId } = useParams();
  const [playingTrackIndex, setPlayingTrackIndex] = useState(null);

  // ✨ 1. Create a reference to the hidden audio player
  const audioRef = useRef(null);

  // ✨ 2. Watch the track index. If it changes, play or pause the audio!
  useEffect(() => {
    if (audioRef.current) {
      if (playingTrackIndex !== null) {
        audioRef.current.currentTime = 0; // Restart song from beginning
        audioRef.current.play().catch(err => console.log("Audio playback blocked:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [playingTrackIndex]);

  const albumDatabase = {
    "luxury-disease": { title: "Luxury Disease", year: "2022" },
    "eye-of-the-storm": { title: "Eye of the Storm", year: "2019" },
    "ambitions": { title: "Ambitions", year: "2017" },
    "35xxxv": { title: "35xxxv", year: "2015" },
    "jinseixboku": { title: "Jinsei×Boku=", year: "2013" },
    "zankyou-reference": { title: "Zankyou Reference", year: "2011" },
    "niche-syndrome": { title: "Niche Syndrome", year: "2010" },
    "kanjo-effect": { title: "Kanjo Effect", year: "2008" },
    "beam-of-light": { title: "Beam of Light", year: "2008" },
    "zeitakubyou": { title: "Zeitakubyou", year: "2007" }
  };

  const currentAlbum = albumDatabase[albumId] || albumDatabase["luxury-disease"];
  const coverImage = `/albums/${albumId}.jpg`;
  
  const tracks = [
    { title: "Save Yourself", duration: "3:17" },
    { title: "Neon", duration: "3:04" },
    { title: "Vandalize", duration: "3:14" },
    { title: "When They Turn the Lights On", duration: "3:27" },
    { title: "Let Me Let You Go", duration: "3:00" },
    { title: "So Far Gone", duration: "3:05" },
    { title: "Prove", duration: "3:46" },
    { title: "Mad World", duration: "3:02" },
    { title: "Free Them (feat. Teddy Swims)", duration: "3:12" },
    { title: "Renegades", duration: "4:04" },
    { title: "Outta Sight", duration: "3:22" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-worksans selection:bg-orange-600/30 flex flex-col">
      
      {/* ✨ 3. The hidden audio element with a safe, royalty-free track */}
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="none" />

      <Navbar />

      <main className="relative flex-grow pt-32 pb-24 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <img src={coverImage} alt="Background" className="w-full h-full object-cover blur-lg scale-110 opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-zinc-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <h2 className="font-oswald text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-wide uppercase">ALBUM DETAIL</h2>
          
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
            <div className="w-full max-w-[450px] shrink-0 shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-zinc-800/80">
              <img src={coverImage} alt={currentAlbum.title} className="w-full h-auto object-cover" />
            </div>

            <div className="w-full flex-grow mt-4 md:mt-0">
              <h3 className="font-worksans text-3xl md:text-4xl text-white mb-4">
                {currentAlbum.title} <span className="text-zinc-400">({currentAlbum.year})</span>
              </h3>
              
              <div className="w-full h-[1px] bg-zinc-500 mb-6"></div>
              
              <ul className="space-y-3.5">
                {tracks.map((track, idx) => (
                  <TrackRow 
                    key={idx} 
                    title={track.title} 
                    duration={track.duration} 
                    isPlaying={playingTrackIndex === idx}
                    onToggle={() => setPlayingTrackIndex(playingTrackIndex === idx ? null : idx)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}