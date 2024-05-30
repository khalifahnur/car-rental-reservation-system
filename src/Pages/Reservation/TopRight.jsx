"use client";
import { useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker, Popup } from "react-map-gl";
import { useRouter, useSearchParams } from "next/navigation";
import { firebaseAuth } from "@/lib/firebase/firebaseConfig";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

const TopRight = () => {
  const [pickUpDate, setPickUpDate] = useState("2024-12-10T08:00");
  const [dropOffDate, setDropOffDate] = useState("2024-12-10T14:00");
  const [hoursDifference, setHoursDifference] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [time,setTime] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const [bookingDetails, setBookingDetails] = useState({});

  useEffect(() => {
    const id = searchParams.get("id");
    const price = searchParams.get("price");
    const name = searchParams.get("name");
    const imageUrl = searchParams.get("imageUrl");
    const year = searchParams.get("year");
    const rate = searchParams.get("rate");

    if (id && price && name && imageUrl && year && rate) {
      setBookingDetails({
        id,
        price,
        name,
        imageUrl,
        year,
        rate,
      });
    }
  }, [searchParams]);

  const pricePerHour = parseFloat(bookingDetails.price);
  const hours = hoursDifference;
  const price = pricePerHour * hours;
  const taxes = 0.00;
  const insurance = 500;
  const totalPrice = price + taxes + insurance;

  useEffect(() => {
    calculateHoursDifference(pickUpDate, dropOffDate);
  }, [pickUpDate, dropOffDate]);

  const calculateHoursDifference = (pickUp, dropOff) => {
    const pickUpTime = new Date(pickUp);
    const dropOffTime = new Date(dropOff);
    const timeDifference = dropOffTime - pickUpTime;
    const hours = timeDifference / (1000 * 60 * 60);
    setHoursDifference(hours);
  };

  const auth = firebaseAuth;
  const postBookings = async () => {
    const BookingsId = uuidv4();
    const userID = auth.currentUser.uid;
    const { id, name, year, } = bookingDetails;

    try {
      const response = await axios.post("/api/bookings", {
        BookingsId,
        id,
        totalPrice,
        carModel: name,
        year,
        userID,
        pickUpDate,
        dropOffDate
      });
      if (response.status === 200) {
        setTime(true)
        setTimeout(()=>{
          router.push('/');
          setTime(false)
        },3000)
        console.log("Successfully stored in db");
      } else {
        console.log("Error storing in db");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  const handleBookings = async () => {
    setLoading(true);
    await postBookings();
    setLoading(false);
  };
  

  return (
    <div className="flex flex-col  ">
      <div className="relative w-full h-64 mb-4">
        <Map
          initialViewState={{
            latitude: -1.286389,
            longitude: 36.817223,
            zoom: 9,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
          <Marker
            latitude={-1.286389}
            longitude={36.817223}
            offsetLeft={-20}
            offsetTop={-10}
            onClick={() => setShowPopup(true)}
          >
            <img
              src={bookingDetails.imageUrl}
              alt="Car Location"
              width={40}
              height={40}
              className="rounded-lg"
            />
            {showPopup && (
              <Popup
                latitude={-1.286389}
                longitude={36.817223}
                closeButton={true}
                closeOnClick={false}
                anchor="top"
                onClose={() => setShowPopup(false)}
              >
                <div>{bookingDetails.name}</div>
              </Popup>
            )}
          </Marker>
        </Map>
      </div>

      <div className="bg-black p-4 rounded-lg text-white ">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="text-lg font-semibold ">Pick-up date and time</h3>
            <input
              type="datetime-local"
              value={pickUpDate}
              onChange={(e) => setPickUpDate(e.target.value)}
              className="w-11/12 mt-2 p-2 border rounded text-black"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold ">Drop-off date and time</h3>
            <input
              type="datetime-local"
              value={dropOffDate}
              onChange={(e) => setDropOffDate(e.target.value)}
              className="w-11/12 mt-2 p-2 border rounded text-black"
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <span>Price:</span>
            <span>Ksh.{price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes:</span>
            <span>Ksh.{taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Insurance:</span>
            <span>Ksh.{insurance.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold mt-2">
            <span>Total price:</span>
            <span>Ksh.{totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={handleBookings} className="bg-blue-600 text-white w-full py-2 mt-4 rounded">
          {loading ? "Processing..." : "Rent car"} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRight;
