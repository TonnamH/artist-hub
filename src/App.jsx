// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discography from './pages/Discography';
import AlbumDetail from './pages/AlbumDetail';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import About from './pages/about';
import Schedule from './pages/schedule';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/album/:albumId" element={<AlbumDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsId" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}