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
      <h1>4 Seasons Amusement Park</h1>
      <section className="rideCards-container">
        {rides.map((ride) => {
          {
            return (
              <RideCard
                onClick={() => history.push(`/rides/details/${ride._id}`)}
                name={ride.name}
                image={ride.url}
              />
            );
          }
        })}
      </section>
    </div>
  );
}
