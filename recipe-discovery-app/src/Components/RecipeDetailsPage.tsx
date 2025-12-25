import { useParams, useNavigate }  from 'react-router-dom';
import useFetch from '../CustomHooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import type { MealDetailResponse } from '../Types';
import NotFound from './NotFound';

export default function RecipeDetailsPage() {
  const { slug } = useParams(); // 'slug' matches your Route path in AppContainer
  const navigate = useNavigate();
  const { data, loading, error } = useFetch<MealDetailResponse>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`
  );

  const meal = data?.meals?.[0];

  // Helper to extract ingredients and measurements
  const getIngredients = () => {
    if (!meal) return [];
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
     if (typeof ingredient === 'string' && typeof measure === 'string') {
      if (ingredient.trim() !== "") {
        ingredients.push(`${measure.trim()} ${ingredient.trim()}`);
      }
      }
    }
    return ingredients;
  };

  if (loading) return <LoadingSpinner />;
  if (error || !meal){return <NotFound />;}

  return (
    <div className="recipe-detail-container">
     <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Recipes
      </button>
      <div className="recipe-hero">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="hero-img" />
        <div className="hero-overlay">
          <h1>{meal.strMeal}</h1>
          <div className="recipe-badges">
            <span>{meal.strCategory}</span>
            <span>{meal.strArea}</span>
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <aside className="ingredients-section">
          <h2>Ingredients</h2>
          <ul>
            {getIngredients().map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </aside>

        <main className="instructions-section">
          <h2>Instructions</h2>
          <p>{meal.strInstructions}</p>
          {meal.strYoutube && (
            <a href={meal.strYoutube} target="_blank" rel="noreferrer" className="video-btn">
              Watch Tutorial 📺
            </a>
          )}
        </main>
      </div>
    </div>
  );
}