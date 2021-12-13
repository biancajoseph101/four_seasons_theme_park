import React, { useEffect, useState } from 'react';
import IntensityCard from '../components/IntensityCard';

export default function Home() {
  return (
    <div>
      <IntensityCard name="Thrill-Seekers" />
      <IntensityCard name="Family-Friendly" />
      <IntensityCard name="Toddlers" />
    </div>
  );
}
