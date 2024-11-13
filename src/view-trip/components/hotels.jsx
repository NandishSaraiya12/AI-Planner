import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem'

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>Hotels Recommendation</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {trip?.tripData?.hotel_options?.map((hotel,index) => (
                <div key={index} className='hover:scale-105 transition-all cursor-pointer'>
                <HotelCardItem hotel={hotel} />
                </div>
            ))}
        </div>  
    </div>
  )
}

export default Hotels