// src/pages/News.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Helper for image placeholders
const getPlaceHolderImg = (width, height, text) => `https://via.placeholder.com/${width}x${height}.png?text=${encodeURIComponent(text)}`;

export default function News() {
    const bgImage = getPlaceHolderImg(1920, 1080, "News Background");

    // Dummy data with Lorem Ipsum for the prototype
    const newsItems = [
        {
            id: "japan-tour-2025",
            date: "2025.02.17",
            title: "ONE OK ROCK DETOX JAPAN TOUR 2025",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: "european-tour-2025",
            date: "2025.03.14",
            title: "ONE OK ROCK DETOX European Tour 2025",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: "australia-tour-2026",
            date: "2025.07.18",
            title: "ONE OK ROCK DETOX Australia Tour 2026",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: "na-tour-2025",
            date: "2025.07.18",
            title: "ONE OK ROCK DETOX North American Tour 2025",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white font-worksans selection:bg-orange-600/30 flex flex-col">
            <Navbar />

            <main className="flex-grow relative pt-32 pb-24">
                {/* Background Setup */}
                <div className="absolute inset-0 z-0">
                    <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black/60 to-zinc-950"></div>
                </div>

                {/* Content Container (Slightly narrower than max-w-7xl to match the Figma text readability) */}
                <div className="relative z-10 max-w-6xl mx-auto px-8">
                    <h2 className="font-oswald text-3xl md:text-4xl font-extrabold text-white mb-12 tracking-wide uppercase">News</h2>

                    <div className="space-y-12">
                        {newsItems.map((item) => (
                            // We're wrapping each item in a Link to prepare for the News Detail page!
                            <Link
                                to={`/news/${item.id}`}
                                key={item.id}
                                className="group flex flex-col md:flex-row gap-8 items-start cursor-pointer border-b border-zinc-800/50 pb-12 last:border-b-0 last:pb-0"
                            >
                                {/* Left Side: Image */}
                                <div className="w-full md:w-[320px] shrink-0 aspect-square overflow-hidden bg-zinc-900 border border-zinc-800">
                                    <img
                                        src={`/news/${item.id}.jpg`}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Right Side: Text Block */}
                                <div className="flex flex-col flex-grow">
                                    <span className="text-orange-600 font-bold text-base mb-2">{item.date}</span>
                                    <h3 className="font-worksans text-2xl font-bold text-white leading-tight mb-4 group-hover:text-orange-500 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed text-justify">
                                        {item.text}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}