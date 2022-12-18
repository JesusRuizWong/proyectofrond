import React from 'react'
import Slider from './carousel/components';
import Topcircuits from './topcircuits/Topcircuits';
import TopHotels from './tophotels/TopHotels';
import Info from './info/Info';

export default function Home() { 
  return (
    <div>
        <Slider />
        <Info />
        <Topcircuits />
        <TopHotels />
    </div>
  )
}


