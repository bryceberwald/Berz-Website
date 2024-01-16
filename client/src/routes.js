import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import GamesPage from './pages/GamesPage/GamesPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        {/* Add more routes as needed */}
        {/* <Route path="/about" element={<ComponentName />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;