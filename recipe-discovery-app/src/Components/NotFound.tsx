import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
  <div className="not-found-container">
      <div className="not-found-content">
        <span className="error-icon">🍳</span>
        <h1>404</h1>
        <h2>Oops! The kitchen is closed.</h2>
        <p>
          It looks like the recipe you're looking for was burnt to a crisp or never existed in our cookbook.
        </p>
        <Link to="/" className="home-btn">
          Back to the Menu
        </Link>
      </div>
    </div>
  )
}
