import { useSearchParams } from 'react-router-dom';
import useFetch from '../CustomHooks/useFetch';
import MealCard from './MealCard';
import LoadingSpinner from './LoadingSpinner';

interface SearchResponse {
  meals: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }[] | null;
}

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const { data, loading, error } = useFetch<SearchResponse>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">Search failed. Try again!</div>;

  return (
    <div className="container">
      <header className="page-header">
        <h1>Search Results for "{query}"</h1>
      </header>

      {data?.meals ? (
        <div className="category-grid">
          {data.meals.map((meal) => (
            <MealCard 
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              image={meal.strMealThumb}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No recipes found. Maybe try "Chicken" or "Pasta"?</p>
        </div>
      )}
    </div>
  );
}