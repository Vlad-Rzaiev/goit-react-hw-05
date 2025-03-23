import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../api-tmdb';
import { nanoid } from 'nanoid';
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

  const id = nanoid();
  const searchQuery = searchParams.get('q') ?? '';
  const searchId = searchParams.get('id') ?? '';

  const onSubmitForm = text => {
    const nextParams = new URLSearchParams(searchParams);

    if (text !== '') {
      nextParams.set('q', text);
      nextParams.set('id', id);
    } else {
      nextParams.delete('q');
      nextParams.delete('id');
    }

    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (searchQuery === '') return;

    const asyncWrap = async () => {
      try {
        setMovies([]);
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
  }, [searchQuery, searchId]);

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
