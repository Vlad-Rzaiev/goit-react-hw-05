import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api-tmdb';
import { useParams } from 'react-router-dom';
import NoData from '../NoData/NoData';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieReviewsList from '../MovieReviewsList/MovieReviewsList';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 && <NoData />}
      {reviews.length > 0 && (
        <div className={css.container}>
          <h2 className={css.title}>User reviews</h2>
          <MovieReviewsList reviews={reviews} />
          {isLoading && <Loader />}
          {isError && <ErrorMessage />}
        </div>
      )}
    </>
  );
}
