import { useNavigate } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const navigate = useNavigate();

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li
          className={css.item}
          key={movie.id}
          onClick={() => navigate(`/movies/${movie.id}`)}
        >
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
