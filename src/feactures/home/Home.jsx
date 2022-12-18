import React from 'react'
import Slider from './carousel/components';
import {collection,getDocs,getDoc,doc,deleteDoc,addDoc, updateDoc} from 'firebase/firestore'
import { db,storage} from '../../services/firebaseConfigs/firebase'
import { useEffect, useState } from 'react'
import { mockedSlides } from './carousel/utils/mockedSlides';
import Topcircuits from './topcircuits/topcircuits';
import TopHotels from './tophotels/TopHotels';
import Info from './info/info';

export default function Home() { 
 console.log(mockedSlides)
  return (
    <div>

        <Slider />
        <Info />
        <Topcircuits />
        <TopHotels />
    </div>
  )
}
