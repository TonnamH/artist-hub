// src/pages/About.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const getPlaceHolderImg = (width, height, text) => `https://via.placeholder.com/${width}x${height}.png?text=${encodeURIComponent(text)}`;

export default function About() {
  const heroImage = "/about-hero.jpg"; 
  const bandImage = "/about-band.jpg"; 

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-worksans selection:bg-orange-600/30 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Cinematic Hero Section */}
        <section className="relative pt-32 pb-24 h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              onError={(e) => e.target.src = getPlaceHolderImg(1920, 1080, "About Hero Placeholder")}
              alt="Live Concert Background" 
              className="w-full h-full object-cover blur-sm opacity-30 scale-105" 
            />
            {/* Dark gradient overlay to blend into the content below */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
          </div>

          <div className="relative z-10 text-center space-y-2 px-8">
            <h1 className="font-oswald text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight shadow-black drop-shadow-lg">
              ABOUT
            </h1>
            <h2 className="font-oswald text-xl md:text-3xl font-bold text-orange-600 uppercase tracking-[0.2em] drop-shadow-md">
              ONE OK ROCK
            </h2>
          </div>
        </section>

        {/* 2. Band Bio Section */}
        <section className="max-w-7xl mx-auto px-8 py-20 md:py-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
            
            {/* Left Side: Band Photo */}
            <div className="w-full lg:w-1/2 shrink-0 group">
              <div className="w-full aspect-[4/3] overflow-hidden border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-zinc-900 relative">
                <img 
                  src={bandImage} 
                  onError={(e) => e.target.src = getPlaceHolderImg(800, 600, "Band Profile Placeholder")}
                  alt="ONE OK ROCK Band Members" 
                  // Here is the hover trick: Grayscale by default, full color on hover!
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Right Side: Biography Text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {/* Little orange accent line */}
              <div className="w-12 h-1.5 bg-orange-600 mb-8"></div>
              
              <div className="prose prose-invert prose-lg max-w-none text-zinc-300 font-worksans leading-relaxed text-justify space-y-6">
                <p>
                  <strong className="text-white font-bold">ONE OK ROCK</strong> is a Japanese rock band formed in 2005 and debuted in 2007. They started with shows at small live houses and summer festivals, and quickly grew in popularity, performing at the iconic Nippon Budokan and eventually headlining large outdoor stadiums, arenas, and dome venues across Japan.
                </p>
                <p>
                  Their success extended beyond Japan after signing a worldwide record deal, allowing them to bring their music to fans in the U.S., Europe, and Asia through numerous headlining tours.
                </p>
                <p>
                  In 2022, they released the album <em className="text-white not-italic font-bold">Luxury Disease</em> and continued to tour extensively. This included opening for MUSE on their world tour, a North American, European, and Asian headlining tour, along with their biggest-ever domestic tour in Japan.
                </p>
                <p>
                  In 2024, the band launched their largest world tour to date, which featured 8 shows in 7 cities, attracting nearly 190,000 fans to mostly sold-out venues.
                </p>
                <p>
                  With their emotional songs and energetic performances, ONE OK ROCK has become a major influence in the music scene, both in Japan and around the world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}