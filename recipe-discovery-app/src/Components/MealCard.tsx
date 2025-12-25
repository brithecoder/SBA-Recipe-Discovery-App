
import { Link } from 'react-router-dom';
import type { MealCardProps, FavoriteMeal } from '../Types';
import { useFavorites } from '../CustomHooks/FavoritesContext';

export default function MealCard({ id, name, image }: MealCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(id);
  
  const handleToggle = (e: React.MouseEvent) => {
  e.preventDefault(); 
  e.stopPropagation(); 
  const mealToSave: FavoriteMeal = { id, name, image };
  toggleFavorite(mealToSave);
};
    return (
   <div className="meal-card">
      <div className="meal-image">
        <img src={image} alt={name} loading="lazy" />
        <button 
          className={`fav-btn ${favorited ? 'active' : ''}`} 
          onClick={handleToggle}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          {favorited ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="meal-info">
        <h3>{name}</h3>
        <Link to={`/recipes/${id}`} className="recipe-link">
          View Recipe
        </Link>
      </div>
    </div>
  );
}
