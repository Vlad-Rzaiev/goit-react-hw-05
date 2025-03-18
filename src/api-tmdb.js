import axios from 'axios';

const KEY = 'bbb071f49ed8484f442ca397520f851b';
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
