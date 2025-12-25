
export interface CategoryCardProps {
  idCategory: string;
  strCategory: string;     
  strCategoryThumb: string; 
  strCategoryDescription: string; 
}


export interface FavoriteMeal {
  id: string;
  name: string;
  image: string;
}

export interface FavoritesContextType {
  favorites: FavoriteMeal[]; // Changed from string[] to FavoriteMeal[]
  toggleFavorite: (meal: FavoriteMeal) => void; // Combined add/remove into toggle
  isFavorite: (id: string) => boolean;
}


export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}


export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoryResponse {
  categories: Category[];
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export interface MealResponse {
  meals: Meal[];
}

export interface MealCardProps {
  id: string;
  name: string;
  image: string;
}

export interface DetailedMeal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  [key: string]: unknown; // Allows us to loop through strIngredient1, strIngredient2...
}

export interface MealDetailResponse {
  meals: DetailedMeal[];
}