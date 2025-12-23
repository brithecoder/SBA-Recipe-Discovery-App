import { createContext, useContext } from 'react';

// Define the shape of our context
export interface FavoritesContextType {
  favorites: string[]; // Array of Meal IDs (idMeal)
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

// 1. Create the Context object
export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// 2. Create the Custom Hook
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};