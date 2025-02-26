import { db } from '@/service/firebaseconfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {

  const [userTrips, setuserTrips] = useState([]);
  const navigation = useNavigation();
  useEffect(()=>{
    getUserTrips();
  },[])

  const getUserTrips=async()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    
    if(!user)
    {
      navigation('/');
      return ;
    }   


    const q = query(collection(db,'Ai'), where('userEmail','==',user?.email));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    setuserTrips([]);
    querySnapshot.forEach((doc) => {
      console.log(doc)
      setuserTrips(prevVal=>[...prevVal,doc.data()])
    });

  }

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>My Trips</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-10'>

        {userTrips?.length>0?userTrips.map((trip,index)=>(
          <UserTripCardItem trip={trip} key={index}/>
        )):
        [1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>


          </div>
        ))}
      </div>
    </div>
  )
}

export default MyTrips