import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../api-tmdb';
import SearchForm from '../../components/SearchForm/SearchForm';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import NoData from '../../components/NoData/NoData';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [noData, setNoData] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('q') ?? '';

  const onSubmitForm = text => {
    const nextParams = new URLSearchParams(searchParams);

    if (text !== '') {
      nextParams.set('q', text);
    } else {
      nextParams.delete('q');
    }

    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (searchQuery === '') return;

    const asyncWrap = async () => {
      try {
        setNoData(false);
        setIsError(false);
        setIsLoading(true);

        const data = await fetchSearchMovie(searchQuery);
        {
          data.total_results === 0 && setNoData(true);
        }
        setMovies(data.results);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrap();
  }, [searchQuery]);

  return (
    <>
      <SearchForm onSubmitForm={onSubmitForm} />
      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {isError && <ErrorMessage />}
      {noData && <NoData />}
    </>
  );
}
