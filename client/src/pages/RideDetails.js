import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';
import SubmitReview from '../components/SubmitReview';

export default function RideDetails(props) {
  const [selectedRide, setSelectedRide] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getRide = async () => {
    const res = await axios.get(
      `http://localhost:3001/api/rides/details/${props.match.params.rideId}`
    );
    setSelectedRide(res.data.ride);
  };

  const getReviews = async () => {
    const res = await axios.get(`http://localhost:3001/api/reviews`);
    console.log(res.data.reviews);
    setReviews(res.data.reviews);
  };

  useEffect(() => {
    getRide();
    getReviews();
  }, []);

  return selectedRide ? (
    <div>
      <section className="ride-info">
        <h1>{selectedRide.name}</h1>
        <img src={selectedRide.url} />
        <p>{selectedRide.description}</p>
      </section>
      <SubmitReview />
      {reviews.map((review) => {
        {
          return (
            <ReviewCard
              name={review.name}
              comments={review.comments}
              ratings={review.ratings}
            />
          );
        }
      })}
    </div>
  ) : null;
}
