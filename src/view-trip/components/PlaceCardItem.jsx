import { getPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function PlaceCardItem({place}) {

  console.log(place)

  const[url,setUrl] = useState();

  useEffect(()=>{
    place&&getPlacePhoto();
  },[place])
  const getPlacePhoto=async()=>{
    const data={
      textQuery:place.place
    }
    const result = await getPlaceDetails(data).then(resp=>{

      const photoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[5].name);
      setUrl(photoUrl)
    })
  }

  return ( 
    <Link to= {'https://www.google.com/maps/search/?api=1&query='+place.place} target='_blank' >
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow:md cursor-pointer'>
        <img src={url?url:'/1.jpg'} className='w-[130px] h-[130px] rounded-xl object-cover' />
        <div>
            <h2 className='font-bold text-lg'>{place.place}</h2>
            <p className='text-sm text-gray-400'>{place.details}</p>
            <h2 className='mt-2'>🕰{place.time}</h2>
            {/* <Button size="sm"><FaMapLocation /></Button> */}
        </div>
    
    </div>
    </Link>
  );
};

export default PlaceCardItem;