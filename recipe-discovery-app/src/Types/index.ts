
export interface CategoryCardProps {
  idCategory: string;
  strCategory: string;     
  strCategoryThumb: string; 
  strCategoryDescription: string; 
}


export interface FavoritesContextType {
  favorites: string[]; // Array of Meal IDs (idMeal)
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
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