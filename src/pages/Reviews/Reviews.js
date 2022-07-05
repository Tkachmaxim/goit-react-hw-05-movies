import { fetchReviews } from 'helpers/API';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchReviews(filmId).then(({ results }) => setReviews(results));
  }, [filmId]);

  return (
    <>
      {reviews.length ? (
        reviews.map(({ id, author, content }) => (
          <div key={id}>
            <h1>{author}</h1>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};

export default Reviews;
