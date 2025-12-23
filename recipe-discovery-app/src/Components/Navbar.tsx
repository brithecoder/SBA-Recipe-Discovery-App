import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../CustomHooks/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
 
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Navigate to a search results page with the query
      navigate(`/search/${query}`);
      setQuery('');
    }
  };
  return (
    <nav className="recipe-nav">
      <div className="nav-logo">
        <NavLink to="/">🍽️ FlavorFinder</NavLink>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/categories">Categories</NavLink></li>
        <li><NavLink to="/favorites">My Favs</NavLink></li>
      </ul>

      <form className="nav-search" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search recipes..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      {/* The Theme Toggle Button */}
       <button className="theme-toggle" onClick={toggleTheme}>
        {/* Logic: If theme is 'light', show Moon (to go dark). If 'dark', show Sun. */}
        {theme === 'light' ? 'Dark 🌙' : 'Light☀️'}
      </button>
    </nav>
  )
}
