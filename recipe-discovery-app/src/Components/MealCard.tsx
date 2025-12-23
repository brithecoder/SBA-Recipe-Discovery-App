import React from 'react'
import { Link } from 'react-router-dom';
import type { MealCardProps } from '../Types';


export default function MealCard({ id, name, image }: MealCardProps) {
  return (
    <div className="meal-card">
      <div className="meal-image">
        <img src={image} alt={name} loading="lazy" />
        {/* We'll add a heart button here later for Favorites! */}
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
