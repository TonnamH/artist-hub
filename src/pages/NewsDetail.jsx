// src/pages/NewsDetail.jsx
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NewsDetail() {
  // Grab the specific news ID from the URL (e.g., "japan-tour-2025")
  const { newsId } = useParams();

  // Our mini-database 
  const newsDatabase = {
    "japan-tour-2025": { 
      date: "2025.02.17", 
      title: "ONE OK ROCK DETOX JAPAN TOUR 2025", 
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
    },
    "european-tour-2025": { 
      date: "2025.03.14", 
      title: "ONE OK ROCK DETOX European Tour 2025", 
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
    },
    "australia-tour-2026": { 
      date: "2025.07.18", 
      title: "ONE OK ROCK DETOX Australia Tour 2026", 
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
    },
    "na-tour-2025": { 
      date: "2025.07.18", 
      title: "ONE OK ROCK DETOX North American Tour 2025", 
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
    }
  };

  // Find the article, default to the first one if not found
  const article = newsDatabase[newsId] || newsDatabase["japan-tour-2025"];
  
  // The dynamic image path based on the URL parameter!
  const articleImage = `/news/${newsId}.jpg`;

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-worksans selection:bg-orange-600/30 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Header Section with Blurred Background */}
        <section className="relative pt-40 pb-20 overflow-hidden border-b border-zinc-900">
          <div className="absolute inset-0 z-0">
            <img src={articleImage} alt="Background" className="w-full h-full object-cover blur-2xl opacity-20 scale-110" />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
            <p className="text-orange-600 font-bold text-lg mb-4 tracking-wide">{article.date}</p>
            <h1 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-tight">
              {article.title}
            </h1>
          </div>
        </section>

        {/* 2. Article Content Section (max-w-4xl acts as the width anchor) */}
        <section className="max-w-4xl mx-auto px-8 py-16">
          
          {/* Main Article Image Wrapper */}
          {/* ✨ UPDATED ✨: Aspect ratio constraints removed. The div just acts as a container with styles. overflow-hidden is removed to let shadow render correctly without max-height. */}
          <div className="w-full mb-12 border border-zinc-800 shadow-2xl bg-zinc-900">
            {/* ✨ UPDATED ✨: h-auto to maintain natural aspect ratio, object-contain removed to display full image */}
            <img 
              src={articleImage} 
              alt={article.title} 
              className="w-full h-auto object-contain" 
            />
          </div>

          {/* Text Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-300 text-lg leading-relaxed whitespace-pre-wrap text-justify">
              {article.text}
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-20 flex justify-center border-t border-zinc-900 pt-12">
            <Link to="/news" className="px-10 py-3 border-2 border-orange-600 text-orange-600 font-bold text-sm hover:bg-orange-600 hover:text-white transition-colors uppercase font-worksans tracking-wide">
              BACK TO NEWS
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}