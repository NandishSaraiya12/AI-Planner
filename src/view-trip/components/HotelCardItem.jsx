import { getPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ hotel }) {
  const [url, setUrl] = useState();

  useEffect(() => {
    hotel && getPlacePhoto();
  }, [hotel]);
  const getPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.name,
    };
    const result = await getPlaceDetails(data).then((resp) => {

      const photoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[5].name
      );
      setUrl(photoUrl);
    });
  };

  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel.hotelName +
          "," +
          hotel?.hotelAddress
        }
        target="_blank"
      >
        <img src={url?url:'/1.jpg'} className="rounded-xl h-[180px] w-full" />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel.name}</h2>
          <h2 className="text-xs text-gray-500">{hotel.address}</h2>
          <h2 className="text-sm">{hotel.price}</h2>
          <h2 className="text-sm">{hotel.rating}</h2>
        </div>
      </Link>
    </div>
  );
}

export default HotelCardItem;
