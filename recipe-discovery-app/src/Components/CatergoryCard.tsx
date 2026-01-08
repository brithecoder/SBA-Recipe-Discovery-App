import { Link } from 'react-router-dom';
import type { CategoryCardProps } from '../Types';


export default function CategoryCard({ strCategory, strCategoryThumb, strCategoryDescription}: CategoryCardProps) {
 
  return (
    <div className="category-card">
      <img src={strCategoryThumb} alt={strCategory} loading="lazy" />
      <div className="category-content">
        <h3>{strCategory}</h3>
        {/* Letting the description define the height of the card */}
        <p>{strCategoryDescription.slice(0, 100)}...</p> 
        <Link className='explore-link' to={`/category/${strCategory}`}>View Category</Link>
      </div>
    </div>
  );
}