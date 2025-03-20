import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api-tmdb';
import MovieCastList from '../MovieCastList/MovieCastList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NoData from '../NoData/NoData';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const castData = await getMovieCast(movieId);
        setCast(castData.cast);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <>
      {cast.length === 0 && <NoData />}
      {cast.length > 0 && (
        <div className={css.container}>
          <h2 className={css.title}>Top cast</h2>
          <MovieCastList cast={cast} />
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}
        </div>
      )}
    </>
  );
}
