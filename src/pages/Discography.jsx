// src/pages/Discography.jsx
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const getPlaceHolderImg = (width, height, text) => `https://via.placeholder.com/${width}x${height}.png?text=${encodeURIComponent(text)}`;

// The Interactive Media Player Component for the Discography Page
    const TrackRow = ({ title, duration, isPlaying, onToggle }) => {
    return (
        <li 
        onClick={onToggle}
        className="flex items-center gap-3 py-1.5 group cursor-pointer"
        >
        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
            isPlaying ? 'border-orange-600 bg-orange-600' : 'border-zinc-400 group-hover:border-white group-hover:bg-white'
        }`}>
            {isPlaying ? (
            <svg className="w-2.5 h-2.5 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
            ) : (
            <svg className="w-2.5 h-2.5 text-white group-hover:text-black transition-colors ml-[1px]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            )}
        </div>
        <span className={`font-bold text-sm tracking-wide transition-colors ${
            isPlaying ? 'text-orange-500' : 'group-hover:text-orange-400'
        }`}>{title}</span>
        <span className="text-xs text-zinc-500 font-mono font-bold ml-1">{isPlaying ? 'PLAYING' : duration}</span>
        </li>
    );
    };

export default function Discography() {
  const latestCover = "/albums/detox.jpg";
  const stageBackground = getPlaceHolderImg(1920, 1080, "Stage Background");

  const [playingTrackIndex, setPlayingTrackIndex] = useState(null);
  
  // ✨ The audio reference and effect for the Discography page
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playingTrackIndex !== null) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => console.log("Audio playback blocked:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [playingTrackIndex]);

  const tracks = [
    { title: "NASTY", duration: "3:21" },
    { title: "Dystopia", duration: "3:05" },
    { title: "Tropical Therapy", duration: "3:26" },
    { title: "Delusion:All", duration: "3:04" },
    { title: "Party's Over", duration: "2:58" },
    { title: "Puppet Can't Control You", duration: "3:14" },
    { title: "Tiny Pieces", duration: "3:34" },
    { title: "This Can't Be Us", duration: "4:17" },
    { title: "+Matter", duration: "3:42" },
    { title: "C.U.R.I.O.U.S.I.T.Y. (feat. Paledusk and CHIHO CARLITO)", duration: "3:06" },
    { title: "The Pilot </3", duration: "3:51" },
  ];

  const albums = [
    { id: "luxury-disease", title: "Luxury Disease", year: "2022" },
    { id: "eye-of-the-storm", title: "Eye of the Storm", year: "2019" },
    { id: "ambitions", title: "Ambitions", year: "2017" },
    { id: "35xxxv", title: "35xxxv", year: "2015" },
    { id: "jinseixboku", title: "Jinsei×Boku=", year: "2013" },
    { id: "zankyou-reference", title: "Zankyou Reference", year: "2011" },
    { id: "niche-syndrome", title: "Niche Syndrome", year: "2010" },
    { id: "kanjo-effect", title: "Kanjo Effect", year: "2008" },
    { id: "beam-of-light", title: "Beam of Light", year: "2008" },
    { id: "zeitakubyou", title: "Zeitakubyou", year: "2007" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-worksans selection:bg-orange-600/30 flex flex-col">
      
      {/* ✨ Hidden audio element */}
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="none" />

      <Navbar />

      <main className="flex-grow">
        <section className="relative pt-32 pb-24 overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0 z-0">
            <img src={latestCover} alt="Background" className="w-full h-full object-cover blur-lg scale-110 opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-zinc-950"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <h2 className="font-oswald text-2xl font-extrabold text-white mb-8 tracking-wide uppercase">LATEST RELEASE</h2>

            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
              <div className="w-full max-w-md shrink-0 shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-zinc-800">
                <img src={latestCover} alt="DETOX Album Cover" className="w-full h-auto object-cover" />
              </div>

              <div className="w-full flex-grow mt-4 md:mt-0">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-oswald text-5xl font-extrabold tracking-tight uppercase">DETOX</h3>
                  <span className="text-2xl font-bold text-zinc-400">(2025)</span>
                </div>

                <div className="w-full h-[2px] bg-zinc-700/60 mb-6"></div>

                <ul className="space-y-3">
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
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={stageBackground} alt="Stage Background" className="w-full h-full object-cover blur-3xl scale-110 opacity-10" />
            <div className="absolute inset-0 bg-zinc-950/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <h2 className="font-oswald text-3xl font-extrabold text-white mb-10 tracking-wide uppercase">ALBUMS</h2>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 md:gap-x-8">
              {albums.map((album, idx) => (
                <Link 
                  to={`/album/${album.id}`} 
                  key={idx} 
                  className="flex flex-col items-center group cursor-pointer w-[45%] sm:w-[30%] md:w-[28%] lg:w-[22%] max-w-[280px]"
                >
                  <div className="w-full aspect-square overflow-hidden mb-4 shadow-xl border border-zinc-800/60 relative">
                    <img
                      src={`/albums/${album.id}.jpg`}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </div>
                  <h4 className="font-worksans font-bold text-base text-center group-hover:text-orange-600 transition-colors">
                    {album.title} <br className="md:hidden" />
                    <span className="font-normal text-zinc-400">({album.year})</span>
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}