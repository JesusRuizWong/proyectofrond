import { useState, useEffect } from 'react'
import {collection,getDocs,getDoc,doc,deleteDoc,addDoc, updateDoc} from 'firebase/firestore'
import { db,storage} from '../../../../services/firebaseConfigs/firebase'



         const getItems = async () => {
          const itemsCollection = collection(db,"circuitsBanner")
          const data = await getDocs(itemsCollection)
          const p = await data.docs.map((doc) => ({...doc.data(), id:doc.id }));
          return  p;
        }


        export const  mockedSlides =  await getItems()
  


