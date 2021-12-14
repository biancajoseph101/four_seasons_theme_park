import React, { useEffect, useState } from 'react';
import ReviewCard from '../components/ReviewCard';
import SubmitReview from '../components/SubmitReview';

export default function RideDetails(props) {
  return (
    <div>
      <section className="ride-info">
        <h1>{props.name}</h1>
        <img src={props.image} />
        <p>{props.description}</p>
      </section>
      {/* <SubmitReview />
      <ReviewCard /> */}
    </div>
  );
}
