import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Review {
  id: number;
  review: string;
}

const Review: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [review, setReview] = useState<string>('');

  useEffect(() => {
    axios.get<Review[]>('/api/reviews')
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleSubmit = () => {
    axios.post('/api/reviews', { review })
      .then(response => {
        setReviews([...reviews, response.data]);
        setReview('');
      })
      .catch(error => console.error('Error submitting review:', error));
  };

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map(r => (
          <li key={r.id}>{r.review}</li>
        ))}
      </ul>
      <textarea value={review} onChange={e => setReview(e.target.value)} />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

export default Review;