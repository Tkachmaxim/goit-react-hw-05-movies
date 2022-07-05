import {
  useParams,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { fetchFilmInfo } from 'helpers/API';
import { Suspense, useEffect, useState, lazy } from 'react';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { FilmCard } from 'components/FilmCard/FilmCard';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import s from './FilmInfo.module.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const FilmInfo = () => {
  const { filmId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  const [path, setPath] = useState('/');
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const pathName = location.state ? location.state.from.location : '/';

    setPath(pathName);
  }, [location.state]);

  console.log(path);
  console.log(location);

  useEffect(() => {
    fetchFilmInfo(filmId)
      .then(data => setFilmInfo(data))
      .catch(error => setError(error));
  }, [filmId]);

  return (
    <>
      <NavLink to={path}>
        <GoBackButton />
      </NavLink>
      {filmInfo && (
        <div className={s.movieInfo}>
          <FilmCard filmInfo={filmInfo} />
          <hr />
          <div className="additional">
            <h1>Additional information</h1>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Rewiews</NavLink>
              </li>
            </ul>
          </div>
          <Suspense>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </div>
      )}
      {!!error && <ErrorComponent />}
    </>
  );
};

export default FilmInfo;
