import React, { useEffect, useState } from 'react';
import '../ReviewCard.css'

export default function ReviewCard(props) {
  return (
    <div className='rev-card'>
      <section className='rev-rating'>
        <h1 className='rating'>{props.ratings}</h1>
      </section>
      <section className="rev-info">
        <h2 className='comments'>"{props.comments}"</h2>
        <h4>-{props.name}</h4>
      </section>
    </div>
  )
}