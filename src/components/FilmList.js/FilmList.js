import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const FilmList = ({ data }) => {
  const { pathname, search } = useLocation();
  const location = pathname + search;

  return data.map(({ original_name, original_title, id }) => (
    <li key={id}>
      <Link
        to={location.search ? `/movies/${id}` : `movies/${id}`}
        state={{ from: { location } }}
      >
        {original_name || original_title}{' '}
      </Link>
    </li>
  ));
};

export { FilmList };

FilmList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      original_name: PropTypes.string,
      original_title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};
