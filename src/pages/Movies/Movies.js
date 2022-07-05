import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchFilmQuery } from 'helpers/API';
import { FilmList } from 'components/FilmList.js/FilmList';

//import s from './InputForm.module.css';

const Movies = () => {
  const [film, setFilm] = useState('');
  const [queryResult, setQueryResult] = useState(null);
  const { search } = useLocation();

  const onChangeForm = e => {
    const { value } = e.target;
    setFilm(value);
  };

  const [_, setSearchParams] = useSearchParams();
  console.log(_);

  useEffect(() => {
    if (!search) {
      return;
    }
    const normilizedSearch = search.slice(7);
    fetchFilmQuery(normilizedSearch).then(setQueryResult);
  }, [search]);

  const onSubmitHandler = e => {
    e.preventDefault();
    const normilizedSearchQuery = film.toLowerCase().trim();
    if (!normilizedSearchQuery) {
      return;
    }
    fetchFilmQuery(normilizedSearchQuery).then(setQueryResult);
    setSearchParams(`query=${normilizedSearchQuery}`);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>
          Input film name
          <input
            onChange={onChangeForm}
            type="text"
            name="film"
            value={film}
            required
          />
        </label>

        <button type="submit">Search</button>
      </form>

      {queryResult && <FilmList data={queryResult.results} />}
    </div>
  );
};

export default Movies;
