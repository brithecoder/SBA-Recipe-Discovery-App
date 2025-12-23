
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import CategoryPage from './Components/CategoryPage'
import FavoritesPage from './Components/FavoritesPage';
import NotFound from './Components/NotFound';
import RecipeDetailsPage from './Components/RecipeDetailsPage';


export default function AppContainer() {
  return (
    <div>
    <Navbar />
    <Routes>
     <Route path ="/" element={<HomePage /> } />
     <Route path ="/category/:categoryName" element={<CategoryPage /> } />
     <Route path ="/favorites" element={<FavoritesPage />} />    
     <Route path ="/recipes/:slug" element={<RecipeDetailsPage />} />
     <Route path ="*" element={<NotFound />} />     
    </Routes>
    </div>
  )
}
