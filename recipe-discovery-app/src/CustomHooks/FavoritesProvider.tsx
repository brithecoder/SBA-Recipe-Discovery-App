import type { ReactNode } from 'react';
import { FavoritesContext } from './FavoritesContext';
import useLocalStorage from './useLocalStorage'; // Assuming your hook is here
import type { FavoriteMeal } from '../Types';
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Persistence using your custom hook
const [favorites, setFavorites] = useLocalStorage<FavoriteMeal[]>('my-favorites', []);

  const toggleFavorite = (meal: FavoriteMeal) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === meal.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== meal.id);
      }
      return [...prev, meal];
    });
  };

  const isFavorite = (id: string) => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <FavoritesContext.Provider 
      // 3. Make sure these keys match your FavoritesContextType exactly!
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};