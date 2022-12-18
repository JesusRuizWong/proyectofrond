import { useState, useEffect } from 'react'
import {collection,getDocs,getDoc,doc,deleteDoc,addDoc, updateDoc} from 'firebase/firestore'
import { db,storage} from '../../../../services/firebaseConfigs/firebase'


  //  export const getItems = async() =>{
  //         const itemsCollection = collection(db,"src")
  //         const data = await getDocs(itemsCollection)
  //         const p = data.docs.map((doc) => ({...doc.data(), id:doc.id }));
  //     return  p   
     
  //        } 

         const getItems = async () => {
          const itemsCollection = collection(db,"carouselBanner")
          const data = await getDocs(itemsCollection)
          const p = await data.docs.map((doc) => ({...doc.data(), id:doc.id }));
          return  p;
        }


        export const  mockedSlides =  await getItems()
  


// export const mockedSlides = [
//   { id: "1", title:"hola1" , imgurl:"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg" },
//   { id: "2", title:"hola2" , imgurl:"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg" },
//   { id: "3", title:"hola3" , imgurl:"https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg" }
// ];
