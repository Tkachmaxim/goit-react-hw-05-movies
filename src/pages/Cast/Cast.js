import { fetchFilmCast } from 'helpers/API';
import { useEffect } from 'react';
import { useState } from 'react';

const { useParams } = require('react-router-dom');

const Cast = () => {
  const { filmId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchFilmCast(filmId).then(data => setCast(data));
  }, [filmId]);

  return (
    <>
      {cast &&
        cast.cast.map(({ id, profile_path, original_name, character }) => (
          <div key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>{character}</p>
          </div>
        ))}
    </>
  );
};

export default Cast;
