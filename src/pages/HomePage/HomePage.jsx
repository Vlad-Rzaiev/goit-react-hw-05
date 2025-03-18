import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api-tmdb';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1 className={css.mainTitle}>Trending now</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
