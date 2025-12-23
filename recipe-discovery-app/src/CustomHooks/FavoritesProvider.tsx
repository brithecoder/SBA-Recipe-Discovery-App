import type { ReactNode } from 'react';
import { FavoritesContext } from './FavoritesContext';
import useLocalStorage from './useLocalStorage'; // Assuming your hook is here

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Persistence using your custom hook
  const [favorites, setFavorites] = useLocalStorage<string[]>('my-favorites', []);

  const addToFavorites = (id: string) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter((favId) => favId !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  return (
    <FavoritesContext.Provider 
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};