import React, { useEffect, useState } from 'react';

export default function RideCard(props) {
  return (
    <div className='ride-card' onClick={props.onClick}>
      <section className="ride-info">
        <h1>{props.name}</h1>
        <img src={props.image} />
      </section>
    </div>
  )
}