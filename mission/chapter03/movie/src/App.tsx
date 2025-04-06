import './App.css'
import MoviePage from './pages/MoviePage';
import { ReactElement } from "react";

function App() : ReactElement {
  console.log(import.meta.env.VITE_TMDB_KEY)
 return (
  <>
    <MoviePage />
  </> 
 )
}

export default App
