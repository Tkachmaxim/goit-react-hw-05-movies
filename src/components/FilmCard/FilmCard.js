import PropTypes from 'prop-types';
import s from '../FilmCard/FilmCard.module.css';

const FilmCard = ({ filmInfo }) => {
  const genresNames = filmInfo.genres.map(({ name }) => name).join(' ');

  return (
    <div className={s.card}>
      <div className={s.image}>
        <img
          src={`https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`}
          alt={filmInfo.original_title}
        />
      </div>

      <div className={s.text}>
        <h1>{filmInfo.original_title}</h1>
        <p>User score: {filmInfo.popularity}%</p>
        <h1>Overwiew</h1>
        <p>{filmInfo.overview}</p>
        <h1>Genres</h1>
        <p>{genresNames}</p>
      </div>
    </div>
  );
};

export { FilmCard };

FilmCard.propTypes = {
  filmInfo: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }),
};
