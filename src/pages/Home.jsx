// src/pages/Home.jsx
import { Link } from 'react-router-dom'; // 1. Added this import!
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Buttons';

// 2. Changed the outer <div> to a <Link> and added the 'to' prop
const NewsCard = ({ id, date, title, text }) => (
    <Link to={`/news/${id}`} className="flex flex-col gap-3 font-worksans group cursor-pointer">
        <div className="w-full aspect-[4/5] overflow-hidden rounded-md border border-zinc-800 relative">
            <img
                src={`/news/${id}.jpg`}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent"></div>
        </div>
        <div className="space-y-1.5 px-1">
            <p className="text-sm font-bold text-orange-600">{date}</p>
            <h4 className="text-base font-bold text-white leading-tight transition-colors duration-300 group-hover:text-orange-600">
                {title}
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{text}</p>
        </div>
    </Link>
);

const EventRow = ({ date, title }) => (
    <div className="flex items-center gap-4 py-4 group border-b border-zinc-800/60 last:border-b-0 font-worksans relative cursor-pointer">
        <div className="flex flex-col flex-grow gap-1 whitespace-nowrap">
            <span className="text-orange-600 font-bold text-base">{date}</span>
            <span className="text-white font-bold text-sm tracking-wide transition-colors group-hover:text-orange-400">
                {title}
            </span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-[1.5px] bg-zinc-700 transition-all duration-300 group-hover:bg-orange-600 group-hover:w-[75%] z-0"></div>

        <div className="w-[10%]"></div>
    </div>
);

export default function Home() {
    const events = [
        { date: "Sat, FEB 7", title: "ONE OK ROCK DETOX Asia Tour 2026" },
        { date: "Sat, FEB 21", title: "ONE OK ROCK DETOX Asia Tour 2026" },
        { date: "Sat, FEB 28", title: "ONE OK ROCK DETOX Asia Tour 2026" },
    ];

    const newsItems = [
        { id: "japan-tour-2025", date: "2025.02.17", title: "ONE OK ROCK DETOX JAPAN TOUR 2025", text: "Finally, ONE OK ROCK'S JAPAN TOUR has been announced..." },
        { id: "european-tour-2025", date: "2025.03.14", title: "ONE OK ROCK DETOX European Tour 2025", text: "ONE OK ROCK have announced details for their DETOX European Tour 2025..." },
        { id: "australia-tour-2026", date: "2025.07.18", title: "ONE OK ROCK DETOX Australia Tour 2026", text: "Returning down under for their biggest over Australian Tour, bringing..." },
        { id: "na-tour-2025", date: "2025.07.18", title: "ONE OK ROCK DETOX North American Tour 2025", text: "ONE OK ROCK is gearing up for an electrifying return on the road with their..." },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white font-worksans selection:bg-orange-600/30">

            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-20 flex items-center h-screen min-h-[600px] overflow-hidden group">
                <div className="absolute inset-0 bg-black z-0">
                    <img src="/hero-bg.png" alt="Hero Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="font-oswald text-7xl font-extrabold tracking-tight text-white leading-[1.05]">ONE OK ROCK</h1>
                        <h2 className="text-3xl font-bold text-white leading-snug">11th Album: DETOX</h2>
                        <p className="text-xl text-gray-300">2025.2.21 Release</p>
                        <div className="mt-4">
                            <Link to="/discography">
                                <Button>DETAILS</Button>
                            </Link>
                        </div>

                    </div>
                    <div className="w-full h-full"></div>
                </div>
            </div>

            {/* Upcoming Events Section */}
            <section className="border-t border-zinc-900">

                {/* Top Header - Solid Black with White Accent Line */}
                <div className="bg-black py-8 px-8">
                    <div className="max-w-7xl mx-auto flex items-center">
                        <div className="w-1.5 h-8 bg-white mr-5"></div>
                        <h3 className="font-oswald text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
                            UPCOMING EVENTS
                        </h3>
                    </div>
                </div>

                {/* Bottom Content - Blurred Background Image */}
                <div className="relative py-16 px-8 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/events-bg.jpg"
                            alt="Concert Crowd"
                            className="w-full h-full object-cover blur-sm scale-105"
                        />
                        <div className="absolute inset-0 bg-zinc-950/85"></div>
                    </div>

                    {/* Events List */}
                    <div className="relative z-10 max-w-7xl mx-auto">
                        <div className="space-y-1 mb-12">
                            {events.map((event, index) => <EventRow key={index} {...event} />)}
                        </div>

                        {/* View More Button */}
                        <div className="flex justify-end mt-4">
                            <Link to="/schedule">
                            <button className="px-10 py-3 border-2 border-orange-600 text-orange-600 font-bold text-sm hover:bg-orange-600 hover:text-white transition-colors uppercase font-worksans tracking-wide">
                                VIEW MORE
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="bg-zinc-900 py-24 px-8 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto">
                    <h3 className="font-oswald text-4xl font-extrabold text-white mb-12 tracking-tight uppercase">LATEST NEWS</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {newsItems.map((item, index) => <NewsCard key={index} {...item} />)}
                    </div>
                    {/* 3. Wrapped the Button in a Link to the News list page */}
                    <div className="flex justify-end mt-16">
                        <Link to="/news">
                            <Button>MORE NEWS</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
}