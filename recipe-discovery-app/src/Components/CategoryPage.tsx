import { useParams } from "react-router-dom";
import useFetch from "../CustomHooks/useFetch";
import MealCard from "./MealCard"; // We can reuse this!
import LoadingSpinner from "./LoadingSpinner";
import type { MealResponse } from "../Types";
import { useEffect } from "react";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch<MealResponse>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  useEffect(() => {
    if (categoryName) {
      document.title = `${categoryName} Recipes | FlavorFind`;
    }
  }, [categoryName]);
  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">Could not find recipes.</div>;
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="category-title">{categoryName} Recipes</h1>
        <p>Explore our best {categoryName} dishes</p>
      </header>

      <div className="category-grid">
        {data?.meals?.map((meal) => (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
}
