import { useFavorites } from '../CustomHooks/FavoritesContext';
import MealCard from '../Components/MealCard';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <header className="page-header">
        <h1>Your Favorite Recipes</h1>
        <p>You have {favorites.length} {favorites.length === 1 ? 'recipe' : 'recipes'} saved.</p>
      </header>

      {favorites.length > 0 ? (
        <div className="category-grid">
          {favorites.map((meal) => (
            <MealCard 
              key={meal.id} 
              id={meal.id} 
              name={meal.name} 
              image={meal.image} 
            />
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <span className="empty-icon">🍽️</span>
          <h2>Your cookbook is empty</h2>
          <p>Start exploring and heart your favorite recipes to see them here!</p>
          <a href="/" className="home-btn">Browse Recipes</a>
        </div>
      )}
    </div>
  );
}