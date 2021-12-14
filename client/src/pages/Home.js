import React, { useEffect, useState } from 'react';
import RideCard from '../components/RideCard';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Home(props) {
  let history = useHistory();
  const [rides, setRides] = useState([]);

  useEffect(() => {
    getRides();
  }, []);
  const getRides = async () => {
    const res = await axios.get(`http://localhost:3001/api/rides`);
    setRides(res.data.rides);
  };
  return (
    <div>
      <h1>Baggland Rides</h1>
      <section className="rides-Section">
        <div className='grid'>
        {rides.map((ride) => {
          {
            return (
              <RideCard
                key={ride._id}
                onClick={() => history.push(`/rides/details/${ride._id}`)}
                name={ride.name}
                image={ride.url}
              />
            );
          }
        })}
        </div>
      </section>
    </div>
  );
}
