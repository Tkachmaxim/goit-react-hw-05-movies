import { FilmList } from 'components/FilmList/FilmList';
import { useEffect, useState } from 'react';
import { fetchTrending } from '../../helpers/API';

const Home = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetchTrending().then(({ results }) => setFilms(results));
  }, []);

  return (
    <div>
      <ul>
        Trending today
        {films && <FilmList data={films} />}
      </ul>
    </div>
  );
};

export default Home;
