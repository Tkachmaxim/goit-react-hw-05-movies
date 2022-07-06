import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const FilmInfo = lazy(() => import('./pages/FilmInfo/FilmInfo'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/*" exact element={<Home />} />
          <Route path="/movies/" exact element={<Movies />} />
          <Route path="movies/:filmId/*" element={<FilmInfo />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
