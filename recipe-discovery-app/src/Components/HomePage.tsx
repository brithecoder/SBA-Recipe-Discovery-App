import useFetch from "../CustomHooks/useFetch";
import CategoryCard from "./CatergoryCard";
import type { CategoryResponse } from "../Types";
import LoadingSpinner from "./LoadingSpinner";
export default function HomePage() {
  const { data, loading, error } = useFetch<CategoryResponse>(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (error) return <div className="error-msg">Failed to load recipes.</div>;
  if (loading || !data) return <LoadingSpinner />;
  return (
    <div>
      <div className="home-hero">
        <h1>What's on the menu today?</h1>
        <p>Explore recipes by category</p>
      </div>
      <div className="category-grid">
        {data.categories.map((cat) => (
          <CategoryCard key={cat.idCategory} {...cat} />
        ))}
      </div>
    </div>
  );
}
