import { createContext, useContext } from 'react';
import type { FavoritesContextType  } from '../Types'



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