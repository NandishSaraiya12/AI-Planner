import { Button } from "@/components/ui/button";
import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { RiShareForwardFill } from "react-icons/ri";

function InfoSection({trip}) {

  const[url,setUrl] = useState();

  useEffect(()=>{
    trip&&getPlacePhoto();
  },[trip])
  const getPlacePhoto=async()=>{
    const data={
      textQuery:trip?.userSelection?.location?.label
    }
    const result = await getPlaceDetails(data).then(resp=>{

      const photoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[5].name);
      setUrl(photoUrl)
    })
  }

  return (
    <div>
      <img
        src={url?url:'/1.jpg'}
        className="h-[340px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              🗓 {trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              💵 {trip.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              ✈ No. of Travelers : {trip.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button>
          <RiShareForwardFill />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
