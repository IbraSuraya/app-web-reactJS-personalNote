import React from "react";
import { Route, Routes } from 'react-router-dom';
import { FiYoutube, FiGithub } from 'react-icons/fi';
import Navigation from './components/Navigation.jsx';
import HomePage from "./pages/HomePage.jsx";
import AddPage from "./pages/AddPage.jsx";
import EditPage from "./pages/EditPage.jsx";
import BookmarkPage from "./pages/BookmarkPage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";

function App() {
  return (
    <div className="app-container">
      <header className="app-container__header">
        <h1>Apilkasi Catatan</h1>
        <Navigation />
      </header>
      <main className="app-container__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </main>
      <footer className="app-container__footer">
        <h5>@2024 - Ibra Suraya</h5>
        <a href="https://www.youtube.com/@IbraSuraya" target="_blank"><FiYoutube /></a>
        <a href="https://github.com/IbraSuraya" target="_blank"><FiGithub /></a>
      </footer>
    </div>
  );
};

export default App;