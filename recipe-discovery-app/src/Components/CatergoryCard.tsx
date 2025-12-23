import React from 'react';
import { Link } from 'react-router-dom';
import type { CategoryCardProps } from '../Types';


export default function CategoryCard({ strCategory, strCategoryThumb, strCategoryDescription}: CategoryCardProps) {
  // We truncate the description so the cards stay even in height
  const shortDescription = strCategoryDescription.split('.').slice(0, 1).join('.') + '.';

  return (
    <Link to={`/category/${strCategory.toLowerCase()}`} className="category-card">
      <div className="category-image">
        <img src={strCategoryThumb} alt={strCategory} loading="lazy" />
      </div>
      <div className="category-info">
        <h3>{strCategory}</h3>
        <p>{shortDescription}</p>
        <span className="explore-link">Explore Recipes →</span>
      </div>
    </Link>
  );
}