// src/pages/AlbumDetail.jsx
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TrackRow = ({ title, duration, isPlaying, onToggle }) => {
  return (
    <li onClick={onToggle} className={`flex items-center gap-3 py-1.5 px-3 rounded-md cursor-pointer transition-all duration-300 ${isPlaying ? 'bg-zinc-900 shadow-inner' : 'hover:bg-zinc-900/50'}`}>
      <div className={`w-6 h-6 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${isPlaying ? 'border-orange-600 bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.5)]' : 'border-zinc-500 hover:border-white'}`}>
        {isPlaying ? <svg className="w-3 h-3 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg> : <svg className="w-3 h-3 text-zinc-300 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
      </div>
      <span className={`font-bold text-sm tracking-wide flex-grow transition-colors ${isPlaying ? 'text-orange-500' : 'text-zinc-200 hover:text-white'}`}>{title}</span>
      {isPlaying ? <span className="text-xs font-bold text-orange-500 uppercase tracking-widest animate-pulse">Playing</span> : <span className="text-xs text-zinc-500 font-mono font-bold">{duration}</span>}
    </li>
  );
};

export default function AlbumDetail() {
  const { albumId } = useParams();
  const [playingTrackIndex, setPlayingTrackIndex] = useState(null);
  const audioRef = useRef(null);

  const [reviewData, setReviewData] = useState({ name: '', text: '' });
  const [reviewError, setReviewError] = useState('');
  const [reviewSuccess, setReviewSuccess] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (playingTrackIndex !== null) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => console.log("Audio blocked:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [playingTrackIndex]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviewError('');
    setReviewSuccess(false);

    if (!reviewData.name.trim()) {
      setReviewError('Please enter your name.');
      return;
    }
    if (reviewData.text.length < 10) {
      setReviewError('Your review is too short! Please write at least 10 characters.');
      return;
    }

    setReviewSuccess(true);
    setReviewData({ name: '', text: '' });
  };

  const albumDatabase = {
    "detox": { title: "DETOX", year: "2025" },
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
  
  const detoxTracks = [
    { title: "NASTY", duration: "3:21" },
    { title: "Dystopia", duration: "3:05" },
    { title: "Tropical Therapy", duration: "3:26" },
    { title: "Delusion:All", duration: "3:04" },
    { title: "Party's Over", duration: "2:58" },
    { title: "Puppet Can't Control You", duration: "3:14" },
    { title: "Tiny Pieces", duration: "3:34" },
    { title: "This Can't Be Us", duration: "4:17" },
    { title: "+Matter", duration: "3:42" },
    { title: "C.U.R.I.O.U.S.I.T.Y. (feat. Paledusk)", duration: "3:06" },
    { title: "The Pilot </3", duration: "3:51" },
  ];

  const defaultTracks = [
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

  const tracks = albumId === "detox" ? detoxTracks : defaultTracks;

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-worksans selection:bg-orange-600/30 flex flex-col relative">
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="none" />
      <Navbar />

      {/* ✨ FIX: Changed from fixed to absolute with a set height to prevent screenshot glitches */}
      <div className="absolute top-0 left-0 w-full h-[1200px] z-0 pointer-events-none overflow-hidden">
        <img src={coverImage} alt="Background" className="w-full h-full object-cover blur-3xl scale-125 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/90 to-zinc-950"></div>
      </div>

      <main className="relative z-10 flex-grow pt-32 pb-24 border-b border-zinc-900 w-full">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
            
            <div className="w-full max-w-[450px] shrink-0 md:sticky md:top-32">
              <h2 className="font-oswald text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-wide uppercase">ALBUM DETAIL</h2>
              
              <div className="w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-zinc-800/80">
                <img src={coverImage} alt={currentAlbum.title} className="w-full h-auto object-cover" />
              </div>
            </div>

            <div className="w-full flex-grow mt-4 md:mt-0">
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="font-oswald text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
                  {currentAlbum.title}
                </h3>
                <span className="text-xl md:text-2xl font-bold text-zinc-400">
                  ({currentAlbum.year})
                </span>
              </div>

              <div className="w-full h-[2px] bg-zinc-700/60 mb-6"></div>
              
              <ul className="space-y-3 mb-16">
                {tracks.map((track, idx) => (
                  <TrackRow key={idx} title={track.title} duration={track.duration} isPlaying={playingTrackIndex === idx} onToggle={() => setPlayingTrackIndex(playingTrackIndex === idx ? null : idx)} />
                ))}
              </ul>

              <div className="bg-black/40 border border-zinc-800/50 p-6 rounded-sm mt-8">
                <h4 className="font-oswald text-xl font-bold text-white mb-4 uppercase">Leave a Review</h4>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    value={reviewData.name}
                    onChange={(e) => setReviewData({...reviewData, name: e.target.value})}
                    placeholder="Your Name"
                    className="w-full bg-zinc-900/80 border border-zinc-700 p-3 text-sm text-white focus:outline-none focus:border-orange-600 transition-colors"
                  />
                  <textarea 
                    value={reviewData.text}
                    onChange={(e) => setReviewData({...reviewData, text: e.target.value})}
                    rows="3"
                    placeholder="What did you think of this album? (Min. 10 characters)"
                    className="w-full bg-zinc-900/80 border border-zinc-700 p-3 text-sm text-white resize-none focus:outline-none focus:border-orange-600 transition-colors"
                  ></textarea>

                  {reviewError && <p className="text-red-400 text-xs font-bold">{reviewError}</p>}
                  {reviewSuccess && <p className="text-green-400 text-xs font-bold">Thanks for your review! It has been submitted for moderation.</p>}

                  <button type="submit" className="px-8 py-2.5 bg-zinc-800 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-colors">
                    Post Review
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </main>
      
      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}