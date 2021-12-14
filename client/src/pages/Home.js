import React, { useEffect, useState } from 'react';
import RideDetails from '../pages/RideDetails';
import axios from 'axios';

export default function Home() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    getRides();
  }, []);
  const getRides = async () => {
    const res = await axios.get(`http://localhost:3001/api/rides`);
    setRides(res.data.rides);
    console.log(res.data.rides);
    console.log(res.data.rides[1].url);
  };
  return (
    <div>
      {rides.map((ride) => {
        {
          return (
            <RideDetails
              name={ride.name}
              image={ride.url}
              description={ride.description}
            />
          );
        }
      })}
    </div>
  );
}
