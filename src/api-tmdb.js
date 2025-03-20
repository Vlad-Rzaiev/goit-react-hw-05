import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmIwNzFmNDllZDg0ODRmNDQyY2EzOTc1MjBmODUxYiIsIm5iZiI6MTc0MjMxOTEwMy42NjcsInN1YiI6IjY3ZDlhZGZmY2M1OThkZDY5ZWJiNDkzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4y4slY3KOPn802WaWFFv1_1I_7Ln2l7uU2-6voSBInQ';

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const getTrendingMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return resp.data.results;
};

export const getMovieDetails = async movieId => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  return resp.data;
};

export const getMovieCast = async movieId => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );

  return resp.data;
};

export const getMovieReviews = async movieId => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return resp.data;
};
