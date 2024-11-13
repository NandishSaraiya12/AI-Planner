import { db } from "@/service/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/infoSection";
import Hotels from "../components/hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";

function Viewtrip() {
  const { tripId } = useParams();

  const [trip, setTrip] = useState();

  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);


  const getTripData = async () => {
    const docRef = doc(db, "Ai", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTrip(docSnap.data());
    } else {
      console.log("No such Document.");
      toast("No trip found.");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {trip ? (
        <>
          <InfoSection trip={trip} /> 
          <Hotels trip={trip} />
          <PlacesToVisit trip={trip} />
          <Footer trip={trip}/>
        </>
      ) : null}
    </div>
  );
}

export default Viewtrip;
