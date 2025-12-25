import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../CustomHooks/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
 const handleSearch = (e: React.FormEvent) => {
  e.preventDefault();
  if (searchTerm.trim()) {
    navigate(`/search?q=${searchTerm}`);
    setSearchTerm(''); // Clear the input after searching
  }
};
  return (
    <nav className="recipe-nav">
      <div className="nav-logo">
        <NavLink to="/">🍽️ FlavorFinder</NavLink>
      </div>

      <form className="nav-search" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search recipes..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-submit-btn">🔍</button>
      </form>
        <ul className="nav-links">
        <li><NavLink to="/favorites">My Favs</NavLink></li>
      </ul>
      {/* The Theme Toggle Button */}
       <button className="theme-toggle" onClick={toggleTheme}>
        {/* Logic: If theme is 'light', show Moon (to go dark). If 'dark', show Sun. */}
        {theme === 'light' ? 'Dark 🌙' : 'Light☀️'}
      </button>
    </nav>
  )
}
