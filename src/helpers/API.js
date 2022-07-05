const API_KEY = '985bc3c757188a382d12315376e2d5f0';

async function fetchWithError(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Some occured'));
}

const fetchTrending = () => {
  getGenres();
  return fetchWithError(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
};

const fetchFilmInfo = movie_id => {
  return fetchWithError(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
};

const fetchFilmCast = movie_id => {
  return fetchWithError(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
};

const fetchFilmQuery = query => {
  return fetchWithError(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
};

const fetchReviews = movieId => {
  return fetchWithError(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
};

async function getGenres() {
  if (localStorage.getItem('genres')) {
    return;
  }

  const genres = await fetchWithError(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );
  localStorage.setItem('genres', JSON.stringify(genres));
}

export {
  fetchTrending,
  fetchFilmInfo,
  fetchFilmCast,
  fetchReviews,
  fetchFilmQuery,
};
