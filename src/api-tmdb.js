import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmIwNzFmNDllZDg0ODRmNDQyY2EzOTc1MjBmODUxYiIsIm5iZiI6MTc0MjMxOTEwMy42NjcsInN1YiI6IjY3ZDlhZGZmY2M1OThkZDY5ZWJiNDkzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4y4slY3KOPn802WaWFFv1_1I_7Ln2l7uU2-6voSBInQ';

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return resp.data.results;
};

export const fetchMovieDetails = async movieId => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  return resp.data;
};

export const fetchMovieCast = async movieId => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );

  return resp.data;
};

export const fetchMovieReviews = async movieId => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return resp.data;
};

export const fetchSearchMovie = async query => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return resp.data;
};
