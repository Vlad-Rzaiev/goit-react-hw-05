import { format } from 'date-fns';
import css from './MovieInfo.module.css';

export default function MovieInfo({
  movie: {
    title,
    genres,
    homepage,
    overview,
    popularity,
    poster_path,
    production_countries,
    release_date,
    tagline,
    vote_average,
  },
}) {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';
  const POSTER_SIZE = 'w300';
  const getPosterURL = poster_path
    ? `${BASE_IMG_URL}${POSTER_SIZE}${poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';
  const formatDate = format(new Date(release_date), 'd MMMM yyyy');

  return (
    <div className={css.container}>
      <img className={css.img} src={getPosterURL} alt={`${title} poster`} />
      <div className={css.contentWrap}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.tagline}>{tagline}</p>
        <div className={css.genresWrap}>
          {genres.map(genre => (
            <p className={css.genre} key={genre.id}>
              {genre.name}
            </p>
          ))}
        </div>
        <a
          className={css.homepage}
          href={homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Homepage
        </a>
        <div className={css.overviewWrap}>
          <h3 className={css.overviewTitle}>Overview</h3>
          <p className={css.overviewText}>{overview}</p>
        </div>
        <p className={css.rating}>Popularity: {popularity.toFixed(1)}</p>
        <div className={css.countriesWrap}>
          {production_countries.map(countrie => (
            <p className={css.counries} key={countrie.iso_3166_1}>
              {countrie.name}
            </p>
          ))}
        </div>
        <p className={css.date}>
          Release date: <span className={css.dateNumber}>{formatDate}</span>
        </p>
        <p className={css.rating}>Rating: {vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
}
