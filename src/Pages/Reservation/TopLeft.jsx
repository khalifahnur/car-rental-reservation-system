"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const TopLeft = () => {
  const searchParams = useSearchParams();
  const [bookingDetails, setBookingDetails] = useState({});
  const pricePerHour = 23.3;
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


  const getCarBrand = (name) => {
    if (name && name.includes('Toyota')) {
      return 'Toyota';
    }else if(name && name.includes('Audi')){
      return 'Audi'
    }else if(name && name.includes('BMW')){
      return 'BMW'
    }else if(name && name.includes('Lexus')){
      return 'Lexus'
    }else if(name && name.includes('Mercedes Benz')){
      return 'Mercedes Benz'
    }else{
      return '';
    }
  };

  const carBrand = getCarBrand(bookingDetails.name);

  return (
    <>
      {/* <div className="flex justify-between items-center py-2">
        <h1 className="text-xl font-bold">Booking car</h1>
        <span className="text-xl font-semibold">
          ${pricePerHour.toFixed(2)} / hour
        </span>
      </div> */}

      <div className="flex flex-col">
        <div>
          <div className="relative">
            <Image
              src={bookingDetails.imageUrl}
              alt="Car Image"
              width={1500}
              height={100}
              className="rounded-lg w-fit"
            />
            <div className="flex flex-row justify-between absolute top-0 left-0 py-1 px-3">
              <p className="bg-orange-500 text-white px-2 py-1  rounded">New</p>
              <p className="bg-green-500 text-white px-2 py-1 ml-5 rounded">
                Available
              </p>
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <Image
              src={bookingDetails.imageUrl}
              alt="Car Image"
              width={100}
              height={60}
              className="rounded-lg cursor-pointer"
            />
            <Image
              src={bookingDetails.imageUrl}
              alt="Car Image"
              width={100}
              height={60}
              className="rounded-lg cursor-pointer"
            />
            <Image
              src={bookingDetails.imageUrl}
              alt="Car Image"
              width={100}
              height={60}
              className="rounded-lg cursor-pointer"
            />
            <Image
              src={bookingDetails.imageUrl}
              alt="Car Image"
              width={100}
              height={60}
              className="rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* left bottom section */}
        <div className="mt-4 px-5 mb-2">
          <h2 className="text-lg font-medium">{carBrand}</h2>
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-semibold"> {bookingDetails.name}</h2>
            <div className="gap-2 flex flex-row">
              <span className="text-yellow-400 text-xl font-semibold">★</span>
              <span className="text-xl font-medium">{bookingDetails.rate}</span>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <p className="text-md text-gray-500">Year </p>
            <span className="text-md font-light">{bookingDetails.year}</span>
          </div>
          <hr className="mt-1 mb-1" />
          <div className="flex flex-row justify-between items-center">
            <p className="text-md text-gray-500">Type</p>
            <p className="text-md font-light text-gray-500">Sedan</p>
          </div>
          <hr className="mt-1 mb-1" />
          <div className="flex flex-row justify-between items-center">
            <p className="text-md text-gray-500">Color</p>
            <p className="text-md font-light text-gray-500">Dark Blue</p>
          </div>
          <hr className="mt-1 mb-1" />
          <div className="flex flex-row justify-between items-center">
            <p className="text-md text-gray-500">Per hour</p>
            <p className="text-md font-light text-gray-500">
              {bookingDetails.price
                ? `Ksh.${parseFloat(bookingDetails.price).toFixed(2)}`
                : "Price not available"}
            </p>
          </div>
          <hr className="mt-1 mb-1" />
          <div className="flex flex-row justify-between items-center">
            <p className="text-md text-gray-500">Car insurance</p>
            <p className="text-md font-light text-gray-500">
              Collision Damage Waiver
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopLeft;
